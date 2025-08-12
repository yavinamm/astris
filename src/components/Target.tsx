import piona from "@/assets/piona.png"
export const TargetAdvertising = () => {
  return (
    <section
      id="target-advertising"
      className="py-24 sm:py-32 bg-white dark:bg-[#0b0a09]"
    >
      <div className="container mx-auto max-w-6xl px-4">
       
         <div className="text-center mb-12">
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] bg-clip-text text-transparent">
          Target Reklama 
        </span>
        <p className="text-muted-foreground mt-6 text-xl ">
         Professional target reklama kampaniyalari natijalari !
        </p>
      </div>


        <div className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
         
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={piona}
                alt="Piona Shop"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Piona Shop Target Kampaniyasi
              </h3>
              <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                  🎯 6 ta kompaniya
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                  ⏰ Faqat 1 kundan
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                  💰 19$ umumiy harajat
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                  🔥 Barcha sumkalar sotildi
                </span>
              </div>
            </div>
          </div>

          {/* Budget grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: "💵", title: "Kunlik Budjet", value: "$5", desc: "Har bir kampaniya uchun" },
              { icon: "📊", title: "Kampaniyalar", value: "6", desc: "Faqat 1 kundan" },
              { icon: "💸", title: "Umumiy Harajat", value: "$19", desc: "Barcha kampaniyalar uchun" },
              { icon: "🛍️", title: "Natija", value: "100%", desc: "Barcha sumkalar sotildi" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center text-center shadow"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h4>
                <div className="text-2xl font-bold text-[#981a41]">{item.value}</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Campaign details */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Kampaniya tafsilotlari:
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-inside">
              <li>✅ Kunlik budjet 5$ dan boshlangan</li>
              <li>✅ 6 ta alohida target kampaniyasi</li>
              <li>✅ Faqat 1 kun davomida ishlagan</li>
              <li>✅ Umumiy harajat atigi 19$</li>
              <li>✅ Do'kondagi barcha sumkalar sotilgan</li>
              <li>✅ Yuqori ROI va samarali natija</li>
            </ul>
          </div>

          {/* ROI */}
          <div className="bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] text-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-2">🎯 ROI Natijasi</h4>
            <p>
              19$ harajat evaziga do'kondagi barcha mahsulotlar sotildi. Bu
              professional target reklama strategiyasining ajoyib natijasi!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll mt-20 max-w-xl mx-auto text-center space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            O'z biznesingiz uchun ham shunday samarali target reklama!
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Professional target reklama xizmatlarimiz bilan minimal budjetda
            maksimal natija oling
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:brightness-110 transition"
          >
            Bepul konsultatsiya
          </a>
        </div>
      </div>
    </section>
  );
};
