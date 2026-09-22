"use client";
import { motion, Variants } from "motion/react";
import { PageContanier } from "@/components/PageWrap";
import Image from "next/image";
import { FadeIn, ZoomIn } from "@/components/Animateitem";
import { cn } from "@/lib/utils";
import {
  IconOne,
  IconSecond,
  IconThree,
  IconFour,
} from "@/components/intIcons";
import Carousel from "@/components/Carousel";
import { BtnLink } from "@/components/BtnLink";
const hoverStyle =
  "group shadow transition-all duration-700 ease-out   hover:shadow-md hover:shadow-[#DEFE66] cursor-pointer";

const TitleItem = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <FadeIn>
      <div
        className={cn(
          " text-[32px] leading-[37px] md:text-[48px] md:leading-[68px] font-semibold text-center ",
          className,
        )}
      >
        {title}
      </div>
    </FadeIn>
  );
};

const CardItem = () => {
  const comStyle1 =
    "bg-[#22251C] rounded-2xl px-[16px] py-[17px] md:py-[50px] border border-[rgba(255,255,255,0.3)]";
  const comStyle2 =
    "text-[16px] leading-[24px] md:text-[20px] leading-[22px] lg:text-[28px] lg:leading-[24px] font-medium text-center mb-[11px] md:mb-[25px]";
  const comStyle3 =
    "text-[12px] leading-[18px]  md:text-[14px] md:leading-[24px] text-center max-w-[350px] mx-auto";
  const list = [
    {
      t: "Hosted Checkout Page",
      c: "Ready-to-use payment page (redirect or iframe)  with branding customization support",
    },
    {
      t: "API Integration",
      c: "RESTful API supporting full control of payments, payouts, callbacks, reconciliation, and risk signals",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[22px]">
        {list.map((i, index) => {
          return (
            <FadeIn delay={index * 0.2} key={index}>
              <div className={cn(comStyle1, hoverStyle)}>
                <div className={cn(comStyle2)}>{i.t}</div>
                <div className={cn(comStyle3)}>{i.c}</div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </>
  );
};
const Service = () => {
  const list = [
    {
      t: "Dedicated Technical & Commercial Contacts",
      c: "for end-to-end coordination",
    },
    {
      t: "Full Lifecycle Support ",
      c: "from sandbox testing to production deployment",
    },
    {
      t: "Customizable Integration Options ",
      c: "for advanced scenarios (e.g., whitelisted callbacks, currency-segregated accounts)",
    },
    {
      t: "Versioned APIs",
      c: "to support long-term system evolution and backward compatibility",
    },
    {
      t: "Multilingual Support",
      c: "English, Chinese, Spanish",
    },
    {
      t: "24/7 Technical Assistance",
      c: "including emergency response channels",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[20px] md:gap-x-[20px] md:gap-y-[30px]">
      {list.map((i, index) => {
        return (
          <motion.div
            className="group relative overflow-hidden p-[15px] min-h-[206px] bg-[#23261D] rounded-[18px] pt-[30px] flex items-center flex-col cursor-pointer before:absolute before:inset-0 before:bg-[linear-gradient(180deg,#DEFE66_0%,#B0D840_100%)] before:opacity-0 before:transition-opacity before:duration-500 before:ease-out hover:before:opacity-100"
            key={index}
          >
            <Image
              className="relative z-10 mb-[10px]"
              alt="icon"
              width={32}
              height={32}
              src={`/images/int/${index + 1}.png`}
            />
            <div className="relative z-10 font-bold text-[20px] leading-[30px] mb-[8px] text-white group-hover:text-[#1A1A18] text-center max-w-[290px] transition-colors duration-500 ease-out">
              {i.t}
            </div>
            <div className="relative z-10 text-[12px] leading-[21px] max-w-[290px] text-center group-hover:text-[#1A1A18] transition-colors duration-500 ease-out">
              {i.c}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const ProgressItem = () => {
  const list = [
    {
      r: "1",
      t: "business days",
      c: "Commercial Agreement",
      s: "Finalize business model, pricing, supported currencies, and settlement terms with Vellpay.",
      i: IconOne,
    },
    {
      r: "1-2",
      t: "business days",
      c: "Compliance Review",
      s: "Provide company registration, license/exemption, UBO details, platform policies, and other KYB/KYC documents.",
      i: IconSecond,
    },
    {
      r: "3-5",
      t: "business days",
      c: "Technical Integration & Testing",
      s: "Obtain API credentials; configure sandbox for transaction simulation, callback testing, and risk checks. Complete redirect and branding setup for Hosted Checkout.",
      i: IconThree,
    },
    {
      r: "Immediate",
      t: "Immediate",
      c: "Go-Live",
      s: "Upon approval and successful testing, switch to production for live transactions. Fast-track available subject to approval.",
      i: IconFour,
    },
  ];
  const hoverStyle =
    " transition-all duration-700 ease-out   group-hover:scale-125  ";

  const stepDraw: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: custom,
      },
    }),
  };
  return (
    <div className="flex gap-[14px]">
      {list.map((i, index) => {
        const Icon = i.i;
        return (
          <div className="min-w-[239px] w-full" key={index}>
            <div className="text-[16px]  h-[55px] w-full  bg-[url('/images/int/bg1.png')]  bg-cover bg-right mb-[15px] flex items-center justify-center text-[#1A1B19]">
              <div>
                <span className="font-medium text-[20px] pr-[3px]">{i.r}</span>
                {index !== 3 && <span>{i.t}</span>}
              </div>
            </div>
            <div
              className={cn(
                "h-[264px]  pt-[27px]  bg-[#23261D] border border-[#DEFE66] rounded-[10px]",
                "group cursor-pointer",
              )}
            >
              <div className="flex items-center justify-center mb-[29px]">
                <Icon className={cn(hoverStyle)} />
              </div>
              <div className="min-h-[51px] mb-[13px] max-w-[203px] text-[16px] leading-[26px] text-white text-center font-medium mx-auto">
                {i.c}
              </div>
              <div className="max-w-[214px] mx-auto text-[12px] leading-[18px] text-center">
                {i.s}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function IntPage() {
  const commen = "relative bg-[#1A1A18] py-[89px] md:py-[200px] ";
  const textDraw: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        scale: { type: "spring", duration: 0.5 },
        delay: custom,
      },
    }),
  };
  const stepList = [
    {
      t: "Unified Payment Infrastructure",
      c: "for PayIn and PayOut across multiple countries",
    },
    {
      t: "Comprehensive API Suite",
      c: "for order creation, status queries, batch payouts, reconciliation, and refund handling",
    },
    {
      t: "Asynchronous Webhooks",
      c: "for real-time notifications on success, failure, fraud alerts, and dispute events",
    },
    {
      t: "Embedded Compliance Intelligence ",
      c: "including risk scoring, transaction profiling, and AML linkages",
    },
    {
      t: "Embedded Compliance Intelligence ",
      c: "including risk scoring, transaction profiling, and AML linkages",
    },
  ];
  return (
    <div>
      <div className="relative min-h-[640px] overflow-hidden bg-[url('/images/bg-int-m.png')] bg-cover bg-center md:min-h-0 md:bg-none center-reveal-mask">
        <ZoomIn className="hidden md:block">
          <Image
            className="w-full h-auto"
            alt="aml"
            height={639}
            src="/images/bg-int.png"
            width={1536}
            priority
          />
        </ZoomIn>
        <div className="md:absolute inset-0 w-full h-full z-2 flex items-center pt-[30px] md:pt-0">
          <PageContanier pclassName="w-full">
            <motion.div
              initial={{ opacity: 0, translateY: 40 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-[19px] md:mb-[9px] text-[32px] leading-[37px] md:text-[48px] md:leading-[68px] font-semibold"
            >
              Integration
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: 40 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="text-[12px] leading-[18px] md:text-[14px] md:leading-[20px] md:max-w-[432px] mb-[12px]"
            >
              Vellpay offers a secure, regulation-ready payment infrastructure
              designed for businesses operating in complex and high-compliance
              environments.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 40 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="text-[12px] leading-[18px] md:text-[14px] md:leading-[20px] md:max-w-[460px]"
            >
              Our platform enables seamless PayIn and PayOut operations across
              Latin America and Asia, backed by robust compliance oversight and
              real-time risk controls. Vellpay offers a secure, regulation-ready
              payment infrastructure designed for businesses operating in
              complex and high-compliance environments.
            </motion.div>
          </PageContanier>
        </div>
      </div>
      <div className={cn(commen)}>
        <PageContanier>
          <TitleItem
            title="Integration Options"
            className="mb-[34px] md:mb-[70px]"
          />
          <CardItem />
          <FadeIn delay={0.3}>
            <IntegrationItem />
          </FadeIn>
        </PageContanier>
      </div>
      <div className={cn("relative pt-[46px] pb-[75px]")}>
        <PageContanier pclassName="relative z-10">
          <TitleItem
            className="max-w-[1000px] mx-auto mb-[40px] md:mb-[27px]"
            title="Technical Support & Service Commitment"
          />
          <Service />
        </PageContanier>
        <div className="absolute inset-0 w-full h-full z-1">
          <BgItem />
        </div>
      </div>
      <div className={cn(commen)}>
        <PageContanier>
          <TitleItem
            title="Key Features"
            className=" md:hidden mb-[34px] md:mb-[70px]"
          />
          <div className="block md:hidden relative mx-auto max-w-[1093px]">
            {stepList.map((i, index) => {
              return (
                <div
                  className="mb-[20px] flex items-start justify-start"
                  key={index}
                >
                  <Image
                    className="mr-[45px] w-[57px]"
                    alt="step1"
                    height={54}
                    src={`/images/int/step${index}.png`}
                    width={57}
                  />
                  <div className="text-[14px] leading-[21px] flex-1">
                    <span className="font-semibold">{i.t}</span>
                    {i.c}
                  </div>
                </div>
              );
            })}
            <Image
              className="w-full"
              alt="step1"
              height={183}
              src={`/images/int/step5.png`}
              width={337}
            />
          </div>
          <div className="hidden md:block relative mx-auto max-w-[1093px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textDraw}
              custom={0.3}
              className="absolute  md:max-w-[180px] lg:max-w-[217px] bottom-[13.827%] left-[4.2%]  md:text-[12px] lg:text-[14px] md:leading-[14px] lg:leading-[21px]"
            >
              <span className="font-semibold">
                {stepList[0].t} {""}
              </span>
              {stepList[0].c}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textDraw}
              custom={0.5}
              className="absolute md:max-w-[180px] lg:max-w-[217px] top-[29.17%] md:left-[5%] lg:left-[11.985%] md:text-[12px] lg:text-[14px] md:leading-[14px] lg:leading-[21px]"
            >
              <span className="font-semibold">
                {stepList[1].t} {""}
              </span>
              {stepList[1].c}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textDraw}
              custom={0.7}
              className="absolute md:max-w-[180px] lg:max-w-[217px] top-[6.74%] left-[39.89%] md:text-[12px] lg:text-[14px] md:leading-[14px] lg:leading-[21px]"
            >
              <span className="font-semibold">
                {stepList[2].t} {""}
              </span>
              {stepList[2].c}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textDraw}
              custom={0.7}
              className="absolute md:max-w-[180px] lg:max-w-[217px] top-[28%] md:right-[10%] lg:right-[12.07%] md:text-[12px] lg:text-[14px] md:leading-[14px] lg:leading-[21px] md:text-right"
            >
              <span className="font-semibold">
                {stepList[3].t} {""}
              </span>
              {stepList[3].c}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textDraw}
              custom={1.1}
              className="absolute md:max-w-[180px] lg:max-w-[217px] bottom-[13.827%] right-[4.94%] md:text-[12px] lg:text-[14px] md:leading-[14px] lg:leading-[21px] md:text-right"
            >
              <span className="font-semibold">
                {stepList[4].t} {""}
              </span>
              {stepList[4].c}
            </motion.div>
            <BgFeatures />
          </div>
        </PageContanier>
      </div>
      <div className={cn("int-bg pt-[96px] pb-[162px]")}>
        <PageContanier>
          <TitleItem
            title="Integration Process"
            className="mb-[32px] md:mb-[47px]"
          />
          <FadeIn className="text-[14px] leading-[21px] mb-[30px] text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", repeat: Infinity, duration: 1 }}
            >
              ⚡
            </motion.span>
            Fast-track onboarding is available for urgent cases, subject to
            approval.
          </FadeIn>
          <div className="hide-scrollbar overflow-x-scroll">
            <ProgressItem />
          </div>
        </PageContanier>
      </div>
      <div className={cn(commen)}>
        <PageContanier>
          <TitleItem
            title="Technical Requirements"
            className="mb-[28px] md:mb-[70px]"
          />
          <Carousel />
        </PageContanier>
      </div>
      <PageContanier>
        <BtnLink />
      </PageContanier>
    </div>
  );
}

const BgItem = () => {
  return (
    <svg
      className="int-bg-item-svg h-full w-full"
      viewBox="0 0 1536 730"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410136168">
        <g id="Mask group" opacity="0.6">
          <mask
            id="mask0_4995_86464"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={1536}
            height={730}
          >
            <rect
              id="Rectangle 39438"
              width={1536}
              height={730}
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_4995_86464)">
            <g id="Group">
              <g id="OBJECTS">
                <g id="Group_2">
                  <g id="Clip path group">
                    <mask
                      id="mask1_4995_86464"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={-176}
                      y={-280}
                      width={1775}
                      height={1184}
                    >
                      <g id="clippath">
                        <path
                          id="Vector"
                          d="M1599 -280H-176V903.333H1599V-280Z"
                          fill="white"
                        />
                      </g>
                    </mask>
                    <g mask="url(#mask1_4995_86464)">
                      <g id="Group_3">
                        <g
                          id="Group_4"
                          style={{ mixBlendMode: "soft-light" }}
                          opacity="0.1"
                        >
                          <g id="Clip path group_2">
                            <mask
                              id="mask2_4995_86464"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x={306}
                              y={-106}
                              width={608}
                              height={608}
                            >
                              <g id="clippath-1">
                                <path
                                  id="Vector_2"
                                  d="M306.801 501.466L913.638 -105.395H306.801V501.466Z"
                                  fill="white"
                                />
                              </g>
                            </mask>
                            <g mask="url(#mask2_4995_86464)">
                              <g id="Group_5">
                                <g id="Group_6">
                                  <path
                                    id="Vector_3"
                                    d="M-81.9269 228.349L-85.6426 224.634C-71.1112 210.102 -60.8399 205.629 -50.8999 201.298C-40.9836 196.967 -31.6116 192.897 -17.7903 179.075C-3.96894 165.254 0.12543 155.882 4.43276 145.966C8.76376 136.026 13.2367 125.754 27.7681 111.223C42.2994 96.6916 52.5707 92.2186 62.5107 87.8876C72.4271 83.5566 81.7991 79.4859 95.6441 65.6646C109.465 51.8433 113.56 42.4713 117.867 32.555C122.198 22.615 126.671 12.3436 141.202 -2.1877C155.734 -16.719 166.005 -21.1921 175.945 -25.5231C185.861 -29.8541 195.233 -33.9247 209.055 -47.746C222.876 -61.5674 226.97 -70.9394 231.278 -80.8558C235.609 -90.7958 240.082 -101.067 254.613 -115.598C269.144 -130.13 279.416 -134.603 289.356 -138.934C299.272 -143.265 308.644 -147.335 322.465 -161.157C336.287 -174.978 340.381 -184.35 344.712 -194.29C349.043 -204.23 353.516 -214.501 368.047 -229.033C382.579 -243.564 392.85 -248.037 402.79 -252.368C412.706 -256.699 422.078 -260.77 435.923 -274.615C449.745 -288.436 453.839 -297.808 458.17 -307.748C462.501 -317.688 466.974 -327.959 481.505 -342.491C496.037 -357.022 506.332 -361.519 516.272 -365.85C526.188 -370.181 535.584 -374.275 549.405 -388.096C563.25 -401.941 567.321 -411.313 571.652 -421.23C575.983 -431.17 580.456 -441.441 595.011 -455.996L598.726 -452.28C584.881 -438.435 580.811 -429.063 576.48 -419.147C572.149 -409.207 567.676 -398.936 553.121 -384.381C538.589 -369.849 528.318 -365.353 518.354 -361.022C508.438 -356.691 499.042 -352.596 485.221 -338.775C471.4 -324.954 467.305 -315.582 462.998 -305.665C458.667 -295.725 454.194 -285.454 439.663 -270.923C425.131 -256.391 414.86 -251.918 404.92 -247.564C395.004 -243.233 385.632 -239.162 371.787 -225.317C357.965 -211.496 353.871 -202.124 349.564 -192.207C345.233 -182.267 340.76 -171.996 326.228 -157.465C311.697 -142.933 301.426 -138.46 291.486 -134.129C281.569 -129.798 272.197 -125.728 258.376 -111.906C244.555 -98.0851 240.46 -88.7131 236.153 -78.7967C231.822 -68.8567 227.349 -58.5854 212.818 -44.054C198.286 -29.5227 188.015 -25.0497 178.075 -20.7187C168.159 -16.3877 158.787 -12.317 144.965 1.50429C131.144 15.3256 127.05 24.6976 122.742 34.6139C118.411 44.5539 113.938 54.8253 99.4071 69.3566C84.8757 83.8879 74.6044 88.361 64.6644 92.692C54.7481 97.023 45.3761 101.094 31.5311 114.915C17.7098 128.736 13.6154 138.108 9.30809 148.025C4.97709 157.965 0.504089 168.236 -14.0272 182.767C-28.5586 197.299 -38.8299 201.772 -48.7699 206.103C-58.6863 210.434 -68.0583 214.504 -81.8796 228.326L-81.9269 228.349Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_4"
                                    d="M-59.3976 250.884L-63.1133 247.169C-48.5819 232.637 -38.3106 228.164 -28.3706 223.833C-18.4543 219.502 -9.08229 215.432 4.73904 201.61C18.5604 187.789 22.6547 178.417 26.962 168.5C31.293 158.561 35.766 148.289 50.2974 133.758C64.8287 119.226 75.1001 114.753 85.0401 110.422C94.9564 106.091 104.328 102.021 118.173 88.1758C131.995 74.3545 136.089 64.9824 140.396 55.0661C144.727 45.1261 149.2 34.8548 163.732 20.3235C178.263 5.79214 188.534 1.31917 198.474 -3.01183C208.391 -7.34283 217.763 -11.4135 231.584 -25.2349C245.405 -39.0562 249.5 -48.4282 253.807 -58.3445C258.138 -68.2845 262.611 -78.5558 277.142 -93.0635C291.674 -107.595 301.945 -112.068 311.861 -116.399C321.778 -120.73 331.15 -124.8 344.971 -138.622C358.792 -152.443 362.887 -161.815 367.194 -171.732C371.525 -181.672 375.998 -191.943 390.529 -206.474C405.061 -221.005 415.332 -225.479 425.272 -229.833C435.188 -234.164 444.56 -238.235 458.405 -252.08C472.227 -265.901 476.321 -275.273 480.628 -285.19C484.959 -295.13 489.432 -305.401 503.964 -319.932C518.495 -334.463 528.766 -338.96 538.73 -343.291C548.646 -347.622 558.042 -351.716 571.863 -365.538C585.708 -379.383 589.779 -388.755 594.11 -398.671C598.441 -408.611 602.914 -418.883 617.469 -433.438L621.185 -429.722C607.34 -415.877 603.245 -406.505 598.914 -396.589C594.583 -386.649 590.11 -376.377 575.555 -361.846C561.024 -347.315 550.753 -342.818 540.789 -338.487C530.873 -334.156 521.477 -330.061 507.656 -316.24C493.834 -302.419 489.74 -293.047 485.409 -283.107C481.078 -273.167 476.605 -262.896 462.074 -248.364C447.542 -233.833 437.271 -229.36 427.331 -225.029C417.415 -220.698 408.043 -216.627 394.198 -202.782C380.376 -188.961 376.282 -179.589 371.975 -169.673C367.644 -159.733 363.171 -149.461 348.639 -134.93C334.108 -120.399 323.837 -115.926 313.92 -111.595C304.004 -107.264 294.632 -103.193 280.811 -89.3715C266.989 -75.5502 262.895 -66.1782 258.588 -56.2618C254.257 -46.3218 249.784 -36.0505 235.252 -21.5429C220.721 -7.01154 210.45 -2.5385 200.51 1.7925C190.593 6.1235 181.221 10.1941 167.4 24.0155C153.579 37.8368 149.484 47.2088 145.177 57.1252C140.846 67.0652 136.373 77.3365 121.842 91.8678C107.31 106.399 97.039 110.872 87.099 115.203C77.1827 119.534 67.8107 123.605 53.9657 137.45C40.1444 151.271 36.0501 160.643 31.7427 170.559C27.4117 180.499 22.9387 190.771 8.40738 205.302C-6.12395 219.834 -16.3953 224.306 -26.3353 228.637C-36.2516 232.968 -45.6236 237.039 -59.4449 250.861L-59.3976 250.884Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_5"
                                    d="M-36.841 273.439L-40.5566 269.723C-26.0253 255.192 -15.754 250.719 -5.81395 246.388C4.10238 242.057 13.4744 237.986 27.2957 224.165C41.117 210.343 45.2114 200.971 49.5187 191.055C53.8497 181.115 58.3227 170.844 72.854 156.312C87.3854 141.781 97.6567 137.308 107.597 132.977C117.513 128.646 126.885 124.575 140.706 110.73C154.528 96.909 158.622 87.5369 162.929 77.6206C167.26 67.6806 171.733 57.4093 186.265 42.8779C200.796 28.3466 211.067 23.8736 221.007 19.5426C230.924 15.2116 240.296 11.1409 254.117 -2.68039C267.938 -16.5017 272.033 -25.8737 276.34 -35.79C280.671 -45.73 285.144 -56.0014 299.652 -70.5091C314.183 -85.0404 324.454 -89.5134 334.394 -93.8444C344.311 -98.1754 353.683 -102.246 367.504 -116.067C381.325 -129.889 385.42 -139.261 389.727 -149.177C394.058 -159.117 398.531 -169.388 413.062 -183.92C427.594 -198.451 437.865 -202.924 447.805 -207.255C457.721 -211.586 467.093 -215.657 480.938 -229.502C494.76 -243.323 498.854 -252.695 503.161 -262.611C507.492 -272.551 511.965 -282.823 526.497 -297.354C541.028 -311.885 551.299 -316.382 561.263 -320.713C571.179 -325.044 580.575 -329.138 594.396 -342.96C608.241 -356.805 612.312 -366.177 616.643 -376.093C620.974 -386.033 625.447 -396.304 640.002 -410.859L643.718 -407.144C629.873 -393.299 625.802 -383.927 621.471 -374.01C617.14 -364.07 612.667 -353.799 598.112 -339.244C583.581 -324.713 573.286 -320.216 563.346 -315.885C553.429 -311.554 544.034 -307.46 530.212 -293.638C516.391 -279.817 512.297 -270.445 507.966 -260.505C503.635 -250.565 499.162 -240.294 484.63 -225.762C470.099 -211.231 459.828 -206.758 449.888 -202.427C439.971 -198.096 430.599 -194.025 416.754 -180.18C402.933 -166.359 398.839 -156.987 394.508 -147.047C390.177 -137.107 385.704 -126.836 371.172 -112.304C356.641 -97.7731 346.37 -93.3 336.43 -88.969C326.513 -84.638 317.141 -80.5674 303.32 -66.7461C289.499 -52.9247 285.428 -43.5527 281.097 -33.6364C276.766 -23.6964 272.293 -13.425 257.762 1.10629C243.23 15.6376 232.959 20.1107 223.019 24.4417C213.103 28.7727 203.731 32.8433 189.909 46.6646C176.088 60.486 171.994 69.8579 167.686 79.7743C163.355 89.7143 158.882 99.9857 144.351 114.517C129.82 129.048 119.548 133.521 109.608 137.852C99.692 142.183 90.32 146.254 76.4987 160.099C62.6774 173.92 58.583 183.292 54.2757 193.209C49.9447 203.149 45.4717 213.42 30.9404 227.951C16.409 242.483 6.13769 246.956 -3.80231 251.287C-13.7186 255.618 -23.0906 259.688 -36.912 273.51L-36.841 273.439Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_6"
                                    d="M-14.2882 295.99L-18.0039 292.274C-3.47257 277.743 6.79878 273.27 16.7388 268.939C26.6551 264.608 36.0271 260.537 49.8484 246.716C63.6698 232.894 67.7641 223.522 72.0714 213.606C76.4024 203.666 80.8754 193.395 95.4068 178.863C109.938 164.332 120.209 159.859 130.149 155.528C140.066 151.197 149.438 147.126 163.283 133.305C177.104 119.484 181.198 110.112 185.506 100.195C189.837 90.2553 194.31 79.984 208.841 65.4526C223.372 50.9213 233.644 46.4483 243.584 42.1173C253.5 37.7863 262.872 33.7156 276.717 19.8943C290.538 6.07297 294.609 -3.29901 298.94 -13.2153C303.271 -23.1553 307.744 -33.4267 322.275 -47.9581C336.807 -62.4894 347.078 -66.9624 357.018 -71.2934C366.934 -75.6244 376.306 -79.695 390.128 -93.5163C403.949 -107.338 408.043 -116.71 412.374 -126.65C416.705 -136.59 421.178 -146.861 435.71 -161.392C450.241 -175.924 460.512 -180.397 470.452 -184.728C480.369 -189.059 489.741 -193.153 503.586 -206.974C517.407 -220.796 521.501 -230.168 525.832 -240.108C530.163 -250.048 534.636 -260.319 549.168 -274.85C563.699 -289.382 573.994 -293.878 583.934 -298.209C593.85 -302.54 603.246 -306.635 617.067 -320.456C630.912 -334.301 635.007 -343.673 639.338 -353.589C643.669 -363.529 648.142 -373.801 662.697 -388.332L666.412 -384.616C652.567 -370.771 648.497 -361.399 644.166 -351.483C639.835 -341.543 635.362 -331.272 620.807 -316.717C606.275 -302.185 596.004 -297.689 586.04 -293.358C576.124 -289.027 566.728 -284.932 552.907 -271.111C539.086 -257.29 534.991 -247.918 530.684 -238.001C526.353 -228.061 521.88 -217.79 507.349 -203.259C492.817 -188.727 482.546 -184.254 472.606 -179.923C462.69 -175.592 453.318 -171.498 439.473 -157.677C425.651 -143.855 421.557 -134.483 417.25 -124.567C412.919 -114.627 408.446 -104.356 393.914 -89.8244C379.383 -75.293 369.112 -70.82 359.172 -66.489C349.255 -62.158 339.883 -58.0874 326.062 -44.2661C312.241 -30.4447 308.146 -21.0727 303.839 -11.1564C299.508 -1.21636 295.035 9.05494 280.527 23.5626C265.996 38.0939 255.725 42.567 245.785 46.898C235.868 51.229 226.496 55.2996 212.651 69.1209C198.83 82.9423 194.736 92.3143 190.428 102.231C186.097 112.171 181.624 122.442 167.093 136.973C152.562 151.505 142.29 155.978 132.35 160.309C122.434 164.64 113.062 168.71 99.2171 182.532C85.3958 196.353 81.3014 205.725 76.9941 215.641C72.6631 225.581 68.1901 235.853 53.6588 250.384C39.1274 264.915 28.8561 269.388 18.9161 273.719C8.99978 278.05 -0.372237 282.121 -14.1936 295.942L-14.2882 295.99Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_7"
                                    d="M8.24299 318.521L4.52734 314.805C19.0587 300.274 29.33 295.801 39.27 291.47C49.1863 287.139 58.5583 283.068 72.3797 269.247C86.201 255.426 90.2953 246.054 94.6027 236.137C98.9337 226.197 103.407 215.926 117.938 201.395C132.469 186.863 142.741 182.39 152.681 178.059C162.597 173.728 171.969 169.658 185.814 155.813C199.635 141.991 203.73 132.619 208.037 122.703C212.368 112.763 216.841 102.492 231.372 87.9603C245.904 73.4289 256.175 68.9559 266.115 64.6249C276.031 60.2939 285.403 56.2233 299.225 42.4019C313.046 28.5806 317.14 19.2085 321.448 9.29222C325.779 -0.647784 330.252 -10.9191 344.783 -25.4267C359.314 -39.9581 369.586 -44.4311 379.502 -48.7621C389.418 -53.0931 398.79 -57.1637 412.612 -70.9851C426.433 -84.8064 430.527 -94.1784 434.835 -104.095C439.166 -114.035 443.639 -124.306 458.17 -138.837C472.701 -153.369 482.973 -157.842 492.913 -162.173C502.829 -166.504 512.201 -170.574 526.046 -184.419C539.867 -198.241 543.962 -207.613 548.269 -217.553C552.6 -227.493 557.073 -237.764 571.604 -252.295C586.136 -266.827 596.407 -271.323 606.371 -275.654C616.287 -279.985 625.683 -284.08 639.504 -297.901C653.325 -311.722 657.42 -321.118 661.751 -331.034C666.082 -340.974 670.555 -351.246 685.11 -365.801L688.825 -362.085C674.98 -348.24 670.886 -338.868 666.555 -328.952C662.224 -319.012 657.751 -308.74 643.196 -294.209C628.665 -279.678 618.393 -275.181 608.43 -270.85C598.513 -266.519 589.118 -262.425 575.296 -248.603C561.475 -234.782 557.381 -225.41 553.073 -215.494C548.742 -205.554 544.269 -195.282 529.738 -180.751C515.207 -166.22 504.935 -161.747 494.995 -157.416C485.079 -153.085 475.707 -149.014 461.862 -135.169C448.041 -121.348 443.946 -111.976 439.639 -102.059C435.308 -92.1194 430.835 -81.8481 416.304 -67.3168C401.772 -52.7854 391.501 -48.3124 381.585 -43.9814C371.668 -39.6504 362.296 -35.5798 348.475 -21.7584C334.654 -7.93711 330.559 1.43487 326.252 11.3512C321.921 21.2912 317.448 31.5626 302.917 46.0702C288.385 60.6016 278.114 65.0746 268.174 69.4056C258.258 73.7366 248.886 77.8072 235.064 91.6286C221.243 105.45 217.149 114.822 212.841 124.738C208.51 134.678 204.037 144.95 189.506 159.481C174.975 174.012 164.703 178.485 154.763 182.816C144.847 187.147 135.475 191.218 121.63 205.063C107.809 218.884 103.714 228.256 99.407 238.173C95.076 248.113 90.603 258.384 76.0717 272.915C61.5403 287.447 51.269 291.92 41.329 296.251C31.4127 300.582 22.0407 304.652 8.21934 318.474L8.24299 318.521Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_8"
                                    d="M30.7977 341.075L27.082 337.359C41.6134 322.828 51.8847 318.355 61.8247 314.024C71.7411 309.693 81.113 305.622 94.9344 291.801C108.756 277.98 112.85 268.608 117.157 258.691C121.488 248.751 125.961 238.48 140.493 223.949C155.024 209.417 165.295 204.944 175.235 200.613C185.152 196.282 194.524 192.212 208.345 178.39C222.166 164.569 226.261 155.197 230.568 145.281C234.899 135.341 239.372 125.069 253.903 110.538C268.435 96.0067 278.706 91.5338 288.646 87.2028C298.562 82.8718 307.934 78.8011 321.756 64.9797C335.577 51.1584 339.671 41.7864 343.979 31.8701C348.31 21.9301 352.783 11.6587 367.314 -2.84894C381.845 -17.3803 392.117 -21.8532 402.033 -26.1842C411.949 -30.5152 421.321 -34.5859 435.143 -48.4073C448.964 -62.2286 453.058 -71.6006 457.366 -81.5169C461.697 -91.4569 466.17 -101.728 480.701 -116.26C495.232 -130.791 505.504 -135.264 515.444 -139.595C525.36 -143.926 534.732 -148.02 548.577 -161.842C562.422 -175.663 566.493 -185.035 570.8 -194.951C575.131 -204.891 579.604 -215.163 594.135 -229.694C608.667 -244.225 618.938 -248.722 628.902 -253.053C638.818 -257.384 648.214 -261.478 662.035 -275.3C675.88 -289.145 679.951 -298.517 684.282 -308.433C688.613 -318.373 693.086 -328.644 707.641 -343.199L711.356 -339.484C697.511 -325.639 693.441 -316.267 689.11 -306.35C684.779 -296.41 680.306 -286.139 665.751 -271.584C651.219 -257.053 640.924 -252.556 630.984 -248.225C621.068 -243.894 611.672 -239.8 597.851 -225.978C584.03 -212.157 579.935 -202.785 575.604 -192.845C571.273 -182.905 566.8 -172.634 552.269 -158.102C537.738 -143.571 527.466 -139.098 517.526 -134.767C507.61 -130.436 498.238 -126.365 484.393 -112.52C470.572 -98.6989 466.477 -89.3269 462.146 -79.3869C457.815 -69.4469 453.342 -59.1755 438.811 -44.6442C424.28 -30.1129 414.008 -25.6399 404.092 -21.3089C394.176 -16.9779 384.804 -12.9072 370.982 0.91412C357.161 14.7355 353.067 24.1074 348.759 34.0238C344.428 43.9638 339.955 54.2351 325.424 68.7427C310.893 83.2741 300.621 87.7471 290.681 92.0781C280.765 96.4091 271.393 100.48 257.572 114.301C243.75 128.122 239.656 137.494 235.349 147.411C231.018 157.351 226.545 167.622 212.013 182.153C197.482 196.685 187.211 201.158 177.271 205.489C167.354 209.82 157.982 213.89 144.161 227.712C130.34 241.533 126.245 250.905 121.938 260.821C117.607 270.761 113.134 281.033 98.6027 295.564C84.0714 310.095 73.8 314.568 63.86 318.899C53.9437 323.23 44.5717 327.301 30.7504 341.122L30.7977 341.075Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_9"
                                    d="M53.3524 363.606L49.6367 359.891C64.1681 345.359 74.4394 340.886 84.3794 336.555C94.2957 332.224 103.668 328.154 117.489 314.332C131.31 300.511 135.405 291.139 139.712 281.223C144.043 271.283 148.516 261.011 163.047 246.48C177.579 231.949 187.85 227.476 197.79 223.145C207.706 218.814 217.078 214.743 230.9 200.922C244.721 187.1 248.815 177.728 253.123 167.812C257.454 157.872 261.927 147.601 276.458 133.069C290.989 118.538 301.261 114.065 311.201 109.734C321.117 105.403 330.489 101.332 344.31 87.511C358.132 73.6897 362.226 64.3176 366.533 54.4013C370.864 44.4613 375.337 34.19 389.869 19.6823C404.4 5.15101 414.671 0.677973 424.611 -3.65303C434.528 -7.98403 443.9 -12.0547 457.721 -25.876C471.542 -39.6973 475.637 -49.0693 479.944 -58.9856C484.275 -68.9256 488.748 -79.197 503.279 -93.7283C517.811 -108.26 528.082 -112.733 538.022 -117.064C547.938 -121.395 557.31 -125.465 571.155 -139.31C584.977 -153.132 589.071 -162.504 593.402 -172.444C597.733 -182.384 602.206 -192.655 616.737 -207.186C631.269 -221.718 641.564 -226.214 651.504 -230.545C661.42 -234.876 670.816 -238.971 684.637 -252.792C698.482 -266.637 702.576 -276.009 706.907 -285.925C711.238 -295.865 715.711 -306.137 730.266 -320.668L733.982 -316.952C720.137 -303.107 716.066 -293.735 711.735 -283.819C707.404 -273.879 702.931 -263.608 688.376 -249.053C673.845 -234.521 663.55 -230.025 653.61 -225.694C643.694 -221.363 634.298 -217.268 620.477 -203.447C606.655 -189.626 602.561 -180.254 598.254 -170.337C593.923 -160.397 589.45 -150.126 574.918 -135.595C560.387 -121.063 550.116 -116.59 540.176 -112.259C530.259 -107.928 520.887 -103.858 507.042 -90.0127C493.221 -76.1913 489.127 -66.8194 484.819 -56.903C480.488 -46.963 476.015 -36.6916 461.484 -22.1603C446.953 -7.62897 436.681 -3.15601 426.741 1.17499C416.825 5.50599 407.453 9.57669 393.632 23.398C379.81 37.2194 375.716 46.5913 371.409 56.5077C367.078 66.4477 362.605 76.719 348.073 91.2266C333.542 105.758 323.271 110.231 313.331 114.562C303.414 118.893 294.042 122.964 280.221 136.785C266.4 150.606 262.305 159.978 257.998 169.895C253.667 179.835 249.194 190.106 234.663 204.637C220.131 219.169 209.86 223.642 199.92 227.973C190.004 232.304 180.632 236.374 166.787 250.219C152.965 264.041 148.871 273.413 144.564 283.329C140.233 293.269 135.76 303.54 121.228 318.072C106.697 332.603 96.4257 337.076 86.4857 341.407C76.5694 345.738 67.1974 349.809 53.3761 363.63L53.3524 363.606Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_10"
                                    d="M75.8817 386.162L72.166 382.446C86.6973 367.915 96.9687 363.441 106.885 359.11C116.801 354.779 126.173 350.709 139.995 336.888C153.816 323.066 157.91 313.694 162.218 303.778C166.549 293.838 171.022 283.566 185.553 269.035C200.084 254.504 210.356 250.031 220.296 245.7C230.212 241.369 239.584 237.298 253.429 223.453C267.25 209.632 271.345 200.26 275.652 190.343C279.983 180.403 284.456 170.132 298.987 155.601C313.519 141.069 323.79 136.597 333.73 132.266C343.646 127.935 353.018 123.864 366.84 110.042C380.661 96.2211 384.755 86.8492 389.063 76.9328C393.394 66.9928 397.867 56.7215 412.398 42.2138C426.929 27.6825 437.201 23.2095 447.117 18.8785C457.033 14.5475 466.405 10.4768 480.227 -3.34452C494.048 -17.1659 498.142 -26.5378 502.45 -36.4542C506.781 -46.3942 511.254 -56.6655 525.785 -71.1968C540.316 -85.7282 550.588 -90.2012 560.528 -94.5322C570.444 -98.8632 579.816 -102.934 593.661 -116.779C607.482 -130.6 611.577 -139.972 615.884 -149.912C620.215 -159.852 624.688 -170.124 639.219 -184.655C653.751 -199.186 664.046 -203.683 673.986 -208.014C683.902 -212.345 693.298 -216.439 707.119 -230.26C720.94 -244.082 725.035 -253.477 729.366 -263.394C733.697 -273.334 738.17 -283.605 752.725 -298.16L756.44 -294.445C742.595 -280.6 738.525 -271.228 734.194 -261.311C729.863 -251.371 725.39 -241.1 710.835 -226.545C696.303 -212.014 686.032 -207.517 676.068 -203.186C666.152 -198.855 656.756 -194.76 642.935 -180.939C629.114 -167.118 625.019 -157.746 620.712 -147.806C616.381 -137.866 611.908 -127.595 597.377 -113.063C582.845 -98.5319 572.574 -94.0589 562.634 -89.7279C552.718 -85.3969 543.346 -81.3025 529.501 -67.4812C515.679 -53.6599 511.585 -44.2878 507.278 -34.3715C502.947 -24.4315 498.474 -14.1602 483.942 0.371162C469.411 14.9025 459.14 19.3755 449.223 23.7065C439.307 28.0375 429.935 32.1082 416.114 45.9295C402.292 59.7508 398.198 69.1228 393.891 79.0391C389.56 88.9791 385.087 99.2505 370.555 113.758C356.024 128.289 345.753 132.762 335.813 137.093C325.896 141.424 316.524 145.495 302.703 159.316C288.882 173.138 284.787 182.51 280.48 192.426C276.149 202.366 271.676 212.637 257.145 227.169C242.613 241.7 232.342 246.173 222.402 250.504C212.486 254.835 203.114 258.906 189.269 272.751C175.447 286.572 171.353 295.944 167.046 305.86C162.715 315.8 158.242 326.072 143.71 340.603C129.179 355.135 118.908 359.608 108.991 363.939C99.075 368.27 89.703 372.34 75.8817 386.162Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_11"
                                    d="M98.4364 408.716L94.7207 405C109.252 390.469 119.523 385.996 129.463 381.665C139.38 377.334 148.752 373.263 162.573 359.442C176.394 345.621 180.489 336.249 184.796 326.332C189.127 316.392 193.6 306.121 208.131 291.59C222.663 277.058 232.934 272.585 242.874 268.254C252.79 263.923 262.162 259.853 275.984 246.031C289.805 232.21 293.899 222.838 298.207 212.922C302.538 202.982 307.011 192.71 321.542 178.179C336.073 163.648 346.345 159.175 356.285 154.844C366.201 150.513 375.573 146.442 389.394 132.621C403.216 118.799 407.31 109.427 411.617 99.5109C415.948 89.5709 420.421 79.2996 434.953 64.7683C449.484 50.2369 459.755 45.764 469.695 41.433C479.612 37.102 488.984 33.0313 502.805 19.2099C516.626 5.38862 520.721 -3.98336 525.028 -13.8997C529.359 -23.8397 533.832 -34.111 548.363 -48.6423C562.895 -63.1737 573.166 -67.6467 583.106 -71.9777C593.022 -76.3087 602.418 -80.3794 616.239 -94.2244C630.061 -108.046 634.155 -117.418 638.462 -127.334C642.793 -137.274 647.266 -147.545 661.798 -162.077C676.329 -176.608 686.6 -181.105 696.564 -185.436C706.48 -189.767 715.876 -193.861 729.697 -207.682C743.519 -221.504 747.613 -230.899 751.944 -240.816C756.275 -250.756 760.748 -261.027 775.303 -275.582L779.019 -271.866C765.174 -258.021 761.103 -248.649 756.772 -238.733C752.441 -228.793 747.968 -218.522 733.413 -203.967C718.882 -189.435 708.587 -184.939 698.647 -180.608C688.73 -176.277 679.335 -172.182 665.513 -158.361C651.692 -144.54 647.598 -135.168 643.267 -125.228C638.936 -115.288 634.463 -105.016 619.931 -90.485C605.4 -75.9537 595.129 -71.4807 585.189 -67.126C575.272 -62.795 565.9 -58.7243 552.055 -44.8793C538.234 -31.058 534.14 -21.686 529.809 -11.746C525.478 -1.80602 521.005 8.4653 506.473 22.9966C491.942 37.528 481.671 42.001 471.731 46.332C461.814 50.663 452.442 54.7336 438.621 68.555C424.8 82.3763 420.705 91.7483 416.398 101.665C412.067 111.605 407.594 121.876 393.063 136.407C378.531 150.939 368.26 155.412 358.32 159.743C348.404 164.074 339.032 168.144 325.21 181.966C311.389 195.787 307.295 205.159 302.987 215.075C298.656 225.015 294.183 235.287 279.652 249.818C265.121 264.349 254.849 268.822 244.909 273.153C234.993 277.484 225.621 281.555 211.8 295.376C197.978 309.198 193.884 318.57 189.577 328.486C185.246 338.426 180.773 348.697 166.241 363.229C151.71 377.76 141.439 382.233 131.499 386.564C121.582 390.895 112.21 394.966 98.389 408.787L98.4364 408.716Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_12"
                                    d="M120.991 431.24L117.275 427.524C131.807 412.993 142.078 408.52 152.018 404.189C161.934 399.858 171.306 395.787 185.128 381.966C198.949 368.144 203.043 358.772 207.351 348.856C211.682 338.916 216.155 328.645 230.686 314.113C245.217 299.582 255.489 295.109 265.429 290.778C275.345 286.447 284.717 282.376 298.562 268.531C312.383 254.71 316.478 245.338 320.785 235.422C325.116 225.482 329.589 215.21 344.12 200.679C358.652 186.148 368.923 181.675 378.863 177.344C388.779 173.013 398.151 168.942 411.973 155.121C425.794 141.299 429.888 131.927 434.196 122.011C438.527 112.071 443 101.8 457.531 87.292C472.062 72.7607 482.334 68.2876 492.25 63.9566C502.166 59.6256 511.538 55.555 525.36 41.7337C539.181 27.9123 543.275 18.5403 547.583 8.62395C551.914 -1.31605 556.387 -11.5874 570.918 -26.1187C585.449 -40.65 595.721 -45.123 605.661 -49.4777C615.577 -53.8087 624.949 -57.8794 638.794 -71.7244C652.615 -85.5457 656.71 -94.9177 661.041 -104.858C665.372 -114.798 669.845 -125.069 684.376 -139.6C698.907 -154.132 709.202 -158.628 719.142 -162.959C729.059 -167.29 738.454 -171.385 752.276 -185.206C766.121 -199.051 770.215 -208.423 774.546 -218.339C778.877 -228.279 783.35 -238.551 797.905 -253.082L801.621 -249.366C787.776 -235.521 783.705 -226.149 779.374 -216.233C775.043 -206.293 770.57 -196.022 756.015 -181.467C741.484 -166.935 731.212 -162.439 721.249 -158.108C711.332 -153.777 701.937 -149.682 688.115 -135.861C674.294 -122.04 670.2 -112.668 665.892 -102.751C661.561 -92.8114 657.088 -82.5401 642.557 -68.0087C628.026 -53.4774 617.754 -49.0044 607.814 -44.6734C597.898 -40.3424 588.502 -36.2717 574.681 -22.4267C560.86 -8.58171 556.765 0.766606 552.458 10.6829C548.127 20.6229 543.654 30.8943 529.123 45.4257C514.591 59.957 504.32 64.43 494.38 68.761C484.464 73.092 475.092 77.1627 461.27 90.984C447.449 104.805 443.355 114.177 439.047 124.094C434.716 134.034 430.243 144.305 415.712 158.813C401.181 173.344 390.909 177.817 380.969 182.148C371.053 186.479 361.681 190.55 347.86 204.371C334.038 218.192 329.944 227.564 325.637 237.481C321.306 247.421 316.833 257.692 302.301 272.223C287.77 286.755 277.499 291.228 267.559 295.559C257.642 299.89 248.27 303.96 234.425 317.805C220.604 331.627 216.51 340.999 212.202 350.915C207.871 360.855 203.398 371.126 188.867 385.658C174.336 400.189 164.064 404.662 154.124 408.993C144.208 413.324 134.836 417.395 121.015 431.216L120.991 431.24Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_13"
                                    d="M143.52 453.806L139.805 450.091C154.336 435.559 164.607 431.086 174.524 426.755C184.44 422.424 193.812 418.354 207.633 404.532C221.455 390.711 225.549 381.339 229.856 371.423C234.187 361.483 238.66 351.211 253.192 336.68C267.723 322.149 277.994 317.676 287.934 313.345C297.851 309.014 307.223 304.943 321.068 291.098C334.889 277.277 338.983 267.905 343.291 257.988C347.622 248.048 352.095 237.777 366.626 223.246C381.157 208.714 391.429 204.241 401.369 199.91C411.285 195.579 420.657 191.509 434.478 177.687C448.3 163.866 452.394 154.494 456.701 144.578C461.032 134.638 465.505 124.366 480.037 109.859C494.568 95.3273 504.839 90.8543 514.756 86.5233C524.672 82.1923 534.044 78.1216 547.865 64.3003C561.687 50.479 565.781 41.107 570.112 31.167C574.443 21.227 578.916 10.9556 593.447 -3.57575C607.979 -18.1071 618.25 -22.5801 628.19 -26.9111C638.106 -31.2421 647.478 -35.3127 661.323 -49.1577C675.145 -62.979 679.239 -72.3511 683.546 -82.2911C687.877 -92.2311 692.35 -102.502 706.882 -117.034C721.413 -131.565 731.684 -136.062 741.648 -140.393C751.564 -144.724 760.96 -148.818 774.781 -162.639C788.626 -176.484 792.697 -185.856 797.028 -195.773C801.359 -205.713 805.832 -215.984 820.387 -230.539L824.103 -226.823C810.258 -212.978 806.187 -203.606 801.856 -193.69C797.525 -183.75 793.052 -173.479 778.497 -158.924C763.966 -144.392 753.694 -139.896 743.731 -135.565C733.814 -131.234 724.419 -127.139 710.597 -113.318C696.776 -99.4967 692.682 -90.1247 688.374 -80.1847C684.043 -70.2447 679.57 -59.9734 665.039 -45.4421C650.508 -30.9108 640.236 -26.4377 630.296 -22.1067C620.38 -17.7757 611.008 -13.7051 597.163 0.13993C583.342 13.9613 579.247 23.3332 574.94 33.2496C570.609 43.1896 566.136 53.461 551.605 67.9923C537.073 82.5236 526.802 86.9966 516.886 91.3276C506.969 95.6586 497.597 99.7293 483.776 113.551C469.955 127.372 465.86 136.744 461.553 146.66C457.222 156.6 452.749 166.872 438.218 181.379C423.686 195.911 413.415 200.384 403.475 204.715C393.559 209.046 384.187 213.116 370.365 226.938C356.544 240.759 352.45 250.131 348.142 260.047C343.811 269.987 339.338 280.259 324.807 294.79C310.276 309.321 300.004 313.794 290.064 318.125C280.148 322.456 270.776 326.527 256.931 340.372C243.11 354.193 239.015 363.565 234.708 373.482C230.377 383.422 225.904 393.693 211.373 408.224C196.841 422.756 186.57 427.229 176.654 431.56C166.737 435.891 157.365 439.961 143.544 453.783L143.52 453.806Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_14"
                                    d="M166.077 476.353L162.361 472.637C176.893 458.106 187.164 453.633 197.104 449.302C207.02 444.971 216.392 440.9 230.214 427.079C244.035 413.257 248.129 403.885 252.437 393.969C256.768 384.029 261.241 373.758 275.772 359.226C290.303 344.695 300.575 340.222 310.515 335.891C320.431 331.56 329.803 327.489 343.648 313.668C357.469 299.847 361.564 290.475 365.871 280.558C370.202 270.618 374.675 260.347 389.206 245.816C403.738 231.284 414.009 226.811 423.949 222.48C433.865 218.149 443.237 214.079 457.059 200.257C470.88 186.436 474.974 177.064 479.282 167.148C483.613 157.208 488.086 146.936 502.617 132.405C517.148 117.874 527.42 113.401 537.36 109.07C547.276 104.739 556.648 100.668 570.469 86.8467C584.291 73.0254 588.385 63.6534 592.692 53.737C597.023 43.797 601.496 33.5257 616.028 18.9944C630.559 4.46303 640.83 -0.00993467 650.77 -4.34094C660.687 -8.67194 670.082 -12.7663 683.904 -26.5877C697.725 -40.409 701.819 -49.781 706.127 -59.6973C710.458 -69.6373 714.931 -79.9086 729.462 -94.44C743.993 -108.971 754.265 -113.468 764.228 -117.799C774.145 -122.13 783.54 -126.224 797.362 -140.046C811.183 -153.867 815.277 -163.263 819.608 -173.179C823.939 -183.119 828.412 -193.39 842.967 -207.945L846.683 -204.23C832.838 -190.385 828.767 -181.013 824.436 -171.096C820.105 -161.156 815.632 -150.885 801.077 -136.33C786.546 -121.799 776.251 -117.302 766.311 -112.971C756.395 -108.64 746.999 -104.546 733.178 -90.7243C719.356 -76.903 715.262 -67.5309 710.931 -57.5909C706.6 -47.6509 702.127 -37.3796 687.596 -22.8483C673.064 -8.31695 662.793 -3.84399 652.853 0.487013C642.937 4.81801 633.565 8.88874 619.72 22.7337C605.898 36.5551 601.804 45.9271 597.473 55.8671C593.142 65.8071 588.669 76.0784 574.138 90.6097C559.606 105.141 549.335 109.614 539.395 113.945C529.479 118.276 520.107 122.347 506.285 136.168C492.464 149.989 488.37 159.361 484.062 169.278C479.731 179.218 475.258 189.489 460.727 204.02C446.196 218.552 435.924 223.025 425.984 227.356C416.068 231.687 406.696 235.757 392.875 249.579C379.053 263.4 374.959 272.772 370.652 282.688C366.321 292.628 361.848 302.9 347.316 317.431C332.785 331.962 322.514 336.435 312.574 340.766C302.657 345.097 293.285 349.168 279.464 362.989C265.643 376.811 261.548 386.183 257.241 396.099C252.91 406.039 248.437 416.31 233.906 430.842C219.374 445.373 209.103 449.846 199.163 454.177C189.247 458.508 179.875 462.579 166.053 476.4L166.077 476.353Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_15"
                                    d="M188.606 498.884L184.891 495.169C199.422 480.637 209.693 476.164 219.633 471.833C229.55 467.502 238.922 463.432 252.743 449.61C266.564 435.789 270.659 426.417 274.966 416.5C279.297 406.56 283.77 396.289 298.301 381.758C312.833 367.227 323.104 362.754 333.044 358.423C342.96 354.092 352.332 350.021 366.177 336.176C379.999 322.354 384.093 312.982 388.4 303.066C392.731 293.126 397.204 282.855 411.736 268.324C426.267 253.792 436.538 249.319 446.478 244.988C456.395 240.657 465.767 236.587 479.588 222.765C493.409 208.944 497.504 199.572 501.811 189.656C506.142 179.716 510.615 169.444 525.146 154.936C539.678 140.405 549.949 135.932 559.889 131.601C569.805 127.27 579.177 123.199 592.999 109.378C606.82 95.5568 610.914 86.1849 615.222 76.2685C619.553 66.3285 624.026 56.0571 638.557 41.5258C653.088 26.9945 663.36 22.5215 673.3 18.1905C683.216 13.8595 692.588 9.78884 706.433 -4.05616C720.254 -17.8775 724.349 -27.2495 728.68 -37.1895C733.011 -47.1295 737.484 -57.4008 752.015 -71.9322C766.57 -86.4635 776.841 -90.9602 786.781 -95.2912C796.721 -99.6222 806.093 -103.717 819.938 -117.538C833.783 -131.383 837.854 -140.755 842.185 -150.671C846.516 -160.611 850.989 -170.882 865.544 -185.438L869.26 -181.722C855.415 -167.877 851.344 -158.505 847.013 -148.589C842.682 -138.649 838.209 -128.377 823.654 -113.822C809.099 -99.2908 798.828 -94.7942 788.888 -90.4632C778.948 -86.1322 769.576 -82.0379 755.731 -68.2165C741.909 -54.3952 737.815 -45.0231 733.508 -35.1068C729.177 -25.1668 724.704 -14.8955 710.172 -0.364164C695.641 14.1672 685.37 18.6401 675.43 22.9711C665.513 27.3021 656.118 31.3729 642.296 45.2179C628.475 59.0392 624.381 68.4112 620.073 78.3275C615.742 88.2675 611.269 98.5388 596.738 113.07C582.207 127.601 571.935 132.075 562.019 136.406C552.103 140.737 542.731 144.807 528.909 158.628C515.088 172.45 510.994 181.822 506.686 191.738C502.355 201.678 497.882 211.95 483.351 226.457C468.82 240.989 458.548 245.461 448.608 249.792C438.692 254.123 429.32 258.194 415.499 272.016C401.677 285.837 397.583 295.209 393.276 305.125C388.945 315.065 384.472 325.337 369.94 339.868C355.409 354.399 345.138 358.872 335.198 363.203C325.281 367.534 315.909 371.605 302.064 385.45C288.243 399.271 284.149 408.643 279.841 418.56C275.51 428.5 271.037 438.771 256.506 453.302C241.975 467.834 231.703 472.307 221.763 476.638C211.847 480.969 202.475 485.039 188.654 498.861L188.606 498.884Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_16"
                                    d="M211.161 521.443L207.445 517.727C221.977 503.196 232.248 498.723 242.164 494.392C252.081 490.061 261.453 485.99 275.274 472.169C289.095 458.347 293.19 448.975 297.497 439.059C301.828 429.119 306.301 418.848 320.832 404.316C335.364 389.785 345.635 385.312 355.575 380.981C365.491 376.65 374.863 372.579 388.708 358.758C402.53 344.937 406.624 335.565 410.931 325.648C415.262 315.708 419.735 305.437 434.267 290.906C448.798 276.374 459.069 271.901 469.009 267.57C478.926 263.239 488.298 259.169 502.119 245.347C515.94 231.526 520.035 222.154 524.342 212.238C528.673 202.298 533.146 192.026 547.677 177.519C562.209 162.987 572.48 158.514 582.42 154.183C592.336 149.852 601.708 145.782 615.53 131.96C629.351 118.139 633.445 108.767 637.776 98.8271C642.107 88.8871 646.58 78.6158 661.112 64.0844C675.643 49.5531 685.914 45.0801 695.854 40.7491C705.771 36.4181 715.143 32.3238 728.988 18.5024C742.809 4.68108 746.903 -4.69092 751.211 -14.6309C755.542 -24.5709 760.015 -34.8422 774.546 -49.3736C789.077 -63.9049 799.372 -68.4016 809.312 -72.7326C819.229 -77.0636 828.624 -81.1579 842.446 -94.9793C856.291 -108.824 860.361 -118.196 864.692 -128.113C869.023 -138.053 873.496 -148.324 888.051 -162.879L891.767 -159.163C877.922 -145.318 873.851 -135.946 869.52 -126.03C865.189 -116.09 860.716 -105.819 846.161 -91.2636C831.63 -76.7323 821.359 -72.2356 811.395 -67.9046C801.479 -63.5736 792.083 -59.4793 778.262 -45.658C764.44 -31.8366 760.346 -22.4646 756.039 -12.5246C751.708 -2.58462 747.235 7.68677 732.703 22.2181C718.172 36.7494 707.901 41.2224 697.961 45.5534C688.044 49.8844 678.672 53.9787 664.827 67.8C651.006 81.6214 646.912 90.9934 642.604 100.91C638.273 110.85 633.8 121.121 619.269 135.652C604.738 150.184 594.466 154.657 584.526 158.988C574.61 163.319 565.238 167.389 551.417 181.211C537.595 195.032 533.501 204.404 529.194 214.32C524.863 224.26 520.39 234.532 505.858 249.039C491.327 263.571 481.056 268.044 471.116 272.375C461.199 276.706 451.827 280.776 438.006 294.598C424.185 308.419 420.09 317.791 415.783 327.707C411.452 337.647 406.979 347.919 392.448 362.45C377.916 376.981 367.645 381.454 357.705 385.785C347.789 390.116 338.417 394.187 324.572 408.008C310.75 421.83 306.656 431.202 302.349 441.118C298.018 451.058 293.545 461.329 279.013 475.861C264.482 490.392 254.211 494.865 244.294 499.196C234.378 503.527 225.006 507.598 211.185 521.419L211.161 521.443Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_17"
                                    d="M233.716 543.966L230 540.25C244.531 525.719 254.803 521.246 264.719 516.915C274.635 512.584 284.007 508.513 297.829 494.692C311.65 480.871 315.744 471.499 320.052 461.582C324.383 451.642 328.856 441.371 343.387 426.84C357.918 412.308 368.19 407.835 378.13 403.504C388.046 399.173 397.418 395.103 411.239 381.281C425.061 367.46 429.155 358.088 433.462 348.172C437.793 338.232 442.266 327.96 456.798 313.429C471.329 298.898 481.6 294.425 491.54 290.094C501.457 285.763 510.829 281.692 524.65 267.871C538.471 254.049 542.566 244.677 546.873 234.761C551.204 224.821 555.677 214.55 570.208 200.042C584.74 185.511 595.011 181.038 604.927 176.707C614.844 172.376 624.216 168.305 638.037 154.484C651.858 140.662 655.953 131.29 660.26 121.374C664.591 111.434 669.064 101.163 683.595 86.6313C698.127 72.1 708.398 67.6269 718.338 63.2723C728.254 58.9413 737.626 54.8706 751.471 41.0256C765.293 27.2043 769.387 17.8323 773.694 7.91598C778.025 -2.02402 782.498 -12.2953 797.03 -26.8267C811.561 -41.358 821.832 -45.8547 831.772 -50.1857C841.712 -54.5167 851.084 -58.611 864.929 -72.4324C878.774 -86.2774 882.845 -95.6494 887.176 -105.566C891.507 -115.506 895.98 -125.777 910.535 -140.332L914.251 -136.616C900.406 -122.771 896.311 -113.399 891.98 -103.483C887.649 -93.543 883.176 -83.2717 868.621 -68.7404C854.066 -54.2091 843.795 -49.7123 833.855 -45.3813C823.939 -41.0503 814.543 -36.956 800.722 -23.1347C786.9 -9.31335 782.806 0.0586535 778.475 9.99865C774.144 19.9387 769.671 30.21 755.14 44.7413C740.608 59.2726 730.337 63.7456 720.397 68.1003C710.481 72.4313 701.109 76.5019 687.264 90.3469C673.442 104.168 669.348 113.54 665.041 123.457C660.71 133.397 656.237 143.668 641.705 158.199C627.174 172.731 616.903 177.204 606.986 181.535C597.07 185.866 587.698 189.936 573.877 203.758C560.055 217.579 555.961 226.951 551.654 236.867C547.323 246.807 542.85 257.079 528.318 271.586C513.787 286.118 503.516 290.591 493.576 294.922C483.659 299.253 474.287 303.323 460.466 317.145C446.645 330.966 442.55 340.338 438.243 350.254C433.912 360.194 429.439 370.466 414.908 384.997C400.376 399.528 390.105 404.001 380.165 408.332C370.249 412.663 360.877 416.734 347.032 430.579C333.21 444.4 329.116 453.772 324.809 463.689C320.478 473.629 316.005 483.9 301.473 498.431C286.942 512.963 276.671 517.436 266.731 521.767C256.814 526.098 247.442 530.168 233.621 543.99L233.716 543.966Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_18"
                                    d="M256.245 566.521L252.529 562.805C267.061 548.274 277.332 543.801 287.272 539.47C297.188 535.139 306.56 531.068 320.382 517.247C334.203 503.426 338.297 494.054 342.605 484.137C346.936 474.197 351.409 463.926 365.94 449.395C380.471 434.863 390.743 430.39 400.683 426.059C410.599 421.728 419.971 417.658 433.816 403.813C447.637 389.991 451.732 380.619 456.039 370.703C460.37 360.763 464.843 350.492 479.374 335.96C493.906 321.429 504.177 316.956 514.117 312.625C524.033 308.294 533.405 304.223 547.227 290.402C561.048 276.581 565.142 267.209 569.45 257.292C573.781 247.352 578.254 237.081 592.785 222.573C607.316 208.042 617.588 203.569 627.528 199.238C637.444 194.907 646.816 190.836 660.637 177.015C674.459 163.194 678.553 153.822 682.86 143.905C687.191 133.965 691.664 123.694 706.196 109.163C720.727 94.6312 730.998 90.1582 740.938 85.8272C750.855 81.4962 760.227 77.4255 774.072 63.5805C787.893 49.7592 791.987 40.3872 796.318 30.4472C800.649 20.5072 805.122 10.2359 819.654 -4.29544C834.209 -18.8268 844.48 -23.3234 854.42 -27.6544C864.336 -31.9854 873.732 -36.0797 887.553 -49.9011C901.375 -63.7224 905.469 -73.1181 909.8 -83.0344C914.131 -92.9744 918.604 -103.246 933.159 -117.801L936.875 -114.085C923.03 -100.24 918.959 -90.8681 914.628 -80.9518C910.297 -71.0118 905.824 -60.7405 891.269 -46.1855C876.738 -31.6541 866.443 -27.1574 856.503 -22.8264C846.586 -18.4954 837.191 -14.4011 823.346 -0.579754C809.524 13.2416 805.43 22.6136 801.123 32.5299C796.792 42.4699 792.319 52.7412 777.787 67.2725C763.256 81.8039 752.985 86.2769 743.045 90.6079C733.128 94.9389 723.756 99.0332 709.911 112.855C696.09 126.676 691.996 136.048 687.688 145.964C683.357 155.904 678.884 166.176 664.353 180.707C649.822 195.238 639.55 199.711 629.61 204.042C619.694 208.373 610.322 212.444 596.501 226.265C582.679 240.087 578.585 249.459 574.278 259.375C569.947 269.315 565.474 279.586 550.942 294.094C536.411 308.625 526.14 313.098 516.2 317.429C506.283 321.76 496.911 325.831 483.09 339.652C469.269 353.474 465.174 362.846 460.867 372.762C456.536 382.702 452.063 392.973 437.532 407.505C423 422.036 412.729 426.509 402.789 430.84C392.873 435.171 383.501 439.242 369.656 453.087C355.834 466.908 351.74 476.28 347.433 486.196C343.102 496.136 338.629 506.408 324.097 520.939C309.566 535.47 299.295 539.943 289.355 544.274C279.438 548.605 270.066 552.676 256.245 566.497V566.521Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_19"
                                    d="M278.8 589.084L275.084 585.368C289.615 570.837 299.887 566.364 309.827 562.033C319.743 557.702 329.115 553.631 342.936 539.81C356.758 525.988 360.852 516.616 365.159 506.7C369.49 496.76 373.963 486.489 388.495 471.957C403.026 457.426 413.297 452.953 423.237 448.622C433.154 444.291 442.526 440.22 456.371 426.399C470.192 412.578 474.286 403.206 478.594 393.289C482.925 383.349 487.398 373.078 501.929 358.547C516.46 344.015 526.732 339.542 536.672 335.211C546.588 330.88 555.96 326.81 569.781 312.988C583.603 299.167 587.697 289.795 592.004 279.879C596.335 269.939 600.808 259.667 615.34 245.136C629.871 230.605 640.142 226.132 650.059 221.801C659.975 217.47 669.347 213.399 683.168 199.578C696.99 185.756 701.084 176.384 705.415 166.444C709.746 156.504 714.219 146.233 728.75 131.702C743.282 117.17 753.553 112.697 763.493 108.366C773.409 104.035 782.781 99.9647 796.626 86.1197C810.448 72.2983 814.542 62.9263 818.873 52.9863C823.204 43.0463 827.677 32.7749 842.208 18.2436C856.74 3.71227 867.035 -0.784389 876.975 -5.11539C886.891 -9.44639 896.287 -13.5407 910.108 -27.362C923.953 -41.207 928.024 -50.579 932.355 -60.4954C936.686 -70.4354 941.159 -80.7067 955.714 -95.2617L959.429 -91.546C945.584 -77.701 941.514 -68.329 937.183 -58.4127C932.852 -48.4727 928.379 -38.2014 913.824 -23.6464C899.292 -9.11502 889.021 -4.61837 879.057 -0.287369C869.141 4.04363 859.745 8.13795 845.924 21.9593C832.103 35.7806 828.008 45.1526 823.701 55.0689C819.37 65.0089 814.897 75.2803 800.366 89.8117C785.834 104.343 775.563 108.816 765.623 113.171C755.707 117.502 746.335 121.572 732.49 135.417C718.668 149.239 714.574 158.611 710.267 168.527C705.936 178.467 701.463 188.738 686.931 203.27C672.4 217.801 662.129 222.274 652.212 226.605C642.296 230.936 632.924 235.007 619.103 248.828C605.281 262.649 601.187 272.021 596.88 281.938C592.549 291.878 588.076 302.149 573.544 316.68C559.013 331.212 548.742 335.685 538.802 340.016C528.885 344.347 519.513 348.417 505.692 362.239C491.871 376.06 487.776 385.432 483.469 395.348C479.138 405.288 474.665 415.56 460.134 430.091C445.602 444.622 435.331 449.095 425.391 453.426C415.475 457.757 406.103 461.828 392.258 475.649C378.436 489.471 374.342 498.843 370.035 508.759C365.704 518.699 361.231 528.97 346.699 543.502C332.168 558.033 321.897 562.506 311.957 566.837C302.04 571.168 292.668 575.239 278.847 589.06L278.8 589.084Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_20"
                                    d="M301.333 611.607L297.617 607.891C312.149 593.36 322.42 588.887 332.36 584.556C342.276 580.225 351.648 576.154 365.469 562.333C379.291 548.511 383.385 539.14 387.693 529.223C392.024 519.283 396.496 509.012 411.028 494.481C425.559 479.949 435.83 475.476 445.77 471.145C455.687 466.814 465.059 462.744 478.904 448.899C492.725 435.077 496.819 425.705 501.127 415.789C505.458 405.849 509.931 395.578 524.462 381.046C538.993 366.515 549.265 362.042 559.205 357.711C569.121 353.38 578.493 349.309 592.314 335.488C606.136 321.667 610.23 312.294 614.537 302.378C618.868 292.438 623.341 282.167 637.873 267.659C652.404 253.128 662.676 248.655 672.592 244.324C682.508 239.993 691.88 235.922 705.701 222.101C719.523 208.28 723.617 198.908 727.924 188.991C732.255 179.051 736.728 168.78 751.26 154.248C765.791 139.717 776.062 135.244 786.002 130.889C795.919 126.558 805.291 122.488 819.136 108.643C832.957 94.8215 837.051 85.4495 841.359 75.5332C845.69 65.5932 850.163 55.3218 864.694 40.7905C879.225 26.2591 889.497 21.7625 899.46 17.4315C909.377 13.1005 918.772 9.00617 932.594 -4.81517C946.415 -18.6365 950.51 -28.0322 954.841 -37.9485C959.172 -47.8885 963.645 -58.1598 978.2 -72.7148L981.915 -68.9992C968.07 -55.1542 963.976 -45.7822 959.645 -35.8658C955.314 -25.9258 950.841 -15.6545 936.286 -1.12317C921.754 13.4082 911.483 17.9048 901.519 22.2358C891.603 26.5668 882.207 30.6611 868.386 44.4825C854.565 58.3038 850.47 67.6758 846.139 77.6158C841.808 87.5558 837.335 97.8272 822.804 112.359C808.273 126.89 798.001 131.363 788.061 135.694C778.145 140.025 768.773 144.119 754.928 157.94C741.107 171.762 737.012 181.134 732.705 191.05C728.374 200.99 723.901 211.262 709.37 225.793C694.838 240.324 684.567 244.797 674.651 249.128C664.734 253.459 655.362 257.53 641.541 271.351C627.72 285.173 623.625 294.544 619.318 304.461C614.987 314.401 610.514 324.672 595.983 339.18C581.451 353.711 571.18 358.184 561.24 362.515C551.324 366.846 541.952 370.917 528.13 384.738C514.309 398.56 510.215 407.932 505.907 417.848C501.576 427.788 497.103 438.059 482.572 452.567C468.041 467.098 457.77 471.571 447.83 475.902C437.913 480.233 428.541 484.304 414.696 498.149C400.875 511.97 396.78 521.342 392.473 531.259C388.142 541.199 383.669 551.47 369.138 566.001C354.607 580.532 344.335 585.006 334.395 589.337C324.479 593.668 315.107 597.738 301.285 611.559L301.333 611.607Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_21"
                                    d="M323.884 634.157L320.168 630.442C334.699 615.91 344.971 611.437 354.911 607.106C364.827 602.775 374.199 598.705 388.02 584.883C401.842 571.062 405.936 561.69 410.243 551.774C414.574 541.834 419.047 531.562 433.579 517.031C448.11 502.5 458.381 498.027 468.321 493.696C478.238 489.365 487.61 485.294 501.431 471.449C515.252 457.628 519.347 448.256 523.654 438.339C527.985 428.399 532.458 418.128 546.989 403.597C561.521 389.065 571.792 384.592 581.732 380.261C591.648 375.93 601.02 371.86 614.842 358.038C628.663 344.217 632.757 334.845 637.065 324.929C641.396 314.989 645.869 304.717 660.376 290.21C674.908 275.678 685.179 271.205 695.095 266.874C705.012 262.543 714.384 258.473 728.205 244.651C742.026 230.83 746.121 221.458 750.428 211.542C754.759 201.602 759.232 191.33 773.763 176.799C788.295 162.268 798.566 157.795 808.506 153.464C818.422 149.133 827.794 145.038 841.639 131.217C855.461 117.396 859.555 108.024 863.862 98.1073C868.193 88.1673 872.666 77.896 887.198 63.3647C901.729 48.8334 912 44.3367 921.964 40.0057C931.88 35.6747 941.276 31.5804 955.097 17.759C968.942 3.91405 973.013 -5.45795 977.344 -15.3743C981.675 -25.3143 986.148 -35.5856 1000.7 -50.1406L1004.42 -46.4249C990.574 -32.5799 986.503 -23.2079 982.172 -13.2916C977.841 -3.35161 973.368 6.91973 958.813 21.4747C944.282 36.0061 933.987 40.5027 924.047 44.8337C914.13 49.1647 904.735 53.259 890.913 67.0804C877.092 80.9017 872.998 90.2737 868.667 100.214C864.336 110.154 859.863 120.425 845.331 134.956C830.8 149.488 820.529 153.961 810.589 158.292C800.672 162.623 791.3 166.693 777.455 180.538C763.634 194.36 759.54 203.732 755.209 213.672C750.878 223.612 746.405 233.883 731.873 248.414C717.342 262.946 707.071 267.419 697.131 271.75C687.214 276.081 677.842 280.151 664.021 293.973C650.2 307.794 646.129 317.166 641.798 327.082C637.467 337.022 632.994 347.294 618.463 361.825C603.931 376.356 593.66 380.829 583.72 385.16C573.804 389.491 564.432 393.562 550.61 407.383C536.789 421.205 532.695 430.577 528.387 440.493C524.056 450.433 519.583 460.704 505.052 475.236C490.521 489.767 480.249 494.24 470.309 498.571C460.393 502.902 451.021 506.973 437.2 520.818C423.378 534.639 419.284 544.011 414.977 553.927C410.646 563.867 406.173 574.139 391.641 588.67C377.11 603.201 366.839 607.674 356.922 612.005C347.006 616.336 337.634 620.407 323.813 634.228L323.884 634.157Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_22"
                                    d="M346.44 656.697L342.725 652.981C357.256 638.45 367.527 633.977 377.467 629.646C387.384 625.315 396.756 621.244 410.577 607.423C424.398 593.601 428.493 584.229 432.8 574.313C437.131 564.373 441.604 554.102 456.135 539.57C470.667 525.039 480.938 520.566 490.878 516.235C500.794 511.904 510.166 507.833 524.011 494.012C537.833 480.191 541.927 470.819 546.234 460.902C550.565 450.962 555.038 440.691 569.57 426.16C584.101 411.628 594.372 407.155 604.312 402.824C614.229 398.493 623.601 394.423 637.446 380.601C651.267 366.78 655.338 357.408 659.669 347.492C664 337.552 668.473 327.28 683.004 312.749C697.535 298.218 707.807 293.745 717.747 289.414C727.663 285.083 737.035 281.012 750.856 267.191C764.678 253.369 768.772 243.997 773.103 234.057C777.434 224.117 781.907 213.846 796.438 199.315C810.97 184.783 821.241 180.31 831.181 175.979C841.097 171.648 850.469 167.578 864.314 153.733C878.136 139.911 882.23 130.539 886.561 120.599C890.892 110.659 895.365 100.388 909.896 85.8566C924.428 71.3253 934.723 66.8286 944.663 62.4976C954.579 58.1666 963.975 54.0723 977.796 40.251C991.641 26.406 995.735 17.034 1000.07 7.11765C1004.4 -2.82235 1008.87 -13.0937 1023.43 -27.625L1027.14 -23.9094C1013.3 -10.0644 1009.23 -0.692387 1004.89 9.22395C1000.56 19.1639 996.09 29.4353 981.535 43.9903C967.004 58.5216 956.733 63.0183 946.769 67.3493C936.853 71.6803 927.457 75.7747 913.636 89.596C899.814 103.417 895.72 112.789 891.413 122.706C887.082 132.646 882.609 142.917 868.077 157.448C853.546 171.98 843.275 176.453 833.335 180.784C823.418 185.115 814.046 189.209 800.201 203.03C786.38 216.852 782.286 226.224 777.978 236.14C773.647 246.08 769.174 256.351 754.643 270.883C740.112 285.414 729.84 289.887 719.9 294.218C709.984 298.549 700.612 302.62 686.791 316.441C672.969 330.262 668.875 339.634 664.568 349.551C660.237 359.491 655.764 369.762 641.256 384.27C626.725 398.801 616.453 403.274 606.513 407.605C596.597 411.936 587.225 416.007 573.38 429.828C559.559 443.649 555.464 453.021 551.157 462.938C546.826 472.878 542.353 483.149 527.822 497.68C513.29 512.212 503.019 516.685 493.079 521.016C483.163 525.347 473.791 529.417 459.946 543.239C446.124 557.06 442.03 566.432 437.723 576.348C433.392 586.288 428.919 596.56 414.387 611.091C399.856 625.622 389.585 630.095 379.645 634.426C369.728 638.757 360.356 642.828 346.535 656.649L346.44 656.697Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_23"
                                    d="M368.97 679.244L365.254 675.528C379.785 660.997 390.057 656.524 399.997 652.193C409.913 647.862 419.285 643.791 433.106 629.97C446.928 616.148 451.022 606.776 455.329 596.86C459.66 586.92 464.133 576.649 478.665 562.117C493.196 547.586 503.467 543.113 513.407 538.782C523.324 534.451 532.696 530.38 546.541 516.535C560.362 502.714 564.456 493.342 568.764 483.426C573.095 473.486 577.568 463.214 592.099 448.683C606.63 434.152 616.902 429.679 626.842 425.348C636.758 421.017 646.13 416.946 659.951 403.125C673.773 389.303 677.867 379.931 682.174 370.015C686.505 360.075 690.978 349.804 705.51 335.296C720.041 320.765 730.312 316.292 740.229 311.961C750.145 307.63 759.517 303.559 773.338 289.738C787.16 275.916 791.254 266.544 795.561 256.628C799.892 246.688 804.365 236.417 818.897 221.885C833.428 207.354 843.699 202.881 853.639 198.526C863.556 194.195 872.928 190.125 886.773 176.28C900.594 162.458 904.688 153.086 908.996 143.146C913.327 133.206 917.8 122.935 932.331 108.404C946.862 93.8724 957.134 89.3758 967.097 85.0448C977.014 80.7138 986.409 76.6194 1000.23 62.7981C1014.08 48.9531 1018.15 39.5811 1022.48 29.6648C1026.81 19.7248 1031.28 9.45344 1045.84 -5.10156L1049.55 -1.38588C1035.71 12.4591 1031.61 21.8311 1027.28 31.7475C1022.95 41.6875 1018.48 51.9588 1003.92 66.4901C989.391 81.0214 979.12 85.5181 969.156 89.8491C959.24 94.1801 949.844 98.2744 936.023 112.096C922.202 125.917 918.107 135.289 913.8 145.205C909.469 155.145 904.996 165.417 890.465 179.948C875.933 194.479 865.662 198.952 855.722 203.283C845.806 207.614 836.434 211.685 822.589 225.53C808.767 239.351 804.673 248.723 800.366 258.64C796.035 268.58 791.562 278.851 777.03 293.382C762.499 307.914 752.228 312.387 742.311 316.718C732.395 321.049 723.023 325.119 709.202 338.941C695.38 352.762 691.286 362.134 686.979 372.05C682.648 381.99 678.175 392.262 663.643 406.769C649.112 421.301 638.841 425.774 628.901 430.105C618.984 434.436 609.612 438.506 595.791 452.328C581.97 466.149 577.875 475.521 573.568 485.437C569.237 495.377 564.764 505.649 550.233 520.18C535.701 534.711 525.43 539.184 515.49 543.515C505.574 547.846 496.202 551.917 482.357 565.762C468.535 579.583 464.441 588.955 460.134 598.872C455.803 608.812 451.33 619.083 436.798 633.614C422.267 648.146 411.996 652.619 402.079 656.95C392.163 661.281 382.791 665.351 368.97 679.173V679.244Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_24"
                                    d="M391.524 701.806L387.809 698.09C402.34 683.559 412.611 679.086 422.551 674.755C432.468 670.424 441.84 666.353 455.661 652.532C469.482 638.711 473.577 629.338 477.884 619.422C482.215 609.482 486.688 599.211 501.219 584.679C515.751 570.148 526.022 565.675 535.962 561.344C545.878 557.013 555.25 552.942 569.072 539.097C582.893 525.276 586.987 515.904 591.295 505.988C595.626 496.048 600.099 485.777 614.63 471.245C629.161 456.714 639.433 452.241 649.373 447.91C659.289 443.579 668.661 439.508 682.482 425.687C696.304 411.866 700.398 402.494 704.705 392.577C709.036 382.637 713.509 372.366 728.041 357.858C742.572 343.327 752.843 338.854 762.783 334.523C772.7 330.192 782.072 326.121 795.893 312.3C809.714 298.478 813.809 289.107 818.116 279.19C822.447 269.25 826.92 258.979 841.451 244.448C855.983 229.916 866.254 225.443 876.194 221.112C886.11 216.781 895.482 212.687 909.327 198.866C923.149 185.044 927.243 175.672 931.55 165.756C935.881 155.816 940.354 145.545 954.886 131.013C969.417 116.482 979.712 111.985 989.652 107.654C999.568 103.323 1008.96 99.2288 1022.79 85.4075C1036.63 71.5625 1040.7 62.1905 1045.03 52.2742C1049.36 42.3342 1053.84 32.0628 1068.39 17.5078L1072.11 21.2235C1058.26 35.0685 1054.19 44.4405 1049.86 54.3568C1045.53 64.2968 1041.06 74.5682 1026.5 89.1232C1011.97 103.655 1001.67 108.151 991.735 112.482C981.818 116.813 972.423 120.907 958.601 134.729C944.78 148.55 940.686 157.922 936.355 167.862C932.024 177.802 927.551 188.074 913.019 202.605C898.488 217.136 888.217 221.609 878.277 225.94C868.36 230.271 858.988 234.342 845.143 248.187C831.322 262.008 827.228 271.38 822.897 281.32C818.566 291.26 814.093 301.531 799.561 316.063C785.03 330.594 774.759 335.067 764.819 339.398C754.902 343.729 745.53 347.8 731.709 361.621C717.888 375.442 713.793 384.815 709.486 394.731C705.155 404.671 700.682 414.942 686.151 429.45C671.619 443.981 661.348 448.454 651.408 452.785C641.492 457.116 632.12 461.187 618.298 475.008C604.477 488.829 600.383 498.202 596.075 508.118C591.744 518.058 587.271 528.329 572.74 542.861C558.209 557.392 547.937 561.865 537.997 566.196C528.081 570.527 518.709 574.598 504.888 588.419C491.066 602.24 486.972 611.612 482.665 621.529C478.334 631.469 473.861 641.74 459.329 656.271C444.798 670.802 434.527 675.275 424.587 679.606C414.67 683.937 405.298 688.008 391.477 701.83L391.524 701.806Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_25"
                                    d="M414.079 724.337L410.363 720.621C424.895 706.09 435.166 701.617 445.082 697.286C454.999 692.955 464.371 688.884 478.192 675.063C492.013 661.241 496.108 651.869 500.415 641.953C504.746 632.013 509.219 621.742 523.75 607.211C538.282 592.679 548.553 588.206 558.493 583.875C568.409 579.544 577.781 575.474 591.603 561.652C605.424 547.831 609.518 538.459 613.826 528.543C618.157 518.603 622.63 508.331 637.161 493.8C651.692 479.268 661.964 474.796 671.904 470.465C681.82 466.134 691.192 462.063 705.013 448.241C718.835 434.42 722.929 425.048 727.236 415.132C731.567 405.192 736.04 394.92 750.572 380.413C765.103 365.881 775.374 361.409 785.314 357.078C795.231 352.747 804.603 348.676 818.424 334.854C832.245 321.033 836.34 311.661 840.647 301.745C844.978 291.805 849.451 281.534 863.982 267.002C878.514 252.471 888.785 247.998 898.725 243.667C908.641 239.336 918.013 235.265 931.858 221.42C945.68 207.599 949.774 198.227 954.105 188.287C958.436 178.347 962.909 168.076 977.44 153.544C991.972 139.013 1002.27 134.516 1012.21 130.185C1022.12 125.854 1031.52 121.76 1045.34 107.939C1059.19 94.0936 1063.28 84.7216 1067.61 74.8052C1071.94 64.8652 1076.41 54.5938 1090.97 40.0625L1094.68 43.7782C1080.84 57.6232 1076.77 66.9952 1072.44 76.9115C1068.11 86.8515 1063.63 97.1229 1049.08 111.678C1034.55 126.209 1024.25 130.706 1014.31 135.037C1004.4 139.368 995.001 143.462 981.18 157.283C967.358 171.105 963.264 180.477 958.957 190.393C954.626 200.333 950.153 210.605 935.621 225.136C921.09 239.667 910.819 244.14 900.879 248.471C890.962 252.802 881.59 256.897 867.745 270.718C853.924 284.539 849.83 293.911 845.522 303.828C841.191 313.768 836.718 324.039 822.187 338.57C807.656 353.101 797.384 357.575 787.468 361.906C777.552 366.237 768.18 370.307 754.358 384.128C740.537 397.95 736.443 407.322 732.135 417.238C727.804 427.178 723.331 437.45 708.8 451.957C694.269 466.488 683.997 470.962 674.057 475.293C664.141 479.624 654.769 483.694 640.948 497.515C627.126 511.337 623.032 520.709 618.725 530.625C614.394 540.565 609.921 550.837 595.389 565.368C580.858 579.899 570.587 584.372 560.647 588.703C550.73 593.034 541.358 597.105 527.513 610.95C513.692 624.771 509.598 634.143 505.29 644.06C500.959 654 496.486 664.271 481.955 678.802C467.424 693.334 457.152 697.806 447.212 702.137C437.296 706.468 427.924 710.539 414.103 724.361L414.079 724.337Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_26"
                                    d="M436.608 746.888L432.893 743.172C447.424 728.641 457.695 724.168 467.612 719.837C477.528 715.506 486.9 711.435 500.721 697.614C514.543 683.793 518.637 674.421 522.944 664.504C527.275 654.564 531.748 644.293 546.28 629.762C560.811 615.23 571.082 610.757 581.022 606.426C590.939 602.095 600.311 598.025 614.156 584.18C627.977 570.358 632.071 560.986 636.379 551.07C640.71 541.13 645.183 530.859 659.714 516.327C674.245 501.796 684.517 497.323 694.457 492.992C704.373 488.661 713.745 484.59 727.566 470.769C741.388 456.948 745.482 447.576 749.789 437.659C754.12 427.719 758.593 417.448 773.125 402.94C787.656 388.409 797.927 383.936 807.844 379.605C817.76 375.274 827.132 371.203 840.953 357.382C854.775 343.561 858.869 334.189 863.176 324.272C867.507 314.332 871.98 304.061 886.512 289.53C901.043 274.998 911.314 270.525 921.254 266.194C931.171 261.863 940.543 257.793 954.388 243.948C968.209 230.126 972.303 220.754 976.611 210.814C980.942 200.874 985.415 190.603 999.946 176.072C1014.48 161.54 1024.77 157.044 1034.71 152.713C1044.63 148.382 1054.02 144.287 1067.85 130.466C1081.67 116.645 1085.76 107.249 1090.09 97.3327C1094.42 87.3927 1098.9 77.1214 1113.45 62.5664L1117.17 66.2821C1103.32 80.1271 1099.25 89.4991 1094.92 99.4154C1090.59 109.355 1086.12 119.627 1071.56 134.182C1057.03 148.713 1046.74 153.21 1036.8 157.541C1026.88 161.872 1017.48 165.966 1003.66 179.787C989.84 193.609 985.746 202.981 981.439 212.921C977.108 222.861 972.635 233.132 958.103 247.663C943.572 262.195 933.301 266.668 923.361 270.999C913.444 275.33 904.072 279.424 890.227 293.245C876.406 307.067 872.312 316.439 868.004 326.355C863.673 336.295 859.2 346.566 844.669 361.098C830.138 375.629 819.866 380.102 809.95 384.433C800.034 388.764 790.662 392.835 776.84 406.656C763.019 420.477 758.925 429.849 754.617 439.766C750.286 449.706 745.813 459.977 731.282 474.485C716.751 489.016 706.479 493.489 696.539 497.82C686.623 502.151 677.251 506.222 663.43 520.043C649.608 533.864 645.514 543.236 641.207 553.153C636.876 563.093 632.403 573.364 617.871 587.895C603.34 602.427 593.069 606.9 583.129 611.231C573.212 615.562 563.84 619.632 549.995 633.477C536.174 647.299 532.08 656.671 527.772 666.587C523.441 676.527 518.968 686.798 504.437 701.33C489.906 715.861 479.634 720.334 469.718 724.665C459.802 728.996 450.43 733.067 436.608 746.888Z"
                                    fill="white"
                                  />
                                  <path
                                    id="Vector_27"
                                    d="M459.165 769.435L455.449 765.719C469.981 751.188 480.252 746.715 490.168 742.384C500.085 738.053 509.456 733.982 523.278 720.161C537.099 706.339 541.194 696.967 545.501 687.051C549.832 677.111 554.305 666.84 568.836 652.308C583.367 637.777 593.639 633.304 603.579 628.973C613.495 624.642 622.867 620.571 636.689 606.75C650.51 592.929 654.604 583.557 658.911 573.64C663.242 563.7 667.716 553.429 682.247 538.898C696.778 524.366 707.05 519.893 716.99 515.562C726.906 511.231 736.278 507.161 750.099 493.339C763.921 479.518 768.015 470.146 772.322 460.23C776.653 450.29 781.126 440.018 795.658 425.487C810.189 410.956 820.46 406.483 830.377 402.152C840.293 397.821 849.665 393.75 863.486 379.929C877.308 366.107 881.402 356.735 885.709 346.819C890.04 336.879 894.513 326.608 909.045 312.076C923.576 297.545 933.847 293.072 943.787 288.741C953.703 284.41 963.075 280.316 976.92 266.494C990.742 252.673 994.836 243.301 999.144 233.385C1003.47 223.445 1007.95 213.173 1022.48 198.642C1037.01 184.111 1047.28 179.614 1057.25 175.283C1067.16 170.952 1076.56 166.858 1090.38 153.036C1104.2 139.215 1108.29 129.819 1112.63 119.903C1116.96 109.963 1121.43 99.6917 1135.98 85.1367L1139.7 88.8523C1125.85 102.697 1121.78 112.069 1117.45 121.986C1113.12 131.926 1108.65 142.197 1094.09 156.752C1079.56 171.283 1069.27 175.78 1059.33 180.111C1049.41 184.442 1040.02 188.536 1026.19 202.358C1012.37 216.179 1008.28 225.551 1003.95 235.491C999.617 245.431 995.144 255.702 980.612 270.234C966.081 284.765 955.81 289.238 945.87 293.569C935.954 297.9 926.582 301.971 912.737 315.816C898.915 329.637 894.821 339.009 890.49 348.949C886.159 358.889 881.686 369.16 867.154 383.692C852.623 398.223 842.352 402.696 832.412 407.027C822.496 411.358 813.124 415.429 799.302 429.25C785.481 443.071 781.387 452.443 777.079 462.36C772.748 472.3 768.275 482.571 753.744 497.102C739.213 511.634 728.941 516.107 719.001 520.438C709.085 524.769 699.713 528.839 685.892 542.661C672.07 556.482 667.976 565.854 663.669 575.77C659.338 585.71 654.865 595.982 640.333 610.513C625.802 625.044 615.53 629.517 605.59 633.848C595.674 638.179 586.302 642.25 572.481 656.071C558.66 669.893 554.565 679.265 550.258 689.181C545.927 699.121 541.454 709.392 526.923 723.924C512.391 738.455 502.12 742.928 492.18 747.259C482.264 751.59 472.892 755.661 459.07 769.482L459.165 769.435Z"
                                    fill="white"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g id="Group_7" style={{ mixBlendMode: "soft-light" }}>
                          <g id="Clip path group_3">
                            <mask
                              id="mask3_4995_86464"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x={623}
                              y={388}
                              width={590}
                              height={590}
                            >
                              <g id="clippath-2">
                                <path
                                  id="Vector_28"
                                  d="M1212.78 388.219L623.627 977.377H1212.78V388.219Z"
                                  fill="white"
                                />
                              </g>
                            </mask>
                            <g mask="url(#mask3_4995_86464)">
                              <g id="Group_8">
                                <g id="Group_9">
                                  <g id="Group_10">
                                    <g id="Group_11">
                                      <path
                                        id="Vector_29"
                                        d="M1187.84 716.866C1189.25 716.866 1190.4 715.722 1190.4 714.31C1190.4 712.898 1189.25 711.754 1187.84 711.754C1186.43 711.754 1185.29 712.898 1185.29 714.31C1185.29 715.722 1186.43 716.866 1187.84 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_30"
                                        d="M1187.84 677.12C1189.25 677.12 1190.4 675.975 1190.4 674.564C1190.4 673.152 1189.25 672.008 1187.84 672.008C1186.43 672.008 1185.29 673.152 1185.29 674.564C1185.29 675.975 1186.43 677.12 1187.84 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_31"
                                        d="M1187.84 637.389C1189.25 637.389 1190.4 636.245 1190.4 634.833C1190.4 633.422 1189.25 632.277 1187.84 632.277C1186.43 632.277 1185.29 633.422 1185.29 634.833C1185.29 636.245 1186.43 637.389 1187.84 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_32"
                                        d="M1187.84 597.651C1189.25 597.651 1190.4 596.507 1190.4 595.095C1190.4 593.683 1189.25 592.539 1187.84 592.539C1186.43 592.539 1185.29 593.683 1185.29 595.095C1185.29 596.507 1186.43 597.651 1187.84 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_12">
                                      <path
                                        id="Vector_33"
                                        d="M1145.33 714.31C1145.33 712.89 1146.47 711.754 1147.89 711.754C1149.31 711.754 1150.45 712.89 1150.45 714.31C1150.45 715.73 1149.31 716.866 1147.89 716.866C1146.47 716.866 1145.33 715.73 1145.33 714.31Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_34"
                                        d="M1145.33 674.564C1145.33 673.144 1146.47 672.008 1147.89 672.008C1149.31 672.008 1150.45 673.144 1150.45 674.564C1150.45 675.984 1149.31 677.12 1147.89 677.12C1146.47 677.12 1145.33 675.984 1145.33 674.564Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_35"
                                        d="M1145.33 634.833C1145.33 633.413 1146.47 632.277 1147.89 632.277C1149.31 632.277 1150.45 633.413 1150.45 634.833C1150.45 636.253 1149.31 637.389 1147.89 637.389C1146.47 637.389 1145.33 636.253 1145.33 634.833Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_36"
                                        d="M1145.33 595.095C1145.33 593.675 1146.47 592.539 1147.89 592.539C1149.31 592.539 1150.45 593.675 1150.45 595.095C1150.45 596.515 1149.31 597.651 1147.89 597.651C1146.47 597.651 1145.33 596.515 1145.33 595.095Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_13">
                                      <path
                                        id="Vector_37"
                                        d="M1107.94 716.866C1109.35 716.866 1110.5 715.722 1110.5 714.31C1110.5 712.898 1109.35 711.754 1107.94 711.754C1106.53 711.754 1105.38 712.898 1105.38 714.31C1105.38 715.722 1106.53 716.866 1107.94 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_38"
                                        d="M1107.94 677.12C1109.35 677.12 1110.5 675.975 1110.5 674.564C1110.5 673.152 1109.35 672.008 1107.94 672.008C1106.53 672.008 1105.38 673.152 1105.38 674.564C1105.38 675.975 1106.53 677.12 1107.94 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_39"
                                        d="M1107.94 637.389C1109.35 637.389 1110.5 636.245 1110.5 634.833C1110.5 633.422 1109.35 632.277 1107.94 632.277C1106.53 632.277 1105.38 633.422 1105.38 634.833C1105.38 636.245 1106.53 637.389 1107.94 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_40"
                                        d="M1107.94 597.651C1109.35 597.651 1110.5 596.507 1110.5 595.095C1110.5 593.683 1109.35 592.539 1107.94 592.539C1106.53 592.539 1105.38 593.683 1105.38 595.095C1105.38 596.507 1106.53 597.651 1107.94 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_14">
                                      <path
                                        id="Vector_41"
                                        d="M1065.44 714.31C1065.44 712.89 1066.57 711.754 1067.99 711.754C1069.41 711.754 1070.55 712.89 1070.55 714.31C1070.55 715.73 1069.41 716.866 1067.99 716.866C1066.57 716.866 1065.44 715.73 1065.44 714.31Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_42"
                                        d="M1065.44 674.564C1065.44 673.144 1066.57 672.008 1067.99 672.008C1069.41 672.008 1070.55 673.144 1070.55 674.564C1070.55 675.984 1069.41 677.12 1067.99 677.12C1066.57 677.12 1065.44 675.984 1065.44 674.564Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_43"
                                        d="M1065.44 634.833C1065.44 633.413 1066.57 632.277 1067.99 632.277C1069.41 632.277 1070.55 633.413 1070.55 634.833C1070.55 636.253 1069.41 637.389 1067.99 637.389C1066.57 637.389 1065.44 636.253 1065.44 634.833Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_44"
                                        d="M1065.44 595.095C1065.44 593.675 1066.57 592.539 1067.99 592.539C1069.41 592.539 1070.55 593.675 1070.55 595.095C1070.55 596.515 1069.41 597.651 1067.99 597.651C1066.57 597.651 1065.44 596.515 1065.44 595.095Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_15">
                                      <path
                                        id="Vector_45"
                                        d="M1028.04 716.866C1029.46 716.866 1030.6 715.722 1030.6 714.31C1030.6 712.898 1029.46 711.754 1028.04 711.754C1026.63 711.754 1025.49 712.898 1025.49 714.31C1025.49 715.722 1026.63 716.866 1028.04 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_46"
                                        d="M1028.04 677.12C1029.46 677.12 1030.6 675.975 1030.6 674.564C1030.6 673.152 1029.46 672.008 1028.04 672.008C1026.63 672.008 1025.49 673.152 1025.49 674.564C1025.49 675.975 1026.63 677.12 1028.04 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_47"
                                        d="M1028.04 637.389C1029.46 637.389 1030.6 636.245 1030.6 634.833C1030.6 633.422 1029.46 632.277 1028.04 632.277C1026.63 632.277 1025.49 633.422 1025.49 634.833C1025.49 636.245 1026.63 637.389 1028.04 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_48"
                                        d="M1028.04 597.651C1029.46 597.651 1030.6 596.507 1030.6 595.095C1030.6 593.683 1029.46 592.539 1028.04 592.539C1026.63 592.539 1025.49 593.683 1025.49 595.095C1025.49 596.507 1026.63 597.651 1028.04 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_16">
                                      <path
                                        id="Vector_49"
                                        d="M988.095 716.866C989.507 716.866 990.651 715.722 990.651 714.31C990.651 712.898 989.507 711.754 988.095 711.754C986.683 711.754 985.539 712.898 985.539 714.31C985.539 715.722 986.683 716.866 988.095 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_50"
                                        d="M988.095 677.12C989.507 677.12 990.651 675.975 990.651 674.564C990.651 673.152 989.507 672.008 988.095 672.008C986.683 672.008 985.539 673.152 985.539 674.564C985.539 675.975 986.683 677.12 988.095 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_51"
                                        d="M988.095 637.389C989.507 637.389 990.651 636.245 990.651 634.833C990.651 633.422 989.507 632.277 988.095 632.277C986.683 632.277 985.539 633.422 985.539 634.833C985.539 636.245 986.683 637.389 988.095 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_52"
                                        d="M988.095 597.651C989.507 597.651 990.651 596.507 990.651 595.095C990.651 593.683 989.507 592.539 988.095 592.539C986.683 592.539 985.539 593.683 985.539 595.095C985.539 596.507 986.683 597.651 988.095 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_17">
                                      <path
                                        id="Vector_53"
                                        d="M948.119 716.866C949.53 716.866 950.675 715.722 950.675 714.31C950.675 712.898 949.53 711.754 948.119 711.754C946.707 711.754 945.562 712.898 945.562 714.31C945.562 715.722 946.707 716.866 948.119 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_54"
                                        d="M948.119 677.12C949.53 677.12 950.675 675.975 950.675 674.564C950.675 673.152 949.53 672.008 948.119 672.008C946.707 672.008 945.562 673.152 945.562 674.564C945.562 675.975 946.707 677.12 948.119 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_55"
                                        d="M948.119 637.389C949.53 637.389 950.675 636.245 950.675 634.833C950.675 633.422 949.53 632.277 948.119 632.277C946.707 632.277 945.562 633.422 945.562 634.833C945.562 636.245 946.707 637.389 948.119 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_56"
                                        d="M948.119 597.651C949.53 597.651 950.675 596.507 950.675 595.095C950.675 593.683 949.53 592.539 948.119 592.539C946.707 592.539 945.562 593.683 945.562 595.095C945.562 596.507 946.707 597.651 948.119 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_18">
                                      <path
                                        id="Vector_57"
                                        d="M908.171 716.866C909.583 716.866 910.727 715.722 910.727 714.31C910.727 712.898 909.583 711.754 908.171 711.754C906.76 711.754 905.615 712.898 905.615 714.31C905.615 715.722 906.76 716.866 908.171 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_58"
                                        d="M908.171 677.12C909.583 677.12 910.727 675.975 910.727 674.564C910.727 673.152 909.583 672.008 908.171 672.008C906.76 672.008 905.615 673.152 905.615 674.564C905.615 675.975 906.76 677.12 908.171 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_59"
                                        d="M908.171 637.389C909.583 637.389 910.727 636.245 910.727 634.833C910.727 633.422 909.583 632.277 908.171 632.277C906.76 632.277 905.615 633.422 905.615 634.833C905.615 636.245 906.76 637.389 908.171 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_60"
                                        d="M908.171 597.651C909.583 597.651 910.727 596.507 910.727 595.095C910.727 593.683 909.583 592.539 908.171 592.539C906.76 592.539 905.615 593.683 905.615 595.095C905.615 596.507 906.76 597.651 908.171 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_19">
                                      <path
                                        id="Vector_61"
                                        d="M865.688 714.31C865.688 712.89 866.824 711.754 868.244 711.754C869.664 711.754 870.8 712.89 870.8 714.31C870.8 715.73 869.664 716.866 868.244 716.866C866.824 716.866 865.688 715.73 865.688 714.31Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_62"
                                        d="M865.688 674.564C865.688 673.144 866.824 672.008 868.244 672.008C869.664 672.008 870.8 673.144 870.8 674.564C870.8 675.984 869.664 677.12 868.244 677.12C866.824 677.12 865.688 675.984 865.688 674.564Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_63"
                                        d="M865.688 634.833C865.688 633.413 866.824 632.277 868.244 632.277C869.664 632.277 870.8 633.413 870.8 634.833C870.8 636.253 869.664 637.389 868.244 637.389C866.824 637.389 865.688 636.253 865.688 634.833Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_64"
                                        d="M865.688 595.095C865.688 593.675 866.824 592.539 868.244 592.539C869.664 592.539 870.8 593.675 870.8 595.095C870.8 596.515 869.664 597.651 868.244 597.651C866.824 597.651 865.688 596.515 865.688 595.095Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_20">
                                      <path
                                        id="Vector_65"
                                        d="M828.273 716.866C829.684 716.866 830.829 715.722 830.829 714.31C830.829 712.898 829.684 711.754 828.273 711.754C826.861 711.754 825.717 712.898 825.717 714.31C825.717 715.722 826.861 716.866 828.273 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_66"
                                        d="M828.273 677.12C829.684 677.12 830.829 675.975 830.829 674.564C830.829 673.152 829.684 672.008 828.273 672.008C826.861 672.008 825.717 673.152 825.717 674.564C825.717 675.975 826.861 677.12 828.273 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_67"
                                        d="M828.273 637.389C829.684 637.389 830.829 636.245 830.829 634.833C830.829 633.422 829.684 632.277 828.273 632.277C826.861 632.277 825.717 633.422 825.717 634.833C825.717 636.245 826.861 637.389 828.273 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_68"
                                        d="M828.273 597.651C829.684 597.651 830.829 596.507 830.829 595.095C830.829 593.683 829.684 592.539 828.273 592.539C826.861 592.539 825.717 593.683 825.717 595.095C825.717 596.507 826.861 597.651 828.273 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_21">
                                      <path
                                        id="Vector_69"
                                        d="M785.768 714.31C785.768 712.89 786.904 711.754 788.324 711.754C789.744 711.754 790.88 712.89 790.88 714.31C790.88 715.73 789.744 716.866 788.324 716.866C786.904 716.866 785.768 715.73 785.768 714.31Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_70"
                                        d="M785.768 674.564C785.768 673.144 786.904 672.008 788.324 672.008C789.744 672.008 790.88 673.144 790.88 674.564C790.88 675.984 789.744 677.12 788.324 677.12C786.904 677.12 785.768 675.984 785.768 674.564Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_71"
                                        d="M785.768 634.833C785.768 633.413 786.904 632.277 788.324 632.277C789.744 632.277 790.88 633.413 790.88 634.833C790.88 636.253 789.744 637.389 788.324 637.389C786.904 637.389 785.768 636.253 785.768 634.833Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_72"
                                        d="M785.768 595.095C785.768 593.675 786.904 592.539 788.324 592.539C789.744 592.539 790.88 593.675 790.88 595.095C790.88 596.515 789.744 597.651 788.324 597.651C786.904 597.651 785.768 596.515 785.768 595.095Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_22">
                                      <path
                                        id="Vector_73"
                                        d="M748.374 716.866C749.786 716.866 750.93 715.722 750.93 714.31C750.93 712.898 749.786 711.754 748.374 711.754C746.963 711.754 745.818 712.898 745.818 714.31C745.818 715.722 746.963 716.866 748.374 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_74"
                                        d="M748.374 677.12C749.786 677.12 750.93 675.975 750.93 674.564C750.93 673.152 749.786 672.008 748.374 672.008C746.963 672.008 745.818 673.152 745.818 674.564C745.818 675.975 746.963 677.12 748.374 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_75"
                                        d="M748.374 637.389C749.786 637.389 750.93 636.245 750.93 634.833C750.93 633.422 749.786 632.277 748.374 632.277C746.963 632.277 745.818 633.422 745.818 634.833C745.818 636.245 746.963 637.389 748.374 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_76"
                                        d="M748.374 597.651C749.786 597.651 750.93 596.507 750.93 595.095C750.93 593.683 749.786 592.539 748.374 592.539C746.963 592.539 745.818 593.683 745.818 595.095C745.818 596.507 746.963 597.651 748.374 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_23">
                                      <path
                                        id="Vector_77"
                                        d="M708.425 716.866C709.837 716.866 710.981 715.722 710.981 714.31C710.981 712.898 709.837 711.754 708.425 711.754C707.013 711.754 705.869 712.898 705.869 714.31C705.869 715.722 707.013 716.866 708.425 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_78"
                                        d="M708.425 677.12C709.837 677.12 710.981 675.975 710.981 674.564C710.981 673.152 709.837 672.008 708.425 672.008C707.013 672.008 705.869 673.152 705.869 674.564C705.869 675.975 707.013 677.12 708.425 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_79"
                                        d="M708.425 637.389C709.837 637.389 710.981 636.245 710.981 634.833C710.981 633.422 709.837 632.277 708.425 632.277C707.013 632.277 705.869 633.422 705.869 634.833C705.869 636.245 707.013 637.389 708.425 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_80"
                                        d="M708.425 597.651C709.837 597.651 710.981 596.507 710.981 595.095C710.981 593.683 709.837 592.539 708.425 592.539C707.013 592.539 705.869 593.683 705.869 595.095C705.869 596.507 707.013 597.651 708.425 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_24">
                                      <path
                                        id="Vector_81"
                                        d="M668.476 716.866C669.888 716.866 671.032 715.722 671.032 714.31C671.032 712.898 669.888 711.754 668.476 711.754C667.064 711.754 665.92 712.898 665.92 714.31C665.92 715.722 667.064 716.866 668.476 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_82"
                                        d="M668.476 677.12C669.888 677.12 671.032 675.975 671.032 674.564C671.032 673.152 669.888 672.008 668.476 672.008C667.064 672.008 665.92 673.152 665.92 674.564C665.92 675.975 667.064 677.12 668.476 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_83"
                                        d="M668.476 637.389C669.888 637.389 671.032 636.245 671.032 634.833C671.032 633.422 669.888 632.277 668.476 632.277C667.064 632.277 665.92 633.422 665.92 634.833C665.92 636.245 667.064 637.389 668.476 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_84"
                                        d="M668.476 597.651C669.888 597.651 671.032 596.507 671.032 595.095C671.032 593.683 669.888 592.539 668.476 592.539C667.064 592.539 665.92 593.683 665.92 595.095C665.92 596.507 667.064 597.651 668.476 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_25">
                                      <path
                                        id="Vector_85"
                                        d="M628.525 716.866C629.936 716.866 631.081 715.722 631.081 714.31C631.081 712.898 629.936 711.754 628.525 711.754C627.113 711.754 625.969 712.898 625.969 714.31C625.969 715.722 627.113 716.866 628.525 716.866Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_86"
                                        d="M628.525 677.12C629.936 677.12 631.081 675.975 631.081 674.564C631.081 673.152 629.936 672.008 628.525 672.008C627.113 672.008 625.969 673.152 625.969 674.564C625.969 675.975 627.113 677.12 628.525 677.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_87"
                                        d="M628.525 637.389C629.936 637.389 631.081 636.245 631.081 634.833C631.081 633.422 629.936 632.277 628.525 632.277C627.113 632.277 625.969 633.422 625.969 634.833C625.969 636.245 627.113 637.389 628.525 637.389Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_88"
                                        d="M628.525 597.651C629.936 597.651 631.081 596.507 631.081 595.095C631.081 593.683 629.936 592.539 628.525 592.539C627.113 592.539 625.969 593.683 625.969 595.095C625.969 596.507 627.113 597.651 628.525 597.651Z"
                                        fill="white"
                                      />
                                    </g>
                                  </g>
                                  <g id="Group_26">
                                    <g id="Group_27">
                                      <path
                                        id="Vector_89"
                                        d="M1187.84 597.651C1189.25 597.651 1190.4 596.507 1190.4 595.095C1190.4 593.683 1189.25 592.539 1187.84 592.539C1186.43 592.539 1185.29 593.683 1185.29 595.095C1185.29 596.507 1186.43 597.651 1187.84 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_90"
                                        d="M1187.84 557.921C1189.25 557.921 1190.4 556.776 1190.4 555.364C1190.4 553.953 1189.25 552.809 1187.84 552.809C1186.43 552.809 1185.29 553.953 1185.29 555.364C1185.29 556.776 1186.43 557.921 1187.84 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_91"
                                        d="M1187.84 518.175C1189.25 518.175 1190.4 517.03 1190.4 515.618C1190.4 514.207 1189.25 513.062 1187.84 513.062C1186.43 513.062 1185.29 514.207 1185.29 515.618C1185.29 517.03 1186.43 518.175 1187.84 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_92"
                                        d="M1187.84 478.421C1189.25 478.421 1190.4 477.276 1190.4 475.865C1190.4 474.453 1189.25 473.309 1187.84 473.309C1186.43 473.309 1185.29 474.453 1185.29 475.865C1185.29 477.276 1186.43 478.421 1187.84 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_93"
                                        d="M1187.84 438.678C1189.25 438.678 1190.4 437.534 1190.4 436.122C1190.4 434.711 1189.25 433.566 1187.84 433.566C1186.43 433.566 1185.29 434.711 1185.29 436.122C1185.29 437.534 1186.43 438.678 1187.84 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_94"
                                        d="M1185.29 396.388C1185.29 394.968 1186.42 393.832 1187.84 393.832C1189.26 393.832 1190.4 394.968 1190.4 396.388C1190.4 397.808 1189.26 398.944 1187.84 398.944C1186.42 398.944 1185.29 397.808 1185.29 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_28">
                                      <path
                                        id="Vector_95"
                                        d="M1145.33 595.095C1145.33 593.675 1146.47 592.539 1147.89 592.539C1149.31 592.539 1150.45 593.675 1150.45 595.095C1150.45 596.515 1149.31 597.651 1147.89 597.651C1146.47 597.651 1145.33 596.515 1145.33 595.095Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_96"
                                        d="M1145.33 555.364C1145.33 553.968 1146.47 552.809 1147.89 552.809C1149.31 552.809 1150.45 553.944 1150.45 555.364C1150.45 556.784 1149.31 557.921 1147.89 557.921C1146.47 557.921 1145.33 556.784 1145.33 555.364Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_97"
                                        d="M1145.33 515.618C1145.33 514.198 1146.47 513.062 1147.89 513.062C1149.31 513.062 1150.45 514.198 1150.45 515.618C1150.45 517.038 1149.31 518.175 1147.89 518.175C1146.47 518.175 1145.33 517.038 1145.33 515.618Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_98"
                                        d="M1145.33 475.865C1145.33 474.445 1146.47 473.309 1147.89 473.309C1149.31 473.309 1150.45 474.445 1150.45 475.865C1150.45 477.285 1149.31 478.421 1147.89 478.421C1146.47 478.421 1145.33 477.285 1145.33 475.865Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_99"
                                        d="M1145.33 436.122C1145.33 434.702 1146.47 433.566 1147.89 433.566C1149.31 433.566 1150.45 434.702 1150.45 436.122C1150.45 437.542 1149.31 438.678 1147.89 438.678C1146.47 438.678 1145.33 437.542 1145.33 436.122Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_100"
                                        d="M1145.33 396.388C1145.33 394.968 1146.47 393.832 1147.89 393.832C1149.31 393.832 1150.45 394.968 1150.45 396.388C1150.45 397.808 1149.31 398.944 1147.89 398.944C1146.47 398.944 1145.33 397.808 1145.33 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_29">
                                      <path
                                        id="Vector_101"
                                        d="M1107.94 597.651C1109.35 597.651 1110.5 596.507 1110.5 595.095C1110.5 593.683 1109.35 592.539 1107.94 592.539C1106.53 592.539 1105.38 593.683 1105.38 595.095C1105.38 596.507 1106.53 597.651 1107.94 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_102"
                                        d="M1107.94 557.921C1109.35 557.921 1110.5 556.776 1110.5 555.364C1110.5 553.953 1109.35 552.809 1107.94 552.809C1106.53 552.809 1105.38 553.953 1105.38 555.364C1105.38 556.776 1106.53 557.921 1107.94 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_103"
                                        d="M1107.94 518.175C1109.35 518.175 1110.5 517.03 1110.5 515.618C1110.5 514.207 1109.35 513.062 1107.94 513.062C1106.53 513.062 1105.38 514.207 1105.38 515.618C1105.38 517.03 1106.53 518.175 1107.94 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_104"
                                        d="M1107.94 478.421C1109.35 478.421 1110.5 477.276 1110.5 475.865C1110.5 474.453 1109.35 473.309 1107.94 473.309C1106.53 473.309 1105.38 474.453 1105.38 475.865C1105.38 477.276 1106.53 478.421 1107.94 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_105"
                                        d="M1107.94 438.678C1109.35 438.678 1110.5 437.534 1110.5 436.122C1110.5 434.711 1109.35 433.566 1107.94 433.566C1106.53 433.566 1105.38 434.711 1105.38 436.122C1105.38 437.534 1106.53 438.678 1107.94 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_106"
                                        d="M1105.38 396.388C1105.38 394.968 1106.52 393.832 1107.94 393.832C1109.36 393.832 1110.5 394.968 1110.5 396.388C1110.5 397.808 1109.36 398.944 1107.94 398.944C1106.52 398.944 1105.38 397.808 1105.38 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_30">
                                      <path
                                        id="Vector_107"
                                        d="M1065.44 595.095C1065.44 593.675 1066.57 592.539 1067.99 592.539C1069.41 592.539 1070.55 593.675 1070.55 595.095C1070.55 596.515 1069.41 597.651 1067.99 597.651C1066.57 597.651 1065.44 596.515 1065.44 595.095Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_108"
                                        d="M1065.44 555.364C1065.44 553.968 1066.57 552.809 1067.99 552.809C1069.41 552.809 1070.55 553.944 1070.55 555.364C1070.55 556.784 1069.41 557.921 1067.99 557.921C1066.57 557.921 1065.44 556.784 1065.44 555.364Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_109"
                                        d="M1065.44 515.618C1065.44 514.198 1066.57 513.062 1067.99 513.062C1069.41 513.062 1070.55 514.198 1070.55 515.618C1070.55 517.038 1069.41 518.175 1067.99 518.175C1066.57 518.175 1065.44 517.038 1065.44 515.618Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_110"
                                        d="M1065.44 475.865C1065.44 474.445 1066.57 473.309 1067.99 473.309C1069.41 473.309 1070.55 474.445 1070.55 475.865C1070.55 477.285 1069.41 478.421 1067.99 478.421C1066.57 478.421 1065.44 477.285 1065.44 475.865Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_111"
                                        d="M1065.44 436.122C1065.44 434.702 1066.57 433.566 1067.99 433.566C1069.41 433.566 1070.55 434.702 1070.55 436.122C1070.55 437.542 1069.41 438.678 1067.99 438.678C1066.57 438.678 1065.44 437.542 1065.44 436.122Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_112"
                                        d="M1065.44 396.388C1065.44 394.968 1066.57 393.832 1067.99 393.832C1069.41 393.832 1070.55 394.968 1070.55 396.388C1070.55 397.808 1069.41 398.944 1067.99 398.944C1066.57 398.944 1065.44 397.808 1065.44 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_31">
                                      <path
                                        id="Vector_113"
                                        d="M1028.04 597.651C1029.46 597.651 1030.6 596.507 1030.6 595.095C1030.6 593.683 1029.46 592.539 1028.04 592.539C1026.63 592.539 1025.49 593.683 1025.49 595.095C1025.49 596.507 1026.63 597.651 1028.04 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_114"
                                        d="M1028.04 557.921C1029.46 557.921 1030.6 556.776 1030.6 555.364C1030.6 553.953 1029.46 552.809 1028.04 552.809C1026.63 552.809 1025.49 553.953 1025.49 555.364C1025.49 556.776 1026.63 557.921 1028.04 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_115"
                                        d="M1028.04 518.175C1029.46 518.175 1030.6 517.03 1030.6 515.618C1030.6 514.207 1029.46 513.062 1028.04 513.062C1026.63 513.062 1025.49 514.207 1025.49 515.618C1025.49 517.03 1026.63 518.175 1028.04 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_116"
                                        d="M1028.04 478.421C1029.46 478.421 1030.6 477.276 1030.6 475.865C1030.6 474.453 1029.46 473.309 1028.04 473.309C1026.63 473.309 1025.49 474.453 1025.49 475.865C1025.49 477.276 1026.63 478.421 1028.04 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_117"
                                        d="M1028.04 438.678C1029.46 438.678 1030.6 437.534 1030.6 436.122C1030.6 434.711 1029.46 433.566 1028.04 433.566C1026.63 433.566 1025.49 434.711 1025.49 436.122C1025.49 437.534 1026.63 438.678 1028.04 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_118"
                                        d="M1025.49 396.388C1025.49 394.968 1026.62 393.832 1028.04 393.832C1029.46 393.832 1030.6 394.968 1030.6 396.388C1030.6 397.808 1029.46 398.944 1028.04 398.944C1026.62 398.944 1025.49 397.808 1025.49 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_32">
                                      <path
                                        id="Vector_119"
                                        d="M988.095 597.651C989.507 597.651 990.651 596.507 990.651 595.095C990.651 593.683 989.507 592.539 988.095 592.539C986.683 592.539 985.539 593.683 985.539 595.095C985.539 596.507 986.683 597.651 988.095 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_120"
                                        d="M988.095 557.921C989.507 557.921 990.651 556.776 990.651 555.364C990.651 553.953 989.507 552.809 988.095 552.809C986.683 552.809 985.539 553.953 985.539 555.364C985.539 556.776 986.683 557.921 988.095 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_121"
                                        d="M988.095 518.175C989.507 518.175 990.651 517.03 990.651 515.618C990.651 514.207 989.507 513.062 988.095 513.062C986.683 513.062 985.539 514.207 985.539 515.618C985.539 517.03 986.683 518.175 988.095 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_122"
                                        d="M988.095 478.421C989.507 478.421 990.651 477.276 990.651 475.865C990.651 474.453 989.507 473.309 988.095 473.309C986.683 473.309 985.539 474.453 985.539 475.865C985.539 477.276 986.683 478.421 988.095 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_123"
                                        d="M988.095 438.678C989.507 438.678 990.651 437.534 990.651 436.122C990.651 434.711 989.507 433.566 988.095 433.566C986.683 433.566 985.539 434.711 985.539 436.122C985.539 437.534 986.683 438.678 988.095 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_124"
                                        d="M985.539 396.388C985.539 394.968 986.675 393.832 988.095 393.832C989.515 393.832 990.651 394.968 990.651 396.388C990.651 397.808 989.515 398.944 988.095 398.944C986.675 398.944 985.539 397.808 985.539 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_33">
                                      <path
                                        id="Vector_125"
                                        d="M948.119 597.651C949.53 597.651 950.675 596.507 950.675 595.095C950.675 593.683 949.53 592.539 948.119 592.539C946.707 592.539 945.562 593.683 945.562 595.095C945.562 596.507 946.707 597.651 948.119 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_126"
                                        d="M948.119 557.921C949.53 557.921 950.675 556.776 950.675 555.364C950.675 553.953 949.53 552.809 948.119 552.809C946.707 552.809 945.562 553.953 945.562 555.364C945.562 556.776 946.707 557.921 948.119 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_127"
                                        d="M948.119 518.175C949.53 518.175 950.675 517.03 950.675 515.618C950.675 514.207 949.53 513.062 948.119 513.062C946.707 513.062 945.562 514.207 945.562 515.618C945.562 517.03 946.707 518.175 948.119 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_128"
                                        d="M948.119 478.421C949.53 478.421 950.675 477.276 950.675 475.865C950.675 474.453 949.53 473.309 948.119 473.309C946.707 473.309 945.562 474.453 945.562 475.865C945.562 477.276 946.707 478.421 948.119 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_129"
                                        d="M948.119 438.678C949.53 438.678 950.675 437.534 950.675 436.122C950.675 434.711 949.53 433.566 948.119 433.566C946.707 433.566 945.562 434.711 945.562 436.122C945.562 437.534 946.707 438.678 948.119 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_130"
                                        d="M945.586 396.388C945.586 394.968 946.722 393.832 948.142 393.832C949.562 393.832 950.698 394.968 950.698 396.388C950.698 397.808 949.562 398.944 948.142 398.944C946.722 398.944 945.586 397.808 945.586 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_34">
                                      <path
                                        id="Vector_131"
                                        d="M908.171 597.651C909.583 597.651 910.727 596.507 910.727 595.095C910.727 593.683 909.583 592.539 908.171 592.539C906.76 592.539 905.615 593.683 905.615 595.095C905.615 596.507 906.76 597.651 908.171 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_132"
                                        d="M908.171 557.921C909.583 557.921 910.727 556.776 910.727 555.364C910.727 553.953 909.583 552.809 908.171 552.809C906.76 552.809 905.615 553.953 905.615 555.364C905.615 556.776 906.76 557.921 908.171 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_133"
                                        d="M908.171 518.175C909.583 518.175 910.727 517.03 910.727 515.618C910.727 514.207 909.583 513.062 908.171 513.062C906.76 513.062 905.615 514.207 905.615 515.618C905.615 517.03 906.76 518.175 908.171 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_134"
                                        d="M908.171 478.421C909.583 478.421 910.727 477.276 910.727 475.865C910.727 474.453 909.583 473.309 908.171 473.309C906.76 473.309 905.615 474.453 905.615 475.865C905.615 477.276 906.76 478.421 908.171 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_135"
                                        d="M908.171 438.678C909.583 438.678 910.727 437.534 910.727 436.122C910.727 434.711 909.583 433.566 908.171 433.566C906.76 433.566 905.615 434.711 905.615 436.122C905.615 437.534 906.76 438.678 908.171 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_136"
                                        d="M905.639 396.388C905.639 394.968 906.775 393.832 908.195 393.832C909.615 393.832 910.751 394.968 910.751 396.388C910.751 397.808 909.615 398.944 908.195 398.944C906.775 398.944 905.639 397.808 905.639 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_35">
                                      <path
                                        id="Vector_137"
                                        d="M865.688 595.095C865.688 593.675 866.824 592.539 868.244 592.539C869.664 592.539 870.8 593.675 870.8 595.095C870.8 596.515 869.664 597.651 868.244 597.651C866.824 597.651 865.688 596.515 865.688 595.095Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_138"
                                        d="M865.688 555.364C865.688 553.968 866.824 552.809 868.244 552.809C869.664 552.809 870.8 553.944 870.8 555.364C870.8 556.784 869.664 557.921 868.244 557.921C866.824 557.921 865.688 556.784 865.688 555.364Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_139"
                                        d="M865.688 515.618C865.688 514.198 866.824 513.062 868.244 513.062C869.664 513.062 870.8 514.198 870.8 515.618C870.8 517.038 869.664 518.175 868.244 518.175C866.824 518.175 865.688 517.038 865.688 515.618Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_140"
                                        d="M865.688 475.865C865.688 474.445 866.824 473.309 868.244 473.309C869.664 473.309 870.8 474.445 870.8 475.865C870.8 477.285 869.664 478.421 868.244 478.421C866.824 478.421 865.688 477.285 865.688 475.865Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_141"
                                        d="M865.688 436.122C865.688 434.702 866.824 433.566 868.244 433.566C869.664 433.566 870.8 434.702 870.8 436.122C870.8 437.542 869.664 438.678 868.244 438.678C866.824 438.678 865.688 437.542 865.688 436.122Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_142"
                                        d="M865.688 396.388C865.688 394.968 866.824 393.832 868.244 393.832C869.664 393.832 870.8 394.968 870.8 396.388C870.8 397.808 869.664 398.944 868.244 398.944C866.824 398.944 865.688 397.808 865.688 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_36">
                                      <path
                                        id="Vector_143"
                                        d="M828.273 597.651C829.684 597.651 830.829 596.507 830.829 595.095C830.829 593.683 829.684 592.539 828.273 592.539C826.861 592.539 825.717 593.683 825.717 595.095C825.717 596.507 826.861 597.651 828.273 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_144"
                                        d="M828.273 557.921C829.684 557.921 830.829 556.776 830.829 555.364C830.829 553.953 829.684 552.809 828.273 552.809C826.861 552.809 825.717 553.953 825.717 555.364C825.717 556.776 826.861 557.921 828.273 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_145"
                                        d="M828.273 518.175C829.684 518.175 830.829 517.03 830.829 515.618C830.829 514.207 829.684 513.062 828.273 513.062C826.861 513.062 825.717 514.207 825.717 515.618C825.717 517.03 826.861 518.175 828.273 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_146"
                                        d="M828.273 478.421C829.684 478.421 830.829 477.276 830.829 475.865C830.829 474.453 829.684 473.309 828.273 473.309C826.861 473.309 825.717 474.453 825.717 475.865C825.717 477.276 826.861 478.421 828.273 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_147"
                                        d="M828.273 438.678C829.684 438.678 830.829 437.534 830.829 436.122C830.829 434.711 829.684 433.566 828.273 433.566C826.861 433.566 825.717 434.711 825.717 436.122C825.717 437.534 826.861 438.678 828.273 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_148"
                                        d="M825.74 396.388C825.74 394.968 826.876 393.832 828.296 393.832C829.716 393.832 830.852 394.968 830.852 396.388C830.852 397.808 829.716 398.944 828.296 398.944C826.876 398.944 825.74 397.808 825.74 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_37">
                                      <path
                                        id="Vector_149"
                                        d="M785.768 595.095C785.768 593.675 786.904 592.539 788.324 592.539C789.744 592.539 790.88 593.675 790.88 595.095C790.88 596.515 789.744 597.651 788.324 597.651C786.904 597.651 785.768 596.515 785.768 595.095Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_150"
                                        d="M785.768 555.364C785.768 553.968 786.904 552.809 788.324 552.809C789.744 552.809 790.88 553.944 790.88 555.364C790.88 556.784 789.744 557.921 788.324 557.921C786.904 557.921 785.768 556.784 785.768 555.364Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_151"
                                        d="M785.768 515.618C785.768 514.198 786.904 513.062 788.324 513.062C789.744 513.062 790.88 514.198 790.88 515.618C790.88 517.038 789.744 518.175 788.324 518.175C786.904 518.175 785.768 517.038 785.768 515.618Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_152"
                                        d="M785.768 475.865C785.768 474.445 786.904 473.309 788.324 473.309C789.744 473.309 790.88 474.445 790.88 475.865C790.88 477.285 789.744 478.421 788.324 478.421C786.904 478.421 785.768 477.285 785.768 475.865Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_153"
                                        d="M785.768 436.122C785.768 434.702 786.904 433.566 788.324 433.566C789.744 433.566 790.88 434.702 790.88 436.122C790.88 437.542 789.744 438.678 788.324 438.678C786.904 438.678 785.768 437.542 785.768 436.122Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_154"
                                        d="M785.768 396.388C785.768 394.968 786.904 393.832 788.324 393.832C789.744 393.832 790.88 394.968 790.88 396.388C790.88 397.808 789.744 398.944 788.324 398.944C786.904 398.944 785.768 397.808 785.768 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_38">
                                      <path
                                        id="Vector_155"
                                        d="M748.374 597.651C749.786 597.651 750.93 596.507 750.93 595.095C750.93 593.683 749.786 592.539 748.374 592.539C746.963 592.539 745.818 593.683 745.818 595.095C745.818 596.507 746.963 597.651 748.374 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_156"
                                        d="M748.374 557.921C749.786 557.921 750.93 556.776 750.93 555.364C750.93 553.953 749.786 552.809 748.374 552.809C746.963 552.809 745.818 553.953 745.818 555.364C745.818 556.776 746.963 557.921 748.374 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_157"
                                        d="M748.374 518.175C749.786 518.175 750.93 517.03 750.93 515.618C750.93 514.207 749.786 513.062 748.374 513.062C746.963 513.062 745.818 514.207 745.818 515.618C745.818 517.03 746.963 518.175 748.374 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_158"
                                        d="M748.374 478.421C749.786 478.421 750.93 477.276 750.93 475.865C750.93 474.453 749.786 473.309 748.374 473.309C746.963 473.309 745.818 474.453 745.818 475.865C745.818 477.276 746.963 478.421 748.374 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_159"
                                        d="M748.374 438.678C749.786 438.678 750.93 437.534 750.93 436.122C750.93 434.711 749.786 433.566 748.374 433.566C746.963 433.566 745.818 434.711 745.818 436.122C745.818 437.534 746.963 438.678 748.374 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_160"
                                        d="M745.818 396.388C745.818 394.968 746.954 393.832 748.374 393.832C749.794 393.832 750.93 394.968 750.93 396.388C750.93 397.808 749.794 398.944 748.374 398.944C746.954 398.944 745.818 397.808 745.818 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_39">
                                      <path
                                        id="Vector_161"
                                        d="M708.425 597.651C709.837 597.651 710.981 596.507 710.981 595.095C710.981 593.683 709.837 592.539 708.425 592.539C707.013 592.539 705.869 593.683 705.869 595.095C705.869 596.507 707.013 597.651 708.425 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_162"
                                        d="M708.425 557.921C709.837 557.921 710.981 556.776 710.981 555.364C710.981 553.953 709.837 552.809 708.425 552.809C707.013 552.809 705.869 553.953 705.869 555.364C705.869 556.776 707.013 557.921 708.425 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_163"
                                        d="M708.425 518.175C709.837 518.175 710.981 517.03 710.981 515.618C710.981 514.207 709.837 513.062 708.425 513.062C707.013 513.062 705.869 514.207 705.869 515.618C705.869 517.03 707.013 518.175 708.425 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_164"
                                        d="M708.425 478.421C709.837 478.421 710.981 477.276 710.981 475.865C710.981 474.453 709.837 473.309 708.425 473.309C707.013 473.309 705.869 474.453 705.869 475.865C705.869 477.276 707.013 478.421 708.425 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_165"
                                        d="M708.425 438.678C709.837 438.678 710.981 437.534 710.981 436.122C710.981 434.711 709.837 433.566 708.425 433.566C707.013 433.566 705.869 434.711 705.869 436.122C705.869 437.534 707.013 438.678 708.425 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_166"
                                        d="M705.869 396.388C705.869 394.968 707.005 393.832 708.425 393.832C709.845 393.832 710.981 394.968 710.981 396.388C710.981 397.808 709.845 398.944 708.425 398.944C707.005 398.944 705.869 397.808 705.869 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_40">
                                      <path
                                        id="Vector_167"
                                        d="M668.476 597.651C669.888 597.651 671.032 596.507 671.032 595.095C671.032 593.683 669.888 592.539 668.476 592.539C667.064 592.539 665.92 593.683 665.92 595.095C665.92 596.507 667.064 597.651 668.476 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_168"
                                        d="M668.476 557.921C669.888 557.921 671.032 556.776 671.032 555.364C671.032 553.953 669.888 552.809 668.476 552.809C667.064 552.809 665.92 553.953 665.92 555.364C665.92 556.776 667.064 557.921 668.476 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_169"
                                        d="M668.476 518.175C669.888 518.175 671.032 517.03 671.032 515.618C671.032 514.207 669.888 513.062 668.476 513.062C667.064 513.062 665.92 514.207 665.92 515.618C665.92 517.03 667.064 518.175 668.476 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_170"
                                        d="M668.476 478.421C669.888 478.421 671.032 477.276 671.032 475.865C671.032 474.453 669.888 473.309 668.476 473.309C667.064 473.309 665.92 474.453 665.92 475.865C665.92 477.276 667.064 478.421 668.476 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_171"
                                        d="M668.476 438.678C669.888 438.678 671.032 437.534 671.032 436.122C671.032 434.711 669.888 433.566 668.476 433.566C667.064 433.566 665.92 434.711 665.92 436.122C665.92 437.534 667.064 438.678 668.476 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_172"
                                        d="M665.92 396.388C665.92 394.968 667.056 393.832 668.476 393.832C669.896 393.832 671.032 394.968 671.032 396.388C671.032 397.808 669.896 398.944 668.476 398.944C667.056 398.944 665.92 397.808 665.92 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_41">
                                      <path
                                        id="Vector_173"
                                        d="M628.525 597.651C629.936 597.651 631.081 596.507 631.081 595.095C631.081 593.683 629.936 592.539 628.525 592.539C627.113 592.539 625.969 593.683 625.969 595.095C625.969 596.507 627.113 597.651 628.525 597.651Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_174"
                                        d="M628.525 557.921C629.936 557.921 631.081 556.776 631.081 555.364C631.081 553.953 629.936 552.809 628.525 552.809C627.113 552.809 625.969 553.953 625.969 555.364C625.969 556.776 627.113 557.921 628.525 557.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_175"
                                        d="M628.525 518.175C629.936 518.175 631.081 517.03 631.081 515.618C631.081 514.207 629.936 513.062 628.525 513.062C627.113 513.062 625.969 514.207 625.969 515.618C625.969 517.03 627.113 518.175 628.525 518.175Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_176"
                                        d="M628.525 478.421C629.936 478.421 631.081 477.276 631.081 475.865C631.081 474.453 629.936 473.309 628.525 473.309C627.113 473.309 625.969 474.453 625.969 475.865C625.969 477.276 627.113 478.421 628.525 478.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_177"
                                        d="M628.525 438.678C629.936 438.678 631.081 437.534 631.081 436.122C631.081 434.711 629.936 433.566 628.525 433.566C627.113 433.566 625.969 434.711 625.969 436.122C625.969 437.534 627.113 438.678 628.525 438.678Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_178"
                                        d="M625.969 396.388C625.969 394.968 627.105 393.832 628.525 393.832C629.945 393.832 631.081 394.968 631.081 396.388C631.081 397.808 629.945 398.944 628.525 398.944C627.105 398.944 625.969 397.808 625.969 396.388Z"
                                        fill="white"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <path
                          id="Vector_179"
                          d="M1074.24 -28.1914L-26.4258 1072.47V886.431L888.22 -28.1914H1074.24Z"
                          fill="url(#paint0_linear_4995_86464)"
                          style={{ mixBlendMode: "multiply" }}
                        />
                        <path
                          id="Vector_180"
                          d="M437.131 1010.63L1092.79 354.949V404.034L486.192 1010.63H437.131Z"
                          fill="url(#paint1_linear_4995_86464)"
                          style={{ mixBlendMode: "multiply" }}
                        />
                        <path
                          id="Vector_181"
                          d="M936.688 1034.33L1716.72 254.32L1679.8 308.257L958.129 1029.9L936.688 1034.33Z"
                          fill="url(#paint2_linear_4995_86464)"
                          style={{ mixBlendMode: "multiply" }}
                        />
                        <path
                          id="Vector_182"
                          d="M199.922 215.217L975.455 -560.316L938.511 -506.38L216.867 215.288L199.922 215.217Z"
                          fill="url(#paint3_linear_4995_86464)"
                          style={{ mixBlendMode: "multiply" }}
                        />
                        <path
                          id="Vector_183"
                          d="M866.446 909.388L1597.2 178.609V17.3203L702.436 912.086L866.446 909.388Z"
                          fill="url(#paint4_linear_4995_86464)"
                          style={{ mixBlendMode: "multiply" }}
                        />
                        <path
                          id="Vector_184"
                          opacity="0.3"
                          d="M473.816 -314.849L-256.939 415.93V577.219L637.826 -317.547L473.816 -314.849Z"
                          fill="url(#paint5_linear_4995_86464)"
                          style={{ mixBlendMode: "multiply" }}
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Clip path group_4">
                    <mask
                      id="mask4_4995_86464"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={-176}
                      y={-280}
                      width={1775}
                      height={1184}
                    >
                      <g id="clippath-3">
                        <path
                          id="Vector_185"
                          d="M1599 -280H-176V903.333H1599V-280Z"
                          fill="white"
                        />
                      </g>
                    </mask>
                    <g mask="url(#mask4_4995_86464)">
                      <g id="Group_42">
                        <g id="Group_43">
                          <path
                            id="Vector_186"
                            d="M608.598 505.07L1288.33 -174.66V-50.5048L732.753 505.07H608.598Z"
                            fill="url(#paint6_linear_4995_86464)"
                          />
                          <path
                            id="Vector_187"
                            d="M799.824 198.043L1132.62 -134.758V114.831L1049.41 198.043H799.824Z"
                            fill="url(#paint7_linear_4995_86464)"
                          />
                          <g
                            id="Vector_188"
                            style={{ mixBlendMode: "overlay" }}
                          >
                            <path
                              d="M1486.49 -105.914L1296.89 83.6796V-58.5097L1344.3 -105.914H1486.49Z"
                              fill="white"
                            />
                          </g>
                          <path
                            id="Vector_189"
                            d="M961.018 -454.426V-24.3551L530.947 405.716V-24.3551L961.018 -454.426Z"
                            fill="url(#paint8_linear_4995_86464)"
                          />
                          <g
                            id="Vector_190"
                            style={{ mixBlendMode: "overlay" }}
                          >
                            <path
                              d="M400.709 1140.92V828.684L712.943 516.426V828.684L400.709 1140.92Z"
                              fill="white"
                            />
                          </g>
                          <path
                            id="Vector_191"
                            d="M770.003 702.403V224.266L291.865 702.403H770.003Z"
                            fill="url(#paint9_linear_4995_86464)"
                          />
                          <path
                            id="Vector_192"
                            d="M441.558 383.21V240.121L298.445 383.21H441.558Z"
                            fill="url(#paint10_linear_4995_86464)"
                          />
                          <path
                            id="Vector_193"
                            d="M1409.81 160.433V17.3203L1266.7 160.433H1409.81Z"
                            fill="url(#paint11_linear_4995_86464)"
                          />
                          <path
                            id="Vector_194"
                            d="M106.605 396.273V445.263L155.595 396.273H106.605Z"
                            fill="url(#paint12_linear_4995_86464)"
                          />
                          <path
                            id="Vector_195"
                            d="M948.475 500.996V591.45L1038.93 500.996H948.475Z"
                            fill="url(#paint13_linear_4995_86464)"
                          />
                          <path
                            id="Vector_196"
                            d="M335.201 301.913L608.599 28.5156H335.201V301.913Z"
                            fill="url(#paint14_linear_4995_86464)"
                          />
                          <g
                            id="Group_44"
                            style={{ mixBlendMode: "soft-light" }}
                          >
                            <g id="Clip path group_5">
                              <mask
                                id="mask5_4995_86464"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x={233}
                                y={426}
                                width={274}
                                height={274}
                              >
                                <g id="clippath-4">
                                  <path
                                    id="Vector_197"
                                    d="M233.316 699.8L506.714 426.402H233.316V699.8Z"
                                    fill="white"
                                  />
                                </g>
                              </mask>
                              <g mask="url(#mask5_4995_86464)">
                                <g id="Group_45">
                                  <g id="Group_46">
                                    <path
                                      id="Vector_198"
                                      d="M57.3555 575.934C70.1355 563.154 75.1528 568.171 87.9091 555.415C100.689 542.635 95.6718 537.618 108.428 524.838C121.184 512.058 126.225 517.075 139.005 504.295C151.785 491.515 146.768 486.498 159.524 473.718C172.304 460.938 177.322 465.955 190.102 453.199C202.882 440.419 197.864 435.401 210.621 422.645C223.377 409.889 228.418 414.882 241.174 402.126C253.954 389.346 248.937 384.329 261.693 371.549C274.45 358.769 279.491 363.786 292.271 351.006C305.051 338.226 300.033 333.209 312.79 320.429C325.546 307.649 330.587 312.666 343.367 299.886C356.147 287.106 351.13 282.089 363.91 269.309"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_199"
                                      d="M67.5098 586.082C80.2898 573.302 85.3071 578.32 98.0634 565.563C110.82 552.807 105.826 547.766 118.582 534.986C131.339 522.206 136.38 527.223 149.16 514.443C161.94 501.663 156.922 496.646 169.679 483.866C182.459 471.086 187.476 476.103 200.256 463.347C213.036 450.567 208.019 445.55 220.775 432.793C233.555 420.013 238.572 425.031 251.329 412.274C264.109 399.494 259.091 394.477 271.848 381.697C284.628 368.917 289.645 373.934 302.425 361.154C315.205 348.374 310.188 343.357 322.944 330.577C335.724 317.797 340.741 322.814 353.521 310.034C366.301 297.254 361.284 292.237 374.064 279.457"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_200"
                                      d="M77.6621 596.231C90.4421 583.451 95.4595 588.468 108.216 575.712C120.972 562.955 115.978 557.915 128.735 545.135C141.515 532.355 146.532 537.372 159.312 524.592C172.092 511.812 167.075 506.794 179.831 494.014C192.611 481.234 197.628 486.252 210.408 473.495C223.188 460.715 218.171 455.698 230.927 442.942C243.707 430.162 248.725 435.179 261.481 422.423C274.261 409.643 269.244 404.625 282 391.845C294.78 379.065 299.797 384.083 312.577 371.303C325.357 358.523 320.34 353.505 333.096 340.725C345.876 327.945 350.894 332.963 363.674 320.183C376.454 307.403 371.436 302.385 384.216 289.605"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_201"
                                      d="M87.8145 606.391C100.594 593.611 105.612 598.628 118.368 585.872C131.148 573.092 126.131 568.075 138.887 555.295C151.667 542.515 156.684 547.532 169.464 534.752C182.244 521.972 177.227 516.955 189.983 504.175C202.74 491.395 207.781 496.412 220.561 483.656C233.341 470.876 228.323 465.858 241.08 453.102C253.86 440.322 258.877 445.339 271.633 432.583C284.413 419.803 279.396 414.786 292.152 402.006C304.909 389.226 309.95 394.243 322.73 381.463C335.51 368.683 330.492 363.666 343.249 350.886C356.029 338.106 361.046 343.123 373.826 330.343C386.606 317.563 381.589 312.546 394.369 299.766"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_202"
                                      d="M97.9668 616.543C110.747 603.763 115.764 608.781 128.52 596.024C141.3 583.244 136.283 578.227 149.039 565.447C161.819 552.667 166.837 557.684 179.617 544.904C192.397 532.124 187.379 527.107 200.136 514.327C212.892 501.547 217.933 506.564 230.713 493.808C243.493 481.028 238.476 476.011 251.232 463.254C264.012 450.474 269.029 455.492 281.786 442.735C294.566 429.955 289.548 424.938 302.305 412.158C315.061 399.378 320.102 404.395 332.882 391.615C345.662 378.835 340.645 373.818 353.401 361.038C366.181 348.258 371.198 353.275 383.978 340.495C396.758 327.715 391.741 322.698 404.521 309.918"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_203"
                                      d="M108.145 626.696C120.925 613.916 125.942 618.933 138.698 606.177C151.455 593.42 146.461 588.379 159.217 575.599C171.997 562.819 177.015 567.837 189.795 555.057C202.575 542.277 197.557 537.259 210.314 524.479C223.094 511.699 228.111 516.717 240.891 503.96C253.671 491.18 248.654 486.163 261.41 473.407C274.19 460.627 279.207 465.644 291.964 452.888C304.744 440.108 299.726 435.09 312.483 422.31C325.239 409.53 330.28 414.548 343.06 401.768C355.84 388.988 350.823 383.97 363.579 371.19C376.359 358.41 381.376 363.428 394.156 350.648C406.936 337.868 401.919 332.85 414.699 320.07"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_204"
                                      d="M118.297 636.875C131.077 624.095 136.094 629.113 148.851 616.356C161.607 603.6 156.613 598.559 169.37 585.779C182.15 572.999 187.167 578.016 199.947 565.236C212.727 552.456 207.71 547.439 220.466 534.659C233.246 521.879 238.263 526.896 251.043 514.14C263.823 501.36 258.806 496.343 271.562 483.586C284.342 470.806 289.36 475.824 302.116 463.067C314.896 450.287 309.879 445.27 322.635 432.49C335.391 419.71 340.432 424.727 353.212 411.947C365.992 399.167 360.975 394.15 373.731 381.37C386.488 368.59 391.529 373.607 404.309 360.827C417.089 348.047 412.071 343.03 424.851 330.25"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_205"
                                      d="M128.451 647.024C141.231 634.244 146.249 639.261 159.005 626.505C171.785 613.725 166.768 608.707 179.524 595.927C192.28 583.147 197.321 588.165 210.101 575.385C222.881 562.605 217.864 557.587 230.62 544.807C243.4 532.027 248.417 537.045 261.197 524.288C273.977 511.508 268.96 506.491 281.717 493.735C294.497 480.955 299.514 485.972 312.27 473.216C325.05 460.436 320.033 455.418 332.789 442.638C345.569 429.858 350.587 434.876 363.367 422.096C376.147 409.316 371.129 404.298 383.885 391.518C396.665 378.738 401.683 383.756 414.463 370.976C427.243 358.196 422.225 353.178 435.005 340.398"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_206"
                                      d="M138.604 657.172C151.384 644.392 156.401 649.41 169.157 636.653C181.914 623.897 176.92 618.856 189.676 606.076C202.433 593.296 207.474 598.313 220.254 585.533C233.034 572.753 228.016 567.736 240.773 554.956C253.553 542.176 258.57 547.193 271.35 534.437C284.13 521.657 279.112 516.64 291.869 503.883C304.625 491.127 309.666 496.121 322.423 483.364C335.203 470.584 330.185 465.567 342.942 452.787C355.722 440.007 360.739 445.024 373.519 432.244C386.299 419.464 381.282 414.447 394.038 401.667C406.794 388.887 411.835 393.904 424.615 381.124C437.395 368.344 432.378 363.327 445.158 350.547"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_207"
                                      d="M148.756 667.336C161.536 654.556 166.553 659.574 179.31 646.817C192.066 634.061 187.072 629.02 199.829 616.24C212.585 603.46 217.626 608.477 230.406 595.697C243.186 582.917 238.169 577.9 250.925 565.12C263.705 552.34 268.722 557.357 281.502 544.601C294.282 531.821 289.265 526.804 302.021 514.047C314.801 501.267 319.819 506.285 332.575 493.528C345.331 480.772 340.338 475.731 353.094 462.951C365.85 450.171 370.891 455.188 383.671 442.408C396.451 429.628 391.434 424.611 404.19 411.831C416.947 399.051 421.987 404.068 434.767 391.288C447.547 378.508 442.53 373.491 455.31 360.711"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_208"
                                      d="M158.91 677.485C171.69 664.705 176.707 669.722 189.464 656.966C202.244 644.186 197.226 639.168 209.983 626.388C222.763 613.608 227.78 618.626 240.56 605.846C253.34 593.066 248.323 588.048 261.079 575.268C273.859 562.488 278.876 567.506 291.656 554.749C304.436 541.969 299.419 536.952 312.176 524.196C324.956 511.416 329.973 516.433 342.729 503.677C355.509 490.897 350.492 485.879 363.248 473.099C376.004 460.319 381.046 465.337 393.826 452.557C406.606 439.777 401.588 434.759 414.344 421.979C427.124 409.199 432.142 414.217 444.922 401.437C457.702 388.657 452.684 383.639 465.464 370.859"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_209"
                                      d="M169.086 687.637C181.866 674.857 186.883 679.874 199.64 667.118C212.42 654.338 207.402 649.321 220.159 636.541C232.939 623.761 237.956 628.778 250.736 615.998C263.516 603.218 258.499 598.201 271.255 585.421C284.035 572.641 289.052 577.658 301.832 564.902C314.612 552.122 309.595 547.104 322.351 534.348C335.131 521.568 340.149 526.585 352.905 513.829C365.685 501.049 360.668 496.032 373.424 483.252C386.204 470.472 391.221 475.489 404.001 462.709C416.781 449.929 411.764 444.912 424.52 432.132C437.3 419.352 442.318 424.369 455.098 411.589C467.878 398.809 462.86 393.792 475.64 381.012"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_210"
                                      d="M179.238 697.813C192.018 685.033 197.036 690.05 209.792 677.294C222.548 664.537 217.555 659.496 230.311 646.716C243.091 633.936 248.108 638.954 260.888 626.174C273.668 613.394 268.651 608.376 281.407 595.596C294.164 582.816 299.205 587.834 311.985 575.077C324.765 562.297 319.747 557.28 332.504 544.524C345.284 531.744 350.301 536.761 363.057 524.005C375.837 511.225 370.82 506.207 383.576 493.427C396.356 480.647 401.374 485.665 414.154 472.885C426.934 460.105 421.916 455.088 434.673 442.308C447.453 429.528 452.47 434.545 465.25 421.765C478.03 408.985 473.013 403.967 485.793 391.188"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_211"
                                      d="M189.393 707.965C202.173 695.185 207.19 700.203 219.946 687.446C232.703 674.69 227.709 669.649 240.465 656.869C253.245 644.089 258.263 649.106 271.043 636.326C283.823 623.546 278.805 618.529 291.562 605.749C304.342 592.969 309.359 597.986 322.139 585.23C334.919 572.474 329.902 567.432 342.658 554.676C355.438 541.896 360.455 546.913 373.212 534.157C385.992 521.377 380.974 516.36 393.731 503.58C406.487 490.8 411.528 495.817 424.308 483.037C437.088 470.257 432.071 465.24 444.827 452.46C457.607 439.68 462.624 444.697 475.404 431.917C488.184 419.137 483.167 414.12 495.947 401.34"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_212"
                                      d="M199.545 718.114C212.325 705.334 217.342 710.351 230.099 697.595C242.855 684.838 237.861 679.797 250.618 667.017C263.398 654.237 268.415 659.255 281.195 646.475C293.975 633.695 288.958 628.677 301.714 615.897C314.494 603.117 319.511 608.135 332.291 595.378C345.071 582.598 340.054 577.581 352.81 564.825C365.59 552.045 370.608 557.062 383.364 544.306C396.144 531.526 391.127 526.508 403.883 513.728C416.639 500.948 421.68 505.966 434.46 493.186C447.24 480.406 442.223 475.388 454.979 462.608C467.759 449.828 472.777 454.846 485.557 442.066C498.337 429.286 493.319 424.268 506.099 411.488"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_213"
                                      d="M209.699 728.278C222.479 715.498 227.497 720.515 240.253 707.759C253.033 694.979 248.016 689.961 260.772 677.181C273.552 664.401 278.569 669.419 291.349 656.639C304.129 643.859 299.112 638.841 311.868 626.061C324.648 613.281 329.666 618.299 342.446 605.542C355.226 592.762 350.208 587.745 362.965 574.989C375.721 562.232 380.762 567.226 393.518 554.47C406.298 541.69 401.281 536.672 414.037 523.892C426.817 511.112 431.835 516.13 444.615 503.35C457.395 490.57 452.377 485.552 465.134 472.772C477.914 459.992 482.931 465.01 495.711 452.23C508.491 439.45 503.473 434.432 516.253 421.652"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_214"
                                      d="M219.852 738.426C232.632 725.646 237.649 730.663 250.405 717.907C263.185 705.127 258.168 700.11 270.924 687.33C283.681 674.55 288.722 679.567 301.502 666.787C314.282 654.007 309.264 648.99 322.021 636.21C334.801 623.43 339.818 628.447 352.598 615.691C365.378 602.911 360.361 597.893 373.117 585.137C385.897 572.357 390.914 577.374 403.671 564.618C416.451 551.838 411.433 546.821 424.19 534.041C436.97 521.261 441.987 526.278 454.767 513.498C467.547 500.718 462.53 495.701 475.286 482.921C488.066 470.141 493.083 475.158 505.863 462.378C518.643 449.598 513.626 444.581 526.406 431.801"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_215"
                                      d="M230.027 748.575C242.807 735.795 247.825 740.812 260.581 728.056C273.337 715.299 268.344 710.258 281.1 697.478C293.88 684.698 298.897 689.716 311.677 676.936C324.457 664.156 319.44 659.138 332.196 646.358C344.976 633.578 349.994 638.596 362.774 625.839C375.554 613.059 370.536 608.042 383.293 595.286C396.073 582.506 401.09 587.523 413.846 574.767C426.603 562.01 421.609 556.969 434.365 544.189C447.122 531.409 452.163 536.427 464.943 523.647C477.723 510.867 472.705 505.849 485.462 493.069C498.242 480.289 503.259 485.307 516.039 472.527C528.819 459.747 523.802 454.729 536.582 441.949"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_216"
                                      d="M240.182 758.754C252.962 745.974 257.979 750.992 270.735 738.235C283.515 725.455 278.498 720.438 291.254 707.658C304.034 694.878 309.052 699.895 321.832 687.115C334.612 674.335 329.594 669.318 342.351 656.538C355.131 643.758 360.148 648.775 372.928 636.019C385.708 623.239 380.691 618.222 393.447 605.465C406.227 592.685 411.244 597.702 424.001 584.946C436.781 572.166 431.763 567.149 444.52 554.369C457.3 541.589 462.317 546.606 475.097 533.826C487.877 521.046 482.86 516.029 495.616 503.249C508.396 490.469 513.413 495.486 526.193 482.706C538.973 469.926 533.956 464.909 546.736 452.129"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_217"
                                      d="M250.334 768.907C263.114 756.127 268.131 761.144 280.888 748.388C293.668 735.608 288.65 730.59 301.407 717.81C314.163 705.03 319.204 710.048 331.984 697.268C344.764 684.488 339.747 679.47 352.503 666.69C365.259 653.91 370.3 658.928 383.08 646.171C395.86 633.391 390.843 628.374 403.599 615.618C416.356 602.861 421.397 607.855 434.153 595.099C446.933 582.319 441.916 577.301 454.672 564.521C467.428 551.741 472.469 556.758 485.249 543.978C498.029 531.198 493.012 526.181 505.768 513.401C518.548 500.621 523.566 505.639 536.346 492.859C549.126 480.079 544.108 475.061 556.888 462.281"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_218"
                                      d="M260.486 779.059C273.266 766.279 278.284 771.296 291.04 758.54C303.796 745.784 298.803 740.743 311.559 727.963C324.339 715.183 329.356 720.2 342.136 707.42C354.916 694.64 349.899 689.623 362.655 676.843C375.435 664.063 380.453 669.08 393.233 656.324C406.013 643.544 400.995 638.526 413.752 625.77C426.532 612.99 431.549 618.007 444.305 605.251C457.085 592.471 452.068 587.454 464.824 574.674C477.581 561.894 482.622 566.911 495.402 554.131C508.182 541.351 503.164 536.334 515.921 523.554C528.701 510.774 533.718 515.791 546.498 503.011C559.278 490.231 554.261 485.214 567.041 472.434"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_219"
                                      d="M270.639 789.219C283.419 776.439 288.436 781.456 301.192 768.7C313.949 755.944 308.955 750.903 321.711 738.123C334.491 725.343 339.509 730.36 352.289 717.58C365.069 704.8 360.051 699.783 372.808 687.003C385.588 674.223 390.605 679.24 403.385 666.484C416.165 653.727 411.148 648.686 423.904 635.93C436.684 623.15 441.701 628.167 454.458 615.411C467.238 602.631 462.22 597.614 474.977 584.834C487.733 572.054 492.774 577.071 505.554 564.291C518.334 551.511 513.317 546.494 526.073 533.714C538.853 520.934 543.87 525.951 556.65 513.171C569.43 500.391 564.413 495.374 577.193 482.594"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_220"
                                      d="M280.793 799.368C293.573 786.588 298.59 791.605 311.347 778.849C324.127 766.069 319.109 761.051 331.866 748.271C344.622 735.491 349.663 740.508 362.443 727.728C375.223 714.948 370.206 709.931 382.962 697.151C395.742 684.371 400.759 689.389 413.539 676.632C426.319 663.852 421.302 658.835 434.058 646.078C446.838 633.298 451.856 638.316 464.612 625.56C477.392 612.78 472.375 607.762 485.131 594.982C497.911 582.202 502.928 587.22 515.708 574.44C528.488 561.66 523.471 556.642 536.227 543.862C548.984 531.082 554.025 536.099 566.805 523.319C579.585 510.539 574.567 505.522 587.347 492.742"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_221"
                                      d="M290.969 809.52C303.749 796.74 308.766 801.757 321.522 789.001C334.302 776.221 329.285 771.204 342.041 758.424C354.798 745.644 359.839 750.661 372.619 737.881C385.399 725.101 380.381 720.084 393.138 707.304C405.918 694.524 410.935 699.541 423.715 686.785C436.495 674.005 431.478 668.987 444.234 656.231C456.99 643.475 462.031 648.468 474.788 635.712C487.568 622.932 482.55 617.915 495.307 605.135C508.087 592.355 513.104 597.372 525.884 584.592C538.664 571.812 533.647 566.795 546.403 554.015C559.183 541.235 564.2 546.252 576.98 533.472C589.76 520.692 584.743 515.675 597.523 502.895"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_222"
                                      d="M301.123 819.696C313.903 806.916 318.92 811.933 331.677 799.177C344.433 786.42 339.439 781.379 352.196 768.599C364.952 755.819 369.993 760.837 382.773 748.057C395.553 735.277 390.536 730.259 403.292 717.479C416.072 704.699 421.089 709.717 433.869 696.96C446.649 684.18 441.632 679.163 454.388 666.407C467.168 653.627 472.186 658.644 484.942 645.888C497.698 633.131 492.705 628.09 505.461 615.31C518.217 602.53 523.258 607.548 536.038 594.768C548.818 581.988 543.801 576.97 556.557 564.19C569.314 551.41 574.355 556.428 587.135 543.648C599.915 530.868 594.897 525.85 607.677 513.07"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g
                            id="Vector_223"
                            style={{ mixBlendMode: "overlay" }}
                          >
                            <path
                              d="M820.888 497.234V314.172L637.826 497.234H820.888Z"
                              fill="white"
                            />
                          </g>
                          <g
                            id="Vector_224"
                            style={{ mixBlendMode: "overlay" }}
                          >
                            <path
                              d="M145.89 508.55V429.953L67.3164 508.55H145.89Z"
                              fill="white"
                            />
                          </g>
                          <g
                            id="Vector_225"
                            style={{ mixBlendMode: "overlay" }}
                          >
                            <path
                              d="M483.732 79.3984V226.132L630.466 79.3984H483.732Z"
                              fill="white"
                            />
                          </g>
                          <g
                            id="Vector_226"
                            style={{ mixBlendMode: "overlay" }}
                          >
                            <path
                              d="M361.068 415.68V522.795L468.207 415.68H361.068Z"
                              fill="white"
                            />
                          </g>
                          <g id="Clip path group_6">
                            <mask
                              id="mask6_4995_86464"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x={687}
                              y={-193}
                              width={391}
                              height={392}
                            >
                              <g id="clippath-5">
                                <path
                                  id="Vector_227"
                                  d="M687.621 198.039L1077.72 -192.059H687.621V198.039Z"
                                  fill="white"
                                />
                              </g>
                            </mask>
                            <g mask="url(#mask6_4995_86464)">
                              <g id="Group_47">
                                <g id="Group_48">
                                  <g id="Group_49">
                                    <g id="Group_50">
                                      <path
                                        id="Vector_228"
                                        d="M705.82 8.42641C705.82 9.34941 705.062 10.1067 704.139 10.1067C703.216 10.1067 702.459 9.34941 702.459 8.42641C702.459 7.50341 703.216 6.74609 704.139 6.74609C705.062 6.74609 705.82 7.50341 705.82 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_229"
                                        d="M705.82 34.735C705.82 35.658 705.062 36.4154 704.139 36.4154C703.216 36.4154 702.459 35.658 702.459 34.735C702.459 33.812 703.216 33.0547 704.139 33.0547C705.062 33.0547 705.82 33.812 705.82 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_230"
                                        d="M705.82 61.0553C705.82 61.9783 705.062 62.7357 704.139 62.7357C703.216 62.7357 702.459 61.9783 702.459 61.0553C702.459 60.1323 703.216 59.375 704.139 59.375C705.062 59.375 705.82 60.1323 705.82 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_51">
                                      <path
                                        id="Vector_231"
                                        d="M732.279 8.42641C732.279 9.34941 731.521 10.1067 730.598 10.1067C729.675 10.1067 728.918 9.34941 728.918 8.42641C728.918 7.50341 729.675 6.74609 730.598 6.74609C731.521 6.74609 732.279 7.50341 732.279 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_232"
                                        d="M732.279 34.735C732.279 35.658 731.521 36.4154 730.598 36.4154C729.675 36.4154 728.918 35.658 728.918 34.735C728.918 33.812 729.675 33.0547 730.598 33.0547C731.521 33.0547 732.279 33.812 732.279 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_233"
                                        d="M732.279 61.0553C732.279 61.9783 731.521 62.7357 730.598 62.7357C729.675 62.7357 728.918 61.9783 728.918 61.0553C728.918 60.1323 729.675 59.375 730.598 59.375C731.521 59.375 732.279 60.1323 732.279 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_52">
                                      <path
                                        id="Vector_234"
                                        d="M758.74 8.42641C758.74 9.34941 757.982 10.1067 757.059 10.1067C756.136 10.1067 755.379 9.34941 755.379 8.42641C755.379 7.50341 756.136 6.74609 757.059 6.74609C757.982 6.74609 758.74 7.50341 758.74 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_235"
                                        d="M758.74 34.735C758.74 35.658 757.982 36.4154 757.059 36.4154C756.136 36.4154 755.379 35.658 755.379 34.735C755.379 33.812 756.136 33.0547 757.059 33.0547C757.982 33.0547 758.74 33.812 758.74 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_236"
                                        d="M758.74 61.0553C758.74 61.9783 757.982 62.7357 757.059 62.7357C756.136 62.7357 755.379 61.9783 755.379 61.0553C755.379 60.1323 756.136 59.375 757.059 59.375C757.982 59.375 758.74 60.1323 758.74 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_53">
                                      <path
                                        id="Vector_237"
                                        d="M785.175 8.42641C785.175 9.34941 784.418 10.1067 783.495 10.1067C782.572 10.1067 781.814 9.34941 781.814 8.42641C781.814 7.50341 782.572 6.74609 783.495 6.74609C784.418 6.74609 785.175 7.50341 785.175 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_238"
                                        d="M785.175 34.735C785.175 35.658 784.418 36.4154 783.495 36.4154C782.572 36.4154 781.814 35.658 781.814 34.735C781.814 33.812 782.572 33.0547 783.495 33.0547C784.418 33.0547 785.175 33.812 785.175 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_239"
                                        d="M785.175 61.0553C785.175 61.9783 784.418 62.7357 783.495 62.7357C782.572 62.7357 781.814 61.9783 781.814 61.0553C781.814 60.1323 782.572 59.375 783.495 59.375C784.418 59.375 785.175 60.1323 785.175 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_54">
                                      <path
                                        id="Vector_240"
                                        d="M811.634 8.42641C811.634 9.34941 810.877 10.1067 809.954 10.1067C809.031 10.1067 808.273 9.34941 808.273 8.42641C808.273 7.50341 809.031 6.74609 809.954 6.74609C810.877 6.74609 811.634 7.50341 811.634 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_241"
                                        d="M811.634 34.735C811.634 35.658 810.877 36.4154 809.954 36.4154C809.031 36.4154 808.273 35.658 808.273 34.735C808.273 33.812 809.031 33.0547 809.954 33.0547C810.877 33.0547 811.634 33.812 811.634 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_242"
                                        d="M811.634 61.0553C811.634 61.9783 810.877 62.7357 809.954 62.7357C809.031 62.7357 808.273 61.9783 808.273 61.0553C808.273 60.1323 809.031 59.375 809.954 59.375C810.877 59.375 811.634 60.1323 811.634 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_55">
                                      <path
                                        id="Vector_243"
                                        d="M838.093 8.42641C838.093 9.34941 837.336 10.1067 836.413 10.1067C835.49 10.1067 834.732 9.34941 834.732 8.42641C834.732 7.50341 835.49 6.74609 836.413 6.74609C837.336 6.74609 838.093 7.50341 838.093 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_244"
                                        d="M838.093 34.735C838.093 35.658 837.336 36.4154 836.413 36.4154C835.49 36.4154 834.732 35.658 834.732 34.735C834.732 33.812 835.49 33.0547 836.413 33.0547C837.336 33.0547 838.093 33.812 838.093 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_245"
                                        d="M838.093 61.0553C838.093 61.9783 837.336 62.7357 836.413 62.7357C835.49 62.7357 834.732 61.9783 834.732 61.0553C834.732 60.1323 835.49 59.375 836.413 59.375C837.336 59.375 838.093 60.1323 838.093 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_56">
                                      <path
                                        id="Vector_246"
                                        d="M864.554 8.42641C864.554 9.34941 863.797 10.1067 862.874 10.1067C861.951 10.1067 861.193 9.34941 861.193 8.42641C861.193 7.50341 861.951 6.74609 862.874 6.74609C863.797 6.74609 864.554 7.50341 864.554 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_247"
                                        d="M864.554 34.735C864.554 35.658 863.797 36.4154 862.874 36.4154C861.951 36.4154 861.193 35.658 861.193 34.735C861.193 33.812 861.951 33.0547 862.874 33.0547C863.797 33.0547 864.554 33.812 864.554 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_248"
                                        d="M864.554 61.0553C864.554 61.9783 863.797 62.7357 862.874 62.7357C861.951 62.7357 861.193 61.9783 861.193 61.0553C861.193 60.1323 861.951 59.375 862.874 59.375C863.797 59.375 864.554 60.1323 864.554 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_57">
                                      <path
                                        id="Vector_249"
                                        d="M890.99 8.42641C890.99 9.34941 890.232 10.1067 889.309 10.1067C888.386 10.1067 887.629 9.34941 887.629 8.42641C887.629 7.50341 888.386 6.74609 889.309 6.74609C890.232 6.74609 890.99 7.50341 890.99 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_250"
                                        d="M890.99 34.735C890.99 35.658 890.232 36.4154 889.309 36.4154C888.386 36.4154 887.629 35.658 887.629 34.735C887.629 33.812 888.386 33.0547 889.309 33.0547C890.232 33.0547 890.99 33.812 890.99 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_251"
                                        d="M890.99 61.0553C890.99 61.9783 890.232 62.7357 889.309 62.7357C888.386 62.7357 887.629 61.9783 887.629 61.0553C887.629 60.1323 888.386 59.375 889.309 59.375C890.232 59.375 890.99 60.1323 890.99 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_58">
                                      <path
                                        id="Vector_252"
                                        d="M917.449 8.42641C917.449 9.34941 916.691 10.1067 915.768 10.1067C914.845 10.1067 914.088 9.34941 914.088 8.42641C914.088 7.50341 914.845 6.74609 915.768 6.74609C916.691 6.74609 917.449 7.50341 917.449 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_253"
                                        d="M917.449 34.735C917.449 35.658 916.691 36.4154 915.768 36.4154C914.845 36.4154 914.088 35.658 914.088 34.735C914.088 33.812 914.845 33.0547 915.768 33.0547C916.691 33.0547 917.449 33.812 917.449 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_254"
                                        d="M917.449 61.0553C917.449 61.9783 916.691 62.7357 915.768 62.7357C914.845 62.7357 914.088 61.9783 914.088 61.0553C914.088 60.1323 914.845 59.375 915.768 59.375C916.691 59.375 917.449 60.1323 917.449 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_59">
                                      <path
                                        id="Vector_255"
                                        d="M943.906 8.42641C943.906 9.34941 943.148 10.1067 942.225 10.1067C941.302 10.1067 940.545 9.34941 940.545 8.42641C940.545 7.50341 941.302 6.74609 942.225 6.74609C943.148 6.74609 943.906 7.50341 943.906 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_256"
                                        d="M943.906 34.735C943.906 35.658 943.148 36.4154 942.225 36.4154C941.302 36.4154 940.545 35.658 940.545 34.735C940.545 33.812 941.302 33.0547 942.225 33.0547C943.148 33.0547 943.906 33.812 943.906 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_257"
                                        d="M943.906 61.0553C943.906 61.9783 943.148 62.7357 942.225 62.7357C941.302 62.7357 940.545 61.9783 940.545 61.0553C940.545 60.1323 941.302 59.375 942.225 59.375C943.148 59.375 943.906 60.1323 943.906 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_60">
                                      <path
                                        id="Vector_258"
                                        d="M970.367 8.42641C970.367 9.34941 969.609 10.1067 968.686 10.1067C967.763 10.1067 967.006 9.34941 967.006 8.42641C967.006 7.50341 967.763 6.74609 968.686 6.74609C969.609 6.74609 970.367 7.50341 970.367 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_259"
                                        d="M970.367 34.735C970.367 35.658 969.609 36.4154 968.686 36.4154C967.763 36.4154 967.006 35.658 967.006 34.735C967.006 33.812 967.763 33.0547 968.686 33.0547C969.609 33.0547 970.367 33.812 970.367 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_260"
                                        d="M970.367 61.0553C970.367 61.9783 969.609 62.7357 968.686 62.7357C967.763 62.7357 967.006 61.9783 967.006 61.0553C967.006 60.1323 967.763 59.375 968.686 59.375C969.609 59.375 970.367 60.1323 970.367 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_61">
                                      <path
                                        id="Vector_261"
                                        d="M996.802 8.42641C996.802 9.34941 996.045 10.1067 995.122 10.1067C994.199 10.1067 993.441 9.34941 993.441 8.42641C993.441 7.50341 994.199 6.74609 995.122 6.74609C996.045 6.74609 996.802 7.50341 996.802 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_262"
                                        d="M996.802 34.735C996.802 35.658 996.045 36.4154 995.122 36.4154C994.199 36.4154 993.441 35.658 993.441 34.735C993.441 33.812 994.199 33.0547 995.122 33.0547C996.045 33.0547 996.802 33.812 996.802 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_263"
                                        d="M996.802 61.0553C996.802 61.9783 996.045 62.7357 995.122 62.7357C994.199 62.7357 993.441 61.9783 993.441 61.0553C993.441 60.1323 994.199 59.375 995.122 59.375C996.045 59.375 996.802 60.1323 996.802 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_62">
                                      <path
                                        id="Vector_264"
                                        d="M1023.26 8.42641C1023.26 9.34941 1022.5 10.1067 1021.58 10.1067C1020.66 10.1067 1019.9 9.34941 1019.9 8.42641C1019.9 7.50341 1020.66 6.74609 1021.58 6.74609C1022.5 6.74609 1023.26 7.50341 1023.26 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_265"
                                        d="M1023.26 34.735C1023.26 35.658 1022.5 36.4154 1021.58 36.4154C1020.66 36.4154 1019.9 35.658 1019.9 34.735C1019.9 33.812 1020.66 33.0547 1021.58 33.0547C1022.5 33.0547 1023.26 33.812 1023.26 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_266"
                                        d="M1023.26 61.0553C1023.26 61.9783 1022.5 62.7357 1021.58 62.7357C1020.66 62.7357 1019.9 61.9783 1019.9 61.0553C1019.9 60.1323 1020.66 59.375 1021.58 59.375C1022.5 59.375 1023.26 60.1323 1023.26 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_63">
                                      <path
                                        id="Vector_267"
                                        d="M1049.72 8.42641C1049.72 9.34941 1048.96 10.1067 1048.04 10.1067C1047.12 10.1067 1046.36 9.34941 1046.36 8.42641C1046.36 7.50341 1047.12 6.74609 1048.04 6.74609C1048.96 6.74609 1049.72 7.50341 1049.72 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_268"
                                        d="M1049.72 34.735C1049.72 35.658 1048.96 36.4154 1048.04 36.4154C1047.12 36.4154 1046.36 35.658 1046.36 34.735C1046.36 33.812 1047.12 33.0547 1048.04 33.0547C1048.96 33.0547 1049.72 33.812 1049.72 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_269"
                                        d="M1049.72 61.0553C1049.72 61.9783 1048.96 62.7357 1048.04 62.7357C1047.12 62.7357 1046.36 61.9783 1046.36 61.0553C1046.36 60.1323 1047.12 59.375 1048.04 59.375C1048.96 59.375 1049.72 60.1323 1049.72 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_64">
                                      <path
                                        id="Vector_270"
                                        d="M1076.16 8.42641C1076.16 9.34941 1075.4 10.1067 1074.48 10.1067C1073.55 10.1067 1072.8 9.34941 1072.8 8.42641C1072.8 7.50341 1073.55 6.74609 1074.48 6.74609C1075.4 6.74609 1076.16 7.50341 1076.16 8.42641Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_271"
                                        d="M1076.16 34.735C1076.16 35.658 1075.4 36.4154 1074.48 36.4154C1073.55 36.4154 1072.8 35.658 1072.8 34.735C1072.8 33.812 1073.55 33.0547 1074.48 33.0547C1075.4 33.0547 1076.16 33.812 1076.16 34.735Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_272"
                                        d="M1076.16 61.0553C1076.16 61.9783 1075.4 62.7357 1074.48 62.7357C1073.55 62.7357 1072.8 61.9783 1072.8 61.0553C1072.8 60.1323 1073.55 59.375 1074.48 59.375C1075.4 59.375 1076.16 60.1323 1076.16 61.0553Z"
                                        fill="white"
                                      />
                                    </g>
                                  </g>
                                  <g id="Group_65">
                                    <g id="Group_66">
                                      <path
                                        id="Vector_273"
                                        d="M705.82 61.0553C705.82 61.9783 705.062 62.7357 704.139 62.7357C703.216 62.7357 702.459 61.9783 702.459 61.0553C702.459 60.1323 703.216 59.375 704.139 59.375C705.062 59.375 705.82 60.1323 705.82 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_274"
                                        d="M705.82 87.3757C705.82 88.2987 705.062 89.056 704.139 89.056C703.216 89.056 702.459 88.2987 702.459 87.3757C702.459 86.4527 703.216 85.6953 704.139 85.6953C705.062 85.6953 705.82 86.4527 705.82 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_275"
                                        d="M705.82 113.688C705.82 114.611 705.062 115.368 704.139 115.368C703.216 115.368 702.459 114.611 702.459 113.688C702.459 112.765 703.216 112.008 704.139 112.008C705.062 112.008 705.82 112.765 705.82 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_276"
                                        d="M705.82 139.989C705.82 140.912 705.062 141.669 704.139 141.669C703.216 141.669 702.459 140.912 702.459 139.989C702.459 139.066 703.216 138.309 704.139 138.309C705.062 138.309 705.82 139.066 705.82 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_277"
                                        d="M705.82 166.301C705.82 167.224 705.062 167.982 704.139 167.982C703.216 167.982 702.459 167.224 702.459 166.301C702.459 165.378 703.216 164.621 704.139 164.621C705.062 164.621 705.82 165.378 705.82 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_278"
                                        d="M705.82 192.618C705.82 193.541 705.062 194.298 704.139 194.298C703.216 194.298 702.459 193.541 702.459 192.618C702.459 191.695 703.216 190.938 704.139 190.938C705.062 190.938 705.82 191.695 705.82 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_67">
                                      <path
                                        id="Vector_279"
                                        d="M732.279 61.0553C732.279 61.9783 731.521 62.7357 730.598 62.7357C729.675 62.7357 728.918 61.9783 728.918 61.0553C728.918 60.1323 729.675 59.375 730.598 59.375C731.521 59.375 732.279 60.1323 732.279 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_280"
                                        d="M732.279 87.3757C732.279 88.2987 731.521 89.056 730.598 89.056C729.675 89.056 728.918 88.2987 728.918 87.3757C728.918 86.4527 729.675 85.6953 730.598 85.6953C731.521 85.6953 732.279 86.4527 732.279 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_281"
                                        d="M732.279 113.688C732.279 114.611 731.521 115.368 730.598 115.368C729.675 115.368 728.918 114.611 728.918 113.688C728.918 112.765 729.675 112.008 730.598 112.008C731.521 112.008 732.279 112.765 732.279 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_282"
                                        d="M732.279 139.989C732.279 140.912 731.521 141.669 730.598 141.669C729.675 141.669 728.918 140.912 728.918 139.989C728.918 139.066 729.675 138.309 730.598 138.309C731.521 138.309 732.279 139.066 732.279 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_283"
                                        d="M732.279 166.301C732.279 167.224 731.521 167.982 730.598 167.982C729.675 167.982 728.918 167.224 728.918 166.301C728.918 165.378 729.675 164.621 730.598 164.621C731.521 164.621 732.279 165.378 732.279 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_284"
                                        d="M732.279 192.618C732.279 193.541 731.521 194.298 730.598 194.298C729.675 194.298 728.918 193.541 728.918 192.618C728.918 191.695 729.675 190.938 730.598 190.938C731.521 190.938 732.279 191.695 732.279 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_68">
                                      <path
                                        id="Vector_285"
                                        d="M758.74 61.0553C758.74 61.9783 757.982 62.7357 757.059 62.7357C756.136 62.7357 755.379 61.9783 755.379 61.0553C755.379 60.1323 756.136 59.375 757.059 59.375C757.982 59.375 758.74 60.1323 758.74 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_286"
                                        d="M758.74 87.3757C758.74 88.2987 757.982 89.056 757.059 89.056C756.136 89.056 755.379 88.2987 755.379 87.3757C755.379 86.4527 756.136 85.6953 757.059 85.6953C757.982 85.6953 758.74 86.4527 758.74 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_287"
                                        d="M758.74 113.688C758.74 114.611 757.982 115.368 757.059 115.368C756.136 115.368 755.379 114.611 755.379 113.688C755.379 112.765 756.136 112.008 757.059 112.008C757.982 112.008 758.74 112.765 758.74 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_288"
                                        d="M758.74 139.989C758.74 140.912 757.982 141.669 757.059 141.669C756.136 141.669 755.379 140.912 755.379 139.989C755.379 139.066 756.136 138.309 757.059 138.309C757.982 138.309 758.74 139.066 758.74 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_289"
                                        d="M758.74 166.301C758.74 167.224 757.982 167.982 757.059 167.982C756.136 167.982 755.379 167.224 755.379 166.301C755.379 165.378 756.136 164.621 757.059 164.621C757.982 164.621 758.74 165.378 758.74 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_290"
                                        d="M758.74 192.618C758.74 193.541 757.982 194.298 757.059 194.298C756.136 194.298 755.379 193.541 755.379 192.618C755.379 191.695 756.136 190.938 757.059 190.938C757.982 190.938 758.74 191.695 758.74 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_69">
                                      <path
                                        id="Vector_291"
                                        d="M785.175 61.0553C785.175 61.9783 784.418 62.7357 783.495 62.7357C782.572 62.7357 781.814 61.9783 781.814 61.0553C781.814 60.1323 782.572 59.375 783.495 59.375C784.418 59.375 785.175 60.1323 785.175 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_292"
                                        d="M785.175 87.3757C785.175 88.2987 784.418 89.056 783.495 89.056C782.572 89.056 781.814 88.2987 781.814 87.3757C781.814 86.4527 782.572 85.6953 783.495 85.6953C784.418 85.6953 785.175 86.4527 785.175 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_293"
                                        d="M785.175 113.688C785.175 114.611 784.418 115.368 783.495 115.368C782.572 115.368 781.814 114.611 781.814 113.688C781.814 112.765 782.572 112.008 783.495 112.008C784.418 112.008 785.175 112.765 785.175 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_294"
                                        d="M785.175 139.989C785.175 140.912 784.418 141.669 783.495 141.669C782.572 141.669 781.814 140.912 781.814 139.989C781.814 139.066 782.572 138.309 783.495 138.309C784.418 138.309 785.175 139.066 785.175 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_295"
                                        d="M785.175 166.301C785.175 167.224 784.418 167.982 783.495 167.982C782.572 167.982 781.814 167.224 781.814 166.301C781.814 165.378 782.572 164.621 783.495 164.621C784.418 164.621 785.175 165.378 785.175 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_296"
                                        d="M785.175 192.618C785.175 193.541 784.418 194.298 783.495 194.298C782.572 194.298 781.814 193.541 781.814 192.618C781.814 191.695 782.572 190.938 783.495 190.938C784.418 190.938 785.175 191.695 785.175 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_70">
                                      <path
                                        id="Vector_297"
                                        d="M811.634 61.0553C811.634 61.9783 810.877 62.7357 809.954 62.7357C809.031 62.7357 808.273 61.9783 808.273 61.0553C808.273 60.1323 809.031 59.375 809.954 59.375C810.877 59.375 811.634 60.1323 811.634 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_298"
                                        d="M811.634 87.3757C811.634 88.2987 810.877 89.056 809.954 89.056C809.031 89.056 808.273 88.2987 808.273 87.3757C808.273 86.4527 809.031 85.6953 809.954 85.6953C810.877 85.6953 811.634 86.4527 811.634 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_299"
                                        d="M811.634 113.688C811.634 114.611 810.877 115.368 809.954 115.368C809.031 115.368 808.273 114.611 808.273 113.688C808.273 112.765 809.031 112.008 809.954 112.008C810.877 112.008 811.634 112.765 811.634 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_300"
                                        d="M811.634 139.989C811.634 140.912 810.877 141.669 809.954 141.669C809.031 141.669 808.273 140.912 808.273 139.989C808.273 139.066 809.031 138.309 809.954 138.309C810.877 138.309 811.634 139.066 811.634 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_301"
                                        d="M811.634 166.301C811.634 167.224 810.877 167.982 809.954 167.982C809.031 167.982 808.273 167.224 808.273 166.301C808.273 165.378 809.031 164.621 809.954 164.621C810.877 164.621 811.634 165.378 811.634 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_302"
                                        d="M811.634 192.618C811.634 193.541 810.877 194.298 809.954 194.298C809.031 194.298 808.273 193.541 808.273 192.618C808.273 191.695 809.031 190.938 809.954 190.938C810.877 190.938 811.634 191.695 811.634 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_71">
                                      <path
                                        id="Vector_303"
                                        d="M838.093 61.0553C838.093 61.9783 837.336 62.7357 836.413 62.7357C835.49 62.7357 834.732 61.9783 834.732 61.0553C834.732 60.1323 835.49 59.375 836.413 59.375C837.336 59.375 838.093 60.1323 838.093 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_304"
                                        d="M838.093 87.3757C838.093 88.2987 837.336 89.056 836.413 89.056C835.49 89.056 834.732 88.2987 834.732 87.3757C834.732 86.4527 835.49 85.6953 836.413 85.6953C837.336 85.6953 838.093 86.4527 838.093 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_305"
                                        d="M838.093 113.688C838.093 114.611 837.336 115.368 836.413 115.368C835.49 115.368 834.732 114.611 834.732 113.688C834.732 112.765 835.49 112.008 836.413 112.008C837.336 112.008 838.093 112.765 838.093 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_306"
                                        d="M838.093 139.989C838.093 140.912 837.336 141.669 836.413 141.669C835.49 141.669 834.732 140.912 834.732 139.989C834.732 139.066 835.49 138.309 836.413 138.309C837.336 138.309 838.093 139.066 838.093 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_307"
                                        d="M838.093 166.301C838.093 167.224 837.336 167.982 836.413 167.982C835.49 167.982 834.732 167.224 834.732 166.301C834.732 165.378 835.49 164.621 836.413 164.621C837.336 164.621 838.093 165.378 838.093 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_308"
                                        d="M838.093 192.618C838.093 193.541 837.336 194.298 836.413 194.298C835.49 194.298 834.732 193.541 834.732 192.618C834.732 191.695 835.49 190.938 836.413 190.938C837.336 190.938 838.093 191.695 838.093 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_72">
                                      <path
                                        id="Vector_309"
                                        d="M864.554 61.0553C864.554 61.9783 863.797 62.7357 862.874 62.7357C861.951 62.7357 861.193 61.9783 861.193 61.0553C861.193 60.1323 861.951 59.375 862.874 59.375C863.797 59.375 864.554 60.1323 864.554 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_310"
                                        d="M864.554 87.3757C864.554 88.2987 863.797 89.056 862.874 89.056C861.951 89.056 861.193 88.2987 861.193 87.3757C861.193 86.4527 861.951 85.6953 862.874 85.6953C863.797 85.6953 864.554 86.4527 864.554 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_311"
                                        d="M864.554 113.688C864.554 114.611 863.797 115.368 862.874 115.368C861.951 115.368 861.193 114.611 861.193 113.688C861.193 112.765 861.951 112.008 862.874 112.008C863.797 112.008 864.554 112.765 864.554 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_312"
                                        d="M864.554 139.989C864.554 140.912 863.797 141.669 862.874 141.669C861.951 141.669 861.193 140.912 861.193 139.989C861.193 139.066 861.951 138.309 862.874 138.309C863.797 138.309 864.554 139.066 864.554 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_313"
                                        d="M864.554 166.301C864.554 167.224 863.797 167.982 862.874 167.982C861.951 167.982 861.193 167.224 861.193 166.301C861.193 165.378 861.951 164.621 862.874 164.621C863.797 164.621 864.554 165.378 864.554 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_314"
                                        d="M864.554 192.618C864.554 193.541 863.797 194.298 862.874 194.298C861.951 194.298 861.193 193.541 861.193 192.618C861.193 191.695 861.951 190.938 862.874 190.938C863.797 190.938 864.554 191.695 864.554 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_73">
                                      <path
                                        id="Vector_315"
                                        d="M890.99 61.0553C890.99 61.9783 890.232 62.7357 889.309 62.7357C888.386 62.7357 887.629 61.9783 887.629 61.0553C887.629 60.1323 888.386 59.375 889.309 59.375C890.232 59.375 890.99 60.1323 890.99 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_316"
                                        d="M890.99 87.3757C890.99 88.2987 890.232 89.056 889.309 89.056C888.386 89.056 887.629 88.2987 887.629 87.3757C887.629 86.4527 888.386 85.6953 889.309 85.6953C890.232 85.6953 890.99 86.4527 890.99 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_317"
                                        d="M890.99 113.688C890.99 114.611 890.232 115.368 889.309 115.368C888.386 115.368 887.629 114.611 887.629 113.688C887.629 112.765 888.386 112.008 889.309 112.008C890.232 112.008 890.99 112.765 890.99 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_318"
                                        d="M890.99 139.989C890.99 140.912 890.232 141.669 889.309 141.669C888.386 141.669 887.629 140.912 887.629 139.989C887.629 139.066 888.386 138.309 889.309 138.309C890.232 138.309 890.99 139.066 890.99 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_319"
                                        d="M890.99 166.301C890.99 167.224 890.232 167.982 889.309 167.982C888.386 167.982 887.629 167.224 887.629 166.301C887.629 165.378 888.386 164.621 889.309 164.621C890.232 164.621 890.99 165.378 890.99 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_320"
                                        d="M890.99 192.618C890.99 193.541 890.232 194.298 889.309 194.298C888.386 194.298 887.629 193.541 887.629 192.618C887.629 191.695 888.386 190.938 889.309 190.938C890.232 190.938 890.99 191.695 890.99 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_74">
                                      <path
                                        id="Vector_321"
                                        d="M917.449 61.0553C917.449 61.9783 916.691 62.7357 915.768 62.7357C914.845 62.7357 914.088 61.9783 914.088 61.0553C914.088 60.1323 914.845 59.375 915.768 59.375C916.691 59.375 917.449 60.1323 917.449 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_322"
                                        d="M917.449 87.3757C917.449 88.2987 916.691 89.056 915.768 89.056C914.845 89.056 914.088 88.2987 914.088 87.3757C914.088 86.4527 914.845 85.6953 915.768 85.6953C916.691 85.6953 917.449 86.4527 917.449 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_323"
                                        d="M917.449 113.688C917.449 114.611 916.691 115.368 915.768 115.368C914.845 115.368 914.088 114.611 914.088 113.688C914.088 112.765 914.845 112.008 915.768 112.008C916.691 112.008 917.449 112.765 917.449 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_324"
                                        d="M917.449 139.989C917.449 140.912 916.691 141.669 915.768 141.669C914.845 141.669 914.088 140.912 914.088 139.989C914.088 139.066 914.845 138.309 915.768 138.309C916.691 138.309 917.449 139.066 917.449 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_325"
                                        d="M917.449 166.301C917.449 167.224 916.691 167.982 915.768 167.982C914.845 167.982 914.088 167.224 914.088 166.301C914.088 165.378 914.845 164.621 915.768 164.621C916.691 164.621 917.449 165.378 917.449 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_326"
                                        d="M917.449 192.618C917.449 193.541 916.691 194.298 915.768 194.298C914.845 194.298 914.088 193.541 914.088 192.618C914.088 191.695 914.845 190.938 915.768 190.938C916.691 190.938 917.449 191.695 917.449 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_75">
                                      <path
                                        id="Vector_327"
                                        d="M943.906 61.0553C943.906 61.9783 943.148 62.7357 942.225 62.7357C941.302 62.7357 940.545 61.9783 940.545 61.0553C940.545 60.1323 941.302 59.375 942.225 59.375C943.148 59.375 943.906 60.1323 943.906 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_328"
                                        d="M943.906 87.3757C943.906 88.2987 943.148 89.056 942.225 89.056C941.302 89.056 940.545 88.2987 940.545 87.3757C940.545 86.4527 941.302 85.6953 942.225 85.6953C943.148 85.6953 943.906 86.4527 943.906 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_329"
                                        d="M943.906 113.688C943.906 114.611 943.148 115.368 942.225 115.368C941.302 115.368 940.545 114.611 940.545 113.688C940.545 112.765 941.302 112.008 942.225 112.008C943.148 112.008 943.906 112.765 943.906 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_330"
                                        d="M943.906 139.989C943.906 140.912 943.148 141.669 942.225 141.669C941.302 141.669 940.545 140.912 940.545 139.989C940.545 139.066 941.302 138.309 942.225 138.309C943.148 138.309 943.906 139.066 943.906 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_331"
                                        d="M943.906 166.301C943.906 167.224 943.148 167.982 942.225 167.982C941.302 167.982 940.545 167.224 940.545 166.301C940.545 165.378 941.302 164.621 942.225 164.621C943.148 164.621 943.906 165.378 943.906 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_332"
                                        d="M943.906 192.618C943.906 193.541 943.148 194.298 942.225 194.298C941.302 194.298 940.545 193.541 940.545 192.618C940.545 191.695 941.302 190.938 942.225 190.938C943.148 190.938 943.906 191.695 943.906 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_76">
                                      <path
                                        id="Vector_333"
                                        d="M970.367 61.0553C970.367 61.9783 969.609 62.7357 968.686 62.7357C967.763 62.7357 967.006 61.9783 967.006 61.0553C967.006 60.1323 967.763 59.375 968.686 59.375C969.609 59.375 970.367 60.1323 970.367 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_334"
                                        d="M970.367 87.3757C970.367 88.2987 969.609 89.056 968.686 89.056C967.763 89.056 967.006 88.2987 967.006 87.3757C967.006 86.4527 967.763 85.6953 968.686 85.6953C969.609 85.6953 970.367 86.4527 970.367 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_335"
                                        d="M970.367 113.688C970.367 114.611 969.609 115.368 968.686 115.368C967.763 115.368 967.006 114.611 967.006 113.688C967.006 112.765 967.763 112.008 968.686 112.008C969.609 112.008 970.367 112.765 970.367 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_336"
                                        d="M970.367 139.989C970.367 140.912 969.609 141.669 968.686 141.669C967.763 141.669 967.006 140.912 967.006 139.989C967.006 139.066 967.763 138.309 968.686 138.309C969.609 138.309 970.367 139.066 970.367 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_337"
                                        d="M970.367 166.301C970.367 167.224 969.609 167.982 968.686 167.982C967.763 167.982 967.006 167.224 967.006 166.301C967.006 165.378 967.763 164.621 968.686 164.621C969.609 164.621 970.367 165.378 970.367 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_338"
                                        d="M970.367 192.618C970.367 193.541 969.609 194.298 968.686 194.298C967.763 194.298 967.006 193.541 967.006 192.618C967.006 191.695 967.763 190.938 968.686 190.938C969.609 190.938 970.367 191.695 970.367 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_77">
                                      <path
                                        id="Vector_339"
                                        d="M996.802 61.0553C996.802 61.9783 996.045 62.7357 995.122 62.7357C994.199 62.7357 993.441 61.9783 993.441 61.0553C993.441 60.1323 994.199 59.375 995.122 59.375C996.045 59.375 996.802 60.1323 996.802 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_340"
                                        d="M996.802 87.3757C996.802 88.2987 996.045 89.056 995.122 89.056C994.199 89.056 993.441 88.2987 993.441 87.3757C993.441 86.4527 994.199 85.6953 995.122 85.6953C996.045 85.6953 996.802 86.4527 996.802 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_341"
                                        d="M996.802 113.688C996.802 114.611 996.045 115.368 995.122 115.368C994.199 115.368 993.441 114.611 993.441 113.688C993.441 112.765 994.199 112.008 995.122 112.008C996.045 112.008 996.802 112.765 996.802 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_342"
                                        d="M996.802 139.989C996.802 140.912 996.045 141.669 995.122 141.669C994.199 141.669 993.441 140.912 993.441 139.989C993.441 139.066 994.199 138.309 995.122 138.309C996.045 138.309 996.802 139.066 996.802 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_343"
                                        d="M996.802 166.301C996.802 167.224 996.045 167.982 995.122 167.982C994.199 167.982 993.441 167.224 993.441 166.301C993.441 165.378 994.199 164.621 995.122 164.621C996.045 164.621 996.802 165.378 996.802 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_344"
                                        d="M996.802 192.618C996.802 193.541 996.045 194.298 995.122 194.298C994.199 194.298 993.441 193.541 993.441 192.618C993.441 191.695 994.199 190.938 995.122 190.938C996.045 190.938 996.802 191.695 996.802 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_78">
                                      <path
                                        id="Vector_345"
                                        d="M1023.26 61.0553C1023.26 61.9783 1022.5 62.7357 1021.58 62.7357C1020.66 62.7357 1019.9 61.9783 1019.9 61.0553C1019.9 60.1323 1020.66 59.375 1021.58 59.375C1022.5 59.375 1023.26 60.1323 1023.26 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_346"
                                        d="M1023.26 87.3757C1023.26 88.2987 1022.5 89.056 1021.58 89.056C1020.66 89.056 1019.9 88.2987 1019.9 87.3757C1019.9 86.4527 1020.66 85.6953 1021.58 85.6953C1022.5 85.6953 1023.26 86.4527 1023.26 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_347"
                                        d="M1023.26 113.688C1023.26 114.611 1022.5 115.368 1021.58 115.368C1020.66 115.368 1019.9 114.611 1019.9 113.688C1019.9 112.765 1020.66 112.008 1021.58 112.008C1022.5 112.008 1023.26 112.765 1023.26 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_348"
                                        d="M1023.26 139.989C1023.26 140.912 1022.5 141.669 1021.58 141.669C1020.66 141.669 1019.9 140.912 1019.9 139.989C1019.9 139.066 1020.66 138.309 1021.58 138.309C1022.5 138.309 1023.26 139.066 1023.26 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_349"
                                        d="M1023.26 166.301C1023.26 167.224 1022.5 167.982 1021.58 167.982C1020.66 167.982 1019.9 167.224 1019.9 166.301C1019.9 165.378 1020.66 164.621 1021.58 164.621C1022.5 164.621 1023.26 165.378 1023.26 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_350"
                                        d="M1023.26 192.618C1023.26 193.541 1022.5 194.298 1021.58 194.298C1020.66 194.298 1019.9 193.541 1019.9 192.618C1019.9 191.695 1020.66 190.938 1021.58 190.938C1022.5 190.938 1023.26 191.695 1023.26 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_79">
                                      <path
                                        id="Vector_351"
                                        d="M1049.72 61.0553C1049.72 61.9783 1048.96 62.7357 1048.04 62.7357C1047.12 62.7357 1046.36 61.9783 1046.36 61.0553C1046.36 60.1323 1047.12 59.375 1048.04 59.375C1048.96 59.375 1049.72 60.1323 1049.72 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_352"
                                        d="M1049.72 87.3757C1049.72 88.2987 1048.96 89.056 1048.04 89.056C1047.12 89.056 1046.36 88.2987 1046.36 87.3757C1046.36 86.4527 1047.12 85.6953 1048.04 85.6953C1048.96 85.6953 1049.72 86.4527 1049.72 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_353"
                                        d="M1049.72 113.688C1049.72 114.611 1048.96 115.368 1048.04 115.368C1047.12 115.368 1046.36 114.611 1046.36 113.688C1046.36 112.765 1047.12 112.008 1048.04 112.008C1048.96 112.008 1049.72 112.765 1049.72 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_354"
                                        d="M1049.72 139.989C1049.72 140.912 1048.96 141.669 1048.04 141.669C1047.12 141.669 1046.36 140.912 1046.36 139.989C1046.36 139.066 1047.12 138.309 1048.04 138.309C1048.96 138.309 1049.72 139.066 1049.72 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_355"
                                        d="M1049.72 166.301C1049.72 167.224 1048.96 167.982 1048.04 167.982C1047.12 167.982 1046.36 167.224 1046.36 166.301C1046.36 165.378 1047.12 164.621 1048.04 164.621C1048.96 164.621 1049.72 165.378 1049.72 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_356"
                                        d="M1049.72 192.618C1049.72 193.541 1048.96 194.298 1048.04 194.298C1047.12 194.298 1046.36 193.541 1046.36 192.618C1046.36 191.695 1047.12 190.938 1048.04 190.938C1048.96 190.938 1049.72 191.695 1049.72 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_80">
                                      <path
                                        id="Vector_357"
                                        d="M1076.16 61.0553C1076.16 61.9783 1075.4 62.7357 1074.48 62.7357C1073.55 62.7357 1072.8 61.9783 1072.8 61.0553C1072.8 60.1323 1073.55 59.375 1074.48 59.375C1075.4 59.375 1076.16 60.1323 1076.16 61.0553Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_358"
                                        d="M1076.16 87.3757C1076.16 88.2987 1075.4 89.056 1074.48 89.056C1073.55 89.056 1072.8 88.2987 1072.8 87.3757C1072.8 86.4527 1073.55 85.6953 1074.48 85.6953C1075.4 85.6953 1076.16 86.4527 1076.16 87.3757Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_359"
                                        d="M1076.16 113.688C1076.16 114.611 1075.4 115.368 1074.48 115.368C1073.55 115.368 1072.8 114.611 1072.8 113.688C1072.8 112.765 1073.55 112.008 1074.48 112.008C1075.4 112.008 1076.16 112.765 1076.16 113.688Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_360"
                                        d="M1076.16 139.989C1076.16 140.912 1075.4 141.669 1074.48 141.669C1073.55 141.669 1072.8 140.912 1072.8 139.989C1072.8 139.066 1073.55 138.309 1074.48 138.309C1075.4 138.309 1076.16 139.066 1076.16 139.989Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_361"
                                        d="M1076.16 166.301C1076.16 167.224 1075.4 167.982 1074.48 167.982C1073.55 167.982 1072.8 167.224 1072.8 166.301C1072.8 165.378 1073.55 164.621 1074.48 164.621C1075.4 164.621 1076.16 165.378 1076.16 166.301Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_362"
                                        d="M1076.16 192.618C1076.16 193.541 1075.4 194.298 1074.48 194.298C1073.55 194.298 1072.8 193.541 1072.8 192.618C1072.8 191.695 1073.55 190.938 1074.48 190.938C1075.4 190.938 1076.16 191.695 1076.16 192.618Z"
                                        fill="white"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g id="Clip path group_7">
                            <mask
                              id="mask7_4995_86464"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x={497}
                              y={552}
                              width={223}
                              height={222}
                            >
                              <g id="clippath-6">
                                <path
                                  id="Vector_363"
                                  d="M719.31 552.52L497.908 773.897H719.31V552.52Z"
                                  fill="white"
                                />
                              </g>
                            </mask>
                            <g mask="url(#mask7_4995_86464)">
                              <g id="Group_81">
                                <g id="Group_82">
                                  <g id="Group_83">
                                    <g id="Group_84">
                                      <path
                                        id="Vector_364"
                                        d="M708.969 719.845C708.969 719.324 709.395 718.898 709.915 718.898C710.436 718.898 710.862 719.324 710.862 719.845C710.862 720.366 710.436 720.792 709.915 720.792C709.395 720.792 708.969 720.366 708.969 719.845Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_365"
                                        d="M708.969 704.915C708.969 704.395 709.395 703.969 709.915 703.969C710.436 703.969 710.862 704.395 710.862 704.915C710.862 705.436 710.436 705.862 709.915 705.862C709.395 705.862 708.969 705.436 708.969 704.915Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_366"
                                        d="M708.969 689.974C708.969 689.453 709.395 689.027 709.915 689.027C710.436 689.027 710.862 689.453 710.862 689.974C710.862 690.495 710.436 690.921 709.915 690.921C709.395 690.921 708.969 690.495 708.969 689.974Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_367"
                                        d="M708.969 675.044C708.969 674.524 709.395 674.098 709.915 674.098C710.436 674.098 710.862 674.524 710.862 675.044C710.862 675.565 710.436 675.991 709.915 675.991C709.395 675.991 708.969 675.565 708.969 675.044Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_368"
                                        d="M708.969 660.115C708.969 659.594 709.395 659.168 709.915 659.168C710.436 659.168 710.862 659.594 710.862 660.115C710.862 660.635 710.436 661.061 709.915 661.061C709.395 661.061 708.969 660.635 708.969 660.115Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_369"
                                        d="M708.969 645.173C708.969 644.652 709.395 644.227 709.915 644.227C710.436 644.227 710.862 644.652 710.862 645.173C710.862 645.694 710.436 646.12 709.915 646.12C709.395 646.12 708.969 645.694 708.969 645.173Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_370"
                                        d="M708.969 630.243C708.969 629.723 709.395 629.297 709.915 629.297C710.436 629.297 710.862 629.723 710.862 630.243C710.862 630.764 710.436 631.19 709.915 631.19C709.395 631.19 708.969 630.764 708.969 630.243Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_85">
                                      <path
                                        id="Vector_371"
                                        d="M694.91 720.792C695.432 720.792 695.856 720.368 695.856 719.845C695.856 719.322 695.432 718.898 694.91 718.898C694.387 718.898 693.963 719.322 693.963 719.845C693.963 720.368 694.387 720.792 694.91 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_372"
                                        d="M694.91 705.862C695.432 705.862 695.856 705.438 695.856 704.915C695.856 704.393 695.432 703.969 694.91 703.969C694.387 703.969 693.963 704.393 693.963 704.915C693.963 705.438 694.387 705.862 694.91 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_373"
                                        d="M694.91 690.921C695.432 690.921 695.856 690.497 695.856 689.974C695.856 689.451 695.432 689.027 694.91 689.027C694.387 689.027 693.963 689.451 693.963 689.974C693.963 690.497 694.387 690.921 694.91 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_374"
                                        d="M694.91 675.991C695.432 675.991 695.856 675.567 695.856 675.044C695.856 674.521 695.432 674.098 694.91 674.098C694.387 674.098 693.963 674.521 693.963 675.044C693.963 675.567 694.387 675.991 694.91 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_375"
                                        d="M694.91 661.061C695.432 661.061 695.856 660.637 695.856 660.115C695.856 659.592 695.432 659.168 694.91 659.168C694.387 659.168 693.963 659.592 693.963 660.115C693.963 660.637 694.387 661.061 694.91 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_376"
                                        d="M694.91 646.12C695.432 646.12 695.856 645.696 695.856 645.173C695.856 644.65 695.432 644.227 694.91 644.227C694.387 644.227 693.963 644.65 693.963 645.173C693.963 645.696 694.387 646.12 694.91 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_377"
                                        d="M694.91 631.19C695.432 631.19 695.856 630.766 695.856 630.243C695.856 629.721 695.432 629.297 694.91 629.297C694.387 629.297 693.963 629.721 693.963 630.243C693.963 630.766 694.387 631.19 694.91 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_86">
                                      <path
                                        id="Vector_378"
                                        d="M678.936 719.845C678.936 719.324 679.362 718.898 679.882 718.898C680.403 718.898 680.829 719.324 680.829 719.845C680.829 720.366 680.403 720.792 679.882 720.792C679.362 720.792 678.936 720.366 678.936 719.845Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_379"
                                        d="M678.936 704.915C678.936 704.395 679.362 703.969 679.882 703.969C680.403 703.969 680.829 704.395 680.829 704.915C680.829 705.436 680.403 705.862 679.882 705.862C679.362 705.862 678.936 705.436 678.936 704.915Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_380"
                                        d="M678.936 689.974C678.936 689.453 679.362 689.027 679.882 689.027C680.403 689.027 680.829 689.453 680.829 689.974C680.829 690.495 680.403 690.921 679.882 690.921C679.362 690.921 678.936 690.495 678.936 689.974Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_381"
                                        d="M678.936 675.044C678.936 674.524 679.362 674.098 679.882 674.098C680.403 674.098 680.829 674.524 680.829 675.044C680.829 675.565 680.403 675.991 679.882 675.991C679.362 675.991 678.936 675.565 678.936 675.044Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_382"
                                        d="M678.936 660.115C678.936 659.594 679.362 659.168 679.882 659.168C680.403 659.168 680.829 659.594 680.829 660.115C680.829 660.635 680.403 661.061 679.882 661.061C679.362 661.061 678.936 660.635 678.936 660.115Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_383"
                                        d="M678.936 645.173C678.936 644.652 679.362 644.227 679.882 644.227C680.403 644.227 680.829 644.652 680.829 645.173C680.829 645.694 680.403 646.12 679.882 646.12C679.362 646.12 678.936 645.694 678.936 645.173Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_384"
                                        d="M678.936 630.243C678.936 629.723 679.362 629.297 679.882 629.297C680.403 629.297 680.829 629.723 680.829 630.243C680.829 630.764 680.403 631.19 679.882 631.19C679.362 631.19 678.936 630.764 678.936 630.243Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_87">
                                      <path
                                        id="Vector_385"
                                        d="M664.876 720.792C665.399 720.792 665.823 720.368 665.823 719.845C665.823 719.322 665.399 718.898 664.876 718.898C664.354 718.898 663.93 719.322 663.93 719.845C663.93 720.368 664.354 720.792 664.876 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_386"
                                        d="M664.876 705.862C665.399 705.862 665.823 705.438 665.823 704.915C665.823 704.393 665.399 703.969 664.876 703.969C664.354 703.969 663.93 704.393 663.93 704.915C663.93 705.438 664.354 705.862 664.876 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_387"
                                        d="M664.876 690.921C665.399 690.921 665.823 690.497 665.823 689.974C665.823 689.451 665.399 689.027 664.876 689.027C664.354 689.027 663.93 689.451 663.93 689.974C663.93 690.497 664.354 690.921 664.876 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_388"
                                        d="M664.876 675.991C665.399 675.991 665.823 675.567 665.823 675.044C665.823 674.521 665.399 674.098 664.876 674.098C664.354 674.098 663.93 674.521 663.93 675.044C663.93 675.567 664.354 675.991 664.876 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_389"
                                        d="M664.876 661.061C665.399 661.061 665.823 660.637 665.823 660.115C665.823 659.592 665.399 659.168 664.876 659.168C664.354 659.168 663.93 659.592 663.93 660.115C663.93 660.637 664.354 661.061 664.876 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_390"
                                        d="M664.876 646.12C665.399 646.12 665.823 645.696 665.823 645.173C665.823 644.65 665.399 644.227 664.876 644.227C664.354 644.227 663.93 644.65 663.93 645.173C663.93 645.696 664.354 646.12 664.876 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_391"
                                        d="M664.876 631.19C665.399 631.19 665.823 630.766 665.823 630.243C665.823 629.721 665.399 629.297 664.876 629.297C664.354 629.297 663.93 629.721 663.93 630.243C663.93 630.766 664.354 631.19 664.876 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_88">
                                      <path
                                        id="Vector_392"
                                        d="M649.872 720.792C650.395 720.792 650.819 720.368 650.819 719.845C650.819 719.322 650.395 718.898 649.872 718.898C649.35 718.898 648.926 719.322 648.926 719.845C648.926 720.368 649.35 720.792 649.872 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_393"
                                        d="M649.872 705.862C650.395 705.862 650.819 705.438 650.819 704.915C650.819 704.393 650.395 703.969 649.872 703.969C649.35 703.969 648.926 704.393 648.926 704.915C648.926 705.438 649.35 705.862 649.872 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_394"
                                        d="M649.872 690.921C650.395 690.921 650.819 690.497 650.819 689.974C650.819 689.451 650.395 689.027 649.872 689.027C649.35 689.027 648.926 689.451 648.926 689.974C648.926 690.497 649.35 690.921 649.872 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_395"
                                        d="M649.872 675.991C650.395 675.991 650.819 675.567 650.819 675.044C650.819 674.521 650.395 674.098 649.872 674.098C649.35 674.098 648.926 674.521 648.926 675.044C648.926 675.567 649.35 675.991 649.872 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_396"
                                        d="M649.872 661.061C650.395 661.061 650.819 660.637 650.819 660.115C650.819 659.592 650.395 659.168 649.872 659.168C649.35 659.168 648.926 659.592 648.926 660.115C648.926 660.637 649.35 661.061 649.872 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_397"
                                        d="M649.872 646.12C650.395 646.12 650.819 645.696 650.819 645.173C650.819 644.65 650.395 644.227 649.872 644.227C649.35 644.227 648.926 644.65 648.926 645.173C648.926 645.696 649.35 646.12 649.872 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_398"
                                        d="M649.872 631.19C650.395 631.19 650.819 630.766 650.819 630.243C650.819 629.721 650.395 629.297 649.872 629.297C649.35 629.297 648.926 629.721 648.926 630.243C648.926 630.766 649.35 631.19 649.872 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_89">
                                      <path
                                        id="Vector_399"
                                        d="M633.898 719.845C633.898 719.324 634.324 718.898 634.845 718.898C635.366 718.898 635.792 719.324 635.792 719.845C635.792 720.366 635.366 720.792 634.845 720.792C634.324 720.792 633.898 720.366 633.898 719.845Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_400"
                                        d="M633.898 704.915C633.898 704.395 634.324 703.969 634.845 703.969C635.366 703.969 635.792 704.395 635.792 704.915C635.792 705.436 635.366 705.862 634.845 705.862C634.324 705.862 633.898 705.436 633.898 704.915Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_401"
                                        d="M633.898 689.974C633.898 689.453 634.324 689.027 634.845 689.027C635.366 689.027 635.792 689.453 635.792 689.974C635.792 690.495 635.366 690.921 634.845 690.921C634.324 690.921 633.898 690.495 633.898 689.974Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_402"
                                        d="M633.898 675.044C633.898 674.524 634.324 674.098 634.845 674.098C635.366 674.098 635.792 674.524 635.792 675.044C635.792 675.565 635.366 675.991 634.845 675.991C634.324 675.991 633.898 675.565 633.898 675.044Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_403"
                                        d="M633.898 660.115C633.898 659.594 634.324 659.168 634.845 659.168C635.366 659.168 635.792 659.594 635.792 660.115C635.792 660.635 635.366 661.061 634.845 661.061C634.324 661.061 633.898 660.635 633.898 660.115Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_404"
                                        d="M633.898 645.173C633.898 644.652 634.324 644.227 634.845 644.227C635.366 644.227 635.792 644.652 635.792 645.173C635.792 645.694 635.366 646.12 634.845 646.12C634.324 646.12 633.898 645.694 633.898 645.173Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_405"
                                        d="M633.898 630.243C633.898 629.723 634.324 629.297 634.845 629.297C635.366 629.297 635.792 629.723 635.792 630.243C635.792 630.764 635.366 631.19 634.845 631.19C634.324 631.19 633.898 630.764 633.898 630.243Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_90">
                                      <path
                                        id="Vector_406"
                                        d="M619.837 720.792C620.36 720.792 620.784 720.368 620.784 719.845C620.784 719.322 620.36 718.898 619.837 718.898C619.314 718.898 618.891 719.322 618.891 719.845C618.891 720.368 619.314 720.792 619.837 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_407"
                                        d="M619.837 705.862C620.36 705.862 620.784 705.438 620.784 704.915C620.784 704.393 620.36 703.969 619.837 703.969C619.314 703.969 618.891 704.393 618.891 704.915C618.891 705.438 619.314 705.862 619.837 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_408"
                                        d="M619.837 690.921C620.36 690.921 620.784 690.497 620.784 689.974C620.784 689.451 620.36 689.027 619.837 689.027C619.314 689.027 618.891 689.451 618.891 689.974C618.891 690.497 619.314 690.921 619.837 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_409"
                                        d="M619.837 675.991C620.36 675.991 620.784 675.567 620.784 675.044C620.784 674.521 620.36 674.098 619.837 674.098C619.314 674.098 618.891 674.521 618.891 675.044C618.891 675.567 619.314 675.991 619.837 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_410"
                                        d="M619.837 661.061C620.36 661.061 620.784 660.637 620.784 660.115C620.784 659.592 620.36 659.168 619.837 659.168C619.314 659.168 618.891 659.592 618.891 660.115C618.891 660.637 619.314 661.061 619.837 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_411"
                                        d="M619.837 646.12C620.36 646.12 620.784 645.696 620.784 645.173C620.784 644.65 620.36 644.227 619.837 644.227C619.314 644.227 618.891 644.65 618.891 645.173C618.891 645.696 619.314 646.12 619.837 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_412"
                                        d="M619.837 631.19C620.36 631.19 620.784 630.766 620.784 630.243C620.784 629.721 620.36 629.297 619.837 629.297C619.314 629.297 618.891 629.721 618.891 630.243C618.891 630.766 619.314 631.19 619.837 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_91">
                                      <path
                                        id="Vector_413"
                                        d="M603.887 719.845C603.887 719.324 604.313 718.898 604.833 718.898C605.354 718.898 605.78 719.324 605.78 719.845C605.78 720.366 605.354 720.792 604.833 720.792C604.313 720.792 603.887 720.366 603.887 719.845Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_414"
                                        d="M603.887 704.915C603.887 704.395 604.313 703.969 604.833 703.969C605.354 703.969 605.78 704.395 605.78 704.915C605.78 705.436 605.354 705.862 604.833 705.862C604.313 705.862 603.887 705.436 603.887 704.915Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_415"
                                        d="M603.887 689.974C603.887 689.453 604.313 689.027 604.833 689.027C605.354 689.027 605.78 689.453 605.78 689.974C605.78 690.495 605.354 690.921 604.833 690.921C604.313 690.921 603.887 690.495 603.887 689.974Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_416"
                                        d="M603.887 675.044C603.887 674.524 604.313 674.098 604.833 674.098C605.354 674.098 605.78 674.524 605.78 675.044C605.78 675.565 605.354 675.991 604.833 675.991C604.313 675.991 603.887 675.565 603.887 675.044Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_417"
                                        d="M603.887 660.115C603.887 659.594 604.313 659.168 604.833 659.168C605.354 659.168 605.78 659.594 605.78 660.115C605.78 660.635 605.354 661.061 604.833 661.061C604.313 661.061 603.887 660.635 603.887 660.115Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_418"
                                        d="M603.887 645.173C603.887 644.652 604.313 644.227 604.833 644.227C605.354 644.227 605.78 644.652 605.78 645.173C605.78 645.694 605.354 646.12 604.833 646.12C604.313 646.12 603.887 645.694 603.887 645.173Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_419"
                                        d="M603.887 630.243C603.887 629.723 604.313 629.297 604.833 629.297C605.354 629.297 605.78 629.723 605.78 630.243C605.78 630.764 605.354 631.19 604.833 631.19C604.313 631.19 603.887 630.764 603.887 630.243Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_92">
                                      <path
                                        id="Vector_420"
                                        d="M589.83 720.792C590.352 720.792 590.776 720.368 590.776 719.845C590.776 719.322 590.352 718.898 589.83 718.898C589.307 718.898 588.883 719.322 588.883 719.845C588.883 720.368 589.307 720.792 589.83 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_421"
                                        d="M589.83 705.862C590.352 705.862 590.776 705.438 590.776 704.915C590.776 704.393 590.352 703.969 589.83 703.969C589.307 703.969 588.883 704.393 588.883 704.915C588.883 705.438 589.307 705.862 589.83 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_422"
                                        d="M589.83 690.921C590.352 690.921 590.776 690.497 590.776 689.974C590.776 689.451 590.352 689.027 589.83 689.027C589.307 689.027 588.883 689.451 588.883 689.974C588.883 690.497 589.307 690.921 589.83 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_423"
                                        d="M589.83 675.991C590.352 675.991 590.776 675.567 590.776 675.044C590.776 674.521 590.352 674.098 589.83 674.098C589.307 674.098 588.883 674.521 588.883 675.044C588.883 675.567 589.307 675.991 589.83 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_424"
                                        d="M589.83 661.061C590.352 661.061 590.776 660.637 590.776 660.115C590.776 659.592 590.352 659.168 589.83 659.168C589.307 659.168 588.883 659.592 588.883 660.115C588.883 660.637 589.307 661.061 589.83 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_425"
                                        d="M589.83 646.12C590.352 646.12 590.776 645.696 590.776 645.173C590.776 644.65 590.352 644.227 589.83 644.227C589.307 644.227 588.883 644.65 588.883 645.173C588.883 645.696 589.307 646.12 589.83 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_426"
                                        d="M589.83 631.19C590.352 631.19 590.776 630.766 590.776 630.243C590.776 629.721 590.352 629.297 589.83 629.297C589.307 629.297 588.883 629.721 588.883 630.243C588.883 630.766 589.307 631.19 589.83 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_93">
                                      <path
                                        id="Vector_427"
                                        d="M574.802 720.792C575.325 720.792 575.749 720.368 575.749 719.845C575.749 719.322 575.325 718.898 574.802 718.898C574.279 718.898 573.855 719.322 573.855 719.845C573.855 720.368 574.279 720.792 574.802 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_428"
                                        d="M574.802 705.862C575.325 705.862 575.749 705.438 575.749 704.915C575.749 704.393 575.325 703.969 574.802 703.969C574.279 703.969 573.855 704.393 573.855 704.915C573.855 705.438 574.279 705.862 574.802 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_429"
                                        d="M574.802 690.921C575.325 690.921 575.749 690.497 575.749 689.974C575.749 689.451 575.325 689.027 574.802 689.027C574.279 689.027 573.855 689.451 573.855 689.974C573.855 690.497 574.279 690.921 574.802 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_430"
                                        d="M574.802 675.991C575.325 675.991 575.749 675.567 575.749 675.044C575.749 674.521 575.325 674.098 574.802 674.098C574.279 674.098 573.855 674.521 573.855 675.044C573.855 675.567 574.279 675.991 574.802 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_431"
                                        d="M574.802 661.061C575.325 661.061 575.749 660.637 575.749 660.115C575.749 659.592 575.325 659.168 574.802 659.168C574.279 659.168 573.855 659.592 573.855 660.115C573.855 660.637 574.279 661.061 574.802 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_432"
                                        d="M574.802 646.12C575.325 646.12 575.749 645.696 575.749 645.173C575.749 644.65 575.325 644.227 574.802 644.227C574.279 644.227 573.855 644.65 573.855 645.173C573.855 645.696 574.279 646.12 574.802 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_433"
                                        d="M574.802 631.19C575.325 631.19 575.749 630.766 575.749 630.243C575.749 629.721 575.325 629.297 574.802 629.297C574.279 629.297 573.855 629.721 573.855 630.243C573.855 630.766 574.279 631.19 574.802 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_94">
                                      <path
                                        id="Vector_434"
                                        d="M559.796 720.792C560.319 720.792 560.743 720.368 560.743 719.845C560.743 719.322 560.319 718.898 559.796 718.898C559.274 718.898 558.85 719.322 558.85 719.845C558.85 720.368 559.274 720.792 559.796 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_435"
                                        d="M559.796 705.862C560.319 705.862 560.743 705.438 560.743 704.915C560.743 704.393 560.319 703.969 559.796 703.969C559.274 703.969 558.85 704.393 558.85 704.915C558.85 705.438 559.274 705.862 559.796 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_436"
                                        d="M559.796 690.921C560.319 690.921 560.743 690.497 560.743 689.974C560.743 689.451 560.319 689.027 559.796 689.027C559.274 689.027 558.85 689.451 558.85 689.974C558.85 690.497 559.274 690.921 559.796 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_437"
                                        d="M559.796 675.991C560.319 675.991 560.743 675.567 560.743 675.044C560.743 674.521 560.319 674.098 559.796 674.098C559.274 674.098 558.85 674.521 558.85 675.044C558.85 675.567 559.274 675.991 559.796 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_438"
                                        d="M559.796 661.061C560.319 661.061 560.743 660.637 560.743 660.115C560.743 659.592 560.319 659.168 559.796 659.168C559.274 659.168 558.85 659.592 558.85 660.115C558.85 660.637 559.274 661.061 559.796 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_439"
                                        d="M559.796 646.12C560.319 646.12 560.743 645.696 560.743 645.173C560.743 644.65 560.319 644.227 559.796 644.227C559.274 644.227 558.85 644.65 558.85 645.173C558.85 645.696 559.274 646.12 559.796 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_440"
                                        d="M559.796 631.19C560.319 631.19 560.743 630.766 560.743 630.243C560.743 629.721 560.319 629.297 559.796 629.297C559.274 629.297 558.85 629.721 558.85 630.243C558.85 630.766 559.274 631.19 559.796 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_95">
                                      <path
                                        id="Vector_441"
                                        d="M544.79 720.792C545.313 720.792 545.737 720.368 545.737 719.845C545.737 719.322 545.313 718.898 544.79 718.898C544.268 718.898 543.844 719.322 543.844 719.845C543.844 720.368 544.268 720.792 544.79 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_442"
                                        d="M544.79 705.862C545.313 705.862 545.737 705.438 545.737 704.915C545.737 704.393 545.313 703.969 544.79 703.969C544.268 703.969 543.844 704.393 543.844 704.915C543.844 705.438 544.268 705.862 544.79 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_443"
                                        d="M544.79 690.921C545.313 690.921 545.737 690.497 545.737 689.974C545.737 689.451 545.313 689.027 544.79 689.027C544.268 689.027 543.844 689.451 543.844 689.974C543.844 690.497 544.268 690.921 544.79 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_444"
                                        d="M544.79 675.991C545.313 675.991 545.737 675.567 545.737 675.044C545.737 674.521 545.313 674.098 544.79 674.098C544.268 674.098 543.844 674.521 543.844 675.044C543.844 675.567 544.268 675.991 544.79 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_445"
                                        d="M544.79 661.061C545.313 661.061 545.737 660.637 545.737 660.115C545.737 659.592 545.313 659.168 544.79 659.168C544.268 659.168 543.844 659.592 543.844 660.115C543.844 660.637 544.268 661.061 544.79 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_446"
                                        d="M544.79 646.12C545.313 646.12 545.737 645.696 545.737 645.173C545.737 644.65 545.313 644.227 544.79 644.227C544.268 644.227 543.844 644.65 543.844 645.173C543.844 645.696 544.268 646.12 544.79 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_447"
                                        d="M544.79 631.19C545.313 631.19 545.737 630.766 545.737 630.243C545.737 629.721 545.313 629.297 544.79 629.297C544.268 629.297 543.844 629.721 543.844 630.243C543.844 630.766 544.268 631.19 544.79 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_96">
                                      <path
                                        id="Vector_448"
                                        d="M529.763 720.792C530.286 720.792 530.71 720.368 530.71 719.845C530.71 719.322 530.286 718.898 529.763 718.898C529.24 718.898 528.816 719.322 528.816 719.845C528.816 720.368 529.24 720.792 529.763 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_449"
                                        d="M529.763 705.862C530.286 705.862 530.71 705.438 530.71 704.915C530.71 704.393 530.286 703.969 529.763 703.969C529.24 703.969 528.816 704.393 528.816 704.915C528.816 705.438 529.24 705.862 529.763 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_450"
                                        d="M529.763 690.921C530.286 690.921 530.71 690.497 530.71 689.974C530.71 689.451 530.286 689.027 529.763 689.027C529.24 689.027 528.816 689.451 528.816 689.974C528.816 690.497 529.24 690.921 529.763 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_451"
                                        d="M529.763 675.991C530.286 675.991 530.71 675.567 530.71 675.044C530.71 674.521 530.286 674.098 529.763 674.098C529.24 674.098 528.816 674.521 528.816 675.044C528.816 675.567 529.24 675.991 529.763 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_452"
                                        d="M529.763 661.061C530.286 661.061 530.71 660.637 530.71 660.115C530.71 659.592 530.286 659.168 529.763 659.168C529.24 659.168 528.816 659.592 528.816 660.115C528.816 660.637 529.24 661.061 529.763 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_453"
                                        d="M529.763 646.12C530.286 646.12 530.71 645.696 530.71 645.173C530.71 644.65 530.286 644.227 529.763 644.227C529.24 644.227 528.816 644.65 528.816 645.173C528.816 645.696 529.24 646.12 529.763 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_454"
                                        d="M529.763 631.19C530.286 631.19 530.71 630.766 530.71 630.243C530.71 629.721 530.286 629.297 529.763 629.297C529.24 629.297 528.816 629.721 528.816 630.243C528.816 630.766 529.24 631.19 529.763 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_97">
                                      <path
                                        id="Vector_455"
                                        d="M514.761 720.792C515.284 720.792 515.708 720.368 515.708 719.845C515.708 719.322 515.284 718.898 514.761 718.898C514.238 718.898 513.814 719.322 513.814 719.845C513.814 720.368 514.238 720.792 514.761 720.792Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_456"
                                        d="M514.761 705.862C515.284 705.862 515.708 705.438 515.708 704.915C515.708 704.393 515.284 703.969 514.761 703.969C514.238 703.969 513.814 704.393 513.814 704.915C513.814 705.438 514.238 705.862 514.761 705.862Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_457"
                                        d="M514.761 690.921C515.284 690.921 515.708 690.497 515.708 689.974C515.708 689.451 515.284 689.027 514.761 689.027C514.238 689.027 513.814 689.451 513.814 689.974C513.814 690.497 514.238 690.921 514.761 690.921Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_458"
                                        d="M514.761 675.991C515.284 675.991 515.708 675.567 515.708 675.044C515.708 674.521 515.284 674.098 514.761 674.098C514.238 674.098 513.814 674.521 513.814 675.044C513.814 675.567 514.238 675.991 514.761 675.991Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_459"
                                        d="M514.761 661.061C515.284 661.061 515.708 660.637 515.708 660.115C515.708 659.592 515.284 659.168 514.761 659.168C514.238 659.168 513.814 659.592 513.814 660.115C513.814 660.637 514.238 661.061 514.761 661.061Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_460"
                                        d="M514.761 646.12C515.284 646.12 515.708 645.696 515.708 645.173C515.708 644.65 515.284 644.227 514.761 644.227C514.238 644.227 513.814 644.65 513.814 645.173C513.814 645.696 514.238 646.12 514.761 646.12Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_461"
                                        d="M514.761 631.19C515.284 631.19 515.708 630.766 515.708 630.243C515.708 629.721 515.284 629.297 514.761 629.297C514.238 629.297 513.814 629.721 513.814 630.243C513.814 630.766 514.238 631.19 514.761 631.19Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_98">
                                      <path
                                        id="Vector_462"
                                        d="M498.783 719.845C498.783 719.324 499.209 718.898 499.73 718.898C500.251 718.898 500.677 719.324 500.677 719.845C500.677 720.366 500.251 720.792 499.73 720.792C499.209 720.792 498.783 720.366 498.783 719.845Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_463"
                                        d="M498.783 704.915C498.783 704.395 499.209 703.969 499.73 703.969C500.251 703.969 500.677 704.395 500.677 704.915C500.677 705.436 500.251 705.862 499.73 705.862C499.209 705.862 498.783 705.436 498.783 704.915Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_464"
                                        d="M498.783 689.974C498.783 689.453 499.209 689.027 499.73 689.027C500.251 689.027 500.677 689.453 500.677 689.974C500.677 690.495 500.251 690.921 499.73 690.921C499.209 690.921 498.783 690.495 498.783 689.974Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_465"
                                        d="M498.783 675.044C498.783 674.524 499.209 674.098 499.73 674.098C500.251 674.098 500.677 674.524 500.677 675.044C500.677 675.565 500.251 675.991 499.73 675.991C499.209 675.991 498.783 675.565 498.783 675.044Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_466"
                                        d="M498.783 660.115C498.783 659.594 499.209 659.168 499.73 659.168C500.251 659.168 500.677 659.594 500.677 660.115C500.677 660.635 500.251 661.061 499.73 661.061C499.209 661.061 498.783 660.635 498.783 660.115Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_467"
                                        d="M498.783 645.173C498.783 644.652 499.209 644.227 499.73 644.227C500.251 644.227 500.677 644.652 500.677 645.173C500.677 645.694 500.251 646.12 499.73 646.12C499.209 646.12 498.783 645.694 498.783 645.173Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_468"
                                        d="M498.783 630.243C498.783 629.723 499.209 629.297 499.73 629.297C500.251 629.297 500.677 629.723 500.677 630.243C500.677 630.764 500.251 631.19 499.73 631.19C499.209 631.19 498.783 630.764 498.783 630.243Z"
                                        fill="white"
                                      />
                                    </g>
                                  </g>
                                  <g id="Group_99">
                                    <g id="Group_100">
                                      <path
                                        id="Vector_469"
                                        d="M708.969 630.243C708.969 629.723 709.395 629.297 709.915 629.297C710.436 629.297 710.862 629.723 710.862 630.243C710.862 630.764 710.436 631.19 709.915 631.19C709.395 631.19 708.969 630.764 708.969 630.243Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_470"
                                        d="M708.969 615.333C708.969 614.813 709.395 614.387 709.915 614.387C710.436 614.387 710.862 614.813 710.862 615.333C710.862 615.854 710.436 616.28 709.915 616.28C709.395 616.28 708.969 615.854 708.969 615.333Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_471"
                                        d="M708.969 600.404C708.969 599.883 709.395 599.457 709.915 599.457C710.436 599.457 710.862 599.883 710.862 600.404C710.862 600.924 710.436 601.35 709.915 601.35C709.395 601.35 708.969 600.924 708.969 600.404Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_472"
                                        d="M708.969 585.474C708.969 584.953 709.395 584.527 709.915 584.527C710.436 584.527 710.862 584.953 710.862 585.474C710.862 585.995 710.436 586.421 709.915 586.421C709.395 586.421 708.969 585.995 708.969 585.474Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_473"
                                        d="M708.969 570.533C708.969 570.012 709.395 569.586 709.915 569.586C710.436 569.586 710.862 570.012 710.862 570.533C710.862 571.053 710.436 571.479 709.915 571.479C709.395 571.479 708.969 571.053 708.969 570.533Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_474"
                                        d="M708.969 555.603C708.969 555.082 709.395 554.656 709.915 554.656C710.436 554.656 710.862 555.082 710.862 555.603C710.862 556.124 710.436 556.55 709.915 556.55C709.395 556.55 708.969 556.124 708.969 555.603Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_101">
                                      <path
                                        id="Vector_475"
                                        d="M694.91 631.19C695.432 631.19 695.856 630.766 695.856 630.243C695.856 629.721 695.432 629.297 694.91 629.297C694.387 629.297 693.963 629.721 693.963 630.243C693.963 630.766 694.387 631.19 694.91 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_476"
                                        d="M694.91 616.28C695.432 616.28 695.856 615.856 695.856 615.333C695.856 614.811 695.432 614.387 694.91 614.387C694.387 614.387 693.963 614.811 693.963 615.333C693.963 615.856 694.387 616.28 694.91 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_477"
                                        d="M694.91 601.35C695.432 601.35 695.856 600.927 695.856 600.404C695.856 599.881 695.432 599.457 694.91 599.457C694.387 599.457 693.963 599.881 693.963 600.404C693.963 600.927 694.387 601.35 694.91 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_478"
                                        d="M694.91 586.421C695.432 586.421 695.856 585.997 695.856 585.474C695.856 584.951 695.432 584.527 694.91 584.527C694.387 584.527 693.963 584.951 693.963 585.474C693.963 585.997 694.387 586.421 694.91 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_479"
                                        d="M694.91 571.479C695.432 571.479 695.856 571.055 695.856 570.533C695.856 570.01 695.432 569.586 694.91 569.586C694.387 569.586 693.963 570.01 693.963 570.533C693.963 571.055 694.387 571.479 694.91 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_480"
                                        d="M694.91 556.55C695.432 556.55 695.856 556.126 695.856 555.603C695.856 555.08 695.432 554.656 694.91 554.656C694.387 554.656 693.963 555.08 693.963 555.603C693.963 556.126 694.387 556.55 694.91 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_102">
                                      <path
                                        id="Vector_481"
                                        d="M678.936 630.243C678.936 629.723 679.362 629.297 679.882 629.297C680.403 629.297 680.829 629.723 680.829 630.243C680.829 630.764 680.403 631.19 679.882 631.19C679.362 631.19 678.936 630.764 678.936 630.243Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_482"
                                        d="M678.936 615.333C678.936 614.813 679.362 614.387 679.882 614.387C680.403 614.387 680.829 614.813 680.829 615.333C680.829 615.854 680.403 616.28 679.882 616.28C679.362 616.28 678.936 615.854 678.936 615.333Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_483"
                                        d="M678.936 600.404C678.936 599.883 679.362 599.457 679.882 599.457C680.403 599.457 680.829 599.883 680.829 600.404C680.829 600.924 680.403 601.35 679.882 601.35C679.362 601.35 678.936 600.924 678.936 600.404Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_484"
                                        d="M678.936 585.474C678.936 584.953 679.362 584.527 679.882 584.527C680.403 584.527 680.829 584.953 680.829 585.474C680.829 585.995 680.403 586.421 679.882 586.421C679.362 586.421 678.936 585.995 678.936 585.474Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_485"
                                        d="M678.936 570.533C678.936 570.012 679.362 569.586 679.882 569.586C680.403 569.586 680.829 570.012 680.829 570.533C680.829 571.053 680.403 571.479 679.882 571.479C679.362 571.479 678.936 571.053 678.936 570.533Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_486"
                                        d="M678.936 555.603C678.936 555.082 679.362 554.656 679.882 554.656C680.403 554.656 680.829 555.082 680.829 555.603C680.829 556.124 680.403 556.55 679.882 556.55C679.362 556.55 678.936 556.124 678.936 555.603Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_103">
                                      <path
                                        id="Vector_487"
                                        d="M664.876 631.19C665.399 631.19 665.823 630.766 665.823 630.243C665.823 629.721 665.399 629.297 664.876 629.297C664.354 629.297 663.93 629.721 663.93 630.243C663.93 630.766 664.354 631.19 664.876 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_488"
                                        d="M664.876 616.28C665.399 616.28 665.823 615.856 665.823 615.333C665.823 614.811 665.399 614.387 664.876 614.387C664.354 614.387 663.93 614.811 663.93 615.333C663.93 615.856 664.354 616.28 664.876 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_489"
                                        d="M664.876 601.35C665.399 601.35 665.823 600.927 665.823 600.404C665.823 599.881 665.399 599.457 664.876 599.457C664.354 599.457 663.93 599.881 663.93 600.404C663.93 600.927 664.354 601.35 664.876 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_490"
                                        d="M664.876 586.421C665.399 586.421 665.823 585.997 665.823 585.474C665.823 584.951 665.399 584.527 664.876 584.527C664.354 584.527 663.93 584.951 663.93 585.474C663.93 585.997 664.354 586.421 664.876 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_491"
                                        d="M664.876 571.479C665.399 571.479 665.823 571.055 665.823 570.533C665.823 570.01 665.399 569.586 664.876 569.586C664.354 569.586 663.93 570.01 663.93 570.533C663.93 571.055 664.354 571.479 664.876 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_492"
                                        d="M664.876 556.55C665.399 556.55 665.823 556.126 665.823 555.603C665.823 555.08 665.399 554.656 664.876 554.656C664.354 554.656 663.93 555.08 663.93 555.603C663.93 556.126 664.354 556.55 664.876 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_104">
                                      <path
                                        id="Vector_493"
                                        d="M649.872 631.19C650.395 631.19 650.819 630.766 650.819 630.243C650.819 629.721 650.395 629.297 649.872 629.297C649.35 629.297 648.926 629.721 648.926 630.243C648.926 630.766 649.35 631.19 649.872 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_494"
                                        d="M649.872 616.28C650.395 616.28 650.819 615.856 650.819 615.333C650.819 614.811 650.395 614.387 649.872 614.387C649.35 614.387 648.926 614.811 648.926 615.333C648.926 615.856 649.35 616.28 649.872 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_495"
                                        d="M649.872 601.35C650.395 601.35 650.819 600.927 650.819 600.404C650.819 599.881 650.395 599.457 649.872 599.457C649.35 599.457 648.926 599.881 648.926 600.404C648.926 600.927 649.35 601.35 649.872 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_496"
                                        d="M649.872 586.421C650.395 586.421 650.819 585.997 650.819 585.474C650.819 584.951 650.395 584.527 649.872 584.527C649.35 584.527 648.926 584.951 648.926 585.474C648.926 585.997 649.35 586.421 649.872 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_497"
                                        d="M649.872 571.479C650.395 571.479 650.819 571.055 650.819 570.533C650.819 570.01 650.395 569.586 649.872 569.586C649.35 569.586 648.926 570.01 648.926 570.533C648.926 571.055 649.35 571.479 649.872 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_498"
                                        d="M649.872 556.55C650.395 556.55 650.819 556.126 650.819 555.603C650.819 555.08 650.395 554.656 649.872 554.656C649.35 554.656 648.926 555.08 648.926 555.603C648.926 556.126 649.35 556.55 649.872 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_105">
                                      <path
                                        id="Vector_499"
                                        d="M633.898 630.243C633.898 629.723 634.324 629.297 634.845 629.297C635.366 629.297 635.792 629.723 635.792 630.243C635.792 630.764 635.366 631.19 634.845 631.19C634.324 631.19 633.898 630.764 633.898 630.243Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_500"
                                        d="M633.898 615.333C633.898 614.813 634.324 614.387 634.845 614.387C635.366 614.387 635.792 614.813 635.792 615.333C635.792 615.854 635.366 616.28 634.845 616.28C634.324 616.28 633.898 615.854 633.898 615.333Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_501"
                                        d="M633.898 600.404C633.898 599.883 634.324 599.457 634.845 599.457C635.366 599.457 635.792 599.883 635.792 600.404C635.792 600.924 635.366 601.35 634.845 601.35C634.324 601.35 633.898 600.924 633.898 600.404Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_502"
                                        d="M633.898 585.474C633.898 584.953 634.324 584.527 634.845 584.527C635.366 584.527 635.792 584.953 635.792 585.474C635.792 585.995 635.366 586.421 634.845 586.421C634.324 586.421 633.898 585.995 633.898 585.474Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_503"
                                        d="M633.898 570.533C633.898 570.012 634.324 569.586 634.845 569.586C635.366 569.586 635.792 570.012 635.792 570.533C635.792 571.053 635.366 571.479 634.845 571.479C634.324 571.479 633.898 571.053 633.898 570.533Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_504"
                                        d="M633.898 555.603C633.898 555.082 634.324 554.656 634.845 554.656C635.366 554.656 635.792 555.082 635.792 555.603C635.792 556.124 635.366 556.55 634.845 556.55C634.324 556.55 633.898 556.124 633.898 555.603Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_106">
                                      <path
                                        id="Vector_505"
                                        d="M619.837 631.19C620.36 631.19 620.784 630.766 620.784 630.243C620.784 629.721 620.36 629.297 619.837 629.297C619.314 629.297 618.891 629.721 618.891 630.243C618.891 630.766 619.314 631.19 619.837 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_506"
                                        d="M619.837 616.28C620.36 616.28 620.784 615.856 620.784 615.333C620.784 614.811 620.36 614.387 619.837 614.387C619.314 614.387 618.891 614.811 618.891 615.333C618.891 615.856 619.314 616.28 619.837 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_507"
                                        d="M619.837 601.35C620.36 601.35 620.784 600.927 620.784 600.404C620.784 599.881 620.36 599.457 619.837 599.457C619.314 599.457 618.891 599.881 618.891 600.404C618.891 600.927 619.314 601.35 619.837 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_508"
                                        d="M619.837 586.421C620.36 586.421 620.784 585.997 620.784 585.474C620.784 584.951 620.36 584.527 619.837 584.527C619.314 584.527 618.891 584.951 618.891 585.474C618.891 585.997 619.314 586.421 619.837 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_509"
                                        d="M619.837 571.479C620.36 571.479 620.784 571.055 620.784 570.533C620.784 570.01 620.36 569.586 619.837 569.586C619.314 569.586 618.891 570.01 618.891 570.533C618.891 571.055 619.314 571.479 619.837 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_510"
                                        d="M619.837 556.55C620.36 556.55 620.784 556.126 620.784 555.603C620.784 555.08 620.36 554.656 619.837 554.656C619.314 554.656 618.891 555.08 618.891 555.603C618.891 556.126 619.314 556.55 619.837 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_107">
                                      <path
                                        id="Vector_511"
                                        d="M603.887 630.243C603.887 629.723 604.313 629.297 604.833 629.297C605.354 629.297 605.78 629.723 605.78 630.243C605.78 630.764 605.354 631.19 604.833 631.19C604.313 631.19 603.887 630.764 603.887 630.243Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_512"
                                        d="M603.887 615.333C603.887 614.813 604.313 614.387 604.833 614.387C605.354 614.387 605.78 614.813 605.78 615.333C605.78 615.854 605.354 616.28 604.833 616.28C604.313 616.28 603.887 615.854 603.887 615.333Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_513"
                                        d="M603.887 600.404C603.887 599.883 604.313 599.457 604.833 599.457C605.354 599.457 605.78 599.883 605.78 600.404C605.78 600.924 605.354 601.35 604.833 601.35C604.313 601.35 603.887 600.924 603.887 600.404Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_514"
                                        d="M603.887 585.474C603.887 584.953 604.313 584.527 604.833 584.527C605.354 584.527 605.78 584.953 605.78 585.474C605.78 585.995 605.354 586.421 604.833 586.421C604.313 586.421 603.887 585.995 603.887 585.474Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_515"
                                        d="M603.887 570.533C603.887 570.012 604.313 569.586 604.833 569.586C605.354 569.586 605.78 570.012 605.78 570.533C605.78 571.053 605.354 571.479 604.833 571.479C604.313 571.479 603.887 571.053 603.887 570.533Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_516"
                                        d="M603.887 555.603C603.887 555.082 604.313 554.656 604.833 554.656C605.354 554.656 605.78 555.082 605.78 555.603C605.78 556.124 605.354 556.55 604.833 556.55C604.313 556.55 603.887 556.124 603.887 555.603Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_108">
                                      <path
                                        id="Vector_517"
                                        d="M589.83 631.19C590.352 631.19 590.776 630.766 590.776 630.243C590.776 629.721 590.352 629.297 589.83 629.297C589.307 629.297 588.883 629.721 588.883 630.243C588.883 630.766 589.307 631.19 589.83 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_518"
                                        d="M589.83 616.28C590.352 616.28 590.776 615.856 590.776 615.333C590.776 614.811 590.352 614.387 589.83 614.387C589.307 614.387 588.883 614.811 588.883 615.333C588.883 615.856 589.307 616.28 589.83 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_519"
                                        d="M589.83 601.35C590.352 601.35 590.776 600.927 590.776 600.404C590.776 599.881 590.352 599.457 589.83 599.457C589.307 599.457 588.883 599.881 588.883 600.404C588.883 600.927 589.307 601.35 589.83 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_520"
                                        d="M589.83 586.421C590.352 586.421 590.776 585.997 590.776 585.474C590.776 584.951 590.352 584.527 589.83 584.527C589.307 584.527 588.883 584.951 588.883 585.474C588.883 585.997 589.307 586.421 589.83 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_521"
                                        d="M589.83 571.479C590.352 571.479 590.776 571.055 590.776 570.533C590.776 570.01 590.352 569.586 589.83 569.586C589.307 569.586 588.883 570.01 588.883 570.533C588.883 571.055 589.307 571.479 589.83 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_522"
                                        d="M589.83 556.55C590.352 556.55 590.776 556.126 590.776 555.603C590.776 555.08 590.352 554.656 589.83 554.656C589.307 554.656 588.883 555.08 588.883 555.603C588.883 556.126 589.307 556.55 589.83 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_109">
                                      <path
                                        id="Vector_523"
                                        d="M574.802 631.19C575.325 631.19 575.749 630.766 575.749 630.243C575.749 629.721 575.325 629.297 574.802 629.297C574.279 629.297 573.855 629.721 573.855 630.243C573.855 630.766 574.279 631.19 574.802 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_524"
                                        d="M574.802 616.28C575.325 616.28 575.749 615.856 575.749 615.333C575.749 614.811 575.325 614.387 574.802 614.387C574.279 614.387 573.855 614.811 573.855 615.333C573.855 615.856 574.279 616.28 574.802 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_525"
                                        d="M574.802 601.35C575.325 601.35 575.749 600.927 575.749 600.404C575.749 599.881 575.325 599.457 574.802 599.457C574.279 599.457 573.855 599.881 573.855 600.404C573.855 600.927 574.279 601.35 574.802 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_526"
                                        d="M574.802 586.421C575.325 586.421 575.749 585.997 575.749 585.474C575.749 584.951 575.325 584.527 574.802 584.527C574.279 584.527 573.855 584.951 573.855 585.474C573.855 585.997 574.279 586.421 574.802 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_527"
                                        d="M574.802 571.479C575.325 571.479 575.749 571.055 575.749 570.533C575.749 570.01 575.325 569.586 574.802 569.586C574.279 569.586 573.855 570.01 573.855 570.533C573.855 571.055 574.279 571.479 574.802 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_528"
                                        d="M574.802 556.55C575.325 556.55 575.749 556.126 575.749 555.603C575.749 555.08 575.325 554.656 574.802 554.656C574.279 554.656 573.855 555.08 573.855 555.603C573.855 556.126 574.279 556.55 574.802 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_110">
                                      <path
                                        id="Vector_529"
                                        d="M559.796 631.19C560.319 631.19 560.743 630.766 560.743 630.243C560.743 629.721 560.319 629.297 559.796 629.297C559.274 629.297 558.85 629.721 558.85 630.243C558.85 630.766 559.274 631.19 559.796 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_530"
                                        d="M559.796 616.28C560.319 616.28 560.743 615.856 560.743 615.333C560.743 614.811 560.319 614.387 559.796 614.387C559.274 614.387 558.85 614.811 558.85 615.333C558.85 615.856 559.274 616.28 559.796 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_531"
                                        d="M559.796 601.35C560.319 601.35 560.743 600.927 560.743 600.404C560.743 599.881 560.319 599.457 559.796 599.457C559.274 599.457 558.85 599.881 558.85 600.404C558.85 600.927 559.274 601.35 559.796 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_532"
                                        d="M559.796 586.421C560.319 586.421 560.743 585.997 560.743 585.474C560.743 584.951 560.319 584.527 559.796 584.527C559.274 584.527 558.85 584.951 558.85 585.474C558.85 585.997 559.274 586.421 559.796 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_533"
                                        d="M559.796 571.479C560.319 571.479 560.743 571.055 560.743 570.533C560.743 570.01 560.319 569.586 559.796 569.586C559.274 569.586 558.85 570.01 558.85 570.533C558.85 571.055 559.274 571.479 559.796 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_534"
                                        d="M559.796 556.55C560.319 556.55 560.743 556.126 560.743 555.603C560.743 555.08 560.319 554.656 559.796 554.656C559.274 554.656 558.85 555.08 558.85 555.603C558.85 556.126 559.274 556.55 559.796 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_111">
                                      <path
                                        id="Vector_535"
                                        d="M544.79 631.19C545.313 631.19 545.737 630.766 545.737 630.243C545.737 629.721 545.313 629.297 544.79 629.297C544.268 629.297 543.844 629.721 543.844 630.243C543.844 630.766 544.268 631.19 544.79 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_536"
                                        d="M544.79 616.28C545.313 616.28 545.737 615.856 545.737 615.333C545.737 614.811 545.313 614.387 544.79 614.387C544.268 614.387 543.844 614.811 543.844 615.333C543.844 615.856 544.268 616.28 544.79 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_537"
                                        d="M544.79 601.35C545.313 601.35 545.737 600.927 545.737 600.404C545.737 599.881 545.313 599.457 544.79 599.457C544.268 599.457 543.844 599.881 543.844 600.404C543.844 600.927 544.268 601.35 544.79 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_538"
                                        d="M544.79 586.421C545.313 586.421 545.737 585.997 545.737 585.474C545.737 584.951 545.313 584.527 544.79 584.527C544.268 584.527 543.844 584.951 543.844 585.474C543.844 585.997 544.268 586.421 544.79 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_539"
                                        d="M544.79 571.479C545.313 571.479 545.737 571.055 545.737 570.533C545.737 570.01 545.313 569.586 544.79 569.586C544.268 569.586 543.844 570.01 543.844 570.533C543.844 571.055 544.268 571.479 544.79 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_540"
                                        d="M544.79 556.55C545.313 556.55 545.737 556.126 545.737 555.603C545.737 555.08 545.313 554.656 544.79 554.656C544.268 554.656 543.844 555.08 543.844 555.603C543.844 556.126 544.268 556.55 544.79 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_112">
                                      <path
                                        id="Vector_541"
                                        d="M529.763 631.19C530.286 631.19 530.71 630.766 530.71 630.243C530.71 629.721 530.286 629.297 529.763 629.297C529.24 629.297 528.816 629.721 528.816 630.243C528.816 630.766 529.24 631.19 529.763 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_542"
                                        d="M529.763 616.28C530.286 616.28 530.71 615.856 530.71 615.333C530.71 614.811 530.286 614.387 529.763 614.387C529.24 614.387 528.816 614.811 528.816 615.333C528.816 615.856 529.24 616.28 529.763 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_543"
                                        d="M529.763 601.35C530.286 601.35 530.71 600.927 530.71 600.404C530.71 599.881 530.286 599.457 529.763 599.457C529.24 599.457 528.816 599.881 528.816 600.404C528.816 600.927 529.24 601.35 529.763 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_544"
                                        d="M529.763 586.421C530.286 586.421 530.71 585.997 530.71 585.474C530.71 584.951 530.286 584.527 529.763 584.527C529.24 584.527 528.816 584.951 528.816 585.474C528.816 585.997 529.24 586.421 529.763 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_545"
                                        d="M529.763 571.479C530.286 571.479 530.71 571.055 530.71 570.533C530.71 570.01 530.286 569.586 529.763 569.586C529.24 569.586 528.816 570.01 528.816 570.533C528.816 571.055 529.24 571.479 529.763 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_546"
                                        d="M529.763 556.55C530.286 556.55 530.71 556.126 530.71 555.603C530.71 555.08 530.286 554.656 529.763 554.656C529.24 554.656 528.816 555.08 528.816 555.603C528.816 556.126 529.24 556.55 529.763 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_113">
                                      <path
                                        id="Vector_547"
                                        d="M514.761 631.19C515.284 631.19 515.708 630.766 515.708 630.243C515.708 629.721 515.284 629.297 514.761 629.297C514.238 629.297 513.814 629.721 513.814 630.243C513.814 630.766 514.238 631.19 514.761 631.19Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_548"
                                        d="M514.761 616.28C515.284 616.28 515.708 615.856 515.708 615.333C515.708 614.811 515.284 614.387 514.761 614.387C514.238 614.387 513.814 614.811 513.814 615.333C513.814 615.856 514.238 616.28 514.761 616.28Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_549"
                                        d="M514.761 601.35C515.284 601.35 515.708 600.927 515.708 600.404C515.708 599.881 515.284 599.457 514.761 599.457C514.238 599.457 513.814 599.881 513.814 600.404C513.814 600.927 514.238 601.35 514.761 601.35Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_550"
                                        d="M514.761 586.421C515.284 586.421 515.708 585.997 515.708 585.474C515.708 584.951 515.284 584.527 514.761 584.527C514.238 584.527 513.814 584.951 513.814 585.474C513.814 585.997 514.238 586.421 514.761 586.421Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_551"
                                        d="M514.761 571.479C515.284 571.479 515.708 571.055 515.708 570.533C515.708 570.01 515.284 569.586 514.761 569.586C514.238 569.586 513.814 570.01 513.814 570.533C513.814 571.055 514.238 571.479 514.761 571.479Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_552"
                                        d="M514.761 556.55C515.284 556.55 515.708 556.126 515.708 555.603C515.708 555.08 515.284 554.656 514.761 554.656C514.238 554.656 513.814 555.08 513.814 555.603C513.814 556.126 514.238 556.55 514.761 556.55Z"
                                        fill="white"
                                      />
                                    </g>
                                    <g id="Group_114">
                                      <path
                                        id="Vector_553"
                                        d="M498.783 630.243C498.783 629.723 499.209 629.297 499.73 629.297C500.251 629.297 500.677 629.723 500.677 630.243C500.677 630.764 500.251 631.19 499.73 631.19C499.209 631.19 498.783 630.764 498.783 630.243Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_554"
                                        d="M498.783 615.333C498.783 614.813 499.209 614.387 499.73 614.387C500.251 614.387 500.677 614.813 500.677 615.333C500.677 615.854 500.251 616.28 499.73 616.28C499.209 616.28 498.783 615.854 498.783 615.333Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_555"
                                        d="M498.783 600.404C498.783 599.883 499.209 599.457 499.73 599.457C500.251 599.457 500.677 599.883 500.677 600.404C500.677 600.924 500.251 601.35 499.73 601.35C499.209 601.35 498.783 600.924 498.783 600.404Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_556"
                                        d="M498.783 585.474C498.783 584.953 499.209 584.527 499.73 584.527C500.251 584.527 500.677 584.953 500.677 585.474C500.677 585.995 500.251 586.421 499.73 586.421C499.209 586.421 498.783 585.995 498.783 585.474Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_557"
                                        d="M498.783 570.533C498.783 570.012 499.209 569.586 499.73 569.586C500.251 569.586 500.677 570.012 500.677 570.533C500.677 571.053 500.251 571.479 499.73 571.479C499.209 571.479 498.783 571.053 498.783 570.533Z"
                                        fill="white"
                                      />
                                      <path
                                        id="Vector_558"
                                        d="M498.783 555.603C498.783 555.082 499.209 554.656 499.73 554.656C500.251 554.656 500.677 555.082 500.677 555.603C500.677 556.124 500.251 556.55 499.73 556.55C499.209 556.55 498.783 556.124 498.783 555.603Z"
                                        fill="white"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <path
                            id="Vector_559"
                            d="M1338.24 30.457V303.831L1064.87 577.228V303.831L1338.24 30.457Z"
                            fill="url(#paint15_linear_4995_86464)"
                          />
                          <path
                            id="Vector_560"
                            d="M659.199 903.332L1177.22 385.316V552.214L826.097 903.332H659.199Z"
                            fill="url(#paint16_linear_4995_86464)"
                          />
                          <g
                            id="Vector_561"
                            style={{ mixBlendMode: "overlay" }}
                          >
                            <path
                              d="M416.14 338.262L-195.975 950.376V846.929L312.669 338.262H416.14Z"
                              fill="white"
                            />
                          </g>
                          <g
                            id="Vector_562"
                            style={{ mixBlendMode: "overlay" }}
                          >
                            <path
                              d="M427.926 825.068L1083.61 169.406V218.467L476.987 825.068H427.926Z"
                              fill="white"
                            />
                          </g>
                          <path
                            id="Vector_563"
                            d="M1233.99 349.078L755.758 827.287H1233.99V349.078Z"
                            stroke="url(#paint17_linear_4995_86464)"
                            strokeMiterlimit={10}
                          />
                          <path
                            id="Vector_564"
                            d="M158.27 562.697L289.194 431.773H158.27V562.697Z"
                            stroke="url(#paint18_linear_4995_86464)"
                            strokeMiterlimit={10}
                          />
                          <g id="Group_115" style={{ mixBlendMode: "overlay" }}>
                            <g id="Clip path group_8">
                              <mask
                                id="mask8_4995_86464"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x={1091}
                                y={-20}
                                width={275}
                                height={274}
                              >
                                <g id="clippath-7">
                                  <path
                                    id="Vector_565"
                                    d="M1365.01 -19.5938L1091.61 253.804H1365.01V-19.5938Z"
                                    fill="white"
                                  />
                                </g>
                              </mask>
                              <g mask="url(#mask8_4995_86464)">
                                <g id="Group_116">
                                  <g id="Group_117">
                                    <path
                                      id="Vector_566"
                                      d="M1540.97 104.277C1528.19 117.057 1523.17 112.04 1510.42 124.796C1497.66 137.553 1502.65 142.594 1489.9 155.374C1477.12 168.154 1472.1 163.136 1459.32 175.916C1446.54 188.696 1451.56 193.714 1438.8 206.494C1426.02 219.274 1421 214.256 1408.22 227.013C1395.44 239.793 1400.46 244.81 1387.7 257.566C1374.92 270.346 1369.91 265.329 1357.15 278.085C1344.37 290.865 1349.39 295.883 1336.63 308.663C1323.88 321.443 1318.83 316.425 1306.05 329.205C1293.27 341.985 1298.29 347.003 1285.54 359.783C1272.78 372.563 1267.74 367.545 1254.96 380.325C1242.18 393.105 1247.2 398.123 1234.42 410.903"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_567"
                                      d="M1530.82 94.1289C1518.04 106.909 1513.02 101.892 1500.26 114.648C1487.48 127.428 1492.5 132.445 1479.74 145.225C1466.96 158.005 1461.95 152.988 1449.17 165.768C1436.39 178.548 1441.4 183.565 1428.65 196.345C1415.89 209.125 1410.85 204.108 1398.07 216.864C1385.29 229.644 1390.31 234.662 1377.55 247.418C1364.77 260.198 1359.75 255.181 1347 267.937C1334.22 280.717 1339.23 285.734 1326.48 298.514C1313.7 311.294 1308.68 306.277 1295.9 319.057C1283.12 331.837 1288.14 336.854 1275.38 349.634C1262.6 362.414 1257.58 357.397 1244.8 370.177C1232.02 382.957 1237.04 387.974 1224.26 400.754"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_568"
                                      d="M1520.64 83.9727C1507.86 96.7527 1502.84 91.7353 1490.09 104.492C1477.31 117.272 1482.32 122.289 1469.57 135.069C1456.79 147.849 1451.77 142.832 1438.99 155.612C1426.21 168.392 1431.23 173.409 1418.47 186.189C1405.71 198.969 1400.67 193.952 1387.89 206.708C1375.11 219.488 1380.13 224.505 1367.37 237.262C1354.59 250.042 1349.58 245.024 1336.82 257.781C1324.04 270.561 1329.06 275.578 1316.3 288.358C1303.52 301.138 1298.5 296.121 1285.72 308.901C1272.94 321.681 1277.96 326.698 1265.21 339.478C1252.45 352.258 1247.41 347.241 1234.63 360.021C1221.85 372.801 1226.87 377.818 1214.09 390.598"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_569"
                                      d="M1510.49 73.8164C1497.71 86.5964 1492.69 81.5791 1479.93 94.3354C1467.15 107.115 1472.17 112.133 1459.42 124.913C1446.64 137.693 1441.62 132.675 1428.84 145.455C1416.06 158.235 1421.08 163.253 1408.32 176.033C1395.54 188.813 1390.52 183.795 1377.74 196.552C1364.96 209.308 1369.98 214.349 1357.22 227.105C1344.44 239.885 1339.43 234.868 1326.67 247.624C1313.89 260.404 1318.91 265.422 1306.15 278.202C1293.39 290.982 1288.35 285.964 1275.57 298.744C1262.79 311.524 1267.81 316.542 1255.05 329.322C1242.27 342.102 1237.26 337.084 1224.48 349.864C1211.7 362.644 1216.71 367.662 1203.93 380.442"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_570"
                                      d="M1500.34 63.668C1487.56 76.448 1482.54 71.4307 1469.78 84.187C1457.03 96.9433 1462.02 101.984 1449.26 114.764C1436.51 127.544 1431.47 122.527 1418.69 135.307C1405.91 148.087 1410.92 153.104 1398.17 165.884C1385.39 178.664 1380.37 173.647 1367.59 186.403C1354.81 199.183 1359.83 204.201 1347.07 216.957C1334.29 229.737 1329.27 224.72 1316.52 237.476C1303.74 250.256 1308.75 255.273 1296 268.053C1283.24 280.833 1278.2 275.816 1265.42 288.596C1252.64 301.376 1257.66 306.393 1244.9 319.173C1232.12 331.953 1227.1 326.936 1214.32 339.716C1201.54 352.496 1206.56 357.513 1193.78 370.293"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_571"
                                      d="M1490.18 53.5117C1477.4 66.2917 1472.38 61.2743 1459.63 74.0307C1446.85 86.8107 1451.86 91.828 1439.11 104.608C1426.33 117.388 1421.31 112.371 1408.53 125.151C1395.75 137.931 1400.77 142.948 1388.01 155.728C1375.23 168.508 1370.21 163.491 1357.43 176.247C1344.65 189.027 1349.67 194.044 1336.92 206.801C1324.16 219.557 1319.12 214.563 1306.36 227.32C1293.58 240.1 1298.6 245.117 1285.84 257.897C1273.06 270.677 1268.05 265.66 1255.27 278.44C1242.49 291.22 1247.5 296.237 1234.75 309.017C1221.99 321.797 1216.95 316.78 1204.17 329.56C1191.39 342.34 1196.41 347.357 1183.63 360.137"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_572"
                                      d="M1480.03 43.3359C1467.25 56.1159 1462.23 51.0986 1449.47 63.855C1436.69 76.635 1441.71 81.6523 1428.95 94.4323C1416.2 107.212 1411.16 102.195 1398.38 114.975C1385.6 127.755 1390.61 132.772 1377.86 145.552C1365.08 158.332 1360.06 153.315 1347.28 166.071C1334.5 178.851 1339.52 183.869 1326.76 196.625C1314.01 209.381 1308.96 204.388 1296.21 217.144C1283.43 229.924 1288.45 234.941 1275.69 247.721C1262.91 260.501 1257.89 255.484 1245.11 268.264C1232.33 281.044 1237.35 286.061 1224.59 298.841C1211.84 311.621 1206.8 306.604 1194.02 319.384C1181.24 332.164 1186.25 337.181 1173.47 349.961"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_573"
                                      d="M1469.87 33.1836C1457.09 45.9636 1452.08 40.9463 1439.32 53.7026C1426.56 66.459 1431.56 71.5 1418.8 84.28C1406.02 97.06 1401 92.0426 1388.22 104.823C1375.44 117.603 1380.46 122.62 1367.71 135.4C1354.93 148.18 1349.91 143.163 1337.13 155.919C1324.35 168.699 1329.37 173.716 1316.61 186.473C1303.83 199.253 1298.81 194.235 1286.06 206.992C1273.3 219.748 1278.29 224.789 1265.54 237.569C1252.78 250.349 1247.74 245.332 1234.96 258.112C1222.18 270.892 1227.2 275.909 1214.44 288.689C1201.66 301.469 1196.64 296.452 1183.86 309.232C1171.08 322.012 1176.1 327.029 1163.32 339.809"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_574"
                                      d="M1459.7 23.0352C1446.92 35.8152 1441.9 30.7978 1429.15 43.5541C1416.37 56.3341 1421.38 61.3515 1408.63 74.1315C1395.85 86.9115 1390.83 81.8941 1378.05 94.6741C1365.27 107.454 1370.29 112.471 1357.53 125.251C1344.75 138.031 1339.73 133.014 1326.95 145.77C1314.17 158.55 1319.19 163.568 1306.43 176.324C1293.65 189.104 1288.64 184.087 1275.88 196.843C1263.1 209.623 1268.12 214.64 1255.36 227.42C1242.58 240.2 1237.56 235.183 1224.78 247.963C1212 260.743 1217.02 265.76 1204.26 278.54C1191.48 291.32 1186.47 286.303 1173.69 299.083C1160.91 311.863 1165.92 316.88 1153.14 329.66"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_575"
                                      d="M1449.55 12.875C1436.77 25.655 1431.75 20.6377 1418.99 33.394C1406.21 46.174 1411.23 51.1913 1398.47 63.9713C1385.69 76.7513 1380.68 71.734 1367.9 84.514C1355.12 97.294 1360.13 102.311 1347.38 115.091C1334.62 127.871 1329.58 122.854 1316.8 135.61C1304.02 148.39 1309.04 153.408 1296.28 166.164C1283.52 178.92 1278.48 173.927 1265.73 186.683C1252.95 199.463 1257.96 204.48 1245.21 217.26C1232.45 230.04 1227.41 225.023 1214.63 237.803C1201.85 250.583 1206.87 255.6 1194.11 268.38C1181.33 281.16 1176.31 276.143 1163.53 288.923C1150.75 301.703 1155.77 306.72 1142.99 319.5"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_576"
                                      d="M1439.39 2.72266C1426.61 15.5027 1421.59 10.4854 1408.84 23.2417C1396.08 35.998 1401.08 41.039 1388.32 53.819C1375.54 66.599 1370.52 61.5817 1357.74 74.3617C1344.96 87.1417 1349.98 92.159 1337.22 104.939C1324.47 117.719 1319.43 112.702 1306.65 125.458C1293.87 138.238 1298.88 143.255 1286.13 156.012C1273.35 168.792 1268.33 163.774 1255.57 176.531C1242.79 189.311 1247.81 194.328 1235.05 207.108C1222.3 219.888 1217.26 214.871 1204.48 227.651C1191.7 240.431 1196.71 245.448 1183.96 258.228C1171.18 271.008 1166.16 265.991 1153.38 278.771C1140.6 291.551 1145.62 296.568 1132.84 309.348"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_577"
                                      d="M1429.24 -7.42969C1416.46 5.35031 1411.44 0.332939 1398.69 13.0893C1385.93 25.8456 1390.92 30.8866 1378.17 43.6666C1365.39 56.4466 1360.37 51.4293 1347.59 64.2093C1334.81 76.9893 1339.83 82.0066 1327.07 94.7866C1314.29 107.567 1309.27 102.549 1296.49 115.306C1283.71 128.062 1288.73 133.103 1275.97 145.859C1263.19 158.639 1258.18 153.622 1245.42 166.378C1232.64 179.158 1237.66 184.176 1224.9 196.956C1212.15 209.736 1207.1 204.718 1194.32 217.498C1181.54 230.278 1186.56 235.296 1173.81 248.076C1161.03 260.856 1156.01 255.838 1143.23 268.618C1130.45 281.398 1135.47 286.416 1122.69 299.196"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_578"
                                      d="M1419.09 -17.6094C1406.31 -4.82938 1401.29 -9.84668 1388.53 2.90966C1375.75 15.6897 1380.77 20.7069 1368.01 33.4869C1355.26 46.2669 1350.22 41.2497 1337.44 54.0297C1324.66 66.8097 1329.67 71.827 1316.92 84.607C1304.14 97.387 1299.12 92.3697 1286.34 105.126C1273.56 117.906 1278.58 122.923 1265.82 135.68C1253.04 148.46 1248.02 143.442 1235.27 156.199C1222.49 168.979 1227.5 173.996 1214.75 186.776C1201.97 199.556 1196.95 194.539 1184.17 207.319C1171.39 220.099 1176.41 225.116 1163.65 237.896C1150.89 250.676 1145.85 245.659 1133.07 258.439C1120.29 271.219 1125.31 276.236 1112.53 289.016"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_579"
                                      d="M1408.93 -27.7578C1396.15 -14.9778 1391.14 -19.9951 1378.38 -7.23878C1365.6 5.54122 1370.62 10.5586 1357.86 23.3386C1345.1 36.1186 1340.06 31.1012 1327.28 43.8812C1314.5 56.6612 1319.52 61.6785 1306.76 74.4585C1293.98 87.2385 1288.97 82.2212 1276.19 94.9776C1263.41 107.758 1268.42 112.775 1255.67 125.531C1242.91 138.288 1237.87 133.294 1225.11 146.05C1212.33 158.83 1217.35 163.848 1204.6 176.628C1191.82 189.408 1186.8 184.39 1174.02 197.17C1161.24 209.95 1166.26 214.968 1153.5 227.748C1140.72 240.528 1135.7 235.51 1122.92 248.29C1110.14 261.07 1115.16 266.088 1102.38 278.868"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_580"
                                      d="M1398.76 -37.9062C1385.98 -25.1263 1380.96 -30.1436 1368.2 -17.3873C1355.45 -4.63096 1360.44 0.410073 1347.68 13.1901C1334.93 25.9701 1329.89 20.9527 1317.11 33.7327C1304.33 46.5127 1309.34 51.5301 1296.59 64.3101C1283.81 77.0901 1278.79 72.0727 1266.01 84.829C1253.23 97.609 1258.25 102.626 1245.49 115.383C1232.71 128.163 1227.69 123.145 1214.94 135.902C1202.18 148.658 1207.18 153.699 1194.42 166.479C1181.64 179.259 1176.62 174.242 1163.84 187.022C1151.06 199.802 1156.08 204.819 1143.32 217.599C1130.57 230.379 1125.53 225.362 1112.75 238.142C1099.97 250.922 1104.98 255.939 1092.2 268.719"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_581"
                                      d="M1388.6 -48.0703C1375.82 -35.2903 1370.81 -40.3076 1358.05 -27.5513C1345.29 -14.7949 1350.29 -9.75399 1337.53 3.02601C1324.75 15.806 1319.73 10.7887 1306.95 23.5687C1294.17 36.3487 1299.19 41.366 1286.43 54.146C1273.65 66.926 1268.64 61.9086 1255.86 74.665C1243.08 87.445 1248.09 92.4623 1235.34 105.219C1222.56 117.999 1217.54 112.981 1204.78 125.738C1192.03 138.494 1197.02 143.535 1184.27 156.315C1171.51 169.095 1166.47 164.078 1153.69 176.858C1140.91 189.638 1145.93 194.655 1133.17 207.435C1120.41 220.215 1115.37 215.198 1102.59 227.978C1089.81 240.758 1094.83 245.775 1082.05 258.555"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_582"
                                      d="M1378.45 -58.2188C1365.67 -45.4388 1360.65 -50.4561 1347.9 -37.6997C1335.12 -24.9197 1340.13 -19.9024 1327.38 -7.12243C1314.6 5.65757 1309.58 0.640293 1296.8 13.4203C1284.02 26.2003 1289.04 31.2176 1276.28 43.9976C1263.5 56.7776 1258.48 51.7603 1245.7 64.5166C1232.92 77.2966 1237.94 82.314 1225.19 95.0703C1212.41 107.85 1207.39 102.833 1194.63 115.589C1181.85 128.369 1186.87 133.387 1174.11 146.167C1161.36 158.947 1156.32 153.929 1143.54 166.709C1130.76 179.489 1135.77 184.507 1123.02 197.287C1110.24 210.067 1105.22 205.049 1092.44 217.829C1079.66 230.609 1084.68 235.627 1071.9 248.407"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_583"
                                      d="M1368.3 -68.3711C1355.52 -55.5911 1350.5 -60.6085 1337.74 -47.8521C1324.96 -35.0721 1329.98 -30.0548 1317.23 -17.2748C1304.47 -4.49477 1299.43 -9.51212 1286.65 3.26788C1273.87 16.0479 1278.89 21.0652 1266.13 33.8452C1253.37 46.6252 1248.33 41.6079 1235.55 54.3642C1222.77 67.1442 1227.79 72.1615 1215.03 84.9179C1202.28 97.6742 1197.24 92.6805 1184.48 105.437C1171.7 118.217 1176.72 123.234 1163.96 136.014C1151.18 148.794 1146.16 143.777 1133.38 156.557C1120.6 169.337 1125.62 174.354 1112.86 187.134C1100.08 199.914 1095.07 194.897 1082.29 207.677C1069.51 220.457 1074.52 225.474 1061.74 238.254"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_584"
                                      d="M1358.14 -78.5508C1345.36 -65.7708 1340.35 -70.7881 1327.59 -58.0318C1314.83 -45.2754 1319.83 -40.2345 1307.07 -27.4545C1294.29 -14.6745 1289.27 -19.6917 1276.49 -6.91174C1263.71 5.86826 1268.73 10.8856 1255.98 23.6656C1243.22 36.4456 1238.18 31.4283 1225.4 44.1846C1212.62 56.9409 1217.64 61.9819 1204.88 74.7383C1192.1 87.5183 1187.08 82.5009 1174.33 95.2572C1161.57 108.014 1166.56 113.055 1153.81 125.835C1141.03 138.615 1136.01 133.597 1123.23 146.377C1110.45 159.157 1115.47 164.175 1102.71 176.955C1089.93 189.735 1084.91 184.717 1072.13 197.497C1059.35 210.277 1064.37 215.295 1051.59 228.075"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_585"
                                      d="M1347.99 -88.6992C1335.21 -75.9192 1330.19 -80.9366 1317.44 -68.1802C1304.66 -55.4002 1309.68 -50.3829 1296.92 -37.6029C1284.14 -24.8229 1279.12 -29.8402 1266.34 -17.0602C1253.56 -4.2802 1258.58 0.737089 1245.82 13.5171C1233.04 26.2971 1228.03 21.2798 1215.25 34.0361C1202.47 46.7925 1207.48 51.8335 1194.73 64.5898C1181.95 77.3698 1176.93 72.3524 1164.17 85.1088C1151.39 97.8888 1156.41 102.906 1143.65 115.686C1130.9 128.466 1125.86 123.449 1113.08 136.229C1100.3 149.009 1105.31 154.026 1092.56 166.806C1079.8 179.586 1074.76 174.569 1061.98 187.349C1049.2 200.129 1054.22 205.146 1041.44 217.926"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_586"
                                      d="M1337.82 -98.8477C1325.04 -86.0677 1320.02 -91.085 1307.26 -78.3286C1294.48 -65.5486 1299.5 -60.5313 1286.74 -47.7513C1273.99 -34.9713 1268.95 -39.9886 1256.17 -27.2086C1243.39 -14.4286 1248.4 -9.41128 1235.65 3.36872C1222.87 16.1487 1217.85 11.1314 1205.07 23.8877C1192.29 36.6677 1197.31 41.685 1184.55 54.4414C1171.77 67.2214 1166.75 62.2041 1154 74.9604C1141.22 87.7404 1146.23 92.7577 1133.48 105.538C1120.7 118.318 1115.68 113.3 1102.9 126.08C1090.12 138.86 1095.14 143.878 1082.38 156.658C1069.6 169.438 1064.58 164.42 1051.8 177.2C1039.02 189.98 1044.04 194.998 1031.26 207.778"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_587"
                                      d="M1327.66 -109.012C1314.88 -96.2317 1309.86 -101.249 1297.11 -88.4927C1284.33 -75.7127 1289.35 -70.6954 1276.59 -57.9154C1263.81 -45.1354 1258.79 -50.1527 1246.01 -37.3727C1233.23 -24.5927 1238.25 -19.5754 1225.49 -6.79538C1212.71 5.98462 1207.7 0.967242 1194.92 13.7236C1182.14 26.5036 1187.15 31.5209 1174.4 44.2772C1161.64 57.0336 1156.6 52.0399 1143.84 64.7963C1131.06 77.5763 1136.08 82.5936 1123.32 95.3736C1110.54 108.154 1105.53 103.136 1092.75 115.916C1079.97 128.696 1084.98 133.714 1072.23 146.494C1059.47 159.274 1054.43 154.256 1041.65 167.036C1028.87 179.816 1033.89 184.834 1021.11 197.614"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_588"
                                      d="M1317.51 -119.16C1304.73 -106.38 1299.71 -111.397 1286.96 -98.6412C1274.18 -85.8612 1279.19 -80.8439 1266.44 -68.0639C1253.68 -55.2839 1248.64 -60.3011 1235.86 -47.5211C1223.08 -34.7411 1228.1 -29.7239 1215.34 -16.9439C1202.56 -4.16386 1197.54 -9.18116 1184.76 3.57517C1171.98 16.3552 1177 21.3725 1164.24 34.1288C1151.46 46.9088 1146.45 41.8915 1133.69 54.6478C1120.91 67.4278 1125.93 72.4452 1113.17 85.2252C1100.42 98.0052 1095.37 92.9878 1082.59 105.768C1069.81 118.548 1074.83 123.565 1062.08 136.345C1049.32 149.125 1044.28 144.108 1031.5 156.888C1018.72 169.668 1023.74 174.685 1010.96 187.465"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_589"
                                      d="M1307.36 -129.309C1294.58 -116.529 1289.56 -121.546 1276.8 -108.79C1264.05 -96.0333 1269.04 -90.9923 1256.28 -78.2123C1243.5 -65.4323 1238.49 -70.4496 1225.71 -57.6696C1212.93 -44.8896 1217.94 -39.8723 1205.19 -27.0923C1192.41 -14.3123 1187.39 -19.3296 1174.61 -6.57325C1161.83 6.20675 1166.85 11.2241 1154.09 23.9804C1141.31 36.7604 1136.29 31.7431 1123.54 44.4994C1110.78 57.2557 1115.78 62.2968 1103.02 75.0768C1090.26 87.8568 1085.22 82.8394 1072.44 95.6194C1059.66 108.399 1064.68 113.417 1051.92 126.197C1039.14 138.977 1034.13 133.959 1021.35 146.739C1008.57 159.519 1013.58 164.537 1000.8 177.317"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      id="Vector_590"
                                      d="M1297.2 -139.488C1284.42 -126.708 1279.41 -131.726 1266.65 -118.969C1253.87 -106.189 1258.89 -101.172 1246.13 -88.3919C1233.35 -75.6119 1228.33 -80.6292 1215.55 -67.8492C1202.77 -55.0692 1207.79 -50.0519 1195.03 -37.2719C1182.28 -24.4919 1177.24 -29.5092 1164.46 -16.7529C1151.68 -3.97292 1156.69 1.04443 1143.94 13.8008C1131.16 26.5808 1126.14 21.5634 1113.38 34.3197C1100.6 47.0997 1105.62 52.1171 1092.86 64.8971C1080.08 77.6771 1075.07 72.6597 1062.29 85.4397C1049.51 98.2197 1054.52 103.237 1041.77 116.017C1028.99 128.797 1023.97 123.78 1011.19 136.56C998.411 149.34 1003.43 154.357 990.648 167.137"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <rect
          id="Rectangle 39439"
          width={1536}
          height={730}
          fill="#374405"
          fillOpacity="0.7"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4995_86464"
          x1="-26.4258"
          y1="522.13"
          x2="1074.24"
          y2="522.13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4995_86464"
          x1="437.131"
          y1="682.804"
          x2="1092.79"
          y2="682.804"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4995_86464"
          x1="936.688"
          y1="644.323"
          x2="1716.72"
          y2="644.323"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4995_86464"
          x1="199.922"
          y1="-172.514"
          x2="975.455"
          y2="-172.514"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_4995_86464"
          x1="1353.69"
          y1="358.239"
          x2="700.921"
          y2="921.245"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.14" stopColor="white" />
          <stop offset={1} stopColor="#231F20" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_4995_86464"
          x1="-13.4331"
          y1="236.3"
          x2="639.341"
          y2="-326.706"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.14" stopColor="white" />
          <stop offset={1} stopColor="#231F20" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_4995_86464"
          x1="1566.48"
          y1="-404.298"
          x2="763.33"
          y2="416.486"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_4995_86464"
          x1="1149.95"
          y1="-41.4402"
          x2="785.553"
          y2="351.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.22" stopColor="#CCE64F" />
          <stop offset="0.72" stopColor="#6AC661" />
          <stop offset={1} stopColor="#31B46C" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_4995_86464"
          x1="1211.96"
          y1="-500.576"
          x2="372.854"
          y2="356.962"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.08" stopColor="#CCE64F" />
          <stop offset="0.24" stopColor="#6AC661" />
          <stop offset="0.34" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_4995_86464"
          x1="258.874"
          y1="923.166"
          x2="919.174"
          y2="329.133"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_4995_86464"
          x1="288.576"
          y1="449.287"
          x2="486.217"
          y2="271.503"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_4995_86464"
          x1="1256.83"
          y1="226.51"
          x2="1454.44"
          y2="48.7022"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_4995_86464"
          x1="158.98"
          y1="373.648"
          x2="91.3404"
          y2="434.519"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_4995_86464"
          x1="1045.18"
          y1="459.224"
          x2="920.264"
          y2="571.594"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_4995_86464"
          x1="594.446"
          y1="-96.7047"
          x2="271.396"
          y2="233.422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.22" stopColor="#CCE64F" />
          <stop offset="0.72" stopColor="#6AC661" />
          <stop offset={1} stopColor="#31B46C" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_4995_86464"
          x1="1488.88"
          y1="10.1984"
          x2="1002.58"
          y2="507.198"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.22" stopColor="#CCE64F" />
          <stop offset="0.72" stopColor="#6AC661" />
          <stop offset={1} stopColor="#31B46C" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_4995_86464"
          x1="1321.56"
          y1="315.571"
          x2="709.491"
          y2="941.081"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.11" stopColor="#CCE64F" />
          <stop offset="0.35" stopColor="#6AC661" />
          <stop offset="0.49" stopColor="#31B46C" />
          <stop offset={1} stopColor="#0F3F5F" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_4995_86464"
          x1="876.103"
          y1="949.004"
          x2="1353.06"
          y2="461.566"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.22" stopColor="#CCE64F" />
          <stop offset="0.72" stopColor="#6AC661" />
          <stop offset={1} stopColor="#31B46C" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_4995_86464"
          x1="257.575"
          y1="396.865"
          x2="124.119"
          y2="533.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F348" />
          <stop offset="0.22" stopColor="#CCE64F" />
          <stop offset="0.72" stopColor="#6AC661" />
          <stop offset={1} stopColor="#31B46C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const BgFeatures = () => {
  const iconDraw: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        scale: { type: "spring", duration: 0.5 },
        delay: custom,
      },
    }),
  };
  return (
    <motion.svg
      className="hidden md:block"
      initial="hidden"
      whileInView="visible"
      viewBox="0 0 1093 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135552">
        <g id="Group 1410135450">
          <path
            id="Vector 96 (Stroke)"
            d="M1093 253.646V591.846H993V317.478L546.5 110.246L100 317.478V591.846H0V253.646L546.5 0L1093 253.646Z"
            fill="#DEFE66"
            fillOpacity="0.4"
          />
          <path
            id="Vector 97"
            d="M186 591.321V354.172L544 180.934L903.5 354.172V591.321"
            stroke="#DEFE66"
            strokeOpacity="0.49"
          />
          <path
            id="Rectangle 19347"
            d="M263 379.896L544.5 243.234L826 379.896V592.124H263V379.896Z"
            fill="#DEFE66"
            fillOpacity="0.52"
          />
          <path
            id="Subtract"
            d="M786 399.99V592.121H717.43L546 511.731L374.57 592.121H306V399.99L546 287.445L786 399.99Z"
            fill="url(#paint0_linear_4588_26060)"
          />
          <path
            id="Rectangle 19351"
            d="M439 464.306L544 414.465V510.128L439 559.969V464.306Z"
            fill="url(#paint1_linear_4588_26060)"
          />
          <path
            id="Rectangle 19352"
            d="M649 464.306L544 414.465V510.128L649 559.969V464.306Z"
            fill="url(#paint2_linear_4588_26060)"
          />
          <path
            id="Subtract_2"
            d="M723.548 592.123H370.82L546.5 508.117L723.548 592.123Z"
            fill="#758D1D"
          />
          <path
            id="Subtract_3"
            d="M649 555.543L578.23 592.122H505.75L439.5 558.759L545 504.496L649 555.543Z"
            fill="url(#paint3_linear_4588_26060)"
          />
        </g>
        <motion.g
          className="in-step1"
          id="Group 1410135547"
          variants={iconDraw}
          custom={0.3}
        >
          <g transform="translate(0 -0.875)">
            <path
              id="Polygon 8"
              d="M186.5 343L211.182 356.25V382.75L186.5 396L161.818 382.75V356.25L186.5 343Z"
              fill="#DEFE66"
            />
            <path
              id="1"
              d="M180.775 361.4V356.756H189.451V383H184.267V361.4H180.775Z"
              fill="#1A1A18"
            />
          </g>
        </motion.g>
        <motion.g id="Group 1410135548" variants={iconDraw} custom={0.5}>
          <g transform="translate(0 -0.875)">
            <path
              id="Polygon 5"
              d="M358.5 245L383.182 258.25V284.75L358.5 298L333.818 284.75V258.25L358.5 245Z"
              fill="#DEFE66"
            />
            <path
              id="2"
              d="M351.656 278.312C353.96 276.392 355.796 274.796 357.164 273.524C358.532 272.228 359.672 270.884 360.584 269.492C361.496 268.1 361.952 266.732 361.952 265.388C361.952 264.164 361.664 263.204 361.088 262.508C360.512 261.812 359.624 261.464 358.424 261.464C357.224 261.464 356.3 261.872 355.652 262.688C355.004 263.48 354.668 264.572 354.644 265.964H349.748C349.844 263.084 350.696 260.9 352.304 259.412C353.936 257.924 356 257.18 358.496 257.18C361.232 257.18 363.332 257.912 364.796 259.376C366.26 260.816 366.992 262.724 366.992 265.1C366.992 266.972 366.488 268.76 365.48 270.464C364.472 272.168 363.32 273.656 362.024 274.928C360.728 276.176 359.036 277.688 356.948 279.464H367.568V283.64H349.784V279.896L351.656 278.312Z"
              fill="#1A1A18"
            />
          </g>
        </motion.g>
        <motion.g id="Group 1410135549" variants={iconDraw} custom={0.7}>
          <g transform="translate(0 -0.875)">
            <path
              id="Polygon 4"
              d="M544.5 165L569.182 178.25V204.75L544.5 218L519.818 204.75V178.25L544.5 165Z"
              fill="#DEFE66"
            />
            <path
              id="3"
              d="M535.205 184.668C535.325 182.268 536.165 180.42 537.725 179.124C539.309 177.804 541.385 177.144 543.953 177.144C545.705 177.144 547.205 177.456 548.453 178.08C549.701 178.68 550.637 179.508 551.261 180.564C551.909 181.596 552.233 182.772 552.233 184.092C552.233 185.604 551.837 186.888 551.045 187.944C550.277 188.976 549.353 189.672 548.273 190.032V190.176C549.665 190.608 550.745 191.376 551.513 192.48C552.305 193.584 552.701 195 552.701 196.728C552.701 198.168 552.365 199.452 551.693 200.58C551.045 201.708 550.073 202.596 548.777 203.244C547.505 203.868 545.969 204.18 544.169 204.18C541.457 204.18 539.249 203.496 537.545 202.128C535.841 200.76 534.941 198.744 534.845 196.08H539.741C539.789 197.256 540.185 198.204 540.929 198.924C541.697 199.62 542.741 199.968 544.061 199.968C545.285 199.968 546.221 199.632 546.869 198.96C547.541 198.264 547.877 197.376 547.877 196.296C547.877 194.856 547.421 193.824 546.509 193.2C545.597 192.576 544.181 192.264 542.261 192.264H541.217V188.124H542.261C545.669 188.124 547.373 186.984 547.373 184.704C547.373 183.672 547.061 182.868 546.437 182.292C545.837 181.716 544.961 181.428 543.809 181.428C542.681 181.428 541.805 181.74 541.181 182.364C540.581 182.964 540.233 183.732 540.137 184.668H535.205Z"
              fill="#1A1A18"
            />
          </g>
        </motion.g>
        <motion.g id="Group 1410135550" variants={iconDraw} custom={0.9}>
          <g transform="translate(0 -0.875)">
            <path
              id="Polygon 6"
              d="M737.5 245L762.182 258.25V284.75L737.5 298L712.818 284.75V258.25L737.5 245Z"
              fill="#DEFE66"
            />
            <path
              id="4"
              d="M725.792 278.888V274.928L737.564 258.08H743.432V274.496H746.6V278.888H743.432V284H738.392V278.888H725.792ZM738.716 263.48L731.336 274.496H738.716V263.48Z"
              fill="#1A1A18"
            />
          </g>
        </motion.g>
        <motion.g id="Group 1410135551" variants={iconDraw} custom={1.1}>
          <g transform="translate(0 -0.875)">
            <path
              id="Polygon 7"
              d="M903.5 343L928.182 356.25V382.75L903.5 396L878.818 382.75V356.25L903.5 343Z"
              fill="#DEFE66"
            />
            <path
              id="5"
              d="M910.964 361.112H899.3V367.268C899.804 366.644 900.524 366.14 901.46 365.756C902.396 365.348 903.392 365.144 904.448 365.144C906.368 365.144 907.94 365.564 909.164 366.404C910.388 367.244 911.276 368.324 911.828 369.644C912.38 370.94 912.656 372.332 912.656 373.82C912.656 376.58 911.864 378.8 910.28 380.48C908.72 382.16 906.488 383 903.584 383C900.848 383 898.664 382.316 897.032 380.948C895.4 379.58 894.476 377.792 894.26 375.584H899.156C899.372 376.544 899.852 377.312 900.596 377.888C901.364 378.464 902.336 378.752 903.512 378.752C904.928 378.752 905.996 378.308 906.716 377.42C907.436 376.532 907.796 375.356 907.796 373.892C907.796 372.404 907.424 371.276 906.68 370.508C905.96 369.716 904.892 369.32 903.476 369.32C902.468 369.32 901.628 369.572 900.956 370.076C900.284 370.58 899.804 371.252 899.516 372.092H894.692V356.684H910.964V361.112Z"
              fill="#1A1A18"
            />
          </g>
        </motion.g>
        <path
          id="P&#195;&#161;gina de inicio"
          d="M408.677 408L396.485 393.072V408H389.765V374.496H396.485V389.52L408.677 374.496H416.789L402.965 391.104L417.173 408H408.677ZM446.313 394.128C446.313 395.088 446.249 395.952 446.121 396.72H426.681C426.841 398.64 427.513 400.144 428.697 401.232C429.881 402.32 431.337 402.864 433.065 402.864C435.561 402.864 437.337 401.792 438.393 399.648H445.641C444.873 402.208 443.401 404.32 441.225 405.984C439.049 407.616 436.377 408.432 433.209 408.432C430.649 408.432 428.345 407.872 426.297 406.752C424.281 405.6 422.697 403.984 421.545 401.904C420.425 399.824 419.865 397.424 419.865 394.704C419.865 391.952 420.425 389.536 421.545 387.456C422.665 385.376 424.233 383.776 426.249 382.656C428.265 381.536 430.585 380.976 433.209 380.976C435.737 380.976 437.993 381.52 439.977 382.608C441.993 383.696 443.545 385.248 444.633 387.264C445.753 389.248 446.313 391.536 446.313 394.128ZM439.353 392.208C439.321 390.48 438.697 389.104 437.481 388.08C436.265 387.024 434.777 386.496 433.017 386.496C431.353 386.496 429.945 387.008 428.793 388.032C427.673 389.024 426.985 390.416 426.729 392.208H439.353ZM476.658 381.408L460.194 420.576H453.042L458.802 407.328L448.146 381.408H455.682L462.546 399.984L469.506 381.408H476.658ZM512.406 374.496V379.92H498.438V388.512H509.142V393.84H498.438V408H491.718V374.496H512.406ZM541.891 394.128C541.891 395.088 541.827 395.952 541.699 396.72H522.259C522.419 398.64 523.091 400.144 524.275 401.232C525.459 402.32 526.915 402.864 528.643 402.864C531.139 402.864 532.915 401.792 533.971 399.648H541.219C540.451 402.208 538.979 404.32 536.803 405.984C534.627 407.616 531.955 408.432 528.787 408.432C526.227 408.432 523.923 407.872 521.875 406.752C519.859 405.6 518.275 403.984 517.123 401.904C516.003 399.824 515.443 397.424 515.443 394.704C515.443 391.952 516.003 389.536 517.123 387.456C518.243 385.376 519.811 383.776 521.827 382.656C523.843 381.536 526.163 380.976 528.787 380.976C531.315 380.976 533.571 381.52 535.555 382.608C537.571 383.696 539.123 385.248 540.211 387.264C541.331 389.248 541.891 391.536 541.891 394.128ZM534.931 392.208C534.899 390.48 534.275 389.104 533.059 388.08C531.843 387.024 530.355 386.496 528.595 386.496C526.931 386.496 525.523 387.008 524.371 388.032C523.251 389.024 522.563 390.416 522.307 392.208H534.931ZM545.068 394.608C545.068 391.92 545.596 389.536 546.652 387.456C547.74 385.376 549.196 383.776 551.02 382.656C552.876 381.536 554.94 380.976 557.212 380.976C559.196 380.976 560.924 381.376 562.396 382.176C563.9 382.976 565.1 383.984 565.996 385.2V381.408H572.764V408H565.996V404.112C565.132 405.36 563.932 406.4 562.396 407.232C560.892 408.032 559.148 408.432 557.164 408.432C554.924 408.432 552.876 407.856 551.02 406.704C549.196 405.552 547.74 403.936 546.652 401.856C545.596 399.744 545.068 397.328 545.068 394.608ZM565.996 394.704C565.996 393.072 565.676 391.68 565.036 390.528C564.396 389.344 563.532 388.448 562.444 387.84C561.356 387.2 560.188 386.88 558.94 386.88C557.692 386.88 556.54 387.184 555.484 387.792C554.428 388.4 553.564 389.296 552.892 390.48C552.252 391.632 551.932 393.008 551.932 394.608C551.932 396.208 552.252 397.616 552.892 398.832C553.564 400.016 554.428 400.928 555.484 401.568C556.572 402.208 557.724 402.528 558.94 402.528C560.188 402.528 561.356 402.224 562.444 401.616C563.532 400.976 564.396 400.08 565.036 398.928C565.676 397.744 565.996 396.336 565.996 394.704ZM587.152 386.928V399.792C587.152 400.688 587.36 401.344 587.776 401.76C588.224 402.144 588.96 402.336 589.984 402.336H593.104V408H588.88C583.216 408 580.384 405.248 580.384 399.744V386.928H577.216V381.408H580.384V374.832H587.152V381.408H593.104V386.928H587.152ZM623.041 381.408V408H616.273V404.64C615.409 405.792 614.273 406.704 612.865 407.376C611.489 408.016 609.985 408.336 608.353 408.336C606.273 408.336 604.433 407.904 602.833 407.04C601.233 406.144 599.969 404.848 599.041 403.152C598.145 401.424 597.697 399.376 597.697 397.008V381.408H604.417V396.048C604.417 398.16 604.945 399.792 606.001 400.944C607.057 402.064 608.497 402.624 610.321 402.624C612.177 402.624 613.633 402.064 614.689 400.944C615.745 399.792 616.273 398.16 616.273 396.048V381.408H623.041ZM636.391 385.536C637.255 384.128 638.375 383.024 639.751 382.224C641.159 381.424 642.759 381.024 644.551 381.024V388.08H642.775C640.663 388.08 639.063 388.576 637.975 389.568C636.919 390.56 636.391 392.288 636.391 394.752V408H629.671V381.408H636.391V385.536ZM673.798 394.128C673.798 395.088 673.734 395.952 673.606 396.72H654.166C654.326 398.64 654.998 400.144 656.182 401.232C657.366 402.32 658.822 402.864 660.55 402.864C663.046 402.864 664.822 401.792 665.878 399.648H673.126C672.358 402.208 670.886 404.32 668.71 405.984C666.534 407.616 663.862 408.432 660.694 408.432C658.134 408.432 655.83 407.872 653.782 406.752C651.766 405.6 650.182 403.984 649.03 401.904C647.91 399.824 647.35 397.424 647.35 394.704C647.35 391.952 647.91 389.536 649.03 387.456C650.15 385.376 651.718 383.776 653.734 382.656C655.75 381.536 658.07 380.976 660.694 380.976C663.222 380.976 665.478 381.52 667.462 382.608C669.478 383.696 671.03 385.248 672.118 387.264C673.238 389.248 673.798 391.536 673.798 394.128ZM666.838 392.208C666.806 390.48 666.182 389.104 664.966 388.08C663.75 387.024 662.262 386.496 660.502 386.496C658.838 386.496 657.43 387.008 656.278 388.032C655.158 389.024 654.47 390.416 654.214 392.208H666.838ZM688.879 408.432C686.703 408.432 684.751 408.048 683.023 407.28C681.295 406.48 679.919 405.408 678.895 404.064C677.903 402.72 677.359 401.232 677.263 399.6H684.031C684.159 400.624 684.655 401.472 685.519 402.144C686.415 402.816 687.519 403.152 688.831 403.152C690.111 403.152 691.103 402.896 691.807 402.384C692.543 401.872 692.911 401.216 692.911 400.416C692.911 399.552 692.463 398.912 691.567 398.496C690.703 398.048 689.311 397.568 687.391 397.056C685.407 396.576 683.775 396.08 682.495 395.568C681.247 395.056 680.159 394.272 679.231 393.216C678.335 392.16 677.887 390.736 677.887 388.944C677.887 387.472 678.303 386.128 679.135 384.912C679.999 383.696 681.215 382.736 682.783 382.032C684.383 381.328 686.255 380.976 688.399 380.976C691.567 380.976 694.095 381.776 695.983 383.376C697.871 384.944 698.911 387.072 699.103 389.76H692.671C692.575 388.704 692.127 387.872 691.327 387.264C690.559 386.624 689.519 386.304 688.207 386.304C686.991 386.304 686.047 386.528 685.375 386.976C684.735 387.424 684.415 388.048 684.415 388.848C684.415 389.744 684.863 390.432 685.759 390.912C686.655 391.36 688.047 391.824 689.935 392.304C691.855 392.784 693.439 393.28 694.687 393.792C695.935 394.304 697.007 395.104 697.903 396.192C698.831 397.248 699.311 398.656 699.343 400.416C699.343 401.952 698.911 403.328 698.047 404.544C697.215 405.76 695.999 406.72 694.399 407.424C692.831 408.096 690.991 408.432 688.879 408.432Z"
          fill="#1A1A18"
          transform="translate(0 -0.875)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4588_26060"
          x1="725.5"
          y1="730.125"
          x2="775.71"
          y2="321.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#686866" />
          <stop offset={1} stopColor="#C9FF00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4588_26060"
          x1="491.5"
          y1="414.465"
          x2="491.5"
          y2="559.969"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#75872F" />
          <stop offset={1} stopColor="#B1DA19" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4588_26060"
          x1="596.5"
          y1="414.465"
          x2="596.5"
          y2="559.969"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BDEA18" />
          <stop offset={1} stopColor="#90AA2E" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4588_26060"
          x1="586.179"
          y1="622.883"
          x2="616.222"
          y2="513.316"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A0C613" />
          <stop offset={1} stopColor="#686866" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

const IntegrationItem = () => {
  return (
    <svg
      className="mt-[20px] md:mt-[26px]"
      viewBox="0 0 1000 279"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Mask group">
        <mask
          id="mask0_4588_26242"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={1000}
          height={279}
        >
          <g id="Rectangle 19365">
            <rect width={1000} height={279} rx={40} fill="black" />
            <rect width={1000} height={279} rx={40} fill="black" />
          </g>
        </mask>
        <g mask="url(#mask0_4588_26242)">
          <foreignObject x={-54} y={-42} width={1106} height={378}>
            <div
              style={{
                backdropFilter: "blur(20px)",
                clipPath: "url(#bgblur_0_4588_26242_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g id="Rectangle 19366" data-figma-bg-blur-radius={40}>
            <rect
              x={-13}
              y={-1}
              width={1024}
              height={296}
              rx={40}
              fill="#22251C"
            />
            <rect
              x="-13.5"
              y="-1.5"
              width={1025}
              height={297}
              rx="40.5"
              stroke="white"
              strokeOpacity="0.3"
            />
          </g>
          <g id="Group 1410135522">
            <path
              id="Vector 98"
              d="M-56 98H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 110"
              d="M144 -76L144 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 122"
              d="M372 -44L372 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 134"
              d="M600 -44L600 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 146"
              d="M825 -44L825 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 158"
              d="M958 -44L958 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 102"
              d="M-56 174H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 111"
              d="M68 -76L68 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 123"
              d="M296 -44L296 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 135"
              d="M524 -44L524 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 147"
              d="M749 -44L749 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 106"
              d="M-56 22H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 112"
              d="M220 -76L220 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 124"
              d="M448 -44L448 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 136"
              d="M676 -44L676 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 148"
              d="M901 -44L901 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 99"
              d="M-56 117H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 113"
              d="M125 -76L125 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 125"
              d="M353 -44L353 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 137"
              d="M581 -44L581 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 149"
              d="M806 -44L806 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 160"
              d="M939 -44L939 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 103"
              d="M-56 193H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 114"
              d="M49 -76L49 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 126"
              d="M277 -44L277 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 138"
              d="M505 -44L505 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 150"
              d="M730 -44L730 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 107"
              d="M-56 41H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 115"
              d="M201 -76L201 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 127"
              d="M429 -44L429 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 139"
              d="M657 -44L657 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 151"
              d="M882 -44L882 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 100"
              d="M-56 136H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 116"
              d="M106 -76L106 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 128"
              d="M334 -44L334 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 140"
              d="M562 -44L562 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 152"
              d="M787 -44L787 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 162"
              d="M920 -44L920 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 104"
              d="M-56 212H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 117"
              d="M30 -76L30 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 129"
              d="M258 -44L258 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 141"
              d="M486 -44L486 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 153"
              d="M711 -44L711 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 108"
              d="M-56 60H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 118"
              d="M182 -76L182 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 130"
              d="M410 -44L410 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 142"
              d="M638 -44L638 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 154"
              d="M863 -44L863 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 101"
              d="M-56 155H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 119"
              d="M87 -76L87 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 131"
              d="M315 -44L315 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 143"
              d="M543 -44L543 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 155"
              d="M768 -44L768 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 105"
              d="M-56 231H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 120"
              d="M11 -76L11 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 132"
              d="M239 -44L239 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 144"
              d="M467 -44L467 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 156"
              d="M692 -44L692 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 109"
              d="M-56 79H1106.5"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 121"
              d="M163 -76L163 292"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 133"
              d="M391 -44L391 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 145"
              d="M619 -44L619 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 157"
              d="M844 -44L844 324"
              stroke="white"
              strokeOpacity="0.07"
            />
            <path
              id="Vector 164"
              d="M977 -44L977 324"
              stroke="white"
              strokeOpacity="0.07"
            />
          </g>
          <g id="Mask group_2">
            <g id="Group 1410135521">
              <g id="Group 1410135520">
                <g id="Rectangle 591" filter="url(#filter1_d_4588_26242)">
                  <rect
                    x={447}
                    y={42}
                    width="512.952"
                    height="351.655"
                    rx={40}
                    fill="#272E36"
                  />
                  <rect
                    x="447.5"
                    y="42.5"
                    width="511.952"
                    height="350.655"
                    rx="39.5"
                    stroke="url(#paint0_linear_4588_26242)"
                  />
                </g>
                <circle
                  id="Ellipse 203"
                  cx="468.797"
                  cy="63.7969"
                  r="3.85936"
                  fill="url(#paint1_linear_4588_26242)"
                  stroke="url(#paint2_linear_4588_26242)"
                />
                <circle
                  id="Ellipse 204"
                  cx="486.23"
                  cy="63.7969"
                  r="3.85936"
                  fill="url(#paint3_linear_4588_26242)"
                  stroke="url(#paint4_linear_4588_26242)"
                />
                <circle
                  id="Ellipse 205"
                  cx="503.676"
                  cy="63.7969"
                  r="3.85936"
                  fill="url(#paint5_linear_4588_26242)"
                  stroke="url(#paint6_linear_4588_26242)"
                />
              </g>
              <g id="Rectangle 591_2" filter="url(#filter2_d_4588_26242)">
                <rect
                  x={462}
                  y={82}
                  width={484}
                  height={295}
                  rx={40}
                  fill="#121A23"
                  fillOpacity="0.57"
                  shapeRendering="crispEdges"
                />
              </g>
              <g id='{ "realName": "Vellpay", "amount": "10. 00", "phone": "1000000000", "sign": "YOUR_SIGN", "callbackUrl": "https://www.callbackexample.com", "merchantOrderNo": "OrderNoExample", "email": "Vellpay@example.com", "paymentType": 1 }'>
                <path
                  d="M495.118 113.774C496.028 113.566 496.483 113.059 496.483 112.253C496.483 111.854 496.435 111.3 496.34 110.589C496.331 110.511 496.305 110.273 496.262 109.874C496.219 109.467 496.197 109.094 496.197 108.756C496.197 108.132 496.366 107.664 496.704 107.352C497.042 107.031 497.501 106.871 498.082 106.871H498.732V107.664H498.238C497.857 107.664 497.566 107.755 497.367 107.937C497.176 108.119 497.081 108.414 497.081 108.821C497.081 109.124 497.103 109.471 497.146 109.861C497.189 110.242 497.215 110.476 497.224 110.563C497.319 111.291 497.367 111.863 497.367 112.279C497.367 112.756 497.246 113.159 497.003 113.488C496.769 113.809 496.405 114.025 495.911 114.138V114.164C496.405 114.277 496.769 114.498 497.003 114.827C497.246 115.148 497.367 115.546 497.367 116.023C497.367 116.43 497.319 116.998 497.224 117.726C497.215 117.821 497.189 118.064 497.146 118.454C497.103 118.835 497.081 119.178 497.081 119.481C497.081 119.888 497.176 120.183 497.367 120.365C497.566 120.547 497.857 120.638 498.238 120.638H498.732V121.431H498.082C497.501 121.431 497.042 121.271 496.704 120.95C496.366 120.638 496.197 120.17 496.197 119.546C496.197 119.208 496.219 118.84 496.262 118.441C496.305 118.034 496.331 117.787 496.34 117.7C496.435 116.981 496.483 116.43 496.483 116.049C496.483 115.243 496.028 114.732 495.118 114.515V113.774ZM578.525 144.065C578.334 144.065 578.174 144 578.044 143.87C577.922 143.74 577.862 143.58 577.862 143.389C577.862 143.198 577.922 143.042 578.044 142.921C578.174 142.791 578.334 142.726 578.525 142.726C578.707 142.726 578.858 142.791 578.98 142.921C579.11 143.042 579.175 143.198 579.175 143.389C579.175 143.58 579.11 143.74 578.98 143.87C578.858 144 578.707 144.065 578.525 144.065ZM578.525 138.41C578.334 138.41 578.174 138.345 578.044 138.215C577.922 138.085 577.862 137.925 577.862 137.734C577.862 137.543 577.922 137.387 578.044 137.266C578.174 137.136 578.334 137.071 578.525 137.071C578.707 137.071 578.858 137.136 578.98 137.266C579.11 137.387 579.175 137.543 579.175 137.734C579.175 137.925 579.11 138.085 578.98 138.215C578.858 138.345 578.707 138.41 578.525 138.41ZM584.473 133.665L584.343 136.174H583.706L583.576 133.665H584.473ZM586.033 133.665L585.916 136.174H585.279L585.136 133.665H586.033ZM634.328 133.665L634.198 136.174H633.561L633.431 133.665H634.328ZM635.888 133.665L635.771 136.174H635.134L634.991 133.665H635.888ZM638.149 142.492L636.797 145.898H636.173L637.135 142.492H638.149ZM566.613 169.065C566.423 169.065 566.262 169 566.132 168.87C566.011 168.74 565.95 168.58 565.95 168.389C565.95 168.198 566.011 168.042 566.132 167.921C566.262 167.791 566.423 167.726 566.613 167.726C566.795 167.726 566.947 167.791 567.068 167.921C567.198 168.042 567.263 168.198 567.263 168.389C567.263 168.58 567.198 168.74 567.068 168.87C566.947 169 566.795 169.065 566.613 169.065ZM566.613 163.41C566.423 163.41 566.262 163.345 566.132 163.215C566.011 163.085 565.95 162.925 565.95 162.734C565.95 162.543 566.011 162.387 566.132 162.266C566.262 162.136 566.423 162.071 566.613 162.071C566.795 162.071 566.947 162.136 567.068 162.266C567.198 162.387 567.263 162.543 567.263 162.734C567.263 162.925 567.198 163.085 567.068 163.215C566.947 163.345 566.795 163.41 566.613 163.41ZM572.562 158.665L572.432 161.174H571.795L571.665 158.665H572.562ZM574.122 158.665L574.005 161.174H573.368L573.225 158.665H574.122ZM574.915 160.498V159.679H577.125V169H576.202V160.498H574.915ZM579.053 164.255C579.053 162.764 579.282 161.607 579.742 160.784C580.201 159.961 581.024 159.549 582.212 159.549C583.399 159.549 584.222 159.961 584.682 160.784C585.141 161.607 585.371 162.764 585.371 164.255C585.371 165.772 585.141 166.946 584.682 167.778C584.222 168.61 583.399 169.026 582.212 169.026C581.016 169.026 580.188 168.61 579.729 167.778C579.278 166.946 579.053 165.772 579.053 164.255ZM584.474 164.255C584.474 163.449 584.417 162.769 584.305 162.214C584.192 161.659 583.971 161.213 583.642 160.875C583.312 160.537 582.836 160.368 582.212 160.368C581.588 160.368 581.111 160.537 580.782 160.875C580.452 161.213 580.231 161.659 580.119 162.214C580.006 162.769 579.95 163.449 579.95 164.255C579.95 165.087 580.006 165.785 580.119 166.348C580.231 166.903 580.452 167.349 580.782 167.687C581.111 168.025 581.588 168.194 582.212 168.194C582.836 168.194 583.312 168.025 583.642 167.687C583.971 167.349 584.192 166.903 584.305 166.348C584.417 165.785 584.474 165.087 584.474 164.255ZM587.314 169.065C587.124 169.065 586.963 169 586.833 168.87C586.712 168.74 586.651 168.58 586.651 168.389C586.651 168.198 586.712 168.042 586.833 167.921C586.963 167.791 587.124 167.726 587.314 167.726C587.496 167.726 587.648 167.791 587.769 167.921C587.899 168.042 587.964 168.198 587.964 168.389C587.964 168.58 587.899 168.74 587.769 168.87C587.648 169 587.496 169.065 587.314 169.065ZM592.692 164.255C592.692 162.764 592.922 161.607 593.381 160.784C593.84 159.961 594.664 159.549 595.851 159.549C597.038 159.549 597.862 159.961 598.321 160.784C598.78 161.607 599.01 162.764 599.01 164.255C599.01 165.772 598.78 166.946 598.321 167.778C597.862 168.61 597.038 169.026 595.851 169.026C594.655 169.026 593.827 168.61 593.368 167.778C592.917 166.946 592.692 165.772 592.692 164.255ZM598.113 164.255C598.113 163.449 598.057 162.769 597.944 162.214C597.831 161.659 597.61 161.213 597.281 160.875C596.952 160.537 596.475 160.368 595.851 160.368C595.227 160.368 594.75 160.537 594.421 160.875C594.092 161.213 593.871 161.659 593.758 162.214C593.645 162.769 593.589 163.449 593.589 164.255C593.589 165.087 593.645 165.785 593.758 166.348C593.871 166.903 594.092 167.349 594.421 167.687C594.75 168.025 595.227 168.194 595.851 168.194C596.475 168.194 596.952 168.025 597.281 167.687C597.61 167.349 597.831 166.903 597.944 166.348C598.057 165.785 598.113 165.087 598.113 164.255ZM600.603 164.255C600.603 162.764 600.832 161.607 601.292 160.784C601.751 159.961 602.574 159.549 603.762 159.549C604.949 159.549 605.772 159.961 606.232 160.784C606.691 161.607 606.921 162.764 606.921 164.255C606.921 165.772 606.691 166.946 606.232 167.778C605.772 168.61 604.949 169.026 603.762 169.026C602.566 169.026 601.738 168.61 601.279 167.778C600.828 166.946 600.603 165.772 600.603 164.255ZM606.024 164.255C606.024 163.449 605.967 162.769 605.855 162.214C605.742 161.659 605.521 161.213 605.192 160.875C604.862 160.537 604.386 160.368 603.762 160.368C603.138 160.368 602.661 160.537 602.332 160.875C602.002 161.213 601.781 161.659 601.669 162.214C601.556 162.769 601.5 163.449 601.5 164.255C601.5 165.087 601.556 165.785 601.669 166.348C601.781 166.903 602.002 167.349 602.332 167.687C602.661 168.025 603.138 168.194 603.762 168.194C604.386 168.194 604.862 168.025 605.192 167.687C605.521 167.349 605.742 166.903 605.855 166.348C605.967 165.785 606.024 165.087 606.024 164.255ZM609.047 158.665L608.917 161.174H608.28L608.15 158.665H609.047ZM610.607 158.665L610.49 161.174H609.853L609.71 158.665H610.607ZM612.868 167.492L611.516 170.898H610.892L611.854 167.492H612.868ZM562.823 183.665L562.693 186.174H562.056L561.926 183.665H562.823ZM564.383 183.665L564.266 186.174H563.629L563.486 183.665H564.383ZM565.176 185.498V184.679H567.386V194H566.463V185.498H565.176ZM569.314 189.255C569.314 187.764 569.543 186.607 570.003 185.784C570.462 184.961 571.285 184.549 572.473 184.549C573.66 184.549 574.483 184.961 574.943 185.784C575.402 186.607 575.632 187.764 575.632 189.255C575.632 190.772 575.402 191.946 574.943 192.778C574.483 193.61 573.66 194.026 572.473 194.026C571.277 194.026 570.449 193.61 569.99 192.778C569.539 191.946 569.314 190.772 569.314 189.255ZM574.735 189.255C574.735 188.449 574.678 187.769 574.566 187.214C574.453 186.659 574.232 186.213 573.903 185.875C573.573 185.537 573.097 185.368 572.473 185.368C571.849 185.368 571.372 185.537 571.043 185.875C570.713 186.213 570.492 186.659 570.38 187.214C570.267 187.769 570.211 188.449 570.211 189.255C570.211 190.087 570.267 190.785 570.38 191.348C570.492 191.903 570.713 192.349 571.043 192.687C571.372 193.025 571.849 193.194 572.473 193.194C573.097 193.194 573.573 193.025 573.903 192.687C574.232 192.349 574.453 191.903 574.566 191.348C574.678 190.785 574.735 190.087 574.735 189.255ZM577.224 189.255C577.224 187.764 577.454 186.607 577.913 185.784C578.373 184.961 579.196 184.549 580.383 184.549C581.571 184.549 582.394 184.961 582.853 185.784C583.313 186.607 583.542 187.764 583.542 189.255C583.542 190.772 583.313 191.946 582.853 192.778C582.394 193.61 581.571 194.026 580.383 194.026C579.187 194.026 578.36 193.61 577.9 192.778C577.45 191.946 577.224 190.772 577.224 189.255ZM582.645 189.255C582.645 188.449 582.589 187.769 582.476 187.214C582.364 186.659 582.143 186.213 581.813 185.875C581.484 185.537 581.007 185.368 580.383 185.368C579.759 185.368 579.283 185.537 578.953 185.875C578.624 186.213 578.403 186.659 578.29 187.214C578.178 187.769 578.121 188.449 578.121 189.255C578.121 190.087 578.178 190.785 578.29 191.348C578.403 191.903 578.624 192.349 578.953 192.687C579.283 193.025 579.759 193.194 580.383 193.194C581.007 193.194 581.484 193.025 581.813 192.687C582.143 192.349 582.364 191.903 582.476 191.348C582.589 190.785 582.645 190.087 582.645 189.255ZM585.135 189.255C585.135 187.764 585.365 186.607 585.824 185.784C586.284 184.961 587.107 184.549 588.294 184.549C589.482 184.549 590.305 184.961 590.764 185.784C591.224 186.607 591.453 187.764 591.453 189.255C591.453 190.772 591.224 191.946 590.764 192.778C590.305 193.61 589.482 194.026 588.294 194.026C587.098 194.026 586.271 193.61 585.811 192.778C585.361 191.946 585.135 190.772 585.135 189.255ZM590.556 189.255C590.556 188.449 590.5 187.769 590.387 187.214C590.275 186.659 590.054 186.213 589.724 185.875C589.395 185.537 588.918 185.368 588.294 185.368C587.67 185.368 587.194 185.537 586.864 185.875C586.535 186.213 586.314 186.659 586.201 187.214C586.089 187.769 586.032 188.449 586.032 189.255C586.032 190.087 586.089 190.785 586.201 191.348C586.314 191.903 586.535 192.349 586.864 192.687C587.194 193.025 587.67 193.194 588.294 193.194C588.918 193.194 589.395 193.025 589.724 192.687C590.054 192.349 590.275 191.903 590.387 191.348C590.5 190.785 590.556 190.087 590.556 189.255ZM593.046 189.255C593.046 187.764 593.276 186.607 593.735 185.784C594.194 184.961 595.018 184.549 596.205 184.549C597.392 184.549 598.216 184.961 598.675 185.784C599.134 186.607 599.364 187.764 599.364 189.255C599.364 190.772 599.134 191.946 598.675 192.778C598.216 193.61 597.392 194.026 596.205 194.026C595.009 194.026 594.181 193.61 593.722 192.778C593.271 191.946 593.046 190.772 593.046 189.255ZM598.467 189.255C598.467 188.449 598.411 187.769 598.298 187.214C598.185 186.659 597.964 186.213 597.635 185.875C597.306 185.537 596.829 185.368 596.205 185.368C595.581 185.368 595.104 185.537 594.775 185.875C594.446 186.213 594.225 186.659 594.112 187.214C593.999 187.769 593.943 188.449 593.943 189.255C593.943 190.087 593.999 190.785 594.112 191.348C594.225 191.903 594.446 192.349 594.775 192.687C595.104 193.025 595.581 193.194 596.205 193.194C596.829 193.194 597.306 193.025 597.635 192.687C597.964 192.349 598.185 191.903 598.298 191.348C598.411 190.785 598.467 190.087 598.467 189.255ZM600.957 189.255C600.957 187.764 601.186 186.607 601.646 185.784C602.105 184.961 602.928 184.549 604.116 184.549C605.303 184.549 606.126 184.961 606.586 185.784C607.045 186.607 607.275 187.764 607.275 189.255C607.275 190.772 607.045 191.946 606.586 192.778C606.126 193.61 605.303 194.026 604.116 194.026C602.92 194.026 602.092 193.61 601.633 192.778C601.182 191.946 600.957 190.772 600.957 189.255ZM606.378 189.255C606.378 188.449 606.321 187.769 606.209 187.214C606.096 186.659 605.875 186.213 605.546 185.875C605.216 185.537 604.74 185.368 604.116 185.368C603.492 185.368 603.015 185.537 602.686 185.875C602.356 186.213 602.135 186.659 602.023 187.214C601.91 187.769 601.854 188.449 601.854 189.255C601.854 190.087 601.91 190.785 602.023 191.348C602.135 191.903 602.356 192.349 602.686 192.687C603.015 193.025 603.492 193.194 604.116 193.194C604.74 193.194 605.216 193.025 605.546 192.687C605.875 192.349 606.096 191.903 606.209 191.348C606.321 190.785 606.378 190.087 606.378 189.255ZM608.867 189.255C608.867 187.764 609.097 186.607 609.556 185.784C610.016 184.961 610.839 184.549 612.026 184.549C613.214 184.549 614.037 184.961 614.496 185.784C614.956 186.607 615.185 187.764 615.185 189.255C615.185 190.772 614.956 191.946 614.496 192.778C614.037 193.61 613.214 194.026 612.026 194.026C610.83 194.026 610.003 193.61 609.543 192.778C609.093 191.946 608.867 190.772 608.867 189.255ZM614.288 189.255C614.288 188.449 614.232 187.769 614.119 187.214C614.007 186.659 613.786 186.213 613.456 185.875C613.127 185.537 612.65 185.368 612.026 185.368C611.402 185.368 610.926 185.537 610.596 185.875C610.267 186.213 610.046 186.659 609.933 187.214C609.821 187.769 609.764 188.449 609.764 189.255C609.764 190.087 609.821 190.785 609.933 191.348C610.046 191.903 610.267 192.349 610.596 192.687C610.926 193.025 611.402 193.194 612.026 193.194C612.65 193.194 613.127 193.025 613.456 192.687C613.786 192.349 614.007 191.903 614.119 191.348C614.232 190.785 614.288 190.087 614.288 189.255ZM616.778 189.255C616.778 187.764 617.008 186.607 617.467 185.784C617.927 184.961 618.75 184.549 619.937 184.549C621.125 184.549 621.948 184.961 622.407 185.784C622.867 186.607 623.096 187.764 623.096 189.255C623.096 190.772 622.867 191.946 622.407 192.778C621.948 193.61 621.125 194.026 619.937 194.026C618.741 194.026 617.914 193.61 617.454 192.778C617.004 191.946 616.778 190.772 616.778 189.255ZM622.199 189.255C622.199 188.449 622.143 187.769 622.03 187.214C621.918 186.659 621.697 186.213 621.367 185.875C621.038 185.537 620.561 185.368 619.937 185.368C619.313 185.368 618.837 185.537 618.507 185.875C618.178 186.213 617.957 186.659 617.844 187.214C617.732 187.769 617.675 188.449 617.675 189.255C617.675 190.087 617.732 190.785 617.844 191.348C617.957 191.903 618.178 192.349 618.507 192.687C618.837 193.025 619.313 193.194 619.937 193.194C620.561 193.194 621.038 193.025 621.367 192.687C621.697 192.349 621.918 191.903 622.03 191.348C622.143 190.785 622.199 190.087 622.199 189.255ZM624.689 189.255C624.689 187.764 624.919 186.607 625.378 185.784C625.837 184.961 626.661 184.549 627.848 184.549C629.035 184.549 629.859 184.961 630.318 185.784C630.777 186.607 631.007 187.764 631.007 189.255C631.007 190.772 630.777 191.946 630.318 192.778C629.859 193.61 629.035 194.026 627.848 194.026C626.652 194.026 625.824 193.61 625.365 192.778C624.914 191.946 624.689 190.772 624.689 189.255ZM630.11 189.255C630.11 188.449 630.054 187.769 629.941 187.214C629.828 186.659 629.607 186.213 629.278 185.875C628.949 185.537 628.472 185.368 627.848 185.368C627.224 185.368 626.747 185.537 626.418 185.875C626.089 186.213 625.868 186.659 625.755 187.214C625.642 187.769 625.586 188.449 625.586 189.255C625.586 190.087 625.642 190.785 625.755 191.348C625.868 191.903 626.089 192.349 626.418 192.687C626.747 193.025 627.224 193.194 627.848 193.194C628.472 193.194 628.949 193.025 629.278 192.687C629.607 192.349 629.828 191.903 629.941 191.348C630.054 190.785 630.11 190.087 630.11 189.255ZM632.6 189.255C632.6 187.764 632.829 186.607 633.289 185.784C633.748 184.961 634.571 184.549 635.759 184.549C636.946 184.549 637.769 184.961 638.229 185.784C638.688 186.607 638.918 187.764 638.918 189.255C638.918 190.772 638.688 191.946 638.229 192.778C637.769 193.61 636.946 194.026 635.759 194.026C634.563 194.026 633.735 193.61 633.276 192.778C632.825 191.946 632.6 190.772 632.6 189.255ZM638.021 189.255C638.021 188.449 637.964 187.769 637.852 187.214C637.739 186.659 637.518 186.213 637.189 185.875C636.859 185.537 636.383 185.368 635.759 185.368C635.135 185.368 634.658 185.537 634.329 185.875C633.999 186.213 633.778 186.659 633.666 187.214C633.553 187.769 633.497 188.449 633.497 189.255C633.497 190.087 633.553 190.785 633.666 191.348C633.778 191.903 633.999 192.349 634.329 192.687C634.658 193.025 635.135 193.194 635.759 193.194C636.383 193.194 636.859 193.025 637.189 192.687C637.518 192.349 637.739 191.903 637.852 191.348C637.964 190.785 638.021 190.087 638.021 189.255ZM641.043 183.665L640.913 186.174H640.276L640.146 183.665H641.043ZM642.603 183.665L642.486 186.174H641.849L641.706 183.665H642.603ZM644.865 192.492L643.513 195.898H642.889L643.851 192.492H644.865ZM541.918 219.065C541.727 219.065 541.567 219 541.437 218.87C541.315 218.74 541.255 218.58 541.255 218.389C541.255 218.198 541.315 218.042 541.437 217.921C541.567 217.791 541.727 217.726 541.918 217.726C542.1 217.726 542.251 217.791 542.373 217.921C542.503 218.042 542.568 218.198 542.568 218.389C542.568 218.58 542.503 218.74 542.373 218.87C542.251 219 542.1 219.065 541.918 219.065ZM541.918 213.41C541.727 213.41 541.567 213.345 541.437 213.215C541.315 213.085 541.255 212.925 541.255 212.734C541.255 212.543 541.315 212.387 541.437 212.266C541.567 212.136 541.727 212.071 541.918 212.071C542.1 212.071 542.251 212.136 542.373 212.266C542.503 212.387 542.568 212.543 542.568 212.734C542.568 212.925 542.503 213.085 542.373 213.215C542.251 213.345 542.1 213.41 541.918 213.41ZM547.866 208.665L547.736 211.174H547.099L546.969 208.665H547.866ZM549.426 208.665L549.309 211.174H548.672L548.529 208.665H549.426ZM556.862 209.913L553.95 215.464V219H553.04V215.464L550.102 209.913H551.129L553.495 214.632L555.848 209.913H556.862ZM562.176 219.091C561.335 219.091 560.573 218.896 559.888 218.506C559.203 218.107 558.662 217.557 558.263 216.855C557.873 216.144 557.678 215.343 557.678 214.45C557.678 213.557 557.873 212.76 558.263 212.058C558.662 211.347 559.203 210.797 559.888 210.407C560.573 210.008 561.335 209.809 562.176 209.809C563.025 209.809 563.792 210.008 564.477 210.407C565.162 210.797 565.699 211.347 566.089 212.058C566.479 212.76 566.674 213.557 566.674 214.45C566.674 215.343 566.479 216.144 566.089 216.855C565.699 217.557 565.162 218.107 564.477 218.506C563.792 218.896 563.025 219.091 562.176 219.091ZM562.176 218.298C562.852 218.298 563.459 218.142 563.996 217.83C564.533 217.518 564.958 217.072 565.27 216.491C565.582 215.902 565.738 215.221 565.738 214.45C565.738 213.679 565.582 213.003 565.27 212.422C564.958 211.841 564.533 211.395 563.996 211.083C563.459 210.771 562.852 210.615 562.176 210.615C561.5 210.615 560.893 210.771 560.356 211.083C559.819 211.395 559.394 211.841 559.082 212.422C558.77 213.003 558.614 213.679 558.614 214.45C558.614 215.221 558.77 215.902 559.082 216.491C559.394 217.072 559.819 217.518 560.356 217.83C560.893 218.142 561.5 218.298 562.176 218.298ZM569.11 209.913V215.633C569.11 216.534 569.323 217.202 569.747 217.635C570.181 218.068 570.77 218.285 571.515 218.285C572.261 218.285 572.841 218.073 573.257 217.648C573.682 217.215 573.894 216.543 573.894 215.633V209.913H574.804V215.62C574.804 216.773 574.497 217.639 573.881 218.22C573.275 218.801 572.482 219.091 571.502 219.091C570.523 219.091 569.726 218.801 569.11 218.22C568.504 217.639 568.2 216.773 568.2 215.62V209.913H569.11ZM581.57 219L579.321 215.204H577.644V219H576.734V209.913H579.464C580.478 209.913 581.245 210.156 581.765 210.641C582.294 211.126 582.558 211.763 582.558 212.552C582.558 213.211 582.367 213.774 581.986 214.242C581.613 214.701 581.059 215 580.322 215.139L582.662 219H581.57ZM577.644 214.463H579.477C580.188 214.463 580.721 214.29 581.076 213.943C581.44 213.596 581.622 213.133 581.622 212.552C581.622 211.954 581.449 211.495 581.102 211.174C580.755 210.845 580.209 210.68 579.464 210.68H577.644V214.463ZM590.959 219.455V220.3H584.342V219.455H590.959ZM595.68 219.091C595.082 219.091 594.553 218.987 594.094 218.779C593.643 218.571 593.288 218.281 593.028 217.908C592.768 217.535 592.629 217.119 592.612 216.66H593.574C593.617 217.102 593.812 217.492 594.159 217.83C594.505 218.159 595.012 218.324 595.68 218.324C596.295 218.324 596.78 218.168 597.136 217.856C597.5 217.535 597.682 217.132 597.682 216.647C597.682 216.257 597.582 215.945 597.383 215.711C597.183 215.468 596.936 215.291 596.642 215.178C596.347 215.057 595.94 214.927 595.42 214.788C594.813 214.623 594.332 214.463 593.977 214.307C593.621 214.151 593.318 213.908 593.067 213.579C592.815 213.25 592.69 212.803 592.69 212.24C592.69 211.772 592.811 211.356 593.054 210.992C593.296 210.619 593.639 210.329 594.081 210.121C594.523 209.913 595.03 209.809 595.602 209.809C596.442 209.809 597.118 210.017 597.63 210.433C598.15 210.84 598.449 211.369 598.527 212.019H597.539C597.478 211.646 597.274 211.317 596.928 211.031C596.581 210.736 596.113 210.589 595.524 210.589C594.978 210.589 594.523 210.736 594.159 211.031C593.795 211.317 593.613 211.711 593.613 212.214C593.613 212.595 593.712 212.903 593.912 213.137C594.111 213.371 594.358 213.549 594.653 213.67C594.956 213.791 595.363 213.921 595.875 214.06C596.464 214.225 596.941 214.389 597.305 214.554C597.669 214.71 597.976 214.953 598.228 215.282C598.479 215.611 598.605 216.053 598.605 216.608C598.605 217.033 598.492 217.436 598.267 217.817C598.041 218.198 597.708 218.506 597.266 218.74C596.824 218.974 596.295 219.091 595.68 219.091ZM601.173 209.913V219H600.263V209.913H601.173ZM610.284 212.565C610.024 211.967 609.625 211.499 609.088 211.161C608.559 210.814 607.935 210.641 607.216 210.641C606.54 210.641 605.933 210.797 605.396 211.109C604.858 211.421 604.434 211.867 604.122 212.448C603.81 213.02 603.654 213.687 603.654 214.45C603.654 215.213 603.81 215.884 604.122 216.465C604.434 217.046 604.858 217.492 605.396 217.804C605.933 218.116 606.54 218.272 607.216 218.272C607.848 218.272 608.416 218.138 608.919 217.869C609.43 217.592 609.837 217.202 610.141 216.699C610.453 216.188 610.63 215.594 610.674 214.918H606.852V214.177H611.636V214.84C611.592 215.637 611.376 216.361 610.986 217.011C610.596 217.652 610.071 218.159 609.413 218.532C608.763 218.905 608.03 219.091 607.216 219.091C606.375 219.091 605.612 218.896 604.928 218.506C604.243 218.107 603.701 217.557 603.303 216.855C602.913 216.144 602.718 215.343 602.718 214.45C602.718 213.557 602.913 212.76 603.303 212.058C603.701 211.347 604.243 210.797 604.928 210.407C605.612 210.008 606.375 209.809 607.216 209.809C608.186 209.809 609.036 210.052 609.764 210.537C610.492 211.022 611.02 211.698 611.35 212.565H610.284ZM620.054 219H619.144L614.113 211.356V219H613.203V209.913H614.113L619.144 217.544V209.913H620.054V219ZM622.353 208.665L622.223 211.174H621.586L621.456 208.665H622.353ZM623.913 208.665L623.796 211.174H623.159L623.016 208.665H623.913ZM626.175 217.492L624.823 220.898H624.199L625.161 217.492H626.175ZM585.347 244.065C585.156 244.065 584.996 244 584.866 243.87C584.744 243.74 584.684 243.58 584.684 243.389C584.684 243.198 584.744 243.042 584.866 242.921C584.996 242.791 585.156 242.726 585.347 242.726C585.529 242.726 585.68 242.791 585.802 242.921C585.932 243.042 585.997 243.198 585.997 243.389C585.997 243.58 585.932 243.74 585.802 243.87C585.68 244 585.529 244.065 585.347 244.065ZM585.347 238.41C585.156 238.41 584.996 238.345 584.866 238.215C584.744 238.085 584.684 237.925 584.684 237.734C584.684 237.543 584.744 237.387 584.866 237.266C584.996 237.136 585.156 237.071 585.347 237.071C585.529 237.071 585.68 237.136 585.802 237.266C585.932 237.387 585.997 237.543 585.997 237.734C585.997 237.925 585.932 238.085 585.802 238.215C585.68 238.345 585.529 238.41 585.347 238.41ZM591.295 233.665L591.165 236.174H590.528L590.398 233.665H591.295ZM592.855 233.665L592.738 236.174H592.101L591.958 233.665H592.855ZM597.665 236.772C598.202 236.772 598.683 236.885 599.108 237.11C599.541 237.335 599.879 237.682 600.122 238.15C600.373 238.609 600.499 239.173 600.499 239.84V244H599.602V239.944C599.602 239.173 599.407 238.583 599.017 238.176C598.636 237.769 598.111 237.565 597.444 237.565C596.759 237.565 596.213 237.782 595.806 238.215C595.399 238.648 595.195 239.285 595.195 240.126V244H594.285V234.38H595.195V238.111C595.42 237.686 595.75 237.357 596.183 237.123C596.625 236.889 597.119 236.772 597.665 236.772ZM603.595 237.669V242.076C603.595 242.509 603.677 242.808 603.842 242.973C604.006 243.138 604.297 243.22 604.713 243.22H605.545V244H604.57C603.928 244 603.452 243.853 603.14 243.558C602.828 243.255 602.672 242.761 602.672 242.076V237.669H601.684V236.902H602.672V235.121H603.595V236.902H605.545V237.669H603.595ZM608.128 237.669V242.076C608.128 242.509 608.211 242.808 608.375 242.973C608.54 243.138 608.83 243.22 609.246 243.22H610.078V244H609.103C608.462 244 607.985 243.853 607.673 243.558C607.361 243.255 607.205 242.761 607.205 242.076V237.669H606.217V236.902H607.205V235.121H608.128V236.902H610.078V237.669H608.128ZM612.376 238.462C612.602 237.985 612.957 237.591 613.442 237.279C613.936 236.958 614.521 236.798 615.197 236.798C615.839 236.798 616.415 236.95 616.926 237.253C617.446 237.548 617.849 237.972 618.135 238.527C618.43 239.073 618.577 239.71 618.577 240.438C618.577 241.166 618.43 241.807 618.135 242.362C617.849 242.917 617.446 243.346 616.926 243.649C616.415 243.952 615.839 244.104 615.197 244.104C614.53 244.104 613.949 243.948 613.455 243.636C612.961 243.315 612.602 242.917 612.376 242.44V247.354H611.479V236.902H612.376V238.462ZM617.654 240.438C617.654 239.849 617.537 239.342 617.303 238.917C617.078 238.484 616.766 238.154 616.367 237.929C615.969 237.704 615.518 237.591 615.015 237.591C614.53 237.591 614.084 237.708 613.676 237.942C613.278 238.176 612.961 238.51 612.727 238.943C612.493 239.376 612.376 239.879 612.376 240.451C612.376 241.023 612.493 241.526 612.727 241.959C612.961 242.392 613.278 242.726 613.676 242.96C614.084 243.194 614.53 243.311 615.015 243.311C615.518 243.311 615.969 243.198 616.367 242.973C616.766 242.739 617.078 242.405 617.303 241.972C617.537 241.53 617.654 241.019 617.654 240.438ZM622.596 244.104C621.781 244.104 621.114 243.918 620.594 243.545C620.082 243.164 619.796 242.648 619.736 241.998H620.672C620.715 242.397 620.901 242.722 621.231 242.973C621.569 243.216 622.019 243.337 622.583 243.337C623.077 243.337 623.462 243.22 623.74 242.986C624.026 242.752 624.169 242.462 624.169 242.115C624.169 241.872 624.091 241.673 623.935 241.517C623.779 241.361 623.579 241.24 623.337 241.153C623.103 241.058 622.782 240.958 622.375 240.854C621.846 240.715 621.417 240.577 621.088 240.438C620.758 240.299 620.477 240.096 620.243 239.827C620.017 239.55 619.905 239.181 619.905 238.722C619.905 238.375 620.009 238.055 620.217 237.76C620.425 237.465 620.719 237.231 621.101 237.058C621.482 236.885 621.915 236.798 622.401 236.798C623.163 236.798 623.779 236.993 624.247 237.383C624.715 237.764 624.966 238.293 625.001 238.969H624.091C624.065 238.553 623.9 238.219 623.597 237.968C623.302 237.708 622.895 237.578 622.375 237.578C621.915 237.578 621.543 237.686 621.257 237.903C620.971 238.12 620.828 238.388 620.828 238.709C620.828 238.986 620.91 239.216 621.075 239.398C621.248 239.571 621.46 239.71 621.712 239.814C621.963 239.909 622.301 240.018 622.726 240.139C623.237 240.278 623.644 240.412 623.948 240.542C624.251 240.672 624.511 240.863 624.728 241.114C624.944 241.365 625.057 241.699 625.066 242.115C625.066 242.496 624.962 242.839 624.754 243.142C624.546 243.437 624.255 243.671 623.883 243.844C623.51 244.017 623.081 244.104 622.596 244.104ZM626.835 244.065C626.644 244.065 626.484 244 626.354 243.87C626.232 243.74 626.172 243.58 626.172 243.389C626.172 243.198 626.232 243.042 626.354 242.921C626.484 242.791 626.644 242.726 626.835 242.726C627.017 242.726 627.168 242.791 627.29 242.921C627.42 243.042 627.485 243.198 627.485 243.389C627.485 243.58 627.42 243.74 627.29 243.87C627.168 244 627.017 244.065 626.835 244.065ZM626.835 238.41C626.644 238.41 626.484 238.345 626.354 238.215C626.232 238.085 626.172 237.925 626.172 237.734C626.172 237.543 626.232 237.387 626.354 237.266C626.484 237.136 626.644 237.071 626.835 237.071C627.017 237.071 627.168 237.136 627.29 237.266C627.42 237.387 627.485 237.543 627.485 237.734C627.485 237.925 627.42 238.085 627.29 238.215C627.168 238.345 627.017 238.41 626.835 238.41ZM633.021 231.78L629.433 246.158H628.536L632.098 231.78H633.021ZM638.659 231.78L635.071 246.158H634.174L637.736 231.78H638.659ZM649.615 236.902L647.392 244H646.482L644.519 238.046L642.556 244H641.633L639.41 236.902H640.333L642.101 243.077L644.09 236.902H645L646.963 243.09L648.718 236.902H649.615ZM660.115 236.902L657.892 244H656.982L655.019 238.046L653.056 244H652.133L649.91 236.902H650.833L652.601 243.077L654.59 236.902H655.5L657.463 243.09L659.218 236.902H660.115ZM670.616 236.902L668.393 244H667.483L665.52 238.046L663.557 244H662.634L660.411 236.902H661.334L663.102 243.077L665.091 236.902H666.001L667.964 243.09L669.719 236.902H670.616ZM671.912 244.065C671.722 244.065 671.561 244 671.431 243.87C671.31 243.74 671.249 243.58 671.249 243.389C671.249 243.198 671.31 243.042 671.431 242.921C671.561 242.791 671.722 242.726 671.912 242.726C672.094 242.726 672.246 242.791 672.367 242.921C672.497 243.042 672.562 243.198 672.562 243.389C672.562 243.58 672.497 243.74 672.367 243.87C672.246 244 672.094 244.065 671.912 244.065ZM673.602 240.451C673.602 239.714 673.749 239.073 674.044 238.527C674.338 237.972 674.746 237.548 675.266 237.253C675.786 236.95 676.379 236.798 677.047 236.798C677.922 236.798 678.641 237.015 679.205 237.448C679.777 237.881 680.145 238.471 680.31 239.216H679.335C679.213 238.705 678.949 238.306 678.542 238.02C678.143 237.725 677.645 237.578 677.047 237.578C676.57 237.578 676.141 237.686 675.76 237.903C675.378 238.12 675.075 238.445 674.85 238.878C674.633 239.303 674.525 239.827 674.525 240.451C674.525 241.075 674.633 241.604 674.85 242.037C675.075 242.47 675.378 242.795 675.76 243.012C676.141 243.229 676.57 243.337 677.047 243.337C677.645 243.337 678.143 243.194 678.542 242.908C678.949 242.613 679.213 242.206 679.335 241.686H680.31C680.145 242.414 679.777 242.999 679.205 243.441C678.633 243.883 677.913 244.104 677.047 244.104C676.379 244.104 675.786 243.957 675.266 243.662C674.746 243.359 674.338 242.934 674.044 242.388C673.749 241.833 673.602 241.188 673.602 240.451ZM681.474 240.438C681.474 239.71 681.617 239.073 681.903 238.527C682.198 237.972 682.601 237.548 683.112 237.253C683.632 236.95 684.217 236.798 684.867 236.798C685.543 236.798 686.124 236.954 686.609 237.266C687.103 237.578 687.459 237.977 687.675 238.462V236.902H688.585V244H687.675V242.427C687.45 242.912 687.09 243.315 686.596 243.636C686.111 243.948 685.53 244.104 684.854 244.104C684.213 244.104 683.632 243.952 683.112 243.649C682.601 243.346 682.198 242.917 681.903 242.362C681.617 241.807 681.474 241.166 681.474 240.438ZM687.675 240.451C687.675 239.879 687.558 239.376 687.324 238.943C687.09 238.51 686.77 238.176 686.362 237.942C685.964 237.708 685.522 237.591 685.036 237.591C684.534 237.591 684.083 237.704 683.684 237.929C683.286 238.154 682.969 238.484 682.735 238.917C682.51 239.342 682.397 239.849 682.397 240.438C682.397 241.019 682.51 241.53 682.735 241.972C682.969 242.405 683.286 242.739 683.684 242.973C684.083 243.198 684.534 243.311 685.036 243.311C685.522 243.311 685.964 243.194 686.362 242.96C686.77 242.726 687.09 242.392 687.324 241.959C687.558 241.526 687.675 241.023 687.675 240.451ZM691.473 234.38V244H690.563V234.38H691.473ZM694.344 234.38V244H693.434V234.38H694.344ZM697.201 238.475C697.435 237.981 697.795 237.578 698.28 237.266C698.774 236.954 699.355 236.798 700.022 236.798C700.672 236.798 701.253 236.95 701.764 237.253C702.276 237.548 702.674 237.972 702.96 238.527C703.255 239.073 703.402 239.71 703.402 240.438C703.402 241.166 703.255 241.807 702.96 242.362C702.674 242.917 702.271 243.346 701.751 243.649C701.24 243.952 700.664 244.104 700.022 244.104C699.346 244.104 698.761 243.952 698.267 243.649C697.782 243.337 697.427 242.934 697.201 242.44V244H696.304V234.38H697.201V238.475ZM702.479 240.438C702.479 239.849 702.362 239.342 702.128 238.917C701.903 238.484 701.591 238.154 701.192 237.929C700.794 237.704 700.343 237.591 699.84 237.591C699.355 237.591 698.909 237.708 698.501 237.942C698.103 238.176 697.786 238.51 697.552 238.943C697.318 239.376 697.201 239.879 697.201 240.451C697.201 241.023 697.318 241.526 697.552 241.959C697.786 242.392 698.103 242.726 698.501 242.96C698.909 243.194 699.355 243.311 699.84 243.311C700.343 243.311 700.794 243.198 701.192 242.973C701.591 242.739 701.903 242.405 702.128 241.972C702.362 241.53 702.479 241.019 702.479 240.438ZM704.561 240.438C704.561 239.71 704.704 239.073 704.99 238.527C705.284 237.972 705.687 237.548 706.199 237.253C706.719 236.95 707.304 236.798 707.954 236.798C708.63 236.798 709.21 236.954 709.696 237.266C710.19 237.578 710.545 237.977 710.762 238.462V236.902H711.672V244H710.762V242.427C710.536 242.912 710.177 243.315 709.683 243.636C709.197 243.948 708.617 244.104 707.941 244.104C707.299 244.104 706.719 243.952 706.199 243.649C705.687 243.346 705.284 242.917 704.99 242.362C704.704 241.807 704.561 241.166 704.561 240.438ZM710.762 240.451C710.762 239.879 710.645 239.376 710.411 238.943C710.177 238.51 709.856 238.176 709.449 237.942C709.05 237.708 708.608 237.591 708.123 237.591C707.62 237.591 707.169 237.704 706.771 237.929C706.372 238.154 706.056 238.484 705.822 238.917C705.596 239.342 705.484 239.849 705.484 240.438C705.484 241.019 705.596 241.53 705.822 241.972C706.056 242.405 706.372 242.739 706.771 242.973C707.169 243.198 707.62 243.311 708.123 243.311C708.608 243.311 709.05 243.194 709.449 242.96C709.856 242.726 710.177 242.392 710.411 241.959C710.645 241.526 710.762 241.023 710.762 240.451ZM713.233 240.451C713.233 239.714 713.381 239.073 713.675 238.527C713.97 237.972 714.377 237.548 714.897 237.253C715.417 236.95 716.011 236.798 716.678 236.798C717.554 236.798 718.273 237.015 718.836 237.448C719.408 237.881 719.777 238.471 719.941 239.216H718.966C718.845 238.705 718.581 238.306 718.173 238.02C717.775 237.725 717.276 237.578 716.678 237.578C716.202 237.578 715.773 237.686 715.391 237.903C715.01 238.12 714.707 238.445 714.481 238.878C714.265 239.303 714.156 239.827 714.156 240.451C714.156 241.075 714.265 241.604 714.481 242.037C714.707 242.47 715.01 242.795 715.391 243.012C715.773 243.229 716.202 243.337 716.678 243.337C717.276 243.337 717.775 243.194 718.173 242.908C718.581 242.613 718.845 242.206 718.966 241.686H719.941C719.777 242.414 719.408 242.999 718.836 243.441C718.264 243.883 717.545 244.104 716.678 244.104C716.011 244.104 715.417 243.957 714.897 243.662C714.377 243.359 713.97 242.934 713.675 242.388C713.381 241.833 713.233 241.188 713.233 240.451ZM725.357 244L722.432 240.815V244H721.522V234.38H722.432V240.074L725.292 236.902H726.566L723.199 240.438L726.592 244H725.357ZM734.09 240.087C734.09 240.399 734.081 240.637 734.064 240.802H728.175C728.201 241.339 728.331 241.799 728.565 242.18C728.799 242.561 729.107 242.852 729.488 243.051C729.869 243.242 730.285 243.337 730.736 243.337C731.325 243.337 731.819 243.194 732.218 242.908C732.625 242.622 732.894 242.236 733.024 241.751H733.986C733.813 242.444 733.44 243.012 732.868 243.454C732.305 243.887 731.594 244.104 730.736 244.104C730.069 244.104 729.471 243.957 728.942 243.662C728.413 243.359 727.997 242.934 727.694 242.388C727.399 241.833 727.252 241.188 727.252 240.451C727.252 239.714 727.399 239.069 727.694 238.514C727.989 237.959 728.4 237.535 728.929 237.24C729.458 236.945 730.06 236.798 730.736 236.798C731.412 236.798 732.001 236.945 732.504 237.24C733.015 237.535 733.405 237.933 733.674 238.436C733.951 238.93 734.09 239.48 734.09 240.087ZM733.167 240.061C733.176 239.532 733.067 239.082 732.842 238.709C732.625 238.336 732.326 238.055 731.945 237.864C731.564 237.673 731.148 237.578 730.697 237.578C730.021 237.578 729.445 237.795 728.968 238.228C728.491 238.661 728.227 239.272 728.175 240.061H733.167ZM739.373 244L737.54 241.14L735.772 244H734.81L737.098 240.451L734.836 236.902H735.863L737.67 239.723L739.425 236.902H740.374L738.112 240.412L740.4 244H739.373ZM741.118 240.438C741.118 239.71 741.261 239.073 741.547 238.527C741.842 237.972 742.245 237.548 742.756 237.253C743.276 236.95 743.861 236.798 744.511 236.798C745.187 236.798 745.768 236.954 746.253 237.266C746.747 237.578 747.103 237.977 747.319 238.462V236.902H748.229V244H747.319V242.427C747.094 242.912 746.734 243.315 746.24 243.636C745.755 243.948 745.174 244.104 744.498 244.104C743.857 244.104 743.276 243.952 742.756 243.649C742.245 243.346 741.842 242.917 741.547 242.362C741.261 241.807 741.118 241.166 741.118 240.438ZM747.319 240.451C747.319 239.879 747.202 239.376 746.968 238.943C746.734 238.51 746.414 238.176 746.006 237.942C745.608 237.708 745.166 237.591 744.68 237.591C744.178 237.591 743.727 237.704 743.328 237.929C742.93 238.154 742.613 238.484 742.379 238.917C742.154 239.342 742.041 239.849 742.041 240.438C742.041 241.019 742.154 241.53 742.379 241.972C742.613 242.405 742.93 242.739 743.328 242.973C743.727 243.198 744.178 243.311 744.68 243.311C745.166 243.311 745.608 243.194 746.006 242.96C746.414 242.726 746.734 242.392 746.968 241.959C747.202 241.526 747.319 241.023 747.319 240.451ZM758.657 236.772C759.489 236.772 760.165 237.036 760.685 237.565C761.213 238.085 761.478 238.843 761.478 239.84V244H760.581V239.944C760.581 239.173 760.394 238.583 760.022 238.176C759.649 237.769 759.142 237.565 758.501 237.565C757.833 237.565 757.3 237.786 756.902 238.228C756.503 238.67 756.304 239.311 756.304 240.152V244H755.407V239.944C755.407 239.173 755.22 238.583 754.848 238.176C754.475 237.769 753.964 237.565 753.314 237.565C752.646 237.565 752.113 237.786 751.715 238.228C751.316 238.67 751.117 239.311 751.117 240.152V244H750.207V236.902H751.117V238.124C751.342 237.682 751.663 237.348 752.079 237.123C752.495 236.889 752.958 236.772 753.47 236.772C754.085 236.772 754.622 236.919 755.082 237.214C755.55 237.509 755.888 237.942 756.096 238.514C756.286 237.951 756.611 237.522 757.071 237.227C757.539 236.924 758.067 236.772 758.657 236.772ZM764.296 238.462C764.521 237.985 764.876 237.591 765.362 237.279C765.856 236.958 766.441 236.798 767.117 236.798C767.758 236.798 768.334 236.95 768.846 237.253C769.366 237.548 769.769 237.972 770.055 238.527C770.349 239.073 770.497 239.71 770.497 240.438C770.497 241.166 770.349 241.807 770.055 242.362C769.769 242.917 769.366 243.346 768.846 243.649C768.334 243.952 767.758 244.104 767.117 244.104C766.449 244.104 765.869 243.948 765.375 243.636C764.881 243.315 764.521 242.917 764.296 242.44V247.354H763.399V236.902H764.296V238.462ZM769.574 240.438C769.574 239.849 769.457 239.342 769.223 238.917C768.997 238.484 768.685 238.154 768.287 237.929C767.888 237.704 767.437 237.591 766.935 237.591C766.449 237.591 766.003 237.708 765.596 237.942C765.197 238.176 764.881 238.51 764.647 238.943C764.413 239.376 764.296 239.879 764.296 240.451C764.296 241.023 764.413 241.526 764.647 241.959C764.881 242.392 765.197 242.726 765.596 242.96C766.003 243.194 766.449 243.311 766.935 243.311C767.437 243.311 767.888 243.198 768.287 242.973C768.685 242.739 768.997 242.405 769.223 241.972C769.457 241.53 769.574 241.019 769.574 240.438ZM772.981 234.38V244H772.071V234.38H772.981ZM781.364 240.087C781.364 240.399 781.355 240.637 781.338 240.802H775.449C775.475 241.339 775.605 241.799 775.839 242.18C776.073 242.561 776.381 242.852 776.762 243.051C777.143 243.242 777.559 243.337 778.01 243.337C778.599 243.337 779.093 243.194 779.492 242.908C779.899 242.622 780.168 242.236 780.298 241.751H781.26C781.087 242.444 780.714 243.012 780.142 243.454C779.579 243.887 778.868 244.104 778.01 244.104C777.343 244.104 776.745 243.957 776.216 243.662C775.687 243.359 775.271 242.934 774.968 242.388C774.673 241.833 774.526 241.188 774.526 240.451C774.526 239.714 774.673 239.069 774.968 238.514C775.263 237.959 775.674 237.535 776.203 237.24C776.732 236.945 777.334 236.798 778.01 236.798C778.686 236.798 779.275 236.945 779.778 237.24C780.289 237.535 780.679 237.933 780.948 238.436C781.225 238.93 781.364 239.48 781.364 240.087ZM780.441 240.061C780.45 239.532 780.341 239.082 780.116 238.709C779.899 238.336 779.6 238.055 779.219 237.864C778.838 237.673 778.422 237.578 777.971 237.578C777.295 237.578 776.719 237.795 776.242 238.228C775.765 238.661 775.501 239.272 775.449 240.061H780.441ZM783.085 244.065C782.894 244.065 782.734 244 782.604 243.87C782.483 243.74 782.422 243.58 782.422 243.389C782.422 243.198 782.483 243.042 782.604 242.921C782.734 242.791 782.894 242.726 783.085 242.726C783.267 242.726 783.419 242.791 783.54 242.921C783.67 243.042 783.735 243.198 783.735 243.389C783.735 243.58 783.67 243.74 783.54 243.87C783.419 244 783.267 244.065 783.085 244.065ZM784.774 240.451C784.774 239.714 784.922 239.073 785.216 238.527C785.511 237.972 785.918 237.548 786.438 237.253C786.958 236.95 787.552 236.798 788.219 236.798C789.095 236.798 789.814 237.015 790.377 237.448C790.949 237.881 791.318 238.471 791.482 239.216H790.507C790.386 238.705 790.122 238.306 789.714 238.02C789.316 237.725 788.817 237.578 788.219 237.578C787.743 237.578 787.314 237.686 786.932 237.903C786.551 238.12 786.248 238.445 786.022 238.878C785.806 239.303 785.697 239.827 785.697 240.451C785.697 241.075 785.806 241.604 786.022 242.037C786.248 242.47 786.551 242.795 786.932 243.012C787.314 243.229 787.743 243.337 788.219 243.337C788.817 243.337 789.316 243.194 789.714 242.908C790.122 242.613 790.386 242.206 790.507 241.686H791.482C791.318 242.414 790.949 242.999 790.377 243.441C789.805 243.883 789.086 244.104 788.219 244.104C787.552 244.104 786.958 243.957 786.438 243.662C785.918 243.359 785.511 242.934 785.216 242.388C784.922 241.833 784.774 241.188 784.774 240.451ZM796.17 244.104C795.503 244.104 794.9 243.957 794.363 243.662C793.834 243.359 793.414 242.934 793.102 242.388C792.799 241.833 792.647 241.188 792.647 240.451C792.647 239.714 792.803 239.073 793.115 238.527C793.427 237.972 793.852 237.548 794.389 237.253C794.926 236.95 795.529 236.798 796.196 236.798C796.863 236.798 797.466 236.95 798.003 237.253C798.549 237.548 798.974 237.972 799.277 238.527C799.589 239.073 799.745 239.714 799.745 240.451C799.745 241.179 799.589 241.82 799.277 242.375C798.965 242.93 798.536 243.359 797.99 243.662C797.444 243.957 796.837 244.104 796.17 244.104ZM796.17 243.311C796.638 243.311 797.071 243.207 797.47 242.999C797.869 242.782 798.189 242.462 798.432 242.037C798.683 241.604 798.809 241.075 798.809 240.451C798.809 239.827 798.688 239.303 798.445 238.878C798.202 238.445 797.882 238.124 797.483 237.916C797.084 237.699 796.651 237.591 796.183 237.591C795.715 237.591 795.282 237.699 794.883 237.916C794.484 238.124 794.164 238.445 793.921 238.878C793.687 239.303 793.57 239.827 793.57 240.451C793.57 241.075 793.687 241.604 793.921 242.037C794.164 242.462 794.48 242.782 794.87 242.999C795.269 243.207 795.702 243.311 796.17 243.311ZM809.754 236.772C810.586 236.772 811.262 237.036 811.782 237.565C812.31 238.085 812.575 238.843 812.575 239.84V244H811.678V239.944C811.678 239.173 811.491 238.583 811.119 238.176C810.746 237.769 810.239 237.565 809.598 237.565C808.93 237.565 808.397 237.786 807.999 238.228C807.6 238.67 807.401 239.311 807.401 240.152V244H806.504V239.944C806.504 239.173 806.317 238.583 805.945 238.176C805.572 237.769 805.061 237.565 804.411 237.565C803.743 237.565 803.21 237.786 802.812 238.228C802.413 238.67 802.214 239.311 802.214 240.152V244H801.304V236.902H802.214V238.124C802.439 237.682 802.76 237.348 803.176 237.123C803.592 236.889 804.055 236.772 804.567 236.772C805.182 236.772 805.719 236.919 806.179 237.214C806.647 237.509 806.985 237.942 807.193 238.514C807.383 237.951 807.708 237.522 808.168 237.227C808.636 236.924 809.164 236.772 809.754 236.772ZM814.834 233.665L814.704 236.174H814.067L813.937 233.665H814.834ZM816.394 233.665L816.277 236.174H815.64L815.497 233.665H816.394ZM818.655 242.492L817.303 245.898H816.679L817.641 242.492H818.655ZM631.919 269.065C631.729 269.065 631.568 269 631.438 268.87C631.317 268.74 631.256 268.58 631.256 268.389C631.256 268.198 631.317 268.042 631.438 267.921C631.568 267.791 631.729 267.726 631.919 267.726C632.101 267.726 632.253 267.791 632.374 267.921C632.504 268.042 632.569 268.198 632.569 268.389C632.569 268.58 632.504 268.74 632.374 268.87C632.253 269 632.101 269.065 631.919 269.065ZM631.919 263.41C631.729 263.41 631.568 263.345 631.438 263.215C631.317 263.085 631.256 262.925 631.256 262.734C631.256 262.543 631.317 262.387 631.438 262.266C631.568 262.136 631.729 262.071 631.919 262.071C632.101 262.071 632.253 262.136 632.374 262.266C632.504 262.387 632.569 262.543 632.569 262.734C632.569 262.925 632.504 263.085 632.374 263.215C632.253 263.345 632.101 263.41 631.919 263.41ZM637.868 258.665L637.738 261.174H637.101L636.971 258.665H637.868ZM639.428 258.665L639.311 261.174H638.674L638.531 258.665H639.428ZM644.94 269.091C644.099 269.091 643.336 268.896 642.652 268.506C641.967 268.107 641.425 267.557 641.027 266.855C640.637 266.144 640.442 265.343 640.442 264.45C640.442 263.557 640.637 262.76 641.027 262.058C641.425 261.347 641.967 260.797 642.652 260.407C643.336 260.008 644.099 259.809 644.94 259.809C645.789 259.809 646.556 260.008 647.241 260.407C647.925 260.797 648.463 261.347 648.853 262.058C649.243 262.76 649.438 263.557 649.438 264.45C649.438 265.343 649.243 266.144 648.853 266.855C648.463 267.557 647.925 268.107 647.241 268.506C646.556 268.896 645.789 269.091 644.94 269.091ZM644.94 268.298C645.616 268.298 646.222 268.142 646.76 267.83C647.297 267.518 647.722 267.072 648.034 266.491C648.346 265.902 648.502 265.221 648.502 264.45C648.502 263.679 648.346 263.003 648.034 262.422C647.722 261.841 647.297 261.395 646.76 261.083C646.222 260.771 645.616 260.615 644.94 260.615C644.264 260.615 643.657 260.771 643.12 261.083C642.582 261.395 642.158 261.841 641.846 262.422C641.534 263.003 641.378 263.679 641.378 264.45C641.378 265.221 641.534 265.902 641.846 266.491C642.158 267.072 642.582 267.518 643.12 267.83C643.657 268.142 644.264 268.298 644.94 268.298ZM651.913 263.163C652.112 262.721 652.416 262.379 652.823 262.136C653.239 261.893 653.746 261.772 654.344 261.772V262.721H654.097C653.438 262.721 652.91 262.899 652.511 263.254C652.112 263.609 651.913 264.203 651.913 265.035V269H651.003V261.902H651.913V263.163ZM655.197 265.438C655.197 264.71 655.344 264.073 655.639 263.527C655.934 262.972 656.337 262.548 656.848 262.253C657.368 261.95 657.953 261.798 658.603 261.798C659.227 261.798 659.79 261.95 660.293 262.253C660.796 262.556 661.164 262.951 661.398 263.436V259.38H662.308V269H661.398V267.414C661.181 267.908 660.826 268.315 660.332 268.636C659.838 268.948 659.257 269.104 658.59 269.104C657.94 269.104 657.355 268.952 656.835 268.649C656.324 268.346 655.921 267.917 655.626 267.362C655.34 266.807 655.197 266.166 655.197 265.438ZM661.398 265.451C661.398 264.879 661.281 264.376 661.047 263.943C660.813 263.51 660.492 263.176 660.085 262.942C659.686 262.708 659.244 262.591 658.759 262.591C658.256 262.591 657.806 262.704 657.407 262.929C657.008 263.154 656.692 263.484 656.458 263.917C656.233 264.342 656.12 264.849 656.12 265.438C656.12 266.019 656.233 266.53 656.458 266.972C656.692 267.405 657.008 267.739 657.407 267.973C657.806 268.198 658.256 268.311 658.759 268.311C659.244 268.311 659.686 268.194 660.085 267.96C660.492 267.726 660.813 267.392 661.047 266.959C661.281 266.526 661.398 266.023 661.398 265.451ZM670.707 265.087C670.707 265.399 670.699 265.637 670.681 265.802H664.792C664.818 266.339 664.948 266.799 665.182 267.18C665.416 267.561 665.724 267.852 666.105 268.051C666.487 268.242 666.903 268.337 667.353 268.337C667.943 268.337 668.437 268.194 668.835 267.908C669.243 267.622 669.511 267.236 669.641 266.751H670.603C670.43 267.444 670.057 268.012 669.485 268.454C668.922 268.887 668.211 269.104 667.353 269.104C666.686 269.104 666.088 268.957 665.559 268.662C665.031 268.359 664.615 267.934 664.311 267.388C664.017 266.833 663.869 266.188 663.869 265.451C663.869 264.714 664.017 264.069 664.311 263.514C664.606 262.959 665.018 262.535 665.546 262.24C666.075 261.945 666.677 261.798 667.353 261.798C668.029 261.798 668.619 261.945 669.121 262.24C669.633 262.535 670.023 262.933 670.291 263.436C670.569 263.93 670.707 264.48 670.707 265.087ZM669.784 265.061C669.793 264.532 669.685 264.082 669.459 263.709C669.243 263.336 668.944 263.055 668.562 262.864C668.181 262.673 667.765 262.578 667.314 262.578C666.638 262.578 666.062 262.795 665.585 263.228C665.109 263.661 664.844 264.272 664.792 265.061H669.784ZM673.182 263.163C673.382 262.721 673.685 262.379 674.092 262.136C674.508 261.893 675.015 261.772 675.613 261.772V262.721H675.366C674.708 262.721 674.179 262.899 673.78 263.254C673.382 263.609 673.182 264.203 673.182 265.035V269H672.272V261.902H673.182V263.163ZM683.733 269H682.823L677.792 261.356V269H676.882V259.913H677.792L682.823 267.544V259.913H683.733V269ZM688.801 269.104C688.134 269.104 687.532 268.957 686.994 268.662C686.466 268.359 686.045 267.934 685.733 267.388C685.43 266.833 685.278 266.188 685.278 265.451C685.278 264.714 685.434 264.073 685.746 263.527C686.058 262.972 686.483 262.548 687.02 262.253C687.558 261.95 688.16 261.798 688.827 261.798C689.495 261.798 690.097 261.95 690.634 262.253C691.18 262.548 691.605 262.972 691.908 263.527C692.22 264.073 692.376 264.714 692.376 265.451C692.376 266.179 692.22 266.82 691.908 267.375C691.596 267.93 691.167 268.359 690.621 268.662C690.075 268.957 689.469 269.104 688.801 269.104ZM688.801 268.311C689.269 268.311 689.703 268.207 690.101 267.999C690.5 267.782 690.821 267.462 691.063 267.037C691.315 266.604 691.44 266.075 691.44 265.451C691.44 264.827 691.319 264.303 691.076 263.878C690.834 263.445 690.513 263.124 690.114 262.916C689.716 262.699 689.282 262.591 688.814 262.591C688.346 262.591 687.913 262.699 687.514 262.916C687.116 263.124 686.795 263.445 686.552 263.878C686.318 264.303 686.201 264.827 686.201 265.451C686.201 266.075 686.318 266.604 686.552 267.037C686.795 267.462 687.111 267.782 687.501 267.999C687.9 268.207 688.333 268.311 688.801 268.311ZM694.845 260.654V264.047H698.29V264.801H694.845V268.246H698.68V269H693.935V259.9H698.68V260.654H694.845ZM704.091 269L702.258 266.14L700.49 269H699.528L701.816 265.451L699.554 261.902H700.581L702.388 264.723L704.143 261.902H705.092L702.83 265.412L705.118 269H704.091ZM705.837 265.438C705.837 264.71 705.98 264.073 706.266 263.527C706.56 262.972 706.963 262.548 707.475 262.253C707.995 261.95 708.58 261.798 709.23 261.798C709.906 261.798 710.486 261.954 710.972 262.266C711.466 262.578 711.821 262.977 712.038 263.462V261.902H712.948V269H712.038V267.427C711.812 267.912 711.453 268.315 710.959 268.636C710.473 268.948 709.893 269.104 709.217 269.104C708.575 269.104 707.995 268.952 707.475 268.649C706.963 268.346 706.56 267.917 706.266 267.362C705.98 266.807 705.837 266.166 705.837 265.438ZM712.038 265.451C712.038 264.879 711.921 264.376 711.687 263.943C711.453 263.51 711.132 263.176 710.725 262.942C710.326 262.708 709.884 262.591 709.399 262.591C708.896 262.591 708.445 262.704 708.047 262.929C707.648 263.154 707.332 263.484 707.098 263.917C706.872 264.342 706.76 264.849 706.76 265.438C706.76 266.019 706.872 266.53 707.098 266.972C707.332 267.405 707.648 267.739 708.047 267.973C708.445 268.198 708.896 268.311 709.399 268.311C709.884 268.311 710.326 268.194 710.725 267.96C711.132 267.726 711.453 267.392 711.687 266.959C711.921 266.526 712.038 266.023 712.038 265.451ZM723.375 261.772C724.207 261.772 724.883 262.036 725.403 262.565C725.932 263.085 726.196 263.843 726.196 264.84V269H725.299V264.944C725.299 264.173 725.113 263.583 724.74 263.176C724.367 262.769 723.86 262.565 723.219 262.565C722.552 262.565 722.019 262.786 721.62 263.228C721.221 263.67 721.022 264.311 721.022 265.152V269H720.125V264.944C720.125 264.173 719.939 263.583 719.566 263.176C719.193 262.769 718.682 262.565 718.032 262.565C717.365 262.565 716.832 262.786 716.433 263.228C716.034 263.67 715.835 264.311 715.835 265.152V269H714.925V261.902H715.835V263.124C716.06 262.682 716.381 262.348 716.797 262.123C717.213 261.889 717.677 261.772 718.188 261.772C718.803 261.772 719.341 261.919 719.8 262.214C720.268 262.509 720.606 262.942 720.814 263.514C721.005 262.951 721.33 262.522 721.789 262.227C722.257 261.924 722.786 261.772 723.375 261.772ZM729.014 263.462C729.239 262.985 729.595 262.591 730.08 262.279C730.574 261.958 731.159 261.798 731.835 261.798C732.476 261.798 733.053 261.95 733.564 262.253C734.084 262.548 734.487 262.972 734.773 263.527C735.068 264.073 735.215 264.71 735.215 265.438C735.215 266.166 735.068 266.807 734.773 267.362C734.487 267.917 734.084 268.346 733.564 268.649C733.053 268.952 732.476 269.104 731.835 269.104C731.168 269.104 730.587 268.948 730.093 268.636C729.599 268.315 729.239 267.917 729.014 267.44V272.354H728.117V261.902H729.014V263.462ZM734.292 265.438C734.292 264.849 734.175 264.342 733.941 263.917C733.716 263.484 733.404 263.154 733.005 262.929C732.606 262.704 732.156 262.591 731.653 262.591C731.168 262.591 730.721 262.708 730.314 262.942C729.915 263.176 729.599 263.51 729.365 263.943C729.131 264.376 729.014 264.879 729.014 265.451C729.014 266.023 729.131 266.526 729.365 266.959C729.599 267.392 729.915 267.726 730.314 267.96C730.721 268.194 731.168 268.311 731.653 268.311C732.156 268.311 732.606 268.198 733.005 267.973C733.404 267.739 733.716 267.405 733.941 266.972C734.175 266.53 734.292 266.019 734.292 265.438ZM737.7 259.38V269H736.79V259.38H737.7ZM746.082 265.087C746.082 265.399 746.074 265.637 746.056 265.802H740.167C740.193 266.339 740.323 266.799 740.557 267.18C740.791 267.561 741.099 267.852 741.48 268.051C741.862 268.242 742.278 268.337 742.728 268.337C743.318 268.337 743.812 268.194 744.21 267.908C744.618 267.622 744.886 267.236 745.016 266.751H745.978C745.805 267.444 745.432 268.012 744.86 268.454C744.297 268.887 743.586 269.104 742.728 269.104C742.061 269.104 741.463 268.957 740.934 268.662C740.406 268.359 739.99 267.934 739.686 267.388C739.392 266.833 739.244 266.188 739.244 265.451C739.244 264.714 739.392 264.069 739.686 263.514C739.981 262.959 740.393 262.535 740.921 262.24C741.45 261.945 742.052 261.798 742.728 261.798C743.404 261.798 743.994 261.945 744.496 262.24C745.008 262.535 745.398 262.933 745.666 263.436C745.944 263.93 746.082 264.48 746.082 265.087ZM745.159 265.061C745.168 264.532 745.06 264.082 744.834 263.709C744.618 263.336 744.319 263.055 743.937 262.864C743.556 262.673 743.14 262.578 742.689 262.578C742.013 262.578 741.437 262.795 740.96 263.228C740.484 263.661 740.219 264.272 740.167 265.061H745.159ZM747.985 258.665L747.855 261.174H747.218L747.088 258.665H747.985ZM749.545 258.665L749.428 261.174H748.791L748.648 258.665H749.545ZM751.807 267.492L750.455 270.898H749.831L750.793 267.492H751.807ZM551.314 294.065C551.123 294.065 550.963 294 550.833 293.87C550.711 293.74 550.651 293.58 550.651 293.389C550.651 293.198 550.711 293.042 550.833 292.921C550.963 292.791 551.123 292.726 551.314 292.726C551.496 292.726 551.647 292.791 551.769 292.921C551.899 293.042 551.964 293.198 551.964 293.389C551.964 293.58 551.899 293.74 551.769 293.87C551.647 294 551.496 294.065 551.314 294.065ZM551.314 288.41C551.123 288.41 550.963 288.345 550.833 288.215C550.711 288.085 550.651 287.925 550.651 287.734C550.651 287.543 550.711 287.387 550.833 287.266C550.963 287.136 551.123 287.071 551.314 287.071C551.496 287.071 551.647 287.136 551.769 287.266C551.899 287.387 551.964 287.543 551.964 287.734C551.964 287.925 551.899 288.085 551.769 288.215C551.647 288.345 551.496 288.41 551.314 288.41ZM557.263 283.665L557.133 286.174H556.496L556.366 283.665H557.263ZM558.823 283.665L558.706 286.174H558.069L557.926 283.665H558.823ZM565.569 284.913V285.667H563.047V294H562.137V285.667H559.602V284.913H565.569ZM573.328 290.087C573.328 290.399 573.32 290.637 573.302 290.802H567.413C567.439 291.339 567.569 291.799 567.803 292.18C568.037 292.561 568.345 292.852 568.726 293.051C569.108 293.242 569.524 293.337 569.974 293.337C570.564 293.337 571.058 293.194 571.456 292.908C571.864 292.622 572.132 292.236 572.262 291.751H573.224C573.051 292.444 572.678 293.012 572.106 293.454C571.543 293.887 570.832 294.104 569.974 294.104C569.307 294.104 568.709 293.957 568.18 293.662C567.652 293.359 567.236 292.934 566.932 292.388C566.638 291.833 566.49 291.188 566.49 290.451C566.49 289.714 566.638 289.069 566.932 288.514C567.227 287.959 567.639 287.535 568.167 287.24C568.696 286.945 569.298 286.798 569.974 286.798C570.65 286.798 571.24 286.945 571.742 287.24C572.254 287.535 572.644 287.933 572.912 288.436C573.19 288.93 573.328 289.48 573.328 290.087ZM572.405 290.061C572.414 289.532 572.306 289.082 572.08 288.709C571.864 288.336 571.565 288.055 571.183 287.864C570.802 287.673 570.386 287.578 569.935 287.578C569.259 287.578 568.683 287.795 568.206 288.228C567.73 288.661 567.465 289.272 567.413 290.061H572.405ZM581.315 290.087C581.315 290.399 581.306 290.637 581.289 290.802H575.4C575.426 291.339 575.556 291.799 575.79 292.18C576.024 292.561 576.332 292.852 576.713 293.051C577.094 293.242 577.51 293.337 577.961 293.337C578.55 293.337 579.044 293.194 579.443 292.908C579.85 292.622 580.119 292.236 580.249 291.751H581.211C581.038 292.444 580.665 293.012 580.093 293.454C579.53 293.887 578.819 294.104 577.961 294.104C577.294 294.104 576.696 293.957 576.167 293.662C575.638 293.359 575.222 292.934 574.919 292.388C574.624 291.833 574.477 291.188 574.477 290.451C574.477 289.714 574.624 289.069 574.919 288.514C575.214 287.959 575.625 287.535 576.154 287.24C576.683 286.945 577.285 286.798 577.961 286.798C578.637 286.798 579.226 286.945 579.729 287.24C580.24 287.535 580.63 287.933 580.899 288.436C581.176 288.93 581.315 289.48 581.315 290.087ZM580.392 290.061C580.401 289.532 580.292 289.082 580.067 288.709C579.85 288.336 579.551 288.055 579.17 287.864C578.789 287.673 578.373 287.578 577.922 287.578C577.246 287.578 576.67 287.795 576.193 288.228C575.716 288.661 575.452 289.272 575.4 290.061H580.392ZM591.33 286.772C592.162 286.772 592.838 287.036 593.358 287.565C593.887 288.085 594.151 288.843 594.151 289.84V294H593.254V289.944C593.254 289.173 593.068 288.583 592.695 288.176C592.322 287.769 591.815 287.565 591.174 287.565C590.507 287.565 589.974 287.786 589.575 288.228C589.176 288.67 588.977 289.311 588.977 290.152V294H588.08V289.944C588.08 289.173 587.894 288.583 587.521 288.176C587.148 287.769 586.637 287.565 585.987 287.565C585.32 287.565 584.787 287.786 584.388 288.228C583.989 288.67 583.79 289.311 583.79 290.152V294H582.88V286.902H583.79V288.124C584.015 287.682 584.336 287.348 584.752 287.123C585.168 286.889 585.632 286.772 586.143 286.772C586.758 286.772 587.296 286.919 587.755 287.214C588.223 287.509 588.561 287.942 588.769 288.514C588.96 287.951 589.285 287.522 589.744 287.227C590.212 286.924 590.741 286.772 591.33 286.772ZM599.179 294.104C598.512 294.104 597.909 293.957 597.372 293.662C596.843 293.359 596.423 292.934 596.111 292.388C595.808 291.833 595.656 291.188 595.656 290.451C595.656 289.714 595.812 289.073 596.124 288.527C596.436 287.972 596.861 287.548 597.398 287.253C597.935 286.95 598.538 286.798 599.205 286.798C599.872 286.798 600.475 286.95 601.012 287.253C601.558 287.548 601.983 287.972 602.286 288.527C602.598 289.073 602.754 289.714 602.754 290.451C602.754 291.179 602.598 291.82 602.286 292.375C601.974 292.93 601.545 293.359 600.999 293.662C600.453 293.957 599.846 294.104 599.179 294.104ZM599.179 293.311C599.647 293.311 600.08 293.207 600.479 292.999C600.878 292.782 601.198 292.462 601.441 292.037C601.692 291.604 601.818 291.075 601.818 290.451C601.818 289.827 601.697 289.303 601.454 288.878C601.211 288.445 600.891 288.124 600.492 287.916C600.093 287.699 599.66 287.591 599.192 287.591C598.724 287.591 598.291 287.699 597.892 287.916C597.493 288.124 597.173 288.445 596.93 288.878C596.696 289.303 596.579 289.827 596.579 290.451C596.579 291.075 596.696 291.604 596.93 292.037C597.173 292.462 597.489 292.782 597.879 292.999C598.278 293.207 598.711 293.311 599.179 293.311ZM610.124 287.526C610.124 288.306 609.868 288.934 609.357 289.411C608.846 289.888 608.079 290.126 607.056 290.126H605.223V294H604.313V284.913H607.056C608.07 284.913 608.833 285.151 609.344 285.628C609.864 286.105 610.124 286.737 610.124 287.526ZM607.056 289.346C608.477 289.346 609.188 288.739 609.188 287.526C609.188 286.919 609.019 286.46 608.681 286.148C608.343 285.836 607.801 285.68 607.056 285.68H605.223V289.346H607.056ZM611.135 290.438C611.135 289.71 611.278 289.073 611.564 288.527C611.858 287.972 612.261 287.548 612.773 287.253C613.293 286.95 613.878 286.798 614.528 286.798C615.204 286.798 615.784 286.954 616.27 287.266C616.764 287.578 617.119 287.977 617.336 288.462V286.902H618.246V294H617.336V292.427C617.11 292.912 616.751 293.315 616.257 293.636C615.771 293.948 615.191 294.104 614.515 294.104C613.873 294.104 613.293 293.952 612.773 293.649C612.261 293.346 611.858 292.917 611.564 292.362C611.278 291.807 611.135 291.166 611.135 290.438ZM617.336 290.451C617.336 289.879 617.219 289.376 616.985 288.943C616.751 288.51 616.43 288.176 616.023 287.942C615.624 287.708 615.182 287.591 614.697 287.591C614.194 287.591 613.743 287.704 613.345 287.929C612.946 288.154 612.63 288.484 612.396 288.917C612.17 289.342 612.058 289.849 612.058 290.438C612.058 291.019 612.17 291.53 612.396 291.972C612.63 292.405 612.946 292.739 613.345 292.973C613.743 293.198 614.194 293.311 614.697 293.311C615.182 293.311 615.624 293.194 616.023 292.96C616.43 292.726 616.751 292.392 616.985 291.959C617.219 291.526 617.336 291.023 617.336 290.451ZM626.073 286.902L621.861 297.341H620.912L622.29 293.961L619.378 286.902H620.379L622.797 292.96L625.137 286.902H626.073ZM633.538 285.732C634.474 285.732 635.298 285.914 636.008 286.278C636.719 286.642 637.265 287.153 637.646 287.812C638.028 288.462 638.218 289.212 638.218 290.061C638.218 290.737 638.11 291.383 637.893 291.998C637.677 292.613 637.365 293.116 636.957 293.506C636.55 293.887 636.073 294.078 635.527 294.078C635.103 294.078 634.778 293.965 634.552 293.74C634.336 293.506 634.219 293.19 634.201 292.791C633.933 293.19 633.59 293.506 633.174 293.74C632.758 293.965 632.316 294.078 631.848 294.078C631.19 294.078 630.674 293.879 630.301 293.48C629.937 293.081 629.755 292.54 629.755 291.855C629.755 291.214 629.89 290.616 630.158 290.061C630.427 289.498 630.8 289.047 631.276 288.709C631.753 288.371 632.295 288.202 632.901 288.202C633.335 288.202 633.699 288.297 633.993 288.488C634.297 288.679 634.513 288.956 634.643 289.32L634.812 288.358H635.605L634.942 292.141C634.916 292.297 634.903 292.44 634.903 292.57C634.903 293.151 635.155 293.441 635.657 293.441C636.03 293.441 636.351 293.272 636.619 292.934C636.897 292.596 637.105 292.171 637.243 291.66C637.391 291.14 637.464 290.624 637.464 290.113C637.464 289.35 637.3 288.692 636.97 288.137C636.65 287.574 636.186 287.145 635.579 286.85C634.973 286.547 634.253 286.395 633.421 286.395C632.381 286.395 631.441 286.651 630.6 287.162C629.76 287.673 629.101 288.367 628.624 289.242C628.148 290.117 627.909 291.084 627.909 292.141C627.901 293.32 628.256 294.234 628.975 294.884C629.695 295.543 630.678 295.872 631.926 295.872C632.715 295.872 633.43 295.725 634.071 295.43L634.214 296.067C633.452 296.379 632.624 296.535 631.731 296.535C630.821 296.535 630.02 296.357 629.326 296.002C628.633 295.655 628.096 295.157 627.714 294.507C627.333 293.857 627.142 293.099 627.142 292.232C627.142 291.027 627.415 289.931 627.961 288.943C628.516 287.946 629.279 287.162 630.249 286.59C631.229 286.018 632.325 285.732 633.538 285.732ZM632.108 293.363C632.498 293.363 632.858 293.259 633.187 293.051C633.517 292.843 633.785 292.553 633.993 292.18C634.21 291.807 634.344 291.383 634.396 290.906C634.414 290.75 634.422 290.637 634.422 290.568C634.422 290.083 634.288 289.688 634.019 289.385C633.759 289.073 633.387 288.917 632.901 288.917C632.442 288.917 632.039 289.051 631.692 289.32C631.346 289.589 631.077 289.94 630.886 290.373C630.696 290.798 630.6 291.248 630.6 291.725C630.6 292.228 630.73 292.626 630.99 292.921C631.25 293.216 631.623 293.363 632.108 293.363ZM646.555 290.087C646.555 290.399 646.546 290.637 646.529 290.802H640.64C640.666 291.339 640.796 291.799 641.03 292.18C641.264 292.561 641.571 292.852 641.953 293.051C642.334 293.242 642.75 293.337 643.201 293.337C643.79 293.337 644.284 293.194 644.683 292.908C645.09 292.622 645.359 292.236 645.489 291.751H646.451C646.277 292.444 645.905 293.012 645.333 293.454C644.769 293.887 644.059 294.104 643.201 294.104C642.533 294.104 641.935 293.957 641.407 293.662C640.878 293.359 640.462 292.934 640.159 292.388C639.864 291.833 639.717 291.188 639.717 290.451C639.717 289.714 639.864 289.069 640.159 288.514C640.453 287.959 640.865 287.535 641.394 287.24C641.922 286.945 642.525 286.798 643.201 286.798C643.877 286.798 644.466 286.945 644.969 287.24C645.48 287.535 645.87 287.933 646.139 288.436C646.416 288.93 646.555 289.48 646.555 290.087ZM645.632 290.061C645.64 289.532 645.532 289.082 645.307 288.709C645.09 288.336 644.791 288.055 644.41 287.864C644.028 287.673 643.612 287.578 643.162 287.578C642.486 287.578 641.909 287.795 641.433 288.228C640.956 288.661 640.692 289.272 640.64 290.061H645.632ZM651.837 294L650.004 291.14L648.236 294H647.274L649.562 290.451L647.3 286.902H648.327L650.134 289.723L651.889 286.902H652.838L650.576 290.412L652.864 294H651.837ZM653.583 290.438C653.583 289.71 653.726 289.073 654.012 288.527C654.307 287.972 654.71 287.548 655.221 287.253C655.741 286.95 656.326 286.798 656.976 286.798C657.652 286.798 658.233 286.954 658.718 287.266C659.212 287.578 659.567 287.977 659.784 288.462V286.902H660.694V294H659.784V292.427C659.559 292.912 659.199 293.315 658.705 293.636C658.22 293.948 657.639 294.104 656.963 294.104C656.322 294.104 655.741 293.952 655.221 293.649C654.71 293.346 654.307 292.917 654.012 292.362C653.726 291.807 653.583 291.166 653.583 290.438ZM659.784 290.451C659.784 289.879 659.667 289.376 659.433 288.943C659.199 288.51 658.878 288.176 658.471 287.942C658.072 287.708 657.63 287.591 657.145 287.591C656.642 287.591 656.192 287.704 655.793 287.929C655.394 288.154 655.078 288.484 654.844 288.917C654.619 289.342 654.506 289.849 654.506 290.438C654.506 291.019 654.619 291.53 654.844 291.972C655.078 292.405 655.394 292.739 655.793 292.973C656.192 293.198 656.642 293.311 657.145 293.311C657.63 293.311 658.072 293.194 658.471 292.96C658.878 292.726 659.199 292.392 659.433 291.959C659.667 291.526 659.784 291.023 659.784 290.451ZM671.121 286.772C671.953 286.772 672.629 287.036 673.149 287.565C673.678 288.085 673.942 288.843 673.942 289.84V294H673.045V289.944C673.045 289.173 672.859 288.583 672.486 288.176C672.114 287.769 671.607 287.565 670.965 287.565C670.298 287.565 669.765 287.786 669.366 288.228C668.968 288.67 668.768 289.311 668.768 290.152V294H667.871V289.944C667.871 289.173 667.685 288.583 667.312 288.176C666.94 287.769 666.428 287.565 665.778 287.565C665.111 287.565 664.578 287.786 664.179 288.228C663.781 288.67 663.581 289.311 663.581 290.152V294H662.671V286.902H663.581V288.124C663.807 287.682 664.127 287.348 664.543 287.123C664.959 286.889 665.423 286.772 665.934 286.772C666.55 286.772 667.087 286.919 667.546 287.214C668.014 287.509 668.352 287.942 668.56 288.514C668.751 287.951 669.076 287.522 669.535 287.227C670.003 286.924 670.532 286.772 671.121 286.772ZM676.76 288.462C676.986 287.985 677.341 287.591 677.826 287.279C678.32 286.958 678.905 286.798 679.581 286.798C680.223 286.798 680.799 286.95 681.31 287.253C681.83 287.548 682.233 287.972 682.519 288.527C682.814 289.073 682.961 289.71 682.961 290.438C682.961 291.166 682.814 291.807 682.519 292.362C682.233 292.917 681.83 293.346 681.31 293.649C680.799 293.952 680.223 294.104 679.581 294.104C678.914 294.104 678.333 293.948 677.839 293.636C677.345 293.315 676.986 292.917 676.76 292.44V297.354H675.863V286.902H676.76V288.462ZM682.038 290.438C682.038 289.849 681.921 289.342 681.687 288.917C681.462 288.484 681.15 288.154 680.751 287.929C680.353 287.704 679.902 287.591 679.399 287.591C678.914 287.591 678.468 287.708 678.06 287.942C677.662 288.176 677.345 288.51 677.111 288.943C676.877 289.376 676.76 289.879 676.76 290.451C676.76 291.023 676.877 291.526 677.111 291.959C677.345 292.392 677.662 292.726 678.06 292.96C678.468 293.194 678.914 293.311 679.399 293.311C679.902 293.311 680.353 293.198 680.751 292.973C681.15 292.739 681.462 292.405 681.687 291.972C681.921 291.53 682.038 291.019 682.038 290.438ZM685.446 284.38V294H684.536V284.38H685.446ZM693.829 290.087C693.829 290.399 693.82 290.637 693.803 290.802H687.914C687.94 291.339 688.07 291.799 688.304 292.18C688.538 292.561 688.845 292.852 689.227 293.051C689.608 293.242 690.024 293.337 690.475 293.337C691.064 293.337 691.558 293.194 691.957 292.908C692.364 292.622 692.633 292.236 692.763 291.751H693.725C693.551 292.444 693.179 293.012 692.607 293.454C692.043 293.887 691.333 294.104 690.475 294.104C689.807 294.104 689.209 293.957 688.681 293.662C688.152 293.359 687.736 292.934 687.433 292.388C687.138 291.833 686.991 291.188 686.991 290.451C686.991 289.714 687.138 289.069 687.433 288.514C687.727 287.959 688.139 287.535 688.668 287.24C689.196 286.945 689.799 286.798 690.475 286.798C691.151 286.798 691.74 286.945 692.243 287.24C692.754 287.535 693.144 287.933 693.413 288.436C693.69 288.93 693.829 289.48 693.829 290.087ZM692.906 290.061C692.914 289.532 692.806 289.082 692.581 288.709C692.364 288.336 692.065 288.055 691.684 287.864C691.302 287.673 690.886 287.578 690.436 287.578C689.76 287.578 689.183 287.795 688.707 288.228C688.23 288.661 687.966 289.272 687.914 290.061H692.906ZM695.55 294.065C695.359 294.065 695.199 294 695.069 293.87C694.947 293.74 694.887 293.58 694.887 293.389C694.887 293.198 694.947 293.042 695.069 292.921C695.199 292.791 695.359 292.726 695.55 292.726C695.732 292.726 695.883 292.791 696.005 292.921C696.135 293.042 696.2 293.198 696.2 293.389C696.2 293.58 696.135 293.74 696.005 293.87C695.883 294 695.732 294.065 695.55 294.065ZM697.239 290.451C697.239 289.714 697.386 289.073 697.681 288.527C697.976 287.972 698.383 287.548 698.903 287.253C699.423 286.95 700.017 286.798 700.684 286.798C701.559 286.798 702.279 287.015 702.842 287.448C703.414 287.881 703.782 288.471 703.947 289.216H702.972C702.851 288.705 702.586 288.306 702.179 288.02C701.78 287.725 701.282 287.578 700.684 287.578C700.207 287.578 699.778 287.686 699.397 287.903C699.016 288.12 698.712 288.445 698.487 288.878C698.27 289.303 698.162 289.827 698.162 290.451C698.162 291.075 698.27 291.604 698.487 292.037C698.712 292.47 699.016 292.795 699.397 293.012C699.778 293.229 700.207 293.337 700.684 293.337C701.282 293.337 701.78 293.194 702.179 292.908C702.586 292.613 702.851 292.206 702.972 291.686H703.947C703.782 292.414 703.414 292.999 702.842 293.441C702.27 293.883 701.551 294.104 700.684 294.104C700.017 294.104 699.423 293.957 698.903 293.662C698.383 293.359 697.976 292.934 697.681 292.388C697.386 291.833 697.239 291.188 697.239 290.451ZM708.635 294.104C707.967 294.104 707.365 293.957 706.828 293.662C706.299 293.359 705.879 292.934 705.567 292.388C705.263 291.833 705.112 291.188 705.112 290.451C705.112 289.714 705.268 289.073 705.58 288.527C705.892 287.972 706.316 287.548 706.854 287.253C707.391 286.95 707.993 286.798 708.661 286.798C709.328 286.798 709.93 286.95 710.468 287.253C711.014 287.548 711.438 287.972 711.742 288.527C712.054 289.073 712.21 289.714 712.21 290.451C712.21 291.179 712.054 291.82 711.742 292.375C711.43 292.93 711.001 293.359 710.455 293.662C709.909 293.957 709.302 294.104 708.635 294.104ZM708.635 293.311C709.103 293.311 709.536 293.207 709.935 292.999C710.333 292.782 710.654 292.462 710.897 292.037C711.148 291.604 711.274 291.075 711.274 290.451C711.274 289.827 711.152 289.303 710.91 288.878C710.667 288.445 710.346 288.124 709.948 287.916C709.549 287.699 709.116 287.591 708.648 287.591C708.18 287.591 707.746 287.699 707.348 287.916C706.949 288.124 706.628 288.445 706.386 288.878C706.152 289.303 706.035 289.827 706.035 290.451C706.035 291.075 706.152 291.604 706.386 292.037C706.628 292.462 706.945 292.782 707.335 292.999C707.733 293.207 708.167 293.311 708.635 293.311ZM722.218 286.772C723.05 286.772 723.726 287.036 724.246 287.565C724.775 288.085 725.039 288.843 725.039 289.84V294H724.142V289.944C724.142 289.173 723.956 288.583 723.583 288.176C723.211 287.769 722.704 287.565 722.062 287.565C721.395 287.565 720.862 287.786 720.463 288.228C720.065 288.67 719.865 289.311 719.865 290.152V294H718.968V289.944C718.968 289.173 718.782 288.583 718.409 288.176C718.037 287.769 717.525 287.565 716.875 287.565C716.208 287.565 715.675 287.786 715.276 288.228C714.878 288.67 714.678 289.311 714.678 290.152V294H713.768V286.902H714.678V288.124C714.904 287.682 715.224 287.348 715.64 287.123C716.056 286.889 716.52 286.772 717.031 286.772C717.647 286.772 718.184 286.919 718.643 287.214C719.111 287.509 719.449 287.942 719.657 288.514C719.848 287.951 720.173 287.522 720.632 287.227C721.1 286.924 721.629 286.772 722.218 286.772ZM727.298 283.665L727.168 286.174H726.531L726.401 283.665H727.298ZM728.858 283.665L728.741 286.174H728.104L727.961 283.665H728.858ZM731.12 292.492L729.768 295.898H729.144L730.106 292.492H731.12ZM604.186 319.065C603.996 319.065 603.835 319 603.705 318.87C603.584 318.74 603.523 318.58 603.523 318.389C603.523 318.198 603.584 318.042 603.705 317.921C603.835 317.791 603.996 317.726 604.186 317.726C604.368 317.726 604.52 317.791 604.641 317.921C604.771 318.042 604.836 318.198 604.836 318.389C604.836 318.58 604.771 318.74 604.641 318.87C604.52 319 604.368 319.065 604.186 319.065ZM604.186 313.41C603.996 313.41 603.835 313.345 603.705 313.215C603.584 313.085 603.523 312.925 603.523 312.734C603.523 312.543 603.584 312.387 603.705 312.266C603.835 312.136 603.996 312.071 604.186 312.071C604.368 312.071 604.52 312.136 604.641 312.266C604.771 312.387 604.836 312.543 604.836 312.734C604.836 312.925 604.771 313.085 604.641 313.215C604.52 313.345 604.368 313.41 604.186 313.41ZM609.16 310.498V309.679H611.37V319H610.447V310.498H609.16ZM498.251 339.515C497.341 339.732 496.886 340.243 496.886 341.049C496.886 341.43 496.934 341.981 497.029 342.7C497.038 342.787 497.064 343.034 497.107 343.441C497.15 343.84 497.172 344.208 497.172 344.546C497.172 345.17 497.003 345.638 496.665 345.95C496.327 346.271 495.868 346.431 495.287 346.431H494.637V345.638H495.131C495.512 345.638 495.798 345.547 495.989 345.365C496.188 345.183 496.288 344.888 496.288 344.481C496.288 344.178 496.266 343.835 496.223 343.454C496.18 343.064 496.154 342.821 496.145 342.726C496.05 341.998 496.002 341.43 496.002 341.023C496.002 340.546 496.119 340.148 496.353 339.827C496.596 339.498 496.964 339.277 497.458 339.164V339.138C496.964 339.025 496.596 338.809 496.353 338.488C496.119 338.159 496.002 337.756 496.002 337.279C496.002 336.863 496.05 336.291 496.145 335.563C496.154 335.476 496.18 335.242 496.223 334.861C496.266 334.471 496.288 334.124 496.288 333.821C496.288 333.414 496.188 333.119 495.989 332.937C495.798 332.755 495.512 332.664 495.131 332.664H494.637V331.871H495.287C495.868 331.871 496.327 332.031 496.665 332.352C497.003 332.664 497.172 333.132 497.172 333.756C497.172 334.094 497.15 334.467 497.107 334.874C497.064 335.273 497.038 335.511 497.029 335.589C496.934 336.3 496.886 336.854 496.886 337.253C496.886 338.059 497.341 338.566 498.251 338.774V339.515Z"
                  fill="white"
                />
                <path
                  d="M509.248 133.665L509.118 136.174H508.481L508.351 133.665H509.248ZM510.808 133.665L510.691 136.174H510.054L509.911 133.665H510.808ZM513.147 138.163C513.347 137.721 513.65 137.379 514.057 137.136C514.473 136.893 514.98 136.772 515.578 136.772V137.721H515.331C514.673 137.721 514.144 137.899 513.745 138.254C513.347 138.609 513.147 139.203 513.147 140.035V144H512.237V136.902H513.147V138.163ZM523.269 140.087C523.269 140.399 523.261 140.637 523.243 140.802H517.354C517.38 141.339 517.51 141.799 517.744 142.18C517.978 142.561 518.286 142.852 518.667 143.051C519.049 143.242 519.465 143.337 519.915 143.337C520.505 143.337 520.999 143.194 521.397 142.908C521.805 142.622 522.073 142.236 522.203 141.751H523.165C522.992 142.444 522.619 143.012 522.047 143.454C521.484 143.887 520.773 144.104 519.915 144.104C519.248 144.104 518.65 143.957 518.121 143.662C517.593 143.359 517.177 142.934 516.873 142.388C516.579 141.833 516.431 141.188 516.431 140.451C516.431 139.714 516.579 139.069 516.873 138.514C517.168 137.959 517.58 137.535 518.108 137.24C518.637 136.945 519.239 136.798 519.915 136.798C520.591 136.798 521.181 136.945 521.683 137.24C522.195 137.535 522.585 137.933 522.853 138.436C523.131 138.93 523.269 139.48 523.269 140.087ZM522.346 140.061C522.355 139.532 522.247 139.082 522.021 138.709C521.805 138.336 521.506 138.055 521.124 137.864C520.743 137.673 520.327 137.578 519.876 137.578C519.2 137.578 518.624 137.795 518.147 138.228C517.671 138.661 517.406 139.272 517.354 140.061H522.346ZM524.418 140.438C524.418 139.71 524.561 139.073 524.847 138.527C525.142 137.972 525.545 137.548 526.056 137.253C526.576 136.95 527.161 136.798 527.811 136.798C528.487 136.798 529.068 136.954 529.553 137.266C530.047 137.578 530.402 137.977 530.619 138.462V136.902H531.529V144H530.619V142.427C530.394 142.912 530.034 143.315 529.54 143.636C529.055 143.948 528.474 144.104 527.798 144.104C527.157 144.104 526.576 143.952 526.056 143.649C525.545 143.346 525.142 142.917 524.847 142.362C524.561 141.807 524.418 141.166 524.418 140.438ZM530.619 140.451C530.619 139.879 530.502 139.376 530.268 138.943C530.034 138.51 529.713 138.176 529.306 137.942C528.907 137.708 528.465 137.591 527.98 137.591C527.477 137.591 527.027 137.704 526.628 137.929C526.229 138.154 525.913 138.484 525.679 138.917C525.454 139.342 525.341 139.849 525.341 140.438C525.341 141.019 525.454 141.53 525.679 141.972C525.913 142.405 526.229 142.739 526.628 142.973C527.027 143.198 527.477 143.311 527.98 143.311C528.465 143.311 528.907 143.194 529.306 142.96C529.713 142.726 530.034 142.392 530.268 141.959C530.502 141.526 530.619 141.023 530.619 140.451ZM534.417 134.38V144H533.507V134.38H534.417ZM543.228 144H542.318L537.287 136.356V144H536.377V134.913H537.287L542.318 142.544V134.913H543.228V144ZM544.773 140.438C544.773 139.71 544.916 139.073 545.202 138.527C545.497 137.972 545.9 137.548 546.411 137.253C546.931 136.95 547.516 136.798 548.166 136.798C548.842 136.798 549.423 136.954 549.908 137.266C550.402 137.578 550.758 137.977 550.974 138.462V136.902H551.884V144H550.974V142.427C550.749 142.912 550.389 143.315 549.895 143.636C549.41 143.948 548.829 144.104 548.153 144.104C547.512 144.104 546.931 143.952 546.411 143.649C545.9 143.346 545.497 142.917 545.202 142.362C544.916 141.807 544.773 141.166 544.773 140.438ZM550.974 140.451C550.974 139.879 550.857 139.376 550.623 138.943C550.389 138.51 550.069 138.176 549.661 137.942C549.263 137.708 548.821 137.591 548.335 137.591C547.833 137.591 547.382 137.704 546.983 137.929C546.585 138.154 546.268 138.484 546.034 138.917C545.809 139.342 545.696 139.849 545.696 140.438C545.696 141.019 545.809 141.53 546.034 141.972C546.268 142.405 546.585 142.739 546.983 142.973C547.382 143.198 547.833 143.311 548.335 143.311C548.821 143.311 549.263 143.194 549.661 142.96C550.069 142.726 550.389 142.392 550.623 141.959C550.857 141.526 550.974 141.023 550.974 140.451ZM562.312 136.772C563.144 136.772 563.82 137.036 564.34 137.565C564.869 138.085 565.133 138.843 565.133 139.84V144H564.236V139.944C564.236 139.173 564.05 138.583 563.677 138.176C563.304 137.769 562.797 137.565 562.156 137.565C561.489 137.565 560.956 137.786 560.557 138.228C560.158 138.67 559.959 139.311 559.959 140.152V144H559.062V139.944C559.062 139.173 558.876 138.583 558.503 138.176C558.13 137.769 557.619 137.565 556.969 137.565C556.302 137.565 555.769 137.786 555.37 138.228C554.971 138.67 554.772 139.311 554.772 140.152V144H553.862V136.902H554.772V138.124C554.997 137.682 555.318 137.348 555.734 137.123C556.15 136.889 556.614 136.772 557.125 136.772C557.74 136.772 558.278 136.919 558.737 137.214C559.205 137.509 559.543 137.942 559.751 138.514C559.942 137.951 560.267 137.522 560.726 137.227C561.194 136.924 561.723 136.772 562.312 136.772ZM573.476 140.087C573.476 140.399 573.467 140.637 573.45 140.802H567.561C567.587 141.339 567.717 141.799 567.951 142.18C568.185 142.561 568.493 142.852 568.874 143.051C569.255 143.242 569.671 143.337 570.122 143.337C570.711 143.337 571.205 143.194 571.604 142.908C572.011 142.622 572.28 142.236 572.41 141.751H573.372C573.199 142.444 572.826 143.012 572.254 143.454C571.691 143.887 570.98 144.104 570.122 144.104C569.455 144.104 568.857 143.957 568.328 143.662C567.799 143.359 567.383 142.934 567.08 142.388C566.785 141.833 566.638 141.188 566.638 140.451C566.638 139.714 566.785 139.069 567.08 138.514C567.375 137.959 567.786 137.535 568.315 137.24C568.844 136.945 569.446 136.798 570.122 136.798C570.798 136.798 571.387 136.945 571.89 137.24C572.401 137.535 572.791 137.933 573.06 138.436C573.337 138.93 573.476 139.48 573.476 140.087ZM572.553 140.061C572.562 139.532 572.453 139.082 572.228 138.709C572.011 138.336 571.712 138.055 571.331 137.864C570.95 137.673 570.534 137.578 570.083 137.578C569.407 137.578 568.831 137.795 568.354 138.228C567.877 138.661 567.613 139.272 567.561 140.061H572.553ZM575.379 133.665L575.249 136.174H574.612L574.482 133.665H575.379ZM576.939 133.665L576.822 136.174H576.185L576.042 133.665H576.939ZM509.248 158.665L509.118 161.174H508.481L508.351 158.665H509.248ZM510.808 158.665L510.691 161.174H510.054L509.911 158.665H510.808ZM511.821 165.438C511.821 164.71 511.964 164.073 512.25 163.527C512.545 162.972 512.948 162.548 513.459 162.253C513.979 161.95 514.564 161.798 515.214 161.798C515.89 161.798 516.471 161.954 516.956 162.266C517.45 162.578 517.806 162.977 518.022 163.462V161.902H518.932V169H518.022V167.427C517.797 167.912 517.437 168.315 516.943 168.636C516.458 168.948 515.877 169.104 515.201 169.104C514.56 169.104 513.979 168.952 513.459 168.649C512.948 168.346 512.545 167.917 512.25 167.362C511.964 166.807 511.821 166.166 511.821 165.438ZM518.022 165.451C518.022 164.879 517.905 164.376 517.671 163.943C517.437 163.51 517.117 163.176 516.709 162.942C516.311 162.708 515.869 162.591 515.383 162.591C514.881 162.591 514.43 162.704 514.031 162.929C513.633 163.154 513.316 163.484 513.082 163.917C512.857 164.342 512.744 164.849 512.744 165.438C512.744 166.019 512.857 166.53 513.082 166.972C513.316 167.405 513.633 167.739 514.031 167.973C514.43 168.198 514.881 168.311 515.383 168.311C515.869 168.311 516.311 168.194 516.709 167.96C517.117 167.726 517.437 167.392 517.671 166.959C517.905 166.526 518.022 166.023 518.022 165.451ZM529.36 161.772C530.192 161.772 530.868 162.036 531.388 162.565C531.916 163.085 532.181 163.843 532.181 164.84V169H531.284V164.944C531.284 164.173 531.097 163.583 530.725 163.176C530.352 162.769 529.845 162.565 529.204 162.565C528.536 162.565 528.003 162.786 527.605 163.228C527.206 163.67 527.007 164.311 527.007 165.152V169H526.11V164.944C526.11 164.173 525.923 163.583 525.551 163.176C525.178 162.769 524.667 162.565 524.017 162.565C523.349 162.565 522.816 162.786 522.418 163.228C522.019 163.67 521.82 164.311 521.82 165.152V169H520.91V161.902H521.82V163.124C522.045 162.682 522.366 162.348 522.782 162.123C523.198 161.889 523.661 161.772 524.173 161.772C524.788 161.772 525.325 161.919 525.785 162.214C526.253 162.509 526.591 162.942 526.799 163.514C526.989 162.951 527.314 162.522 527.774 162.227C528.242 161.924 528.77 161.772 529.36 161.772ZM537.209 169.104C536.541 169.104 535.939 168.957 535.402 168.662C534.873 168.359 534.453 167.934 534.141 167.388C533.837 166.833 533.686 166.188 533.686 165.451C533.686 164.714 533.842 164.073 534.154 163.527C534.466 162.972 534.89 162.548 535.428 162.253C535.965 161.95 536.567 161.798 537.235 161.798C537.902 161.798 538.504 161.95 539.042 162.253C539.588 162.548 540.012 162.972 540.316 163.527C540.628 164.073 540.784 164.714 540.784 165.451C540.784 166.179 540.628 166.82 540.316 167.375C540.004 167.93 539.575 168.359 539.029 168.662C538.483 168.957 537.876 169.104 537.209 169.104ZM537.209 168.311C537.677 168.311 538.11 168.207 538.509 167.999C538.907 167.782 539.228 167.462 539.471 167.037C539.722 166.604 539.848 166.075 539.848 165.451C539.848 164.827 539.726 164.303 539.484 163.878C539.241 163.445 538.92 163.124 538.522 162.916C538.123 162.699 537.69 162.591 537.222 162.591C536.754 162.591 536.32 162.699 535.922 162.916C535.523 163.124 535.202 163.445 534.96 163.878C534.726 164.303 534.609 164.827 534.609 165.451C534.609 166.075 534.726 166.604 534.96 167.037C535.202 167.462 535.519 167.782 535.909 167.999C536.307 168.207 536.741 168.311 537.209 168.311ZM548.492 161.902V169H547.582V167.752C547.374 168.194 547.053 168.532 546.62 168.766C546.186 169 545.701 169.117 545.164 169.117C544.314 169.117 543.621 168.857 543.084 168.337C542.546 167.808 542.278 167.046 542.278 166.049V161.902H543.175V165.945C543.175 166.716 543.365 167.306 543.747 167.713C544.137 168.12 544.665 168.324 545.333 168.324C546.017 168.324 546.563 168.107 546.971 167.674C547.378 167.241 547.582 166.604 547.582 165.763V161.902H548.492ZM553.797 161.772C554.646 161.772 555.34 162.036 555.877 162.565C556.414 163.085 556.683 163.843 556.683 164.84V169H555.786V164.944C555.786 164.173 555.591 163.583 555.201 163.176C554.82 162.769 554.295 162.565 553.628 162.565C552.943 162.565 552.397 162.782 551.99 163.215C551.583 163.648 551.379 164.285 551.379 165.126V169H550.469V161.902H551.379V163.111C551.604 162.678 551.929 162.348 552.354 162.123C552.779 161.889 553.26 161.772 553.797 161.772ZM559.779 162.669V167.076C559.779 167.509 559.861 167.808 560.026 167.973C560.19 168.138 560.481 168.22 560.897 168.22H561.729V169H560.754C560.112 169 559.636 168.853 559.324 168.558C559.012 168.255 558.856 167.761 558.856 167.076V162.669H557.868V161.902H558.856V160.121H559.779V161.902H561.729V162.669H559.779ZM563.467 158.665L563.337 161.174H562.7L562.57 158.665H563.467ZM565.027 158.665L564.91 161.174H564.273L564.13 158.665H565.027ZM509.248 183.665L509.118 186.174H508.481L508.351 183.665H509.248ZM510.808 183.665L510.691 186.174H510.054L509.911 183.665H510.808ZM513.134 188.462C513.36 187.985 513.715 187.591 514.2 187.279C514.694 186.958 515.279 186.798 515.955 186.798C516.597 186.798 517.173 186.95 517.684 187.253C518.204 187.548 518.607 187.972 518.893 188.527C519.188 189.073 519.335 189.71 519.335 190.438C519.335 191.166 519.188 191.807 518.893 192.362C518.607 192.917 518.204 193.346 517.684 193.649C517.173 193.952 516.597 194.104 515.955 194.104C515.288 194.104 514.707 193.948 514.213 193.636C513.719 193.315 513.36 192.917 513.134 192.44V197.354H512.237V186.902H513.134V188.462ZM518.412 190.438C518.412 189.849 518.295 189.342 518.061 188.917C517.836 188.484 517.524 188.154 517.125 187.929C516.727 187.704 516.276 187.591 515.773 187.591C515.288 187.591 514.842 187.708 514.434 187.942C514.036 188.176 513.719 188.51 513.485 188.943C513.251 189.376 513.134 189.879 513.134 190.451C513.134 191.023 513.251 191.526 513.485 191.959C513.719 192.392 514.036 192.726 514.434 192.96C514.842 193.194 515.288 193.311 515.773 193.311C516.276 193.311 516.727 193.198 517.125 192.973C517.524 192.739 517.836 192.405 518.061 191.972C518.295 191.53 518.412 191.019 518.412 190.438ZM524.29 186.772C524.827 186.772 525.308 186.885 525.733 187.11C526.166 187.335 526.504 187.682 526.747 188.15C526.998 188.609 527.124 189.173 527.124 189.84V194H526.227V189.944C526.227 189.173 526.032 188.583 525.642 188.176C525.26 187.769 524.736 187.565 524.069 187.565C523.384 187.565 522.838 187.782 522.431 188.215C522.023 188.648 521.82 189.285 521.82 190.126V194H520.91V184.38H521.82V188.111C522.045 187.686 522.374 187.357 522.808 187.123C523.25 186.889 523.744 186.772 524.29 186.772ZM532.143 194.104C531.476 194.104 530.874 193.957 530.336 193.662C529.808 193.359 529.387 192.934 529.075 192.388C528.772 191.833 528.62 191.188 528.62 190.451C528.62 189.714 528.776 189.073 529.088 188.527C529.4 187.972 529.825 187.548 530.362 187.253C530.9 186.95 531.502 186.798 532.169 186.798C532.837 186.798 533.439 186.95 533.976 187.253C534.522 187.548 534.947 187.972 535.25 188.527C535.562 189.073 535.718 189.714 535.718 190.451C535.718 191.179 535.562 191.82 535.25 192.375C534.938 192.93 534.509 193.359 533.963 193.662C533.417 193.957 532.811 194.104 532.143 194.104ZM532.143 193.311C532.611 193.311 533.045 193.207 533.443 192.999C533.842 192.782 534.163 192.462 534.405 192.037C534.657 191.604 534.782 191.075 534.782 190.451C534.782 189.827 534.661 189.303 534.418 188.878C534.176 188.445 533.855 188.124 533.456 187.916C533.058 187.699 532.624 187.591 532.156 187.591C531.688 187.591 531.255 187.699 530.856 187.916C530.458 188.124 530.137 188.445 529.894 188.878C529.66 189.303 529.543 189.827 529.543 190.451C529.543 191.075 529.66 191.604 529.894 192.037C530.137 192.462 530.453 192.782 530.843 192.999C531.242 193.207 531.675 193.311 532.143 193.311ZM540.605 186.772C541.454 186.772 542.148 187.036 542.685 187.565C543.222 188.085 543.491 188.843 543.491 189.84V194H542.594V189.944C542.594 189.173 542.399 188.583 542.009 188.176C541.628 187.769 541.103 187.565 540.436 187.565C539.751 187.565 539.205 187.782 538.798 188.215C538.391 188.648 538.187 189.285 538.187 190.126V194H537.277V186.902H538.187V188.111C538.412 187.678 538.737 187.348 539.162 187.123C539.587 186.889 540.068 186.772 540.605 186.772ZM551.826 190.087C551.826 190.399 551.817 190.637 551.8 190.802H545.911C545.937 191.339 546.067 191.799 546.301 192.18C546.535 192.561 546.842 192.852 547.224 193.051C547.605 193.242 548.021 193.337 548.472 193.337C549.061 193.337 549.555 193.194 549.954 192.908C550.361 192.622 550.63 192.236 550.76 191.751H551.722C551.548 192.444 551.176 193.012 550.604 193.454C550.04 193.887 549.33 194.104 548.472 194.104C547.804 194.104 547.206 193.957 546.678 193.662C546.149 193.359 545.733 192.934 545.43 192.388C545.135 191.833 544.988 191.188 544.988 190.451C544.988 189.714 545.135 189.069 545.43 188.514C545.724 187.959 546.136 187.535 546.665 187.24C547.193 186.945 547.796 186.798 548.472 186.798C549.148 186.798 549.737 186.945 550.24 187.24C550.751 187.535 551.141 187.933 551.41 188.436C551.687 188.93 551.826 189.48 551.826 190.087ZM550.903 190.061C550.911 189.532 550.803 189.082 550.578 188.709C550.361 188.336 550.062 188.055 549.681 187.864C549.299 187.673 548.883 187.578 548.433 187.578C547.757 187.578 547.18 187.795 546.704 188.228C546.227 188.661 545.963 189.272 545.911 190.061H550.903ZM553.729 183.665L553.599 186.174H552.962L552.832 183.665H553.729ZM555.289 183.665L555.172 186.174H554.535L554.392 183.665H555.289ZM556.874 194.065C556.684 194.065 556.523 194 556.393 193.87C556.272 193.74 556.211 193.58 556.211 193.389C556.211 193.198 556.272 193.042 556.393 192.921C556.523 192.791 556.684 192.726 556.874 192.726C557.056 192.726 557.208 192.791 557.329 192.921C557.459 193.042 557.524 193.198 557.524 193.389C557.524 193.58 557.459 193.74 557.329 193.87C557.208 194 557.056 194.065 556.874 194.065ZM556.874 188.41C556.684 188.41 556.523 188.345 556.393 188.215C556.272 188.085 556.211 187.925 556.211 187.734C556.211 187.543 556.272 187.387 556.393 187.266C556.523 187.136 556.684 187.071 556.874 187.071C557.056 187.071 557.208 187.136 557.329 187.266C557.459 187.387 557.524 187.543 557.524 187.734C557.524 187.925 557.459 188.085 557.329 188.215C557.208 188.345 557.056 188.41 556.874 188.41ZM509.248 208.665L509.118 211.174H508.481L508.351 208.665H509.248ZM510.808 208.665L510.691 211.174H510.054L509.911 208.665H510.808ZM514.681 219.104C513.867 219.104 513.199 218.918 512.679 218.545C512.168 218.164 511.882 217.648 511.821 216.998H512.757C512.801 217.397 512.987 217.722 513.316 217.973C513.654 218.216 514.105 218.337 514.668 218.337C515.162 218.337 515.548 218.22 515.825 217.986C516.111 217.752 516.254 217.462 516.254 217.115C516.254 216.872 516.176 216.673 516.02 216.517C515.864 216.361 515.665 216.24 515.422 216.153C515.188 216.058 514.868 215.958 514.46 215.854C513.932 215.715 513.503 215.577 513.173 215.438C512.844 215.299 512.562 215.096 512.328 214.827C512.103 214.55 511.99 214.181 511.99 213.722C511.99 213.375 512.094 213.055 512.302 212.76C512.51 212.465 512.805 212.231 513.186 212.058C513.568 211.885 514.001 211.798 514.486 211.798C515.249 211.798 515.864 211.993 516.332 212.383C516.8 212.764 517.052 213.293 517.086 213.969H516.176C516.15 213.553 515.986 213.219 515.682 212.968C515.388 212.708 514.98 212.578 514.46 212.578C514.001 212.578 513.628 212.686 513.342 212.903C513.056 213.12 512.913 213.388 512.913 213.709C512.913 213.986 512.996 214.216 513.16 214.398C513.334 214.571 513.546 214.71 513.797 214.814C514.049 214.909 514.387 215.018 514.811 215.139C515.323 215.278 515.73 215.412 516.033 215.542C516.337 215.672 516.597 215.863 516.813 216.114C517.03 216.365 517.143 216.699 517.151 217.115C517.151 217.496 517.047 217.839 516.839 218.142C516.631 218.437 516.341 218.671 515.968 218.844C515.596 219.017 515.167 219.104 514.681 219.104ZM519.219 210.563C519.037 210.563 518.881 210.498 518.751 210.368C518.621 210.238 518.556 210.078 518.556 209.887C518.556 209.696 518.621 209.54 518.751 209.419C518.881 209.289 519.037 209.224 519.219 209.224C519.401 209.224 519.557 209.289 519.687 209.419C519.817 209.54 519.882 209.696 519.882 209.887C519.882 210.078 519.817 210.238 519.687 210.368C519.557 210.498 519.401 210.563 519.219 210.563ZM519.674 211.902V219H518.764V211.902H519.674ZM524.612 211.798C525.279 211.798 525.86 211.954 526.354 212.266C526.848 212.578 527.203 212.972 527.42 213.449V211.902H528.33V219.182C528.33 219.832 528.187 220.408 527.901 220.911C527.624 221.414 527.234 221.799 526.731 222.068C526.228 222.345 525.656 222.484 525.015 222.484C524.105 222.484 523.347 222.267 522.74 221.834C522.142 221.401 521.769 220.811 521.622 220.066H522.519C522.675 220.56 522.97 220.954 523.403 221.249C523.845 221.544 524.382 221.691 525.015 221.691C525.474 221.691 525.886 221.591 526.25 221.392C526.614 221.201 526.9 220.915 527.108 220.534C527.316 220.153 527.42 219.702 527.42 219.182V217.427C527.195 217.912 526.835 218.315 526.341 218.636C525.856 218.948 525.279 219.104 524.612 219.104C523.962 219.104 523.377 218.952 522.857 218.649C522.346 218.346 521.943 217.917 521.648 217.362C521.362 216.807 521.219 216.166 521.219 215.438C521.219 214.71 521.362 214.073 521.648 213.527C521.943 212.972 522.346 212.548 522.857 212.253C523.377 211.95 523.962 211.798 524.612 211.798ZM527.42 215.451C527.42 214.879 527.303 214.376 527.069 213.943C526.835 213.51 526.514 213.176 526.107 212.942C525.708 212.708 525.266 212.591 524.781 212.591C524.278 212.591 523.828 212.704 523.429 212.929C523.03 213.154 522.714 213.484 522.48 213.917C522.255 214.342 522.142 214.849 522.142 215.438C522.142 216.019 522.255 216.53 522.48 216.972C522.714 217.405 523.03 217.739 523.429 217.973C523.828 218.198 524.278 218.311 524.781 218.311C525.266 218.311 525.708 218.194 526.107 217.96C526.514 217.726 526.835 217.392 527.069 216.959C527.303 216.526 527.42 216.023 527.42 215.451ZM533.635 211.772C534.485 211.772 535.178 212.036 535.715 212.565C536.253 213.085 536.521 213.843 536.521 214.84V219H535.624V214.944C535.624 214.173 535.429 213.583 535.039 213.176C534.658 212.769 534.134 212.565 533.466 212.565C532.782 212.565 532.236 212.782 531.828 213.215C531.421 213.648 531.217 214.285 531.217 215.126V219H530.307V211.902H531.217V213.111C531.443 212.678 531.768 212.348 532.192 212.123C532.617 211.889 533.098 211.772 533.635 211.772ZM538.772 208.665L538.642 211.174H538.005L537.875 208.665H538.772ZM540.332 208.665L540.215 211.174H539.578L539.435 208.665H540.332ZM509.248 233.665L509.118 236.174H508.481L508.351 233.665H509.248ZM510.808 233.665L510.691 236.174H510.054L509.911 233.665H510.808ZM511.821 240.451C511.821 239.714 511.969 239.073 512.263 238.527C512.558 237.972 512.965 237.548 513.485 237.253C514.005 236.95 514.599 236.798 515.266 236.798C516.142 236.798 516.861 237.015 517.424 237.448C517.996 237.881 518.365 238.471 518.529 239.216H517.554C517.433 238.705 517.169 238.306 516.761 238.02C516.363 237.725 515.864 237.578 515.266 237.578C514.79 237.578 514.361 237.686 513.979 237.903C513.598 238.12 513.295 238.445 513.069 238.878C512.853 239.303 512.744 239.827 512.744 240.451C512.744 241.075 512.853 241.604 513.069 242.037C513.295 242.47 513.598 242.795 513.979 243.012C514.361 243.229 514.79 243.337 515.266 243.337C515.864 243.337 516.363 243.194 516.761 242.908C517.169 242.613 517.433 242.206 517.554 241.686H518.529C518.365 242.414 517.996 242.999 517.424 243.441C516.852 243.883 516.133 244.104 515.266 244.104C514.599 244.104 514.005 243.957 513.485 243.662C512.965 243.359 512.558 242.934 512.263 242.388C511.969 241.833 511.821 241.188 511.821 240.451ZM519.694 240.438C519.694 239.71 519.837 239.073 520.123 238.527C520.418 237.972 520.821 237.548 521.332 237.253C521.852 236.95 522.437 236.798 523.087 236.798C523.763 236.798 524.344 236.954 524.829 237.266C525.323 237.578 525.678 237.977 525.895 238.462V236.902H526.805V244H525.895V242.427C525.67 242.912 525.31 243.315 524.816 243.636C524.331 243.948 523.75 244.104 523.074 244.104C522.433 244.104 521.852 243.952 521.332 243.649C520.821 243.346 520.418 242.917 520.123 242.362C519.837 241.807 519.694 241.166 519.694 240.438ZM525.895 240.451C525.895 239.879 525.778 239.376 525.544 238.943C525.31 238.51 524.989 238.176 524.582 237.942C524.183 237.708 523.741 237.591 523.256 237.591C522.753 237.591 522.303 237.704 521.904 237.929C521.505 238.154 521.189 238.484 520.955 238.917C520.73 239.342 520.617 239.849 520.617 240.438C520.617 241.019 520.73 241.53 520.955 241.972C521.189 242.405 521.505 242.739 521.904 242.973C522.303 243.198 522.753 243.311 523.256 243.311C523.741 243.311 524.183 243.194 524.582 242.96C524.989 242.726 525.31 242.392 525.544 241.959C525.778 241.526 525.895 241.023 525.895 240.451ZM529.692 234.38V244H528.782V234.38H529.692ZM532.563 234.38V244H531.653V234.38H532.563ZM535.421 238.475C535.655 237.981 536.014 237.578 536.5 237.266C536.994 236.954 537.574 236.798 538.242 236.798C538.892 236.798 539.472 236.95 539.984 237.253C540.495 237.548 540.894 237.972 541.18 238.527C541.474 239.073 541.622 239.71 541.622 240.438C541.622 241.166 541.474 241.807 541.18 242.362C540.894 242.917 540.491 243.346 539.971 243.649C539.459 243.952 538.883 244.104 538.242 244.104C537.566 244.104 536.981 243.952 536.487 243.649C536.001 243.337 535.646 242.934 535.421 242.44V244H534.524V234.38H535.421V238.475ZM540.699 240.438C540.699 239.849 540.582 239.342 540.348 238.917C540.122 238.484 539.81 238.154 539.412 237.929C539.013 237.704 538.562 237.591 538.06 237.591C537.574 237.591 537.128 237.708 536.721 237.942C536.322 238.176 536.006 238.51 535.772 238.943C535.538 239.376 535.421 239.879 535.421 240.451C535.421 241.023 535.538 241.526 535.772 241.959C536.006 242.392 536.322 242.726 536.721 242.96C537.128 243.194 537.574 243.311 538.06 243.311C538.562 243.311 539.013 243.198 539.412 242.973C539.81 242.739 540.122 242.405 540.348 241.972C540.582 241.53 540.699 241.019 540.699 240.438ZM542.78 240.438C542.78 239.71 542.923 239.073 543.209 238.527C543.504 237.972 543.907 237.548 544.418 237.253C544.938 236.95 545.523 236.798 546.173 236.798C546.849 236.798 547.43 236.954 547.915 237.266C548.409 237.578 548.765 237.977 548.981 238.462V236.902H549.891V244H548.981V242.427C548.756 242.912 548.396 243.315 547.902 243.636C547.417 243.948 546.836 244.104 546.16 244.104C545.519 244.104 544.938 243.952 544.418 243.649C543.907 243.346 543.504 242.917 543.209 242.362C542.923 241.807 542.78 241.166 542.78 240.438ZM548.981 240.451C548.981 239.879 548.864 239.376 548.63 238.943C548.396 238.51 548.076 238.176 547.668 237.942C547.27 237.708 546.828 237.591 546.342 237.591C545.84 237.591 545.389 237.704 544.99 237.929C544.592 238.154 544.275 238.484 544.041 238.917C543.816 239.342 543.703 239.849 543.703 240.438C543.703 241.019 543.816 241.53 544.041 241.972C544.275 242.405 544.592 242.739 544.99 242.973C545.389 243.198 545.84 243.311 546.342 243.311C546.828 243.311 547.27 243.194 547.668 242.96C548.076 242.726 548.396 242.392 548.63 241.959C548.864 241.526 548.981 241.023 548.981 240.451ZM551.453 240.451C551.453 239.714 551.6 239.073 551.895 238.527C552.189 237.972 552.597 237.548 553.117 237.253C553.637 236.95 554.23 236.798 554.898 236.798C555.773 236.798 556.492 237.015 557.056 237.448C557.628 237.881 557.996 238.471 558.161 239.216H557.186C557.064 238.705 556.8 238.306 556.393 238.02C555.994 237.725 555.496 237.578 554.898 237.578C554.421 237.578 553.992 237.686 553.611 237.903C553.229 238.12 552.926 238.445 552.701 238.878C552.484 239.303 552.376 239.827 552.376 240.451C552.376 241.075 552.484 241.604 552.701 242.037C552.926 242.47 553.229 242.795 553.611 243.012C553.992 243.229 554.421 243.337 554.898 243.337C555.496 243.337 555.994 243.194 556.393 242.908C556.8 242.613 557.064 242.206 557.186 241.686H558.161C557.996 242.414 557.628 242.999 557.056 243.441C556.484 243.883 555.764 244.104 554.898 244.104C554.23 244.104 553.637 243.957 553.117 243.662C552.597 243.359 552.189 242.934 551.895 242.388C551.6 241.833 551.453 241.188 551.453 240.451ZM563.576 244L560.651 240.815V244H559.741V234.38H560.651V240.074L563.511 236.902H564.785L561.418 240.438L564.811 244H563.576ZM566.758 234.913V240.633C566.758 241.534 566.971 242.202 567.395 242.635C567.829 243.068 568.418 243.285 569.163 243.285C569.909 243.285 570.489 243.073 570.905 242.648C571.33 242.215 571.542 241.543 571.542 240.633V234.913H572.452V240.62C572.452 241.773 572.145 242.639 571.529 243.22C570.923 243.801 570.13 244.091 569.15 244.091C568.171 244.091 567.374 243.801 566.758 243.22C566.152 242.639 565.848 241.773 565.848 240.62V234.913H566.758ZM575.292 238.163C575.492 237.721 575.795 237.379 576.202 237.136C576.618 236.893 577.125 236.772 577.723 236.772V237.721H577.476C576.818 237.721 576.289 237.899 575.89 238.254C575.492 238.609 575.292 239.203 575.292 240.035V244H574.382V236.902H575.292V238.163ZM579.902 234.38V244H578.992V234.38H579.902ZM582.201 233.665L582.071 236.174H581.434L581.304 233.665H582.201ZM583.761 233.665L583.644 236.174H583.007L582.864 233.665H583.761ZM509.248 258.665L509.118 261.174H508.481L508.351 258.665H509.248ZM510.808 258.665L510.691 261.174H510.054L509.911 258.665H510.808ZM520.687 261.772C521.519 261.772 522.195 262.036 522.715 262.565C523.244 263.085 523.508 263.843 523.508 264.84V269H522.611V264.944C522.611 264.173 522.425 263.583 522.052 263.176C521.68 262.769 521.173 262.565 520.531 262.565C519.864 262.565 519.331 262.786 518.932 263.228C518.534 263.67 518.334 264.311 518.334 265.152V269H517.437V264.944C517.437 264.173 517.251 263.583 516.878 263.176C516.506 262.769 515.994 262.565 515.344 262.565C514.677 262.565 514.144 262.786 513.745 263.228C513.347 263.67 513.147 264.311 513.147 265.152V269H512.237V261.902H513.147V263.124C513.373 262.682 513.693 262.348 514.109 262.123C514.525 261.889 514.989 261.772 515.5 261.772C516.116 261.772 516.653 261.919 517.112 262.214C517.58 262.509 517.918 262.942 518.126 263.514C518.317 262.951 518.642 262.522 519.101 262.227C519.569 261.924 520.098 261.772 520.687 261.772ZM531.851 265.087C531.851 265.399 531.843 265.637 531.825 265.802H525.936C525.962 266.339 526.092 266.799 526.326 267.18C526.56 267.561 526.868 267.852 527.249 268.051C527.631 268.242 528.047 268.337 528.497 268.337C529.087 268.337 529.581 268.194 529.979 267.908C530.387 267.622 530.655 267.236 530.785 266.751H531.747C531.574 267.444 531.201 268.012 530.629 268.454C530.066 268.887 529.355 269.104 528.497 269.104C527.83 269.104 527.232 268.957 526.703 268.662C526.175 268.359 525.759 267.934 525.455 267.388C525.161 266.833 525.013 266.188 525.013 265.451C525.013 264.714 525.161 264.069 525.455 263.514C525.75 262.959 526.162 262.535 526.69 262.24C527.219 261.945 527.821 261.798 528.497 261.798C529.173 261.798 529.763 261.945 530.265 262.24C530.777 262.535 531.167 262.933 531.435 263.436C531.713 263.93 531.851 264.48 531.851 265.087ZM530.928 265.061C530.937 264.532 530.829 264.082 530.603 263.709C530.387 263.336 530.088 263.055 529.706 262.864C529.325 262.673 528.909 262.578 528.458 262.578C527.782 262.578 527.206 262.795 526.729 263.228C526.253 263.661 525.988 264.272 525.936 265.061H530.928ZM534.326 263.163C534.526 262.721 534.829 262.379 535.236 262.136C535.652 261.893 536.159 261.772 536.757 261.772V262.721H536.51C535.852 262.721 535.323 262.899 534.924 263.254C534.526 263.609 534.326 264.203 534.326 265.035V269H533.416V261.902H534.326V263.163ZM537.61 265.451C537.61 264.714 537.757 264.073 538.052 263.527C538.347 262.972 538.754 262.548 539.274 262.253C539.794 261.95 540.388 261.798 541.055 261.798C541.93 261.798 542.65 262.015 543.213 262.448C543.785 262.881 544.153 263.471 544.318 264.216H543.343C543.222 263.705 542.957 263.306 542.55 263.02C542.151 262.725 541.653 262.578 541.055 262.578C540.578 262.578 540.149 262.686 539.768 262.903C539.387 263.12 539.083 263.445 538.858 263.878C538.641 264.303 538.533 264.827 538.533 265.451C538.533 266.075 538.641 266.604 538.858 267.037C539.083 267.47 539.387 267.795 539.768 268.012C540.149 268.229 540.578 268.337 541.055 268.337C541.653 268.337 542.151 268.194 542.55 267.908C542.957 267.613 543.222 267.206 543.343 266.686H544.318C544.153 267.414 543.785 267.999 543.213 268.441C542.641 268.883 541.922 269.104 541.055 269.104C540.388 269.104 539.794 268.957 539.274 268.662C538.754 268.359 538.347 267.934 538.052 267.388C537.757 266.833 537.61 266.188 537.61 265.451ZM549.279 261.772C549.816 261.772 550.297 261.885 550.722 262.11C551.155 262.335 551.493 262.682 551.736 263.15C551.987 263.609 552.113 264.173 552.113 264.84V269H551.216V264.944C551.216 264.173 551.021 263.583 550.631 263.176C550.249 262.769 549.725 262.565 549.058 262.565C548.373 262.565 547.827 262.782 547.42 263.215C547.012 263.648 546.809 264.285 546.809 265.126V269H545.899V259.38H546.809V263.111C547.034 262.686 547.363 262.357 547.797 262.123C548.239 261.889 548.733 261.772 549.279 261.772ZM553.609 265.438C553.609 264.71 553.752 264.073 554.038 263.527C554.333 262.972 554.736 262.548 555.247 262.253C555.767 261.95 556.352 261.798 557.002 261.798C557.678 261.798 558.259 261.954 558.744 262.266C559.238 262.578 559.594 262.977 559.81 263.462V261.902H560.72V269H559.81V267.427C559.585 267.912 559.225 268.315 558.731 268.636C558.246 268.948 557.665 269.104 556.989 269.104C556.348 269.104 555.767 268.952 555.247 268.649C554.736 268.346 554.333 267.917 554.038 267.362C553.752 266.807 553.609 266.166 553.609 265.438ZM559.81 265.451C559.81 264.879 559.693 264.376 559.459 263.943C559.225 263.51 558.905 263.176 558.497 262.942C558.099 262.708 557.657 262.591 557.171 262.591C556.669 262.591 556.218 262.704 555.819 262.929C555.421 263.154 555.104 263.484 554.87 263.917C554.645 264.342 554.532 264.849 554.532 265.438C554.532 266.019 554.645 266.53 554.87 266.972C555.104 267.405 555.421 267.739 555.819 267.973C556.218 268.198 556.669 268.311 557.171 268.311C557.657 268.311 558.099 268.194 558.497 267.96C558.905 267.726 559.225 267.392 559.459 266.959C559.693 266.526 559.81 266.023 559.81 265.451ZM566.026 261.772C566.875 261.772 567.568 262.036 568.106 262.565C568.643 263.085 568.912 263.843 568.912 264.84V269H568.015V264.944C568.015 264.173 567.82 263.583 567.43 263.176C567.048 262.769 566.524 262.565 565.857 262.565C565.172 262.565 564.626 262.782 564.219 263.215C563.811 263.648 563.608 264.285 563.608 265.126V269H562.698V261.902H563.608V263.111C563.833 262.678 564.158 262.348 564.583 262.123C565.007 261.889 565.488 261.772 566.026 261.772ZM572.007 262.669V267.076C572.007 267.509 572.09 267.808 572.254 267.973C572.419 268.138 572.709 268.22 573.125 268.22H573.957V269H572.982C572.341 269 571.864 268.853 571.552 268.558C571.24 268.255 571.084 267.761 571.084 267.076V262.669H570.096V261.902H571.084V260.121H572.007V261.902H573.957V262.669H572.007ZM579.44 269.091C578.599 269.091 577.837 268.896 577.152 268.506C576.467 268.107 575.926 267.557 575.527 266.855C575.137 266.144 574.942 265.343 574.942 264.45C574.942 263.557 575.137 262.76 575.527 262.058C575.926 261.347 576.467 260.797 577.152 260.407C577.837 260.008 578.599 259.809 579.44 259.809C580.289 259.809 581.056 260.008 581.741 260.407C582.426 260.797 582.963 261.347 583.353 262.058C583.743 262.76 583.938 263.557 583.938 264.45C583.938 265.343 583.743 266.144 583.353 266.855C582.963 267.557 582.426 268.107 581.741 268.506C581.056 268.896 580.289 269.091 579.44 269.091ZM579.44 268.298C580.116 268.298 580.723 268.142 581.26 267.83C581.797 267.518 582.222 267.072 582.534 266.491C582.846 265.902 583.002 265.221 583.002 264.45C583.002 263.679 582.846 263.003 582.534 262.422C582.222 261.841 581.797 261.395 581.26 261.083C580.723 260.771 580.116 260.615 579.44 260.615C578.764 260.615 578.157 260.771 577.62 261.083C577.083 261.395 576.658 261.841 576.346 262.422C576.034 263.003 575.878 263.679 575.878 264.45C575.878 265.221 576.034 265.902 576.346 266.491C576.658 267.072 577.083 267.518 577.62 267.83C578.157 268.142 578.764 268.298 579.44 268.298ZM586.413 263.163C586.613 262.721 586.916 262.379 587.323 262.136C587.739 261.893 588.246 261.772 588.844 261.772V262.721H588.597C587.939 262.721 587.41 262.899 587.011 263.254C586.613 263.609 586.413 264.203 586.413 265.035V269H585.503V261.902H586.413V263.163ZM589.697 265.438C589.697 264.71 589.845 264.073 590.139 263.527C590.434 262.972 590.837 262.548 591.348 262.253C591.868 261.95 592.453 261.798 593.103 261.798C593.727 261.798 594.291 261.95 594.793 262.253C595.296 262.556 595.664 262.951 595.898 263.436V259.38H596.808V269H595.898V267.414C595.682 267.908 595.326 268.315 594.832 268.636C594.338 268.948 593.758 269.104 593.09 269.104C592.44 269.104 591.855 268.952 591.335 268.649C590.824 268.346 590.421 267.917 590.126 267.362C589.84 266.807 589.697 266.166 589.697 265.438ZM595.898 265.451C595.898 264.879 595.781 264.376 595.547 263.943C595.313 263.51 594.993 263.176 594.585 262.942C594.187 262.708 593.745 262.591 593.259 262.591C592.757 262.591 592.306 262.704 591.907 262.929C591.509 263.154 591.192 263.484 590.958 263.917C590.733 264.342 590.62 264.849 590.62 265.438C590.62 266.019 590.733 266.53 590.958 266.972C591.192 267.405 591.509 267.739 591.907 267.973C592.306 268.198 592.757 268.311 593.259 268.311C593.745 268.311 594.187 268.194 594.585 267.96C594.993 267.726 595.313 267.392 595.547 266.959C595.781 266.526 595.898 266.023 595.898 265.451ZM605.208 265.087C605.208 265.399 605.199 265.637 605.182 265.802H599.293C599.319 266.339 599.449 266.799 599.683 267.18C599.917 267.561 600.224 267.852 600.606 268.051C600.987 268.242 601.403 268.337 601.854 268.337C602.443 268.337 602.937 268.194 603.336 267.908C603.743 267.622 604.012 267.236 604.142 266.751H605.104C604.93 267.444 604.558 268.012 603.986 268.454C603.422 268.887 602.712 269.104 601.854 269.104C601.186 269.104 600.588 268.957 600.06 268.662C599.531 268.359 599.115 267.934 598.812 267.388C598.517 266.833 598.37 266.188 598.37 265.451C598.37 264.714 598.517 264.069 598.812 263.514C599.106 262.959 599.518 262.535 600.047 262.24C600.575 261.945 601.178 261.798 601.854 261.798C602.53 261.798 603.119 261.945 603.622 262.24C604.133 262.535 604.523 262.933 604.792 263.436C605.069 263.93 605.208 264.48 605.208 265.087ZM604.285 265.061C604.293 264.532 604.185 264.082 603.96 263.709C603.743 263.336 603.444 263.055 603.063 262.864C602.681 262.673 602.265 262.578 601.815 262.578C601.139 262.578 600.562 262.795 600.086 263.228C599.609 263.661 599.345 264.272 599.293 265.061H604.285ZM607.683 263.163C607.882 262.721 608.185 262.379 608.593 262.136C609.009 261.893 609.516 261.772 610.114 261.772V262.721H609.867C609.208 262.721 608.679 262.899 608.281 263.254C607.882 263.609 607.683 264.203 607.683 265.035V269H606.773V261.902H607.683V263.163ZM618.234 269H617.324L612.293 261.356V269H611.383V259.913H612.293L617.324 267.544V259.913H618.234V269ZM623.302 269.104C622.634 269.104 622.032 268.957 621.495 268.662C620.966 268.359 620.546 267.934 620.234 267.388C619.93 266.833 619.779 266.188 619.779 265.451C619.779 264.714 619.935 264.073 620.247 263.527C620.559 262.972 620.983 262.548 621.521 262.253C622.058 261.95 622.66 261.798 623.328 261.798C623.995 261.798 624.597 261.95 625.135 262.253C625.681 262.548 626.105 262.972 626.409 263.527C626.721 264.073 626.877 264.714 626.877 265.451C626.877 266.179 626.721 266.82 626.409 267.375C626.097 267.93 625.668 268.359 625.122 268.662C624.576 268.957 623.969 269.104 623.302 269.104ZM623.302 268.311C623.77 268.311 624.203 268.207 624.602 267.999C625 267.782 625.321 267.462 625.564 267.037C625.815 266.604 625.941 266.075 625.941 265.451C625.941 264.827 625.819 264.303 625.577 263.878C625.334 263.445 625.013 263.124 624.615 262.916C624.216 262.699 623.783 262.591 623.315 262.591C622.847 262.591 622.413 262.699 622.015 262.916C621.616 263.124 621.295 263.445 621.053 263.878C620.819 264.303 620.702 264.827 620.702 265.451C620.702 266.075 620.819 266.604 621.053 267.037C621.295 267.462 621.612 267.782 622.002 267.999C622.4 268.207 622.834 268.311 623.302 268.311ZM628.774 258.665L628.644 261.174H628.007L627.877 258.665H628.774ZM630.334 258.665L630.217 261.174H629.58L629.437 258.665H630.334ZM509.248 283.665L509.118 286.174H508.481L508.351 283.665H509.248ZM510.808 283.665L510.691 286.174H510.054L509.911 283.665H510.808ZM518.659 290.087C518.659 290.399 518.651 290.637 518.633 290.802H512.744C512.77 291.339 512.9 291.799 513.134 292.18C513.368 292.561 513.676 292.852 514.057 293.051C514.439 293.242 514.855 293.337 515.305 293.337C515.895 293.337 516.389 293.194 516.787 292.908C517.195 292.622 517.463 292.236 517.593 291.751H518.555C518.382 292.444 518.009 293.012 517.437 293.454C516.874 293.887 516.163 294.104 515.305 294.104C514.638 294.104 514.04 293.957 513.511 293.662C512.983 293.359 512.567 292.934 512.263 292.388C511.969 291.833 511.821 291.188 511.821 290.451C511.821 289.714 511.969 289.069 512.263 288.514C512.558 287.959 512.97 287.535 513.498 287.24C514.027 286.945 514.629 286.798 515.305 286.798C515.981 286.798 516.571 286.945 517.073 287.24C517.585 287.535 517.975 287.933 518.243 288.436C518.521 288.93 518.659 289.48 518.659 290.087ZM517.736 290.061C517.745 289.532 517.637 289.082 517.411 288.709C517.195 288.336 516.896 288.055 516.514 287.864C516.133 287.673 515.717 287.578 515.266 287.578C514.59 287.578 514.014 287.795 513.537 288.228C513.061 288.661 512.796 289.272 512.744 290.061H517.736ZM528.674 286.772C529.506 286.772 530.182 287.036 530.702 287.565C531.231 288.085 531.495 288.843 531.495 289.84V294H530.598V289.944C530.598 289.173 530.412 288.583 530.039 288.176C529.667 287.769 529.16 287.565 528.518 287.565C527.851 287.565 527.318 287.786 526.919 288.228C526.521 288.67 526.321 289.311 526.321 290.152V294H525.424V289.944C525.424 289.173 525.238 288.583 524.865 288.176C524.493 287.769 523.981 287.565 523.331 287.565C522.664 287.565 522.131 287.786 521.732 288.228C521.334 288.67 521.134 289.311 521.134 290.152V294H520.224V286.902H521.134V288.124C521.36 287.682 521.68 287.348 522.096 287.123C522.512 286.889 522.976 286.772 523.487 286.772C524.103 286.772 524.64 286.919 525.099 287.214C525.567 287.509 525.905 287.942 526.113 288.514C526.304 287.951 526.629 287.522 527.088 287.227C527.556 286.924 528.085 286.772 528.674 286.772ZM533 290.438C533 289.71 533.143 289.073 533.429 288.527C533.724 287.972 534.127 287.548 534.638 287.253C535.158 286.95 535.743 286.798 536.393 286.798C537.069 286.798 537.65 286.954 538.135 287.266C538.629 287.578 538.985 287.977 539.201 288.462V286.902H540.111V294H539.201V292.427C538.976 292.912 538.616 293.315 538.122 293.636C537.637 293.948 537.056 294.104 536.38 294.104C535.739 294.104 535.158 293.952 534.638 293.649C534.127 293.346 533.724 292.917 533.429 292.362C533.143 291.807 533 291.166 533 290.438ZM539.201 290.451C539.201 289.879 539.084 289.376 538.85 288.943C538.616 288.51 538.296 288.176 537.888 287.942C537.49 287.708 537.048 287.591 536.562 287.591C536.06 287.591 535.609 287.704 535.21 287.929C534.812 288.154 534.495 288.484 534.261 288.917C534.036 289.342 533.923 289.849 533.923 290.438C533.923 291.019 534.036 291.53 534.261 291.972C534.495 292.405 534.812 292.739 535.21 292.973C535.609 293.198 536.06 293.311 536.562 293.311C537.048 293.311 537.49 293.194 537.888 292.96C538.296 292.726 538.616 292.392 538.85 291.959C539.084 291.526 539.201 291.023 539.201 290.451ZM542.544 285.563C542.362 285.563 542.206 285.498 542.076 285.368C541.946 285.238 541.881 285.078 541.881 284.887C541.881 284.696 541.946 284.54 542.076 284.419C542.206 284.289 542.362 284.224 542.544 284.224C542.726 284.224 542.882 284.289 543.012 284.419C543.142 284.54 543.207 284.696 543.207 284.887C543.207 285.078 543.142 285.238 543.012 285.368C542.882 285.498 542.726 285.563 542.544 285.563ZM542.999 286.902V294H542.089V286.902H542.999ZM545.869 284.38V294H544.959V284.38H545.869ZM548.168 283.665L548.038 286.174H547.401L547.271 283.665H548.168ZM549.728 283.665L549.611 286.174H548.974L548.831 283.665H549.728ZM509.248 308.665L509.118 311.174H508.481L508.351 308.665H509.248ZM510.808 308.665L510.691 311.174H510.054L509.911 308.665H510.808ZM513.134 313.462C513.36 312.985 513.715 312.591 514.2 312.279C514.694 311.958 515.279 311.798 515.955 311.798C516.597 311.798 517.173 311.95 517.684 312.253C518.204 312.548 518.607 312.972 518.893 313.527C519.188 314.073 519.335 314.71 519.335 315.438C519.335 316.166 519.188 316.807 518.893 317.362C518.607 317.917 518.204 318.346 517.684 318.649C517.173 318.952 516.597 319.104 515.955 319.104C515.288 319.104 514.707 318.948 514.213 318.636C513.719 318.315 513.36 317.917 513.134 317.44V322.354H512.237V311.902H513.134V313.462ZM518.412 315.438C518.412 314.849 518.295 314.342 518.061 313.917C517.836 313.484 517.524 313.154 517.125 312.929C516.727 312.704 516.276 312.591 515.773 312.591C515.288 312.591 514.842 312.708 514.434 312.942C514.036 313.176 513.719 313.51 513.485 313.943C513.251 314.376 513.134 314.879 513.134 315.451C513.134 316.023 513.251 316.526 513.485 316.959C513.719 317.392 514.036 317.726 514.434 317.96C514.842 318.194 515.288 318.311 515.773 318.311C516.276 318.311 516.727 318.198 517.125 317.973C517.524 317.739 517.836 317.405 518.061 316.972C518.295 316.53 518.412 316.019 518.412 315.438ZM520.494 315.438C520.494 314.71 520.637 314.073 520.923 313.527C521.217 312.972 521.62 312.548 522.132 312.253C522.652 311.95 523.237 311.798 523.887 311.798C524.563 311.798 525.143 311.954 525.629 312.266C526.123 312.578 526.478 312.977 526.695 313.462V311.902H527.605V319H526.695V317.427C526.469 317.912 526.11 318.315 525.616 318.636C525.13 318.948 524.55 319.104 523.874 319.104C523.232 319.104 522.652 318.952 522.132 318.649C521.62 318.346 521.217 317.917 520.923 317.362C520.637 316.807 520.494 316.166 520.494 315.438ZM526.695 315.451C526.695 314.879 526.578 314.376 526.344 313.943C526.11 313.51 525.789 313.176 525.382 312.942C524.983 312.708 524.541 312.591 524.056 312.591C523.553 312.591 523.102 312.704 522.704 312.929C522.305 313.154 521.989 313.484 521.755 313.917C521.529 314.342 521.417 314.849 521.417 315.438C521.417 316.019 521.529 316.53 521.755 316.972C521.989 317.405 522.305 317.739 522.704 317.973C523.102 318.198 523.553 318.311 524.056 318.311C524.541 318.311 524.983 318.194 525.382 317.96C525.789 317.726 526.11 317.392 526.344 316.959C526.578 316.526 526.695 316.023 526.695 315.451ZM535.432 311.902L531.22 322.341H530.271L531.649 318.961L528.737 311.902H529.738L532.156 317.96L534.496 311.902H535.432ZM545.016 311.772C545.848 311.772 546.524 312.036 547.044 312.565C547.573 313.085 547.837 313.843 547.837 314.84V319H546.94V314.944C546.94 314.173 546.754 313.583 546.381 313.176C546.009 312.769 545.502 312.565 544.86 312.565C544.193 312.565 543.66 312.786 543.261 313.228C542.863 313.67 542.663 314.311 542.663 315.152V319H541.766V314.944C541.766 314.173 541.58 313.583 541.207 313.176C540.835 312.769 540.323 312.565 539.673 312.565C539.006 312.565 538.473 312.786 538.074 313.228C537.676 313.67 537.476 314.311 537.476 315.152V319H536.566V311.902H537.476V313.124C537.702 312.682 538.022 312.348 538.438 312.123C538.854 311.889 539.318 311.772 539.829 311.772C540.445 311.772 540.982 311.919 541.441 312.214C541.909 312.509 542.247 312.942 542.455 313.514C542.646 312.951 542.971 312.522 543.43 312.227C543.898 311.924 544.427 311.772 545.016 311.772ZM556.18 315.087C556.18 315.399 556.171 315.637 556.154 315.802H550.265C550.291 316.339 550.421 316.799 550.655 317.18C550.889 317.561 551.197 317.852 551.578 318.051C551.959 318.242 552.375 318.337 552.826 318.337C553.415 318.337 553.909 318.194 554.308 317.908C554.715 317.622 554.984 317.236 555.114 316.751H556.076C555.903 317.444 555.53 318.012 554.958 318.454C554.395 318.887 553.684 319.104 552.826 319.104C552.159 319.104 551.561 318.957 551.032 318.662C550.503 318.359 550.087 317.934 549.784 317.388C549.489 316.833 549.342 316.188 549.342 315.451C549.342 314.714 549.489 314.069 549.784 313.514C550.079 312.959 550.49 312.535 551.019 312.24C551.548 311.945 552.15 311.798 552.826 311.798C553.502 311.798 554.091 311.945 554.594 312.24C555.105 312.535 555.495 312.933 555.764 313.436C556.041 313.93 556.18 314.48 556.18 315.087ZM555.257 315.061C555.266 314.532 555.157 314.082 554.932 313.709C554.715 313.336 554.416 313.055 554.035 312.864C553.654 312.673 553.238 312.578 552.787 312.578C552.111 312.578 551.535 312.795 551.058 313.228C550.581 313.661 550.317 314.272 550.265 315.061H555.257ZM561.073 311.772C561.922 311.772 562.616 312.036 563.153 312.565C563.69 313.085 563.959 313.843 563.959 314.84V319H563.062V314.944C563.062 314.173 562.867 313.583 562.477 313.176C562.096 312.769 561.571 312.565 560.904 312.565C560.219 312.565 559.673 312.782 559.266 313.215C558.859 313.648 558.655 314.285 558.655 315.126V319H557.745V311.902H558.655V313.111C558.88 312.678 559.205 312.348 559.63 312.123C560.055 311.889 560.536 311.772 561.073 311.772ZM567.055 312.669V317.076C567.055 317.509 567.137 317.808 567.302 317.973C567.466 318.138 567.757 318.22 568.173 318.22H569.005V319H568.03C567.388 319 566.912 318.853 566.6 318.558C566.288 318.255 566.132 317.761 566.132 317.076V312.669H565.144V311.902H566.132V310.121H567.055V311.902H569.005V312.669H567.055ZM575.722 309.913V310.667H573.2V319H572.29V310.667H569.755V309.913H575.722ZM582.909 311.902L578.697 322.341H577.748L579.126 318.961L576.214 311.902H577.215L579.633 317.96L581.973 311.902H582.909ZM584.94 313.462C585.166 312.985 585.521 312.591 586.006 312.279C586.5 311.958 587.085 311.798 587.761 311.798C588.403 311.798 588.979 311.95 589.49 312.253C590.01 312.548 590.413 312.972 590.699 313.527C590.994 314.073 591.141 314.71 591.141 315.438C591.141 316.166 590.994 316.807 590.699 317.362C590.413 317.917 590.01 318.346 589.49 318.649C588.979 318.952 588.403 319.104 587.761 319.104C587.094 319.104 586.513 318.948 586.019 318.636C585.525 318.315 585.166 317.917 584.94 317.44V322.354H584.043V311.902H584.94V313.462ZM590.218 315.438C590.218 314.849 590.101 314.342 589.867 313.917C589.642 313.484 589.33 313.154 588.931 312.929C588.533 312.704 588.082 312.591 587.579 312.591C587.094 312.591 586.648 312.708 586.24 312.942C585.842 313.176 585.525 313.51 585.291 313.943C585.057 314.376 584.94 314.879 584.94 315.451C584.94 316.023 585.057 316.526 585.291 316.959C585.525 317.392 585.842 317.726 586.24 317.96C586.648 318.194 587.094 318.311 587.579 318.311C588.082 318.311 588.533 318.198 588.931 317.973C589.33 317.739 589.642 317.405 589.867 316.972C590.101 316.53 590.218 316.019 590.218 315.438ZM599.138 315.087C599.138 315.399 599.129 315.637 599.112 315.802H593.223C593.249 316.339 593.379 316.799 593.613 317.18C593.847 317.561 594.154 317.852 594.536 318.051C594.917 318.242 595.333 318.337 595.784 318.337C596.373 318.337 596.867 318.194 597.266 317.908C597.673 317.622 597.942 317.236 598.072 316.751H599.034C598.86 317.444 598.488 318.012 597.916 318.454C597.352 318.887 596.642 319.104 595.784 319.104C595.116 319.104 594.518 318.957 593.99 318.662C593.461 318.359 593.045 317.934 592.742 317.388C592.447 316.833 592.3 316.188 592.3 315.451C592.3 314.714 592.447 314.069 592.742 313.514C593.036 312.959 593.448 312.535 593.977 312.24C594.505 311.945 595.108 311.798 595.784 311.798C596.46 311.798 597.049 311.945 597.552 312.24C598.063 312.535 598.453 312.933 598.722 313.436C598.999 313.93 599.138 314.48 599.138 315.087ZM598.215 315.061C598.223 314.532 598.115 314.082 597.89 313.709C597.673 313.336 597.374 313.055 596.993 312.864C596.611 312.673 596.195 312.578 595.745 312.578C595.069 312.578 594.492 312.795 594.016 313.228C593.539 313.661 593.275 314.272 593.223 315.061H598.215ZM601.041 308.665L600.911 311.174H600.274L600.144 308.665H601.041ZM602.601 308.665L602.484 311.174H601.847L601.704 308.665H602.601Z"
                  fill="#DEFE66"
                />
                <path
                  d="M594.665 134.913L591.22 144H590.18L586.735 134.913H587.723L590.7 143.012L593.703 134.913H594.665ZM602.354 140.087C602.354 140.399 602.346 140.637 602.328 140.802H596.439C596.465 141.339 596.595 141.799 596.829 142.18C597.063 142.561 597.371 142.852 597.752 143.051C598.134 143.242 598.55 143.337 599 143.337C599.59 143.337 600.084 143.194 600.482 142.908C600.89 142.622 601.158 142.236 601.288 141.751H602.25C602.077 142.444 601.704 143.012 601.132 143.454C600.569 143.887 599.858 144.104 599 144.104C598.333 144.104 597.735 143.957 597.206 143.662C596.678 143.359 596.262 142.934 595.958 142.388C595.664 141.833 595.516 141.188 595.516 140.451C595.516 139.714 595.664 139.069 595.958 138.514C596.253 137.959 596.665 137.535 597.193 137.24C597.722 136.945 598.324 136.798 599 136.798C599.676 136.798 600.266 136.945 600.768 137.24C601.28 137.535 601.67 137.933 601.938 138.436C602.216 138.93 602.354 139.48 602.354 140.087ZM601.431 140.061C601.44 139.532 601.332 139.082 601.106 138.709C600.89 138.336 600.591 138.055 600.209 137.864C599.828 137.673 599.412 137.578 598.961 137.578C598.285 137.578 597.709 137.795 597.232 138.228C596.756 138.661 596.491 139.272 596.439 140.061H601.431ZM604.829 134.38V144H603.919V134.38H604.829ZM607.7 134.38V144H606.79V134.38H607.7ZM610.558 138.462C610.783 137.985 611.138 137.591 611.624 137.279C612.118 136.958 612.703 136.798 613.379 136.798C614.02 136.798 614.596 136.95 615.108 137.253C615.628 137.548 616.031 137.972 616.317 138.527C616.611 139.073 616.759 139.71 616.759 140.438C616.759 141.166 616.611 141.807 616.317 142.362C616.031 142.917 615.628 143.346 615.108 143.649C614.596 143.952 614.02 144.104 613.379 144.104C612.711 144.104 612.131 143.948 611.637 143.636C611.143 143.315 610.783 142.917 610.558 142.44V147.354H609.661V136.902H610.558V138.462ZM615.836 140.438C615.836 139.849 615.719 139.342 615.485 138.917C615.259 138.484 614.947 138.154 614.549 137.929C614.15 137.704 613.699 137.591 613.197 137.591C612.711 137.591 612.265 137.708 611.858 137.942C611.459 138.176 611.143 138.51 610.909 138.943C610.675 139.376 610.558 139.879 610.558 140.451C610.558 141.023 610.675 141.526 610.909 141.959C611.143 142.392 611.459 142.726 611.858 142.96C612.265 143.194 612.711 143.311 613.197 143.311C613.699 143.311 614.15 143.198 614.549 142.973C614.947 142.739 615.259 142.405 615.485 141.972C615.719 141.53 615.836 141.019 615.836 140.438ZM617.917 140.438C617.917 139.71 618.06 139.073 618.346 138.527C618.641 137.972 619.044 137.548 619.555 137.253C620.075 136.95 620.66 136.798 621.31 136.798C621.986 136.798 622.567 136.954 623.052 137.266C623.546 137.578 623.902 137.977 624.118 138.462V136.902H625.028V144H624.118V142.427C623.893 142.912 623.533 143.315 623.039 143.636C622.554 143.948 621.973 144.104 621.297 144.104C620.656 144.104 620.075 143.952 619.555 143.649C619.044 143.346 618.641 142.917 618.346 142.362C618.06 141.807 617.917 141.166 617.917 140.438ZM624.118 140.451C624.118 139.879 624.001 139.376 623.767 138.943C623.533 138.51 623.213 138.176 622.805 137.942C622.407 137.708 621.965 137.591 621.479 137.591C620.977 137.591 620.526 137.704 620.127 137.929C619.729 138.154 619.412 138.484 619.178 138.917C618.953 139.342 618.84 139.849 618.84 140.438C618.84 141.019 618.953 141.53 619.178 141.972C619.412 142.405 619.729 142.739 620.127 142.973C620.526 143.198 620.977 143.311 621.479 143.311C621.965 143.311 622.407 143.194 622.805 142.96C623.213 142.726 623.533 142.392 623.767 141.959C624.001 141.526 624.118 141.023 624.118 140.451ZM632.856 136.902L628.644 147.341H627.695L629.073 143.961L626.161 136.902H627.162L629.58 142.96L631.92 136.902H632.856Z"
                  fill="#AA94EF"
                />
              </g>
            </g>
            <g id="Transferiencia (CVU)è¾“å…¥2">
              <path
                d="M57 72.3506C57 55.5884 70.5884 42 87.3506 42H382.649C399.412 42 413 55.5884 413 72.3506V731.719C413 748.481 399.412 762.069 382.649 762.069H87.3506C70.5884 762.069 57 748.481 57 731.719V72.3506Z"
                fill="#EBF2E3"
              />
              <g id="Group 1410135732">
                <rect
                  id="Rectangle 6616"
                  width="318.027"
                  height="121.989"
                  rx="11.392"
                  transform="matrix(1 0 0 -1 76.9375 230.758)"
                  fill="#172E22"
                />
                <rect
                  id="Rectangle 6680"
                  x="314.746"
                  y="151.492"
                  width="72.1493"
                  height="28.9547"
                  rx="14.4773"
                  fill="url(#paint7_linear_4588_26242)"
                />
                <g id="Group 1410135111">
                  <path
                    id="Copiar"
                    d="M347.821 166.923H349.485C349.451 167.468 349.301 167.952 349.034 168.374C348.771 168.797 348.402 169.127 347.927 169.365C347.456 169.602 346.889 169.721 346.225 169.721C345.706 169.721 345.24 169.632 344.829 169.454C344.417 169.272 344.065 169.012 343.772 168.675C343.483 168.337 343.262 167.929 343.11 167.451C342.958 166.973 342.882 166.437 342.882 165.844V165.282C342.882 164.688 342.96 164.153 343.115 163.674C343.275 163.192 343.501 162.782 343.794 162.445C344.091 162.107 344.445 161.848 344.857 161.666C345.268 161.484 345.728 161.394 346.236 161.394C346.911 161.394 347.48 161.516 347.944 161.761C348.411 162.005 348.773 162.343 349.028 162.773C349.288 163.203 349.444 163.693 349.496 164.242H347.827C347.808 163.915 347.743 163.639 347.632 163.413C347.521 163.183 347.352 163.01 347.126 162.895C346.904 162.777 346.607 162.717 346.236 162.717C345.958 162.717 345.715 162.769 345.507 162.873C345.3 162.977 345.125 163.135 344.984 163.346C344.844 163.557 344.738 163.824 344.667 164.147C344.601 164.466 344.567 164.84 344.567 165.271V165.844C344.567 166.263 344.599 166.632 344.662 166.95C344.725 167.266 344.821 167.533 344.951 167.751C345.085 167.967 345.255 168.13 345.463 168.241C345.674 168.349 345.928 168.402 346.225 168.402C346.573 168.402 346.861 168.347 347.087 168.235C347.313 168.124 347.486 167.959 347.604 167.74C347.727 167.522 347.799 167.249 347.821 166.923ZM350.224 166.661V166.544C350.224 166.103 350.287 165.697 350.413 165.326C350.54 164.952 350.723 164.627 350.964 164.353C351.205 164.078 351.502 163.865 351.854 163.713C352.206 163.557 352.611 163.479 353.067 163.479C353.523 163.479 353.929 163.557 354.285 163.713C354.641 163.865 354.939 164.078 355.181 164.353C355.425 164.627 355.611 164.952 355.737 165.326C355.863 165.697 355.926 166.103 355.926 166.544V166.661C355.926 167.099 355.863 167.505 355.737 167.879C355.611 168.25 355.425 168.575 355.181 168.853C354.939 169.127 354.643 169.341 354.291 169.493C353.938 169.645 353.534 169.721 353.078 169.721C352.622 169.721 352.216 169.645 351.86 169.493C351.507 169.341 351.209 169.127 350.964 168.853C350.723 168.575 350.54 168.25 350.413 167.879C350.287 167.505 350.224 167.099 350.224 166.661ZM351.826 166.544V166.661C351.826 166.913 351.849 167.149 351.893 167.368C351.938 167.586 352.008 167.779 352.104 167.946C352.205 168.109 352.334 168.237 352.494 168.33C352.653 168.423 352.848 168.469 353.078 168.469C353.3 168.469 353.491 168.423 353.651 168.33C353.81 168.237 353.938 168.109 354.035 167.946C354.131 167.779 354.202 167.586 354.246 167.368C354.294 167.149 354.318 166.913 354.318 166.661V166.544C354.318 166.3 354.294 166.07 354.246 165.855C354.202 165.636 354.129 165.443 354.029 165.276C353.933 165.106 353.805 164.972 353.645 164.876C353.486 164.779 353.293 164.731 353.067 164.731C352.841 164.731 352.648 164.779 352.488 164.876C352.333 164.972 352.205 165.106 352.104 165.276C352.008 165.443 351.938 165.636 351.893 165.855C351.849 166.07 351.826 166.3 351.826 166.544ZM358.512 164.748V171.923H356.91V163.591H358.396L358.512 164.748ZM362.323 166.533V166.65C362.323 167.088 362.271 167.494 362.167 167.868C362.067 168.243 361.919 168.569 361.722 168.847C361.525 169.122 361.281 169.337 360.988 169.493C360.699 169.645 360.365 169.721 359.987 169.721C359.619 169.721 359.3 169.646 359.03 169.498C358.759 169.35 358.531 169.142 358.346 168.875C358.164 168.604 358.017 168.291 357.906 167.935C357.795 167.579 357.71 167.197 357.65 166.789V166.483C357.71 166.046 357.795 165.645 357.906 165.282C358.017 164.915 358.164 164.598 358.346 164.331C358.531 164.06 358.757 163.85 359.024 163.702C359.295 163.554 359.612 163.479 359.975 163.479C360.357 163.479 360.693 163.552 360.982 163.696C361.275 163.841 361.52 164.049 361.716 164.319C361.917 164.59 362.067 164.913 362.167 165.287C362.271 165.662 362.323 166.077 362.323 166.533ZM360.715 166.65V166.533C360.715 166.277 360.693 166.042 360.648 165.827C360.608 165.608 360.541 165.417 360.448 165.254C360.359 165.091 360.241 164.965 360.092 164.876C359.948 164.783 359.771 164.737 359.564 164.737C359.345 164.737 359.158 164.772 359.002 164.842C358.85 164.913 358.726 165.015 358.629 165.148C358.533 165.282 358.461 165.441 358.412 165.627C358.364 165.812 358.334 166.022 358.323 166.255V167.028C358.342 167.303 358.394 167.549 358.479 167.768C358.564 167.983 358.696 168.154 358.874 168.28C359.052 168.406 359.286 168.469 359.575 168.469C359.786 168.469 359.964 168.423 360.109 168.33C360.254 168.234 360.37 168.102 360.459 167.935C360.552 167.768 360.617 167.575 360.654 167.357C360.695 167.138 360.715 166.902 360.715 166.65ZM365.009 163.591V169.609H363.402V163.591H365.009ZM363.302 162.022C363.302 161.788 363.383 161.596 363.547 161.444C363.71 161.292 363.928 161.216 364.203 161.216C364.474 161.216 364.691 161.292 364.854 161.444C365.021 161.596 365.104 161.788 365.104 162.022C365.104 162.256 365.021 162.449 364.854 162.601C364.691 162.753 364.474 162.829 364.203 162.829C363.928 162.829 363.71 162.753 363.547 162.601C363.383 162.449 363.302 162.256 363.302 162.022ZM369.582 168.252V165.571C369.582 165.378 369.55 165.213 369.487 165.076C369.424 164.935 369.326 164.826 369.192 164.748C369.063 164.67 368.894 164.631 368.686 164.631C368.508 164.631 368.354 164.662 368.225 164.725C368.095 164.785 367.995 164.872 367.924 164.987C367.854 165.098 367.819 165.23 367.819 165.382H366.217C366.217 165.126 366.276 164.883 366.395 164.653C366.513 164.423 366.686 164.221 366.912 164.047C367.138 163.869 367.407 163.73 367.718 163.63C368.034 163.53 368.386 163.479 368.775 163.479C369.243 163.479 369.658 163.557 370.021 163.713C370.385 163.869 370.67 164.102 370.878 164.414C371.089 164.725 371.195 165.115 371.195 165.582V168.158C371.195 168.488 371.215 168.758 371.256 168.97C371.297 169.177 371.356 169.359 371.434 169.515V169.609H369.815C369.738 169.446 369.678 169.242 369.637 168.997C369.6 168.749 369.582 168.501 369.582 168.252ZM369.793 165.944L369.804 166.85H368.909C368.697 166.85 368.514 166.874 368.358 166.923C368.202 166.971 368.074 167.039 367.974 167.128C367.874 167.214 367.8 167.314 367.752 167.429C367.707 167.544 367.685 167.67 367.685 167.807C367.685 167.944 367.717 168.069 367.78 168.18C367.843 168.287 367.933 168.373 368.052 168.436C368.171 168.495 368.31 168.525 368.469 168.525C368.71 168.525 368.92 168.476 369.098 168.38C369.276 168.284 369.413 168.165 369.51 168.024C369.61 167.883 369.662 167.75 369.665 167.624L370.088 168.302C370.029 168.454 369.947 168.612 369.843 168.775C369.743 168.938 369.615 169.092 369.459 169.237C369.304 169.378 369.116 169.494 368.898 169.587C368.679 169.676 368.419 169.721 368.119 169.721C367.737 169.721 367.39 169.645 367.079 169.493C366.771 169.337 366.526 169.124 366.344 168.853C366.166 168.578 366.077 168.267 366.077 167.918C366.077 167.603 366.137 167.323 366.255 167.078C366.374 166.834 366.548 166.628 366.778 166.461C367.012 166.29 367.303 166.162 367.652 166.077C368 165.988 368.404 165.944 368.864 165.944H369.793ZM374.032 164.903V169.609H372.43V163.591H373.937L374.032 164.903ZM375.845 163.552L375.817 165.037C375.74 165.026 375.645 165.017 375.534 165.009C375.426 164.998 375.328 164.992 375.239 164.992C375.013 164.992 374.816 165.022 374.649 165.081C374.486 165.137 374.349 165.221 374.238 165.332C374.13 165.443 374.049 165.578 373.993 165.738C373.941 165.897 373.911 166.079 373.904 166.283L373.581 166.183C373.581 165.793 373.62 165.436 373.698 165.109C373.776 164.779 373.889 164.492 374.037 164.247C374.189 164.002 374.375 163.813 374.594 163.68C374.812 163.546 375.063 163.479 375.345 163.479C375.434 163.479 375.524 163.487 375.617 163.502C375.71 163.513 375.786 163.53 375.845 163.552Z"
                    fill="#172E22"
                  />
                  <g id="Frame">
                    <path
                      id="Vector"
                      d="M339.219 160.785C339.116 160.699 338.994 160.63 338.859 160.583C338.724 160.536 338.58 160.512 338.434 160.512H331.951C331.804 160.511 331.659 160.535 331.523 160.582C331.388 160.629 331.265 160.697 331.161 160.784C331.057 160.872 330.975 160.975 330.919 161.089C330.863 161.203 330.834 161.325 330.834 161.448V162.354H328.872C328.578 162.354 328.295 162.452 328.087 162.627C327.879 162.803 327.762 163.04 327.762 163.288V170.958C327.762 171.206 327.879 171.444 328.088 171.62C328.191 171.706 328.314 171.775 328.449 171.822C328.584 171.869 328.729 171.893 328.875 171.892H335.936C336.234 171.896 336.521 171.799 336.733 171.624C336.838 171.537 336.921 171.433 336.978 171.319C337.035 171.205 337.064 171.082 337.064 170.958V169.284H338.42C338.566 169.286 338.712 169.263 338.848 169.217C338.984 169.171 339.108 169.103 339.212 169.017C339.317 168.93 339.4 168.827 339.457 168.714C339.514 168.6 339.544 168.478 339.545 168.355V161.446C339.545 161.198 339.428 160.96 339.219 160.785ZM335.091 167.269C335.091 167.506 334.95 167.625 334.668 167.625H332.836V169.166C332.836 169.403 332.695 169.521 332.413 169.521H332.131C331.849 169.521 331.708 169.403 331.708 169.166V167.625H329.876C329.594 167.625 329.453 167.506 329.453 167.269V167.032C329.453 166.795 329.594 166.676 329.876 166.676H331.708V165.135C331.708 164.898 331.849 164.779 332.131 164.779H332.413C332.695 164.779 332.836 164.898 332.836 165.135V166.676H334.668C334.95 166.676 335.091 166.795 335.091 167.032V167.269ZM338.474 168.12C338.473 168.259 338.354 168.377 338.192 168.4H337.064V163.288C337.064 163.038 336.945 162.798 336.733 162.622C336.628 162.535 336.503 162.467 336.367 162.421C336.23 162.375 336.084 162.352 335.936 162.354H331.886V161.771C331.886 161.561 332.088 161.391 332.337 161.391H338.022C338.271 161.391 338.473 161.561 338.473 161.771V168.12H338.474Z"
                      fill="#172E22"
                    />
                  </g>
                </g>
                <path
                  id="Tiempo restante:"
                  d="M94.6203 198.837V205.586H93.2343V198.837H94.6203ZM96.6969 198.837V199.926H91.1901V198.837H96.6969ZM98.8153 200.57V205.586H97.4757V200.57H98.8153ZM97.3922 199.263C97.3922 199.069 97.4602 198.908 97.5962 198.781C97.7322 198.654 97.9145 198.591 98.1432 198.591C98.3688 198.591 98.5495 198.654 98.6855 198.781C98.8246 198.908 98.8941 199.069 98.8941 199.263C98.8941 199.458 98.8246 199.619 98.6855 199.745C98.5495 199.872 98.3688 199.935 98.1432 199.935C97.9145 199.935 97.7322 199.872 97.5962 199.745C97.4602 199.619 97.3922 199.458 97.3922 199.263ZM102.227 205.679C101.838 205.679 101.488 205.617 101.179 205.493C100.87 205.367 100.608 205.192 100.391 204.969C100.178 204.747 100.014 204.489 99.9 204.195C99.7857 203.899 99.7285 203.583 99.7285 203.25V203.064C99.7285 202.684 99.7826 202.337 99.8907 202.021C99.9989 201.706 100.153 201.433 100.354 201.201C100.558 200.969 100.805 200.791 101.096 200.668C101.386 200.541 101.714 200.478 102.079 200.478C102.434 200.478 102.749 200.536 103.024 200.654C103.299 200.771 103.53 200.938 103.715 201.154C103.903 201.371 104.046 201.63 104.141 201.933C104.237 202.233 104.285 202.567 104.285 202.934V203.491H100.299V202.601H102.973V202.499C102.973 202.313 102.939 202.148 102.871 202.003C102.806 201.854 102.708 201.737 102.575 201.65C102.442 201.564 102.272 201.521 102.065 201.521C101.889 201.521 101.737 201.559 101.61 201.637C101.484 201.714 101.38 201.822 101.3 201.961C101.223 202.1 101.164 202.264 101.124 202.452C101.087 202.638 101.068 202.842 101.068 203.064V203.25C101.068 203.451 101.096 203.636 101.152 203.806C101.21 203.976 101.292 204.123 101.397 204.246C101.505 204.37 101.635 204.466 101.787 204.534C101.941 204.602 102.116 204.636 102.31 204.636C102.551 204.636 102.776 204.589 102.983 204.497C103.193 204.401 103.373 204.257 103.525 204.066L104.174 204.77C104.069 204.922 103.925 205.067 103.743 205.206C103.564 205.345 103.347 205.459 103.094 205.549C102.84 205.635 102.551 205.679 102.227 205.679ZM106.38 201.609V205.586H105.041V200.57H106.297L106.38 201.609ZM106.195 202.902H105.824C105.824 202.553 105.866 202.231 105.949 201.938C106.036 201.641 106.161 201.385 106.325 201.168C106.492 200.949 106.697 200.779 106.941 200.658C107.185 200.538 107.468 200.478 107.789 200.478C108.012 200.478 108.216 200.512 108.401 200.58C108.587 200.645 108.746 200.748 108.879 200.89C109.015 201.029 109.12 201.212 109.194 201.437C109.268 201.66 109.305 201.927 109.305 202.239V205.586H107.97V202.387C107.97 202.159 107.939 201.983 107.878 201.859C107.816 201.735 107.728 201.649 107.613 201.599C107.502 201.55 107.368 201.525 107.21 201.525C107.037 201.525 106.886 201.561 106.756 201.632C106.629 201.703 106.524 201.802 106.441 201.929C106.357 202.052 106.295 202.197 106.255 202.364C106.215 202.531 106.195 202.71 106.195 202.902ZM109.18 202.749L108.703 202.809C108.703 202.482 108.743 202.177 108.823 201.896C108.907 201.615 109.029 201.368 109.189 201.154C109.353 200.941 109.556 200.776 109.797 200.658C110.038 200.538 110.316 200.478 110.631 200.478C110.872 200.478 111.091 200.513 111.289 200.584C111.487 200.652 111.655 200.762 111.794 200.913C111.937 201.062 112.045 201.256 112.119 201.497C112.196 201.739 112.235 202.034 112.235 202.383V205.586H110.895V202.383C110.895 202.151 110.864 201.975 110.803 201.854C110.744 201.731 110.657 201.646 110.543 201.599C110.432 201.55 110.299 201.525 110.144 201.525C109.984 201.525 109.843 201.558 109.722 201.623C109.602 201.684 109.501 201.771 109.421 201.882C109.341 201.993 109.281 202.123 109.24 202.272C109.2 202.417 109.18 202.576 109.18 202.749ZM114.604 201.535V207.514H113.269V200.57H114.506L114.604 201.535ZM117.779 203.023V203.12C117.779 203.485 117.736 203.823 117.649 204.135C117.566 204.447 117.442 204.719 117.278 204.951C117.114 205.18 116.91 205.359 116.666 205.489C116.425 205.615 116.147 205.679 115.832 205.679C115.526 205.679 115.26 205.617 115.035 205.493C114.809 205.37 114.619 205.197 114.464 204.974C114.313 204.748 114.191 204.487 114.098 204.191C114.006 203.894 113.934 203.576 113.885 203.236V202.981C113.934 202.616 114.006 202.282 114.098 201.98C114.191 201.674 114.313 201.409 114.464 201.187C114.619 200.961 114.808 200.787 115.03 200.663C115.256 200.54 115.52 200.478 115.823 200.478C116.141 200.478 116.421 200.538 116.662 200.658C116.906 200.779 117.11 200.952 117.274 201.178C117.44 201.403 117.566 201.672 117.649 201.984C117.736 202.296 117.779 202.642 117.779 203.023ZM116.439 203.12V203.023C116.439 202.809 116.421 202.613 116.384 202.434C116.35 202.252 116.294 202.092 116.217 201.956C116.143 201.82 116.044 201.715 115.92 201.641C115.799 201.564 115.653 201.525 115.48 201.525C115.297 201.525 115.141 201.555 115.011 201.613C114.885 201.672 114.781 201.757 114.701 201.868C114.621 201.98 114.56 202.112 114.52 202.267C114.48 202.421 114.455 202.596 114.446 202.791V203.435C114.461 203.664 114.505 203.869 114.576 204.052C114.647 204.231 114.757 204.373 114.905 204.478C115.053 204.583 115.248 204.636 115.489 204.636C115.665 204.636 115.813 204.597 115.934 204.52C116.054 204.439 116.152 204.33 116.226 204.191C116.303 204.052 116.357 203.891 116.388 203.709C116.422 203.526 116.439 203.33 116.439 203.12ZM118.395 203.129V203.032C118.395 202.664 118.448 202.326 118.553 202.017C118.658 201.705 118.811 201.434 119.012 201.205C119.213 200.977 119.46 200.799 119.753 200.672C120.047 200.543 120.384 200.478 120.764 200.478C121.144 200.478 121.483 200.543 121.779 200.672C122.076 200.799 122.325 200.977 122.525 201.205C122.729 201.434 122.884 201.705 122.989 202.017C123.094 202.326 123.147 202.664 123.147 203.032V203.129C123.147 203.494 123.094 203.832 122.989 204.144C122.884 204.453 122.729 204.724 122.525 204.956C122.325 205.184 122.077 205.362 121.784 205.489C121.49 205.615 121.153 205.679 120.773 205.679C120.393 205.679 120.055 205.615 119.758 205.489C119.465 205.362 119.216 205.184 119.012 204.956C118.811 204.724 118.658 204.453 118.553 204.144C118.448 203.832 118.395 203.494 118.395 203.129ZM119.73 203.032V203.129C119.73 203.339 119.749 203.536 119.786 203.718C119.823 203.9 119.882 204.061 119.962 204.2C120.046 204.336 120.154 204.443 120.287 204.52C120.419 204.597 120.582 204.636 120.773 204.636C120.959 204.636 121.118 204.597 121.251 204.52C121.384 204.443 121.49 204.336 121.571 204.2C121.651 204.061 121.71 203.9 121.747 203.718C121.787 203.536 121.807 203.339 121.807 203.129V203.032C121.807 202.828 121.787 202.636 121.747 202.457C121.71 202.275 121.649 202.114 121.566 201.975C121.486 201.833 121.379 201.722 121.246 201.641C121.113 201.561 120.953 201.521 120.764 201.521C120.576 201.521 120.415 201.561 120.282 201.641C120.152 201.722 120.046 201.833 119.962 201.975C119.882 202.114 119.823 202.275 119.786 202.457C119.749 202.636 119.73 202.828 119.73 203.032ZM127.666 201.664V205.586H126.331V200.57H127.587L127.666 201.664ZM129.177 200.538L129.154 201.776C129.089 201.766 129.01 201.759 128.918 201.752C128.828 201.743 128.746 201.739 128.672 201.739C128.484 201.739 128.32 201.763 128.181 201.813C128.045 201.859 127.93 201.929 127.838 202.021C127.748 202.114 127.68 202.227 127.634 202.36C127.59 202.493 127.566 202.644 127.56 202.814L127.291 202.731C127.291 202.406 127.323 202.108 127.388 201.836C127.453 201.561 127.547 201.321 127.671 201.117C127.797 200.913 127.952 200.756 128.134 200.645C128.317 200.533 128.525 200.478 128.76 200.478C128.834 200.478 128.91 200.484 128.987 200.496C129.064 200.506 129.128 200.519 129.177 200.538ZM132.033 205.679C131.643 205.679 131.294 205.617 130.985 205.493C130.676 205.367 130.413 205.192 130.197 204.969C129.984 204.747 129.82 204.489 129.706 204.195C129.591 203.899 129.534 203.583 129.534 203.25V203.064C129.534 202.684 129.588 202.337 129.696 202.021C129.805 201.706 129.959 201.433 130.16 201.201C130.364 200.969 130.611 200.791 130.902 200.668C131.192 200.541 131.52 200.478 131.884 200.478C132.24 200.478 132.555 200.536 132.83 200.654C133.105 200.771 133.335 200.938 133.521 201.154C133.709 201.371 133.851 201.63 133.947 201.933C134.043 202.233 134.091 202.567 134.091 202.934V203.491H130.104V202.601H132.779V202.499C132.779 202.313 132.745 202.148 132.677 202.003C132.612 201.854 132.513 201.737 132.38 201.65C132.247 201.564 132.078 201.521 131.87 201.521C131.694 201.521 131.543 201.559 131.416 201.637C131.289 201.714 131.186 201.822 131.106 201.961C131.028 202.1 130.97 202.264 130.929 202.452C130.892 202.638 130.874 202.842 130.874 203.064V203.25C130.874 203.451 130.902 203.636 130.957 203.806C131.016 203.976 131.098 204.123 131.203 204.246C131.311 204.37 131.441 204.466 131.592 204.534C131.747 204.602 131.921 204.636 132.116 204.636C132.357 204.636 132.581 204.589 132.788 204.497C132.998 204.401 133.179 204.257 133.331 204.066L133.98 204.77C133.875 204.922 133.731 205.067 133.548 205.206C133.369 205.345 133.153 205.459 132.9 205.549C132.646 205.635 132.357 205.679 132.033 205.679ZM137.563 204.2C137.563 204.104 137.535 204.018 137.479 203.94C137.424 203.863 137.32 203.792 137.169 203.727C137.02 203.659 136.806 203.597 136.524 203.542C136.271 203.486 136.035 203.417 135.815 203.333C135.599 203.247 135.41 203.143 135.25 203.023C135.092 202.902 134.968 202.76 134.879 202.596C134.789 202.429 134.744 202.239 134.744 202.026C134.744 201.816 134.789 201.618 134.879 201.433C134.972 201.247 135.103 201.083 135.273 200.941C135.446 200.796 135.656 200.683 135.903 200.603C136.154 200.519 136.435 200.478 136.747 200.478C137.183 200.478 137.557 200.547 137.869 200.686C138.184 200.825 138.425 201.017 138.592 201.261C138.762 201.502 138.847 201.777 138.847 202.086H137.512C137.512 201.956 137.484 201.841 137.428 201.739C137.376 201.633 137.292 201.552 137.178 201.493C137.067 201.431 136.922 201.4 136.742 201.4C136.594 201.4 136.466 201.426 136.358 201.479C136.249 201.528 136.166 201.596 136.107 201.683C136.052 201.766 136.024 201.859 136.024 201.961C136.024 202.038 136.039 202.108 136.07 202.17C136.104 202.228 136.158 202.282 136.232 202.332C136.307 202.381 136.402 202.428 136.52 202.471C136.64 202.511 136.789 202.548 136.965 202.582C137.326 202.656 137.649 202.754 137.934 202.874C138.218 202.992 138.443 203.152 138.61 203.356C138.777 203.557 138.861 203.821 138.861 204.149C138.861 204.371 138.811 204.575 138.712 204.761C138.613 204.946 138.471 205.108 138.286 205.248C138.1 205.384 137.878 205.49 137.618 205.567C137.362 205.642 137.073 205.679 136.752 205.679C136.285 205.679 135.889 205.595 135.565 205.428C135.244 205.261 134.999 205.05 134.832 204.793C134.669 204.534 134.587 204.268 134.587 203.996H135.852C135.858 204.178 135.905 204.325 135.991 204.436C136.081 204.548 136.194 204.628 136.33 204.677C136.469 204.727 136.619 204.752 136.779 204.752C136.952 204.752 137.096 204.728 137.21 204.682C137.325 204.633 137.411 204.568 137.47 204.487C137.532 204.404 137.563 204.308 137.563 204.2ZM142.184 200.57V201.516H139.264V200.57H142.184ZM139.987 199.333H141.322V204.075C141.322 204.22 141.341 204.331 141.378 204.409C141.418 204.486 141.477 204.54 141.554 204.571C141.631 204.599 141.728 204.612 141.846 204.612C141.929 204.612 142.003 204.609 142.068 204.603C142.136 204.594 142.194 204.585 142.24 204.575L142.245 205.558C142.13 205.595 142.007 205.625 141.874 205.646C141.741 205.668 141.594 205.679 141.433 205.679C141.14 205.679 140.883 205.631 140.664 205.535C140.448 205.436 140.281 205.278 140.163 205.062C140.046 204.846 139.987 204.562 139.987 204.209V199.333ZM145.652 204.455V202.221C145.652 202.06 145.625 201.922 145.573 201.808C145.52 201.691 145.438 201.599 145.327 201.535C145.219 201.47 145.078 201.437 144.905 201.437C144.757 201.437 144.629 201.464 144.521 201.516C144.412 201.565 144.329 201.638 144.27 201.734C144.211 201.827 144.182 201.936 144.182 202.063H142.847C142.847 201.85 142.897 201.647 142.995 201.456C143.094 201.264 143.238 201.096 143.427 200.951C143.615 200.802 143.839 200.686 144.099 200.603C144.361 200.519 144.655 200.478 144.979 200.478C145.369 200.478 145.715 200.543 146.018 200.672C146.321 200.802 146.559 200.997 146.732 201.256C146.908 201.516 146.996 201.841 146.996 202.23V204.376C146.996 204.651 147.013 204.877 147.047 205.053C147.081 205.226 147.13 205.377 147.195 205.507V205.586H145.846C145.781 205.45 145.732 205.28 145.698 205.076C145.667 204.869 145.652 204.662 145.652 204.455ZM145.828 202.531L145.837 203.287H145.091C144.915 203.287 144.762 203.307 144.632 203.347C144.502 203.387 144.395 203.444 144.312 203.519C144.228 203.59 144.167 203.673 144.127 203.769C144.089 203.865 144.071 203.97 144.071 204.084C144.071 204.198 144.097 204.302 144.15 204.395C144.202 204.484 144.278 204.555 144.377 204.608C144.476 204.657 144.592 204.682 144.724 204.682C144.925 204.682 145.1 204.642 145.248 204.562C145.397 204.481 145.511 204.382 145.591 204.265C145.675 204.147 145.718 204.036 145.721 203.931L146.073 204.497C146.024 204.623 145.956 204.755 145.869 204.891C145.786 205.027 145.679 205.155 145.55 205.275C145.42 205.393 145.264 205.49 145.081 205.567C144.899 205.642 144.683 205.679 144.432 205.679C144.114 205.679 143.825 205.615 143.566 205.489C143.309 205.359 143.105 205.181 142.954 204.956C142.805 204.727 142.731 204.467 142.731 204.177C142.731 203.914 142.781 203.681 142.88 203.477C142.978 203.273 143.124 203.101 143.315 202.962C143.51 202.82 143.753 202.714 144.043 202.642C144.334 202.568 144.67 202.531 145.054 202.531H145.828ZM149.332 201.641V205.586H147.997V200.57H149.249L149.332 201.641ZM149.137 202.902H148.776C148.776 202.531 148.824 202.197 148.92 201.901C149.015 201.601 149.15 201.346 149.323 201.136C149.496 200.923 149.701 200.76 149.939 200.649C150.18 200.535 150.449 200.478 150.746 200.478C150.981 200.478 151.196 200.512 151.39 200.58C151.585 200.648 151.752 200.756 151.891 200.904C152.033 201.052 152.141 201.249 152.215 201.493C152.293 201.737 152.331 202.035 152.331 202.387V205.586H150.987V202.383C150.987 202.16 150.956 201.987 150.894 201.864C150.832 201.74 150.741 201.654 150.621 201.604C150.503 201.552 150.358 201.525 150.185 201.525C150.006 201.525 149.85 201.561 149.717 201.632C149.587 201.703 149.479 201.802 149.392 201.929C149.309 202.052 149.246 202.197 149.202 202.364C149.159 202.531 149.137 202.71 149.137 202.902ZM155.803 200.57V201.516H152.883V200.57H155.803ZM153.606 199.333H154.941V204.075C154.941 204.22 154.959 204.331 154.997 204.409C155.037 204.486 155.095 204.54 155.173 204.571C155.25 204.599 155.347 204.612 155.465 204.612C155.548 204.612 155.622 204.609 155.687 204.603C155.755 204.594 155.812 204.585 155.859 204.575L155.863 205.558C155.749 205.595 155.625 205.625 155.493 205.646C155.36 205.668 155.213 205.679 155.052 205.679C154.759 205.679 154.502 205.631 154.283 205.535C154.066 205.436 153.9 205.278 153.782 205.062C153.665 204.846 153.606 204.562 153.606 204.209V199.333ZM158.872 205.679C158.482 205.679 158.133 205.617 157.824 205.493C157.515 205.367 157.252 205.192 157.036 204.969C156.823 204.747 156.659 204.489 156.545 204.195C156.43 203.899 156.373 203.583 156.373 203.25V203.064C156.373 202.684 156.427 202.337 156.536 202.021C156.644 201.706 156.798 201.433 156.999 201.201C157.203 200.969 157.45 200.791 157.741 200.668C158.031 200.541 158.359 200.478 158.723 200.478C159.079 200.478 159.394 200.536 159.669 200.654C159.944 200.771 160.174 200.938 160.36 201.154C160.548 201.371 160.69 201.63 160.786 201.933C160.882 202.233 160.93 202.567 160.93 202.934V203.491H156.943V202.601H159.618V202.499C159.618 202.313 159.584 202.148 159.516 202.003C159.451 201.854 159.352 201.737 159.219 201.65C159.087 201.564 158.917 201.521 158.71 201.521C158.533 201.521 158.382 201.559 158.255 201.637C158.129 201.714 158.025 201.822 157.945 201.961C157.867 202.1 157.809 202.264 157.769 202.452C157.731 202.638 157.713 202.842 157.713 203.064V203.25C157.713 203.451 157.741 203.636 157.796 203.806C157.855 203.976 157.937 204.123 158.042 204.246C158.15 204.37 158.28 204.466 158.431 204.534C158.586 204.602 158.761 204.636 158.955 204.636C159.196 204.636 159.42 204.589 159.627 204.497C159.837 204.401 160.018 204.257 160.17 204.066L160.819 204.77C160.714 204.922 160.57 205.067 160.388 205.206C160.208 205.345 159.992 205.459 159.739 205.549C159.485 205.635 159.196 205.679 158.872 205.679ZM161.741 204.942C161.741 204.744 161.809 204.579 161.945 204.446C162.084 204.313 162.268 204.246 162.497 204.246C162.725 204.246 162.908 204.313 163.044 204.446C163.183 204.579 163.252 204.744 163.252 204.942C163.252 205.139 163.183 205.305 163.044 205.438C162.908 205.57 162.725 205.637 162.497 205.637C162.268 205.637 162.084 205.57 161.945 205.438C161.809 205.305 161.741 205.139 161.741 204.942ZM161.741 201.117C161.741 200.92 161.809 200.754 161.945 200.621C162.084 200.489 162.268 200.422 162.497 200.422C162.725 200.422 162.908 200.489 163.044 200.621C163.183 200.754 163.252 200.92 163.252 201.117C163.252 201.315 163.183 201.481 163.044 201.613C162.908 201.746 162.725 201.813 162.497 201.813C162.268 201.813 162.084 201.746 161.945 201.613C161.809 201.481 161.741 201.315 161.741 201.117Z"
                  fill="white"
                />
                <path
                  id="Monto:"
                  d="M93.5835 133.807H95.3487L98.3005 141.935L101.245 133.807H103.017L99.0051 144.605H97.5885L93.5835 133.807ZM92.6935 133.807H94.4216L94.7331 141.275V144.605H92.6935V133.807ZM102.172 133.807H103.907V144.605H101.868V141.275L102.172 133.807ZM105.487 140.675V140.519C105.487 139.93 105.571 139.389 105.739 138.895C105.908 138.395 106.152 137.963 106.474 137.597C106.795 137.231 107.188 136.947 107.653 136.744C108.118 136.536 108.647 136.432 109.24 136.432C109.843 136.432 110.377 136.536 110.842 136.744C111.312 136.947 111.707 137.231 112.029 137.597C112.35 137.963 112.595 138.395 112.763 138.895C112.931 139.389 113.015 139.93 113.015 140.519V140.675C113.015 141.258 112.931 141.799 112.763 142.299C112.595 142.793 112.35 143.226 112.029 143.597C111.707 143.963 111.314 144.247 110.849 144.45C110.385 144.652 109.853 144.754 109.255 144.754C108.662 144.754 108.13 144.652 107.66 144.45C107.191 144.247 106.795 143.963 106.474 143.597C106.152 143.226 105.908 142.793 105.739 142.299C105.571 141.799 105.487 141.258 105.487 140.675ZM107.445 140.519V140.675C107.445 141.026 107.48 141.354 107.549 141.661C107.618 141.968 107.725 142.237 107.868 142.469C108.011 142.702 108.197 142.885 108.424 143.018C108.657 143.147 108.934 143.211 109.255 143.211C109.571 143.211 109.843 143.147 110.071 143.018C110.298 142.885 110.484 142.702 110.627 142.469C110.775 142.237 110.884 141.968 110.953 141.661C111.023 141.354 111.057 141.026 111.057 140.675V140.519C111.057 140.173 111.023 139.849 110.953 139.547C110.884 139.241 110.775 138.971 110.627 138.739C110.484 138.502 110.296 138.316 110.063 138.183C109.836 138.044 109.561 137.975 109.24 137.975C108.924 137.975 108.652 138.044 108.424 138.183C108.197 138.316 108.011 138.502 107.868 138.739C107.725 138.971 107.618 139.241 107.549 139.547C107.48 139.849 107.445 140.173 107.445 140.519ZM116.36 138.294V144.605H114.402V136.581H116.241L116.36 138.294ZM116.049 140.304H115.47C115.475 139.72 115.554 139.191 115.707 138.717C115.861 138.242 116.076 137.834 116.353 137.493C116.634 137.152 116.968 136.89 117.354 136.707C117.74 136.524 118.17 136.432 118.644 136.432C119.03 136.432 119.379 136.487 119.69 136.595C120.002 136.704 120.269 136.877 120.491 137.115C120.719 137.352 120.892 137.663 121.01 138.049C121.134 138.43 121.196 138.9 121.196 139.458V144.605H119.223V139.443C119.223 139.078 119.169 138.788 119.06 138.576C118.956 138.363 118.803 138.212 118.6 138.123C118.402 138.034 118.157 137.99 117.866 137.99C117.564 137.99 117.3 138.052 117.072 138.175C116.85 138.294 116.662 138.46 116.508 138.672C116.36 138.885 116.246 139.129 116.167 139.406C116.088 139.683 116.049 139.982 116.049 140.304ZM126.721 136.581V137.99H122.123V136.581H126.721ZM123.354 134.608H125.319V142.291C125.319 142.529 125.352 142.712 125.416 142.84C125.48 142.969 125.577 143.055 125.705 143.1C125.834 143.144 125.987 143.167 126.165 143.167C126.293 143.167 126.412 143.159 126.521 143.144C126.63 143.13 126.721 143.115 126.795 143.1L126.803 144.568C126.64 144.623 126.454 144.667 126.246 144.702C126.044 144.736 125.814 144.754 125.557 144.754C125.117 144.754 124.731 144.68 124.4 144.531C124.068 144.378 123.811 144.133 123.628 143.797C123.445 143.456 123.354 143.006 123.354 142.447V134.608ZM127.485 140.675V140.519C127.485 139.93 127.569 139.389 127.737 138.895C127.905 138.395 128.15 137.963 128.471 137.597C128.793 137.231 129.186 136.947 129.651 136.744C130.116 136.536 130.645 136.432 131.238 136.432C131.841 136.432 132.375 136.536 132.84 136.744C133.31 136.947 133.705 137.231 134.027 137.597C134.348 137.963 134.593 138.395 134.761 138.895C134.929 139.389 135.013 139.93 135.013 140.519V140.675C135.013 141.258 134.929 141.799 134.761 142.299C134.593 142.793 134.348 143.226 134.027 143.597C133.705 143.963 133.312 144.247 132.847 144.45C132.383 144.652 131.851 144.754 131.253 144.754C130.659 144.754 130.128 144.652 129.658 144.45C129.188 144.247 128.793 143.963 128.471 143.597C128.15 143.226 127.905 142.793 127.737 142.299C127.569 141.799 127.485 141.258 127.485 140.675ZM129.443 140.519V140.675C129.443 141.026 129.478 141.354 129.547 141.661C129.616 141.968 129.722 142.237 129.866 142.469C130.009 142.702 130.195 142.885 130.422 143.018C130.654 143.147 130.931 143.211 131.253 143.211C131.569 143.211 131.841 143.147 132.069 143.018C132.296 142.885 132.481 142.702 132.625 142.469C132.773 142.237 132.882 141.968 132.951 141.661C133.02 141.354 133.055 141.026 133.055 140.675V140.519C133.055 140.173 133.02 139.849 132.951 139.547C132.882 139.241 132.773 138.971 132.625 138.739C132.481 138.502 132.294 138.316 132.061 138.183C131.834 138.044 131.559 137.975 131.238 137.975C130.921 137.975 130.65 138.044 130.422 138.183C130.195 138.316 130.009 138.502 129.866 138.739C129.722 138.971 129.616 139.241 129.547 139.547C129.478 139.849 129.443 140.173 129.443 140.519ZM136.481 143.649C136.481 143.352 136.583 143.102 136.786 142.9C136.988 142.697 137.263 142.596 137.609 142.596C137.955 142.596 138.229 142.697 138.432 142.9C138.635 143.102 138.736 143.352 138.736 143.649C138.736 143.94 138.635 144.188 138.432 144.39C138.229 144.588 137.955 144.687 137.609 144.687C137.263 144.687 136.988 144.588 136.786 144.39C136.583 144.188 136.481 143.94 136.481 143.649ZM136.489 137.426C136.489 137.129 136.59 136.88 136.793 136.677C136.996 136.474 137.27 136.373 137.616 136.373C137.962 136.373 138.237 136.474 138.439 136.677C138.642 136.88 138.744 137.129 138.744 137.426C138.744 137.718 138.642 137.965 138.439 138.168C138.237 138.366 137.962 138.464 137.616 138.464C137.27 138.464 136.996 138.366 136.793 138.168C136.59 137.965 136.489 137.718 136.489 137.426Z"
                  fill="white"
                />
                <path
                  id="10.00 ARS"
                  d="M100.863 159.465V175.336H97.4533V163.342L93.7714 164.464V161.828L100.525 159.465H100.863ZM116.691 165.99V168.811C116.691 169.973 116.56 170.979 116.299 171.828C116.044 172.678 115.674 173.379 115.187 173.931C114.708 174.483 114.134 174.893 113.466 175.162C112.806 175.423 112.072 175.554 111.266 175.554C110.62 175.554 110.017 175.47 109.458 175.303C108.898 175.136 108.394 174.878 107.943 174.53C107.501 174.174 107.119 173.731 106.8 173.201C106.48 172.671 106.233 172.039 106.059 171.305C105.892 170.572 105.808 169.74 105.808 168.811V165.99C105.808 164.813 105.936 163.804 106.19 162.961C106.451 162.119 106.825 161.422 107.312 160.87C107.798 160.318 108.372 159.911 109.033 159.65C109.701 159.388 110.438 159.258 111.244 159.258C111.89 159.258 112.49 159.341 113.042 159.508C113.601 159.675 114.105 159.933 114.556 160.281C115.006 160.63 115.387 161.069 115.699 161.6C116.019 162.13 116.262 162.762 116.429 163.495C116.604 164.221 116.691 165.053 116.691 165.99ZM113.292 169.236V165.543C113.292 164.998 113.259 164.526 113.194 164.127C113.136 163.72 113.049 163.375 112.933 163.092C112.824 162.809 112.686 162.58 112.519 162.406C112.352 162.231 112.159 162.104 111.941 162.024C111.731 161.937 111.498 161.894 111.244 161.894C110.925 161.894 110.638 161.959 110.384 162.09C110.129 162.22 109.915 162.427 109.741 162.711C109.567 162.987 109.432 163.361 109.338 163.833C109.251 164.297 109.207 164.868 109.207 165.543V169.236C109.207 169.78 109.236 170.256 109.294 170.663C109.36 171.069 109.447 171.418 109.556 171.708C109.672 171.992 109.813 172.224 109.981 172.406C110.148 172.58 110.34 172.707 110.558 172.787C110.776 172.867 111.012 172.907 111.266 172.907C111.585 172.907 111.869 172.845 112.116 172.722C112.363 172.591 112.573 172.384 112.747 172.101C112.929 171.81 113.063 171.429 113.15 170.957C113.245 170.485 113.292 169.911 113.292 169.236ZM119.011 173.724C119.011 173.23 119.185 172.816 119.534 172.482C119.89 172.148 120.351 171.981 120.917 171.981C121.491 171.981 121.949 172.148 122.29 172.482C122.638 172.816 122.813 173.23 122.813 173.724C122.813 174.21 122.638 174.621 122.29 174.955C121.949 175.289 121.491 175.456 120.917 175.456C120.351 175.456 119.89 175.289 119.534 174.955C119.185 174.621 119.011 174.21 119.011 173.724ZM136.19 165.99V168.811C136.19 169.973 136.059 170.979 135.797 171.828C135.543 172.678 135.173 173.379 134.686 173.931C134.207 174.483 133.633 174.893 132.965 175.162C132.304 175.423 131.571 175.554 130.765 175.554C130.118 175.554 129.516 175.47 128.957 175.303C128.397 175.136 127.893 174.878 127.442 174.53C126.999 174.174 126.618 173.731 126.299 173.201C125.979 172.671 125.732 172.039 125.558 171.305C125.391 170.572 125.307 169.74 125.307 168.811V165.99C125.307 164.813 125.434 163.804 125.689 162.961C125.95 162.119 126.324 161.422 126.811 160.87C127.297 160.318 127.871 159.911 128.532 159.65C129.2 159.388 129.937 159.258 130.743 159.258C131.389 159.258 131.988 159.341 132.54 159.508C133.1 159.675 133.604 159.933 134.055 160.281C134.505 160.63 134.886 161.069 135.198 161.6C135.518 162.13 135.761 162.762 135.928 163.495C136.102 164.221 136.19 165.053 136.19 165.99ZM132.791 169.236V165.543C132.791 164.998 132.758 164.526 132.693 164.127C132.635 163.72 132.548 163.375 132.431 163.092C132.323 162.809 132.185 162.58 132.018 162.406C131.851 162.231 131.658 162.104 131.44 162.024C131.23 161.937 130.997 161.894 130.743 161.894C130.423 161.894 130.137 161.959 129.882 162.09C129.628 162.22 129.414 162.427 129.24 162.711C129.065 162.987 128.931 163.361 128.837 163.833C128.75 164.297 128.706 164.868 128.706 165.543V169.236C128.706 169.78 128.735 170.256 128.793 170.663C128.858 171.069 128.946 171.418 129.055 171.708C129.171 171.992 129.312 172.224 129.479 172.406C129.646 172.58 129.839 172.707 130.057 172.787C130.275 172.867 130.511 172.907 130.765 172.907C131.084 172.907 131.368 172.845 131.614 172.722C131.861 172.591 132.072 172.384 132.246 172.101C132.428 171.81 132.562 171.429 132.649 170.957C132.744 170.485 132.791 169.911 132.791 169.236ZM149.065 165.99V168.811C149.065 169.973 148.935 170.979 148.673 171.828C148.419 172.678 148.049 173.379 147.562 173.931C147.083 174.483 146.509 174.893 145.841 175.162C145.18 175.423 144.447 175.554 143.641 175.554C142.994 175.554 142.392 175.47 141.832 175.303C141.273 175.136 140.768 174.878 140.318 174.53C139.875 174.174 139.494 173.731 139.174 173.201C138.855 172.671 138.608 172.039 138.434 171.305C138.267 170.572 138.183 169.74 138.183 168.811V165.99C138.183 164.813 138.31 163.804 138.564 162.961C138.826 162.119 139.2 161.422 139.686 160.87C140.173 160.318 140.747 159.911 141.407 159.65C142.076 159.388 142.813 159.258 143.619 159.258C144.265 159.258 144.864 159.341 145.416 159.508C145.975 159.675 146.48 159.933 146.93 160.281C147.381 160.63 147.762 161.069 148.074 161.6C148.394 162.13 148.637 162.762 148.804 163.495C148.978 164.221 149.065 165.053 149.065 165.99ZM145.667 169.236V165.543C145.667 164.998 145.634 164.526 145.569 164.127C145.511 163.72 145.423 163.375 145.307 163.092C145.198 162.809 145.06 162.58 144.893 162.406C144.726 162.231 144.534 162.104 144.316 162.024C144.105 161.937 143.873 161.894 143.619 161.894C143.299 161.894 143.012 161.959 142.758 162.09C142.504 162.22 142.29 162.427 142.116 162.711C141.941 162.987 141.807 163.361 141.713 163.833C141.625 164.297 141.582 164.868 141.582 165.543V169.236C141.582 169.78 141.611 170.256 141.669 170.663C141.734 171.069 141.821 171.418 141.93 171.708C142.047 171.992 142.188 172.224 142.355 172.406C142.522 172.58 142.715 172.707 142.933 172.787C143.15 172.867 143.386 172.907 143.641 172.907C143.96 172.907 144.243 172.845 144.49 172.722C144.737 172.591 144.948 172.384 145.122 172.101C145.304 171.81 145.438 171.429 145.525 170.957C145.62 170.485 145.667 169.911 145.667 169.236ZM163.521 162.493L159.425 175.336H155.634L161.505 159.475H163.902L163.521 162.493ZM166.919 175.336L162.813 162.493L162.388 159.475H164.817L170.71 175.336H166.919ZM166.745 169.432V172.177H158.477V169.432H166.745ZM172.028 159.475H178.118C179.33 159.475 180.38 159.657 181.266 160.02C182.159 160.383 182.845 160.921 183.325 161.632C183.804 162.344 184.044 163.223 184.044 164.268C184.044 165.14 183.902 165.881 183.619 166.491C183.336 167.101 182.936 167.605 182.421 168.005C181.912 168.404 181.317 168.727 180.634 168.974L179.479 169.606H174.294L174.272 166.85H178.129C178.659 166.85 179.098 166.756 179.447 166.567C179.795 166.378 180.057 166.113 180.231 165.772C180.413 165.423 180.503 165.016 180.503 164.552C180.503 164.072 180.413 163.658 180.231 163.31C180.049 162.961 179.781 162.696 179.425 162.515C179.076 162.326 178.641 162.231 178.118 162.231H175.58V175.336H172.028V159.475ZM180.808 175.336L177.246 168.288L180.993 168.277L184.61 175.173V175.336H180.808ZM194.675 171.153C194.675 170.884 194.635 170.645 194.556 170.434C194.476 170.216 194.33 170.016 194.12 169.835C193.909 169.653 193.611 169.472 193.227 169.29C192.842 169.101 192.337 168.909 191.712 168.713C191.001 168.48 190.322 168.219 189.675 167.929C189.036 167.631 188.466 167.286 187.965 166.894C187.464 166.502 187.068 166.044 186.778 165.521C186.495 164.998 186.353 164.388 186.353 163.691C186.353 163.016 186.502 162.406 186.8 161.861C187.097 161.316 187.515 160.852 188.052 160.467C188.59 160.075 189.222 159.777 189.948 159.573C190.674 159.363 191.473 159.258 192.344 159.258C193.506 159.258 194.527 159.465 195.405 159.878C196.291 160.285 196.981 160.859 197.475 161.6C197.969 162.333 198.216 163.186 198.216 164.159H194.686C194.686 163.731 194.595 163.353 194.414 163.027C194.24 162.693 193.971 162.431 193.608 162.242C193.252 162.053 192.805 161.959 192.268 161.959C191.745 161.959 191.306 162.039 190.95 162.199C190.601 162.351 190.336 162.562 190.155 162.831C189.98 163.099 189.893 163.393 189.893 163.713C189.893 163.967 189.959 164.199 190.089 164.41C190.227 164.613 190.423 164.806 190.678 164.987C190.939 165.162 191.259 165.329 191.636 165.488C192.014 165.648 192.446 165.801 192.932 165.946C193.782 166.215 194.534 166.512 195.187 166.839C195.848 167.166 196.404 167.536 196.854 167.95C197.304 168.364 197.642 168.833 197.867 169.356C198.099 169.878 198.216 170.47 198.216 171.131C198.216 171.836 198.078 172.46 197.802 173.005C197.533 173.549 197.141 174.014 196.625 174.399C196.117 174.777 195.507 175.064 194.795 175.26C194.084 175.456 193.288 175.554 192.41 175.554C191.611 175.554 190.823 175.452 190.046 175.249C189.269 175.038 188.564 174.719 187.932 174.29C187.308 173.862 186.807 173.317 186.429 172.656C186.059 171.988 185.874 171.197 185.874 170.281H189.425C189.425 170.761 189.494 171.167 189.632 171.502C189.77 171.828 189.966 172.093 190.22 172.297C190.481 172.5 190.797 172.645 191.168 172.732C191.538 172.82 191.952 172.863 192.41 172.863C192.94 172.863 193.368 172.791 193.695 172.645C194.029 172.493 194.276 172.286 194.436 172.024C194.595 171.763 194.675 171.472 194.675 171.153Z"
                  fill="white"
                />
                <path
                  id="01:05:59"
                  d="M173.08 201.618V202.786C173.08 203.293 173.026 203.73 172.918 204.098C172.81 204.463 172.654 204.762 172.45 204.997C172.249 205.229 172.01 205.401 171.732 205.512C171.453 205.623 171.144 205.679 170.804 205.679C170.533 205.679 170.279 205.645 170.044 205.577C169.809 205.506 169.598 205.396 169.409 205.248C169.224 205.099 169.063 204.912 168.927 204.687C168.794 204.458 168.692 204.186 168.621 203.871C168.55 203.556 168.515 203.194 168.515 202.786V201.618C168.515 201.111 168.569 200.677 168.677 200.315C168.788 199.951 168.944 199.653 169.145 199.421C169.349 199.189 169.59 199.019 169.868 198.911C170.146 198.8 170.455 198.744 170.795 198.744C171.067 198.744 171.319 198.78 171.551 198.851C171.786 198.919 171.997 199.025 172.186 199.171C172.374 199.316 172.535 199.503 172.668 199.731C172.801 199.957 172.903 200.227 172.974 200.543C173.045 200.855 173.08 201.213 173.08 201.618ZM171.741 202.962V201.437C171.741 201.193 171.727 200.98 171.699 200.798C171.674 200.615 171.636 200.461 171.583 200.334C171.531 200.204 171.466 200.099 171.389 200.019C171.311 199.938 171.223 199.88 171.124 199.843C171.025 199.806 170.916 199.787 170.795 199.787C170.644 199.787 170.509 199.816 170.392 199.875C170.278 199.934 170.18 200.028 170.1 200.158C170.02 200.285 169.958 200.455 169.914 200.668C169.874 200.878 169.854 201.134 169.854 201.437V202.962C169.854 203.206 169.867 203.421 169.891 203.607C169.919 203.792 169.959 203.951 170.012 204.084C170.067 204.214 170.132 204.32 170.207 204.404C170.284 204.484 170.372 204.543 170.471 204.58C170.573 204.617 170.684 204.636 170.804 204.636C170.953 204.636 171.084 204.606 171.198 204.548C171.316 204.486 171.415 204.39 171.495 204.26C171.579 204.127 171.64 203.954 171.681 203.741C171.721 203.528 171.741 203.268 171.741 202.962ZM177.243 198.823V205.586H175.908V200.362L174.304 200.872V199.819L177.099 198.823H177.243ZM179.547 204.942C179.547 204.744 179.615 204.579 179.751 204.446C179.89 204.313 180.074 204.246 180.302 204.246C180.531 204.246 180.713 204.313 180.849 204.446C180.988 204.579 181.058 204.744 181.058 204.942C181.058 205.139 180.988 205.305 180.849 205.438C180.713 205.57 180.531 205.637 180.302 205.637C180.074 205.637 179.89 205.57 179.751 205.438C179.615 205.305 179.547 205.139 179.547 204.942ZM179.547 201.117C179.547 200.92 179.615 200.754 179.751 200.621C179.89 200.489 180.074 200.422 180.302 200.422C180.531 200.422 180.713 200.489 180.849 200.621C180.988 200.754 181.058 200.92 181.058 201.117C181.058 201.315 180.988 201.481 180.849 201.613C180.713 201.746 180.531 201.813 180.302 201.813C180.074 201.813 179.89 201.746 179.751 201.613C179.615 201.481 179.547 201.315 179.547 201.117ZM186.662 201.618V202.786C186.662 203.293 186.608 203.73 186.5 204.098C186.392 204.463 186.236 204.762 186.032 204.997C185.831 205.229 185.591 205.401 185.313 205.512C185.035 205.623 184.726 205.679 184.386 205.679C184.114 205.679 183.861 205.645 183.626 205.577C183.391 205.506 183.179 205.396 182.991 205.248C182.806 205.099 182.645 204.912 182.509 204.687C182.376 204.458 182.274 204.186 182.203 203.871C182.132 203.556 182.096 203.194 182.096 202.786V201.618C182.096 201.111 182.15 200.677 182.259 200.315C182.37 199.951 182.526 199.653 182.727 199.421C182.931 199.189 183.172 199.019 183.45 198.911C183.728 198.8 184.037 198.744 184.377 198.744C184.649 198.744 184.901 198.78 185.133 198.851C185.367 198.919 185.579 199.025 185.768 199.171C185.956 199.316 186.117 199.503 186.25 199.731C186.383 199.957 186.485 200.227 186.556 200.543C186.627 200.855 186.662 201.213 186.662 201.618ZM185.323 202.962V201.437C185.323 201.193 185.309 200.98 185.281 200.798C185.256 200.615 185.218 200.461 185.165 200.334C185.112 200.204 185.048 200.099 184.97 200.019C184.893 199.938 184.805 199.88 184.706 199.843C184.607 199.806 184.498 199.787 184.377 199.787C184.226 199.787 184.091 199.816 183.974 199.875C183.859 199.934 183.762 200.028 183.682 200.158C183.601 200.285 183.54 200.455 183.496 200.668C183.456 200.878 183.436 201.134 183.436 201.437V202.962C183.436 203.206 183.448 203.421 183.473 203.607C183.501 203.792 183.541 203.951 183.594 204.084C183.649 204.214 183.714 204.32 183.788 204.404C183.866 204.484 183.954 204.543 184.053 204.58C184.154 204.617 184.266 204.636 184.386 204.636C184.535 204.636 184.666 204.606 184.78 204.548C184.898 204.486 184.997 204.39 185.077 204.26C185.16 204.127 185.222 203.954 185.262 203.741C185.303 203.528 185.323 203.268 185.323 202.962ZM188.827 202.513L187.761 202.258L188.146 198.837H191.937V199.917H189.244L189.077 201.414C189.167 201.362 189.303 201.306 189.485 201.247C189.668 201.185 189.871 201.154 190.097 201.154C190.425 201.154 190.715 201.205 190.969 201.307C191.222 201.409 191.437 201.558 191.613 201.752C191.792 201.947 191.928 202.185 192.021 202.466C192.113 202.748 192.16 203.066 192.16 203.421C192.16 203.721 192.113 204.007 192.021 204.279C191.928 204.548 191.787 204.789 191.599 205.002C191.41 205.212 191.174 205.377 190.89 205.498C190.605 205.618 190.269 205.679 189.879 205.679C189.589 205.679 189.308 205.635 189.036 205.549C188.767 205.462 188.524 205.334 188.308 205.164C188.095 204.994 187.923 204.789 187.793 204.548C187.667 204.303 187.6 204.025 187.594 203.713H188.92C188.938 203.905 188.988 204.07 189.068 204.209C189.151 204.345 189.261 204.45 189.397 204.524C189.533 204.599 189.692 204.636 189.875 204.636C190.045 204.636 190.19 204.603 190.31 204.538C190.431 204.473 190.528 204.384 190.602 204.269C190.677 204.152 190.731 204.016 190.765 203.862C190.802 203.704 190.82 203.534 190.82 203.352C190.82 203.169 190.799 203.004 190.755 202.856C190.712 202.707 190.646 202.579 190.556 202.471C190.466 202.363 190.352 202.279 190.213 202.221C190.077 202.162 189.918 202.133 189.736 202.133C189.488 202.133 189.297 202.171 189.161 202.248C189.028 202.326 188.917 202.414 188.827 202.513ZM193.129 204.942C193.129 204.744 193.197 204.579 193.333 204.446C193.472 204.313 193.656 204.246 193.884 204.246C194.113 204.246 194.295 204.313 194.431 204.446C194.57 204.579 194.64 204.744 194.64 204.942C194.64 205.139 194.57 205.305 194.431 205.438C194.295 205.57 194.113 205.637 193.884 205.637C193.656 205.637 193.472 205.57 193.333 205.438C193.197 205.305 193.129 205.139 193.129 204.942ZM193.129 201.117C193.129 200.92 193.197 200.754 193.333 200.621C193.472 200.489 193.656 200.422 193.884 200.422C194.113 200.422 194.295 200.489 194.431 200.621C194.57 200.754 194.64 200.92 194.64 201.117C194.64 201.315 194.57 201.481 194.431 201.613C194.295 201.746 194.113 201.813 193.884 201.813C193.656 201.813 193.472 201.746 193.333 201.613C193.197 201.481 193.129 201.315 193.129 201.117ZM196.958 202.513L195.891 202.258L196.276 198.837H200.068V199.917H197.375L197.208 201.414C197.297 201.362 197.433 201.306 197.616 201.247C197.798 201.185 198.002 201.154 198.228 201.154C198.555 201.154 198.846 201.205 199.099 201.307C199.352 201.409 199.567 201.558 199.743 201.752C199.923 201.947 200.059 202.185 200.151 202.466C200.244 202.748 200.29 203.066 200.29 203.421C200.29 203.721 200.244 204.007 200.151 204.279C200.059 204.548 199.918 204.789 199.729 205.002C199.541 205.212 199.305 205.377 199.02 205.498C198.736 205.618 198.399 205.679 198.01 205.679C197.719 205.679 197.438 205.635 197.166 205.549C196.897 205.462 196.655 205.334 196.438 205.164C196.225 204.994 196.054 204.789 195.924 204.548C195.797 204.303 195.731 204.025 195.724 203.713H197.05C197.069 203.905 197.118 204.07 197.199 204.209C197.282 204.345 197.392 204.45 197.528 204.524C197.664 204.599 197.823 204.636 198.005 204.636C198.175 204.636 198.32 204.603 198.441 204.538C198.561 204.473 198.659 204.384 198.733 204.269C198.807 204.152 198.861 204.016 198.895 203.862C198.932 203.704 198.951 203.534 198.951 203.352C198.951 203.169 198.929 203.004 198.886 202.856C198.843 202.707 198.776 202.579 198.687 202.471C198.597 202.363 198.483 202.279 198.343 202.221C198.208 202.162 198.048 202.133 197.866 202.133C197.619 202.133 197.427 202.171 197.291 202.248C197.158 202.326 197.047 202.414 196.958 202.513ZM202.098 204.571H202.186C202.557 204.571 202.875 204.526 203.141 204.436C203.41 204.344 203.631 204.211 203.804 204.038C203.977 203.865 204.105 203.653 204.189 203.403C204.272 203.149 204.314 202.862 204.314 202.54V201.261C204.314 201.017 204.289 200.802 204.24 200.617C204.193 200.431 204.125 200.278 204.036 200.158C203.949 200.034 203.847 199.942 203.73 199.88C203.616 199.818 203.489 199.787 203.35 199.787C203.201 199.787 203.07 199.824 202.956 199.898C202.841 199.969 202.744 200.067 202.664 200.19C202.586 200.314 202.526 200.456 202.483 200.617C202.443 200.774 202.423 200.94 202.423 201.113C202.423 201.286 202.443 201.451 202.483 201.609C202.523 201.763 202.583 201.901 202.664 202.021C202.744 202.139 202.844 202.233 202.965 202.304C203.086 202.372 203.228 202.406 203.391 202.406C203.549 202.406 203.69 202.377 203.813 202.318C203.94 202.256 204.047 202.176 204.133 202.077C204.223 201.978 204.291 201.868 204.337 201.748C204.387 201.627 204.411 201.505 204.411 201.382L204.852 201.623C204.852 201.839 204.805 202.052 204.713 202.262C204.62 202.472 204.49 202.664 204.323 202.837C204.159 203.007 203.969 203.143 203.753 203.245C203.537 203.347 203.305 203.398 203.058 203.398C202.743 203.398 202.463 203.341 202.219 203.227C201.975 203.109 201.768 202.948 201.598 202.744C201.431 202.537 201.304 202.296 201.217 202.021C201.131 201.746 201.088 201.448 201.088 201.127C201.088 200.799 201.14 200.492 201.245 200.204C201.353 199.917 201.506 199.663 201.704 199.444C201.905 199.225 202.145 199.053 202.423 198.929C202.704 198.803 203.016 198.739 203.359 198.739C203.702 198.739 204.014 198.806 204.295 198.939C204.577 199.072 204.818 199.26 205.018 199.504C205.219 199.745 205.374 200.034 205.482 200.371C205.593 200.708 205.649 201.082 205.649 201.493V201.956C205.649 202.395 205.601 202.803 205.505 203.18C205.413 203.557 205.272 203.899 205.083 204.205C204.898 204.507 204.666 204.767 204.388 204.983C204.113 205.2 203.793 205.365 203.429 205.479C203.064 205.594 202.656 205.651 202.205 205.651H202.098V204.571Z"
                  fill="white"
                />
              </g>
              <g id="Group 1410135736">
                <rect
                  id="Rectangle 6617"
                  x="0.237333"
                  y="-0.237333"
                  width="317.552"
                  height="93.984"
                  rx="11.1547"
                  transform="matrix(1 0 0 -1 76.9375 343.728)"
                  fill="white"
                  stroke="#EAEAEA"
                  strokeWidth="0.474667"
                />
                <path
                  id="CVU:"
                  d="M93.2797 275.269L95.0643 275.243C94.9951 275.901 94.8112 276.481 94.5127 276.982C94.2185 277.484 93.8183 277.874 93.3121 278.151C92.8103 278.427 92.2175 278.557 91.534 278.54C90.9672 278.527 90.4978 278.404 90.1257 278.17C89.758 277.932 89.4746 277.621 89.2756 277.236C89.0809 276.846 88.9576 276.416 88.9057 275.944C88.8538 275.468 88.8603 274.984 88.9252 274.49L89.1653 272.888C89.2432 272.364 89.3751 271.858 89.5611 271.369C89.7472 270.876 89.9938 270.437 90.301 270.052C90.6125 269.662 90.991 269.357 91.4366 269.137C91.8866 268.916 92.4057 268.812 92.9941 268.825C93.6691 268.838 94.2055 268.996 94.6036 269.299C95.0016 269.597 95.2871 269.997 95.4602 270.499C95.6332 271.001 95.7198 271.557 95.7198 272.167L93.8702 272.161C93.8875 271.866 93.8832 271.587 93.8573 271.324C93.8356 271.055 93.7513 270.837 93.6042 270.668C93.4571 270.495 93.2061 270.402 92.8514 270.389C92.5053 270.376 92.2197 270.445 91.9947 270.597C91.7741 270.748 91.5967 270.949 91.4626 271.2C91.3328 271.451 91.2333 271.724 91.1641 272.018C91.0992 272.312 91.0473 272.598 91.0083 272.875L90.7812 274.497C90.7509 274.722 90.7228 274.975 90.6968 275.256C90.6752 275.533 90.6795 275.801 90.7098 276.061C90.7444 276.316 90.8331 276.53 90.9759 276.703C91.123 276.876 91.3566 276.969 91.6768 276.982C92.0488 277 92.3409 276.933 92.5528 276.781C92.7692 276.63 92.9292 276.422 93.0331 276.158C93.1412 275.89 93.2234 275.594 93.2797 275.269ZM98.9775 276.308L101.794 268.961H103.897L99.7628 278.41H98.3805L98.9775 276.308ZM98.6985 268.961L99.2176 276.463L99.1852 278.41H97.8548L96.6997 268.961H98.6985ZM108.946 268.961H110.795L109.692 275.444C109.601 276.08 109.411 276.634 109.121 277.106C108.831 277.573 108.444 277.932 107.959 278.183C107.475 278.434 106.901 278.555 106.239 278.546C105.616 278.533 105.102 278.397 104.695 278.138C104.288 277.874 103.994 277.512 103.812 277.054C103.635 276.591 103.583 276.057 103.657 275.451L104.76 268.961H106.603L105.519 275.457C105.489 275.721 105.484 275.966 105.506 276.191C105.532 276.411 105.61 276.595 105.74 276.742C105.874 276.885 106.094 276.961 106.402 276.969C106.726 276.982 106.988 276.924 107.187 276.794C107.386 276.664 107.535 276.483 107.635 276.249C107.734 276.011 107.808 275.747 107.855 275.457L108.946 268.961ZM110.789 277.521C110.784 277.223 110.882 276.974 111.081 276.775C111.28 276.576 111.531 276.474 111.833 276.47C112.115 276.465 112.353 276.556 112.547 276.742C112.746 276.924 112.848 277.158 112.852 277.443C112.857 277.742 112.757 277.99 112.554 278.19C112.355 278.384 112.108 278.484 111.814 278.488C111.528 278.492 111.286 278.404 111.087 278.222C110.892 278.04 110.793 277.807 110.789 277.521ZM111.697 272.2C111.693 271.901 111.79 271.652 111.989 271.453C112.188 271.254 112.439 271.153 112.742 271.148C113.023 271.144 113.261 271.235 113.456 271.421C113.655 271.603 113.756 271.836 113.761 272.122C113.765 272.42 113.666 272.669 113.462 272.868C113.263 273.063 113.017 273.162 112.722 273.167C112.437 273.171 112.195 273.082 111.996 272.9C111.801 272.719 111.701 272.485 111.697 272.2Z"
                  fill="black"
                />
                <path
                  d="M132.421 272.855L132.174 274.484C132.096 275.003 131.971 275.507 131.798 275.996C131.629 276.481 131.4 276.918 131.11 277.307C130.82 277.696 130.461 278.003 130.033 278.228C129.604 278.449 129.092 278.553 128.494 278.54C128.04 278.531 127.653 278.447 127.333 278.287C127.017 278.127 126.757 277.915 126.554 277.651C126.355 277.383 126.204 277.078 126.1 276.736C126 276.39 125.942 276.026 125.925 275.646C125.912 275.261 125.929 274.875 125.977 274.49L126.217 272.855C126.295 272.34 126.42 271.841 126.593 271.356C126.766 270.871 126.998 270.437 127.287 270.052C127.577 269.662 127.936 269.359 128.365 269.143C128.797 268.922 129.31 268.819 129.903 268.832C130.357 268.84 130.742 268.925 131.058 269.085C131.378 269.24 131.638 269.45 131.837 269.714C132.04 269.978 132.191 270.281 132.291 270.623C132.395 270.964 132.453 271.326 132.466 271.706C132.483 272.087 132.468 272.47 132.421 272.855ZM130.318 274.737L130.636 272.589C130.653 272.433 130.671 272.258 130.688 272.063C130.71 271.864 130.714 271.663 130.701 271.46C130.692 271.256 130.658 271.068 130.597 270.895C130.541 270.718 130.448 270.575 130.318 270.467C130.188 270.354 130.011 270.292 129.786 270.279C129.474 270.266 129.215 270.333 129.007 270.48C128.804 270.623 128.639 270.815 128.514 271.057C128.393 271.3 128.3 271.557 128.235 271.83C128.17 272.102 128.118 272.36 128.079 272.602L127.768 274.744C127.75 274.899 127.731 275.077 127.709 275.276C127.692 275.475 127.688 275.678 127.696 275.886C127.709 276.093 127.744 276.286 127.8 276.463C127.856 276.641 127.949 276.786 128.079 276.898C128.209 277.011 128.386 277.073 128.611 277.086C128.923 277.104 129.182 277.039 129.39 276.892C129.598 276.74 129.762 276.543 129.883 276.301C130.009 276.054 130.104 275.793 130.169 275.516C130.234 275.235 130.283 274.975 130.318 274.737ZM139.819 272.855L139.572 274.484C139.494 275.003 139.369 275.507 139.196 275.996C139.027 276.481 138.798 276.918 138.508 277.307C138.218 277.696 137.859 278.003 137.431 278.228C137.002 278.449 136.49 278.553 135.893 278.54C135.438 278.531 135.051 278.447 134.731 278.287C134.415 278.127 134.156 277.915 133.952 277.651C133.753 277.383 133.602 277.078 133.498 276.736C133.398 276.39 133.34 276.026 133.323 275.646C133.31 275.261 133.327 274.875 133.375 274.49L133.615 272.855C133.693 272.34 133.818 271.841 133.991 271.356C134.164 270.871 134.396 270.437 134.686 270.052C134.975 269.662 135.334 269.359 135.763 269.143C136.195 268.922 136.708 268.819 137.301 268.832C137.755 268.84 138.14 268.925 138.456 269.085C138.776 269.24 139.036 269.45 139.235 269.714C139.438 269.978 139.589 270.281 139.689 270.623C139.793 270.964 139.851 271.326 139.864 271.706C139.882 272.087 139.866 272.47 139.819 272.855ZM137.716 274.737L138.034 272.589C138.051 272.433 138.069 272.258 138.086 272.063C138.108 271.864 138.112 271.663 138.099 271.46C138.09 271.256 138.056 271.068 137.995 270.895C137.939 270.718 137.846 270.575 137.716 270.467C137.586 270.354 137.409 270.292 137.184 270.279C136.873 270.266 136.613 270.333 136.405 270.48C136.202 270.623 136.038 270.815 135.912 271.057C135.791 271.3 135.698 271.557 135.633 271.83C135.568 272.102 135.516 272.36 135.477 272.602L135.166 274.744C135.148 274.899 135.129 275.077 135.107 275.276C135.09 275.475 135.086 275.678 135.094 275.886C135.107 276.093 135.142 276.286 135.198 276.463C135.254 276.641 135.347 276.786 135.477 276.898C135.607 277.011 135.784 277.073 136.009 277.086C136.321 277.104 136.58 277.039 136.788 276.892C136.996 276.74 137.16 276.543 137.281 276.301C137.407 276.054 137.502 275.793 137.567 275.516C137.632 275.235 137.682 274.975 137.716 274.737ZM147.217 272.855L146.97 274.484C146.892 275.003 146.767 275.507 146.594 275.996C146.425 276.481 146.196 276.918 145.906 277.307C145.616 277.696 145.257 278.003 144.829 278.228C144.4 278.449 143.888 278.553 143.291 278.54C142.836 278.531 142.449 278.447 142.129 278.287C141.813 278.127 141.554 277.915 141.35 277.651C141.151 277.383 141 277.078 140.896 276.736C140.797 276.39 140.738 276.026 140.721 275.646C140.708 275.261 140.725 274.875 140.773 274.49L141.013 272.855C141.091 272.34 141.216 271.841 141.389 271.356C141.562 270.871 141.794 270.437 142.084 270.052C142.374 269.662 142.733 269.359 143.161 269.143C143.594 268.922 144.106 268.819 144.699 268.832C145.153 268.84 145.538 268.925 145.854 269.085C146.174 269.24 146.434 269.45 146.633 269.714C146.836 269.978 146.988 270.281 147.087 270.623C147.191 270.964 147.249 271.326 147.262 271.706C147.28 272.087 147.265 272.47 147.217 272.855ZM145.114 274.737L145.432 272.589C145.45 272.433 145.467 272.258 145.484 272.063C145.506 271.864 145.51 271.663 145.497 271.46C145.489 271.256 145.454 271.068 145.393 270.895C145.337 270.718 145.244 270.575 145.114 270.467C144.985 270.354 144.807 270.292 144.582 270.279C144.271 270.266 144.011 270.333 143.803 270.48C143.6 270.623 143.436 270.815 143.31 271.057C143.189 271.3 143.096 271.557 143.031 271.83C142.966 272.102 142.914 272.36 142.875 272.602L142.564 274.744C142.547 274.899 142.527 275.077 142.505 275.276C142.488 275.475 142.484 275.678 142.493 275.886C142.505 276.093 142.54 276.286 142.596 276.463C142.653 276.641 142.746 276.786 142.875 276.898C143.005 277.011 143.183 277.073 143.408 277.086C143.719 277.104 143.979 277.039 144.186 276.892C144.394 276.74 144.558 276.543 144.679 276.301C144.805 276.054 144.9 275.793 144.965 275.516C145.03 275.235 145.08 274.975 145.114 274.737ZM154.615 272.855L154.368 274.484C154.291 275.003 154.165 275.507 153.992 275.996C153.823 276.481 153.594 276.918 153.304 277.307C153.014 277.696 152.655 278.003 152.227 278.228C151.799 278.449 151.286 278.553 150.689 278.54C150.235 278.531 149.847 278.447 149.527 278.287C149.211 278.127 148.952 277.915 148.748 277.651C148.549 277.383 148.398 277.078 148.294 276.736C148.195 276.39 148.136 276.026 148.119 275.646C148.106 275.261 148.123 274.875 148.171 274.49L148.411 272.855C148.489 272.34 148.614 271.841 148.787 271.356C148.96 270.871 149.192 270.437 149.482 270.052C149.772 269.662 150.131 269.359 150.559 269.143C150.992 268.922 151.504 268.819 152.097 268.832C152.551 268.84 152.936 268.925 153.252 269.085C153.572 269.24 153.832 269.45 154.031 269.714C154.234 269.978 154.386 270.281 154.485 270.623C154.589 270.964 154.647 271.326 154.66 271.706C154.678 272.087 154.663 272.47 154.615 272.855ZM152.512 274.737L152.83 272.589C152.848 272.433 152.865 272.258 152.882 272.063C152.904 271.864 152.908 271.663 152.895 271.46C152.887 271.256 152.852 271.068 152.791 270.895C152.735 270.718 152.642 270.575 152.512 270.467C152.383 270.354 152.205 270.292 151.98 270.279C151.669 270.266 151.409 270.333 151.202 270.48C150.998 270.623 150.834 270.815 150.708 271.057C150.587 271.3 150.494 271.557 150.429 271.83C150.364 272.102 150.312 272.36 150.274 272.602L149.962 274.744C149.945 274.899 149.925 275.077 149.904 275.276C149.886 275.475 149.882 275.678 149.891 275.886C149.904 276.093 149.938 276.286 149.994 276.463C150.051 276.641 150.144 276.786 150.274 276.898C150.403 277.011 150.581 277.073 150.806 277.086C151.117 277.104 151.377 277.039 151.584 276.892C151.792 276.74 151.956 276.543 152.078 276.301C152.203 276.054 152.298 275.793 152.363 275.516C152.428 275.235 152.478 274.975 152.512 274.737ZM162.013 272.855L161.767 274.484C161.689 275.003 161.563 275.507 161.39 275.996C161.221 276.481 160.992 276.918 160.702 277.307C160.412 277.696 160.053 278.003 159.625 278.228C159.197 278.449 158.684 278.553 158.087 278.54C157.633 278.531 157.245 278.447 156.925 278.287C156.61 278.127 156.35 277.915 156.147 277.651C155.948 277.383 155.796 277.078 155.692 276.736C155.593 276.39 155.534 276.026 155.517 275.646C155.504 275.261 155.521 274.875 155.569 274.49L155.809 272.855C155.887 272.34 156.012 271.841 156.186 271.356C156.359 270.871 156.59 270.437 156.88 270.052C157.17 269.662 157.529 269.359 157.957 269.143C158.39 268.922 158.903 268.819 159.495 268.832C159.949 268.84 160.335 268.925 160.65 269.085C160.971 269.24 161.23 269.45 161.429 269.714C161.632 269.978 161.784 270.281 161.883 270.623C161.987 270.964 162.046 271.326 162.059 271.706C162.076 272.087 162.061 272.47 162.013 272.855ZM159.911 274.737L160.229 272.589C160.246 272.433 160.263 272.258 160.28 272.063C160.302 271.864 160.306 271.663 160.293 271.46C160.285 271.256 160.25 271.068 160.19 270.895C160.133 270.718 160.04 270.575 159.911 270.467C159.781 270.354 159.603 270.292 159.378 270.279C159.067 270.266 158.807 270.333 158.6 270.48C158.396 270.623 158.232 270.815 158.106 271.057C157.985 271.3 157.892 271.557 157.827 271.83C157.762 272.102 157.711 272.36 157.672 272.602L157.36 274.744C157.343 274.899 157.323 275.077 157.302 275.276C157.284 275.475 157.28 275.678 157.289 275.886C157.302 276.093 157.336 276.286 157.393 276.463C157.449 276.641 157.542 276.786 157.672 276.898C157.801 277.011 157.979 277.073 158.204 277.086C158.515 277.104 158.775 277.039 158.983 276.892C159.19 276.74 159.355 276.543 159.476 276.301C159.601 276.054 159.696 275.793 159.761 275.516C159.826 275.235 159.876 274.975 159.911 274.737ZM169.411 272.855L169.165 274.484C169.087 275.003 168.961 275.507 168.788 275.996C168.62 276.481 168.39 276.918 168.1 277.307C167.811 277.696 167.451 278.003 167.023 278.228C166.595 278.449 166.082 278.553 165.485 278.54C165.031 278.531 164.644 278.447 164.323 278.287C164.008 278.127 163.748 277.915 163.545 277.651C163.346 277.383 163.194 277.078 163.09 276.736C162.991 276.39 162.933 276.026 162.915 275.646C162.902 275.261 162.92 274.875 162.967 274.49L163.207 272.855C163.285 272.34 163.411 271.841 163.584 271.356C163.757 270.871 163.988 270.437 164.278 270.052C164.568 269.662 164.927 269.359 165.355 269.143C165.788 268.922 166.301 268.819 166.893 268.832C167.348 268.84 167.733 268.925 168.048 269.085C168.369 269.24 168.628 269.45 168.827 269.714C169.031 269.978 169.182 270.281 169.282 270.623C169.385 270.964 169.444 271.326 169.457 271.706C169.474 272.087 169.459 272.47 169.411 272.855ZM167.309 274.737L167.627 272.589C167.644 272.433 167.661 272.258 167.679 272.063C167.7 271.864 167.705 271.663 167.692 271.46C167.683 271.256 167.648 271.068 167.588 270.895C167.531 270.718 167.438 270.575 167.309 270.467C167.179 270.354 167.002 270.292 166.777 270.279C166.465 270.266 166.205 270.333 165.998 270.48C165.794 270.623 165.63 270.815 165.505 271.057C165.383 271.3 165.29 271.557 165.226 271.83C165.161 272.102 165.109 272.36 165.07 272.602L164.758 274.744C164.741 274.899 164.721 275.077 164.7 275.276C164.683 275.475 164.678 275.678 164.687 275.886C164.7 276.093 164.734 276.286 164.791 276.463C164.847 276.641 164.94 276.786 165.07 276.898C165.2 277.011 165.377 277.073 165.602 277.086C165.913 277.104 166.173 277.039 166.381 276.892C166.588 276.74 166.753 276.543 166.874 276.301C166.999 276.054 167.095 275.793 167.159 275.516C167.224 275.235 167.274 274.975 167.309 274.737ZM176.809 272.855L176.563 274.484C176.485 275.003 176.359 275.507 176.186 275.996C176.018 276.481 175.788 276.918 175.499 277.307C175.209 277.696 174.85 278.003 174.421 278.228C173.993 278.449 173.48 278.553 172.883 278.54C172.429 278.531 172.042 278.447 171.722 278.287C171.406 278.127 171.146 277.915 170.943 277.651C170.744 277.383 170.592 277.078 170.489 276.736C170.389 276.39 170.331 276.026 170.313 275.646C170.3 275.261 170.318 274.875 170.365 274.49L170.605 272.855C170.683 272.34 170.809 271.841 170.982 271.356C171.155 270.871 171.386 270.437 171.676 270.052C171.966 269.662 172.325 269.359 172.753 269.143C173.186 268.922 173.699 268.819 174.291 268.832C174.746 268.84 175.131 268.925 175.447 269.085C175.767 269.24 176.026 269.45 176.225 269.714C176.429 269.978 176.58 270.281 176.68 270.623C176.783 270.964 176.842 271.326 176.855 271.706C176.872 272.087 176.857 272.47 176.809 272.855ZM174.707 274.737L175.025 272.589C175.042 272.433 175.059 272.258 175.077 272.063C175.098 271.864 175.103 271.663 175.09 271.46C175.081 271.256 175.046 271.068 174.986 270.895C174.93 270.718 174.837 270.575 174.707 270.467C174.577 270.354 174.4 270.292 174.175 270.279C173.863 270.266 173.604 270.333 173.396 270.48C173.193 270.623 173.028 270.815 172.903 271.057C172.782 271.3 172.689 271.557 172.624 271.83C172.559 272.102 172.507 272.36 172.468 272.602L172.156 274.744C172.139 274.899 172.12 275.077 172.098 275.276C172.081 275.475 172.076 275.678 172.085 275.886C172.098 276.093 172.133 276.286 172.189 276.463C172.245 276.641 172.338 276.786 172.468 276.898C172.598 277.011 172.775 277.073 173 277.086C173.312 277.104 173.571 277.039 173.779 276.892C173.986 276.74 174.151 276.543 174.272 276.301C174.397 276.054 174.493 275.793 174.558 275.516C174.622 275.235 174.672 274.975 174.707 274.737ZM184.208 272.855L183.961 274.484C183.883 275.003 183.758 275.507 183.585 275.996C183.416 276.481 183.187 276.918 182.897 277.307C182.607 277.696 182.248 278.003 181.819 278.228C181.391 278.449 180.878 278.553 180.281 278.54C179.827 278.531 179.44 278.447 179.12 278.287C178.804 278.127 178.544 277.915 178.341 277.651C178.142 277.383 177.991 277.078 177.887 276.736C177.787 276.39 177.729 276.026 177.711 275.646C177.699 275.261 177.716 274.875 177.763 274.49L178.004 272.855C178.081 272.34 178.207 271.841 178.38 271.356C178.553 270.871 178.784 270.437 179.074 270.052C179.364 269.662 179.723 269.359 180.152 269.143C180.584 268.922 181.097 268.819 181.69 268.832C182.144 268.84 182.529 268.925 182.845 269.085C183.165 269.24 183.424 269.45 183.623 269.714C183.827 269.978 183.978 270.281 184.078 270.623C184.182 270.964 184.24 271.326 184.253 271.706C184.27 272.087 184.255 272.47 184.208 272.855ZM182.105 274.737L182.423 272.589C182.44 272.433 182.458 272.258 182.475 272.063C182.496 271.864 182.501 271.663 182.488 271.46C182.479 271.256 182.445 271.068 182.384 270.895C182.328 270.718 182.235 270.575 182.105 270.467C181.975 270.354 181.798 270.292 181.573 270.279C181.261 270.266 181.002 270.333 180.794 270.48C180.591 270.623 180.426 270.815 180.301 271.057C180.18 271.3 180.087 271.557 180.022 271.83C179.957 272.102 179.905 272.36 179.866 272.602L179.555 274.744C179.537 274.899 179.518 275.077 179.496 275.276C179.479 275.475 179.474 275.678 179.483 275.886C179.496 276.093 179.531 276.286 179.587 276.463C179.643 276.641 179.736 276.786 179.866 276.898C179.996 277.011 180.173 277.073 180.398 277.086C180.71 277.104 180.969 277.039 181.177 276.892C181.385 276.74 181.549 276.543 181.67 276.301C181.796 276.054 181.891 275.793 181.956 275.516C182.021 275.235 182.07 274.975 182.105 274.737ZM191.067 276.95L190.833 278.41H184.558L184.759 277.093L188.166 273.88C188.365 273.686 188.577 273.469 188.802 273.231C189.031 272.994 189.233 272.74 189.406 272.472C189.583 272.2 189.693 271.914 189.737 271.616C189.767 271.386 189.756 271.172 189.704 270.973C189.652 270.77 189.553 270.603 189.406 270.473C189.259 270.344 189.055 270.277 188.796 270.272C188.484 270.264 188.22 270.339 188.004 270.499C187.788 270.655 187.617 270.861 187.491 271.116C187.37 271.367 187.29 271.631 187.251 271.908L185.441 271.921C185.48 271.306 185.661 270.765 185.986 270.298C186.315 269.827 186.734 269.461 187.245 269.201C187.76 268.938 188.32 268.812 188.925 268.825C189.462 268.834 189.942 268.94 190.366 269.143C190.79 269.342 191.117 269.636 191.346 270.026C191.575 270.411 191.666 270.887 191.619 271.453C191.584 271.843 191.482 272.206 191.314 272.544C191.149 272.881 190.942 273.199 190.691 273.498C190.444 273.796 190.18 274.079 189.899 274.348C189.618 274.612 189.345 274.867 189.081 275.113L187.18 276.937L191.067 276.95ZM197.907 268.942L196.311 278.41H194.487L195.753 271.135L193.455 271.843L193.721 270.298L197.673 268.942H197.907ZM205.863 276.95L205.63 278.41H199.354L199.555 277.093L202.962 273.88C203.161 273.686 203.373 273.469 203.598 273.231C203.828 272.994 204.029 272.74 204.202 272.472C204.379 272.2 204.49 271.914 204.533 271.616C204.563 271.386 204.552 271.172 204.5 270.973C204.449 270.77 204.349 270.603 204.202 270.473C204.055 270.344 203.852 270.277 203.592 270.272C203.28 270.264 203.017 270.339 202.8 270.499C202.584 270.655 202.413 270.861 202.288 271.116C202.166 271.367 202.086 271.631 202.047 271.908L200.237 271.921C200.276 271.306 200.457 270.765 200.782 270.298C201.111 269.827 201.53 269.461 202.041 269.201C202.556 268.938 203.116 268.812 203.722 268.825C204.258 268.834 204.738 268.94 205.162 269.143C205.586 269.342 205.913 269.636 206.142 270.026C206.372 270.411 206.462 270.887 206.415 271.453C206.38 271.843 206.279 272.206 206.11 272.544C205.945 272.881 205.738 273.199 205.487 273.498C205.24 273.796 204.976 274.079 204.695 274.348C204.414 274.612 204.141 274.867 203.877 275.113L201.976 276.937L205.863 276.95ZM213.307 275.769C213.268 276.379 213.084 276.894 212.755 277.313C212.426 277.729 212.007 278.04 211.496 278.248C210.99 278.456 210.449 278.553 209.874 278.54C209.342 278.531 208.857 278.425 208.42 278.222C207.988 278.014 207.648 277.714 207.401 277.32C207.159 276.926 207.057 276.444 207.096 275.873C207.127 275.431 207.243 275.042 207.447 274.705C207.654 274.367 207.92 274.086 208.245 273.861C208.569 273.632 208.929 273.461 209.322 273.348C209.716 273.236 210.118 273.184 210.529 273.193C211.035 273.201 211.505 273.307 211.938 273.511C212.375 273.71 212.721 273.999 212.976 274.38C213.231 274.757 213.341 275.219 213.307 275.769ZM211.503 275.639C211.529 275.405 211.509 275.187 211.444 274.984C211.379 274.78 211.267 274.616 211.107 274.49C210.951 274.361 210.743 274.294 210.484 274.289C210.203 274.285 209.952 274.348 209.731 274.477C209.51 274.607 209.331 274.785 209.192 275.01C209.058 275.235 208.976 275.481 208.946 275.749C208.92 275.987 208.939 276.208 209.004 276.411C209.073 276.61 209.188 276.77 209.348 276.892C209.513 277.013 209.725 277.078 209.984 277.086C210.265 277.091 210.514 277.03 210.73 276.905C210.951 276.775 211.126 276.6 211.256 276.379C211.39 276.158 211.472 275.912 211.503 275.639ZM213.884 271.414C213.845 271.964 213.666 272.427 213.346 272.803C213.03 273.175 212.632 273.459 212.152 273.653C211.676 273.844 211.185 273.932 210.679 273.919C210.211 273.911 209.772 273.813 209.361 273.627C208.954 273.441 208.63 273.171 208.388 272.816C208.145 272.461 208.037 272.029 208.063 271.518C208.098 270.938 208.267 270.447 208.569 270.045C208.872 269.638 209.262 269.331 209.738 269.124C210.213 268.912 210.728 268.812 211.282 268.825C211.797 268.834 212.256 268.942 212.658 269.15C213.065 269.357 213.378 269.654 213.599 270.039C213.82 270.419 213.915 270.878 213.884 271.414ZM212.035 271.499C212.057 271.295 212.041 271.101 211.989 270.915C211.942 270.729 211.849 270.577 211.71 270.46C211.576 270.344 211.395 270.285 211.165 270.285C210.914 270.277 210.696 270.335 210.51 270.46C210.324 270.582 210.177 270.744 210.069 270.947C209.96 271.15 209.893 271.369 209.867 271.603C209.846 271.81 209.859 272.007 209.906 272.193C209.958 272.379 210.051 272.535 210.185 272.66C210.319 272.782 210.503 272.842 210.737 272.842C210.992 272.846 211.211 272.786 211.392 272.66C211.578 272.535 211.726 272.368 211.834 272.161C211.942 271.953 212.009 271.732 212.035 271.499ZM220.101 268.942L218.505 278.41H216.681L217.947 271.135L215.65 271.843L215.916 270.298L219.868 268.942H220.101ZM229.258 268.961L229.09 270.058L224.274 278.41H222.275L227.071 270.421H222.542L222.775 268.961H229.258ZM235.456 276.95L235.222 278.41H228.947L229.148 277.093L232.555 273.88C232.754 273.686 232.966 273.469 233.191 273.231C233.42 272.994 233.621 272.74 233.794 272.472C233.972 272.2 234.082 271.914 234.125 271.616C234.156 271.386 234.145 271.172 234.093 270.973C234.041 270.77 233.942 270.603 233.794 270.473C233.647 270.344 233.444 270.277 233.184 270.272C232.873 270.264 232.609 270.339 232.393 270.499C232.176 270.655 232.006 270.861 231.88 271.116C231.759 271.367 231.679 271.631 231.64 271.908L229.829 271.921C229.868 271.306 230.05 270.765 230.374 270.298C230.703 269.827 231.123 269.461 231.633 269.201C232.148 268.938 232.709 268.812 233.314 268.825C233.851 268.834 234.331 268.94 234.755 269.143C235.179 269.342 235.506 269.636 235.735 270.026C235.964 270.411 236.055 270.887 236.007 271.453C235.973 271.843 235.871 272.206 235.702 272.544C235.538 272.881 235.33 273.199 235.079 273.498C234.833 273.796 234.569 274.079 234.288 274.348C234.006 274.612 233.734 274.867 233.47 275.113L231.569 276.937L235.456 276.95ZM242.439 268.857H242.744L242.594 270.357H242.51C242.03 270.348 241.588 270.417 241.186 270.564C240.784 270.711 240.425 270.923 240.109 271.2C239.797 271.473 239.54 271.802 239.337 272.187C239.138 272.567 239.003 272.991 238.934 273.459L238.72 275.036C238.698 275.23 238.69 275.444 238.694 275.678C238.703 275.912 238.74 276.134 238.804 276.346C238.869 276.554 238.975 276.727 239.122 276.866C239.274 277 239.482 277.069 239.745 277.073C239.988 277.082 240.202 277.034 240.388 276.931C240.578 276.822 240.738 276.68 240.868 276.502C241.002 276.321 241.106 276.121 241.18 275.905C241.257 275.689 241.309 275.475 241.335 275.263C241.357 275.077 241.355 274.884 241.329 274.685C241.307 274.486 241.257 274.3 241.18 274.127C241.102 273.954 240.989 273.813 240.842 273.705C240.695 273.597 240.507 273.541 240.278 273.536C240.001 273.532 239.748 273.593 239.518 273.718C239.289 273.844 239.096 274.015 238.941 274.231C238.785 274.443 238.677 274.681 238.616 274.945L238.104 274.581C238.151 274.222 238.255 273.891 238.415 273.588C238.575 273.281 238.778 273.015 239.025 272.79C239.276 272.561 239.562 272.386 239.882 272.265C240.202 272.139 240.548 272.081 240.92 272.089C241.353 272.098 241.718 272.195 242.017 272.381C242.315 272.567 242.555 272.814 242.737 273.121C242.919 273.424 243.042 273.761 243.107 274.134C243.176 274.501 243.196 274.873 243.165 275.25C243.126 275.708 243.012 276.139 242.821 276.541C242.631 276.944 242.38 277.296 242.069 277.599C241.762 277.902 241.405 278.138 240.998 278.306C240.596 278.475 240.159 278.555 239.687 278.546C239.168 278.533 238.722 278.421 238.35 278.209C237.982 277.993 237.684 277.707 237.455 277.352C237.225 276.993 237.065 276.595 236.974 276.158C236.888 275.717 236.871 275.263 236.922 274.795L237.013 274.069C237.113 273.346 237.307 272.671 237.597 272.044C237.887 271.412 238.264 270.858 238.727 270.383C239.189 269.907 239.732 269.535 240.355 269.266C240.978 268.998 241.673 268.862 242.439 268.857ZM246.462 272.875L247.358 272.888C247.648 272.879 247.909 272.823 248.143 272.719C248.381 272.611 248.573 272.453 248.721 272.245C248.868 272.037 248.958 271.786 248.993 271.492C249.023 271.254 249.002 271.047 248.928 270.869C248.859 270.688 248.744 270.545 248.584 270.441C248.424 270.337 248.223 270.283 247.981 270.279C247.743 270.274 247.526 270.32 247.332 270.415C247.141 270.506 246.981 270.636 246.852 270.804C246.722 270.973 246.635 271.172 246.592 271.401L244.762 271.414C244.796 270.856 244.974 270.383 245.294 269.993C245.618 269.604 246.023 269.31 246.508 269.111C246.992 268.912 247.496 268.814 248.02 268.819C248.556 268.827 249.045 268.933 249.486 269.137C249.928 269.336 250.274 269.632 250.525 270.026C250.776 270.415 250.882 270.897 250.843 271.473C250.821 271.871 250.711 272.221 250.512 272.524C250.313 272.823 250.057 273.071 249.746 273.27C249.439 273.469 249.103 273.621 248.74 273.725C248.381 273.824 248.022 273.874 247.663 273.874L246.306 273.867L246.462 272.875ZM246.241 274.296L246.397 273.329L247.559 273.335C247.927 273.344 248.279 273.396 248.617 273.491C248.958 273.586 249.259 273.729 249.519 273.919C249.783 274.105 249.986 274.348 250.129 274.646C250.272 274.945 250.332 275.299 250.31 275.71C250.28 276.178 250.159 276.591 249.947 276.95C249.739 277.309 249.467 277.608 249.129 277.846C248.796 278.084 248.422 278.261 248.007 278.378C247.596 278.495 247.174 278.551 246.741 278.546C246.33 278.538 245.949 278.471 245.599 278.345C245.253 278.215 244.95 278.034 244.69 277.8C244.431 277.567 244.232 277.283 244.093 276.95C243.955 276.617 243.888 276.238 243.892 275.814L245.703 275.821C245.703 276.063 245.748 276.277 245.839 276.463C245.93 276.649 246.062 276.796 246.235 276.905C246.412 277.013 246.627 277.069 246.877 277.073C247.159 277.078 247.416 277.024 247.65 276.911C247.883 276.799 248.074 276.638 248.221 276.431C248.372 276.219 248.465 275.972 248.5 275.691C248.539 275.397 248.515 275.15 248.428 274.951C248.346 274.748 248.21 274.592 248.02 274.484C247.829 274.371 247.591 274.311 247.306 274.302L246.241 274.296ZM253.607 274.095L252.121 273.725L253.387 268.961H258.559L258.319 270.473H254.678L254.048 272.583C254.256 272.457 254.479 272.364 254.717 272.303C254.959 272.243 255.197 272.213 255.431 272.213C255.881 272.213 256.266 272.299 256.586 272.472C256.91 272.641 257.172 272.87 257.371 273.16C257.57 273.45 257.709 273.783 257.786 274.159C257.869 274.532 257.892 274.923 257.858 275.334C257.819 275.801 257.706 276.234 257.52 276.632C257.334 277.026 257.086 277.367 256.774 277.657C256.467 277.947 256.11 278.17 255.703 278.326C255.297 278.482 254.855 278.555 254.379 278.546C253.977 278.538 253.605 278.466 253.263 278.332C252.921 278.198 252.623 278.01 252.368 277.768C252.112 277.521 251.913 277.231 251.771 276.898C251.628 276.561 251.556 276.189 251.556 275.782H253.354C253.367 276.015 253.412 276.23 253.49 276.424C253.568 276.615 253.685 276.768 253.841 276.885C254.001 277.002 254.211 277.065 254.47 277.073C254.73 277.078 254.953 277.028 255.139 276.924C255.325 276.82 255.48 276.677 255.606 276.496C255.731 276.314 255.829 276.113 255.898 275.892C255.967 275.672 256.013 275.451 256.034 275.23C256.056 275.023 256.052 274.821 256.021 274.627C255.995 274.428 255.939 274.25 255.853 274.095C255.766 273.939 255.643 273.816 255.483 273.725C255.323 273.634 255.124 273.586 254.886 273.582C254.635 273.578 254.401 273.619 254.185 273.705C253.973 273.792 253.78 273.922 253.607 274.095ZM265.048 276.95L264.815 278.41H258.539L258.74 277.093L262.147 273.88C262.346 273.686 262.558 273.469 262.783 273.231C263.013 272.994 263.214 272.74 263.387 272.472C263.564 272.2 263.675 271.914 263.718 271.616C263.748 271.386 263.737 271.172 263.685 270.973C263.634 270.77 263.534 270.603 263.387 270.473C263.24 270.344 263.037 270.277 262.777 270.272C262.465 270.264 262.202 270.339 261.985 270.499C261.769 270.655 261.598 270.861 261.473 271.116C261.351 271.367 261.271 271.631 261.232 271.908L259.422 271.921C259.461 271.306 259.642 270.765 259.967 270.298C260.296 269.827 260.715 269.461 261.226 269.201C261.741 268.938 262.301 268.812 262.907 268.825C263.443 268.834 263.923 268.94 264.347 269.143C264.771 269.342 265.098 269.636 265.327 270.026C265.557 270.411 265.648 270.887 265.6 271.453C265.565 271.843 265.464 272.206 265.295 272.544C265.13 272.881 264.923 273.199 264.672 273.498C264.425 273.796 264.161 274.079 263.88 274.348C263.599 274.612 263.326 274.867 263.062 275.113L261.161 276.937L265.048 276.95ZM273.647 268.961L273.478 270.058L268.663 278.41H266.664L271.46 270.421H266.93L267.164 268.961H273.647ZM279.286 268.942L277.69 278.41H275.866L277.132 271.135L274.835 271.843L275.101 270.298L279.053 268.942H279.286Z"
                  fill="black"
                />
                <rect
                  id="Rectangle 6680_2"
                  x="314.746"
                  y="258.762"
                  width="72.1493"
                  height="28.9547"
                  rx="14.4773"
                  fill="url(#paint8_linear_4588_26242)"
                />
                <g id="Group 1410135111_2">
                  <path
                    id="Copiar_2"
                    d="M347.821 274.2H349.485C349.451 274.745 349.301 275.229 349.034 275.652C348.771 276.075 348.402 276.405 347.927 276.642C347.456 276.879 346.889 276.998 346.225 276.998C345.706 276.998 345.24 276.909 344.829 276.731C344.417 276.549 344.065 276.29 343.772 275.952C343.483 275.615 343.262 275.207 343.11 274.728C342.958 274.25 342.882 273.714 342.882 273.121V272.559C342.882 271.966 342.96 271.43 343.115 270.952C343.275 270.469 343.501 270.06 343.794 269.722C344.091 269.385 344.445 269.125 344.857 268.943C345.268 268.762 345.728 268.671 346.236 268.671C346.911 268.671 347.48 268.793 347.944 269.038C348.411 269.283 348.773 269.62 349.028 270.05C349.288 270.481 349.444 270.97 349.496 271.519H347.827C347.808 271.193 347.743 270.916 347.632 270.69C347.521 270.46 347.352 270.288 347.126 270.173C346.904 270.054 346.607 269.995 346.236 269.995C345.958 269.995 345.715 270.047 345.507 270.151C345.3 270.254 345.125 270.412 344.984 270.623C344.844 270.835 344.738 271.102 344.667 271.424C344.601 271.743 344.567 272.118 344.567 272.548V273.121C344.567 273.54 344.599 273.909 344.662 274.228C344.725 274.543 344.821 274.81 344.951 275.029C345.085 275.244 345.255 275.407 345.463 275.518C345.674 275.626 345.928 275.68 346.225 275.68C346.573 275.68 346.861 275.624 347.087 275.513C347.313 275.402 347.486 275.237 347.604 275.018C347.727 274.799 347.799 274.526 347.821 274.2ZM350.224 273.939V273.822C350.224 273.38 350.287 272.974 350.413 272.604C350.54 272.229 350.723 271.905 350.964 271.63C351.205 271.356 351.502 271.143 351.854 270.99C352.206 270.835 352.611 270.757 353.067 270.757C353.523 270.757 353.929 270.835 354.285 270.99C354.641 271.143 354.939 271.356 355.181 271.63C355.425 271.905 355.611 272.229 355.737 272.604C355.863 272.974 355.926 273.38 355.926 273.822V273.939C355.926 274.376 355.863 274.782 355.737 275.157C355.611 275.528 355.425 275.852 355.181 276.13C354.939 276.405 354.643 276.618 354.291 276.77C353.938 276.922 353.534 276.998 353.078 276.998C352.622 276.998 352.216 276.922 351.86 276.77C351.507 276.618 351.209 276.405 350.964 276.13C350.723 275.852 350.54 275.528 350.413 275.157C350.287 274.782 350.224 274.376 350.224 273.939ZM351.826 273.822V273.939C351.826 274.191 351.849 274.426 351.893 274.645C351.938 274.864 352.008 275.057 352.104 275.224C352.205 275.387 352.334 275.515 352.494 275.607C352.653 275.7 352.848 275.746 353.078 275.746C353.3 275.746 353.491 275.7 353.651 275.607C353.81 275.515 353.938 275.387 354.035 275.224C354.131 275.057 354.202 274.864 354.246 274.645C354.294 274.426 354.318 274.191 354.318 273.939V273.822C354.318 273.577 354.294 273.347 354.246 273.132C354.202 272.913 354.129 272.72 354.029 272.554C353.933 272.383 353.805 272.249 353.645 272.153C353.486 272.057 353.293 272.008 353.067 272.008C352.841 272.008 352.648 272.057 352.488 272.153C352.333 272.249 352.205 272.383 352.104 272.554C352.008 272.72 351.938 272.913 351.893 273.132C351.849 273.347 351.826 273.577 351.826 273.822ZM358.512 272.025V279.201H356.91V270.868H358.396L358.512 272.025ZM362.323 273.811V273.927C362.323 274.365 362.271 274.771 362.167 275.146C362.067 275.52 361.919 275.847 361.722 276.125C361.525 276.399 361.281 276.614 360.988 276.77C360.699 276.922 360.365 276.998 359.987 276.998C359.619 276.998 359.3 276.924 359.03 276.775C358.759 276.627 358.531 276.419 358.346 276.152C358.164 275.882 358.017 275.568 357.906 275.212C357.795 274.856 357.71 274.474 357.65 274.067V273.761C357.71 273.323 357.795 272.923 357.906 272.559C358.017 272.192 358.164 271.875 358.346 271.608C358.531 271.337 358.757 271.128 359.024 270.979C359.295 270.831 359.612 270.757 359.975 270.757C360.357 270.757 360.693 270.829 360.982 270.974C361.275 271.118 361.52 271.326 361.716 271.597C361.917 271.867 362.067 272.19 362.167 272.565C362.271 272.939 362.323 273.355 362.323 273.811ZM360.715 273.927V273.811C360.715 273.555 360.693 273.319 360.648 273.104C360.608 272.885 360.541 272.694 360.448 272.531C360.359 272.368 360.241 272.242 360.092 272.153C359.948 272.06 359.771 272.014 359.564 272.014C359.345 272.014 359.158 272.049 359.002 272.12C358.85 272.19 358.726 272.292 358.629 272.426C358.533 272.559 358.461 272.719 358.412 272.904C358.364 273.089 358.334 273.299 358.323 273.533V274.306C358.342 274.58 358.394 274.827 358.479 275.046C358.564 275.261 358.696 275.431 358.874 275.557C359.052 275.683 359.286 275.746 359.575 275.746C359.786 275.746 359.964 275.7 360.109 275.607C360.254 275.511 360.37 275.379 360.459 275.212C360.552 275.046 360.617 274.853 360.654 274.634C360.695 274.415 360.715 274.18 360.715 273.927ZM365.009 270.868V276.887H363.402V270.868H365.009ZM363.302 269.299C363.302 269.066 363.383 268.873 363.547 268.721C363.71 268.569 363.928 268.493 364.203 268.493C364.474 268.493 364.691 268.569 364.854 268.721C365.021 268.873 365.104 269.066 365.104 269.299C365.104 269.533 365.021 269.726 364.854 269.878C364.691 270.03 364.474 270.106 364.203 270.106C363.928 270.106 363.71 270.03 363.547 269.878C363.383 269.726 363.302 269.533 363.302 269.299ZM369.582 275.529V272.848C369.582 272.656 369.55 272.49 369.487 272.353C369.424 272.212 369.326 272.103 369.192 272.025C369.063 271.947 368.894 271.908 368.686 271.908C368.508 271.908 368.354 271.94 368.225 272.003C368.095 272.062 367.995 272.149 367.924 272.264C367.854 272.376 367.819 272.507 367.819 272.659H366.217C366.217 272.403 366.276 272.16 366.395 271.931C366.513 271.701 366.686 271.499 366.912 271.324C367.138 271.146 367.407 271.007 367.718 270.907C368.034 270.807 368.386 270.757 368.775 270.757C369.243 270.757 369.658 270.835 370.021 270.99C370.385 271.146 370.67 271.38 370.878 271.691C371.089 272.003 371.195 272.392 371.195 272.859V275.435C371.195 275.765 371.215 276.036 371.256 276.247C371.297 276.455 371.356 276.636 371.434 276.792V276.887H369.815C369.738 276.724 369.678 276.52 369.637 276.275C369.6 276.026 369.582 275.778 369.582 275.529ZM369.793 273.221L369.804 274.128H368.909C368.697 274.128 368.514 274.152 368.358 274.2C368.202 274.248 368.074 274.317 367.974 274.406C367.874 274.491 367.8 274.591 367.752 274.706C367.707 274.821 367.685 274.947 367.685 275.084C367.685 275.222 367.717 275.346 367.78 275.457C367.843 275.565 367.933 275.65 368.052 275.713C368.171 275.772 368.31 275.802 368.469 275.802C368.71 275.802 368.92 275.754 369.098 275.657C369.276 275.561 369.413 275.442 369.51 275.301C369.61 275.16 369.662 275.027 369.665 274.901L370.088 275.58C370.029 275.732 369.947 275.889 369.843 276.052C369.743 276.216 369.615 276.369 369.459 276.514C369.304 276.655 369.116 276.772 368.898 276.864C368.679 276.953 368.419 276.998 368.119 276.998C367.737 276.998 367.39 276.922 367.079 276.77C366.771 276.614 366.526 276.401 366.344 276.13C366.166 275.856 366.077 275.544 366.077 275.196C366.077 274.881 366.137 274.601 366.255 274.356C366.374 274.111 366.548 273.905 366.778 273.738C367.012 273.568 367.303 273.44 367.652 273.355C368 273.266 368.404 273.221 368.864 273.221H369.793ZM374.032 272.181V276.887H372.43V270.868H373.937L374.032 272.181ZM375.845 270.829L375.817 272.314C375.74 272.303 375.645 272.294 375.534 272.287C375.426 272.275 375.328 272.27 375.239 272.27C375.013 272.27 374.816 272.3 374.649 272.359C374.486 272.414 374.349 272.498 374.238 272.609C374.13 272.72 374.049 272.856 373.993 273.015C373.941 273.175 373.911 273.356 373.904 273.56L373.581 273.46C373.581 273.071 373.62 272.713 373.698 272.387C373.776 272.057 373.889 271.769 374.037 271.524C374.189 271.28 374.375 271.091 374.594 270.957C374.812 270.824 375.063 270.757 375.345 270.757C375.434 270.757 375.524 270.764 375.617 270.779C375.71 270.79 375.786 270.807 375.845 270.829Z"
                    fill="#172E22"
                  />
                  <g id="Frame_2">
                    <path
                      id="Vector_2"
                      d="M339.219 268.063C339.116 267.976 338.994 267.907 338.859 267.86C338.724 267.813 338.58 267.789 338.434 267.789H331.951C331.804 267.788 331.659 267.812 331.523 267.859C331.388 267.906 331.265 267.975 331.161 268.062C331.057 268.149 330.975 268.252 330.919 268.366C330.863 268.48 330.834 268.602 330.834 268.726V269.631H328.872C328.578 269.631 328.295 269.73 328.087 269.905C327.879 270.08 327.762 270.318 327.762 270.565V278.236C327.762 278.484 327.879 278.722 328.088 278.897C328.191 278.984 328.314 279.052 328.449 279.099C328.584 279.146 328.729 279.17 328.875 279.17H335.936C336.234 279.173 336.521 279.077 336.733 278.901C336.838 278.814 336.921 278.711 336.978 278.596C337.035 278.482 337.064 278.359 337.064 278.236V276.562H338.42C338.566 276.563 338.712 276.54 338.848 276.494C338.984 276.448 339.108 276.38 339.212 276.294C339.317 276.207 339.4 276.105 339.457 275.991C339.514 275.877 339.544 275.755 339.545 275.632V268.723C339.545 268.475 339.428 268.238 339.219 268.063ZM335.091 274.546C335.091 274.783 334.95 274.902 334.668 274.902H332.836V276.443C332.836 276.68 332.695 276.799 332.413 276.799H332.131C331.849 276.799 331.708 276.68 331.708 276.443V274.902H329.876C329.594 274.902 329.453 274.783 329.453 274.546V274.309C329.453 274.072 329.594 273.954 329.876 273.954H331.708V272.412C331.708 272.175 331.849 272.057 332.131 272.057H332.413C332.695 272.057 332.836 272.175 332.836 272.412V273.954H334.668C334.95 273.954 335.091 274.072 335.091 274.309V274.546ZM338.474 275.398C338.473 275.536 338.354 275.654 338.192 275.677H337.064V270.565C337.064 270.315 336.945 270.075 336.733 269.9C336.628 269.813 336.503 269.744 336.367 269.698C336.23 269.652 336.084 269.629 335.936 269.631H331.886V269.048C331.886 268.839 332.088 268.669 332.337 268.669H338.022C338.271 268.669 338.473 268.839 338.473 269.048V275.398H338.474Z"
                      fill="#172E22"
                    />
                  </g>
                </g>
              </g>
              <g id="Group 1410134628">
                <path
                  id="Rectangle 628"
                  d="M61.8574 100.773H407.854V59.0028H61.8574V100.773Z"
                  fill="#EBF2E3"
                />
                <path
                  id="Rectangle 454"
                  d="M61.8574 100.773H407.854V59.0028H61.8574V100.773Z"
                  fill="#EBF2E3"
                />
                <g id="iPhone X (or newer)" clipPath="url(#clip1_4588_26242)">
                  <rect
                    width="345.996"
                    height="41.7707"
                    transform="translate(61.8574 58.9961)"
                    fill="#EBF2E3"
                  />
                  <g id="Notch">
                    <rect
                      id="BG"
                      x="61.8574"
                      y="58.9961"
                      width={346}
                      height={42}
                      fill="#EBF2E3"
                    />
                    <path
                      id="Exclude"
                      d="M407.857 100.996H61.8574V58.9961H407.857V100.996Z"
                      fill="#EBF2E3"
                    />
                  </g>
                  <g id="Right Side">
                    <g id="Battery">
                      <path
                        id="Rectangle"
                        opacity="0.35"
                        d="M373.363 75.9277H389.186C390.321 75.9277 391.243 76.8485 391.243 77.9844V83.6807C391.243 84.8167 390.322 85.7373 389.186 85.7373H373.363C372.227 85.7371 371.307 84.8165 371.307 83.6807V77.9844C371.307 76.8486 372.228 75.9279 373.363 75.9277Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="0.949333"
                      />
                      <path
                        id="Combined Shape"
                        opacity="0.4"
                        d="M392.666 78.9336V82.7309C393.43 82.4093 393.927 81.6612 393.927 80.8323C393.927 80.0034 393.43 79.2552 392.666 78.9336"
                        fill="black"
                      />
                      <path
                        id="Rectangle_2"
                        d="M372.73 78.6173C372.73 77.9183 373.297 77.3516 373.996 77.3516H388.553C389.252 77.3516 389.818 77.9183 389.818 78.6173V83.0476C389.818 83.7466 389.252 84.3133 388.553 84.3133H373.996C373.297 84.3133 372.73 83.7466 372.73 83.0476V78.6173Z"
                        fill="black"
                      />
                    </g>
                    <path
                      id="Wifi"
                      d="M356.708 83.424C357.919 82.3999 359.692 82.4 360.903 83.424C360.964 83.479 361 83.5568 361.002 83.6389C361.004 83.721 360.971 83.8001 360.912 83.8576L359.017 85.7717C358.961 85.8279 358.885 85.8596 358.806 85.8596C358.727 85.8595 358.651 85.8277 358.596 85.7717L356.699 83.8576C356.641 83.8 356.609 83.7209 356.61 83.6389C356.612 83.5568 356.647 83.479 356.708 83.424ZM354.178 80.8713C356.787 78.4444 360.828 78.4444 363.437 80.8713C363.495 80.9281 363.528 81.0063 363.529 81.0881C363.53 81.1699 363.498 81.2487 363.44 81.3068L362.345 82.4142C362.232 82.5273 362.049 82.5302 361.933 82.4201C361.076 81.6444 359.961 81.215 358.806 81.215C357.651 81.2156 356.537 81.6449 355.681 82.4201C355.565 82.53 355.382 82.5273 355.27 82.4142L354.174 81.3068C354.116 81.2488 354.084 81.1699 354.085 81.0881C354.086 81.0063 354.119 80.9281 354.178 80.8713ZM351.647 78.3254C355.649 74.4905 361.962 74.4905 365.964 78.3254C366.022 78.3823 366.054 78.4601 366.055 78.5412C366.055 78.6224 366.023 78.7004 365.966 78.758L364.869 79.8664C364.756 79.98 364.572 79.9812 364.457 79.8693C362.932 78.4199 360.909 77.6116 358.806 77.6115C356.702 77.6116 354.679 78.4199 353.154 79.8693C353.04 79.9814 352.855 79.9802 352.742 79.8664L351.645 78.758C351.588 78.7003 351.556 78.6223 351.557 78.5412C351.557 78.46 351.59 78.3823 351.647 78.3254Z"
                      fill="black"
                    />
                    <path
                      id="Mobile Signal"
                      d="M332.543 82.0986C333.067 82.0986 333.492 82.5235 333.492 83.0479V84.9463C333.492 85.4706 333.067 85.8955 332.543 85.8955H331.594C331.069 85.8955 330.645 85.4706 330.645 84.9463V83.0479C330.645 82.5236 331.069 82.0986 331.594 82.0986H332.543ZM336.974 80.2002C337.498 80.2004 337.923 80.6252 337.923 81.1494V84.9463C337.923 85.4705 337.498 85.8953 336.974 85.8955H336.024C335.5 85.8955 335.074 85.4706 335.074 84.9463V81.1494C335.074 80.6251 335.5 80.2002 336.024 80.2002H336.974ZM341.403 77.9844C341.927 77.9844 342.352 78.4095 342.353 78.9336V84.9463C342.353 85.4706 341.928 85.8955 341.403 85.8955H340.454C339.93 85.8955 339.505 85.4706 339.505 84.9463V78.9336C339.505 78.4095 339.93 77.9844 340.454 77.9844H341.403ZM345.834 75.7695C346.358 75.7697 346.783 76.1946 346.783 76.7188V84.9463C346.783 85.4705 346.358 85.8954 345.834 85.8955H344.885C344.36 85.8955 343.936 85.4706 343.936 84.9463V76.7188C343.936 76.1945 344.361 75.7695 344.885 75.7695H345.834Z"
                      fill="black"
                    />
                  </g>
                  <g id="Left Side">
                    <g id="Time">
                      <g id="9:41">
                        <path
                          d="M97.2865 85.82C99.8383 85.82 101.354 83.8245 101.354 80.4452C101.354 79.1728 101.111 78.102 100.645 77.2746C99.9704 75.9883 98.8092 75.293 97.3421 75.293C95.1588 75.293 93.6152 76.7601 93.6152 78.8182C93.6152 80.7512 95.0059 82.1557 96.918 82.1557C98.093 82.1557 99.0456 81.6064 99.5184 80.6538H99.5393C99.5393 80.6538 99.5671 80.6538 99.5741 80.6538C99.588 80.6538 99.6366 80.6538 99.6366 80.6538C99.6366 82.9484 98.7675 84.3181 97.3004 84.3181C96.4382 84.3181 95.7707 83.8453 95.5413 83.0874H93.7543C94.0533 84.7353 95.4509 85.82 97.2865 85.82ZM97.3491 80.7303C96.1948 80.7303 95.3744 79.9098 95.3744 78.7626C95.3744 77.6431 96.2366 76.7879 97.356 76.7879C98.4755 76.7879 99.3377 77.657 99.3377 78.7904C99.3377 79.9098 98.4963 80.7303 97.3491 80.7303Z"
                          fill="black"
                        />
                        <path
                          d="M104.289 85.7227C104.949 85.7227 105.401 85.2498 105.401 84.6241C105.401 83.9913 104.949 83.5255 104.289 83.5255C103.635 83.5255 103.176 83.9913 103.176 84.6241C103.176 85.2498 103.635 85.7227 104.289 85.7227ZM104.289 80.5078C104.949 80.5078 105.401 80.042 105.401 79.4162C105.401 78.7834 104.949 78.3176 104.289 78.3176C103.635 78.3176 103.176 78.7834 103.176 79.4162C103.176 80.042 103.635 80.5078 104.289 80.5078Z"
                          fill="black"
                        />
                        <path
                          d="M111.909 85.5766H113.627V83.7063H114.983V82.1905H113.627V75.5433H111.096C109.323 78.2133 107.911 80.4452 107.008 82.107V83.7063H111.909V85.5766ZM108.669 82.1279C109.837 80.0698 110.88 78.4219 111.84 77.0034H111.937V82.2322H108.669V82.1279Z"
                          fill="black"
                        />
                        <path
                          d="M118.807 85.5766H120.601V75.5433H118.814L116.193 77.3789V79.1033L118.689 77.3511H118.807V85.5766Z"
                          fill="black"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath
          id="bgblur_0_4588_26242_clip_path"
          transform="translate(54 42)"
        >
          <rect x={-13} y={-1} width={1024} height={296} rx={40} />
        </clipPath>
        <filter
          id="filter1_d_4588_26242"
          x={427}
          y={22}
          width="552.953"
          height="391.656"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4588_26242"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4588_26242"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_4588_26242"
          x={442}
          y={62}
          width={524}
          height={335}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4588_26242"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4588_26242"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4588_26242"
          x1="703.476"
          y1={42}
          x2="703.476"
          y2="393.655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4588_26242"
          x1="468.797"
          y1="59.4375"
          x2="468.797"
          y2="68.1562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4588_26242"
          x1="468.797"
          y1="59.4375"
          x2="468.797"
          y2="68.1562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4588_26242"
          x1="486.23"
          y1="59.4375"
          x2="486.23"
          y2="68.1562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_4588_26242"
          x1="486.23"
          y1="59.4375"
          x2="486.23"
          y2="68.1562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_4588_26242"
          x1="503.676"
          y1="59.4375"
          x2="503.676"
          y2="68.1562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_4588_26242"
          x1="503.676"
          y1="59.4375"
          x2="503.676"
          y2="68.1562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_4588_26242"
          x1="350.821"
          y1="151.492"
          x2="350.821"
          y2="180.447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_4588_26242"
          x1="350.821"
          y1="258.762"
          x2="350.821"
          y2="287.716"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <clipPath id="clip1_4588_26242">
          <rect
            width="345.996"
            height="41.7707"
            fill="white"
            transform="translate(61.8574 58.9961)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
