import React from 'react';

function Result({ result }) {
  const renderInstagramResult = (data) => {
    const mediaUrlList = data.url;
    if (mediaUrlList.length === 1 && mediaUrlList[0].includes('.mp4')) {
      return (
        <>
          <div className="flex items-center bg-dark rounded-lg overflow-hidden border border-gray-700 p-4">
            <video controls className="w-24 h-24 rounded-lg mr-4">
              <source src={mediaUrlList[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-primary">Instagram Reels</h2>
            </div>
          </div>
          <div className="flex items-center justify-between bg-dark p-4 rounded-lg hover:bg-gray-800 transition duration-300 border border-gray-700 mt-4">
            <a
              href={mediaUrlList[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold"
            >
              Unduh Video <i className="fas fa-download ml-2"></i>
            </a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex items-center bg-dark rounded-lg overflow-hidden border border-gray-700 p-4">
            <h2 className="text-xl font-semibold mb-2 text-primary">Instagram Post (Slides)</h2>
          </div>
          {mediaUrlList.map((url, index) => (
            <div key={index} className="flex items-center justify-between bg-dark p-4 rounded-lg hover:bg-gray-800 transition duration-300 border border-gray-700 mt-4">
              <img src={url} alt={`Slide ${index + 1}`} className="w-24 h-24 object-cover rounded-lg mr-4" />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold"
              >
                Unduh Gambar {index + 1} <i className="fas fa-download ml-2"></i>
              </a>
            </div>
          ))}
        </>
      );
    }
  };

  const renderFacebookResult = (data) => {
    return (
      <>
        <div className="flex items-center bg-dark rounded-lg overflow-hidden border border-gray-700 p-4">
          <img src={data[0].thumbnail} alt="Thumbnail video" className="w-24 h-24 object-cover rounded-lg mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-primary">Facebook Video</h2>
            <p className="text-gray-300">Resolusi: {data[0].resolution}</p>
          </div>
        </div>
        <div className="flex items-center justify-between bg-dark p-4 rounded-lg hover:bg-gray-800 transition duration-300 border border-gray-700 mt-4">
          <a
            href={data[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold"
          >
            Unduh Video <i className="fas fa-download ml-2"></i>
          </a>
        </div>
      </>
    );
  };

  const renderTikTokResult = (data) => {
    return (
      <>
        <div className="flex items-center bg-dark rounded-lg overflow-hidden border border-gray-700 p-4">
          <img src={data.cover} alt="Thumbnail video" className="w-24 h-24 object-cover rounded-lg mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-primary">{data.title}</h2>
            <p className="text-gray-300">Durasi: {data.duration > 0 ? `${data.duration} detik` : 'N/A'}</p>
          </div>
        </div>
        {data.hdplay && (
          <div className="flex items-center justify-between bg-dark p-4 rounded-lg hover:bg-gray-800 transition duration-300 border border-gray-700 mt-4">
            <div>
              <span className="font-medium text-lg text-gray-200">Video HD</span>
              <p className="text-gray-400 text-sm">Size: {data.hd_size ? data.hd_size.format : 'N/A'}</p>
            </div>
            <a
              href={data.hdplay}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold"
            >
              Unduh HD <i className="fas fa-download ml-2"></i>
            </a>
          </div>
        )}
        {data.play && (
          <div className="flex items-center justify-between bg-dark p-4 rounded-lg hover:bg-gray-800 transition duration-300 border border-gray-700 mt-4">
            <div>
              <span className="font-medium text-lg text-gray-200">Video</span>
              <p className="text-gray-400 text-sm">Size: {data.size ? data.size.format : 'N/A'}</p>
            </div>
            <a
              href={data.play}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold"
            >
              Unduh Video <i className="fas fa-download ml-2"></i>
            </a>
          </div>
        )}
        {data.music && (
          <div className="flex items-center justify-between bg-dark p-4 rounded-lg hover:bg-gray-800 transition duration-300 border border-gray-700 mt-4">
            <div>
              <span className="font-medium text-lg text-gray-200">Musik</span>
            </div>
            <a
              href={data.music}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold"
            >
              Unduh Musik <i className="fas fa-music ml-2"></i>
            </a>
          </div>
        )}
        {data.images && data.images.length > 0 && (
          <>
            <div className="mt-4">
              <span className="font-medium text-lg text-gray-200">Gambar Slide</span>
            </div>
            {data.images.map((image, index) => (
              <div key={index} className="flex items-center justify-between bg-dark p-4 rounded-lg hover:bg-gray-800 transition duration-300 border border-gray-700 mt-4">
                <img src={image} alt={`Gambar ${index + 1}`} className="w-24 h-24 object-cover rounded-lg mr-4" />
                <a
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold"
                >
                  Unduh Gambar {index + 1} <i className="fas fa-image ml-2"></i>
                </a>
              </div>
            ))}
          </>
        )}
      </>
    );
  };

  const renderTwitterResult = (data) => {
    return (
      <>
        <div className="flex items-center bg-dark rounded-lg overflow-hidden border border-gray-700 p-4">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-primary">Twitter {data.type.charAt(0).toUpperCase() + data.type.slice(1)}</h2>
            <p className="text-gray-300">{data.media.length} {data.type}{data.media.length > 1 ? 's' : ''} available</p>
          </div>
        </div>
        {data.type === 'video' ? (
          data.media.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-dark p-4 rounded-lg hover:bg-gray-800 transition duration-300 border border-gray-700 mt-4">
              <div>
                <span className="font-medium text-lg text-gray-200">Video - Kualitas {item.quality}</span>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold"
              >Unduh Video <i className="fas fa-download ml-2"></i>
              </a>
            </div>
          ))
        ) : (
          data.media.map((url, index) => (
            <div key={index} className="flex items-center justify-between bg-dark p-4 rounded-lg hover:bg-gray-800 transition duration-300 border border-gray-700 mt-4">
              <img src={url} alt={`Twitter Image ${index + 1}`} className="w-24 h-24 object-cover rounded-lg mr-4" />
              <div>
                <span className="font-medium text-lg text-gray-200">Gambar {index + 1}</span>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out font-semibold"
              >
                Unduh Gambar <i className="fas fa-download ml-2"></i>
              </a>
            </div>
          ))
        )}
      </>
    );
  };

  if (result.result) {
    return renderInstagramResult(result.result);
  } else if (result.data) {
    return renderFacebookResult(result.data);
  } else if (result.result && result.result.cover) {
    return renderTikTokResult(result.result);
  } else if (result.type) {
    return renderTwitterResult(result);
  }

  return null;
}

export default Result;