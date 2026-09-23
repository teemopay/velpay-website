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
    <Image
      className="relative mt-[26px] w-full h-auto"
      alt="icon"
      width={1000}
      height={279}
      src={`/images/int/7.png`}
    />
  );
};
