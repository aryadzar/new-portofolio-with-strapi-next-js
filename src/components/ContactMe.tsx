
'use client'

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { api } from '@/utils/api';

const ContactMe = () => {
   // State untuk input form
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
   });

   const [loading, setLoading] = useState(false);


   // Handler untuk mengubah state input
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   // Handler untuk submit form
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
   
      try {
         // Siapkan payload dengan format API
         const payload = {
            data: {
               name: formData.name,
               email_address: formData.email,
               subject: formData.subject,
               message: formData.message,
            },
         };
   
         // Kirim data ke API
         await api.post('/contacts', payload);
   
         // Tampilkan notifikasi sukses
         toast.success('Pesan berhasil dikirim!');
         setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
         });
      } catch (error) {
         // Tampilkan notifikasi error
         toast.error(
            'Terjadi kesalahan saat mengirim pesan. Coba lagi nanti.'
         );
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="flex items-center justify-center min-h-screen">
         <div className=" -z-40 fixed left-[50%] top-[50%] h-[200px] w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>
         <div className="grid md:grid-cols-2 gap-10 max-w-7xl w-full p-6">
            {/* Google Map */}
            <div className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.220533210378!2d105.24162151164008!3d-5.383315794573106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dac0b8d151e3%3A0xe833385ddd262c1a!2sTaman%20Perumahan%20Palapa%20Indah!5e0!3m2!1sen!2sid!4v1732795723692!5m2!1sen!2sid"
                  width="800"
                  allowFullScreen={true}
                  height="600"
                  style={{ border: 0 }}
                  loading="lazy"
               ></iframe>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-opacity-30 rounded-lg shadow-lg space-y-4">
               <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
               />
               <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
               />
               <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
               />
               <textarea
                  name="message"
                  placeholder="Enter Message Here"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
               ></textarea>
               <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6429B6] to-[#2C1250] text-white font-semibold py-3 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-opacity duration-200"
                  disabled={loading}
               >
                  {loading ? 'Sending...' : 'Send Message'}
               </button>
            </form>
            {/* <button 
            className='w-full bg-gradient-to-r from-[#6429B6] to-[#2C1250] text-white font-semibold py-3 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-opacity duration-200'
            onClick={()=> {
               toast.success("berhasil ditekan")
            }}
            >Tesing</button> */}
         </div>
      </div>
   );
};

export default ContactMe;

