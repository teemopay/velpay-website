"use client";
import "@/styles/Card.css";
import {
  PayinOne,
  PayinTwo,
  PayinThree,
  PayinFour,
} from "./icons/payins/icons";
import { FadeIn } from "@/components/Animateitem";
import { cn } from "@/lib/utils";
import Image from "next/image";

const cardList = [
  {
    id: 1,
    title: "International Funds Settlement",
    sub: "Send and receive payments in local currency to users with local payment accounts. Then receive your settlement in US dollars anywhere in the world without setting up a local legal entity.",
    icon: PayinOne,
  },
  {
    id: 2,
    title: "Acquirer redundancy",
    sub: "Our in-house developed algorithm switches transactions automatically to guarantee the highest success rates.",
    icon: PayinTwo,
  },
  {
    id: 3,
    title: "Local and international payments",
    sub: "Vellpay payment solution is a simple, secure and fast method suitable for all business models.",
    icon: PayinThree,
  },
  {
    id: 4,
    title: "Unified Transactions",
    sub: "Unified reconciliation and funds transfer for all currencies and countries.",
    icon: PayinFour,
  },
];
export const CardFour = () => {
  const webStyle =
    "md:pt-[22px] md:pl-[17px] md:pb-[19px] md:pr-[22px] md:min-h-[274px]";
  const mobileStyle = " pt-[15px] pr-[15px] pb-[14px] pl-[12px] min-h-[185px]";
  return (
    <div className="relative grid  gap-[14px] grid-cols-1 lg:grid-cols-2">
      <Image
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
        alt=""
        aria-hidden="true"
        height={914}
        src="/images/payins/flur.png"
        width={1536}
      />
      {cardList.map((i, index) => {
        const Icon = i.icon;
        return (
          <FadeIn className="relative z-10" key={i.id} delay={index * 0.1}>
            <div
              className={cn(
                "payin-card-bg rounded-[16px] h-full cursor-pointer",
                "group shadow transition-all duration-700 ease-out   hover:shadow-md hover:shadow-[#DEFE66]",
                mobileStyle,
                webStyle,
              )}
              key={i.id}
            >
              <div className="flex justify-between items-start min-h-[96px] md:min-h-[138px]">
                <div className="flex-1 text-[20px] leading-[24px]  md:text-[36px] md:leading-[40px]  font-medium max-w-[156px] md:max-w-[269px]">
                  {i.title}
                </div>

                <Icon className="w-[62px] md:w-[92px] ease-in-out group-hover:scale-85 transition-all duration-700" />
              </div>
              <div className="text-[12px] leading-[18px] md:text-[16px] md:leading-[20px] text-[#D1D1D1] md:max-w-[454px] 2xl:max-w-[500px]">
                {i.sub}
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
};
