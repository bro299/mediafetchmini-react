import React, { useState } from 'react';

function DownloadForm({ setLoading, setResult }) {
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      let apiUrl;
      if (videoUrl.includes('instagram.com')) {
        apiUrl = `https://api.nyxs.pw/dl/ig?url=${encodeURIComponent(videoUrl)}`;
      } else if (videoUrl.includes('facebook.com')) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/fbdl?url=${encodeURIComponent(videoUrl)}`;
      } else if (videoUrl.includes('tiktok.com')) {
        apiUrl = `https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(videoUrl)}`;
      } else if (videoUrl.includes('twitter.com') || videoUrl.includes('x.com')) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/twitter?url=${encodeURIComponent(videoUrl)}`;
      } else {
        throw new Error('URL tidak didukung.');
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.status) {
        setResult(data);
      } else {
        throw new Error('Gagal mengambil informasi media.');
      }
    } catch (error) {
      alert('Terjadi kesalahan: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setVideoUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow relative">
          <input
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Tempel URL video Instagram, TikTok, atau Facebook di sini"
            required
            className="w-full px-4 py-3 pr-12 rounded-lg bg-dark border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 text-sm sm:text-base"
          />
          <button
            type="button"
            onClick={handlePaste}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
          >
            <i className="fas fa-paste text-xl"></i>
          </button>
        </div>
        <button
          type="submit"
          className="px-6 sm:px-8 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold text-sm sm:text-base"
        >
          Unduh <i className="fas fa-download ml-2"></i>
        </button>
      </div>
    </form>
  );
}

export default DownloadForm;