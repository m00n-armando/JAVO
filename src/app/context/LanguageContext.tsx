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
    mountainsEastJava: 'Gunung Jawa Timur',
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

    // Booking Form
    bookingForm: 'Form Pemesanan',
    fullName: 'Nama Lengkap',
    phoneNumber: 'Nomor Telepon',
    selectDestination: 'Pilih Destinasi',
    selectDestinationPlaceholder: 'Pilih destinasi...',
    departureDate: 'Tanggal Keberangkatan',
    numberOfParticipants: 'Jumlah Peserta',
    selectPackage: 'Pilih Paket',
    selectPackagePlaceholder: 'Pilih paket...',
    premiumPackage: 'Paket Premium',
    standardPackage: 'Paket Standard',
    budgetPackage: 'Paket Budget',
    additionalNotes: 'Catatan Tambahan',
    notesPlaceholder: 'Kebutuhan khusus, alergi, dll...',
    bookingSummary: 'Ringkasan Pemesanan',
    destination: 'Destinasi:',
    participants: 'Jumlah Peserta:',
    packageLabel: 'Paket:',
    total: 'Total:',
    confirmBooking: 'Konfirmasi Pemesanan',
    termsAndConditions: 'Dengan mengirim form ini, Anda menyetujui syarat dan ketentuan kami.',
    paymentInfo: 'Pembayaran dapat dilakukan via transfer bank atau e-wallet.',

    // Pickup Location
    pickupLocation: 'Lokasi Penjemputan',
    pickupLocationPlaceholder: 'Masukkan alamat penjemputan (opsional)',
    pickupInfo: 'Biaya penjemputan akan ditambahkan ke total pembayaran',
    optional: 'opsional',

    // Destinations
    ijenDestination: 'Gunung Ijen (Blue Fire)',
    bromoDestination: 'Gunung Bromo',
    tumpakSewuDestination: 'Air Terjun Tumpak Sewu',
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
    mountainsEastJava: 'of East Java Mountains',
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

    // Booking Form
    bookingForm: 'Booking Form',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    selectDestination: 'Select Destination',
    selectDestinationPlaceholder: 'Select destination...',
    departureDate: 'Departure Date',
    numberOfParticipants: 'Number of Participants',
    selectPackage: 'Select Package',
    selectPackagePlaceholder: 'Select package...',
    premiumPackage: 'Premium Package',
    standardPackage: 'Standard Package',
    budgetPackage: 'Budget Package',
    additionalNotes: 'Additional Notes',
    notesPlaceholder: 'Special needs, allergies, etc...',
    bookingSummary: 'Booking Summary',
    destination: 'Destination:',
    participants: 'Participants:',
    packageLabel: 'Package:',
    total: 'Total:',
    confirmBooking: 'Confirm Booking',
    termsAndConditions: 'By submitting this form, you agree to our terms and conditions.',
    paymentInfo: 'Payment can be made via bank transfer or e-wallet.',

    // Pickup Location
    pickupLocation: 'Pickup Location',
    pickupLocationPlaceholder: 'Enter pickup address (optional)',
    pickupInfo: 'Pickup fee will be added to the total payment',
    optional: 'optional',

    // Destinations
    ijenDestination: 'Mount Ijen (Blue Fire)',
    bromoDestination: 'Mount Bromo',
    tumpakSewuDestination: 'Tumpak Sewu Waterfall',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key;
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