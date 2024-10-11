import React from 'react';

function Loading() {
  return (
    <div className="text-center py-8">
      <div className="inline-block animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-4 border-b-4 border-primary"></div>
      <p className="mt-4 text-base sm:text-lg">Sedang memproses link Anda...</p>
    </div>
  );
}

export default Loading;