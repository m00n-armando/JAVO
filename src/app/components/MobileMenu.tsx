"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import { useLanguage } from "../context/LanguageContext";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white p-4 shadow-lg z-50 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="JAVO Logo" width={40} height={40} className="w-10 h-10 rounded-full" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">JAVO</h1>
                <p className="text-sm text-gray-600">Java Volcano Odyssey</p>
              </div>
            </div>
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-lg">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>{t('home')}</Link>
            <Link href="/ijen" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>{t('ijen')}</Link>
            <Link href="/bromo" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>{t('bromo')}</Link>
            <Link href="/tumpak-sewu" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>{t('tumpakSewu')}</Link>
            <Link href="/map" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Peta</Link> {/* Added Map Link */}
            <Link href="/kontak" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>{t('contact')}</Link>
            <Link href="/pemesanan" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center" onClick={toggleMenu}>
              {t('bookTour')}
            </Link>
          </nav>

          {/* Language Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mt-8 self-center">
            <button
              onClick={() => { setLanguage('id'); toggleMenu(); }}
              className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                language === 'id' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => { setLanguage('en'); toggleMenu(); }}
              className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;