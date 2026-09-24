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
import InextImage from "next/image";

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
      t: "Real-Time Payment Visibility",
      c: "including transaction status tracking, payment monitoring, and operational insights",
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
    <InextImage
      className="w-full h-auto"
      alt="aml"
      height={730}
      src="/images/int/8.png"
      width={1536}
    ></InextImage>
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
