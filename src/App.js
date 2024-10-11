import React, { useState } from 'react';
import Header from './components/Header';
import DownloadForm from './components/DownloadForm';
import Result from './components/Result';
import Loading from './components/Loading';
import Footer from './components/Footer';
import CSFloat from './components/CSFloat';

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  return (
    <div className="bg-dark text-gray-100 min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto bg-secondary rounded-2xl shadow-lg overflow-hidden border border-gray-700">
          <div className="p-4 sm:p-6">
            <DownloadForm setLoading={setLoading} setResult={setResult} />
            {loading && <Loading />}
            {result && <Result result={result} />}
          </div>
        </div>
      </main>
      <CSFloat />
      <Footer />
    </div>
  );
}

export default App;