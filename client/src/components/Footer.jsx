import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 px-2 py-1 rounded mr-2">SIU</span>
              Saroj International University
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering minds, transforming lives through excellence in education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 border-b border-blue-600 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Academics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Campus Life</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 border-b border-blue-600 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400" />
                <span>Saroj University Campus, Lucknow, Uttar Pradesh 226002</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <a href='tel:9513731275'>+91 9513731275</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href='mailto:admission@sarojuniversity.edu.in'>admission@sarojuniversity.edu.in</a>
              </li>
            </ul>
          </div>

         
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Saroj International University, Lucknow. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;