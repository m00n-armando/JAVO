module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/context/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
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
        allRightsReserved: 'All rights reserved.'
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
        allRightsReserved: 'All rights reserved.'
    }
};
const LanguageProvider = ({ children })=>{
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('id');
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/LanguageContext.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fffab644._.js.map