import React from 'react';

function Header() {
  return (
    <header className="bg-secondary py-4 sm:py-8 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center animated-title">MediaFetch</h1>
        <p className="text-center mt-2 text-sm sm:text-base md:text-lg text-gray-300">
          Unduh video dan gambar dari Instagram, TikTok, Facebook, dan Twitter dengan cepat dan mudah
        </p>
      </div>
    </header>
  );
}

export default Header;