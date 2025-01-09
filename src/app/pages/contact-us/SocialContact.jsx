// components/SocialContact.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const SocialContact = ({ addressinfo }) => {
  return (
    <section className="bg-green-100 py-5">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg  mb-8">
          Follow us on social media to stay updated!
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a
            href={addressinfo?.facebook || "https://facebook.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 p-4 rounded-full shadow-md hover:scale-110 transform transition-all duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href={addressinfo?.twitter || "https://twitter.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-400 p-4 rounded-full shadow-md hover:scale-110 transform transition-all duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href={addressinfo?.linkedin || "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 p-4 rounded-full shadow-md hover:scale-110 transform transition-all duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 p-4 rounded-full shadow-md hover:scale-110 transform transition-all duration-300"
          >
            <FaGithub size={24} />
          </a> */}
          <a
            href={addressinfo?.instagram || "https://instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-500 p-4 rounded-full shadow-md hover:scale-110 transform transition-all duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href={addressinfo?.youtube || "https://youtube.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 p-4 rounded-full shadow-md hover:scale-110 transform transition-all duration-300"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialContact;
