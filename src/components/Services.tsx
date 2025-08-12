import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "SMM Boshqaruv",
    description:
      "Ijtimoiy tarmoqlarda brandni strategik rivojlantirish. Full komanda bilan professional yondoshish va keng qamrovli strategiya.",
    icon: <ChartIcon />,
  },
  {
    title: "Target Reklama",
    description:
      "Ijtimoiy tarmoqlarda brendingizni aniq auditoriyaga yo'naltirib, samarali reklama qilish. 2 yillik tajribaga ega targetologlar bilan.",
    icon: <WalletIcon />,
  },
  {
    title: "Shaxsiy Brend",
    description:
      "Ijtimoiy tarmoqlarda imijingizni yaratish va strategik rivojlantirish. Full komanda bilan professional yondoshish.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Influencer Marketing",
    description:
      "Brandingizni liderlar bilan birga tanitish. Budjetdan kelib chiqqan holda eng samarali influyenserlar bilan hamkorlik.",
    icon: <ChartIcon />,
  },
  {
    title: "Strategiya + Kontent Plan",
    description:
      "Brandingiz poydevorini mustahkamlash uchun oylik SMM strategiya va shu asosida to'liq kontent plan yaratish.",
    icon: <WalletIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="bg-gradient-to-b from-[#981a41] via-[#b2355f] to-[#d84a7e] text-transparent bg-clip-text">
            Bizning Xizmatlarimiz{" "}
          </span>
        </h2>

        <p className="text-muted-foreground text-xl text-center max-w-2xl mx-auto">
          Brendingizni rivojlantirish uchun barcha zarur xizmatlar bir joyda
        </p>

        <div className="flex flex-col gap-8">
          {serviceList.map(({ icon, title, description }: ServiceProps) => (
            <Card
              key={title}
              className="w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-[#981a41] hover:border-primary/40 border border-transparent"
            >
              <CardHeader className="flex flex-row items-start gap-6">
                <div className="bg-primary/20 p-6 rounded-2xl flex items-center justify-center text-primary text-3xl transition-colors duration-300 group-hover:text-white group-hover:bg-primary">
                  {icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">{title}</CardTitle>
                  <CardDescription className="text-md mt-2">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
