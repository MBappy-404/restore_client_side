import React from 'react';

const Footer = () => {
     return (
          
               <footer className="footer   p-16 bg-teal-200 text-lg text-black font-medium grid grid-cols-2 md:grid-cols-3    ">

                    <div className='m-auto'>
                         <span className="footer-title">Services</span>
                         <a href=' ' className="link link-hover">Roofing</a>
                         <a href=' ' className="link link-hover">Plumbing</a>
                         <a href=' ' className="link link-hover">Electricity</a>
                         <a href=' ' className="link link-hover">Painting</a>
                    </div>
                    <div className='m-auto'>
                         <span className="footer-title">Company</span>
                         <a href=' ' className="link link-hover">About us</a>
                         <a href=' ' className="link link-hover">Contact</a>
                         <a href=' ' className="link link-hover">Jobs</a>
                         <a href=' ' className="link link-hover">Press kit</a>
                    </div>
                    <div className='m-auto'>
                         <span className="footer-title">Legal</span>
                         <a href=' ' className="link link-hover">Terms of use</a>
                         <a href=' ' className="link link-hover">Privacy policy</a>
                         <a href=' ' className="link link-hover">Cookie policy</a>
                         <a href=' ' className="link link-hover">Terms of policy</a>
                    </div>

               </footer>
         
     );
};

export default Footer;