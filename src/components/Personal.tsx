export const PersonalBrand = () => {
  return (
    <section
      id="personal-brand"
      className="py-24 sm:py-32 bg-white dark:bg-[#0b0a09]"
    >
      <div className="container mx-auto px-4 ">
     
           <div className="text-center mb-12">
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] bg-clip-text text-transparent">
         Shaxsiy Brand
        </span>
        <p className="text-muted-foreground mt-6 text-xl ">
          Professional shaxsiy brending natijalari bilan tanishib chiqing 
        </p>
      </div>
    
        <div className=" bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">

            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#981a41] via-[#b2355f] to-[#d84a7e] flex items-center justify-center text-white text-3xl font-bold">
              MA
            </div>


            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Mavjuda Alimova
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                @alimova_mavjuda
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] text-white rounded-full px-4 py-1 text-sm font-semibold shadow-sm">
                  🎯 Targetsiz natija
                </span>
                <span className="inline-block bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] text-white rounded-full px-4 py-1 text-sm font-semibold shadow-sm">
                  📈 1 oy ichida
                </span>
                <span className="inline-block bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] text-white rounded-full px-4 py-1 text-sm font-semibold shadow-sm">
                  🔥 Viral natija
                </span>
              </div>
            </div>
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
           
            <div className="result-card bg-gray-100 dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center space-y-3 shadow">
              <div className="text-5xl">👥</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Obunachilar
              </h4>
              <div className="text-3xl font-extrabold text-[#981a41]">9,000+</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                1 oyda targetsiz erishilgan
              </p>
            </div>

            <div className="result-card bg-gray-100 dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center space-y-3 shadow">
              <div className="text-5xl">📊</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Qamrov
              </h4>
              <div className="text-3xl font-extrabold text-[#981a41]">2M+</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                900-800 mingdan oshib ketdi
              </p>
            </div>

            <div className="result-card bg-gray-100 dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center space-y-3 shadow">
              <div className="text-5xl">⚡</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                O'sish
              </h4>
              <div className="text-3xl font-extrabold text-[#981a41]">120%+</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Qamrov o'sishi</p>
            </div>
          </div>

    
          <div className="profile-cta mt-10 text-center">
            <a
              href="https://www.instagram.com/alimova_mavjuda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#981a41] text-[#981a41] font-semibold hover:bg-[#981a41] hover:text-white transition"
            >
              <span>Instagram profili</span>
              <span className="text-xl">📱</span>
            </a>
          </div>
        </div>

        <div className="personal-brand-cta animate-on-scroll mt-20 max-w-xl mx-auto text-center space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            O'z shaxsiy brendingizni ham shunday rivojlantiring!
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Professional shaxsiy brending xizmatlarimiz bilan Instagram'da
            millionlar ko'rishiga olib chiqing
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
