import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#005197] text-gray-100 px-6 py-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl text-white font-bold mb-4">Ready to Build With Us?</h2>
        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-200 transition">
          BOOK A FREE CONSULTATION
        </button>
      </div>

      <hr className="border-white mb-10" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Digital Strategy</a></li>
            <li><a href="#">Branding & Identity</a></li>
            <li><a href="#">Automation & Integration</a></li>
            <li><a href="#">Search Engine Optimization</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-white">
            <li><a href="/contact">Join Our Team</a></li>
            <li><a href="#"> Make Payments</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Connect with Us</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-white text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Aladinn Technologies Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
