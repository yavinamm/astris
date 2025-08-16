import { Card} from "./ui/card";

export const Cta = () => {
  return (
    <section id="#aloqa" className="container py-24 sm:py-32">
      <div className="max-w-3xl mx-auto space-y-10 text-center">
       
        <h2 className="text-4xl font-extrabold bg-gradient-to-b from-[#981a41] via-[#b2355f] to-[#d84a7e] text-transparent bg-clip-text">
          Biz bilan bog'laning
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Bepul konsultatsiya uchun hoziroq murojaat qiling
        </p>


        <Card className="p-8 rounded-2xl shadow-lg border border-transparent hover:border-primary/50 transition duration-300 bg-white dark:bg-[#1b1917]">
          <form className="space-y-6" id="contactForm">
  
            <div className="flex flex-col text-left">
              <label htmlFor="name" className="font-semibold mb-2 text-gray-900 dark:text-[#b4345f]">
                Ismingiz
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ismingizni kiriting"
                className="rounded-md border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

         
            <div className="flex flex-col text-left">
              <label htmlFor="phone" className="font-semibold mb-2 text-gray-900 dark:text-[#b4345f]">
                Telefon raqam
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+998 90 123 45 67"
                className="rounded-md border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>


            <div className="flex flex-col text-left">
              <label htmlFor="service" className="font-semibold mb-2 text-gray-900 dark:text-[#b4345f]">
                Xizmat turi
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="rounded-md border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition"
              >
                <option disabled value="">
                  Xizmat turini tanlang
                </option>
                <option value="smm">SMM Boshqaruv</option>
                <option value="target">Target Reklama</option>
                <option value="influencer">Influencer Marketing</option>
                <option value="brand">Shaxsiy Brend</option>
                <option value="content">Strategiya + Kontent Plan</option>
              </select>
            </div>

   
            <div className="flex flex-col text-left">
              <label htmlFor="message" className="font-semibold mb-2 text-gray-900 dark:text-[#b4345f]">
                Qo'shimcha ma'lumot
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Biznesingiz haqida qisqacha yozib qoldiring. Qanday natija xohlaysiz? Qaysi ijtimoiy tarmoqlar?"
                className="resize-none rounded-md border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition"
              ></textarea>
            </div>


            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] text-white font-semibold py-3 hover:brightness-110 transition-transform active:scale-95"
            >
              Buyurtma yuborish
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
};
