'use client';

import Link from 'next/link';
import { useLanguage } from "../context/LanguageContext";

export default function TumpakSewuPage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">JAVO</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">{t('home')}</Link>
              <Link href="/ijen" className="text-gray-700 hover:text-blue-600 font-medium">{t('ijen')}</Link>
              <Link href="/bromo" className="text-gray-700 hover:text-blue-600 font-medium">{t('bromo')}</Link>
              <Link href="/tumpak-sewu" className="text-gray-700 hover:text-blue-600 font-medium">{t('tumpakSewu')}</Link>
              <Link href="/kontak" className="text-gray-700 hover:text-blue-600 font-medium">{t('contact')}</Link>
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
              <Link href="/pemesanan" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                {t('bookTour')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('tumpakSewu')}</h2>
            <p className="text-gray-700 mb-6">
              {language === 'id'
                ? 'Air Terjun Tumpak Sewu adalah air terjun terbesar di Jawa Timur dengan ketinggian 120 meter. Terletak di Lumajang, air terjun ini menawarkan panorama yang spektakuler dengan formasi bebatuan yang unik dan aliran air yang deras.'
                : 'Tumpak Sewu Waterfall is the largest waterfall in East Java with a height of 120 meters. Located in Lumajang, this waterfall offers spectacular panoramas with unique rock formations and strong water flow.'
              }
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'id' ? 'Atraksi Utama:' : 'Main Attractions:'}
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>{language === 'id' ? 'Air terjun dengan ketinggian 120 meter' : '120 meter high waterfall'}</li>
              <li>{language === 'id' ? 'Kolam alami untuk berenang' : 'Natural pool for swimming'}</li>
              <li>{language === 'id' ? 'Trekking melalui hutan tropis' : 'Trekking through tropical forest'}</li>
              <li>{language === 'id' ? 'Foto spot dengan latar pegunungan' : 'Photo spot with mountain backdrop'}</li>
              <li>{language === 'id' ? 'Panorama sungai yang mengalir deras' : 'Panorama of rushing river'}</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'id' ? 'Informasi Kunjungan:' : 'Visit Information:'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Lokasi:' : 'Location:'} Lumajang, {language === 'id' ? 'Jawa Timur' : 'East Java'}</p>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Durasi:' : 'Duration:'} 1 {t('days')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Tiket Masuk:' : 'Entrance Fee:'} Rp 10.000</p>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Best time:' : 'Best time:'} {language === 'id' ? 'Setelah hujan' : 'After rain'}</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'id' ? 'Paket Wisata:' : 'Tour Package:'}
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-medium text-gray-900">
                {language === 'id' ? 'Paket Tumpak Sewu Adventure' : 'Tumpak Sewu Adventure Package'}
              </p>
              <p className="text-gray-700">
                {language === 'id' ? 'Include: Transport, guide, tiket masuk, makan siang' : 'Include: Transport, guide, entrance ticket, lunch'}
              </p>
              <p className="text-2xl font-bold text-blue-600">Rp 350.000/pax</p>
            </div>

            <div className="text-center">
              <Link href="/pemesanan" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                {language === 'id' ? 'Pesan Paket Ini' : 'Book This Package'}
              </Link>
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