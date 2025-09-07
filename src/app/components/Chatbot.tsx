'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: language === 'id'
        ? 'Halo! Saya adalah asisten virtual Wisata Gunung. Ada yang bisa saya bantu?'
        : 'Hello! I am the virtual assistant for Mountain Tourism. How can I help you?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const responses: Record<string, Record<string, string>> = {
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

  const getBotResponse = (userMessage: string): string => {
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

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition duration-300"
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">💬</span>
          )}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">
              {language === 'id' ? 'Customer Service AI' : 'AI Customer Service'}
            </h3>
            <p className="text-sm opacity-90">
              {language === 'id' ? 'Online - Siap membantu Anda' : 'Online - Ready to help you'}
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === 'id' ? 'Ketik pesan Anda...' : 'Type your message...'}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
              >
                {language === 'id' ? 'Kirim' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;