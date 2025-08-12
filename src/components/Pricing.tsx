import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Target Reklama",
    popular: 0,
    price: "150",
    description:
      "Ijtimoiy tarmoqlarda brendingizni aniq auditoriyaga yo'naltirib, samarali reklama qilish. 2 yillik tajribaga ega targetologlar bilan.",
    buttonText: "Tanlash",
    benefitList: [
      "2 yillik tajribaga ega targetolog",
      "Aniq auditoriya tahlili",
      "Samarali reklama kampaniyalari",
      "Oylik hisobot",
    ],
  },
  {
    title: "SMM Boshqaruv",
    popular: 1,
    price: "800-1200",
    description:
      "Ijtimoiy tarmoqlarda brandni strategik rivojlantirish. Full komanda bilan professional yondoshish va keng qamrovli strategiya.",
    buttonText: "Tanlash",
    benefitList: [
      "To'liq mas'uliyat va komanda",
      "Strategik rejalashtirish",
      "Kontent yaratish",
      "Kommunity management",
      "Tahlil va hisobotlar",
    ],
  },
  {
    title: "Shaxsiy Brand",
    popular: 0,
    price: "500-1000",
    description:
      "Ijtimoiy tarmoqlarda imijingizni yaratish va strategik rivojlantirish. Full komanda bilan professional yondoshish.",
    buttonText: "Tanlash",
    benefitList: [
      "Shaxsiy imij yaratish",
      "Professional fotosurat",
      "Kontent strategiya",
      "SMM boshqaruv",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="#narxlar"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Xizmatlar</span>
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Narxlari{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
      Har bir biznes uchun mos narxlar va paketlar. Barchasi siz uchun !
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Eng Mashhur
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /Oyiga</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-[#981a41]" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
