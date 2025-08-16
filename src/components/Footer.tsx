import logo from "@/assets/logo.png"
import { FaPhone, FaEnvelope, FaInstagram, FaTelegram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

        <section className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 text-muted-foreground">
     <div className="space-y-4 col-span-full md:col-span-1">
  <a href="/" className="font-bold text-2xl flex items-center gap-3 text-foreground">
    <img src={logo} alt="Astris Media Logo" className="h-10 w-auto" />
    Astris Media
  </a>

  <p className="text-sm opacity-70 leading-relaxed">
    Biz raqamli yechimlar orqali biznesingizni yangi darajaga olib chiqamiz. Ishonchli, samarali va zamonaviy xizmatlar – barchasi bizda.
  </p>

  <div className="flex items-center gap-4 mt-2 text-[#981a41]">
    <a href="tel:+998500786258" className="hover:opacity-80 transition-opacity" title="Telefon">
      <FaPhone className="w-5 h-5" />
    </a>
    <a href="https://t.me/Astrismedia" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity" title="Telegram">
      <FaTelegram className="w-5 h-5" />
    </a>
    <a href="https://www.instagram.com/astris_media?igsh=NTJjMHBjbW91cnQ0" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity" title="Instagram">
      <FaInstagram className="w-5 h-5" />
    </a>
    <a href="astrismedia1@gmail.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity" title="Instagram">
      <FaEnvelope className="w-5 h-5" />
    </a>
  </div>
</div>

      <div className="md:col-span-1 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg text-foreground">Xizmatlar</h3>
          <a href="#xizmatlar" className="hover:text-[#981a41] transition-colors duration-200">SMM Boshqaruv</a>
          <a href="#xizmatlar" className="hover:text-[#981a41] transition-colors duration-200">Target Reklama</a>
          <a href="#xizmatlar" className="hover:text-[#981a41] transition-colors duration-200">Influencer Marketing</a>
        </div>
        <div className="flex flex-col gap-3 mt-8 md:mt-10">
          <a href="#xizmatlar" className="hover:text-[#981a41] transition-colors duration-200">Shaxsiy Brend</a>
          <a href="#xizmatlar" className="hover:text-[#981a41] transition-colors duration-200">Strategiya</a>
          <a href="#xizmatlar" className="hover:text-[#981a41] transition-colors duration-200">Kontent Plan</a>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:col-span-1">
        <h3 className="font-semibold text-lg text-foreground">Bog&apos;lanish</h3>

        <a href="tel:+998500786258" className="flex items-center gap-2 hover:text-[#981a41] transition-colors duration-200">
          <FaPhone className="w-4 h-4" />
          +998 50 078 62 58
        </a>

        <a href="astrismedia1@gmail.com" className="flex items-center gap-2 hover:text-[#981a41] transition-colors duration-200">
          <FaEnvelope className="w-4 h-4" />
          astrismedia1@gmail.com
        </a>

        <a href="https://www.instagram.com/astris_media?igsh=NTJjMHBjbW91cnQ0" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#981a41] transition-colors duration-200">
          <FaInstagram className="w-4 h-4" />
          @astris_media
        </a>

        <a href="https://t.me/Astrismedia" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#981a41] transition-colors duration-200">
          <FaTelegram className="w-4 h-4" />
          @Astrismedia
        </a>
      </div>

    </section>

      <section className="container pb-14 text-center">
        <h3 className="text-center text-lg text-muted-foreground">
          &copy; {new Date().getFullYear()} Astris media. Barcha huquqlari himoyalangan.
        </h3>
      </section>

    </footer>
  );
};
