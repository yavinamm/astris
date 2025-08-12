import cola from "@/assets/coca_cola.png"
export const Marketing = () => {
  return (
    <section
      id="influencer-marketing"
      className="py-24 sm:py-32 bg-white dark:bg-[#0b0a09]"
    >
      <div className="container mx-auto max-w-7xl px-4">
       
       <div className="text-center mb-12">
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] bg-clip-text text-transparent">
          Influencer Marketing
        </span>
        <p className="text-muted-foreground mt-6 text-xl ">
         Coca Cola bilan hamkorlikda professional kampaniyalar !
        </p>
      </div>

      
        <div className="animate-on-scroll mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row gap-6">
           
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src={cola}
                alt="Coca Cola"
                className="w-20 h-20 object-contain"
              />
            </div>

          
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Coca Cola Influencer Marketing
              </h3>
              <p className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="flex items-center gap-1">🎯 2 ta kampaniya</span>
                <span className="flex items-center gap-1">
                  📅 Yangi yil va bahoriy bayramlar
                </span>
                <span className="flex items-center gap-1">👥 YouTube blogerlar</span>
                <span className="flex items-center gap-1">📊 Million ko'rishlar</span>
              </p>

            
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Kampaniya tafsilotlari:
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>✅ Budjetdan kelib chiqqan holda YouTube blogerlarni tanlash</li>
                  <li>✅ Professional ssenariy tayyorlash</li>
                  <li>✅ Rekvizitlar yig'ish va tayyorlash</li>
                  <li>✅ Yuqori sifatli video ishlab chiqarish</li>
                  <li>✅ Talabdan kelib chiqqan holda million ko‘rishlar soniga erishish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       
        <div className="youtube-videos-grid animate-on-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              src: "https://www.youtube.com/embed/6ASGfLwQHd0",
              href: "https://youtube.com/shorts/6ASGfLwQHd0?si=ODQwWeIFgnKGno_8",
              title: "Yangi yil kampaniyasi",
            },
            {
              src: "https://www.youtube.com/embed/EhEkcGVc1iE",
              href: "https://youtu.be/EhEkcGVc1iE?si=fe-SlSoQ7LGzotlJ",
              title: "Yangi yil kampaniyasi",
            },
            {
              src: "https://www.youtube.com/embed/FFyEgz54ooU",
              href: "https://youtube.com/shorts/FFyEgz54ooU?si=Q-qWjRx7hHx3g_bK",
              title: "Bahoriy bayramlar kampaniyasi",
            },
            {
              src: "https://www.youtube.com/embed/BSWdxq-6L-Q",
              href: "https://youtube.com/shorts/BSWdxq-6L-Q?si=riDjE8jREzGMKwFn",
              title: "Bahoriy bayramlar kampaniyasi",
            },
          ].map(({ src, href, title }, idx) => (
            <div
              key={idx}
              className="video-card flex flex-col rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 transition"
            >
              <div className="video-container aspect-video">
                <iframe
                  src={src}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  title={title}
                />
              </div>
              <div className="video-info p-4 flex flex-col gap-2">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {title}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline flex items-center gap-2"
                >
                  <span>YouTube'da ko‘rish</span>
                  <span className="link-icon text-lg">▶️</span>
                </a>
              </div>
            </div>
          ))}
        </div>

       
        <div className="influencer-cta animate-on-scroll mt-20 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            O‘z brendingiz uchun ham shunday kampaniyalar!
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Professional influencer marketing xizmatlarimiz bilan brendingizni millionlar ko‘rishiga olib chiqing
          </p>
          <a
            href="#aloqa"
            className="inline-block bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:brightness-110 transition"
          >
            Bepul konsultatsiya
          </a>
        </div>
      </div>
    </section>
  );
};
