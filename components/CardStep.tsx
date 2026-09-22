"use client";
import { useRef } from "react";
import "@/styles/Card.css";
import { cn } from "@/lib/utils";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
} from "@/components/icons";
import { Card, CardBody } from "@heroui/card";
import { FadeUPScrollXgroup } from "@/components/Animateitem";

const StartList = [
  {
    id: 1,
    title: "1. Contact Us",
    sub: "One of our payment experts will then get in touch to understand more about your business.",
    icon: StepOne,
  },
  {
    id: 2,
    title: "2. Get set",
    sub: "In our test environment so you can get to know our infrastructure",
    icon: StepTwo,
  },
  {
    id: 3,
    title: "3. Create account",
    sub: "By signing a single contract and passing our KYC and AML tests",
    icon: StepThree,
  },
  {
    id: 4,
    title: "4. Onboard",
    sub: "Once you have signed up to our platform, you will be able to activate your merchant account using our easy-to-use portal or via the API.",
    icon: StepFour,
  },
  {
    id: 5,
    title: "5. Start converting",
    sub: "Run your business locally or globally using the payment methods supported by Vellpay.",
    icon: StepFive,
  },
];
export const CardStep = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDownRef.current = true;
    startXRef.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startXRef.current) * 1; // 滚动速度，乘以1就是同步
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    }
  };
  const hoverStyle = "step-card-hover rounded-2xl group shadow";
  return (
    <div className="relative">
      <div className="w-full step-scroll-mask  box-content">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="hide-scrollbar scroll-mask -my-[35px] flex gap-x-[16px] overflow-x-scroll py-[35px] md:gap-x-[18px]"
        >
          {StartList.map((i, index) => {
            const Icon = i.icon;
            return (
              <FadeUPScrollXgroup
                className={cn("w-full", hoverStyle)}
                key={i.id}
                delay={index * 0.1}
              >
                <Card
                  key={i.id}
                  className={cn(
                    "home-step-bg relative min-h-[254px] w-full min-w-[191px] cursor-pointer  rounded-2xl transition-transform duration-500 ease-out group-hover:-translate-y-[35px] md:min-h-[310px] md:min-w-[234px] ",
                  )}
                >
                  <CardBody className="relative flex flex-col justify-between overflow-visible p-[19px] md:p-[23px]">
                    <div className="step-card-icon">
                      <Icon />
                    </div>
                    <div>
                      <div className="mb-[4px] text-[13px] font-bold leading-[18px] text-white transition-colors duration-300 group-hover:text-[#000000] md:text-[16px] md:leading-[23px]">
                        {i.title}
                      </div>
                      <div className="text-[12px] leading-[16px] text-white transition-colors duration-300 group-hover:text-[#000000]">
                        {i.sub}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </FadeUPScrollXgroup>
            );
          })}
        </div>
      </div>
    </div>
  );
};
