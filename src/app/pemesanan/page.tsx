'use client';

import { useLanguage } from "../context/LanguageContext";

export default function PemesananPage() {
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            {t('bookingForm')}
          </h2>

          <div className="bg-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-white mb-2">
                  {t('fullName')}
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="telepon" className="block text-sm font-medium text-white mb-2">
                  {t('phoneNumber')}
                </label>
                <input
                  type="tel"
                  id="telepon"
                  name="telepon"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="penjemputan" className="block text-sm font-medium text-white mb-2">
                  {t('pickupLocation')} <span className="text-gray-400 text-xs">({t('optional') || 'opsional'})</span>
                </label>
                <input
                  type="text"
                  id="penjemputan"
                  name="penjemputan"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t('pickupLocationPlaceholder')}
                />
                <p className="text-xs text-gray-400 mt-1">{t('pickupInfo')}</p>
              </div>

              <div>
                <label htmlFor="destinasi" className="block text-sm font-medium text-white mb-2">
                  {t('selectDestination')}
                </label>
                <select
                  id="destinasi"
                  name="destinasi"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="" className="bg-gray-700 text-white">{t('selectDestinationPlaceholder')}</option>
                  <option value="ijen" className="bg-gray-700 text-white">{t('ijenDestination')}</option>
                  <option value="bromo" className="bg-gray-700 text-white">{t('bromoDestination')}</option>
                  <option value="tumpak-sewu" className="bg-gray-700 text-white">{t('tumpakSewuDestination')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="tanggal" className="block text-sm font-medium text-white mb-2">
                  {t('departureDate')}
                </label>
                <input
                  type="date"
                  id="tanggal"
                  name="tanggal"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="jumlah" className="block text-sm font-medium text-white mb-2">
                  {t('numberOfParticipants')}
                </label>
                <input
                  type="number"
                  id="jumlah"
                  name="jumlah"
                  min="1"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="paket" className="block text-sm font-medium text-white mb-2">
                  {t('selectPackage')}
                </label>
                <select
                  id="paket"
                  name="paket"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="" className="bg-gray-700 text-white">{t('selectPackagePlaceholder')}</option>
                  <option value="premium" className="bg-gray-700 text-white">{t('premiumPackage')}</option>
                  <option value="standard" className="bg-gray-700 text-white">{t('standardPackage')}</option>
                  <option value="budget" className="bg-gray-700 text-white">{t('budgetPackage')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="catatan" className="block text-sm font-medium text-white mb-2">
                  {t('additionalNotes')}
                </label>
                <textarea
                  id="catatan"
                  name="catatan"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t('notesPlaceholder')}
                ></textarea>
              </div>

              <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {t('bookingSummary')}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-200 font-medium">{t('destination')}</span>
                    <span id="summary-destinasi" className="text-white font-semibold">-</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200 font-medium">{t('participants')}</span>
                    <span id="summary-jumlah" className="text-white font-semibold">-</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200 font-medium">{t('packageLabel')}</span>
                    <span id="summary-paket" className="text-white font-semibold">-</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-gray-600 pt-2">
                    <span className="text-white">{t('total')}</span>
                    <span id="summary-total" className="text-blue-400 font-bold">-</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {t('confirmBooking')}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center text-sm text-gray-200 bg-gray-700 p-4 rounded-lg border border-gray-600">
            <p className="font-medium">{t('termsAndConditions')}</p>
            <p className="font-medium">{t('paymentInfo')}</p>
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