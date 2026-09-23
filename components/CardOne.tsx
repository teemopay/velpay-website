"use client";
import "@/styles/Card.css";
import { cn } from "@/lib/utils";
import {
  PayinFive,
  PayinSix,
  PayinSeven,
  PayinEight,
  PayinNine,
} from "./icons/payins/icons";
import { FadeIn } from "@/components/Animateitem";

const cardList = [
  {
    id: 1,
    title: "Easy connection",
    icon: PayinFive,
    sub: "We provide professional and structured documentation so you can connect in hours instead of days.",
  },
  {
    id: 2,
    title: "Fast API callback",
    icon: PayinSix,
    sub: "Once your trade is initiated, you will receive a callback quickly.",
  },
  {
    id: 3,
    title: "Cloud-based platform",
    icon: PayinSeven,
    sub: "With high availability, scalability and tightened security.",
  },
  {
    id: 4,
    title: "Distributed Services",
    icon: PayinEight,
    sub: "We use distributed services to display cashier counters at locations closest to users, reducing network latency.",
  },
];
export const CardOne = () => {
  const webStyle =
    "md:pt-[52px] md:pb-[57px] md:pl-[35px] md:pr-[75px] md:min-h-[274px] 2xl:min-h-[316px] border border-[rgba(255,255,255,0.3)]";
  const mobileStyle = "pt-[17px] pb-[36px] pl-[12px] pr-[19px]";

  return (
    <div id="cardone" className="w-full mb-[102px] md:mb-[182px]">
      {cardList.map((i) => {
        const Icon = i.icon;
        return (
          <FadeIn className="mb-[16px] last:mb-0 cursor-pointer" key={i.id}>
            <div
              className={cn(
                "flex justify-between items-center  bg-[#22251C] rounded-[40px]",
                "group shadow transition-all duration-500 ease-out hover:border-[#DEFE66] hover:shadow-md hover:shadow-[#DEFE66] border border-transparent",
                mobileStyle,
                webStyle,
              )}
              key={i.id}
            >
              <div className="flex-1 max-w-[236px] md:max-w-[505px] 2xl:max-w-[800px]">
                <PayinNine
                  className={cn(
                    "max-w-[16px] max-h-[16px] md:max-w-[51px] md:max-h-[51px] mb-[12px] md:mb-[26px]",
                    "group-hover:rotate-90 transition-all duration-500 ease-out",
                  )}
                />
                <div className="font-medium  text-[20px]  md:text-[36px] md:leading-[38px]  text-white mb-[11px] md:mb-[14px]">
                  {i.title}
                </div>
                <div className="text-[12px] leading-[12px] md:text-[16px] md:leading-[20px]  text-white">
                  {i.sub}
                </div>
              </div>
              <Icon className="w-[46px] h-[46px] sm:w-[91px] sm:h-[91px] md:w-[137px] md:h-[137px]" />
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
};
