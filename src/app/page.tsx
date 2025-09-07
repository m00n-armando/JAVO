'use client';

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="JAVO Logo" className="w-10 h-10 rounded-full" />
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
              <Link href="/pemesanan" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                {t('bookTour')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">{t('exploreBeauty')}</h2>
            <h3 className="text-3xl md:text-4xl font-semibold mb-8">{t('mountainsEastJava')}</h3>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              {t('unforgettableExperience')}
            </p>
            <div className="space-x-4">
              <Link href="/pemesanan" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition duration-300">
                {t('bookNow')}
              </Link>
              <Link href="#destinasi" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition duration-300">
                {t('viewDestinations')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('whyChooseUs')}</h3>
            <p className="text-lg text-gray-700">{t('experience')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/logo.png" alt="Experienced Guide" className="w-8 h-8 rounded-full" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">{t('experiencedGuide')}</h4>
              <p className="text-gray-700">{t('experiencedGuideDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/logo.png" alt="Best Price" className="w-8 h-8 rounded-full" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">{t('bestPrice')}</h4>
              <p className="text-gray-700">{t('bestPriceDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/logo.png" alt="Guaranteed Safety" className="w-8 h-8 rounded-full" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">{t('guaranteedSafety')}</h4>
              <p className="text-gray-700">{t('guaranteedSafetyDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinasi" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('featuredDestinations')}</h3>
            <p className="text-lg text-gray-700">{t('discoverBeauty')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ijen */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">{t('ijen')}</h4>
                <p className="text-gray-700 mb-4">{t('blueFire')}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">Rp 1.500.000</span>
                  <span className="text-sm text-gray-600">2 {t('daysNights')}</span>
                </div>
                <Link href="/ijen" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center block">
                  {t('viewDetail')}
                </Link>
              </div>
            </div>

            {/* Bromo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">{t('bromo')}</h4>
                <p className="text-gray-700 mb-4">{t('legendarySunrise')}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">Rp 800.000</span>
                  <span className="text-sm text-gray-600">1-2 {t('days')}</span>
                </div>
                <Link href="/bromo" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center block">
                  {t('viewDetail')}
                </Link>
              </div>
            </div>

            {/* Tumpak Sewu */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">{t('tumpakSewu')}</h4>
                <p className="text-gray-700 mb-4">{t('largestWaterfall')}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">Rp 350.000</span>
                  <span className="text-sm text-gray-600">1 {t('days')}</span>
                </div>
                <Link href="/tumpak-sewu" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center block">
                  {t('viewDetail')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">{t('readyAdventure')}</h3>
          <p className="text-xl text-blue-100 mb-8">{t('contactNow')}</p>
          <div className="space-x-4">
            <Link href="/pemesanan" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition duration-300">
              {t('bookTour')}
            </Link>
            <Link href="/kontak" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
              {t('contactUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="JAVO Logo" className="w-8 h-8 rounded-full" />
                <h4 className="text-xl font-bold">JAVO</h4>
              </div>
              <p className="text-gray-300">Java Volcano Odyssey - Your Gateway to East Java's Natural Wonders</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">{t('destinations')}</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/ijen" className="hover:text-white transition duration-200">{t('ijen')}</Link></li>
                <li><Link href="/bromo" className="hover:text-white transition duration-200">{t('bromo')}</Link></li>
                <li><Link href="/tumpak-sewu" className="hover:text-white transition duration-200">{t('tumpakSewu')}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">{t('services')}</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/pemesanan" className="hover:text-white transition duration-200">{t('tourBooking')}</Link></li>
                <li><Link href="/kontak" className="hover:text-white transition duration-200">{t('contactUsFooter')}</Link></li>
                <li><a href="tel:+6281234567890" className="hover:text-white transition duration-200">{t('whatsapp')}</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">{t('contactUsFooter')}</h5>
              <div className="space-y-2 text-gray-300">
                <p>Jl. Wisata Gunung No. 123</p>
                <p>Malang, Jawa Timur</p>
                <p>+62 812-3456-7890</p>
                <p>info@wisatagunung.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 JAVO - Java Volcano Odyssey. {t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
