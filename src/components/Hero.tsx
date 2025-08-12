import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#981a41] via-[#7a1434] to-[#5e0f27] text-transparent bg-clip-text">
              Yorqin 
            </span>{" "}
            Brandlar
          </h1>{" "}
          shu{" "}
          <h2 className="inline">
            Yerdan 
            {" "}
             <span className="inline bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] text-transparent bg-clip-text">
               boshlanadi !
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Astris Media - sizning ishonchli hamkoringiz SMM, Target, Influencer Marketing va Digital Marketing sohasida. 2 yillik tajribaga ega professional jamoa bilan brendingizni muvaffaqiyatga olib boramiz.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="#aloqa"
            className="w-full md:w-1/3"
          >
            <Button className="w-full">Bepul konsultatsiya</Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="#xizmatlar"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Xizmatlar bilan tanishish
          </a>
        </div>

      </div>
      <div className="shadow"></div>
    </section>
  );
};
