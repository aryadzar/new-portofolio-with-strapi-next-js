import React from 'react';

const ContactMe = () => {
   return (
      <div className="flex items-center justify-center min-h-screen ">
         <div className=" -z-40 fixed left-[50%] top-[50%] h-[200px] w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[100%] bg-[#6517be] blur-[90px]"></div>
         <div className="grid md:grid-cols-2 gap-10 max-w-7xl w-full p-6">
            {/* Google Map */}
            <div className="w-full h-[300px] sm:h-[400px]   rounded-lg overflow-hidden shadow-lg">
               {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509243!2d144.96305791531645!3d-37.81362797975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c9cb25181ef!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1681876271047!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe> */}
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
            <form className=" bg-opacity-30 rounded-lg shadow-lg space-y-4">
               <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md  backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
               />
               <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-md backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
               />
               <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-md backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
               />
               <textarea
                  placeholder="Enter Message Here"
                  rows={5}
                  className="w-full p-3 rounded-md backdrop-blur-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
               ></textarea>
               <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6429B6] to-[#2C1250] text-white font-semibold py-3 rounded-md hover:opacity-90 transition-opacity duration-200"
               >
                  Send Message
               </button>
            </form>
         </div>
      </div>
   );
};

export default ContactMe;
