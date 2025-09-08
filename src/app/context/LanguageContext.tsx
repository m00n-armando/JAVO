'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    // Header
    home: 'Beranda',
    ijen: 'Ijen',
    bromo: 'Bromo',
    tumpakSewu: 'Tumpak Sewu',
    contact: 'Kontak',
    bookTour: 'Pesan Tour',

    // Hero
    exploreBeauty: 'Jelajahi Keindahan',
    mountainsEastJava: 'Java Volcano Odyssey',
    unforgettableExperience: 'Pengalaman wisata tak terlupakan di Gunung Ijen, Bromo, dan Air Terjun Tumpak Sewu',
    bookNow: 'Pesan Sekarang',
    viewDestinations: 'Lihat Destinasi',

    // Why Choose Us
    whyChooseUs: 'Mengapa Memilih Kami?',
    experience: 'Pengalaman 10+ tahun dalam melayani wisatawan dari seluruh dunia',
    experiencedGuide: 'Guide Berpengalaman',
    experiencedGuideDesc: 'Guide lokal profesional dengan pengetahuan mendalam tentang setiap destinasi',
    bestPrice: 'Harga Terbaik',
    bestPriceDesc: 'Paket wisata dengan harga kompetitif tanpa mengurangi kualitas pelayanan',
    guaranteedSafety: 'Keamanan Terjamin',
    guaranteedSafetyDesc: 'Protokol keamanan ketat dan asuransi untuk setiap peserta tour',

    // Destinations
    featuredDestinations: 'Destinasi Unggulan',
    discoverBeauty: 'Temukan keindahan alam Jawa Timur yang menakjubkan',
    blueFire: 'Blue Fire fenomena langka, danau kawah terbesar, sunrise spektakuler',
    legendarySunrise: 'Sunrise legendaris, laut pasir vulkanik, panorama gunung berapi',
    largestWaterfall: 'Air terjun terbesar Jawa Timur, kolam alami, trekking menantang',
    viewDetail: 'Lihat Detail',
    daysNights: 'hari malam',
    days: 'hari',
    price: 'Rp 1.500.000',

    // CTA
    readyAdventure: 'Siap untuk Petualangan?',
    contactNow: 'Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik',
    contactUs: 'Hubungi Kami',

    // Footer
    mountainTourism: 'Biro perjalanan wisata spesialis gunung di Jawa Timur',
    destinations: 'Destinasi',
    services: 'Layanan',
    tourBooking: 'Pemesanan Tour',
    contactUsFooter: 'Kontak Kami',
    whatsapp: 'WhatsApp',
    allRightsReserved: 'All rights reserved.',

    // Testimonials
    whatOurCustomersSay: 'Apa Kata Pelanggan Kami',
    customerTestimonials: 'Testimoni Pelanggan',
    testimonials: {
      isabellaRodriguezTestimonial: "Pemandu sangat berpengetahuan dan pemandangannya menakjubkan. Sangat direkomendasikan!",
      hansPeterMullerTestimonial: "Saya tidak pernah membayangkan keindahan seperti ini di Jawa Timur. Perjalanan yang tak terlupakan bersama JAVO!",
      anyaPetrovaTestimonial: "Pelayanan yang ramah dan profesional. Semua diatur dengan sempurna, membuat perjalanan saya sangat nyaman.",
      kenjiTanakaTestimonial: "Pemandangan matahari terbit di Bromo adalah sesuatu yang harus dilihat seumur hidup. Terima kasih JAVO!",
      fatimaAlMansooriTestimonial: "Air Terjun Tumpak Sewu benar-benar memukau. JAVO membuat petualangan ini mudah dan menyenangkan.",
    },
  },
  en: {
    // Header
    home: 'Home',
    ijen: 'Ijen',
    bromo: 'Bromo',
    tumpakSewu: 'Tumpak Sewu',
    contact: 'Contact',
    bookTour: 'Book Tour',

    // Hero
    exploreBeauty: 'Explore the Beauty',
    mountainsEastJava: 'Java Volcano Odyssey',
    unforgettableExperience: 'Unforgettable travel experience at Mount Ijen, Bromo, and Tumpak Sewu Waterfall',
    bookNow: 'Book Now',
    viewDestinations: 'View Destinations',

    // Why Choose Us
    whyChooseUs: 'Why Choose Us?',
    experience: '10+ years experience serving tourists from around the world',
    experiencedGuide: 'Experienced Guide',
    experiencedGuideDesc: 'Professional local guide with in-depth knowledge of each destination',
    bestPrice: 'Best Price',
    bestPriceDesc: 'Competitive tour packages without compromising service quality',
    guaranteedSafety: 'Guaranteed Safety',
    guaranteedSafetyDesc: 'Strict safety protocols and insurance for every tour participant',

    // Destinations
    featuredDestinations: 'Featured Destinations',
    discoverBeauty: 'Discover the stunning natural beauty of East Java',
    blueFire: 'Rare Blue Fire phenomenon, largest crater lake, spectacular sunrise',
    legendarySunrise: 'Legendary sunrise, volcanic sand sea, mountain panorama',
    largestWaterfall: 'Largest waterfall in East Java, natural pools, challenging trekking',
    viewDetail: 'View Detail',
    daysNights: 'days nights',
    days: 'days',
    price: 'Rp 1.500.000',

    // CTA
    readyAdventure: 'Ready for Adventure?',
    contactNow: 'Contact us now for free consultation and best offers',
    contactUs: 'Contact Us',

    // Footer
    mountainTourism: 'Specialist mountain tourism bureau in East Java',
    destinations: 'Destinations',
    services: 'Services',
    tourBooking: 'Tour Booking',
    contactUsFooter: 'Contact Us',
    whatsapp: 'WhatsApp',
    allRightsReserved: 'All rights reserved.',

    // Testimonials
    whatOurCustomersSay: 'What Our Customers Say',
    customerTestimonials: 'Customer Testimonials',
    testimonials: {
      isabellaRodriguezTestimonial: "Pemandu sangat berpengetahuan dan pemandangannya menakjubkan. Sangat direkomendasikan!",
      hansPeterMullerTestimonial: "Saya tidak pernah membayangkan keindahan seperti ini di Jawa Timur. Perjalanan yang tak terlupakan bersama JAVO!",
      anyaPetrovaTestimonial: "Pelayanan yang ramah dan profesional. Semua diatur dengan sempurna, membuat perjalanan saya sangat nyaman.",
      kenjiTanakaTestimonial: "Pemandangan matahari terbit di Bromo adalah sesuatu yang harus dilihat seumur hidup. Terima kasih JAVO!",
      fatimaAlMansooriTestimonial: "Air Terjun Tumpak Sewu benar-benar memukau. JAVO membuat petualangan ini mudah dan menyenangkan.",
    },
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    const keys = key.split('.');
    let currentTranslation: any = translations[language];
    for (const k of keys) {
      if (currentTranslation && typeof currentTranslation === 'object' && k in currentTranslation) {
        currentTranslation = currentTranslation[k];
      } else {
        return key; // Return the key itself if translation not found
      }
    }
    return typeof currentTranslation === 'string' ? currentTranslation : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
