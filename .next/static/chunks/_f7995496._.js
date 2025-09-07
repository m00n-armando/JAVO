(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/context/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
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
        tumpakSewuDestination: 'Air Terjun Tumpak Sewu'
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
        tumpakSewuDestination: 'Tumpak Sewu Waterfall'
    }
};
const LanguageProvider = (param)=>{
    let { children } = param;
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('id');
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/LanguageContext.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "91C/BR0Ct/Jl7pAV1pKmbThB5o8=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Chatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Chatbot = ()=>{
    _s();
    const { language, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            text: language === 'id' ? 'Halo! Saya adalah asisten virtual Wisata Gunung. Ada yang bisa saya bantu?' : 'Hello! I am the virtual assistant for Mountain Tourism. How can I help you?',
            isBot: true,
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        var _messagesEndRef_current;
        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            scrollToBottom();
        }
    }["Chatbot.useEffect"], [
        messages
    ]);
    const responses = {
        id: {
            'halo': 'Halo! Selamat datang di Wisata Gunung. Ada yang bisa saya bantu?',
            'harga': 'Harga paket wisata kami: Ijen Rp 1.500.000 (2 hari), Bromo Rp 800.000 (1-2 hari), Tumpak Sewu Rp 350.000 (1 hari). Ingin tahu detail lebih lanjut?',
            'paket': 'Kami memiliki 3 paket utama: Gunung Ijen (Blue Fire), Gunung Bromo (Sunrise), dan Air Terjun Tumpak Sewu. Semua paket include guide, transport, dan makan.',
            'kontak': 'Anda bisa menghubungi kami di +62 812-3456-7890 atau email ke info@wisatagunung.com',
            'booking': 'Untuk booking, silakan kunjungi halaman pemesanan atau hubungi kami langsung.',
            'penjemputan': 'Ya, kami menyediakan layanan penjemputan dari lokasi Anda. Biaya penjemputan akan ditambahkan ke total pembayaran. Silakan isi kolom lokasi penjemputan saat booking.',
            'pickup': 'Ya, kami menyediakan layanan penjemputan dari lokasi Anda. Biaya penjemputan akan ditambahkan ke total pembayaran. Silakan isi kolom lokasi penjemputan saat booking.',
            'jemput': 'Layanan penjemputan tersedia untuk semua paket wisata. Biaya tergantung pada jarak dari lokasi Anda ke titik keberangkatan.',
            'default': 'Maaf, saya belum mengerti pertanyaan Anda. Silakan hubungi customer service kami di +62 812-3456-7890 untuk bantuan lebih lanjut.'
        },
        en: {
            'hello': 'Hello! Welcome to Mountain Tourism. How can I help you?',
            'price': 'Our tour package prices: Ijen Rp 1,500,000 (2 days), Bromo Rp 800,000 (1-2 days), Tumpak Sewu Rp 350,000 (1 day). Would you like more details?',
            'package': 'We have 3 main packages: Mount Ijen (Blue Fire), Mount Bromo (Sunrise), and Tumpak Sewu Waterfall. All packages include guide, transport, and meals.',
            'contact': 'You can contact us at +62 812-3456-7890 or email info@wisatagunung.com',
            'booking': 'For booking, please visit our booking page or contact us directly.',
            'pickup': 'Yes, we provide pickup service from your location. The pickup fee will be added to the total payment. Please fill in the pickup location field when booking.',
            'penjemputan': 'Yes, we provide pickup service from your location. The pickup fee will be added to the total payment. Please fill in the pickup location field when booking.',
            'default': 'Sorry, I don\'t understand your question yet. Please contact our customer service at +62 812-3456-7890 for further assistance.'
        }
    };
    const getBotResponse = (userMessage)=>{
        const message = userMessage.toLowerCase();
        const lang = language;
        if (message.includes('halo') || message.includes('hello') || message.includes('hi')) {
            return responses[lang]['halo'] || responses[lang]['hello'];
        }
        if (message.includes('harga') || message.includes('price') || message.includes('cost')) {
            return responses[lang]['harga'] || responses[lang]['price'];
        }
        if (message.includes('paket') || message.includes('package') || message.includes('tour')) {
            return responses[lang]['paket'] || responses[lang]['package'];
        }
        if (message.includes('kontak') || message.includes('contact') || message.includes('phone')) {
            return responses[lang]['kontak'] || responses[lang]['contact'];
        }
        if (message.includes('booking') || message.includes('pesan') || message.includes('book')) {
            return responses[lang]['booking'];
        }
        if (message.includes('penjemputan') || message.includes('pickup') || message.includes('jemput') || message.includes('antar')) {
            return responses[lang]['penjemputan'] || responses[lang]['pickup'];
        }
        return responses[lang]['default'];
    };
    const handleSendMessage = ()=>{
        if (inputValue.trim() === '') return;
        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            isBot: false,
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInputValue('');
        // Simulate bot response
        setTimeout(()=>{
            const botResponse = {
                id: messages.length + 2,
                text: getBotResponse(inputValue),
                isBot: true,
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    botResponse
                ]);
        }, 1000);
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsOpen(!isOpen),
                    className: "bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition duration-300",
                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Chatbot.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: "💬"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Chatbot.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Chatbot.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Chatbot.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-600 text-white p-4 rounded-t-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold",
                                children: language === 'id' ? 'Customer Service AI' : 'AI Customer Service'
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Chatbot.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-90",
                                children: language === 'id' ? 'Online - Siap membantu Anda' : 'Online - Ready to help you'
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Chatbot.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Chatbot.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-4 overflow-y-auto",
                        children: [
                            messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 ".concat(message.isBot ? 'text-left' : 'text-right'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block max-w-[80%] p-3 rounded-lg ".concat(message.isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: message.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Chatbot.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs opacity-70 mt-1",
                                                children: message.timestamp.toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Chatbot.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Chatbot.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, message.id, false, {
                                    fileName: "[project]/src/app/components/Chatbot.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Chatbot.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Chatbot.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: inputValue,
                                    onChange: (e)=>setInputValue(e.target.value),
                                    onKeyPress: handleKeyPress,
                                    placeholder: language === 'id' ? 'Ketik pesan Anda...' : 'Type your message...',
                                    className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Chatbot.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSendMessage,
                                    className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300",
                                    children: language === 'id' ? 'Kirim' : 'Send'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Chatbot.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Chatbot.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Chatbot.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Chatbot.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Chatbot, "Q8nMp3te86AyHnYOaZdTCv4drn8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Chatbot;
const __TURBOPACK__default__export__ = Chatbot;
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_f7995496._.js.map