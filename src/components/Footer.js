import React from 'react';

function Footer() {
  return (
    <footer className="bg-secondary py-4 sm:py-6 border-t border-gray-700">
      <div className="scrolling-text-container py-2">
        <div className="scrolling-text text-sm text-gray-300">
          Catatan: untuk fitur fitur yang sebelumnya ada dan saat ini tidak ada akan tersedia kembal jika ada update pada server • Terimakasih telah menggunakan website ini!
        </div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 MediaFetch</p>
        <div className="mt-2 space-x-2 sm:space-x-4 text-sm sm:text-base">
          <a href="#" className="text-gray-400 hover:text-primary transition duration-300">Kebijakan Privasi</a>
          <a href="#" className="text-gray-400 hover:text-primary transition duration-300">Syarat dan Ketentuan</a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.instagram.com/beginneer.noob/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://github.com/Beginneernoob" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;