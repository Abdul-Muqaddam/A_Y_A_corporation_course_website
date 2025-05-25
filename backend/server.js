const express = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config();

const jwt =require("jsonwebtoken")
const bycrypt=require("bcrypt")
const cors = require('cors')
const User = require('./models/users')
const app = express();
const port = 3000;



app.use(cors());

app.use(express.json())



mongoose.connect("mongodb+srv://chandansar444999:admin@cluster0.mt6taz0.mongodb.net/my-db")
    .then(() => {

        app.post("/api/auth/login", async (req, res) => {
            try {
                const email =req.body.email.trim()
                const pass =req.body.pass.trim()



                // const { email, pass } = req.body
                const isUserExsiste = await User.findOne({ email })
                if (!isUserExsiste) {
                    return res.status(400).json({
                        error: isUserExsiste
                    })
                }
                const checkhashedPassword= await bycrypt.compare(pass,isUserExsiste.pass)
                if (!checkhashedPassword) {
                    return res.status(401).json({
                        error: "Password is incorrect"
                    })
                }
                
                const token =jwt.sign(
                    { id: isUserExsiste._id,name:isUserExsiste.uname,email:isUserExsiste.email},
                    process.env.JWT_SECRET,
                    {expiresIn : "1h"}
                )
                
                
                return res.status(200).json(
                    {
                        token,
                    }
                )
                
            } catch (error) {
                console.log(error)
                res.status(500).json({
                    error:"Internel Server Error"
                })
            }
        })
        app.post('/api/auth/register', async (req, res) => {
            try {
                const { fname, lname, uname, email, pass } = req.body

                const exsistingUser = await User.findOne({ email })
                console.log(exsistingUser)
                if (exsistingUser) {
                    res.status(400).json(
                        {
                            error: "User already exsiste"
                        }
                    )
                }
                else {
                    
                    const saltRound=10
                    const hashedPassword=await bycrypt.hash(pass,saltRound)


                    const newUser = new User({ fname, lname, uname, email, pass:hashedPassword })
                    await newUser.save()


                    res.status(201).json({ message: "User registered succesfully", user: newUser })
                }
            } catch (error) {
                res.status(500).json({ error: "server error" })
            }
        });


        app.get("/",(req,res)=>{
            res.send("this is working")
        })

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => console.error('DB connection error:', err))