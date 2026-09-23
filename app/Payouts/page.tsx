"use client";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { BgText } from "@/components/Text";
import { BtnLink } from "@/components/BtnLink";
import { PageContanier } from "@/components/PageWrap";
import Marquee from "@/components/ui/marquee";
import { FadeIn, FadeUPText } from "@/components/Animateitem";
import InextImage from "next/image";
import ParticleNetwork from "@/components/Three/ParticleNetwork";
const hoverStyle =
  "group shadow transition-all duration-700 ease-out   hover:shadow-md hover:shadow-[#DEFE66] cursor-pointer";

const FirstSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <InextImage
        className="block h-[300px] w-full object-cover object-center sm:h-auto"
        alt="Global payout management platform"
        src="/images/payout/bg-5.png"
        width={2074}
        height={887}
        priority
      />
      <PageContanier
        pclassName="absolute inset-0 z-10"
        className="flex h-full items-center"
      >
        <div className="max-w-[780px]">
          <FadeUPText className="mb-[22px] text-[32px] font-semibold leading-[37px]  lg:mb-[33px] md:text-[48px] md:leading-[68px]  md:max-w-[400px]">
            Speedy and cost-effective global payouts
          </FadeUPText>
          <FadeUPText
            delay={0.1}
            className="max-w-[420px] md:text-[16px] md:leading-[24px]"
          >
            Send payouts to the local accounts of your customers and partners
            quickly
          </FadeUPText>
        </div>
      </PageContanier>
    </section>
  );
};
export default function PayputsPage() {
  const scalePath: Variants = {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { duration: 2, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <div>
      <FirstSection />
      <BgText
        titleClass="max-w-[904px]"
        subClass="max-w-[972px]"
        title="Make cross-border payments as efficient and seamless as domestic transfers"
        sub="Leveraging our global payment network and advanced technology, we provide fast and reliable batch payout solutions to help businesses streamline cross-border payments across supported markets."
      />
      <PageContanier pclassName="pt-[48px] md:pt-[168px]">
        <section className="mb-[105px] md:mb-[207px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] mb-[56px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scalePath}
            >
              <InextImage
                className="mb-[30px] md:mb-0"
                alt="picture"
                src="/images/payout/1.png"
                width="712"
                height="380"
              />
            </motion.div>

            <div className="flex-1 md:max-w-[495px] 2xl:max-w-[600px] flex justify-center flex-col">
              <CardTitle title="A truly global network for faster delivery" />
              <CardSub title="By supporting 130+ currencies, 180+ countries and regions, both SWIFT and multiple local clearing networks, our payout services facilitate the rapid global distribution of your funds, including to China." />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-x-[48px] mb-[78px]">
            <div className="md:hidden mb-[30px]">
              <GifMethods idPrefix="mobile" />
            </div>
            <div className="flex-1 md:max-w-[490px] 2xl:max-w-[600px]  flex justify-center flex-col">
              <CardTitle title="Flexible Payout Methods" />
              <CardSub title="Adapt to the needs of your global recipients with versatile payout methods and time-scales to move at the pace of modern business." />
            </div>
            <div className="hidden md:block">
              <GifMethods idPrefix="desktop" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] mb-[78px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scalePath}
            >
              <InextImage
                className="mb-[30px] md:mb-0"
                alt="picture"
                src="/images/payout/3.png"
                width="720"
                height="1374"
              />
            </motion.div>

            <div className="flex-1 md:max-w-[538px] 2xl:max-w-[600px]  flex justify-center flex-col">
              <CardTitle title="Transparent and competitive fees" />
              <CardSub title="We provide clear and transparent fee structures designed to help businesses manage payment costs more efficiently." />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px]">
            <motion.div
              className="md:hidden mb-[30px] "
              initial="hidden"
              whileInView="visible"
              variants={scalePath}
            >
              <InextImage
                alt="picture"
                src="/images/payout/4.png"
                width="720"
                height="1374"
              />
            </motion.div>

            <div className="mb-[30px] md:mb-0 flex-1 md:max-w-[538px] 2xl:max-w-[600px]  flex justify-center flex-col">
              <CardTitle title="Efficient Payout Automation" />
              <CardSub title="Eliminate manual tasks and reallocate resources with end-to-end automation and granular controls." />
            </div>
            <motion.div
              className="hidden md:block "
              initial="hidden"
              whileInView="visible"
              variants={scalePath}
            >
              <InextImage
                alt="picture"
                src="/images/payout/4.png"
                width="720"
                height="1374"
              />
            </motion.div>
          </div>
        </section>
        <section className="relative mb-[107px] md:mb-[218px]">
          <ParticleNetwork />
          <div className="relative z-10">
            <TitleItem />
            <div
              className={cn(
                hoverStyle,
                "lg:flex bg-[#22251C] justify-between 2xl:justify-start px-[12px] py-[26px] md:p-[41px] rounded-[16px] mb-[27px]",
              )}
            >
              <div className="flex-1 2xl:max-w-[50%] mb-[22px] lg:mb-0">
                <MediumFiftyTitle
                  title="PAYMENT OPERATIONS SUPPORT"
                  sub="24/7 Manual Service & Dedicated Support"
                  tip="Our professional team provides round-the-clock assistance for payment operations. Beyond technical support, we offer personalized guidance to help ensure seamless and reliable payment experiences – wherever you are, whenever needed."
                />
              </div>
              <div className="overflow-hidden flex-1">
                <div className="relative w-[332px] h-[250px] mx-auto overflow-hidden">
                  <Marquee pauseOnHover vertical></Marquee>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[40px] bg-gradient-to-b from-[#1C2025] to-[#1C202500]"></div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-[-10px] h-[40px] bg-gradient-to-t from-[#1C2025] to-[#1C202500]"></div>
                </div>
              </div>
            </div>
            <ThreeItem />
          </div>
        </section>
        <BtnLink />
      </PageContanier>
    </div>
  );
}

const CardTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const textY: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textY}
      className={cn(
        "text-[20px] leading-[24px] text-center md:text-left md:text-[28px] md:leading-[30px]  lg:text-[35px] lg:leading-[58px] mb-[17px] md:tracking-[-2px] font-medium",
        className,
      )}
    >
      {title}
    </motion.div>
  );
};
const CardSub = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const textY: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textY}
      className={cn(
        "text-center md:text-left text-[12px] leading-[14px] lg:text-[16px] lg:leading-[24px] text-[#D1D1D1]",
        className,
      )}
    >
      {title}
    </motion.div>
  );
};

const GifMethods = ({ idPrefix }: { idPrefix: string }) => {
  const gradientId = (index: number) =>
    `${idPrefix}-gif-methods-gradient-${index}`;

  return (
    <svg
      className="max-[361px]  2xl:max-w-[494px] 2xl:max-h-[494px] mx-auto"
      viewBox="0 0 361 361"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135557">
        <g className="animateRotate" id="Group 1410135447">
          <g id="Group 1410135446">
            <g id="Group 1410135456">
              <circle
                id="Ellipse 222"
                cx="180.253"
                cy="180.527"
                r="129.429"
                fill="#22251C"
                stroke={`url(#${gradientId(0)})`}
              />
              <g id="Group 816">
                <circle
                  id="Ellipse 223"
                  cx="180.208"
                  cy="42.0912"
                  r="27.7084"
                  fill={`url(#${gradientId(1)})`}
                  stroke={`url(#${gradientId(2)})`}
                />
                <g id="Frame">
                  <path
                    id="Vector"
                    d="M171.873 45.0826C173.054 45.0826 174.01 44.1258 174.01 42.9456C174.01 41.7654 173.054 40.8086 171.873 40.8086C170.693 40.8086 169.736 41.7654 169.736 42.9456C169.736 44.1258 170.693 45.0826 171.873 45.0826Z"
                    fill="#1A1A18"
                    stroke="#1A1A18"
                    strokeWidth={2}
                  />
                  <g id="Vector_2">
                    <path d="M174.011 42.9453H184.696Z" fill="#1A1A18" />
                    <path
                      d="M174.011 42.9453H184.696"
                      stroke="#1A1A18"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <path
                    id="Vector_3"
                    d="M186.832 37.606C188.013 37.606 188.969 36.6493 188.969 35.469C188.969 34.2888 188.013 33.332 186.832 33.332C185.652 33.332 184.695 34.2888 184.695 35.469C184.695 36.6493 185.652 37.606 186.832 37.606Z"
                    fill="#1A1A18"
                    stroke="#1A1A18"
                    strokeWidth={2}
                  />
                  <path
                    id="Vector_4"
                    d="M186.832 45.0826C188.013 45.0826 188.969 44.1258 188.969 42.9456C188.969 41.7654 188.013 40.8086 186.832 40.8086C185.652 40.8086 184.695 41.7654 184.695 42.9456C184.695 44.1258 185.652 45.0826 186.832 45.0826Z"
                    fill="#1A1A18"
                    stroke="#1A1A18"
                    strokeWidth={2}
                  />
                  <path
                    id="Vector_5"
                    d="M186.832 52.5631C188.013 52.5631 188.969 51.6063 188.969 50.4261C188.969 49.2458 188.013 48.2891 186.832 48.2891C185.652 48.2891 184.695 49.2458 184.695 50.4261C184.695 51.6063 185.652 52.5631 186.832 52.5631Z"
                    fill="#1A1A18"
                    stroke="#1A1A18"
                    strokeWidth={2}
                  />
                  <path
                    id="Vector_6"
                    d="M184.696 50.4277H178.285V35.4688H184.696"
                    stroke="#1A1A18"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <g id="Group 817">
                <circle
                  id="Ellipse 224"
                  cx="315.402"
                  cy="146.591"
                  r="27.7084"
                  fill={`url(#${gradientId(3)})`}
                  stroke={`url(#${gradientId(4)})`}
                />
                <path
                  id="Vector_7"
                  d="M314.598 133.77C307.96 133.77 302.579 139.319 302.579 146.164C302.579 153.009 307.96 158.559 314.598 158.559C321.236 158.559 326.617 153.009 326.617 146.164C326.617 139.319 321.236 133.77 314.598 133.77V133.77ZM324.94 146.164C324.94 147.447 324.72 148.678 324.317 149.817C322.158 147.862 320.316 147.206 318.773 148.04C318.021 148.447 317.52 148.933 317.242 149.519C317.012 150.004 316.963 150.384 316.982 151.029L316.992 151.35L316.993 151.528L316.988 151.627L316.976 151.693L316.97 151.714C316.924 151.84 316.872 151.919 316.735 152.054L316.436 152.341L316.307 152.474C315.94 152.87 315.673 153.329 315.474 153.974C315.192 154.888 315.349 155.818 315.897 156.745C315.472 156.801 315.038 156.829 314.598 156.829C310.741 156.829 307.378 154.652 305.6 151.425C306.701 151.643 307.604 151.465 308.278 150.83C308.706 150.427 308.894 150.014 309.012 149.268L309.033 149.124L309.066 148.86L309.097 148.57L309.152 147.961L309.177 147.716L309.205 147.498L309.235 147.305C309.32 146.825 309.434 146.601 309.607 146.504C309.635 146.49 309.667 146.485 309.698 146.491L309.742 146.498L309.801 146.516L309.872 146.542L309.956 146.581L310.054 146.629L310.166 146.691L310.294 146.766L310.52 146.904L310.789 147.075L311.105 147.282L311.428 147.493C312.305 148.052 312.884 148.304 313.593 148.341C314.077 148.369 314.558 148.253 314.979 148.008C316.182 147.315 316.401 146.342 316.214 144.618L316.133 143.904L316.112 143.683L316.105 143.582L316.096 143.4C316.08 142.946 316.14 142.743 316.281 142.615C316.419 142.492 316.568 142.408 316.744 142.349L316.854 142.317L316.955 142.294L317.061 142.274L317.181 142.258L317.325 142.243L317.734 142.211C319.069 142.092 319.74 141.656 319.955 140.236C320.137 139.03 319.805 138.379 318.988 137.843L318.892 137.782L318.798 137.724L318.616 137.607C318.381 137.445 318.277 137.301 318.212 136.994L318.195 136.906L318.168 136.75L318.123 136.458L318.078 136.118C322.078 137.592 324.94 141.533 324.94 146.164Z"
                  fill="#1A1A18"
                />
              </g>
              <g id="Group 734">
                <circle
                  id="Ellipse 225"
                  cx="47.2084"
                  cy="145.13"
                  r="27.7084"
                  fill={`url(#${gradientId(5)})`}
                  stroke={`url(#${gradientId(6)})`}
                />
                <path
                  id="Vector_8"
                  d="M58.8549 141.157L57.239 142.832C56.3523 143.668 55.7777 145.291 56.1979 146.816C56.1979 146.816 57.6561 152.132 57.8137 152.821C58.0207 153.46 57.8137 154.348 57.239 154.887C56.7694 155.331 56.1979 155.527 55.6232 155.527C55.1042 155.527 54.5295 155.331 54.1124 154.988L50.8283 151.887C50.3586 151.443 49.7871 151.247 49.2124 151.247C48.6378 151.247 48.0137 151.443 47.5966 151.887C47.5966 151.887 45.9808 153.366 45.9808 153.415C45.0941 154.299 43.8428 154.743 42.6441 154.743C41.6554 154.743 40.6112 154.397 39.8851 153.709L34.775 148.883C34.256 148.39 34.256 147.655 34.775 147.162C34.982 146.917 35.3497 146.816 35.6617 146.816H35.8687C35.8687 146.816 37.7472 147.113 38.8378 147.26C39.0479 147.26 39.2023 147.309 39.363 147.309C39.5175 147.309 39.675 147.26 39.7801 147.162L52.4966 135.152C53.3308 134.415 54.4245 134.02 55.5182 134.02C56.6644 134.02 57.8106 134.411 58.6973 135.25C60.4213 136.876 60.4707 139.482 58.8549 141.157ZM45.8263 138.548L45.7769 138.597L41.813 142.486C41.7079 142.633 41.5009 142.731 41.2939 142.731C41.0869 142.731 40.9294 142.63 40.7749 142.486L37.8553 139.73C37.0736 138.894 37.1231 137.565 37.9603 136.778C38.3774 136.386 39.0015 136.191 39.5762 136.191C39.7832 136.191 39.9933 136.191 40.1477 136.236C40.7224 136.338 44.056 137.17 45.4648 137.519C45.78 137.617 45.99 137.862 45.99 138.159C45.9839 138.303 45.9282 138.45 45.8263 138.548Z"
                  fill="#1A1A18"
                />
              </g>
              <g id="Group 733">
                <g id="Ellipse 227">
                  <circle
                    cx="98.9349"
                    cy="292.021"
                    r="28.2084"
                    fill={`url(#${gradientId(7)})`}
                  />
                  <circle
                    cx="98.9349"
                    cy="292.021"
                    r="27.7084"
                    stroke="#027D45"
                    strokeOpacity="0.4"
                  />
                </g>
                <path
                  id="Vector_9"
                  d="M98.935 280.055C105.544 280.055 110.902 285.413 110.902 292.022C110.902 298.631 105.544 303.989 98.935 303.989C92.3258 303.989 86.9678 298.631 86.9678 292.022C86.9678 285.413 92.3258 280.055 98.935 280.055ZM104.954 288.993C104.785 288.825 104.557 288.731 104.319 288.731C104.081 288.731 103.853 288.826 103.685 288.995L99.8531 292.837L97.559 290.338C97.4762 290.248 97.3758 290.175 97.264 290.125C97.1522 290.075 97.0313 290.049 96.9088 290.047C96.7863 290.046 96.6648 290.069 96.5518 290.116C96.4388 290.164 96.3366 290.233 96.2516 290.322L92.9038 293.792C92.7385 293.963 92.6481 294.193 92.6523 294.431C92.6566 294.669 92.7552 294.896 92.9265 295.061C93.0978 295.227 93.3278 295.317 93.5658 295.313C93.8038 295.308 94.0304 295.21 94.1957 295.039L96.8814 292.254L99.165 294.742C99.247 294.832 99.3462 294.903 99.4566 294.953C99.5671 295.003 99.6865 295.03 99.8077 295.033C99.9289 295.035 100.049 295.013 100.162 294.968C100.274 294.923 100.376 294.855 100.462 294.769L104.956 290.262C105.124 290.094 105.218 289.865 105.218 289.627C105.217 289.389 105.122 289.161 104.954 288.993Z"
                  fill="#1A1A18"
                />
              </g>
              <g id="Group 736">
                <g id="Ellipse 226">
                  <circle
                    cx="271.554"
                    cy="285.439"
                    r="28.2084"
                    fill={`url(#${gradientId(8)})`}
                  />
                  <circle
                    cx="271.554"
                    cy="285.439"
                    r="27.7084"
                    stroke="#027D45"
                    strokeOpacity="0.4"
                  />
                </g>
                <path
                  id="Vector_10"
                  d="M274.743 280.517C275.189 280.517 275.576 280.825 275.676 281.259L278.308 292.777C278.36 293.004 278.346 293.24 278.267 293.459C278.189 293.678 278.049 293.869 277.866 294.011L272.674 298.009C272.459 298.175 272.194 298.263 271.923 298.261C271.652 298.259 271.389 298.166 271.177 297.997L266.029 293.909C265.848 293.765 265.712 293.573 265.637 293.355C265.561 293.136 265.55 292.901 265.603 292.677L268.316 281.252C268.366 281.042 268.485 280.856 268.654 280.722C268.822 280.589 269.031 280.516 269.247 280.517H274.742H274.743ZM276.153 272.617C276.311 272.617 276.466 272.655 276.605 272.729C276.745 272.802 276.864 272.908 276.954 273.037C277.043 273.167 277.1 273.316 277.118 273.472C277.137 273.629 277.118 273.787 277.062 273.935L275.717 277.47C275.648 277.651 275.525 277.807 275.366 277.917C275.206 278.027 275.016 278.086 274.822 278.086H269.158C268.967 278.086 268.781 278.029 268.623 277.923C268.465 277.816 268.342 277.665 268.271 277.488L266.842 273.954C266.782 273.806 266.759 273.646 266.776 273.488C266.793 273.329 266.848 273.177 266.937 273.045C267.027 272.913 267.147 272.805 267.288 272.73C267.428 272.656 267.585 272.617 267.745 272.617H276.154H276.153Z"
                  fill="#1A1A18"
                />
              </g>
            </g>
          </g>
          <circle
            id="Ellipse 231"
            cx="257.184"
            cy="76.2402"
            r="2.5644"
            fill="#E8EBFF"
          />
          <circle
            id="Ellipse 233"
            cx="299.923"
            cy="230.104"
            r="1.7096"
            fill="#E8EBFF"
          />
        </g>
        <g className="animate2Rotate" id="Group 1410135375">
          <circle
            id="Ellipse 221"
            cx="180.396"
            cy="180.394"
            r="99.5115"
            fill="white"
            fillOpacity="0.15"
            stroke={`url(#${gradientId(9)})`}
          />
          <circle
            id="Ellipse 232"
            cx="85.5143"
            cy="211.167"
            r="1.2096"
            fill="#E8EBFF"
            stroke={`url(#${gradientId(10)})`}
          />
          <circle
            id="Ellipse 229"
            cx="256.21"
            cy="241.591"
            r="5.05619"
            fill="#EAECF7"
            stroke={`url(#${gradientId(11)})`}
          />
        </g>
        <g className="animateRotate" id="Group 1410135374">
          <circle
            id="Ellipse 220"
            cx="180.439"
            cy="180.441"
            r="69.5935"
            fill={`url(#${gradientId(12)})`}
            stroke={`url(#${gradientId(13)})`}
          />
          <circle
            id="Ellipse 229_2"
            cx="227.026"
            cy="128.728"
            r="5.55619"
            fill="#EAECF7"
          />
          <circle
            id="Ellipse 230"
            cx="139.655"
            cy="235.84"
            r="4.27399"
            fill="#EAECF7"
          />
          <circle
            id="Ellipse 234"
            cx="132.999"
            cy="129.582"
            r="2.137"
            fill="#EAECF7"
          />
        </g>
        <g id="Group 732">
          <circle
            id="Ellipse 219"
            cx="180.346"
            cy="180.344"
            r="34.192"
            fill="#1C2025"
          />
          <path
            id="Union"
            d="M188.334 175.253C188.535 175.258 188.734 175.303 188.917 175.387C189.1 175.47 189.265 175.59 189.4 175.739L191.771 178.096C192.686 179.007 193.406 180.095 193.89 181.292H193.896C194.837 183.626 194.838 186.234 193.896 188.569C193.41 189.764 192.69 190.851 191.777 191.764C190.864 192.677 189.778 193.397 188.582 193.883C186.248 194.824 183.64 194.824 181.306 193.883C180.108 193.4 179.021 192.679 178.109 191.765L175.745 189.394C175.589 189.261 175.463 189.097 175.374 188.912C175.285 188.728 175.234 188.527 175.226 188.322C175.219 188.118 175.253 187.913 175.328 187.722C175.403 187.531 175.516 187.358 175.661 187.213C175.806 187.068 175.979 186.955 176.17 186.88C176.36 186.805 176.565 186.772 176.769 186.779C176.974 186.787 177.176 186.837 177.36 186.926C177.545 187.015 177.708 187.142 177.842 187.298L180.205 189.661C180.826 190.283 181.564 190.775 182.376 191.112C183.188 191.448 184.058 191.621 184.936 191.621C185.815 191.621 186.685 191.448 187.497 191.112C188.309 190.775 189.047 190.283 189.668 189.661C190.289 189.04 190.782 188.302 191.118 187.49C191.454 186.679 191.627 185.808 191.627 184.93C191.627 184.051 191.454 183.181 191.118 182.369C190.782 181.558 190.289 180.821 189.668 180.199L187.304 177.843C187.154 177.708 187.033 177.544 186.949 177.362C186.865 177.179 186.82 176.98 186.814 176.778C186.809 176.577 186.844 176.377 186.919 176.19C186.993 176.003 187.105 175.833 187.247 175.691C187.389 175.548 187.559 175.436 187.746 175.361C187.933 175.285 188.133 175.249 188.334 175.253ZM175.473 173.981C175.669 173.981 175.862 174.019 176.043 174.094C176.223 174.169 176.387 174.278 176.525 174.416L185.988 183.916C186.183 184.126 186.313 184.387 186.362 184.669C186.412 184.951 186.379 185.242 186.267 185.506C186.156 185.77 185.971 185.995 185.734 186.156C185.497 186.317 185.219 186.407 184.932 186.413C184.553 186.404 184.191 186.25 183.922 185.983L174.422 176.52C174.284 176.382 174.174 176.218 174.099 176.037C174.025 175.857 173.986 175.663 173.986 175.468C173.986 175.273 174.025 175.079 174.099 174.899C174.174 174.718 174.284 174.554 174.422 174.416C174.56 174.278 174.724 174.169 174.904 174.094C175.085 174.019 175.278 173.981 175.473 173.981ZM171.836 166.515C174.171 165.578 176.777 165.578 179.112 166.515C180.309 166.998 181.397 167.719 182.308 168.633L184.665 171.004C184.908 171.288 185.036 171.654 185.021 172.028C185.007 172.403 184.852 172.758 184.587 173.023C184.322 173.287 183.968 173.443 183.594 173.457C183.22 173.472 182.854 173.344 182.569 173.101L180.205 170.737C178.95 169.482 177.249 168.778 175.474 168.778C173.7 168.778 171.998 169.482 170.743 170.737C169.488 171.991 168.783 173.693 168.783 175.468C168.783 177.242 169.488 178.945 170.743 180.199L173.106 182.556C173.363 182.838 173.502 183.208 173.493 183.589C173.484 183.971 173.329 184.334 173.059 184.605C172.79 184.875 172.427 185.031 172.046 185.041C171.664 185.051 171.294 184.915 171.011 184.659L168.64 182.303C167.725 181.391 167.005 180.304 166.521 179.107C165.58 176.772 165.58 174.164 166.521 171.829C167.007 170.633 167.728 169.547 168.64 168.634C169.553 167.721 170.64 167.001 171.836 166.515Z"
            fill={`url(#${gradientId(14)})`}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={gradientId(0)}
          x1="180.253"
          y1="50.5977"
          x2="180.253"
          y2="310.457"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id={gradientId(1)}
          x1="180.208"
          y1="13.8828"
          x2="180.208"
          y2="70.2995"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id={gradientId(2)}
          x1="180.208"
          y1="13.8828"
          x2="180.208"
          y2="70.2995"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id={gradientId(3)}
          x1="315.402"
          y1="118.383"
          x2="315.402"
          y2="174.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id={gradientId(4)}
          x1="315.402"
          y1="118.383"
          x2="315.402"
          y2="174.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id={gradientId(5)}
          x1="47.2084"
          y1="116.922"
          x2="47.2084"
          y2="173.339"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id={gradientId(6)}
          x1="47.2084"
          y1="116.922"
          x2="47.2084"
          y2="173.339"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id={gradientId(7)}
          x1="98.9349"
          y1="263.812"
          x2="98.9349"
          y2="320.229"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id={gradientId(8)}
          x1="271.554"
          y1="257.23"
          x2="271.554"
          y2="313.647"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id={gradientId(9)}
          x1="180.396"
          y1="80.3828"
          x2="180.396"
          y2="280.406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7F5E6" />
          <stop offset={1} stopColor="#EDF5E6" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id={gradientId(10)}
          x1="85.5143"
          y1="209.457"
          x2="85.5143"
          y2="212.876"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7F5E6" />
          <stop offset={1} stopColor="#EDF5E6" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id={gradientId(11)}
          x1="256.21"
          y1="236.035"
          x2="256.21"
          y2="247.148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7F5E6" />
          <stop offset={1} stopColor="#EDF5E6" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id={gradientId(12)}
          x1="180.439"
          y1="110.348"
          x2="180.439"
          y2="250.535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id={gradientId(13)}
          x1="180.439"
          y1="110.348"
          x2="180.439"
          y2="250.535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id={gradientId(14)}
          x1="180.209"
          y1="165.812"
          x2="180.209"
          y2="194.589"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const TitleItem = () => {
  return (
    <FadeIn className="text-center text-[32px] leading-[37px] md:text-[36px] md:leading-[58px] max-w-[936px] mx-auto mb-[37px]">
      Explore our modular capabilities and say goodbye to time-consuming
      payments today
    </FadeIn>
  );
};

const MediumFiftyTitle = ({
  title,
  sub,
  tip,
}: {
  title: string;
  sub: string;
  tip: string;
}) => {
  return (
    <div>
      <div className="md:text-[24px] md:leading-[33px] lg:max-w-[497px] 2xl:max-w-full md:mb-[20px]">
        {title}
      </div>
      <div className="md:text-[20px] md:leading-[24px] md:mb-[16px] text-[#DEFE66]">
        {sub}
      </div>
      <div className="text-[12px] leading-[18px]  text-[#D1D1D1] lg:max-w-[495px]">
        {tip}
      </div>
    </div>
  );
};

const ThreeItem = () => {
  return (
    <div className="lg:flex gap-x-[27px]">
      <div className="flex-1 mb-[20px] lg:mb-0">
        <FadeIn
          className={cn(
            "mb-[20px] lg:mb-[41px] px-[12px] py-[26px]  md:p-[40px] bg-[#22251C] rounded-[16px]",
            hoverStyle,
          )}
        >
          <div className="text-[20px] leading-[24px] md:text-[24px] md:leading-[33px] md:mb-[54px] md:max-w-[200px]">
            Faster Payouts, Lower Costs
          </div>
          <div className="text-[14px] md:text-[20px] md:leading-[22px] text-[#DEFE66]">
            Global Payouts
          </div>
        </FadeIn>
        <FadeIn>
          <InextImage
            className="w-full"
            alt="country"
            height={373}
            src="/images/payout/5.png"
            width={623}
          />
        </FadeIn>
      </div>
      <FadeIn
        className={cn(
          "lg:w-[55.8%] px-[12px] py-[26px]   lg:p-[40px] rounded-[16px] bg-[#22251C]",
          hoverStyle,
        )}
      >
        <div className="text-[20px] leading-[24px] md:text-[24px] md:leading-[30px] font-medium mb-[10px] lg:mb-[61px]">
          Clear and efficient fund management
        </div>
        <div className="text-[12px] leading-[18px] mb-[34px] lg:mb-[40px] max-w-[726px] text-[#D1D1D1]">
          We provide real-time account visibility and streamlined fund
          management to simplify your daily payment operations.
        </div>
        <InextImage
          className="w-full"
          alt="picture"
          src="/images/payout/6.png"
          width="364"
          height="723"
        />
      </FadeIn>
    </div>
  );
};
