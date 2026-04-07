import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields");
      return;
    }

    const whatsappMessage = `Hello, I would like to enquire:

// Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "27659507900";

    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div id='contact' className='bg-white w-full relative z-10'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>

        {/* LEFT */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
        >
          <motion.h1 variants={slideUpVariants} className='uppercase text-pink-500 text-2xl'>
            Contact Us
          </motion.h1>

          <motion.h1 variants={slideUpVariants} className='text-4xl sm:text-5xl font-bold text-black uppercase'>
            Ready to build it properly?
          </motion.h1>

          <div className='w-[120px] h-[6px] bg-pink-500'></div>

          <p className='text-lg text-gray-600 mt-6 leading-relaxed max-w-[500px]'>
            Fill in your details below and I'll personally reach back to you to discuss your project.
          </p>
        </motion.div>

        {/* RIGHT (FORM) */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
        >
          <motion.form
            onSubmit={handleSubmit}
            variants={zoomInVariants}
            className='flex flex-col gap-4 w-full'
          >

            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter Full Name'
              className='px-6 py-3 border-2 border-black w-full text-black rounded-lg'
            />

            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Email'
              className='px-6 py-3 border-2 border-black w-full text-black rounded-lg'
            />

            {/* ✅ FIXED: number → tel */}
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Enter Mobile Number'
              className='px-6 py-3 border-2 border-black w-full text-black rounded-lg'
            />

            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows='4'
              placeholder='Your Message'
              className='px-6 py-3 border-2 border-black w-full text-black rounded-lg'
            />

            {/* ✅ FIXED BUTTON */}
            <motion.button
              type="submit"
              variants={zoomInVariants}
              className='cursor-pointer bg-pink-500 hover:bg-black text-black hover:text-white px-10 py-3 rounded-full font-semibold active:scale-95 transition-all duration-150 w-full shadow-lg'
            >
              SUBMIT
            </motion.button>

          </motion.form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;