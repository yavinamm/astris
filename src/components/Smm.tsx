export const Smm = () => {
  return (
    <section id="smm-services" className="py-24 sm:py-32 bg-white dark:bg-[#0b0a09]">
      <div className="container mx-auto max-w-7xl px-4">
   
      <div className="text-center mb-12">
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] bg-clip-text text-transparent">
          SMM Xizmati
        </span>
        <p className="text-muted-foreground mt-6 text-xl ">
         Bizning SMM xizmatlarimiz natijalari !
        </p>
      </div>

       
        <div className="smm-videos-grid animate-on-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         
          {[
            {
              src: "https://www.instagram.com/reel/C5iMMHVt51m/embed",
              href: "https://www.instagram.com/reel/C5iMMHVt51m/?igsh=MWRnOHVnMm05a3R1ZA==",
            },
            {
              src: "https://www.instagram.com/reel/CxNvDIytNS3/embed",
              href: "https://www.instagram.com/reel/CxNvDIytNS3/?igsh=MWF4dzRwbDZxdXc2Mw==",
            },
            {
              src: "https://www.instagram.com/reel/Cy1DUl7txdN/embed",
              href: "https://www.instagram.com/reel/Cy1DUl7txdN/?igsh=M3ozaWh1a3dmc3E5",
            },
          ].map(({ src, href }, idx) => (
            <div key={idx} className="video-card flex flex-col rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 transition">
              <div className="video-container w-full h-[600px]">
                <iframe
                  src={src}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  className="w-full h-full"
                  title={`Instagram video ${idx + 1}`}
                />
              </div>
              <div className="video-info p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link text-primary font-semibold hover:underline flex items-center gap-2"
                >
                  <span>Instagram'da ko'rish</span>
                  <span className="link-icon text-xl">📱</span>
                </a>
              </div>
            </div>
          ))}
        </div>

    
        <div className="smm-cta animate-on-scroll mt-20 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 ">
            O'z brendingizni ham shunday rivojlantiring!
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Professional SMM xizmatlarimiz bilan brendingizni yangi darajaga olib chiqing
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
