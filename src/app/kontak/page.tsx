'use client';

import Link from 'next/link';
import { useLanguage } from "../context/LanguageContext";

export default function KontakPage() {
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
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'id' ? 'Nama Lengkap' : 'Full Name'}
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'id' ? 'Nomor Telepon' : 'Phone Number'}
                </label>
                <input
                  type="tel"
                  id="telepon"
                  name="telepon"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'id' ? 'Pesan' : 'Message'}
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={language === 'id' ? 'Tulis pesan Anda di sini...' : 'Write your message here...'}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {language === 'id' ? 'Kirim Pesan' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              {language === 'id' ? 'Informasi Kontak' : 'Contact Information'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-medium w-20 text-gray-900">{language === 'id' ? 'Alamat:' : 'Address:'}</span>
                <span className="text-gray-700">Jl. Wisata Gunung No. 123, Malang, Jawa Timur</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-20 text-gray-900">{language === 'id' ? 'Telepon:' : 'Phone:'}</span>
                <span className="text-gray-700">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-20 text-gray-900">Email:</span>
                <span className="text-gray-700">info@wisatagunung.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-20 text-gray-900">{language === 'id' ? 'Jam:' : 'Hours:'}</span>
                <span className="text-gray-700">{language === 'id' ? 'Senin - Jumat: 08.00 - 17.00 WIB' : 'Monday - Friday: 08.00 - 17.00 WIB'}</span>
              </div>
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