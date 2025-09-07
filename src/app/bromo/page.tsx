'use client';

import { useLanguage } from "../context/LanguageContext";

export default function BromoPage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Wisata Gunung</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">{t('home')}</a>
              <a href="/ijen" className="text-gray-700 hover:text-blue-600 font-medium">{t('ijen')}</a>
              <a href="/bromo" className="text-gray-700 hover:text-blue-600 font-medium">{t('bromo')}</a>
              <a href="/tumpak-sewu" className="text-gray-700 hover:text-blue-600 font-medium">{t('tumpakSewu')}</a>
              <a href="/kontak" className="text-gray-700 hover:text-blue-600 font-medium">{t('contact')}</a>
            </nav>
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                    language === 'id' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                    language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  EN
                </button>
              </div>
              <a href="/pemesanan" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                {t('bookTour')}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('bromo')}</h2>
            <p className="text-gray-700 mb-6">
              {language === 'id'
                ? 'Gunung Bromo adalah ikon wisata Jawa Timur dengan pemandangan sunrise yang legendaris. Terletak di Tengger Caldera, gunung ini menawarkan pengalaman mendaki yang menantang dengan reward panorama yang tak terlupakan.'
                : 'Mount Bromo is an icon of East Java tourism with legendary sunrise views. Located in the Tengger Caldera, this mountain offers a challenging climbing experience with unforgettable panoramic rewards.'
              }
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'id' ? 'Atraksi Utama:' : 'Main Attractions:'}
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>{language === 'id' ? 'Sunrise di puncak Penanjakan' : 'Sunrise at Penanjakan Peak'}</li>
              <li>{language === 'id' ? 'Lautan pasir vulkanik yang luas' : 'Vast volcanic sand sea'}</li>
              <li>{language === 'id' ? 'Kawah Bromo yang aktif' : 'Active Bromo crater'}</li>
              <li>{language === 'id' ? 'Gunung Semeru di kejauhan' : 'Mount Semeru in the distance'}</li>
              <li>{language === 'id' ? 'Budaya Tengger yang kaya' : 'Rich Tengger culture'}</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'id' ? 'Informasi Pendakian:' : 'Climbing Information:'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Tinggi:' : 'Height:'} 2.329 mdpl</p>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Durasi:' : 'Duration:'} 1-2 {t('days')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Kesulitan:' : 'Difficulty:'} {language === 'id' ? 'Ringan-Sedang' : 'Easy-Medium'}</p>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Best time:' : 'Best time:'} April - Oktober</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'id' ? 'Paket Wisata:' : 'Tour Package:'}
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-medium text-gray-900">
                {language === 'id' ? 'Paket Sunrise Bromo Adventure' : 'Sunrise Bromo Adventure Package'}
              </p>
              <p className="text-gray-700">
                {language === 'id' ? 'Include: Transport, guide, jeep, accommodation, breakfast' : 'Include: Transport, guide, jeep, accommodation, breakfast'}
              </p>
              <p className="text-2xl font-bold text-blue-600">Rp 800.000/pax</p>
            </div>

            <div className="text-center">
              <a href="/pemesanan" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                {language === 'id' ? 'Pesan Paket Ini' : 'Book This Package'}
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Wisata Gunung. {t('allRightsReserved')}</p>
        </div>
      </footer>
    </div>
  );
}