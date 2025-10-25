import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

  };

  return (
    <div className="content-center grid lg:grid-cols-2 items-center gap-16 p-6 mx-auto max-w-5xl max-lg:max-w-2xl bg-white">

      <form className=" lg:ml-auto space-y-4">
        <input type='text' placeholder='Name'
          className="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent" />
        <input type='email' placeholder='Email'
          className="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent" />
        <input type='text' placeholder='Subject'
          className="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent" />
        <textarea placeholder='Message' rows="6"
          className="w-full rounded-md px-4 bg-slate-100 text-slate-900 text-sm pt-3 border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent"></textarea>
        <button type='button'
          className="text-white bg-slate-900 hover:bg-slate-800 tracking-wide rounded-md text-sm font-medium px-4 py-3 w-full cursor-pointer !mt-2 border-0">Send message</button>
      </form>
    </div>
  );
}