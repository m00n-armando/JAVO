'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from "../context/LanguageContext";

export default function IjenPage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image src="https://i.imgur.com/VMbrjBm.png" alt="JAVO Logo" width={32} height={32} className="w-8 h-8 rounded-full" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">JAVO</h1>
                <p className="text-sm text-gray-600">Java Volcano Odyssey</p>
              </div>
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
          <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('ijen')}</h2>
            <p className="text-gray-700 mb-6">
              {language === 'id'
                ? 'Gunung Ijen terkenal dengan fenomena blue fire yang spektakuler dan Danau Kawah Ijen yang indah. Terletak di perbatasan Jawa Timur dan Bali, gunung ini menawarkan pengalaman pendakian yang unik dengan pemandangan sunrise yang memukau.'
                : 'Mount Ijen is famous for its spectacular blue fire phenomenon and the beautiful Ijen Crater Lake. Located on the border of East Java and Bali, this mountain offers a unique climbing experience with stunning sunrise views.'
              }
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'id' ? 'Atraksi Utama:' : 'Main Attractions:'}
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>{language === 'id' ? 'Blue Fire (Api Biru) - Fenomena vulkanik langka' : 'Blue Fire - Rare volcanic phenomenon'}</li>
              <li>{language === 'id' ? 'Danau Kawah Ijen - Danau asam terbesar di dunia' : 'Ijen Crater Lake - Largest acid lake in the world'}</li>
              <li>{language === 'id' ? 'Sunrise view yang epik' : 'Epic sunrise view'}</li>
              <li>{language === 'id' ? 'Panorama gunung berapi aktif' : 'Active volcano panorama'}</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'id' ? 'Informasi Pendakian:' : 'Climbing Information:'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Tinggi:' : 'Height:'} 2.386 mdpl</p>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Durasi:' : 'Duration:'} 2 {t('daysNights')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Kesulitan:' : 'Difficulty:'} {language === 'id' ? 'Sedang' : 'Medium'}</p>
                <p className="font-medium text-gray-900">{language === 'id' ? 'Best time:' : 'Best time:'} April - Oktober</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'id' ? 'Paket Wisata:' : 'Tour Package:'}
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-medium text-gray-900">
                {language === 'id' ? 'Paket Premium Ijen Blue Fire' : 'Premium Ijen Blue Fire Package'}
              </p>
              <p className="text-gray-700">
                {language === 'id' ? 'Include: Transport, guide, accommodation, breakfast' : 'Include: Transport, guide, accommodation, breakfast'}
              </p>
              <p className="text-2xl font-bold text-blue-600">Rp 1.500.000/pax</p>
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
          <p>&copy; 2024 JAVO - Java Volcano Odyssey. {t('allRightsReserved')}</p>
        </div>
      </footer>
    </div>
  );
}