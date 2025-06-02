import React, { useRef, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import emailjs from '@emailjs/browser';
const ContactUs = () => {
    const formRef = useRef(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false)
    // Simple validation
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setLoading(true)
            // Here you would typically send the form data to your backend or email service
            console.log("Form submitted:", formData);


            try {
                await emailjs.sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    formRef.current,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                setSuccessMessage(
                    "Thank you for contacting us! We will get back to you shortly."
                );
                setFormData({ name: "", email: "", message: "" });
            } catch (error) {
                console.log("Email js Error", error)
            }
            finally {
                setLoading(false)
            }

        }
    };

    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
                    Contact Us
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    We'd love to hear from you! Please fill out the form below or reach us
                    using the contact details.
                </p>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Contact Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="flex-1 bg-white p-6 rounded shadow-md"
                        noValidate
                    >
                        {successMessage && (
                            <p className="mb-4 text-green-600 font-semibold">
                                {successMessage}
                            </p>
                        )}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block mb-1 font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"
                                    } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block mb-1 font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"
                                    } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block mb-1 font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"
                                    } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded transition-colors"
                        >
                            {loading?"Sending...":"Send Message"} 
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="flex-1 bg-indigo-50 p-6 rounded shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                        <p className="mb-2">
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:abdul.muqaddam.se@gmail.com"
                                className="text-indigo-600 underline"
                            >
                                abdul.muqaddam.se@gmail.com
                            </a>
                        </p>
                        <p className="mb-2">
                            <strong>Phone:</strong> +92-328-4919177
                        </p>
                        <p className="mb-2">
                            <strong>Address:</strong> Inside Bohar gate Multan,Pakistan
                        </p>
                        <p className="mt-6">
                            You can also reach us via our social media channels in the footer.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ContactUs;
