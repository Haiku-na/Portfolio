import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="text-white flex flex-col md:flex-row justify-center items-center w-full h-full text-white px-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 bg-gray-800 shadow-lg rounded-2xl p-4 border border-gray-800" >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Contactez-moi
        </h2>

        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} className="w-full rounded-md py-3 px-4 bg-gray-600 text-white text-sm border border-gray-700 focus:border-gray-400 outline-none placeholder-gray-500 transition"/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full rounded-md py-3 px-4 bg-gray-600 text-white text-sm border border-gray-700 focus:border-gray-400 outline-none placeholder-gray-500 transition" />
        <input type="text" name="subject" placeholder="Sujet" value={formData.subject} onChange={handleChange} className="w-full rounded-md py-3 px-4 bg-gray-600 text-white text-sm border border-gray-700 focus:border-gray-400 outline-none placeholder-gray-500 transition"/>
        <textarea name="message" placeholder="Message" rows="6" value={formData.message} onChange={handleChange} className="w-full rounded-md px-4 py-3 bg-gray-600 text-gray-200 text-sm border border-gray-700 focus:border-gray-400 outline-none resize-none placeholder-gray-500 transition"></textarea>
        <button type="submit" className="text-white bg-gray-900 hover:bg-gray-800 rounded-md text-sm font-medium px-4 py-3 w-full transition" >
          Envoyer le message
        </button>
      </form>

      <div className="flex flex-col items-center md:items-start gap-6 mt-10 md:mt-0 md:ml-12">
        <a href="https://www.linkedin.com/in/appoline-vautrin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition" >
          <img src="/contact/linkedin.png" alt="linkedin" className="w-10 h-10 p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition" />
          <span className="font-medium">Mon LinkedIn</span>
        </a>
        <div className="flex items-center gap-3 text-gray-300">
          <img src="/contact/email.png" alt="mail" className="w-10 h-10 p-2 bg-gray-800 rounded-full transition" />
          <span className="font-medium">appoline.vautrin@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
