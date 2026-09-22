"use client";
import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import NextLink from "next/link";
import { FadeIn } from "@/components/Animateitem";
import { MinProgress } from "@/components/ProgressBlock";

const hasHtmlTags = (value: string) => /<\/?[a-z][\s\S]*>/i.test(value);

const RichText = ({
  content,
  className,
}: {
  content?: string;
  className?: string;
}) => {
  if (!content) {
    return null;
  }

  if (hasHtmlTags(content)) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    );
  }

  return <div className={className}>{content}</div>;
};

export const CountryBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative isolate overflow-hidden pt-[46px] md:pt-[58px]">
      <NextImage
        aria-hidden="true"
        className="pointer-events-none absolute -left-[104px] top-0 z-0 h-auto w-full select-none"
        alt=""
        src="/images/left.png"
        width={1432}
        height={599}
      />
      <NextImage
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-[119px] z-0 h-auto w-full select-none"
        alt=""
        src="/images/right.png"
        width={1536}
        height={599}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const ViewOne = ({ defaultSelected }: { defaultSelected: string }) => {
  const [selectedId, setSelectedId] = useState(defaultSelected);
  const commStyle = "flex items-center justify-center flex-col";
  const commStyle2 =
    "flex items-center justify-between  md:justify-center md:justify-center  flex-row  md:flex-col";
  const list = [
    {
      id: "br",
      title: "Brazil",
      icon: "br",
      href: "br",
    },
    {
      id: "ars",
      title: "Argentina",
      icon: "ars",
      href: "ars",
    },
    {
      id: "co",
      title: "Colombia",
      icon: "co",
      href: "co",
    },
    {
      id: "in",
      title: "India",
      icon: "in",
      href: "INDIA",
    },
    {
      id: "kr",
      title: "Korea",
      icon: "kr",
      href: "kr",
    },
    {
      id: "id",
      title: "Indonesia",
      icon: "id",
      href: "id",
    },
    {
      id: "va",
      title: "Vietnam",
      icon: "va",
      href: "VN",
    },

    {
      id: "kh",
      title: "Cambodia",
      icon: "kh",
      href: "KH",
    },
  ];
  return (
    <div
      className={cn(
        "w-full h-full pt-[30px] pb-[46px]  md:pt-[122px] lg:pt-0 md:pb-[179px] lg:pb-0 lg:absolute top-0 left-0 z-2",
        commStyle,
      )}
    >
      <div className="text-[32px] leading-[37px] mb-[30px] md:text-[48px] md:leading-[68px] md:mb-[17px] text-white font-semibold text-center">
        Overview of the Economy
      </div>
      <div className="w-full px-[20px] sm:px-[60px] md:px-0 md:w-auto md:max-w-[670px] flex flex-col  md:flex-row md:flex-wrap md:justify-center  gap-[12px] md:gap-x-[23px] md:gap-y-[42px] cursor-pointer ">
        {list.map((i, index) => {
          const isSelected = i.id === selectedId;
          return (
            <NextLink
              className="block "
              key={i.href}
              href={`/${i.href.toUpperCase()}`}
              target="_self"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "overflow-hidden relative group w-full  h-[68px] px-[20px] md:px-0 md:w-[115px] md:h-[108px] border border-[#BFE44C] rounded-[16px] bg-[rgba(193,230,78,0.4)] hover:border-[#22B773]",
                  commStyle2,
                  isSelected &&
                    "bg-[linear-gradient(180deg,#DEFE66_0%,#B0D840_100%)] border-[linear-gradient(180deg,#DEFE66_0%,#B0D840_100%)] text-[#000000] font-bold",
                )}
              >
                <div className="absolute inset-0 bg-transparent z-2 group-hover:bg-[linear-gradient(180deg,#DEFE66_0%,#B0D840_100%)] group-hover:border-[linear-gradient(180deg,#DEFE66_0%,#B0D840_100%)]"></div>
                <div className={cn(commStyle2, "w-full relative z-3")}>
                  <Image
                    radius="none"
                    classNames={{
                      img: "w-[50px] h-[33px]",
                      wrapper: "w-[50px] h-[33px] md:mb-[5px]",
                    }}
                    alt="country"
                    height={33}
                    src={`/images/country/icon/${i.icon}.png`}
                    width={50}
                  />
                  <div className="text-[20px] group-hover:font-bold group-hover:text-[#000000]">
                    {i.title}
                  </div>
                </div>
              </motion.div>
            </NextLink>
          );
        })}
      </div>
    </div>
  );
};

export const CardWrap = ({
  children,
  cnt,
  className,
  wrapclass,
  imgclass,
}: {
  children: ReactNode;
  cnt: string;
  className?: string;
  wrapclass?: string;
  imgclass?: string;
}) => {
  const styleObj =
    "relative bg-[#31382C] rounded-[40px] border border-[rgba(255,255,255,0.3)] p-[20px] md:py-[27px] md:px-[48px] mb-[100px] md:mb-[148px]";
  return (
    <FadeIn>
      <div className={cn(styleObj, wrapclass)}>
        <div className="mb-[10px] md:mb-[24px] font-semibold md:font-medium text-[22px] leading-[33px]  lg:text-[42px] lg:leading-[72px] xl:text-[48px] xl:leading-[72px] text-white">
          Method of payment
        </div>
        <div className="lg:flex items-center justify-center">
          <div className="flex-1 mb-[29px] lg:mb-0">
            <RichText
              className={cn(
                "text-[14px] leading-[21px] lg:max-w-[465px] 2xl:max-w-full",
                className,
              )}
              content={cnt}
            />
          </div>
          <div
            className={cn(
              "lg:absolute top-0 right-[20px] md:right-[27px] w-full  lg:w-1/2 h-full lg:pl-[30px] flex items-center lg:justify-center",
              imgclass,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export const TitleItem = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <RichText
      className={cn(
        "flex-1 text-white text-[12px] leading-[18px] font-medium",
        className,
      )}
      content={title}
    />
  );
};

export const LeftItem = ({ title }: { title?: string }) => {
  return (
    <div className="flex-1 text-white text-[12px] leading-[14px] md:text-[18px] md:leading-[36px] font-medium">
      {title}
    </div>
  );
};

export const SectionItem = ({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) => {
  return (
    <FadeIn delay={delay}>
      <div
        className={cn(
          "md:flex items-center justify-start bg-[#31382C] p-[10px] md:p-[20px] rounded-[8px] mb-[10px] md:mb-[12px]",
          className,
        )}
      >
        {children}
      </div>
    </FadeIn>
  );
};

const iconDraw: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
    },
  },
};

const LangIcon = () => {
  return (
    <motion.svg
      className="mr-[10px] md:mr-[21px] w-[26px] h-[26px]   md:w-[32px] md:h-[32px]"
      initial="hidden"
      whileInView="visible"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <motion.path
          variants={iconDraw}
          id="Vector"
          d="M19.746 28.3C19.392 27.626 19.014 26.646 19.222 26.06C19.3204 25.7181 19.5346 25.4212 19.828 25.22C20.21 24.908 20.734 24.482 21.15 23.402C21.31 22.984 21.416 22.564 21.516 22.16C21.884 20.69 22.016 20.464 23.082 20.586C23.882 20.682 24.378 21.066 24.952 21.512C25.516 21.95 26.158 22.414 27.04 22.566C25.405 25.3163 22.8049 27.3596 19.746 28.298M4.972 22.588C5.902 22.476 6.918 22.152 7.644 21.36C8.446 20.484 8.452 19.34 8.456 18.424C8.462 17.174 8.532 16.83 9.164 16.594C10.028 16.274 10.42 16.58 11.232 17.3C11.708 17.724 12.248 18.204 12.966 18.424C13.812 18.684 14.826 18.564 15.674 18.098C16.52 17.638 17.148 16.856 17.414 15.928H17.42L17.428 15.898L17.436 15.874C17.446 15.842 17.446 15.814 17.456 15.782C17.518 15.564 17.562 15.344 17.59 15.126C17.604 15.028 17.61 14.94 17.616 14.846C17.622 14.77 17.632 14.694 17.636 14.62C17.6617 14.1266 17.6524 13.632 17.608 13.14C17.5897 12.9224 17.5777 12.7043 17.572 12.486C17.5671 12.2843 17.6176 12.085 17.718 11.91C17.894 11.826 18.362 11.742 18.684 11.686C19.578 11.528 20.672 11.328 21.332 10.552L21.342 10.546H21.34C21.38 10.498 21.422 10.458 21.458 10.406C22.574 8.834 22.506 7.208 21.282 6.164C21.1849 6.08469 21.0841 6.00994 20.98 5.94C20.26 5.44 19.952 5.086 20.162 4.436C20.224 4.24 20.292 4.07 20.358 3.916C22.8457 4.81129 24.9968 6.45204 26.5179 8.61455C28.039 10.7771 28.8562 13.3561 28.858 16C28.858 17.548 28.568 19.026 28.068 20.4C27.9135 20.4466 27.7547 20.4774 27.594 20.492C27.154 20.492 26.834 20.262 26.266 19.818C25.578 19.284 24.722 18.622 23.332 18.458C20.336 18.102 19.77 20.318 19.438 21.638C19.354 21.976 19.272 22.318 19.148 22.634C18.938 23.182 18.764 23.324 18.474 23.56C18.098 23.868 17.582 24.288 17.206 25.34C16.786 26.506 17.168 27.812 17.586 28.748C17.066 28.814 16.538 28.858 16 28.858C13.7766 28.857 11.5915 28.2786 9.65872 27.1796C7.72594 26.0805 6.11169 24.4983 4.974 22.588M15.998 3.142C16.778 3.142 17.536 3.222 18.276 3.356C18.2199 3.49486 18.1685 3.63561 18.122 3.778C17.388 6.052 19.172 7.292 19.756 7.698L19.89 7.792C20.02 7.904 20.352 8.202 19.77 9.076C19.562 9.254 19.35 9.286 18.83 9.31C18.134 9.344 17.084 9.394 16.152 10.43L16.148 10.436L16.146 10.438L16.134 10.448C16.114 10.47 16.102 10.494 16.084 10.516C15.59 11.096 15.45 11.73 15.434 12.352C15.4195 12.7589 15.4289 13.1662 15.462 13.572C15.488 14.002 15.512 14.414 15.476 14.78C15.4534 14.9575 15.4186 15.1332 15.372 15.306C15.3192 15.4999 15.2272 15.6809 15.1016 15.8377C14.9761 15.9946 14.8196 16.124 14.642 16.218C14.302 16.406 13.888 16.468 13.598 16.378C13.324 16.292 12.998 16.004 12.652 15.698C11.804 14.944 10.52 13.804 8.416 14.586C6.328 15.366 6.32 17.198 6.314 18.412C6.31 19.048 6.306 19.648 6.064 19.912C5.616 20.402 4.698 20.506 3.964 20.488C3.42378 19.0533 3.14602 17.5331 3.144 16C3.144 12.5902 4.4984 9.32001 6.90931 6.90873C9.32022 4.49744 12.5902 3.14253 16 3.142M16 1C7.728 1 1 7.728 1 16C1 24.272 7.728 31 16 31C24.272 31 31 24.272 31 16C31 7.728 24.272 1 16 1Z"
          fill="#DEFE66"
        />
      </g>
    </motion.svg>
  );
};

const PopulationIcon = () => {
  return (
    <svg
      className="mr-[10px] md:mr-[21px] w-[26px] h-[26px]   md:w-[32px] md:h-[32px]"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M21.4587 11.3216C21.4587 8.30094 19.0013 5.84375 15.9809 5.84375C12.9606 5.84375 10.5031 8.30125 10.5031 11.3216C10.5031 13.3609 11.6238 15.1438 13.2813 16.0866C11.7734 16.53 10.3919 17.3456 9.24937 18.4881C7.45125 20.2863 6.46094 22.6769 6.46094 25.2197C6.46094 25.7375 6.88063 26.1572 7.39844 26.1572C7.91625 26.1572 8.33594 25.7375 8.33594 25.2197C8.33594 21.0044 11.7653 17.5747 15.9809 17.5747C20.1966 17.5747 23.6259 21.0041 23.6259 25.2197C23.6259 25.7375 24.0456 26.1572 24.5634 26.1572C25.0812 26.1572 25.5009 25.7375 25.5009 25.2197C25.5009 22.6769 24.5106 20.2863 22.7125 18.4881C21.5703 17.3456 20.1884 16.53 18.6806 16.0866C20.3381 15.1434 21.4587 13.3609 21.4587 11.3216ZM15.9806 14.9244C13.9941 14.9244 12.3778 13.3081 12.3778 11.3216C12.3778 9.335 13.9941 7.71875 15.9806 7.71875C17.9672 7.71875 19.5834 9.335 19.5834 11.3216C19.5837 13.3081 17.9675 14.9244 15.9806 14.9244Z"
          fill="#DEFE66"
        />
        <path
          id="Vector_2"
          d="M24.7673 15.4322C25.7717 14.5356 26.4055 13.2319 26.4055 11.7828C26.4055 9.08563 24.2111 6.89125 21.5139 6.89125C20.9961 6.89125 20.5764 7.31094 20.5764 7.82875C20.5764 8.34656 20.9961 8.76625 21.5139 8.76625C23.177 8.76625 24.5305 10.1194 24.5305 11.7828C24.5305 13.3544 23.3223 14.6488 21.7861 14.7869C21.6958 14.7841 21.6052 14.7822 21.5142 14.7822C20.9964 14.7822 20.5767 15.2019 20.5767 15.7197C20.5767 15.7225 20.577 15.7253 20.577 15.7284C20.577 15.7312 20.5767 15.7341 20.5767 15.7372C20.5767 16.255 20.9964 16.6747 21.5142 16.6747C21.617 16.6747 21.7189 16.6713 21.8198 16.665C25.2827 16.8253 28.0505 19.6925 28.0505 23.1941C28.0505 23.7119 28.4702 24.1316 28.988 24.1316C29.5058 24.1316 29.9255 23.7119 29.9255 23.1941C29.9255 20.9472 29.0505 18.835 27.4617 17.2463C26.6761 16.46 25.762 15.8494 24.7673 15.4322ZM2.97266 24.1309C3.49047 24.1309 3.91016 23.7113 3.91016 23.1934C3.91016 19.6919 6.67797 16.8247 10.1408 16.6644C10.242 16.6706 10.3439 16.6741 10.4464 16.6741C10.9642 16.6741 11.3839 16.2544 11.3839 15.7366C11.3839 15.7338 11.3836 15.7309 11.3836 15.7278C11.3836 15.725 11.3839 15.7222 11.3839 15.7191C11.3839 15.2013 10.9642 14.7816 10.4464 14.7816C10.3555 14.7816 10.2648 14.7834 10.1745 14.7862C8.63828 14.6484 7.43016 13.3537 7.43016 11.7822C7.43016 10.1191 8.78328 8.76562 10.4467 8.76562C10.9645 8.76562 11.3842 8.34594 11.3842 7.82812C11.3842 7.31031 10.9645 6.89062 10.4467 6.89062C7.74953 6.89062 5.55516 9.085 5.55516 11.7822C5.55516 13.2312 6.18891 14.535 7.19328 15.4316C6.19859 15.8488 5.28453 16.4594 4.49891 17.245C2.91016 18.8338 2.03516 20.9459 2.03516 23.1928C2.03516 23.7113 2.45484 24.1309 2.97266 24.1309Z"
          fill="#DEFE66"
        />
      </g>
    </svg>
  );
};

const Religionicon = () => {
  return (
    <svg
      className="mr-[10px] md:mr-[21px] w-[26px] h-[26px]   md:w-[32px] md:h-[32px]"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M30.1053 26.2355C30.1053 27.6051 28.9933 28.6771 27.6317 28.7859L27.4029 28.7955H4.64931C3.26211 28.7955 2.07811 27.7939 1.95651 26.4595L1.94531 26.2355V23.3171C1.94531 22.2579 2.62371 21.3395 3.61091 20.9523L3.82851 20.8771L7.11171 19.8883L7.84931 22.3411L4.56611 23.3283C4.52771 23.3395 4.51331 23.3443 4.50851 23.3379L4.50531 23.3171V26.2355L4.51171 26.2211L4.58051 26.2307L4.64771 26.2355H27.4013L27.4685 26.2307L27.5373 26.2211L27.5437 26.2355V23.3235C27.5437 23.3443 27.5421 23.3507 27.5229 23.3459L24.1181 22.3427L24.8429 19.8867L28.2061 20.8787C29.2429 21.1827 29.9981 22.0547 30.0941 23.0963L30.1037 23.3219V26.2339L30.1053 26.2355Z"
          fill="#DEFE66"
        />
        <path
          id="Vector_2"
          d="M15.9984 8L23.6336 11.5456C24.2204 11.8177 24.7171 12.252 25.0653 12.7971C25.4134 13.3423 25.5984 13.9756 25.5984 14.6224V27.2C25.5984 27.6243 25.4299 28.0313 25.1298 28.3314C24.8298 28.6314 24.4228 28.8 23.9984 28.8H7.99844C7.57409 28.8 7.16713 28.6314 6.86707 28.3314C6.56701 28.0313 6.39844 27.6243 6.39844 27.2V14.624C6.39761 13.977 6.58185 13.3432 6.92941 12.7975C7.27698 12.2518 7.77337 11.8168 8.36004 11.544L15.9984 8ZM15.9968 10.8224L9.44004 13.8672C9.31713 13.9243 9.21003 14.0105 9.12805 14.1185C9.04607 14.2264 8.99169 14.3527 8.96964 14.4864L8.95844 14.6224L8.95684 26.24H23.0368V14.624C23.0371 14.4886 23.0043 14.3551 22.9413 14.2352C22.8783 14.1153 22.787 14.0126 22.6752 13.936L22.5552 13.8672L15.9968 10.8224Z"
          fill="#DEFE66"
        />
        <path
          id="Vector_3"
          d="M15.9987 19.1992C16.3382 19.1992 16.6638 19.3341 16.9038 19.5741C17.1439 19.8142 17.2788 20.1397 17.2788 20.4792V27.5192C17.2788 27.8587 17.1439 28.1843 16.9038 28.4243C16.6638 28.6644 16.3382 28.7992 15.9987 28.7992C15.6593 28.7992 15.3337 28.6644 15.0937 28.4243C14.8536 28.1843 14.7188 27.8587 14.7188 27.5192V20.4792C14.7188 20.1397 14.8536 19.8142 15.0937 19.5741C15.3337 19.3341 15.6593 19.1992 15.9987 19.1992Z"
          fill="#DEFE66"
        />
        <path
          id="Vector_4"
          d="M11.6784 3.19922H20.3184C21.1718 3.19922 21.5984 3.62589 21.5984 4.47922C21.5984 5.33255 21.1718 5.75922 20.3184 5.75922H11.6784C10.8251 5.75922 10.3984 5.33255 10.3984 4.47922C10.3984 3.62589 10.8251 3.19922 11.6784 3.19922Z"
          fill="#DEFE66"
        />
        <path
          id="Vector_5"
          d="M17.2788 1.28V8.32C17.2788 9.17333 16.8521 9.6 15.9987 9.6C15.1454 9.6 14.7188 9.17333 14.7188 8.32V1.28C14.7188 0.426667 15.1454 0 15.9987 0C16.8521 0 17.2788 0.426667 17.2788 1.28Z"
          fill="#DEFE66"
        />
      </g>
    </svg>
  );
};
const DigitalConsumers = () => {
  return (
    <svg
      className="mr-[10px] md:mr-[21px] w-[26px] h-[26px]   md:w-[32px] md:h-[32px]"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <g id="Group 1410135541">
          <circle
            id="Ellipse 325"
            cx={16}
            cy={11}
            r={5}
            stroke="#DEFE66"
            strokeWidth={2}
          />
          <path
            id="Ellipse 326"
            d="M22.364 19.636C21.5282 18.8003 20.5361 18.1374 19.4442 17.6851C18.3522 17.2328 17.1819 17 16 17C14.8181 17 13.6478 17.2328 12.5558 17.6851C11.4639 18.1374 10.4718 18.8003 9.63604 19.636C8.80031 20.4718 8.13738 21.4639 7.68508 22.5558C7.23279 23.6478 7 24.8181 7 26"
            stroke="#DEFE66"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
        <g id="Frame_2" clipPath="url(#clip0_1501_297)">
          <path
            id="Vector"
            d="M25.6826 22.6201C25.7083 22.6201 25.7334 22.6298 25.752 22.6475C25.7611 22.6562 25.7682 22.6665 25.7734 22.6777L25.7822 22.7148L25.7832 22.7197C25.7832 22.726 25.7814 22.7321 25.7803 22.7383L25.7783 22.749L24.7197 26.165C24.7137 26.1846 24.7017 26.2023 24.6855 26.2148C24.6775 26.2211 24.6686 26.226 24.6592 26.2295L24.6299 26.2354L24.6094 26.2363H20.3242C20.3022 26.2363 20.2811 26.2283 20.2637 26.2148C20.255 26.2081 20.2472 26.2004 20.2412 26.1914L20.2275 26.1621L20.2236 26.1445L19.4707 22.6201H25.6826Z"
            stroke="#DEFE66"
          />
          <path
            id="Vector_2"
            d="M24.7014 27.6334C24.7014 27.6925 24.6898 27.7511 24.6672 27.8057C24.6446 27.8603 24.6114 27.9099 24.5697 27.9517C24.5279 27.9935 24.4783 28.0266 24.4237 28.0492C24.3691 28.0719 24.3106 28.0835 24.2515 28.0835C24.1924 28.0835 24.1339 28.0719 24.0793 28.0493C24.0247 28.0267 23.9751 27.9935 23.9333 27.9518C23.8915 27.91 23.8583 27.8604 23.8357 27.8058C23.8131 27.7512 23.8014 27.6927 23.8014 27.6336C23.8014 27.5142 23.8488 27.3998 23.9332 27.3154C24.0176 27.231 24.1321 27.1836 24.2514 27.1836C24.3708 27.1836 24.4852 27.231 24.5696 27.3154C24.654 27.3998 24.7014 27.5142 24.7014 27.6336M21.2964 27.6334C21.2975 27.6932 21.2867 27.7526 21.2646 27.8082C21.2425 27.8637 21.2095 27.9143 21.1676 27.957C21.1257 27.9996 21.0758 28.0335 21.0207 28.0567C20.9655 28.0798 20.9063 28.0917 20.8466 28.0917C20.7868 28.0917 20.7276 28.0798 20.6725 28.0567C20.6173 28.0336 20.5673 27.9997 20.5254 27.9571C20.4836 27.9144 20.4506 27.8638 20.4284 27.8083C20.4063 27.7528 20.3955 27.6934 20.3966 27.6336C20.3966 27.5142 20.444 27.3998 20.5284 27.3154C20.6128 27.231 20.7272 27.1836 20.8466 27.1836C20.9659 27.1836 21.0804 27.231 21.1648 27.3154C21.2491 27.3998 21.2966 27.5142 21.2966 27.6336"
            fill="#DEFE66"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1501_297">
          <rect
            width={9}
            height={9}
            fill="white"
            transform="translate(18 20)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const FinancialInclusion = () => {
  return (
    <svg
      className="mr-[10px] md:mr-[21px] w-[26px] h-[26px]   md:w-[32px] md:h-[32px]"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1501_294)">
        <rect
          x={16}
          y={1}
          width="21.2132"
          height="21.2132"
          rx={1}
          transform="rotate(45 16 1)"
          stroke="#DEFE66"
          strokeWidth={2}
        />
        <circle
          cx={16}
          cy="15.9992"
          r="6.06092"
          transform="rotate(45 16 15.9992)"
          stroke="#DEFE66"
          strokeWidth={2}
        />
      </g>
      <defs>
        <clipPath id="clip0_1501_294">
          <rect width={32} height={32} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const YouthfulOIcon = () => {
  return (
    <svg
      className="mr-[10px] md:mr-[21px] w-[26px] h-[26px]   md:w-[32px] md:h-[32px]"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M29.0019 4.99609H2.99806C2.4471 4.99609 2 5.44323 2 5.99425V25.9979C2 26.549 2.4471 26.9961 2.99806 26.9961H29.0019C29.5529 26.9961 30 26.549 30 25.9979V5.99425C30 5.44323 29.5529 4.99609 29.0019 4.99609ZM27.7419 24.7469H4.24903V7.24532H27.7419V24.7469Z"
          fill="#DEFE66"
        />
        <path
          id="Vector_2"
          d="M18.9866 14.858H22.7386C22.7782 14.858 22.809 14.7454 22.809 14.6103V13.1152C22.809 12.9756 22.7782 12.8675 22.7386 12.8675H18.9866C18.947 12.8675 18.9162 12.9801 18.9162 13.1152V14.6103C18.9206 14.7454 18.9514 14.858 18.9866 14.858ZM19.1318 19.3479H24.7839C24.9115 19.3389 25.0082 19.2263 24.9994 19.1002V17.6005C25.0082 17.4699 24.9115 17.3574 24.7839 17.3529H19.1318C19.0042 17.3619 18.9074 17.4745 18.9162 17.6005V19.0957C18.9074 19.2263 19.0086 19.3389 19.1362 19.3434H19.1318V19.3479ZM7.22928 20.9961H8.56644C8.694 20.9961 8.79956 20.8925 8.80836 20.7619C8.92712 19.0912 10.3479 17.8302 11.9797 17.9518C13.4488 18.0599 14.6189 19.2578 14.7244 20.7619C14.7332 20.8925 14.8388 20.9961 14.9663 20.9961H16.3035C16.4399 20.9961 16.5454 20.8835 16.5498 20.7484V20.7349C16.4662 19.1227 15.6173 17.6546 14.2802 16.808C15.5426 15.3939 15.4458 13.1962 14.0602 11.9038C12.6791 10.6113 10.5326 10.7104 9.27021 12.1289C8.087 13.4529 8.087 15.484 9.27021 16.808C7.92865 17.6591 7.08413 19.1272 7.00056 20.7349C6.99176 20.8655 7.08853 20.9826 7.21608 20.9961H7.24248H7.22928ZM11.7642 12.8315C12.6395 12.827 13.3521 13.5475 13.3565 14.4437C13.3609 15.3399 12.6571 16.0694 11.7818 16.0739C10.9065 16.0784 10.1939 15.3579 10.1895 14.4617V14.4527C10.1895 13.561 10.8933 12.836 11.7642 12.8315Z"
          fill="#DEFE66"
        />
      </g>
    </svg>
  );
};

const EconomyIcon = () => {
  return (
    <svg
      className="mr-[10px] md:mr-[21px] w-[26px] h-[26px]   md:w-[32px] md:h-[32px]"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M13.5156 12.1289C16.7511 12.1289 20.16 11.4304 22.1822 10.0333V10.7318C22.1822 11.2557 22.5867 11.6632 23.1067 11.6632C23.6267 11.6632 24.0311 11.2557 24.0311 10.7318V7.06445C24.0311 3.80457 18.6 2 13.5156 2C8.43111 2 3 3.80457 3 7.06445V21.9667C3 25.052 7.73778 26.7983 12.5333 27.0312C13.0533 27.0312 13.5156 26.6237 13.5156 26.0998C13.5156 25.5759 13.1111 25.1102 12.5911 25.1102C7.73778 24.9356 4.84889 23.1892 4.84889 21.9667V17.4844C6.69778 18.7069 9.58667 19.4054 12.5333 19.5218C13.0533 19.5218 13.4578 19.1143 13.5156 18.5904C13.5156 18.0665 13.1111 17.659 12.5911 17.6008C7.73778 17.4262 4.84889 15.6798 4.84889 14.4574V9.91684C6.87111 11.4304 10.28 12.1289 13.5156 12.1289ZM13.5156 3.921C18.8889 3.921 22.1822 5.78378 22.1822 7.06445C22.1822 8.34511 18.8889 10.2079 13.5156 10.2079C8.14222 10.2079 4.84889 8.34511 4.84889 7.06445C4.84889 5.78378 8.14222 3.921 13.5156 3.921ZM21.8933 13.1767C17.2133 13.1767 14.7867 14.9813 14.7867 16.7859V26.3909C14.7867 28.1954 17.2133 30 21.8933 30C26.5733 30 28.9422 28.1954 29 26.4491V16.7859C29 14.9813 26.5733 13.1767 21.8933 13.1767ZM21.8933 15.0395C25.36 15.0395 27.0933 16.2037 27.0933 16.7276C27.0933 17.2516 25.3022 18.4158 21.8933 18.4158C18.4844 18.4158 16.6933 17.2516 16.6933 16.7276C16.6933 16.2037 18.4844 15.0395 21.8933 15.0395ZM21.8933 28.0208C18.4267 28.0208 16.6933 26.8565 16.6933 26.3326V24.0624C17.9067 24.7027 19.64 25.1684 21.8933 25.1684C24.1467 25.1684 25.9378 24.7609 27.0933 24.0624V26.3326C27.1511 26.8565 25.36 28.0208 21.8933 28.0208ZM21.8933 23.2474C18.4267 23.2474 16.6933 22.0832 16.6933 21.5593V19.289C17.9067 19.9293 19.64 20.395 21.8933 20.395C24.1467 20.395 25.9378 19.9875 27.0933 19.289V21.5593C27.1511 22.0832 25.36 23.2474 21.8933 23.2474Z"
          fill="#DEFE66"
        />
      </g>
    </svg>
  );
};

export const FirstSection = ({
  country,
  list,
}: {
  country: string;
  list: string[];
}) => {
  const commenStyle =
    "md:w-[225px]  text-white flex items-center justify-start mb-[10px] md:mb-0";
  const useDigitalProfile = [
    "India",
    "Brazil",
    "Cambodia",
    "Vietnam",
    "Ecuador",
  ].includes(country);
  const titleClassName = useDigitalProfile ? "pl-[37px]" : undefined;
  const sections = [
    { label: "Language", Icon: LangIcon, content: list[0], delay: 0 },
    { label: "Population", Icon: PopulationIcon, content: list[1], delay: 0.1 },
    {
      label: useDigitalProfile ? "Digital Consumers" : "Religion",
      Icon: useDigitalProfile ? DigitalConsumers : Religionicon,
      content: list[2],
      delay: 0.2,
    },
    {
      label: useDigitalProfile
        ? ["Cambodia", "Vietnam", "Ecuador"].includes(country)
          ? "Digital Payment"
          : "Financial Inclusion"
        : "Youthful",
      Icon: useDigitalProfile ? FinancialInclusion : YouthfulOIcon,
      content: list[3],
      delay: 0.3,
    },
    { label: "Economy", Icon: EconomyIcon, content: list[4], delay: 0.4 },
  ];

  return (
    <div className="mb-[63px] md:mb-[97px]">
      <FadeIn>
        <div className="font-medium text-[22px] md:text-[35px] mb-[38px] md:mb-[62px] text-center  text-white">
          Key Facts About <br className=" md:hidden" />
          <span className="text-[36px] leading-[38px] md:text-[64px] md:leading-[72px]  text-white">
            {country}
          </span>
        </div>
      </FadeIn>
      <div className="bg-[#22251C] p-[13px] md:p-[20px] rounded-[20px]">
        {sections.map(({ label, Icon, content, delay }, index) => (
          <SectionItem
            key={`${country}-${label}`}
            className={index === sections.length - 1 ? "!mb-0" : undefined}
            delay={delay}
          >
            <div className={cn(commenStyle)}>
              <Icon />
              <LeftItem title={label} />
            </div>
            <TitleItem className={titleClassName} title={content} />
          </SectionItem>
        ))}
      </div>
    </div>
  );
};

export const SecondSection = ({ sub, list }: { sub: string; list: any[] }) => {
  return (
    <div className="mb-[10px] md:mb-[50px]">
      <FadeIn className="text-[32px] leading-[33px] md:text-[48px] md:leading-[68px] text-center font-semibold mb-[38px] md:mb-[17px] ">
        Survey of consumption
      </FadeIn>
      <FadeIn className="text-[12px] leading-[14px] md:text-[14px] md:leading-[21px] text-center  mb-[28px] md:mb-[52px] ">
        {sub}
      </FadeIn>
      <section id="progress" className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[10px]  md:gap-x-[55px]  gap-y-[10px] md:gap-y-[55px] rounded-3xl">
          {list.map((i) => (
            <FadeIn key={i.id}>
              <div className="country-card w-full h-full pb-[30px] md:pb-[26px]">
                <div className="mx-auto px-[50px] md:px-[45px]">
                  <CircularProgress value={i.count} id={i.id} />
                </div>
                <div className="flex items-center flex-col">
                  <div className="font-semibold text-[30px] leading-[36px] mb-[11px] md:mb-[9px] md:text-[32px] md:leading-[36px] text-white">
                    {i.name ?? `${i.count}%`}
                  </div>
                  <RichText
                    className="text-white text-[14px] leading-[24px] text-center"
                    content={i.title}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
};
export const CircularProgress = ({
  value = 43,
  id,
}: {
  value: number;
  id: number;
}) => {
  const r = 81.2262;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (circumference * value) / 100;
  const draw: Variants = {
    hidden: { strokeDashoffset: circumference },
    visible: {
      strokeDashoffset,
      transition: {
        strokeDashoffset: { type: "spring", duration: 1.5, bounce: 0 },
      },
    },
  };
  return (
    <>
      <div className="relative country-card-progress">
        {id === 1 && (
          <motion.svg
            className="comment-progress"
            initial="hidden"
            whileInView="visible"
            viewBox="0 0 232 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Mask group">
              <mask
                id="mask0_2091_1020"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={232}
                height={232}
              >
                <rect
                  id="Rectangle 801"
                  x="0.304688"
                  width="231.628"
                  height="231.628"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_2091_1020)">
                <g id="Group 794" filter="url(#filter0_d_2091_1020)">
                  <path
                    id="Ellipse 271"
                    d="M116.118 29.4531C163.814 29.4531 202.478 68.118 202.479 115.813C202.479 163.509 163.814 202.174 116.118 202.174C68.4227 202.174 29.7578 163.509 29.7578 115.813C29.7578 68.118 68.4227 29.4532 116.118 29.4531Z"
                    fill="#F6F8FF"
                    stroke="#E1E7F4"
                  />
                  <circle
                    id="Ellipse 264"
                    cx="116.117"
                    cy="115.816"
                    r="74.2262"
                    fill="#E4ECFF"
                  />
                  <circle
                    id="Ellipse 266"
                    cx="116.12"
                    cy="115.815"
                    r="67.909"
                    fill="url(#paint0_linear_2091_1020)"
                  />
                  <g id="Ellipse 270" filter="url(#filter1_dii_2091_1020)">
                    <circle
                      cx="116.119"
                      cy="115.814"
                      r="50.537"
                      fill="url(#paint1_linear_2091_1020)"
                    />
                  </g>
                  <g id="Group 804" transform="rotate(270 116 116)">
                    <path
                      id="Vector"
                      d="M113.385 119.184H119.264C123.737 119.184 127.375 122.838 127.375 127.363V127.954C127.375 128.03 127.371 128.122 127.129 128.273C126.838 128.455 126.327 128.626 125.545 128.754C123.993 129.007 121.804 129.028 119.264 129.028H113.385C110.837 129.028 108.651 129.025 107.098 128.78C106.316 128.657 105.81 128.489 105.523 128.308C105.291 128.161 105.273 128.062 105.273 127.954V127.363L105.284 126.941C105.502 122.613 109.052 119.184 113.385 119.184ZM116.029 102.602C119.366 102.602 122.083 105.329 122.083 108.708C122.083 112.088 119.365 114.814 116.029 114.814C112.797 114.814 110.147 112.255 109.984 109.022L109.976 108.708C109.976 105.328 112.694 102.602 116.029 102.602Z"
                      stroke="#789114"
                      strokeWidth={2}
                    />
                    <path
                      id="Ellipse 280"
                      d="M115.997 102.602C119.37 102.602 122.104 105.335 122.104 108.708C122.104 112.081 119.37 114.815 115.997 114.815C112.625 114.815 109.891 112.081 109.891 108.708C109.891 105.336 112.625 102.602 115.997 102.602Z"
                      stroke="#789114"
                      strokeWidth={2}
                    />
                  </g>
                </g>
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r={r}
                  fill="transparent"
                  stroke="url(#paint2_linear_2091_1020)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  variants={draw}
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2091_1020"
                x="-0.742188"
                y="4.95312"
                width="233.721"
                height="233.723"
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
                <feOffset dy={6} />
                <feGaussianBlur stdDeviation={15} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1020"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1020"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dii_2091_1020"
                x="57.582"
                y="59.2773"
                width="121.074"
                height="121.074"
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
                <feOffset dx={2} dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.760488 0 0 0 0 0.815807 0 0 0 0 0.905371 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1020"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1020"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_2091_1020"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={-4} />
                <feGaussianBlur stdDeviation={6} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_2091_1020"
                  result="effect3_innerShadow_2091_1020"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2091_1020"
                x1="116.12"
                y1="47.9062"
                x2="142.573"
                y2="183.724"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F8FAFF" />
                <stop offset={1} stopColor="#E9ECFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2091_1020"
                x1="96.7728"
                y1="75.1478"
                x2="131.912"
                y2="150.164"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset={1} stopColor="#DAE8FF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2091_1020"
                x1="87.2645"
                y1={31}
                x2="19.3484"
                y2="166.667"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B4B00" />
                <stop offset="0.322115" stopColor="#7D9F00" />
                <stop offset="1" stopColor="#D8FF4D" />
              </linearGradient>
            </defs>
          </motion.svg>
        )}

        {id === 2 && (
          <motion.svg
            className="comment-progress"
            initial="hidden"
            whileInView="visible"
            viewBox="0 0 234 234"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1410134686">
              <mask
                id="mask0_2091_1045"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={234}
                height={234}
              >
                <rect
                  id="Rectangle 801"
                  x="0.539062"
                  width="233.258"
                  height="233.258"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_2091_1045)">
                <g id="Group 794" filter="url(#filter0_d_2091_1045)">
                  <path
                    id="Ellipse 271"
                    d="M117.167 29.6602C165.2 29.6602 204.139 68.5987 204.139 116.632C204.139 164.665 165.2 203.604 117.167 203.604C69.1338 203.603 30.1953 164.665 30.1953 116.632C30.1954 68.5988 69.1339 29.6603 117.167 29.6602Z"
                    fill="#F6F8FF"
                    stroke="#E1E7F4"
                  />
                  <circle
                    id="Ellipse 264"
                    cx="117.167"
                    cy="116.632"
                    r="74.7487"
                    fill="#E4ECFF"
                  />
                  <circle
                    id="Ellipse 266"
                    cx="117.168"
                    cy="116.629"
                    r="68.3871"
                    fill="url(#paint0_linear_2091_1045)"
                  />
                  <g id="Ellipse 270" filter="url(#filter1_dii_2091_1045)">
                    <circle
                      cx="117.166"
                      cy="116.635"
                      r="50.8927"
                      fill="url(#paint1_linear_2091_1045)"
                    />
                    <circle
                      cx="117.166"
                      cy="116.635"
                      r="50.7427"
                      stroke="white"
                      strokeWidth="0.3"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="Group 805" transform="rotate(270 117 117)">
                    <rect
                      id="Rectangle 696"
                      x="102.883"
                      y="104.91"
                      width="26.6272"
                      height="23.4464"
                      rx={5}
                      stroke="#789114"
                      strokeWidth={2}
                    />
                    <rect
                      id="Rectangle 697"
                      x="102.28"
                      y="111.464"
                      width="27.832"
                      height="0.795199"
                      rx="0.3976"
                      stroke="#789114"
                      strokeWidth="0.795199"
                    />
                    <rect
                      id="Rectangle 698"
                      x="118.98"
                      y="121.804"
                      width="5.56639"
                      height="0.795199"
                      rx="0.3976"
                      stroke="#789114"
                      strokeWidth="0.795199"
                    />
                  </g>
                </g>
              </g>
              <motion.circle
                cx="50%"
                cy="50%"
                r={r}
                fill="transparent"
                stroke="url(#paint2_linear_2091_1020)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                variants={draw}
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2091_1045"
                x="-0.304688"
                y="5.16016"
                width="234.943"
                height="234.945"
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
                <feOffset dy={6} />
                <feGaussianBlur stdDeviation={15} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1045"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1045"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dii_2091_1045"
                x="58.2734"
                y="59.7422"
                width="121.785"
                height="121.785"
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
                <feOffset dx={2} dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.760488 0 0 0 0 0.815807 0 0 0 0 0.905371 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1045"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1045"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_2091_1045"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={-4} />
                <feGaussianBlur stdDeviation={6} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_2091_1045"
                  result="effect3_innerShadow_2091_1045"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2091_1045"
                x1="117.168"
                y1="48.2422"
                x2="143.808"
                y2="185.016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F8FAFF" />
                <stop offset={1} stopColor="#E9ECFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2091_1045"
                x1="97.6838"
                y1="75.6822"
                x2="133.07"
                y2="151.226"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset={1} stopColor="#DAE8FF" />
              </linearGradient>
            </defs>
          </motion.svg>
        )}

        {id === 3 && (
          <motion.svg
            className="comment-progress"
            initial="hidden"
            whileInView="visible"
            viewBox="0 0 234 234"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1410134687">
              <mask
                id="mask0_2091_1070"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={234}
                height={234}
              >
                <rect
                  id="Rectangle 801"
                  x="0.203125"
                  width="233.257"
                  height="233.257"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_2091_1070)" transform="rotate(270 117 117)">
                <g id="Group 794" filter="url(#filter0_d_2091_1070)">
                  <path
                    id="Ellipse 271"
                    d="M116.831 29.6562C164.864 29.6563 203.803 68.595 203.803 116.628C203.803 164.661 164.864 203.6 116.831 203.6C68.7981 203.6 29.8595 164.661 29.8594 116.628C29.8594 68.5949 68.798 29.6562 116.831 29.6562Z"
                    fill="#F6F8FF"
                    stroke="#E1E7F4"
                  />
                  <circle
                    id="Ellipse 264"
                    cx="116.83"
                    cy="116.631"
                    r="74.7484"
                    fill="#E4ECFF"
                  />
                  <circle
                    id="Ellipse 266"
                    cx="116.832"
                    cy="116.629"
                    r="68.3868"
                    fill="url(#paint0_linear_2091_1070)"
                  />
                  <g id="Ellipse 270" filter="url(#filter1_dii_2091_1070)">
                    <circle
                      cx="116.83"
                      cy="116.627"
                      r="50.8925"
                      fill="url(#paint1_linear_2091_1070)"
                    />
                    <circle
                      cx="116.83"
                      cy="116.627"
                      r="50.7425"
                      stroke="white"
                      strokeWidth="0.3"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="Frame" clipPath="url(#clip0_2091_1070)">
                    <path
                      id="Vector"
                      d="M115.861 104.156V129.102"
                      stroke="#789114"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M122.097 106.426C122.097 106.426 116.411 106.426 113.593 106.426C110.775 106.426 108.49 108.71 108.49 111.528C108.49 114.346 110.775 116.631 113.593 116.631"
                      stroke="#789114"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M109.625 126.834C109.625 126.834 115.311 126.834 118.129 126.834C120.947 126.834 123.232 124.549 123.232 121.731C123.232 118.913 120.947 116.629 118.129 116.629H113.594"
                      stroke="#789114"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
              <motion.circle
                cx="50%"
                cy="50%"
                r={r}
                fill="transparent"
                stroke="url(#paint2_linear_2091_1020)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                variants={draw}
                whileInView={{ strokeDashoffset }}
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2091_1070"
                x="-0.640625"
                y="5.15625"
                width="234.943"
                height="234.941"
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
                <feOffset dy={6} />
                <feGaussianBlur stdDeviation={15} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1070"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1070"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dii_2091_1070"
                x="57.9375"
                y="59.7344"
                width="121.785"
                height="121.785"
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
                <feOffset dx={2} dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.760488 0 0 0 0 0.815807 0 0 0 0 0.905371 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1070"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1070"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_2091_1070"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={-4} />
                <feGaussianBlur stdDeviation={6} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_2091_1070"
                  result="effect3_innerShadow_2091_1070"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2091_1070"
                x1="116.832"
                y1="48.2422"
                x2="143.471"
                y2="185.016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F8FAFF" />
                <stop offset={1} stopColor="#E9ECFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2091_1070"
                x1="97.3477"
                y1="75.6743"
                x2="132.734"
                y2="151.218"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset={1} stopColor="#DAE8FF" />
              </linearGradient>
              <clipPath id="clip0_2091_1070">
                <rect
                  width="27.2134"
                  height="27.2134"
                  fill="white"
                  transform="translate(102.254 103.023)"
                />
              </clipPath>
            </defs>
          </motion.svg>
        )}
      </div>
    </>
  );
};

export const MinProgressItem = ({ list }: { list: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-[10px] md:gap-[30px]">
      {list.map((i, index) => (
        <FadeIn key={i.id} delay={index * 0.1}>
          <div
            key={i.id}
            className="h-full flex flex-col justify-between md:min-h-[121px] rounded-2xl  bg-[#21251C] p-[20px] md:px-[24px] md:py-[15px]"
          >
            <div className="mb-[12px]">{i.title}</div>
            <div className="flex items-center">
              <MinProgress value={i.count} />
              <span className="px-[12px] md:px-[14px] font-medium text-[22px] md:text-[28px]">
                {i.count}%
              </span>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export const SurveyItem = ({ id }: { id: string }) => {
  const draw: Variants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      },
    },
  };
  return (
    <>
      {id === "Indonesia" && (
        <motion.svg
          initial="hidden"
          whileInView="visible"
          viewBox="0 0 491 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 1410135536">
            <foreignObject x={0} y={0} width={0} height={0}>
              <div
                style={{
                  backdropFilter: "blur(20px)",
                  clipPath: "url(#bgblur_0_4733_42494_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              />
            </foreignObject>
            <g id="Rectangle 569" data-figma-bg-blur-radius={40}>
              <path
                d="M1 21C1 9.9543 9.9543 1 21 1H469.063C480.109 1 489.063 9.95431 489.063 21V234.181C489.063 245.227 480.109 254.181 469.063 254.181H21C9.95429 254.181 1 245.227 1 234.181V21Z"
                fill="#21251C"
              />
              <path
                d="M469.063 0.5C480.385 0.500089 489.563 9.67822 489.563 21V234.181C489.563 245.502 480.385 254.681 469.063 254.681H21C9.67816 254.681 0.5 245.503 0.5 234.181V21C0.5 9.67816 9.67816 0.5 21 0.5H469.063Z"
                stroke="white"
                strokeOpacity="0.3"
              />
            </g>
            <g id="Mask group" opacity="0.26">
              <mask
                id="mask0_4733_42494"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={1}
                y={1}
                width={489}
                height={254}
              >
                <path
                  id="Rectangle 570"
                  d="M1 17C1 8.16345 8.16344 1 17 1H473.063C481.9 1 489.063 8.16344 489.063 17V238.181C489.063 247.018 481.9 254.181 473.063 254.181H17C8.16343 254.181 1 247.018 1 238.181V17Z"
                  fill="#1C2025"
                />
              </mask>
              <g mask="url(#mask0_4733_42494)">
                <g id="Group 772">
                  <path
                    id="Ellipse 252"
                    opacity="0.6"
                    d="M454.621 149.164C506.603 149.164 548.661 189.321 548.661 238.756C548.661 288.191 506.603 328.347 454.621 328.347C402.639 328.346 360.582 288.191 360.582 238.756C360.582 189.321 402.639 149.164 454.621 149.164Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint0_linear_4733_42494)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 254"
                    opacity="0.3"
                    d="M550.074 25.7344C602.057 25.7344 644.114 65.8909 644.114 115.326C644.114 164.761 602.056 204.917 550.074 204.917C498.092 204.917 456.035 164.761 456.035 115.326C456.035 65.891 498.092 25.7346 550.074 25.7344Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint1_linear_4733_42494)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 253"
                    opacity="0.6"
                    d="M35.4453 149.164C87.4276 149.164 129.485 189.321 129.485 238.756C129.485 288.191 87.4275 328.347 35.4453 328.347C-16.5366 328.346 -58.5935 288.191 -58.5938 238.756C-58.5938 189.321 -16.5368 149.164 35.4453 149.164Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint2_linear_4733_42494)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 255"
                    opacity="0.3"
                    d="M-60.0117 25.7344C-8.0294 25.7344 34.0283 65.8909 34.0283 115.326C34.0281 164.761 -8.02955 204.917 -60.0117 204.917C-111.994 204.917 -154.051 164.761 -154.051 115.326C-154.051 65.891 -111.994 25.7346 -60.0117 25.7344Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint3_linear_4733_42494)"
                    strokeWidth={2}
                  />
                  <g id="Ellipse 250" filter="url(#filter0_d_4733_42494)">
                    <ellipse
                      cx="159.955"
                      cy="52.8225"
                      rx="107.49"
                      ry="102.459"
                      fill="url(#paint4_linear_4733_42494)"
                      fillOpacity="0.5"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M159.955 -48.6367C218.814 -48.6367 266.445 -3.16735 266.445 52.8223C266.445 108.812 218.814 154.282 159.955 154.282C101.096 154.282 53.4648 108.812 53.4648 52.8223C53.465 -3.16738 101.097 -48.6367 159.955 -48.6367Z"
                      stroke="url(#paint5_linear_4733_42494)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g id="Ellipse 251" filter="url(#filter1_d_4733_42494)">
                    <ellipse
                      cx="330.107"
                      cy="52.8225"
                      rx="107.49"
                      ry="102.459"
                      fill="url(#paint6_linear_4733_42494)"
                      fillOpacity="0.5"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M330.107 -48.6367C388.966 -48.6367 436.598 -3.16735 436.598 52.8223C436.598 108.812 388.966 154.282 330.107 154.282C271.249 154.282 223.617 108.812 223.617 52.8223C223.617 -3.16738 271.249 -48.6367 330.107 -48.6367Z"
                      stroke="url(#paint7_linear_4733_42494)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g id="Ellipse 249" filter="url(#filter2_d_4733_42494)">
                    <ellipse
                      cx="246.276"
                      cy="194.845"
                      rx="97.5297"
                      ry="93.3605"
                      fill="url(#paint8_linear_4733_42494)"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M246.275 102.484C299.629 102.484 342.806 143.876 342.806 194.845C342.806 245.813 299.629 287.205 246.275 287.205C192.922 287.205 149.746 245.813 149.746 194.845C149.746 143.876 192.922 102.485 246.275 102.484Z"
                      stroke="url(#paint9_linear_4733_42494)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                </g>
              </g>
            </g>
            <path
              id="PÃ¡gina de inicio"
              opacity="0.9"
              d="M217.038 168.648C214.904 167.539 213.838 165.821 213.838 163.496C213.838 162.344 214.126 161.299 214.702 160.36C215.299 159.4 216.184 158.643 217.358 158.088C218.552 157.512 220.003 157.224 221.71 157.224C223.416 157.224 224.856 157.512 226.03 158.088C227.224 158.643 228.11 159.4 228.686 160.36C229.283 161.299 229.582 162.344 229.582 163.496C229.582 164.669 229.294 165.704 228.718 166.6C228.142 167.475 227.374 168.157 226.414 168.648C227.587 169.16 228.504 169.907 229.166 170.888C229.827 171.869 230.158 173.032 230.158 174.376C230.158 175.827 229.784 177.096 229.038 178.184C228.312 179.251 227.31 180.072 226.03 180.648C224.75 181.224 223.31 181.512 221.71 181.512C220.11 181.512 218.67 181.224 217.39 180.648C216.131 180.072 215.128 179.251 214.382 178.184C213.656 177.096 213.294 175.827 213.294 174.376C213.294 173.032 213.624 171.869 214.286 170.888C214.947 169.885 215.864 169.139 217.038 168.648ZM225.23 164.136C225.23 163.091 224.91 162.28 224.27 161.704C223.651 161.128 222.798 160.84 221.71 160.84C220.643 160.84 219.79 161.128 219.15 161.704C218.531 162.28 218.222 163.101 218.222 164.168C218.222 165.128 218.542 165.896 219.182 166.472C219.843 167.048 220.686 167.336 221.71 167.336C222.734 167.336 223.576 167.048 224.238 166.472C224.899 165.875 225.23 165.096 225.23 164.136ZM221.71 170.6C220.494 170.6 219.502 170.909 218.734 171.528C217.987 172.147 217.614 173.032 217.614 174.184C217.614 175.251 217.976 176.125 218.702 176.808C219.448 177.469 220.451 177.8 221.71 177.8C222.968 177.8 223.96 177.459 224.686 176.776C225.411 176.093 225.774 175.229 225.774 174.184C225.774 173.053 225.4 172.179 224.654 171.56C223.907 170.92 222.926 170.6 221.71 170.6ZM238.88 174.44C239.051 175.379 239.435 176.104 240.032 176.616C240.651 177.107 241.472 177.352 242.496 177.352C243.819 177.352 244.779 176.808 245.376 175.72C245.973 174.611 246.272 172.755 246.272 170.152C245.781 170.835 245.088 171.368 244.192 171.752C243.317 172.136 242.368 172.328 241.344 172.328C239.979 172.328 238.741 172.051 237.632 171.496C236.544 170.92 235.68 170.077 235.04 168.968C234.4 167.837 234.08 166.472 234.08 164.872C234.08 162.504 234.784 160.627 236.192 159.24C237.6 157.832 239.52 157.128 241.952 157.128C244.981 157.128 247.115 158.099 248.352 160.04C249.611 161.981 250.24 164.904 250.24 168.808C250.24 171.581 249.995 173.853 249.504 175.624C249.035 177.395 248.213 178.739 247.04 179.656C245.888 180.573 244.309 181.032 242.304 181.032C240.725 181.032 239.381 180.733 238.272 180.136C237.163 179.517 236.309 178.717 235.712 177.736C235.136 176.733 234.805 175.635 234.72 174.44H238.88ZM242.272 168.68C243.381 168.68 244.256 168.339 244.896 167.656C245.536 166.973 245.856 166.056 245.856 164.904C245.856 163.645 245.515 162.675 244.832 161.992C244.171 161.288 243.264 160.936 242.112 160.936C240.96 160.936 240.043 161.299 239.36 162.024C238.699 162.728 238.368 163.667 238.368 164.84C238.368 165.971 238.688 166.899 239.328 167.624C239.989 168.328 240.971 168.68 242.272 168.68ZM253.215 163.4C253.215 161.779 253.685 160.509 254.623 159.592C255.583 158.675 256.81 158.216 258.303 158.216C259.797 158.216 261.013 158.675 261.951 159.592C262.911 160.509 263.391 161.779 263.391 163.4C263.391 165.043 262.911 166.323 261.951 167.24C261.013 168.157 259.797 168.616 258.303 168.616C256.81 168.616 255.583 168.157 254.623 167.24C253.685 166.323 253.215 165.043 253.215 163.4ZM273.759 158.6L261.183 181H256.831L269.375 158.6H273.759ZM258.271 160.904C257.098 160.904 256.511 161.736 256.511 163.4C256.511 165.085 257.098 165.928 258.271 165.928C258.847 165.928 259.295 165.725 259.615 165.32C259.935 164.893 260.095 164.253 260.095 163.4C260.095 161.736 259.487 160.904 258.271 160.904ZM267.263 176.168C267.263 174.525 267.733 173.256 268.671 172.36C269.631 171.443 270.858 170.984 272.351 170.984C273.845 170.984 275.05 171.443 275.967 172.36C276.906 173.256 277.375 174.525 277.375 176.168C277.375 177.811 276.906 179.091 275.967 180.008C275.05 180.925 273.845 181.384 272.351 181.384C270.837 181.384 269.61 180.925 268.671 180.008C267.733 179.091 267.263 177.811 267.263 176.168ZM272.319 173.672C271.103 173.672 270.495 174.504 270.495 176.168C270.495 177.853 271.103 178.696 272.319 178.696C273.514 178.696 274.111 177.853 274.111 176.168C274.111 174.504 273.514 173.672 272.319 173.672Z"
              fill="white"
            />
            <path
              id="PÃ¡gina de inicio_2"
              d="M32.5903 53.8884C31.5637 53.8884 30.6397 53.7124 29.8183 53.3604C28.997 52.9937 28.3517 52.4804 27.8823 51.8204C27.413 51.1604 27.1783 50.3904 27.1783 49.5104H29.8623C29.921 50.1704 30.1777 50.713 30.6323 51.1384C31.1017 51.5637 31.7543 51.7764 32.5903 51.7764C33.4557 51.7764 34.1303 51.571 34.6143 51.1604C35.0983 50.735 35.3403 50.1924 35.3403 49.5324C35.3403 49.019 35.1863 48.601 34.8783 48.2784C34.585 47.9557 34.211 47.7064 33.7563 47.5304C33.3163 47.3544 32.7003 47.1637 31.9083 46.9584C30.911 46.6944 30.097 46.4304 29.4663 46.1664C28.8503 45.8877 28.3223 45.4624 27.8823 44.8904C27.4423 44.3184 27.2223 43.5557 27.2223 42.6024C27.2223 41.7224 27.4423 40.9524 27.8823 40.2924C28.3223 39.6324 28.9383 39.1264 29.7303 38.7744C30.5223 38.4224 31.439 38.2464 32.4803 38.2464C33.9617 38.2464 35.1717 38.6204 36.1103 39.3684C37.0637 40.1017 37.5917 41.1137 37.6943 42.4044H34.9223C34.8783 41.847 34.6143 41.3704 34.1303 40.9744C33.6463 40.5784 33.0083 40.3804 32.2163 40.3804C31.4977 40.3804 30.911 40.5637 30.4563 40.9304C30.0017 41.297 29.7743 41.825 29.7743 42.5144C29.7743 42.9837 29.9137 43.3724 30.1923 43.6804C30.4857 43.9737 30.8523 44.2084 31.2923 44.3844C31.7323 44.5604 32.3337 44.751 33.0963 44.9564C34.1083 45.235 34.9297 45.5137 35.5603 45.7924C36.2057 46.071 36.7483 46.5037 37.1883 47.0904C37.643 47.6624 37.8703 48.4324 37.8703 49.4004C37.8703 50.1777 37.6577 50.911 37.2323 51.6004C36.8217 52.2897 36.213 52.847 35.4063 53.2724C34.6143 53.683 33.6757 53.8884 32.5903 53.8884ZM55.5037 41.4144C56.457 41.4144 57.3077 41.6124 58.0557 42.0084C58.8184 42.4044 59.4124 42.991 59.8377 43.7684C60.2777 44.5457 60.4977 45.4844 60.4977 46.5844V53.7344H58.0117V46.9584C58.0117 45.873 57.7404 45.0444 57.1977 44.4724C56.655 43.8857 55.9144 43.5924 54.9757 43.5924C54.037 43.5924 53.289 43.8857 52.7317 44.4724C52.189 45.0444 51.9177 45.873 51.9177 46.9584V53.7344H49.4317V46.9584C49.4317 45.873 49.1604 45.0444 48.6177 44.4724C48.075 43.8857 47.3344 43.5924 46.3957 43.5924C45.457 43.5924 44.709 43.8857 44.1517 44.4724C43.609 45.0444 43.3377 45.873 43.3377 46.9584V53.7344H40.8297V41.6124H43.3377V42.9984C43.7484 42.4997 44.269 42.111 44.8997 41.8324C45.5304 41.5537 46.205 41.4144 46.9237 41.4144C47.8917 41.4144 48.757 41.6197 49.5197 42.0304C50.2824 42.441 50.869 43.035 51.2797 43.8124C51.6464 43.079 52.2184 42.4997 52.9957 42.0744C53.773 41.6344 54.609 41.4144 55.5037 41.4144ZM62.8531 47.6184C62.8531 46.401 63.1024 45.323 63.6011 44.3844C64.1144 43.4457 64.8037 42.7197 65.6691 42.2064C66.5491 41.6784 67.5171 41.4144 68.5731 41.4144C69.5264 41.4144 70.3551 41.605 71.0591 41.9864C71.7777 42.353 72.3497 42.815 72.7751 43.3724V41.6124H75.3051V53.7344H72.7751V51.9304C72.3497 52.5024 71.7704 52.979 71.0371 53.3604C70.3037 53.7417 69.4677 53.9324 68.5291 53.9324C67.4877 53.9324 66.5344 53.6684 65.6691 53.1404C64.8037 52.5977 64.1144 51.8497 63.6011 50.8964C63.1024 49.9284 62.8531 48.8357 62.8531 47.6184ZM72.7751 47.6624C72.7751 46.8264 72.5991 46.1004 72.2471 45.4844C71.9097 44.8684 71.4624 44.399 70.9051 44.0764C70.3477 43.7537 69.7464 43.5924 69.1011 43.5924C68.4557 43.5924 67.8544 43.7537 67.2971 44.0764C66.7397 44.3844 66.2851 44.8464 65.9331 45.4624C65.5957 46.0637 65.4271 46.7824 65.4271 47.6184C65.4271 48.4544 65.5957 49.1877 65.9331 49.8184C66.2851 50.449 66.7397 50.933 67.2971 51.2704C67.8691 51.593 68.4704 51.7544 69.1011 51.7544C69.7464 51.7544 70.3477 51.593 70.9051 51.2704C71.4624 50.9477 71.9097 50.4784 72.2471 49.8624C72.5991 49.2317 72.7751 48.4984 72.7751 47.6624ZM81.1072 43.3724C81.4739 42.7564 81.9579 42.2797 82.5592 41.9424C83.1752 41.5904 83.9012 41.4144 84.7372 41.4144V44.0104H84.0992C83.1166 44.0104 82.3686 44.2597 81.8552 44.7584C81.3566 45.257 81.1072 46.1224 81.1072 47.3544V53.7344H78.5992V41.6124H81.1072V43.3724ZM89.9686 43.6584V50.3684C89.9686 50.823 90.0712 51.153 90.2766 51.3584C90.4966 51.549 90.8632 51.6444 91.3766 51.6444H92.9166V53.7344H90.9366C89.8072 53.7344 88.9419 53.4704 88.3406 52.9424C87.7392 52.4144 87.4386 51.5564 87.4386 50.3684V43.6584H86.0086V41.6124H87.4386V38.5984H89.9686V41.6124H92.9166V43.6584H89.9686ZM97.7361 43.3944C98.1615 42.837 98.7408 42.3677 99.4741 41.9864C100.207 41.605 101.036 41.4144 101.96 41.4144C103.016 41.4144 103.977 41.6784 104.842 42.2064C105.722 42.7197 106.411 43.4457 106.91 44.3844C107.409 45.323 107.658 46.401 107.658 47.6184C107.658 48.8357 107.409 49.9284 106.91 50.8964C106.411 51.8497 105.722 52.5977 104.842 53.1404C103.977 53.6684 103.016 53.9324 101.96 53.9324C101.036 53.9324 100.215 53.749 99.4961 53.3824C98.7775 53.001 98.1908 52.5317 97.7361 51.9744V59.4984H95.2281V41.6124H97.7361V43.3944ZM105.106 47.6184C105.106 46.7824 104.93 46.0637 104.578 45.4624C104.241 44.8464 103.786 44.3844 103.214 44.0764C102.657 43.7537 102.055 43.5924 101.41 43.5924C100.779 43.5924 100.178 43.7537 99.6061 44.0764C99.0488 44.399 98.5941 44.8684 98.2421 45.4844C97.9048 46.1004 97.7361 46.8264 97.7361 47.6624C97.7361 48.4984 97.9048 49.2317 98.2421 49.8624C98.5941 50.4784 99.0488 50.9477 99.6061 51.2704C100.178 51.593 100.779 51.7544 101.41 51.7544C102.055 51.7544 102.657 51.593 103.214 51.2704C103.786 50.933 104.241 50.449 104.578 49.8184C104.93 49.1877 105.106 48.4544 105.106 47.6184ZM116.408 41.4144C117.332 41.4144 118.154 41.6124 118.872 42.0084C119.606 42.4044 120.178 42.991 120.588 43.7684C121.014 44.5457 121.226 45.4844 121.226 46.5844V53.7344H118.74V46.9584C118.74 45.873 118.469 45.0444 117.926 44.4724C117.384 43.8857 116.643 43.5924 115.704 43.5924C114.766 43.5924 114.018 43.8857 113.46 44.4724C112.918 45.0444 112.646 45.873 112.646 46.9584V53.7344H110.138V37.4544H112.646V43.0204C113.072 42.507 113.607 42.111 114.252 41.8324C114.912 41.5537 115.631 41.4144 116.408 41.4144ZM129.683 53.9324C128.539 53.9324 127.505 53.6757 126.581 53.1624C125.657 52.6344 124.931 51.901 124.403 50.9624C123.875 50.009 123.611 48.909 123.611 47.6624C123.611 46.4304 123.883 45.3377 124.425 44.3844C124.968 43.431 125.709 42.6977 126.647 42.1844C127.586 41.671 128.635 41.4144 129.793 41.4144C130.952 41.4144 132.001 41.671 132.939 42.1844C133.878 42.6977 134.619 43.431 135.161 44.3844C135.704 45.3377 135.975 46.4304 135.975 47.6624C135.975 48.8944 135.697 49.987 135.139 50.9404C134.582 51.8937 133.819 52.6344 132.851 53.1624C131.898 53.6757 130.842 53.9324 129.683 53.9324ZM129.683 51.7544C130.329 51.7544 130.93 51.6004 131.487 51.2924C132.059 50.9844 132.521 50.5224 132.873 49.9064C133.225 49.2904 133.401 48.5424 133.401 47.6624C133.401 46.7824 133.233 46.0417 132.895 45.4404C132.558 44.8244 132.111 44.3624 131.553 44.0544C130.996 43.7464 130.395 43.5924 129.749 43.5924C129.104 43.5924 128.503 43.7464 127.945 44.0544C127.403 44.3624 126.97 44.8244 126.647 45.4404C126.325 46.0417 126.163 46.7824 126.163 47.6624C126.163 48.9677 126.493 49.9797 127.153 50.6984C127.828 51.4024 128.671 51.7544 129.683 51.7544ZM144.571 41.4144C145.524 41.4144 146.375 41.6124 147.123 42.0084C147.885 42.4044 148.479 42.991 148.905 43.7684C149.33 44.5457 149.543 45.4844 149.543 46.5844V53.7344H147.057V46.9584C147.057 45.873 146.785 45.0444 146.243 44.4724C145.7 43.8857 144.959 43.5924 144.021 43.5924C143.082 43.5924 142.334 43.8857 141.777 44.4724C141.234 45.0444 140.963 45.873 140.963 46.9584V53.7344H138.455V41.6124H140.963V42.9984C141.373 42.4997 141.894 42.111 142.525 41.8324C143.17 41.5537 143.852 41.4144 144.571 41.4144ZM163.852 47.3764C163.852 47.831 163.822 48.2417 163.764 48.6084H154.502C154.575 49.5764 154.934 50.3537 155.58 50.9404C156.225 51.527 157.017 51.8204 157.956 51.8204C159.305 51.8204 160.258 51.2557 160.816 50.1264H163.522C163.155 51.241 162.488 52.1577 161.52 52.8764C160.566 53.5804 159.378 53.9324 157.956 53.9324C156.797 53.9324 155.756 53.6757 154.832 53.1624C153.922 52.6344 153.204 51.901 152.676 50.9624C152.162 50.009 151.906 48.909 151.906 47.6624C151.906 46.4157 152.155 45.323 152.654 44.3844C153.167 43.431 153.878 42.6977 154.788 42.1844C155.712 41.671 156.768 41.4144 157.956 41.4144C159.1 41.4144 160.119 41.6637 161.014 42.1624C161.908 42.661 162.605 43.365 163.104 44.2744C163.602 45.169 163.852 46.203 163.852 47.3764ZM161.234 46.5844C161.219 45.6604 160.889 44.9197 160.244 44.3624C159.598 43.805 158.799 43.5264 157.846 43.5264C156.98 43.5264 156.24 43.805 155.624 44.3624C155.008 44.905 154.641 45.6457 154.524 46.5844H161.234ZM174.543 43.3944C174.968 42.837 175.547 42.3677 176.281 41.9864C177.014 41.605 177.843 41.4144 178.767 41.4144C179.823 41.4144 180.783 41.6784 181.649 42.2064C182.529 42.7197 183.218 43.4457 183.717 44.3844C184.215 45.323 184.465 46.401 184.465 47.6184C184.465 48.8357 184.215 49.9284 183.717 50.8964C183.218 51.8497 182.529 52.5977 181.649 53.1404C180.783 53.6684 179.823 53.9324 178.767 53.9324C177.843 53.9324 177.021 53.749 176.303 53.3824C175.584 53.001 174.997 52.5317 174.543 51.9744V59.4984H172.035V41.6124H174.543V43.3944ZM181.913 47.6184C181.913 46.7824 181.737 46.0637 181.385 45.4624C181.047 44.8464 180.593 44.3844 180.021 44.0764C179.463 43.7537 178.862 43.5924 178.217 43.5924C177.586 43.5924 176.985 43.7537 176.413 44.0764C175.855 44.399 175.401 44.8684 175.049 45.4844C174.711 46.1004 174.543 46.8264 174.543 47.6624C174.543 48.4984 174.711 49.2317 175.049 49.8624C175.401 50.4784 175.855 50.9477 176.413 51.2704C176.985 51.593 177.586 51.7544 178.217 51.7544C178.862 51.7544 179.463 51.593 180.021 51.2704C180.593 50.933 181.047 50.449 181.385 49.8184C181.737 49.1877 181.913 48.4544 181.913 47.6184ZM198.055 47.3764C198.055 47.831 198.026 48.2417 197.967 48.6084H188.705C188.778 49.5764 189.138 50.3537 189.783 50.9404C190.428 51.527 191.22 51.8204 192.159 51.8204C193.508 51.8204 194.462 51.2557 195.019 50.1264H197.725C197.358 51.241 196.691 52.1577 195.723 52.8764C194.77 53.5804 193.582 53.9324 192.159 53.9324C191 53.9324 189.959 53.6757 189.035 53.1624C188.126 52.6344 187.407 51.901 186.879 50.9624C186.366 50.009 186.109 48.909 186.109 47.6624C186.109 46.4157 186.358 45.323 186.857 44.3844C187.37 43.431 188.082 42.6977 188.991 42.1844C189.915 41.671 190.971 41.4144 192.159 41.4144C193.303 41.4144 194.322 41.6637 195.217 42.1624C196.112 42.661 196.808 43.365 197.307 44.2744C197.806 45.169 198.055 46.203 198.055 47.3764ZM195.437 46.5844C195.422 45.6604 195.092 44.9197 194.447 44.3624C193.802 43.805 193.002 43.5264 192.049 43.5264C191.184 43.5264 190.443 43.805 189.827 44.3624C189.211 44.905 188.844 45.6457 188.727 46.5844H195.437ZM206.639 41.4144C207.592 41.4144 208.443 41.6124 209.191 42.0084C209.954 42.4044 210.548 42.991 210.973 43.7684C211.398 44.5457 211.611 45.4844 211.611 46.5844V53.7344H209.125V46.9584C209.125 45.873 208.854 45.0444 208.311 44.4724C207.768 43.8857 207.028 43.5924 206.089 43.5924C205.15 43.5924 204.402 43.8857 203.845 44.4724C203.302 45.0444 203.031 45.873 203.031 46.9584V53.7344H200.523V41.6124H203.031V42.9984C203.442 42.4997 203.962 42.111 204.593 41.8324C205.238 41.5537 205.92 41.4144 206.639 41.4144ZM225.92 47.3764C225.92 47.831 225.891 48.2417 225.832 48.6084H216.57C216.643 49.5764 217.003 50.3537 217.648 50.9404C218.293 51.527 219.085 51.8204 220.024 51.8204C221.373 51.8204 222.327 51.2557 222.884 50.1264H225.59C225.223 51.241 224.556 52.1577 223.588 52.8764C222.635 53.5804 221.447 53.9324 220.024 53.9324C218.865 53.9324 217.824 53.6757 216.9 53.1624C215.991 52.6344 215.272 51.901 214.744 50.9624C214.231 50.009 213.974 48.909 213.974 47.6624C213.974 46.4157 214.223 45.323 214.722 44.3844C215.235 43.431 215.947 42.6977 216.856 42.1844C217.78 41.671 218.836 41.4144 220.024 41.4144C221.168 41.4144 222.187 41.6637 223.082 42.1624C223.977 42.661 224.673 43.365 225.172 44.2744C225.671 45.169 225.92 46.203 225.92 47.3764ZM223.302 46.5844C223.287 45.6604 222.957 44.9197 222.312 44.3624C221.667 43.805 220.867 43.5264 219.914 43.5264C219.049 43.5264 218.308 43.805 217.692 44.3624C217.076 44.905 216.709 45.6457 216.592 46.5844H223.302ZM231.314 43.6584V50.3684C231.314 50.823 231.417 51.153 231.622 51.3584C231.842 51.549 232.209 51.6444 232.722 51.6444H234.262V53.7344H232.282C231.153 53.7344 230.288 53.4704 229.686 52.9424C229.085 52.4144 228.784 51.5564 228.784 50.3684V43.6584H227.354V41.6124H228.784V38.5984H231.314V41.6124H234.262V43.6584H231.314ZM239.082 43.3724C239.448 42.7564 239.932 42.2797 240.534 41.9424C241.15 41.5904 241.876 41.4144 242.712 41.4144V44.0104H242.074C241.091 44.0104 240.343 44.2597 239.83 44.7584C239.331 45.257 239.082 46.1224 239.082 47.3544V53.7344H236.574V41.6124H239.082V43.3724ZM244.181 47.6184C244.181 46.401 244.431 45.323 244.929 44.3844C245.443 43.4457 246.132 42.7197 246.997 42.2064C247.877 41.6784 248.845 41.4144 249.901 41.4144C250.855 41.4144 251.683 41.605 252.387 41.9864C253.106 42.353 253.678 42.815 254.103 43.3724V41.6124H256.633V53.7344H254.103V51.9304C253.678 52.5024 253.099 52.979 252.365 53.3604C251.632 53.7417 250.796 53.9324 249.857 53.9324C248.816 53.9324 247.863 53.6684 246.997 53.1404C246.132 52.5977 245.443 51.8497 244.929 50.8964C244.431 49.9284 244.181 48.8357 244.181 47.6184ZM254.103 47.6624C254.103 46.8264 253.927 46.1004 253.575 45.4844C253.238 44.8684 252.791 44.399 252.233 44.0764C251.676 43.7537 251.075 43.5924 250.429 43.5924C249.784 43.5924 249.183 43.7537 248.625 44.0764C248.068 44.3844 247.613 44.8464 247.261 45.4624C246.924 46.0637 246.755 46.7824 246.755 47.6184C246.755 48.4544 246.924 49.1877 247.261 49.8184C247.613 50.449 248.068 50.933 248.625 51.2704C249.197 51.593 249.799 51.7544 250.429 51.7544C251.075 51.7544 251.676 51.593 252.233 51.2704C252.791 50.9477 253.238 50.4784 253.575 49.8624C253.927 49.2317 254.103 48.4984 254.103 47.6624ZM262.853 43.6584V50.3684C262.853 50.823 262.956 51.153 263.161 51.3584C263.381 51.549 263.748 51.6444 264.261 51.6444H265.801V53.7344H263.821C262.692 53.7344 261.827 53.4704 261.225 52.9424C260.624 52.4144 260.323 51.5564 260.323 50.3684V43.6584H258.893V41.6124H260.323V38.5984H262.853V41.6124H265.801V43.6584H262.853ZM269.389 40.0064C268.934 40.0064 268.553 39.8524 268.245 39.5444C267.937 39.2364 267.783 38.855 267.783 38.4004C267.783 37.9457 267.937 37.5644 268.245 37.2564C268.553 36.9484 268.934 36.7944 269.389 36.7944C269.829 36.7944 270.203 36.9484 270.511 37.2564C270.819 37.5644 270.973 37.9457 270.973 38.4004C270.973 38.855 270.819 39.2364 270.511 39.5444C270.203 39.8524 269.829 40.0064 269.389 40.0064ZM270.621 41.6124V53.7344H268.113V41.6124H270.621ZM279.172 53.9324C278.028 53.9324 276.994 53.6757 276.07 53.1624C275.146 52.6344 274.42 51.901 273.892 50.9624C273.364 50.009 273.1 48.909 273.1 47.6624C273.1 46.4304 273.371 45.3377 273.914 44.3844C274.456 43.431 275.197 42.6977 276.136 42.1844C277.074 41.671 278.123 41.4144 279.282 41.4144C280.44 41.4144 281.489 41.671 282.428 42.1844C283.366 42.6977 284.107 43.431 284.65 44.3844C285.192 45.3377 285.464 46.4304 285.464 47.6624C285.464 48.8944 285.185 49.987 284.628 50.9404C284.07 51.8937 283.308 52.6344 282.34 53.1624C281.386 53.6757 280.33 53.9324 279.172 53.9324ZM279.172 51.7544C279.817 51.7544 280.418 51.6004 280.976 51.2924C281.548 50.9844 282.01 50.5224 282.362 49.9064C282.714 49.2904 282.89 48.5424 282.89 47.6624C282.89 46.7824 282.721 46.0417 282.384 45.4404C282.046 44.8244 281.599 44.3624 281.042 44.0544C280.484 43.7464 279.883 43.5924 279.238 43.5924C278.592 43.5924 277.991 43.7464 277.434 44.0544C276.891 44.3624 276.458 44.8244 276.136 45.4404C275.813 46.0417 275.652 46.7824 275.652 47.6624C275.652 48.9677 275.982 49.9797 276.642 50.6984C277.316 51.4024 278.16 51.7544 279.172 51.7544ZM294.059 41.4144C295.012 41.4144 295.863 41.6124 296.611 42.0084C297.374 42.4044 297.968 42.991 298.393 43.7684C298.818 44.5457 299.031 45.4844 299.031 46.5844V53.7344H296.545V46.9584C296.545 45.873 296.274 45.0444 295.731 44.4724C295.188 43.8857 294.448 43.5924 293.509 43.5924C292.57 43.5924 291.822 43.8857 291.265 44.4724C290.722 45.0444 290.451 45.873 290.451 46.9584V53.7344H287.943V41.6124H290.451V42.9984C290.862 42.4997 291.382 42.111 292.013 41.8324C292.658 41.5537 293.34 41.4144 294.059 41.4144ZM310.453 43.3724C310.82 42.7564 311.304 42.2797 311.905 41.9424C312.521 41.5904 313.247 41.4144 314.083 41.4144V44.0104H313.445C312.462 44.0104 311.714 44.2597 311.201 44.7584C310.702 45.257 310.453 46.1224 310.453 47.3544V53.7344H307.945V41.6124H310.453V43.3724ZM315.552 47.6184C315.552 46.401 315.802 45.323 316.3 44.3844C316.814 43.4457 317.503 42.7197 318.368 42.2064C319.248 41.6784 320.216 41.4144 321.272 41.4144C322.226 41.4144 323.054 41.605 323.758 41.9864C324.477 42.353 325.049 42.815 325.474 43.3724V41.6124H328.004V53.7344H325.474V51.9304C325.049 52.5024 324.47 52.979 323.736 53.3604C323.003 53.7417 322.167 53.9324 321.228 53.9324C320.187 53.9324 319.234 53.6684 318.368 53.1404C317.503 52.5977 316.814 51.8497 316.3 50.8964C315.802 49.9284 315.552 48.8357 315.552 47.6184ZM325.474 47.6624C325.474 46.8264 325.298 46.1004 324.946 45.4844C324.609 44.8684 324.162 44.399 323.604 44.0764C323.047 43.7537 322.446 43.5924 321.8 43.5924C321.155 43.5924 320.554 43.7537 319.996 44.0764C319.439 44.3844 318.984 44.8464 318.632 45.4624C318.295 46.0637 318.126 46.7824 318.126 47.6184C318.126 48.4544 318.295 49.1877 318.632 49.8184C318.984 50.449 319.439 50.933 319.996 51.2704C320.568 51.593 321.17 51.7544 321.8 51.7544C322.446 51.7544 323.047 51.593 323.604 51.2704C324.162 50.9477 324.609 50.4784 324.946 49.8624C325.298 49.2317 325.474 48.4984 325.474 47.6624ZM334.224 43.6584V50.3684C334.224 50.823 334.327 51.153 334.532 51.3584C334.752 51.549 335.119 51.6444 335.632 51.6444H337.172V53.7344H335.192C334.063 53.7344 333.198 53.4704 332.596 52.9424C331.995 52.4144 331.694 51.5564 331.694 50.3684V43.6584H330.264V41.6124H331.694V38.5984H334.224V41.6124H337.172V43.6584H334.224ZM350.594 47.3764C350.594 47.831 350.565 48.2417 350.506 48.6084H341.244C341.317 49.5764 341.677 50.3537 342.322 50.9404C342.967 51.527 343.759 51.8204 344.698 51.8204C346.047 51.8204 347.001 51.2557 347.558 50.1264H350.264C349.897 51.241 349.23 52.1577 348.262 52.8764C347.309 53.5804 346.121 53.9324 344.698 53.9324C343.539 53.9324 342.498 53.6757 341.574 53.1624C340.665 52.6344 339.946 51.901 339.418 50.9624C338.905 50.009 338.648 48.909 338.648 47.6624C338.648 46.4157 338.897 45.323 339.396 44.3844C339.909 43.431 340.621 42.6977 341.53 42.1844C342.454 41.671 343.51 41.4144 344.698 41.4144C345.842 41.4144 346.861 41.6637 347.756 42.1624C348.651 42.661 349.347 43.365 349.846 44.2744C350.345 45.169 350.594 46.203 350.594 47.3764ZM347.976 46.5844C347.961 45.6604 347.631 44.9197 346.986 44.3624C346.341 43.805 345.541 43.5264 344.588 43.5264C343.723 43.5264 342.982 43.805 342.366 44.3624C341.75 44.905 341.383 45.6457 341.266 46.5844H347.976Z"
              fill="white"
            />
            <g id="Group 1410135537">
              <path
                id="Ellipse 322"
                d="M132 211C132 196.226 134.91 181.597 140.564 167.948C146.217 154.299 154.504 141.897 164.95 131.45C175.397 121.004 187.799 112.717 201.448 107.064C215.097 101.41 229.726 98.5 244.5 98.5C259.274 98.5 273.903 101.41 287.552 107.064C301.201 112.717 313.603 121.004 324.05 131.45C334.496 141.897 342.783 154.299 348.436 167.948C354.09 181.597 357 196.226 357 211"
                stroke="#F6F8FF"
                strokeWidth={22}
                strokeLinecap="round"
              />
              <path
                id="Ellipse 323"
                d="M132 211C132 196.226 134.91 181.597 140.564 167.948C146.217 154.299 154.504 141.897 164.95 131.45C175.397 121.004 187.799 112.717 201.448 107.064C215.097 101.41 229.726 98.5 244.5 98.5C259.274 98.5 273.903 101.41 287.552 107.064C301.201 112.717 313.603 121.004 324.05 131.45C334.496 141.897 342.783 154.299 348.436 167.948C354.09 181.597 357 196.226 357 211"
                stroke="#CEDAF1"
                strokeWidth={13}
                strokeLinecap="round"
              />
              <motion.path
                variants={draw}
                id="Ellipse 324"
                d="M132 211C132 196.226 134.91 181.597 140.563 167.948C146.217 154.299 154.504 141.897 164.95 131.45C175.397 121.004 187.799 112.717 201.448 107.064C215.097 101.41 229.726 98.5 244.5 98.5C259.273 98.5 273.902 101.41 287.552 107.064C301.201 112.717 313.603 121.004 324.049 131.45C334.496 141.897 342.782 154.299 348.436 167.948C350.665 173.33 352.468 178.864 353.834 184.5"
                stroke="url(#paint10_linear_4733_42494)"
                strokeWidth={11}
                strokeLinecap="round"
              />
            </g>
          </g>
          <defs>
            <clipPath
              id="bgblur_0_4733_42494_clip_path"
              transform="translate(0 0)"
            >
              <path d="M1 21C1 9.9543 9.9543 1 21 1H469.063C480.109 1 489.063 9.95431 489.063 21V234.181C489.063 245.227 480.109 254.181 469.063 254.181H21C9.95429 254.181 1 245.227 1 234.181V21Z" />
            </clipPath>
            <filter
              id="filter0_d_4733_42494"
              x="42.4648"
              y="-57.6367"
              width="234.98"
              height="224.918"
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
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={5} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4733_42494"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4733_42494"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_4733_42494"
              x="212.617"
              y="-57.6367"
              width="234.98"
              height="224.918"
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
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={5} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4733_42494"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4733_42494"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_4733_42494"
              x="128.746"
              y="81.4844"
              width="235.06"
              height="226.723"
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
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4733_42494"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4733_42494"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_4733_42494"
              x1="454.622"
              y1="148.164"
              x2="454.622"
              y2="329.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4733_42494"
              x1="550.075"
              y1="24.7344"
              x2="550.075"
              y2="205.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_4733_42494"
              x1="35.4458"
              y1="148.164"
              x2="35.4458"
              y2="329.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_4733_42494"
              x1="-60.0112"
              y1="24.7344"
              x2="-60.0112"
              y2="205.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_4733_42494"
              x1="159.955"
              y1="-1.76966"
              x2="159.955"
              y2="155.282"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} />
              <stop offset={1} stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_4733_42494"
              x1="189.996"
              y1="148.57"
              x2="162.958"
              y2="22.9912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint6_linear_4733_42494"
              x1="330.107"
              y1="-1.76966"
              x2="330.107"
              y2="155.282"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} />
              <stop offset={1} stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_4733_42494"
              x1="360.148"
              y1="148.57"
              x2="333.111"
              y2="22.9912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint8_linear_4733_42494"
              x1="246.276"
              y1="127.198"
              x2="246.276"
              y2="244.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint9_linear_4733_42494"
              x1="246.276"
              y1="164.384"
              x2="246.276"
              y2="257.349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_4733_42494"
              x1="296.991"
              y1={94}
              x2="135.908"
              y2="176.213"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D8FF4D" />
              <stop offset="0.677885" stopColor="#7D9F00" />
              <stop offset={1} stopColor="#3B4B00" />
            </linearGradient>
          </defs>
        </motion.svg>
      )}
      {id === "Mexico" && (
        <motion.svg
          initial="hidden"
          whileInView="visible"
          viewBox="0 0 489 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 1410135536">
            <rect
              id="Rectangle 569"
              width="488.063"
              height="253.181"
              rx={16}
              fill="#1C2025"
            />
            <g id="Mask group" opacity="0.26">
              <mask
                id="mask0_2218_333"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={489}
                height={254}
              >
                <path
                  id="Rectangle 570"
                  d="M0 16C0 7.16345 7.16344 0 16 0H472.063C480.9 0 488.063 7.16344 488.063 16V237.181C488.063 246.018 480.9 253.181 472.063 253.181H16C7.16343 253.181 0 246.018 0 237.181V16Z"
                  fill="#1C2025"
                />
              </mask>
              <g mask="url(#mask0_2218_333)">
                <g id="Group 772">
                  <path
                    id="Ellipse 252"
                    opacity="0.6"
                    d="M453.621 148.164C505.603 148.164 547.661 188.321 547.661 237.756C547.661 287.191 505.603 327.347 453.621 327.347C401.639 327.346 359.582 287.191 359.582 237.756C359.582 188.321 401.639 148.164 453.621 148.164Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint0_linear_2218_333)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 254"
                    opacity="0.3"
                    d="M549.074 24.7344C601.057 24.7344 643.114 64.8909 643.114 114.326C643.114 163.761 601.056 203.917 549.074 203.917C497.092 203.917 455.035 163.761 455.035 114.326C455.035 64.891 497.092 24.7346 549.074 24.7344Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint1_linear_2218_333)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 253"
                    opacity="0.6"
                    d="M34.4453 148.164C86.4276 148.164 128.485 188.321 128.485 237.756C128.485 287.191 86.4275 327.347 34.4453 327.347C-17.5366 327.346 -59.5935 287.191 -59.5938 237.756C-59.5938 188.321 -17.5368 148.164 34.4453 148.164Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint2_linear_2218_333)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 255"
                    opacity="0.3"
                    d="M-61.0117 24.7344C-9.0294 24.7344 33.0283 64.8909 33.0283 114.326C33.0281 163.761 -9.02955 203.917 -61.0117 203.917C-112.994 203.917 -155.051 163.761 -155.051 114.326C-155.051 64.891 -112.994 24.7346 -61.0117 24.7344Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint3_linear_2218_333)"
                    strokeWidth={2}
                  />
                  <g id="Ellipse 250" filter="url(#filter0_d_2218_333)">
                    <ellipse
                      cx="158.955"
                      cy="51.8225"
                      rx="107.49"
                      ry="102.459"
                      fill="url(#paint4_linear_2218_333)"
                      fillOpacity="0.5"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M158.955 -49.6367C217.814 -49.6367 265.445 -4.16735 265.445 51.8223C265.445 107.812 217.814 153.282 158.955 153.282C100.096 153.282 52.4648 107.812 52.4648 51.8223C52.465 -4.16738 100.097 -49.6367 158.955 -49.6367Z"
                      stroke="url(#paint5_linear_2218_333)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g id="Ellipse 251" filter="url(#filter1_d_2218_333)">
                    <ellipse
                      cx="329.107"
                      cy="51.8225"
                      rx="107.49"
                      ry="102.459"
                      fill="url(#paint6_linear_2218_333)"
                      fillOpacity="0.5"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M329.107 -49.6367C387.966 -49.6367 435.598 -4.16735 435.598 51.8223C435.598 107.812 387.966 153.282 329.107 153.282C270.249 153.282 222.617 107.812 222.617 51.8223C222.617 -4.16738 270.249 -49.6367 329.107 -49.6367Z"
                      stroke="url(#paint7_linear_2218_333)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g id="Ellipse 249" filter="url(#filter2_d_2218_333)">
                    <ellipse
                      cx="245.276"
                      cy="193.845"
                      rx="97.5297"
                      ry="93.3605"
                      fill="url(#paint8_linear_2218_333)"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M245.275 101.484C298.629 101.484 341.806 142.876 341.806 193.845C341.806 244.813 298.629 286.205 245.275 286.205C191.922 286.205 148.746 244.813 148.746 193.845C148.746 142.876 191.922 101.485 245.275 101.484Z"
                      stroke="url(#paint9_linear_2218_333)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                </g>
              </g>
            </g>
            <path
              id="PÃ¡gina de inicio"
              opacity="0.9"
              d="M205.099 173.44C205.269 174.379 205.653 175.104 206.251 175.616C206.869 176.107 207.691 176.352 208.715 176.352C210.037 176.352 210.997 175.808 211.595 174.72C212.192 173.611 212.491 171.755 212.491 169.152C212 169.835 211.307 170.368 210.411 170.752C209.536 171.136 208.587 171.328 207.563 171.328C206.197 171.328 204.96 171.051 203.851 170.496C202.763 169.92 201.899 169.077 201.259 167.968C200.619 166.837 200.299 165.472 200.299 163.872C200.299 161.504 201.003 159.627 202.411 158.24C203.819 156.832 205.739 156.128 208.171 156.128C211.2 156.128 213.333 157.099 214.571 159.04C215.829 160.981 216.459 163.904 216.459 167.808C216.459 170.581 216.213 172.853 215.723 174.624C215.253 176.395 214.432 177.739 213.259 178.656C212.107 179.573 210.528 180.032 208.523 180.032C206.944 180.032 205.6 179.733 204.491 179.136C203.381 178.517 202.528 177.717 201.931 176.736C201.355 175.733 201.024 174.635 200.939 173.44H205.099ZM208.491 167.68C209.6 167.68 210.475 167.339 211.115 166.656C211.755 165.973 212.075 165.056 212.075 163.904C212.075 162.645 211.733 161.675 211.051 160.992C210.389 160.288 209.483 159.936 208.331 159.936C207.179 159.936 206.261 160.299 205.579 161.024C204.917 161.728 204.587 162.667 204.587 163.84C204.587 164.971 204.907 165.899 205.547 166.624C206.208 167.328 207.189 167.68 208.491 167.68ZM234.794 160.064L226.282 180H221.738L230.314 160.576H219.37V156.736H234.794V160.064ZM239.973 180.224C239.163 180.224 238.491 179.979 237.957 179.488C237.445 178.976 237.189 178.347 237.189 177.6C237.189 176.853 237.445 176.235 237.957 175.744C238.491 175.232 239.163 174.976 239.973 174.976C240.763 174.976 241.413 175.232 241.925 175.744C242.437 176.235 242.693 176.853 242.693 177.6C242.693 178.347 242.437 178.976 241.925 179.488C241.413 179.979 240.763 180.224 239.973 180.224ZM245.854 162.816C245.96 160.683 246.707 159.04 248.094 157.888C249.502 156.715 251.347 156.128 253.63 156.128C255.187 156.128 256.52 156.405 257.63 156.96C258.739 157.493 259.571 158.229 260.126 159.168C260.702 160.085 260.99 161.131 260.99 162.304C260.99 163.648 260.638 164.789 259.934 165.728C259.251 166.645 258.43 167.264 257.47 167.584V167.712C258.707 168.096 259.667 168.779 260.35 169.76C261.054 170.741 261.406 172 261.406 173.536C261.406 174.816 261.107 175.957 260.51 176.96C259.934 177.963 259.07 178.752 257.918 179.328C256.787 179.883 255.422 180.16 253.822 180.16C251.411 180.16 249.448 179.552 247.934 178.336C246.419 177.12 245.619 175.328 245.534 172.96H249.886C249.928 174.005 250.28 174.848 250.942 175.488C251.624 176.107 252.552 176.416 253.726 176.416C254.814 176.416 255.646 176.117 256.222 175.52C256.819 174.901 257.118 174.112 257.118 173.152C257.118 171.872 256.712 170.955 255.902 170.4C255.091 169.845 253.832 169.568 252.126 169.568H251.198V165.888H252.126C255.155 165.888 256.67 164.875 256.67 162.848C256.67 161.931 256.392 161.216 255.838 160.704C255.304 160.192 254.526 159.936 253.502 159.936C252.499 159.936 251.72 160.213 251.166 160.768C250.632 161.301 250.323 161.984 250.238 162.816H245.854ZM264.434 162.4C264.434 160.779 264.903 159.509 265.842 158.592C266.802 157.675 268.029 157.216 269.522 157.216C271.015 157.216 272.231 157.675 273.17 158.592C274.13 159.509 274.61 160.779 274.61 162.4C274.61 164.043 274.13 165.323 273.17 166.24C272.231 167.157 271.015 167.616 269.522 167.616C268.029 167.616 266.802 167.157 265.842 166.24C264.903 165.323 264.434 164.043 264.434 162.4ZM284.978 157.6L272.402 180H268.05L280.594 157.6H284.978ZM269.49 159.904C268.317 159.904 267.73 160.736 267.73 162.4C267.73 164.085 268.317 164.928 269.49 164.928C270.066 164.928 270.514 164.725 270.834 164.32C271.154 163.893 271.314 163.253 271.314 162.4C271.314 160.736 270.706 159.904 269.49 159.904ZM278.482 175.168C278.482 173.525 278.951 172.256 279.89 171.36C280.85 170.443 282.077 169.984 283.57 169.984C285.063 169.984 286.269 170.443 287.186 171.36C288.125 172.256 288.594 173.525 288.594 175.168C288.594 176.811 288.125 178.091 287.186 179.008C286.269 179.925 285.063 180.384 283.57 180.384C282.055 180.384 280.829 179.925 279.89 179.008C278.951 178.091 278.482 176.811 278.482 175.168ZM283.538 172.672C282.322 172.672 281.714 173.504 281.714 175.168C281.714 176.853 282.322 177.696 283.538 177.696C284.733 177.696 285.33 176.853 285.33 175.168C285.33 173.504 284.733 172.672 283.538 172.672Z"
              fill="white"
            />
            <path
              id="PÃ¡gina de inicio_2"
              d="M31.5903 52.8884C30.5637 52.8884 29.6397 52.7124 28.8183 52.3604C27.997 51.9937 27.3517 51.4804 26.8823 50.8204C26.413 50.1604 26.1783 49.3904 26.1783 48.5104H28.8623C28.921 49.1704 29.1777 49.713 29.6323 50.1384C30.1017 50.5637 30.7543 50.7764 31.5903 50.7764C32.4557 50.7764 33.1303 50.571 33.6143 50.1604C34.0983 49.735 34.3403 49.1924 34.3403 48.5324C34.3403 48.019 34.1863 47.601 33.8783 47.2784C33.585 46.9557 33.211 46.7064 32.7563 46.5304C32.3163 46.3544 31.7003 46.1637 30.9083 45.9584C29.911 45.6944 29.097 45.4304 28.4663 45.1664C27.8503 44.8877 27.3223 44.4624 26.8823 43.8904C26.4423 43.3184 26.2223 42.5557 26.2223 41.6024C26.2223 40.7224 26.4423 39.9524 26.8823 39.2924C27.3223 38.6324 27.9383 38.1264 28.7303 37.7744C29.5223 37.4224 30.439 37.2464 31.4803 37.2464C32.9617 37.2464 34.1717 37.6204 35.1103 38.3684C36.0637 39.1017 36.5917 40.1137 36.6943 41.4044H33.9223C33.8783 40.847 33.6143 40.3704 33.1303 39.9744C32.6463 39.5784 32.0083 39.3804 31.2163 39.3804C30.4977 39.3804 29.911 39.5637 29.4563 39.9304C29.0017 40.297 28.7743 40.825 28.7743 41.5144C28.7743 41.9837 28.9137 42.3724 29.1923 42.6804C29.4857 42.9737 29.8523 43.2084 30.2923 43.3844C30.7323 43.5604 31.3337 43.751 32.0963 43.9564C33.1083 44.235 33.9297 44.5137 34.5603 44.7924C35.2057 45.071 35.7483 45.5037 36.1883 46.0904C36.643 46.6624 36.8703 47.4324 36.8703 48.4004C36.8703 49.1777 36.6577 49.911 36.2323 50.6004C35.8217 51.2897 35.213 51.847 34.4063 52.2724C33.6143 52.683 32.6757 52.8884 31.5903 52.8884ZM54.5037 40.4144C55.457 40.4144 56.3077 40.6124 57.0557 41.0084C57.8184 41.4044 58.4124 41.991 58.8377 42.7684C59.2777 43.5457 59.4977 44.4844 59.4977 45.5844V52.7344H57.0117V45.9584C57.0117 44.873 56.7404 44.0444 56.1977 43.4724C55.655 42.8857 54.9144 42.5924 53.9757 42.5924C53.037 42.5924 52.289 42.8857 51.7317 43.4724C51.189 44.0444 50.9177 44.873 50.9177 45.9584V52.7344H48.4317V45.9584C48.4317 44.873 48.1604 44.0444 47.6177 43.4724C47.075 42.8857 46.3344 42.5924 45.3957 42.5924C44.457 42.5924 43.709 42.8857 43.1517 43.4724C42.609 44.0444 42.3377 44.873 42.3377 45.9584V52.7344H39.8297V40.6124H42.3377V41.9984C42.7484 41.4997 43.269 41.111 43.8997 40.8324C44.5304 40.5537 45.205 40.4144 45.9237 40.4144C46.8917 40.4144 47.757 40.6197 48.5197 41.0304C49.2824 41.441 49.869 42.035 50.2797 42.8124C50.6464 42.079 51.2184 41.4997 51.9957 41.0744C52.773 40.6344 53.609 40.4144 54.5037 40.4144ZM61.8531 46.6184C61.8531 45.401 62.1024 44.323 62.6011 43.3844C63.1144 42.4457 63.8037 41.7197 64.6691 41.2064C65.5491 40.6784 66.5171 40.4144 67.5731 40.4144C68.5264 40.4144 69.3551 40.605 70.0591 40.9864C70.7777 41.353 71.3497 41.815 71.7751 42.3724V40.6124H74.3051V52.7344H71.7751V50.9304C71.3497 51.5024 70.7704 51.979 70.0371 52.3604C69.3037 52.7417 68.4677 52.9324 67.5291 52.9324C66.4877 52.9324 65.5344 52.6684 64.6691 52.1404C63.8037 51.5977 63.1144 50.8497 62.6011 49.8964C62.1024 48.9284 61.8531 47.8357 61.8531 46.6184ZM71.7751 46.6624C71.7751 45.8264 71.5991 45.1004 71.2471 44.4844C70.9097 43.8684 70.4624 43.399 69.9051 43.0764C69.3477 42.7537 68.7464 42.5924 68.1011 42.5924C67.4557 42.5924 66.8544 42.7537 66.2971 43.0764C65.7397 43.3844 65.2851 43.8464 64.9331 44.4624C64.5957 45.0637 64.4271 45.7824 64.4271 46.6184C64.4271 47.4544 64.5957 48.1877 64.9331 48.8184C65.2851 49.449 65.7397 49.933 66.2971 50.2704C66.8691 50.593 67.4704 50.7544 68.1011 50.7544C68.7464 50.7544 69.3477 50.593 69.9051 50.2704C70.4624 49.9477 70.9097 49.4784 71.2471 48.8624C71.5991 48.2317 71.7751 47.4984 71.7751 46.6624ZM80.1072 42.3724C80.4739 41.7564 80.9579 41.2797 81.5592 40.9424C82.1752 40.5904 82.9012 40.4144 83.7372 40.4144V43.0104H83.0992C82.1166 43.0104 81.3686 43.2597 80.8552 43.7584C80.3566 44.257 80.1072 45.1224 80.1072 46.3544V52.7344H77.5992V40.6124H80.1072V42.3724ZM88.9686 42.6584V49.3684C88.9686 49.823 89.0712 50.153 89.2766 50.3584C89.4966 50.549 89.8632 50.6444 90.3766 50.6444H91.9166V52.7344H89.9366C88.8072 52.7344 87.9419 52.4704 87.3406 51.9424C86.7392 51.4144 86.4386 50.5564 86.4386 49.3684V42.6584H85.0086V40.6124H86.4386V37.5984H88.9686V40.6124H91.9166V42.6584H88.9686ZM96.7361 42.3944C97.1615 41.837 97.7408 41.3677 98.4741 40.9864C99.2075 40.605 100.036 40.4144 100.96 40.4144C102.016 40.4144 102.977 40.6784 103.842 41.2064C104.722 41.7197 105.411 42.4457 105.91 43.3844C106.409 44.323 106.658 45.401 106.658 46.6184C106.658 47.8357 106.409 48.9284 105.91 49.8964C105.411 50.8497 104.722 51.5977 103.842 52.1404C102.977 52.6684 102.016 52.9324 100.96 52.9324C100.036 52.9324 99.2148 52.749 98.4961 52.3824C97.7775 52.001 97.1908 51.5317 96.7361 50.9744V58.4984H94.2281V40.6124H96.7361V42.3944ZM104.106 46.6184C104.106 45.7824 103.93 45.0637 103.578 44.4624C103.241 43.8464 102.786 43.3844 102.214 43.0764C101.657 42.7537 101.055 42.5924 100.41 42.5924C99.7795 42.5924 99.1781 42.7537 98.6061 43.0764C98.0488 43.399 97.5941 43.8684 97.2421 44.4844C96.9048 45.1004 96.7361 45.8264 96.7361 46.6624C96.7361 47.4984 96.9048 48.2317 97.2421 48.8624C97.5941 49.4784 98.0488 49.9477 98.6061 50.2704C99.1781 50.593 99.7795 50.7544 100.41 50.7544C101.055 50.7544 101.657 50.593 102.214 50.2704C102.786 49.933 103.241 49.449 103.578 48.8184C103.93 48.1877 104.106 47.4544 104.106 46.6184ZM115.408 40.4144C116.332 40.4144 117.154 40.6124 117.872 41.0084C118.606 41.4044 119.178 41.991 119.588 42.7684C120.014 43.5457 120.226 44.4844 120.226 45.5844V52.7344H117.74V45.9584C117.74 44.873 117.469 44.0444 116.926 43.4724C116.384 42.8857 115.643 42.5924 114.704 42.5924C113.766 42.5924 113.018 42.8857 112.46 43.4724C111.918 44.0444 111.646 44.873 111.646 45.9584V52.7344H109.138V36.4544H111.646V42.0204C112.072 41.507 112.607 41.111 113.252 40.8324C113.912 40.5537 114.631 40.4144 115.408 40.4144ZM128.683 52.9324C127.539 52.9324 126.505 52.6757 125.581 52.1624C124.657 51.6344 123.931 50.901 123.403 49.9624C122.875 49.009 122.611 47.909 122.611 46.6624C122.611 45.4304 122.883 44.3377 123.425 43.3844C123.968 42.431 124.709 41.6977 125.647 41.1844C126.586 40.671 127.635 40.4144 128.793 40.4144C129.952 40.4144 131.001 40.671 131.939 41.1844C132.878 41.6977 133.619 42.431 134.161 43.3844C134.704 44.3377 134.975 45.4304 134.975 46.6624C134.975 47.8944 134.697 48.987 134.139 49.9404C133.582 50.8937 132.819 51.6344 131.851 52.1624C130.898 52.6757 129.842 52.9324 128.683 52.9324ZM128.683 50.7544C129.329 50.7544 129.93 50.6004 130.487 50.2924C131.059 49.9844 131.521 49.5224 131.873 48.9064C132.225 48.2904 132.401 47.5424 132.401 46.6624C132.401 45.7824 132.233 45.0417 131.895 44.4404C131.558 43.8244 131.111 43.3624 130.553 43.0544C129.996 42.7464 129.395 42.5924 128.749 42.5924C128.104 42.5924 127.503 42.7464 126.945 43.0544C126.403 43.3624 125.97 43.8244 125.647 44.4404C125.325 45.0417 125.163 45.7824 125.163 46.6624C125.163 47.9677 125.493 48.9797 126.153 49.6984C126.828 50.4024 127.671 50.7544 128.683 50.7544ZM143.571 40.4144C144.524 40.4144 145.375 40.6124 146.123 41.0084C146.885 41.4044 147.479 41.991 147.905 42.7684C148.33 43.5457 148.543 44.4844 148.543 45.5844V52.7344H146.057V45.9584C146.057 44.873 145.785 44.0444 145.243 43.4724C144.7 42.8857 143.959 42.5924 143.021 42.5924C142.082 42.5924 141.334 42.8857 140.777 43.4724C140.234 44.0444 139.963 44.873 139.963 45.9584V52.7344H137.455V40.6124H139.963V41.9984C140.373 41.4997 140.894 41.111 141.525 40.8324C142.17 40.5537 142.852 40.4144 143.571 40.4144ZM162.852 46.3764C162.852 46.831 162.822 47.2417 162.764 47.6084H153.502C153.575 48.5764 153.934 49.3537 154.58 49.9404C155.225 50.527 156.017 50.8204 156.956 50.8204C158.305 50.8204 159.258 50.2557 159.816 49.1264H162.522C162.155 50.241 161.488 51.1577 160.52 51.8764C159.566 52.5804 158.378 52.9324 156.956 52.9324C155.797 52.9324 154.756 52.6757 153.832 52.1624C152.922 51.6344 152.204 50.901 151.676 49.9624C151.162 49.009 150.906 47.909 150.906 46.6624C150.906 45.4157 151.155 44.323 151.654 43.3844C152.167 42.431 152.878 41.6977 153.788 41.1844C154.712 40.671 155.768 40.4144 156.956 40.4144C158.1 40.4144 159.119 40.6637 160.014 41.1624C160.908 41.661 161.605 42.365 162.104 43.2744C162.602 44.169 162.852 45.203 162.852 46.3764ZM160.234 45.5844C160.219 44.6604 159.889 43.9197 159.244 43.3624C158.598 42.805 157.799 42.5264 156.846 42.5264C155.98 42.5264 155.24 42.805 154.624 43.3624C154.008 43.905 153.641 44.6457 153.524 45.5844H160.234ZM173.543 42.3944C173.968 41.837 174.547 41.3677 175.281 40.9864C176.014 40.605 176.843 40.4144 177.767 40.4144C178.823 40.4144 179.783 40.6784 180.649 41.2064C181.529 41.7197 182.218 42.4457 182.717 43.3844C183.215 44.323 183.465 45.401 183.465 46.6184C183.465 47.8357 183.215 48.9284 182.717 49.8964C182.218 50.8497 181.529 51.5977 180.649 52.1404C179.783 52.6684 178.823 52.9324 177.767 52.9324C176.843 52.9324 176.021 52.749 175.303 52.3824C174.584 52.001 173.997 51.5317 173.543 50.9744V58.4984H171.035V40.6124H173.543V42.3944ZM180.913 46.6184C180.913 45.7824 180.737 45.0637 180.385 44.4624C180.047 43.8464 179.593 43.3844 179.021 43.0764C178.463 42.7537 177.862 42.5924 177.217 42.5924C176.586 42.5924 175.985 42.7537 175.413 43.0764C174.855 43.399 174.401 43.8684 174.049 44.4844C173.711 45.1004 173.543 45.8264 173.543 46.6624C173.543 47.4984 173.711 48.2317 174.049 48.8624C174.401 49.4784 174.855 49.9477 175.413 50.2704C175.985 50.593 176.586 50.7544 177.217 50.7544C177.862 50.7544 178.463 50.593 179.021 50.2704C179.593 49.933 180.047 49.449 180.385 48.8184C180.737 48.1877 180.913 47.4544 180.913 46.6184ZM197.055 46.3764C197.055 46.831 197.026 47.2417 196.967 47.6084H187.705C187.778 48.5764 188.138 49.3537 188.783 49.9404C189.428 50.527 190.22 50.8204 191.159 50.8204C192.508 50.8204 193.462 50.2557 194.019 49.1264H196.725C196.358 50.241 195.691 51.1577 194.723 51.8764C193.77 52.5804 192.582 52.9324 191.159 52.9324C190 52.9324 188.959 52.6757 188.035 52.1624C187.126 51.6344 186.407 50.901 185.879 49.9624C185.366 49.009 185.109 47.909 185.109 46.6624C185.109 45.4157 185.358 44.323 185.857 43.3844C186.37 42.431 187.082 41.6977 187.991 41.1844C188.915 40.671 189.971 40.4144 191.159 40.4144C192.303 40.4144 193.322 40.6637 194.217 41.1624C195.112 41.661 195.808 42.365 196.307 43.2744C196.806 44.169 197.055 45.203 197.055 46.3764ZM194.437 45.5844C194.422 44.6604 194.092 43.9197 193.447 43.3624C192.802 42.805 192.002 42.5264 191.049 42.5264C190.184 42.5264 189.443 42.805 188.827 43.3624C188.211 43.905 187.844 44.6457 187.727 45.5844H194.437ZM205.639 40.4144C206.592 40.4144 207.443 40.6124 208.191 41.0084C208.954 41.4044 209.548 41.991 209.973 42.7684C210.398 43.5457 210.611 44.4844 210.611 45.5844V52.7344H208.125V45.9584C208.125 44.873 207.854 44.0444 207.311 43.4724C206.768 42.8857 206.028 42.5924 205.089 42.5924C204.15 42.5924 203.402 42.8857 202.845 43.4724C202.302 44.0444 202.031 44.873 202.031 45.9584V52.7344H199.523V40.6124H202.031V41.9984C202.442 41.4997 202.962 41.111 203.593 40.8324C204.238 40.5537 204.92 40.4144 205.639 40.4144ZM224.92 46.3764C224.92 46.831 224.891 47.2417 224.832 47.6084H215.57C215.643 48.5764 216.003 49.3537 216.648 49.9404C217.293 50.527 218.085 50.8204 219.024 50.8204C220.373 50.8204 221.327 50.2557 221.884 49.1264H224.59C224.223 50.241 223.556 51.1577 222.588 51.8764C221.635 52.5804 220.447 52.9324 219.024 52.9324C217.865 52.9324 216.824 52.6757 215.9 52.1624C214.991 51.6344 214.272 50.901 213.744 49.9624C213.231 49.009 212.974 47.909 212.974 46.6624C212.974 45.4157 213.223 44.323 213.722 43.3844C214.235 42.431 214.947 41.6977 215.856 41.1844C216.78 40.671 217.836 40.4144 219.024 40.4144C220.168 40.4144 221.187 40.6637 222.082 41.1624C222.977 41.661 223.673 42.365 224.172 43.2744C224.671 44.169 224.92 45.203 224.92 46.3764ZM222.302 45.5844C222.287 44.6604 221.957 43.9197 221.312 43.3624C220.667 42.805 219.867 42.5264 218.914 42.5264C218.049 42.5264 217.308 42.805 216.692 43.3624C216.076 43.905 215.709 44.6457 215.592 45.5844H222.302ZM230.314 42.6584V49.3684C230.314 49.823 230.417 50.153 230.622 50.3584C230.842 50.549 231.209 50.6444 231.722 50.6444H233.262V52.7344H231.282C230.153 52.7344 229.288 52.4704 228.686 51.9424C228.085 51.4144 227.784 50.5564 227.784 49.3684V42.6584H226.354V40.6124H227.784V37.5984H230.314V40.6124H233.262V42.6584H230.314ZM238.082 42.3724C238.448 41.7564 238.932 41.2797 239.534 40.9424C240.15 40.5904 240.876 40.4144 241.712 40.4144V43.0104H241.074C240.091 43.0104 239.343 43.2597 238.83 43.7584C238.331 44.257 238.082 45.1224 238.082 46.3544V52.7344H235.574V40.6124H238.082V42.3724ZM243.181 46.6184C243.181 45.401 243.431 44.323 243.929 43.3844C244.443 42.4457 245.132 41.7197 245.997 41.2064C246.877 40.6784 247.845 40.4144 248.901 40.4144C249.855 40.4144 250.683 40.605 251.387 40.9864C252.106 41.353 252.678 41.815 253.103 42.3724V40.6124H255.633V52.7344H253.103V50.9304C252.678 51.5024 252.099 51.979 251.365 52.3604C250.632 52.7417 249.796 52.9324 248.857 52.9324C247.816 52.9324 246.863 52.6684 245.997 52.1404C245.132 51.5977 244.443 50.8497 243.929 49.8964C243.431 48.9284 243.181 47.8357 243.181 46.6184ZM253.103 46.6624C253.103 45.8264 252.927 45.1004 252.575 44.4844C252.238 43.8684 251.791 43.399 251.233 43.0764C250.676 42.7537 250.075 42.5924 249.429 42.5924C248.784 42.5924 248.183 42.7537 247.625 43.0764C247.068 43.3844 246.613 43.8464 246.261 44.4624C245.924 45.0637 245.755 45.7824 245.755 46.6184C245.755 47.4544 245.924 48.1877 246.261 48.8184C246.613 49.449 247.068 49.933 247.625 50.2704C248.197 50.593 248.799 50.7544 249.429 50.7544C250.075 50.7544 250.676 50.593 251.233 50.2704C251.791 49.9477 252.238 49.4784 252.575 48.8624C252.927 48.2317 253.103 47.4984 253.103 46.6624ZM261.853 42.6584V49.3684C261.853 49.823 261.956 50.153 262.161 50.3584C262.381 50.549 262.748 50.6444 263.261 50.6444H264.801V52.7344H262.821C261.692 52.7344 260.827 52.4704 260.225 51.9424C259.624 51.4144 259.323 50.5564 259.323 49.3684V42.6584H257.893V40.6124H259.323V37.5984H261.853V40.6124H264.801V42.6584H261.853ZM268.389 39.0064C267.934 39.0064 267.553 38.8524 267.245 38.5444C266.937 38.2364 266.783 37.855 266.783 37.4004C266.783 36.9457 266.937 36.5644 267.245 36.2564C267.553 35.9484 267.934 35.7944 268.389 35.7944C268.829 35.7944 269.203 35.9484 269.511 36.2564C269.819 36.5644 269.973 36.9457 269.973 37.4004C269.973 37.855 269.819 38.2364 269.511 38.5444C269.203 38.8524 268.829 39.0064 268.389 39.0064ZM269.621 40.6124V52.7344H267.113V40.6124H269.621ZM278.172 52.9324C277.028 52.9324 275.994 52.6757 275.07 52.1624C274.146 51.6344 273.42 50.901 272.892 49.9624C272.364 49.009 272.1 47.909 272.1 46.6624C272.1 45.4304 272.371 44.3377 272.914 43.3844C273.456 42.431 274.197 41.6977 275.136 41.1844C276.074 40.671 277.123 40.4144 278.282 40.4144C279.44 40.4144 280.489 40.671 281.428 41.1844C282.366 41.6977 283.107 42.431 283.65 43.3844C284.192 44.3377 284.464 45.4304 284.464 46.6624C284.464 47.8944 284.185 48.987 283.628 49.9404C283.07 50.8937 282.308 51.6344 281.34 52.1624C280.386 52.6757 279.33 52.9324 278.172 52.9324ZM278.172 50.7544C278.817 50.7544 279.418 50.6004 279.976 50.2924C280.548 49.9844 281.01 49.5224 281.362 48.9064C281.714 48.2904 281.89 47.5424 281.89 46.6624C281.89 45.7824 281.721 45.0417 281.384 44.4404C281.046 43.8244 280.599 43.3624 280.042 43.0544C279.484 42.7464 278.883 42.5924 278.238 42.5924C277.592 42.5924 276.991 42.7464 276.434 43.0544C275.891 43.3624 275.458 43.8244 275.136 44.4404C274.813 45.0417 274.652 45.7824 274.652 46.6624C274.652 47.9677 274.982 48.9797 275.642 49.6984C276.316 50.4024 277.16 50.7544 278.172 50.7544ZM293.059 40.4144C294.012 40.4144 294.863 40.6124 295.611 41.0084C296.374 41.4044 296.968 41.991 297.393 42.7684C297.818 43.5457 298.031 44.4844 298.031 45.5844V52.7344H295.545V45.9584C295.545 44.873 295.274 44.0444 294.731 43.4724C294.188 42.8857 293.448 42.5924 292.509 42.5924C291.57 42.5924 290.822 42.8857 290.265 43.4724C289.722 44.0444 289.451 44.873 289.451 45.9584V52.7344H286.943V40.6124H289.451V41.9984C289.862 41.4997 290.382 41.111 291.013 40.8324C291.658 40.5537 292.34 40.4144 293.059 40.4144ZM309.453 42.3724C309.82 41.7564 310.304 41.2797 310.905 40.9424C311.521 40.5904 312.247 40.4144 313.083 40.4144V43.0104H312.445C311.462 43.0104 310.714 43.2597 310.201 43.7584C309.702 44.257 309.453 45.1224 309.453 46.3544V52.7344H306.945V40.6124H309.453V42.3724ZM314.552 46.6184C314.552 45.401 314.802 44.323 315.3 43.3844C315.814 42.4457 316.503 41.7197 317.368 41.2064C318.248 40.6784 319.216 40.4144 320.272 40.4144C321.226 40.4144 322.054 40.605 322.758 40.9864C323.477 41.353 324.049 41.815 324.474 42.3724V40.6124H327.004V52.7344H324.474V50.9304C324.049 51.5024 323.47 51.979 322.736 52.3604C322.003 52.7417 321.167 52.9324 320.228 52.9324C319.187 52.9324 318.234 52.6684 317.368 52.1404C316.503 51.5977 315.814 50.8497 315.3 49.8964C314.802 48.9284 314.552 47.8357 314.552 46.6184ZM324.474 46.6624C324.474 45.8264 324.298 45.1004 323.946 44.4844C323.609 43.8684 323.162 43.399 322.604 43.0764C322.047 42.7537 321.446 42.5924 320.8 42.5924C320.155 42.5924 319.554 42.7537 318.996 43.0764C318.439 43.3844 317.984 43.8464 317.632 44.4624C317.295 45.0637 317.126 45.7824 317.126 46.6184C317.126 47.4544 317.295 48.1877 317.632 48.8184C317.984 49.449 318.439 49.933 318.996 50.2704C319.568 50.593 320.17 50.7544 320.8 50.7544C321.446 50.7544 322.047 50.593 322.604 50.2704C323.162 49.9477 323.609 49.4784 323.946 48.8624C324.298 48.2317 324.474 47.4984 324.474 46.6624ZM333.224 42.6584V49.3684C333.224 49.823 333.327 50.153 333.532 50.3584C333.752 50.549 334.119 50.6444 334.632 50.6444H336.172V52.7344H334.192C333.063 52.7344 332.198 52.4704 331.596 51.9424C330.995 51.4144 330.694 50.5564 330.694 49.3684V42.6584H329.264V40.6124H330.694V37.5984H333.224V40.6124H336.172V42.6584H333.224ZM349.594 46.3764C349.594 46.831 349.565 47.2417 349.506 47.6084H340.244C340.317 48.5764 340.677 49.3537 341.322 49.9404C341.967 50.527 342.759 50.8204 343.698 50.8204C345.047 50.8204 346.001 50.2557 346.558 49.1264H349.264C348.897 50.241 348.23 51.1577 347.262 51.8764C346.309 52.5804 345.121 52.9324 343.698 52.9324C342.539 52.9324 341.498 52.6757 340.574 52.1624C339.665 51.6344 338.946 50.901 338.418 49.9624C337.905 49.009 337.648 47.909 337.648 46.6624C337.648 45.4157 337.897 44.323 338.396 43.3844C338.909 42.431 339.621 41.6977 340.53 41.1844C341.454 40.671 342.51 40.4144 343.698 40.4144C344.842 40.4144 345.861 40.6637 346.756 41.1624C347.651 41.661 348.347 42.365 348.846 43.2744C349.345 44.169 349.594 45.203 349.594 46.3764ZM346.976 45.5844C346.961 44.6604 346.631 43.9197 345.986 43.3624C345.341 42.805 344.541 42.5264 343.588 42.5264C342.723 42.5264 341.982 42.805 341.366 43.3624C340.75 43.905 340.383 44.6457 340.266 45.5844H346.976Z"
              fill="white"
            />
            <g id="Group 1410135537">
              <path
                id="Ellipse 322"
                d="M131 210C131 195.226 133.91 180.597 139.564 166.948C145.217 153.299 153.504 140.897 163.95 130.45C174.397 120.004 186.799 111.717 200.448 106.064C214.097 100.41 228.726 97.5 243.5 97.5C258.274 97.5 272.903 100.41 286.552 106.064C300.201 111.717 312.603 120.004 323.05 130.45C333.496 140.897 341.783 153.299 347.436 166.948C353.09 180.597 356 195.226 356 210"
                stroke="#F6F8FF"
                strokeWidth={22}
                strokeLinecap="round"
              />
              <path
                id="Ellipse 323"
                d="M131 210C131 195.226 133.91 180.597 139.564 166.948C145.217 153.299 153.504 140.897 163.95 130.45C174.397 120.004 186.799 111.717 200.448 106.064C214.097 100.41 228.726 97.5 243.5 97.5C258.274 97.5 272.903 100.41 286.552 106.064C300.201 111.717 312.603 120.004 323.05 130.45C333.496 140.897 341.783 153.299 347.436 166.948C353.09 180.597 356 195.226 356 210"
                stroke="#CEDAF1"
                strokeWidth={13}
                strokeLinecap="round"
              />
              <motion.path
                variants={draw}
                id="Ellipse 324"
                d="M131.001 210C131.001 195.226 133.911 180.597 139.565 166.948C145.218 153.299 153.505 140.897 163.952 130.45C174.398 120.004 186.8 111.717 200.449 106.064C214.099 100.41 228.728 97.5 243.501 97.5C258.275 97.5 272.904 100.41 286.553 106.064C300.202 111.717 312.604 120.004 323.051 130.45C333.497 140.897 341.784 153.299 347.438 166.948C351.49 176.731 354.133 187.018 355.305 197.5"
                stroke="url(#paint10_linear_2218_333)"
                strokeWidth={13}
                strokeLinecap="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_2218_333"
              x="41.4648"
              y="-58.6367"
              width="234.98"
              height="224.918"
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
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={5} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2218_333"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2218_333"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_2218_333"
              x="211.617"
              y="-58.6367"
              width="234.98"
              height="224.918"
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
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={5} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2218_333"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2218_333"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_2218_333"
              x="127.746"
              y="80.4844"
              width="235.059"
              height="226.723"
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
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2218_333"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2218_333"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2218_333"
              x1="453.622"
              y1="147.164"
              x2="453.622"
              y2="328.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2218_333"
              x1="549.075"
              y1="23.7344"
              x2="549.075"
              y2="204.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2218_333"
              x1="34.4458"
              y1="147.164"
              x2="34.4458"
              y2="328.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2218_333"
              x1="-61.0112"
              y1="23.7344"
              x2="-61.0112"
              y2="204.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_2218_333"
              x1="158.955"
              y1="-2.76966"
              x2="158.955"
              y2="154.282"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} />
              <stop offset={1} stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_2218_333"
              x1="188.996"
              y1="147.57"
              x2="161.958"
              y2="21.9912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint6_linear_2218_333"
              x1="329.107"
              y1="-2.76966"
              x2="329.107"
              y2="154.282"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} />
              <stop offset={1} stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_2218_333"
              x1="359.148"
              y1="147.57"
              x2="332.111"
              y2="21.9912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint8_linear_2218_333"
              x1="245.276"
              y1="126.198"
              x2="245.276"
              y2="243.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint9_linear_2218_333"
              x1="245.276"
              y1="163.384"
              x2="245.276"
              y2="256.349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_2218_333"
              x1="351.5"
              y1="157.5"
              x2="132.794"
              y2="192.281"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3DFFA7" />
              <stop offset="0.60932" stopColor="#DEFE66" />
              <stop offset={1} stopColor="#014727" />
            </linearGradient>
          </defs>
        </motion.svg>
      )}
      {id === "Chile" && (
        <motion.svg
          initial="hidden"
          whileInView="visible"
          viewBox="0 0 489 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 1410135536">
            <rect
              id="Rectangle 569"
              width="488.063"
              height="253.181"
              rx={16}
              fill="#1C2025"
            />
            <g id="Mask group" opacity="0.26">
              <mask
                id="mask0_2218_352"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={489}
                height={254}
              >
                <path
                  id="Rectangle 570"
                  d="M0 16C0 7.16345 7.16344 0 16 0H472.063C480.9 0 488.063 7.16344 488.063 16V237.181C488.063 246.018 480.9 253.181 472.063 253.181H16C7.16343 253.181 0 246.018 0 237.181V16Z"
                  fill="#1C2025"
                />
              </mask>
              <g mask="url(#mask0_2218_352)">
                <g id="Group 772">
                  <path
                    id="Ellipse 252"
                    opacity="0.6"
                    d="M453.621 148.164C505.603 148.164 547.661 188.321 547.661 237.756C547.661 287.191 505.603 327.347 453.621 327.347C401.639 327.346 359.582 287.191 359.582 237.756C359.582 188.321 401.639 148.164 453.621 148.164Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint0_linear_2218_352)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 254"
                    opacity="0.3"
                    d="M549.074 24.7344C601.057 24.7344 643.114 64.8909 643.114 114.326C643.114 163.761 601.056 203.917 549.074 203.917C497.092 203.917 455.035 163.761 455.035 114.326C455.035 64.891 497.092 24.7346 549.074 24.7344Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint1_linear_2218_352)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 253"
                    opacity="0.6"
                    d="M34.4453 148.164C86.4276 148.164 128.485 188.321 128.485 237.756C128.485 287.191 86.4275 327.347 34.4453 327.347C-17.5366 327.346 -59.5935 287.191 -59.5938 237.756C-59.5938 188.321 -17.5368 148.164 34.4453 148.164Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint2_linear_2218_352)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 255"
                    opacity="0.3"
                    d="M-61.0117 24.7344C-9.0294 24.7344 33.0283 64.8909 33.0283 114.326C33.0281 163.761 -9.02955 203.917 -61.0117 203.917C-112.994 203.917 -155.051 163.761 -155.051 114.326C-155.051 64.891 -112.994 24.7346 -61.0117 24.7344Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint3_linear_2218_352)"
                    strokeWidth={2}
                  />
                  <g id="Ellipse 250" filter="url(#filter0_d_2218_352)">
                    <ellipse
                      cx="158.955"
                      cy="51.8225"
                      rx="107.49"
                      ry="102.459"
                      fill="url(#paint4_linear_2218_352)"
                      fillOpacity="0.5"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M158.955 -49.6367C217.814 -49.6367 265.445 -4.16735 265.445 51.8223C265.445 107.812 217.814 153.282 158.955 153.282C100.096 153.282 52.4648 107.812 52.4648 51.8223C52.465 -4.16738 100.097 -49.6367 158.955 -49.6367Z"
                      stroke="url(#paint5_linear_2218_352)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g id="Ellipse 251" filter="url(#filter1_d_2218_352)">
                    <ellipse
                      cx="329.107"
                      cy="51.8225"
                      rx="107.49"
                      ry="102.459"
                      fill="url(#paint6_linear_2218_352)"
                      fillOpacity="0.5"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M329.107 -49.6367C387.966 -49.6367 435.598 -4.16735 435.598 51.8223C435.598 107.812 387.966 153.282 329.107 153.282C270.249 153.282 222.617 107.812 222.617 51.8223C222.617 -4.16738 270.249 -49.6367 329.107 -49.6367Z"
                      stroke="url(#paint7_linear_2218_352)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g id="Ellipse 249" filter="url(#filter2_d_2218_352)">
                    <ellipse
                      cx="245.276"
                      cy="193.845"
                      rx="97.5297"
                      ry="93.3605"
                      fill="url(#paint8_linear_2218_352)"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M245.275 101.484C298.629 101.484 341.806 142.876 341.806 193.845C341.806 244.813 298.629 286.205 245.275 286.205C191.922 286.205 148.746 244.813 148.746 193.845C148.746 142.876 191.922 101.485 245.275 101.484Z"
                      stroke="url(#paint9_linear_2218_352)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                </g>
              </g>
            </g>
            <path
              id="PÃ¡gina de inicio"
              opacity="0.9"
              d="M218.833 173.44C219.004 174.379 219.388 175.104 219.985 175.616C220.604 176.107 221.425 176.352 222.449 176.352C223.772 176.352 224.732 175.808 225.329 174.72C225.926 173.611 226.225 171.755 226.225 169.152C225.734 169.835 225.041 170.368 224.145 170.752C223.27 171.136 222.321 171.328 221.297 171.328C219.932 171.328 218.694 171.051 217.585 170.496C216.497 169.92 215.633 169.077 214.993 167.968C214.353 166.837 214.033 165.472 214.033 163.872C214.033 161.504 214.737 159.627 216.145 158.24C217.553 156.832 219.473 156.128 221.905 156.128C224.934 156.128 227.068 157.099 228.305 159.04C229.564 160.981 230.193 163.904 230.193 167.808C230.193 170.581 229.948 172.853 229.457 174.624C228.988 176.395 228.166 177.739 226.993 178.656C225.841 179.573 224.262 180.032 222.257 180.032C220.678 180.032 219.334 179.733 218.225 179.136C217.116 178.517 216.262 177.717 215.665 176.736C215.089 175.733 214.758 174.635 214.673 173.44H218.833ZM222.225 167.68C223.334 167.68 224.209 167.339 224.849 166.656C225.489 165.973 225.809 165.056 225.809 163.904C225.809 162.645 225.468 161.675 224.785 160.992C224.124 160.288 223.217 159.936 222.065 159.936C220.913 159.936 219.996 160.299 219.313 161.024C218.652 161.728 218.321 162.667 218.321 163.84C218.321 164.971 218.641 165.899 219.281 166.624C219.942 167.328 220.924 167.68 222.225 167.68ZM248.528 160.064L240.016 180H235.472L244.048 160.576H233.104V156.736H248.528V160.064ZM250.7 162.4C250.7 160.779 251.169 159.509 252.108 158.592C253.068 157.675 254.294 157.216 255.788 157.216C257.281 157.216 258.497 157.675 259.436 158.592C260.396 159.509 260.876 160.779 260.876 162.4C260.876 164.043 260.396 165.323 259.436 166.24C258.497 167.157 257.281 167.616 255.788 167.616C254.294 167.616 253.068 167.157 252.108 166.24C251.169 165.323 250.7 164.043 250.7 162.4ZM271.244 157.6L258.668 180H254.316L266.86 157.6H271.244ZM255.756 159.904C254.582 159.904 253.996 160.736 253.996 162.4C253.996 164.085 254.582 164.928 255.756 164.928C256.332 164.928 256.78 164.725 257.1 164.32C257.42 163.893 257.58 163.253 257.58 162.4C257.58 160.736 256.972 159.904 255.756 159.904ZM264.748 175.168C264.748 173.525 265.217 172.256 266.156 171.36C267.116 170.443 268.342 169.984 269.836 169.984C271.329 169.984 272.534 170.443 273.452 171.36C274.39 172.256 274.86 173.525 274.86 175.168C274.86 176.811 274.39 178.091 273.452 179.008C272.534 179.925 271.329 180.384 269.836 180.384C268.321 180.384 267.094 179.925 266.156 179.008C265.217 178.091 264.748 176.811 264.748 175.168ZM269.804 172.672C268.588 172.672 267.98 173.504 267.98 175.168C267.98 176.853 268.588 177.696 269.804 177.696C270.998 177.696 271.596 176.853 271.596 175.168C271.596 173.504 270.998 172.672 269.804 172.672Z"
              fill="white"
            />
            <path
              id="PÃ¡gina de inicio_2"
              d="M31.5903 52.8884C30.5637 52.8884 29.6397 52.7124 28.8183 52.3604C27.997 51.9937 27.3517 51.4804 26.8823 50.8204C26.413 50.1604 26.1783 49.3904 26.1783 48.5104H28.8623C28.921 49.1704 29.1777 49.713 29.6323 50.1384C30.1017 50.5637 30.7543 50.7764 31.5903 50.7764C32.4557 50.7764 33.1303 50.571 33.6143 50.1604C34.0983 49.735 34.3403 49.1924 34.3403 48.5324C34.3403 48.019 34.1863 47.601 33.8783 47.2784C33.585 46.9557 33.211 46.7064 32.7563 46.5304C32.3163 46.3544 31.7003 46.1637 30.9083 45.9584C29.911 45.6944 29.097 45.4304 28.4663 45.1664C27.8503 44.8877 27.3223 44.4624 26.8823 43.8904C26.4423 43.3184 26.2223 42.5557 26.2223 41.6024C26.2223 40.7224 26.4423 39.9524 26.8823 39.2924C27.3223 38.6324 27.9383 38.1264 28.7303 37.7744C29.5223 37.4224 30.439 37.2464 31.4803 37.2464C32.9617 37.2464 34.1717 37.6204 35.1103 38.3684C36.0637 39.1017 36.5917 40.1137 36.6943 41.4044H33.9223C33.8783 40.847 33.6143 40.3704 33.1303 39.9744C32.6463 39.5784 32.0083 39.3804 31.2163 39.3804C30.4977 39.3804 29.911 39.5637 29.4563 39.9304C29.0017 40.297 28.7743 40.825 28.7743 41.5144C28.7743 41.9837 28.9137 42.3724 29.1923 42.6804C29.4857 42.9737 29.8523 43.2084 30.2923 43.3844C30.7323 43.5604 31.3337 43.751 32.0963 43.9564C33.1083 44.235 33.9297 44.5137 34.5603 44.7924C35.2057 45.071 35.7483 45.5037 36.1883 46.0904C36.643 46.6624 36.8703 47.4324 36.8703 48.4004C36.8703 49.1777 36.6577 49.911 36.2323 50.6004C35.8217 51.2897 35.213 51.847 34.4063 52.2724C33.6143 52.683 32.6757 52.8884 31.5903 52.8884ZM54.5037 40.4144C55.457 40.4144 56.3077 40.6124 57.0557 41.0084C57.8184 41.4044 58.4124 41.991 58.8377 42.7684C59.2777 43.5457 59.4977 44.4844 59.4977 45.5844V52.7344H57.0117V45.9584C57.0117 44.873 56.7404 44.0444 56.1977 43.4724C55.655 42.8857 54.9144 42.5924 53.9757 42.5924C53.037 42.5924 52.289 42.8857 51.7317 43.4724C51.189 44.0444 50.9177 44.873 50.9177 45.9584V52.7344H48.4317V45.9584C48.4317 44.873 48.1604 44.0444 47.6177 43.4724C47.075 42.8857 46.3344 42.5924 45.3957 42.5924C44.457 42.5924 43.709 42.8857 43.1517 43.4724C42.609 44.0444 42.3377 44.873 42.3377 45.9584V52.7344H39.8297V40.6124H42.3377V41.9984C42.7484 41.4997 43.269 41.111 43.8997 40.8324C44.5304 40.5537 45.205 40.4144 45.9237 40.4144C46.8917 40.4144 47.757 40.6197 48.5197 41.0304C49.2824 41.441 49.869 42.035 50.2797 42.8124C50.6464 42.079 51.2184 41.4997 51.9957 41.0744C52.773 40.6344 53.609 40.4144 54.5037 40.4144ZM61.8531 46.6184C61.8531 45.401 62.1024 44.323 62.6011 43.3844C63.1144 42.4457 63.8037 41.7197 64.6691 41.2064C65.5491 40.6784 66.5171 40.4144 67.5731 40.4144C68.5264 40.4144 69.3551 40.605 70.0591 40.9864C70.7777 41.353 71.3497 41.815 71.7751 42.3724V40.6124H74.3051V52.7344H71.7751V50.9304C71.3497 51.5024 70.7704 51.979 70.0371 52.3604C69.3037 52.7417 68.4677 52.9324 67.5291 52.9324C66.4877 52.9324 65.5344 52.6684 64.6691 52.1404C63.8037 51.5977 63.1144 50.8497 62.6011 49.8964C62.1024 48.9284 61.8531 47.8357 61.8531 46.6184ZM71.7751 46.6624C71.7751 45.8264 71.5991 45.1004 71.2471 44.4844C70.9097 43.8684 70.4624 43.399 69.9051 43.0764C69.3477 42.7537 68.7464 42.5924 68.1011 42.5924C67.4557 42.5924 66.8544 42.7537 66.2971 43.0764C65.7397 43.3844 65.2851 43.8464 64.9331 44.4624C64.5957 45.0637 64.4271 45.7824 64.4271 46.6184C64.4271 47.4544 64.5957 48.1877 64.9331 48.8184C65.2851 49.449 65.7397 49.933 66.2971 50.2704C66.8691 50.593 67.4704 50.7544 68.1011 50.7544C68.7464 50.7544 69.3477 50.593 69.9051 50.2704C70.4624 49.9477 70.9097 49.4784 71.2471 48.8624C71.5991 48.2317 71.7751 47.4984 71.7751 46.6624ZM80.1072 42.3724C80.4739 41.7564 80.9579 41.2797 81.5592 40.9424C82.1752 40.5904 82.9012 40.4144 83.7372 40.4144V43.0104H83.0992C82.1166 43.0104 81.3686 43.2597 80.8552 43.7584C80.3566 44.257 80.1072 45.1224 80.1072 46.3544V52.7344H77.5992V40.6124H80.1072V42.3724ZM88.9686 42.6584V49.3684C88.9686 49.823 89.0712 50.153 89.2766 50.3584C89.4966 50.549 89.8632 50.6444 90.3766 50.6444H91.9166V52.7344H89.9366C88.8072 52.7344 87.9419 52.4704 87.3406 51.9424C86.7392 51.4144 86.4386 50.5564 86.4386 49.3684V42.6584H85.0086V40.6124H86.4386V37.5984H88.9686V40.6124H91.9166V42.6584H88.9686ZM96.7361 42.3944C97.1615 41.837 97.7408 41.3677 98.4741 40.9864C99.2075 40.605 100.036 40.4144 100.96 40.4144C102.016 40.4144 102.977 40.6784 103.842 41.2064C104.722 41.7197 105.411 42.4457 105.91 43.3844C106.409 44.323 106.658 45.401 106.658 46.6184C106.658 47.8357 106.409 48.9284 105.91 49.8964C105.411 50.8497 104.722 51.5977 103.842 52.1404C102.977 52.6684 102.016 52.9324 100.96 52.9324C100.036 52.9324 99.2148 52.749 98.4961 52.3824C97.7775 52.001 97.1908 51.5317 96.7361 50.9744V58.4984H94.2281V40.6124H96.7361V42.3944ZM104.106 46.6184C104.106 45.7824 103.93 45.0637 103.578 44.4624C103.241 43.8464 102.786 43.3844 102.214 43.0764C101.657 42.7537 101.055 42.5924 100.41 42.5924C99.7795 42.5924 99.1781 42.7537 98.6061 43.0764C98.0488 43.399 97.5941 43.8684 97.2421 44.4844C96.9048 45.1004 96.7361 45.8264 96.7361 46.6624C96.7361 47.4984 96.9048 48.2317 97.2421 48.8624C97.5941 49.4784 98.0488 49.9477 98.6061 50.2704C99.1781 50.593 99.7795 50.7544 100.41 50.7544C101.055 50.7544 101.657 50.593 102.214 50.2704C102.786 49.933 103.241 49.449 103.578 48.8184C103.93 48.1877 104.106 47.4544 104.106 46.6184ZM115.408 40.4144C116.332 40.4144 117.154 40.6124 117.872 41.0084C118.606 41.4044 119.178 41.991 119.588 42.7684C120.014 43.5457 120.226 44.4844 120.226 45.5844V52.7344H117.74V45.9584C117.74 44.873 117.469 44.0444 116.926 43.4724C116.384 42.8857 115.643 42.5924 114.704 42.5924C113.766 42.5924 113.018 42.8857 112.46 43.4724C111.918 44.0444 111.646 44.873 111.646 45.9584V52.7344H109.138V36.4544H111.646V42.0204C112.072 41.507 112.607 41.111 113.252 40.8324C113.912 40.5537 114.631 40.4144 115.408 40.4144ZM128.683 52.9324C127.539 52.9324 126.505 52.6757 125.581 52.1624C124.657 51.6344 123.931 50.901 123.403 49.9624C122.875 49.009 122.611 47.909 122.611 46.6624C122.611 45.4304 122.883 44.3377 123.425 43.3844C123.968 42.431 124.709 41.6977 125.647 41.1844C126.586 40.671 127.635 40.4144 128.793 40.4144C129.952 40.4144 131.001 40.671 131.939 41.1844C132.878 41.6977 133.619 42.431 134.161 43.3844C134.704 44.3377 134.975 45.4304 134.975 46.6624C134.975 47.8944 134.697 48.987 134.139 49.9404C133.582 50.8937 132.819 51.6344 131.851 52.1624C130.898 52.6757 129.842 52.9324 128.683 52.9324ZM128.683 50.7544C129.329 50.7544 129.93 50.6004 130.487 50.2924C131.059 49.9844 131.521 49.5224 131.873 48.9064C132.225 48.2904 132.401 47.5424 132.401 46.6624C132.401 45.7824 132.233 45.0417 131.895 44.4404C131.558 43.8244 131.111 43.3624 130.553 43.0544C129.996 42.7464 129.395 42.5924 128.749 42.5924C128.104 42.5924 127.503 42.7464 126.945 43.0544C126.403 43.3624 125.97 43.8244 125.647 44.4404C125.325 45.0417 125.163 45.7824 125.163 46.6624C125.163 47.9677 125.493 48.9797 126.153 49.6984C126.828 50.4024 127.671 50.7544 128.683 50.7544ZM143.571 40.4144C144.524 40.4144 145.375 40.6124 146.123 41.0084C146.885 41.4044 147.479 41.991 147.905 42.7684C148.33 43.5457 148.543 44.4844 148.543 45.5844V52.7344H146.057V45.9584C146.057 44.873 145.785 44.0444 145.243 43.4724C144.7 42.8857 143.959 42.5924 143.021 42.5924C142.082 42.5924 141.334 42.8857 140.777 43.4724C140.234 44.0444 139.963 44.873 139.963 45.9584V52.7344H137.455V40.6124H139.963V41.9984C140.373 41.4997 140.894 41.111 141.525 40.8324C142.17 40.5537 142.852 40.4144 143.571 40.4144ZM162.852 46.3764C162.852 46.831 162.822 47.2417 162.764 47.6084H153.502C153.575 48.5764 153.934 49.3537 154.58 49.9404C155.225 50.527 156.017 50.8204 156.956 50.8204C158.305 50.8204 159.258 50.2557 159.816 49.1264H162.522C162.155 50.241 161.488 51.1577 160.52 51.8764C159.566 52.5804 158.378 52.9324 156.956 52.9324C155.797 52.9324 154.756 52.6757 153.832 52.1624C152.922 51.6344 152.204 50.901 151.676 49.9624C151.162 49.009 150.906 47.909 150.906 46.6624C150.906 45.4157 151.155 44.323 151.654 43.3844C152.167 42.431 152.878 41.6977 153.788 41.1844C154.712 40.671 155.768 40.4144 156.956 40.4144C158.1 40.4144 159.119 40.6637 160.014 41.1624C160.908 41.661 161.605 42.365 162.104 43.2744C162.602 44.169 162.852 45.203 162.852 46.3764ZM160.234 45.5844C160.219 44.6604 159.889 43.9197 159.244 43.3624C158.598 42.805 157.799 42.5264 156.846 42.5264C155.98 42.5264 155.24 42.805 154.624 43.3624C154.008 43.905 153.641 44.6457 153.524 45.5844H160.234ZM173.543 42.3944C173.968 41.837 174.547 41.3677 175.281 40.9864C176.014 40.605 176.843 40.4144 177.767 40.4144C178.823 40.4144 179.783 40.6784 180.649 41.2064C181.529 41.7197 182.218 42.4457 182.717 43.3844C183.215 44.323 183.465 45.401 183.465 46.6184C183.465 47.8357 183.215 48.9284 182.717 49.8964C182.218 50.8497 181.529 51.5977 180.649 52.1404C179.783 52.6684 178.823 52.9324 177.767 52.9324C176.843 52.9324 176.021 52.749 175.303 52.3824C174.584 52.001 173.997 51.5317 173.543 50.9744V58.4984H171.035V40.6124H173.543V42.3944ZM180.913 46.6184C180.913 45.7824 180.737 45.0637 180.385 44.4624C180.047 43.8464 179.593 43.3844 179.021 43.0764C178.463 42.7537 177.862 42.5924 177.217 42.5924C176.586 42.5924 175.985 42.7537 175.413 43.0764C174.855 43.399 174.401 43.8684 174.049 44.4844C173.711 45.1004 173.543 45.8264 173.543 46.6624C173.543 47.4984 173.711 48.2317 174.049 48.8624C174.401 49.4784 174.855 49.9477 175.413 50.2704C175.985 50.593 176.586 50.7544 177.217 50.7544C177.862 50.7544 178.463 50.593 179.021 50.2704C179.593 49.933 180.047 49.449 180.385 48.8184C180.737 48.1877 180.913 47.4544 180.913 46.6184ZM197.055 46.3764C197.055 46.831 197.026 47.2417 196.967 47.6084H187.705C187.778 48.5764 188.138 49.3537 188.783 49.9404C189.428 50.527 190.22 50.8204 191.159 50.8204C192.508 50.8204 193.462 50.2557 194.019 49.1264H196.725C196.358 50.241 195.691 51.1577 194.723 51.8764C193.77 52.5804 192.582 52.9324 191.159 52.9324C190 52.9324 188.959 52.6757 188.035 52.1624C187.126 51.6344 186.407 50.901 185.879 49.9624C185.366 49.009 185.109 47.909 185.109 46.6624C185.109 45.4157 185.358 44.323 185.857 43.3844C186.37 42.431 187.082 41.6977 187.991 41.1844C188.915 40.671 189.971 40.4144 191.159 40.4144C192.303 40.4144 193.322 40.6637 194.217 41.1624C195.112 41.661 195.808 42.365 196.307 43.2744C196.806 44.169 197.055 45.203 197.055 46.3764ZM194.437 45.5844C194.422 44.6604 194.092 43.9197 193.447 43.3624C192.802 42.805 192.002 42.5264 191.049 42.5264C190.184 42.5264 189.443 42.805 188.827 43.3624C188.211 43.905 187.844 44.6457 187.727 45.5844H194.437ZM205.639 40.4144C206.592 40.4144 207.443 40.6124 208.191 41.0084C208.954 41.4044 209.548 41.991 209.973 42.7684C210.398 43.5457 210.611 44.4844 210.611 45.5844V52.7344H208.125V45.9584C208.125 44.873 207.854 44.0444 207.311 43.4724C206.768 42.8857 206.028 42.5924 205.089 42.5924C204.15 42.5924 203.402 42.8857 202.845 43.4724C202.302 44.0444 202.031 44.873 202.031 45.9584V52.7344H199.523V40.6124H202.031V41.9984C202.442 41.4997 202.962 41.111 203.593 40.8324C204.238 40.5537 204.92 40.4144 205.639 40.4144ZM224.92 46.3764C224.92 46.831 224.891 47.2417 224.832 47.6084H215.57C215.643 48.5764 216.003 49.3537 216.648 49.9404C217.293 50.527 218.085 50.8204 219.024 50.8204C220.373 50.8204 221.327 50.2557 221.884 49.1264H224.59C224.223 50.241 223.556 51.1577 222.588 51.8764C221.635 52.5804 220.447 52.9324 219.024 52.9324C217.865 52.9324 216.824 52.6757 215.9 52.1624C214.991 51.6344 214.272 50.901 213.744 49.9624C213.231 49.009 212.974 47.909 212.974 46.6624C212.974 45.4157 213.223 44.323 213.722 43.3844C214.235 42.431 214.947 41.6977 215.856 41.1844C216.78 40.671 217.836 40.4144 219.024 40.4144C220.168 40.4144 221.187 40.6637 222.082 41.1624C222.977 41.661 223.673 42.365 224.172 43.2744C224.671 44.169 224.92 45.203 224.92 46.3764ZM222.302 45.5844C222.287 44.6604 221.957 43.9197 221.312 43.3624C220.667 42.805 219.867 42.5264 218.914 42.5264C218.049 42.5264 217.308 42.805 216.692 43.3624C216.076 43.905 215.709 44.6457 215.592 45.5844H222.302ZM230.314 42.6584V49.3684C230.314 49.823 230.417 50.153 230.622 50.3584C230.842 50.549 231.209 50.6444 231.722 50.6444H233.262V52.7344H231.282C230.153 52.7344 229.288 52.4704 228.686 51.9424C228.085 51.4144 227.784 50.5564 227.784 49.3684V42.6584H226.354V40.6124H227.784V37.5984H230.314V40.6124H233.262V42.6584H230.314ZM238.082 42.3724C238.448 41.7564 238.932 41.2797 239.534 40.9424C240.15 40.5904 240.876 40.4144 241.712 40.4144V43.0104H241.074C240.091 43.0104 239.343 43.2597 238.83 43.7584C238.331 44.257 238.082 45.1224 238.082 46.3544V52.7344H235.574V40.6124H238.082V42.3724ZM243.181 46.6184C243.181 45.401 243.431 44.323 243.929 43.3844C244.443 42.4457 245.132 41.7197 245.997 41.2064C246.877 40.6784 247.845 40.4144 248.901 40.4144C249.855 40.4144 250.683 40.605 251.387 40.9864C252.106 41.353 252.678 41.815 253.103 42.3724V40.6124H255.633V52.7344H253.103V50.9304C252.678 51.5024 252.099 51.979 251.365 52.3604C250.632 52.7417 249.796 52.9324 248.857 52.9324C247.816 52.9324 246.863 52.6684 245.997 52.1404C245.132 51.5977 244.443 50.8497 243.929 49.8964C243.431 48.9284 243.181 47.8357 243.181 46.6184ZM253.103 46.6624C253.103 45.8264 252.927 45.1004 252.575 44.4844C252.238 43.8684 251.791 43.399 251.233 43.0764C250.676 42.7537 250.075 42.5924 249.429 42.5924C248.784 42.5924 248.183 42.7537 247.625 43.0764C247.068 43.3844 246.613 43.8464 246.261 44.4624C245.924 45.0637 245.755 45.7824 245.755 46.6184C245.755 47.4544 245.924 48.1877 246.261 48.8184C246.613 49.449 247.068 49.933 247.625 50.2704C248.197 50.593 248.799 50.7544 249.429 50.7544C250.075 50.7544 250.676 50.593 251.233 50.2704C251.791 49.9477 252.238 49.4784 252.575 48.8624C252.927 48.2317 253.103 47.4984 253.103 46.6624ZM261.853 42.6584V49.3684C261.853 49.823 261.956 50.153 262.161 50.3584C262.381 50.549 262.748 50.6444 263.261 50.6444H264.801V52.7344H262.821C261.692 52.7344 260.827 52.4704 260.225 51.9424C259.624 51.4144 259.323 50.5564 259.323 49.3684V42.6584H257.893V40.6124H259.323V37.5984H261.853V40.6124H264.801V42.6584H261.853ZM268.389 39.0064C267.934 39.0064 267.553 38.8524 267.245 38.5444C266.937 38.2364 266.783 37.855 266.783 37.4004C266.783 36.9457 266.937 36.5644 267.245 36.2564C267.553 35.9484 267.934 35.7944 268.389 35.7944C268.829 35.7944 269.203 35.9484 269.511 36.2564C269.819 36.5644 269.973 36.9457 269.973 37.4004C269.973 37.855 269.819 38.2364 269.511 38.5444C269.203 38.8524 268.829 39.0064 268.389 39.0064ZM269.621 40.6124V52.7344H267.113V40.6124H269.621ZM278.172 52.9324C277.028 52.9324 275.994 52.6757 275.07 52.1624C274.146 51.6344 273.42 50.901 272.892 49.9624C272.364 49.009 272.1 47.909 272.1 46.6624C272.1 45.4304 272.371 44.3377 272.914 43.3844C273.456 42.431 274.197 41.6977 275.136 41.1844C276.074 40.671 277.123 40.4144 278.282 40.4144C279.44 40.4144 280.489 40.671 281.428 41.1844C282.366 41.6977 283.107 42.431 283.65 43.3844C284.192 44.3377 284.464 45.4304 284.464 46.6624C284.464 47.8944 284.185 48.987 283.628 49.9404C283.07 50.8937 282.308 51.6344 281.34 52.1624C280.386 52.6757 279.33 52.9324 278.172 52.9324ZM278.172 50.7544C278.817 50.7544 279.418 50.6004 279.976 50.2924C280.548 49.9844 281.01 49.5224 281.362 48.9064C281.714 48.2904 281.89 47.5424 281.89 46.6624C281.89 45.7824 281.721 45.0417 281.384 44.4404C281.046 43.8244 280.599 43.3624 280.042 43.0544C279.484 42.7464 278.883 42.5924 278.238 42.5924C277.592 42.5924 276.991 42.7464 276.434 43.0544C275.891 43.3624 275.458 43.8244 275.136 44.4404C274.813 45.0417 274.652 45.7824 274.652 46.6624C274.652 47.9677 274.982 48.9797 275.642 49.6984C276.316 50.4024 277.16 50.7544 278.172 50.7544ZM293.059 40.4144C294.012 40.4144 294.863 40.6124 295.611 41.0084C296.374 41.4044 296.968 41.991 297.393 42.7684C297.818 43.5457 298.031 44.4844 298.031 45.5844V52.7344H295.545V45.9584C295.545 44.873 295.274 44.0444 294.731 43.4724C294.188 42.8857 293.448 42.5924 292.509 42.5924C291.57 42.5924 290.822 42.8857 290.265 43.4724C289.722 44.0444 289.451 44.873 289.451 45.9584V52.7344H286.943V40.6124H289.451V41.9984C289.862 41.4997 290.382 41.111 291.013 40.8324C291.658 40.5537 292.34 40.4144 293.059 40.4144ZM309.453 42.3724C309.82 41.7564 310.304 41.2797 310.905 40.9424C311.521 40.5904 312.247 40.4144 313.083 40.4144V43.0104H312.445C311.462 43.0104 310.714 43.2597 310.201 43.7584C309.702 44.257 309.453 45.1224 309.453 46.3544V52.7344H306.945V40.6124H309.453V42.3724ZM314.552 46.6184C314.552 45.401 314.802 44.323 315.3 43.3844C315.814 42.4457 316.503 41.7197 317.368 41.2064C318.248 40.6784 319.216 40.4144 320.272 40.4144C321.226 40.4144 322.054 40.605 322.758 40.9864C323.477 41.353 324.049 41.815 324.474 42.3724V40.6124H327.004V52.7344H324.474V50.9304C324.049 51.5024 323.47 51.979 322.736 52.3604C322.003 52.7417 321.167 52.9324 320.228 52.9324C319.187 52.9324 318.234 52.6684 317.368 52.1404C316.503 51.5977 315.814 50.8497 315.3 49.8964C314.802 48.9284 314.552 47.8357 314.552 46.6184ZM324.474 46.6624C324.474 45.8264 324.298 45.1004 323.946 44.4844C323.609 43.8684 323.162 43.399 322.604 43.0764C322.047 42.7537 321.446 42.5924 320.8 42.5924C320.155 42.5924 319.554 42.7537 318.996 43.0764C318.439 43.3844 317.984 43.8464 317.632 44.4624C317.295 45.0637 317.126 45.7824 317.126 46.6184C317.126 47.4544 317.295 48.1877 317.632 48.8184C317.984 49.449 318.439 49.933 318.996 50.2704C319.568 50.593 320.17 50.7544 320.8 50.7544C321.446 50.7544 322.047 50.593 322.604 50.2704C323.162 49.9477 323.609 49.4784 323.946 48.8624C324.298 48.2317 324.474 47.4984 324.474 46.6624ZM333.224 42.6584V49.3684C333.224 49.823 333.327 50.153 333.532 50.3584C333.752 50.549 334.119 50.6444 334.632 50.6444H336.172V52.7344H334.192C333.063 52.7344 332.198 52.4704 331.596 51.9424C330.995 51.4144 330.694 50.5564 330.694 49.3684V42.6584H329.264V40.6124H330.694V37.5984H333.224V40.6124H336.172V42.6584H333.224ZM349.594 46.3764C349.594 46.831 349.565 47.2417 349.506 47.6084H340.244C340.317 48.5764 340.677 49.3537 341.322 49.9404C341.967 50.527 342.759 50.8204 343.698 50.8204C345.047 50.8204 346.001 50.2557 346.558 49.1264H349.264C348.897 50.241 348.23 51.1577 347.262 51.8764C346.309 52.5804 345.121 52.9324 343.698 52.9324C342.539 52.9324 341.498 52.6757 340.574 52.1624C339.665 51.6344 338.946 50.901 338.418 49.9624C337.905 49.009 337.648 47.909 337.648 46.6624C337.648 45.4157 337.897 44.323 338.396 43.3844C338.909 42.431 339.621 41.6977 340.53 41.1844C341.454 40.671 342.51 40.4144 343.698 40.4144C344.842 40.4144 345.861 40.6637 346.756 41.1624C347.651 41.661 348.347 42.365 348.846 43.2744C349.345 44.169 349.594 45.203 349.594 46.3764ZM346.976 45.5844C346.961 44.6604 346.631 43.9197 345.986 43.3624C345.341 42.805 344.541 42.5264 343.588 42.5264C342.723 42.5264 341.982 42.805 341.366 43.3624C340.75 43.905 340.383 44.6457 340.266 45.5844H346.976Z"
              fill="white"
            />
            <g id="Group 1410135537">
              <path
                id="Ellipse 322"
                d="M131 210C131 195.226 133.91 180.597 139.564 166.948C145.217 153.299 153.504 140.897 163.95 130.45C174.397 120.004 186.799 111.717 200.448 106.064C214.097 100.41 228.726 97.5 243.5 97.5C258.274 97.5 272.903 100.41 286.552 106.064C300.201 111.717 312.603 120.004 323.05 130.45C333.496 140.897 341.783 153.299 347.436 166.948C353.09 180.597 356 195.226 356 210"
                stroke="#F6F8FF"
                strokeWidth={22}
                strokeLinecap="round"
              />
              <path
                id="Ellipse 323"
                d="M131 210C131 195.226 133.91 180.597 139.564 166.948C145.217 153.299 153.504 140.897 163.95 130.45C174.397 120.004 186.799 111.717 200.448 106.064C214.097 100.41 228.726 97.5 243.5 97.5C258.274 97.5 272.903 100.41 286.552 106.064C300.201 111.717 312.603 120.004 323.05 130.45C333.496 140.897 341.783 153.299 347.436 166.948C353.09 180.597 356 195.226 356 210"
                stroke="#CEDAF1"
                strokeWidth={13}
                strokeLinecap="round"
              />
              <motion.path
                variants={draw}
                id="Ellipse 324"
                d="M131.001 210C131.001 195.226 133.911 180.597 139.565 166.948C145.218 153.299 153.505 140.897 163.952 130.45C174.398 120.004 186.8 111.717 200.449 106.064C214.099 100.41 228.728 97.5 243.501 97.5C258.275 97.5 272.904 100.41 286.553 106.064C300.202 111.717 312.604 120.004 323.051 130.45C333.497 140.897 341.784 153.299 347.438 166.948C351.49 176.731 354.133 187.018 355.305 197.5"
                stroke="url(#paint10_linear_2218_352)"
                strokeWidth={13}
                strokeLinecap="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_2218_352"
              x="41.4648"
              y="-58.6367"
              width="234.98"
              height="224.918"
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
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={5} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2218_352"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2218_352"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_2218_352"
              x="211.617"
              y="-58.6367"
              width="234.98"
              height="224.918"
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
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={5} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2218_352"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2218_352"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_2218_352"
              x="127.746"
              y="80.4844"
              width="235.059"
              height="226.723"
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
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2218_352"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2218_352"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2218_352"
              x1="453.622"
              y1="147.164"
              x2="453.622"
              y2="328.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2218_352"
              x1="549.075"
              y1="23.7344"
              x2="549.075"
              y2="204.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2218_352"
              x1="34.4458"
              y1="147.164"
              x2="34.4458"
              y2="328.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2218_352"
              x1="-61.0112"
              y1="23.7344"
              x2="-61.0112"
              y2="204.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_2218_352"
              x1="158.955"
              y1="-2.76966"
              x2="158.955"
              y2="154.282"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} />
              <stop offset={1} stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_2218_352"
              x1="188.996"
              y1="147.57"
              x2="161.958"
              y2="21.9912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint6_linear_2218_352"
              x1="329.107"
              y1="-2.76966"
              x2="329.107"
              y2="154.282"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} />
              <stop offset={1} stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_2218_352"
              x1="359.148"
              y1="147.57"
              x2="332.111"
              y2="21.9912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint8_linear_2218_352"
              x1="245.276"
              y1="126.198"
              x2="245.276"
              y2="243.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint9_linear_2218_352"
              x1="245.276"
              y1="163.384"
              x2="245.276"
              y2="256.349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_2218_352"
              x1="351.5"
              y1="157.5"
              x2="132.794"
              y2="192.281"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3DFFA7" />
              <stop offset="0.60932" stopColor="#DEFE66" />
              <stop offset={1} stopColor="#014727" />
            </linearGradient>
          </defs>
        </motion.svg>
      )}
      {id === "Argentina" && (
        <motion.svg
          initial="hidden"
          whileInView="visible"
          viewBox="0 0 491 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 1410135536">
            <foreignObject x={0} y={0} width={0} height={0}>
              <div
                style={{
                  backdropFilter: "blur(20px)",
                  clipPath: "url(#bgblur_0_3994_16879_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              />
            </foreignObject>
            <g id="Rectangle 569" data-figma-bg-blur-radius={40}>
              <rect
                x={1}
                y={1}
                width="488.063"
                height="253.181"
                rx={20}
                fill="#21251C"
              />
              <rect
                x="0.5"
                y="0.5"
                width="489.063"
                height="254.181"
                rx="20.5"
                stroke="white"
                strokeOpacity="0.3"
              />
            </g>
            <g id="Mask group" opacity="0.26">
              <mask
                id="mask0_3994_16879"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={1}
                y={1}
                width={489}
                height={254}
              >
                <path
                  id="Rectangle 570"
                  d="M1 17C1 8.16345 8.16344 1 17 1H473.063C481.9 1 489.063 8.16344 489.063 17V238.181C489.063 247.018 481.9 254.181 473.063 254.181H17C8.16343 254.181 1 247.018 1 238.181V17Z"
                  fill="#1C2025"
                />
              </mask>
              <g mask="url(#mask0_3994_16879)">
                <g id="Group 772">
                  <path
                    id="Ellipse 252"
                    opacity="0.6"
                    d="M454.621 149.164C506.603 149.164 548.661 189.321 548.661 238.756C548.661 288.191 506.603 328.347 454.621 328.347C402.639 328.346 360.582 288.191 360.582 238.756C360.582 189.321 402.639 149.164 454.621 149.164Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint0_linear_3994_16879)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 254"
                    opacity="0.3"
                    d="M550.074 25.7344C602.057 25.7344 644.114 65.8909 644.114 115.326C644.114 164.761 602.056 204.917 550.074 204.917C498.092 204.917 456.035 164.761 456.035 115.326C456.035 65.891 498.092 25.7346 550.074 25.7344Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint1_linear_3994_16879)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 253"
                    opacity="0.6"
                    d="M35.4453 149.164C87.4276 149.164 129.485 189.321 129.485 238.756C129.485 288.191 87.4275 328.347 35.4453 328.347C-16.5366 328.346 -58.5935 288.191 -58.5938 238.756C-58.5938 189.321 -16.5368 149.164 35.4453 149.164Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint2_linear_3994_16879)"
                    strokeWidth={2}
                  />
                  <path
                    id="Ellipse 255"
                    opacity="0.3"
                    d="M-60.0117 25.7344C-8.0294 25.7344 34.0283 65.8909 34.0283 115.326C34.0281 164.761 -8.02955 204.917 -60.0117 204.917C-111.994 204.917 -154.051 164.761 -154.051 115.326C-154.051 65.891 -111.994 25.7346 -60.0117 25.7344Z"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint3_linear_3994_16879)"
                    strokeWidth={2}
                  />
                  <g id="Ellipse 250" filter="url(#filter0_d_3994_16879)">
                    <ellipse
                      cx="159.955"
                      cy="52.8225"
                      rx="107.49"
                      ry="102.459"
                      fill="url(#paint4_linear_3994_16879)"
                      fillOpacity="0.5"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M159.955 -48.6367C218.814 -48.6367 266.445 -3.16735 266.445 52.8223C266.445 108.812 218.814 154.282 159.955 154.282C101.096 154.282 53.4648 108.812 53.4648 52.8223C53.465 -3.16738 101.097 -48.6367 159.955 -48.6367Z"
                      stroke="url(#paint5_linear_3994_16879)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g id="Ellipse 251" filter="url(#filter1_d_3994_16879)">
                    <ellipse
                      cx="330.107"
                      cy="52.8225"
                      rx="107.49"
                      ry="102.459"
                      fill="url(#paint6_linear_3994_16879)"
                      fillOpacity="0.5"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M330.107 -48.6367C388.966 -48.6367 436.598 -3.16735 436.598 52.8223C436.598 108.812 388.966 154.282 330.107 154.282C271.249 154.282 223.617 108.812 223.617 52.8223C223.617 -3.16738 271.249 -48.6367 330.107 -48.6367Z"
                      stroke="url(#paint7_linear_3994_16879)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g id="Ellipse 249" filter="url(#filter2_d_3994_16879)">
                    <ellipse
                      cx="246.276"
                      cy="194.845"
                      rx="97.5297"
                      ry="93.3605"
                      fill="url(#paint8_linear_3994_16879)"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M246.275 102.484C299.629 102.484 342.806 143.876 342.806 194.845C342.806 245.813 299.629 287.205 246.275 287.205C192.922 287.205 149.746 245.813 149.746 194.845C149.746 143.876 192.922 102.485 246.275 102.484Z"
                      stroke="url(#paint9_linear_3994_16879)"
                      strokeWidth={2}
                      shapeRendering="crispEdges"
                    />
                  </g>
                </g>
              </g>
            </g>
            <path
              id="PÃ¡gina de inicio"
              opacity="0.9"
              d="M209.458 174.44C209.629 175.379 210.013 176.104 210.61 176.616C211.229 177.107 212.05 177.352 213.074 177.352C214.397 177.352 215.357 176.808 215.954 175.72C216.551 174.611 216.85 172.755 216.85 170.152C216.359 170.835 215.666 171.368 214.77 171.752C213.895 172.136 212.946 172.328 211.922 172.328C210.557 172.328 209.319 172.051 208.21 171.496C207.122 170.92 206.258 170.077 205.618 168.968C204.978 167.837 204.658 166.472 204.658 164.872C204.658 162.504 205.362 160.627 206.77 159.24C208.178 157.832 210.098 157.128 212.53 157.128C215.559 157.128 217.693 158.099 218.93 160.04C220.189 161.981 220.818 164.904 220.818 168.808C220.818 171.581 220.573 173.853 220.082 175.624C219.613 177.395 218.791 178.739 217.618 179.656C216.466 180.573 214.887 181.032 212.882 181.032C211.303 181.032 209.959 180.733 208.85 180.136C207.741 179.517 206.887 178.717 206.29 177.736C205.714 176.733 205.383 175.635 205.298 174.44H209.458ZM212.85 168.68C213.959 168.68 214.834 168.339 215.474 167.656C216.114 166.973 216.434 166.056 216.434 164.904C216.434 163.645 216.093 162.675 215.41 161.992C214.749 161.288 213.842 160.936 212.69 160.936C211.538 160.936 210.621 161.299 209.938 162.024C209.277 162.728 208.946 163.667 208.946 164.84C208.946 165.971 209.266 166.899 209.906 167.624C210.567 168.328 211.549 168.68 212.85 168.68ZM225.713 175.944C227.761 174.237 229.393 172.819 230.609 171.688C231.825 170.536 232.839 169.341 233.649 168.104C234.46 166.867 234.865 165.651 234.865 164.456C234.865 163.368 234.609 162.515 234.097 161.896C233.585 161.277 232.796 160.968 231.729 160.968C230.663 160.968 229.841 161.331 229.265 162.056C228.689 162.76 228.391 163.731 228.369 164.968H224.017C224.103 162.408 224.86 160.467 226.289 159.144C227.74 157.821 229.575 157.16 231.793 157.16C234.225 157.16 236.092 157.811 237.393 159.112C238.695 160.392 239.345 162.088 239.345 164.2C239.345 165.864 238.897 167.453 238.001 168.968C237.105 170.483 236.081 171.805 234.929 172.936C233.777 174.045 232.273 175.389 230.417 176.968H239.857V180.68H224.049V177.352L225.713 175.944ZM245.176 181.224C244.366 181.224 243.694 180.979 243.16 180.488C242.648 179.976 242.392 179.347 242.392 178.6C242.392 177.853 242.648 177.235 243.16 176.744C243.694 176.232 244.366 175.976 245.176 175.976C245.966 175.976 246.616 176.232 247.128 176.744C247.64 177.235 247.896 177.853 247.896 178.6C247.896 179.347 247.64 179.976 247.128 180.488C246.616 180.979 245.966 181.224 245.176 181.224ZM250.449 161.8V157.672H258.161V181H253.553V161.8H250.449ZM262.075 163.4C262.075 161.779 262.544 160.509 263.483 159.592C264.443 158.675 265.669 158.216 267.163 158.216C268.656 158.216 269.872 158.675 270.811 159.592C271.771 160.509 272.251 161.779 272.251 163.4C272.251 165.043 271.771 166.323 270.811 167.24C269.872 168.157 268.656 168.616 267.163 168.616C265.669 168.616 264.443 168.157 263.483 167.24C262.544 166.323 262.075 165.043 262.075 163.4ZM282.619 158.6L270.043 181H265.691L278.235 158.6H282.619ZM267.131 160.904C265.957 160.904 265.371 161.736 265.371 163.4C265.371 165.085 265.957 165.928 267.131 165.928C267.707 165.928 268.155 165.725 268.475 165.32C268.795 164.893 268.955 164.253 268.955 163.4C268.955 161.736 268.347 160.904 267.131 160.904ZM276.123 176.168C276.123 174.525 276.592 173.256 277.531 172.36C278.491 171.443 279.717 170.984 281.211 170.984C282.704 170.984 283.909 171.443 284.827 172.36C285.765 173.256 286.235 174.525 286.235 176.168C286.235 177.811 285.765 179.091 284.827 180.008C283.909 180.925 282.704 181.384 281.211 181.384C279.696 181.384 278.469 180.925 277.531 180.008C276.592 179.091 276.123 177.811 276.123 176.168ZM281.179 173.672C279.963 173.672 279.355 174.504 279.355 176.168C279.355 177.853 279.963 178.696 281.179 178.696C282.373 178.696 282.971 177.853 282.971 176.168C282.971 174.504 282.373 173.672 281.179 173.672Z"
              fill="white"
            />
            <path
              id="PÃ¡gina de inicio_2"
              d="M32.5903 53.8884C31.5637 53.8884 30.6397 53.7124 29.8183 53.3604C28.997 52.9937 28.3517 52.4804 27.8823 51.8204C27.413 51.1604 27.1783 50.3904 27.1783 49.5104H29.8623C29.921 50.1704 30.1777 50.713 30.6323 51.1384C31.1017 51.5637 31.7543 51.7764 32.5903 51.7764C33.4557 51.7764 34.1303 51.571 34.6143 51.1604C35.0983 50.735 35.3403 50.1924 35.3403 49.5324C35.3403 49.019 35.1863 48.601 34.8783 48.2784C34.585 47.9557 34.211 47.7064 33.7563 47.5304C33.3163 47.3544 32.7003 47.1637 31.9083 46.9584C30.911 46.6944 30.097 46.4304 29.4663 46.1664C28.8503 45.8877 28.3223 45.4624 27.8823 44.8904C27.4423 44.3184 27.2223 43.5557 27.2223 42.6024C27.2223 41.7224 27.4423 40.9524 27.8823 40.2924C28.3223 39.6324 28.9383 39.1264 29.7303 38.7744C30.5223 38.4224 31.439 38.2464 32.4803 38.2464C33.9617 38.2464 35.1717 38.6204 36.1103 39.3684C37.0637 40.1017 37.5917 41.1137 37.6943 42.4044H34.9223C34.8783 41.847 34.6143 41.3704 34.1303 40.9744C33.6463 40.5784 33.0083 40.3804 32.2163 40.3804C31.4977 40.3804 30.911 40.5637 30.4563 40.9304C30.0017 41.297 29.7743 41.825 29.7743 42.5144C29.7743 42.9837 29.9137 43.3724 30.1923 43.6804C30.4857 43.9737 30.8523 44.2084 31.2923 44.3844C31.7323 44.5604 32.3337 44.751 33.0963 44.9564C34.1083 45.235 34.9297 45.5137 35.5603 45.7924C36.2057 46.071 36.7483 46.5037 37.1883 47.0904C37.643 47.6624 37.8703 48.4324 37.8703 49.4004C37.8703 50.1777 37.6577 50.911 37.2323 51.6004C36.8217 52.2897 36.213 52.847 35.4063 53.2724C34.6143 53.683 33.6757 53.8884 32.5903 53.8884ZM55.5037 41.4144C56.457 41.4144 57.3077 41.6124 58.0557 42.0084C58.8184 42.4044 59.4124 42.991 59.8377 43.7684C60.2777 44.5457 60.4977 45.4844 60.4977 46.5844V53.7344H58.0117V46.9584C58.0117 45.873 57.7404 45.0444 57.1977 44.4724C56.655 43.8857 55.9144 43.5924 54.9757 43.5924C54.037 43.5924 53.289 43.8857 52.7317 44.4724C52.189 45.0444 51.9177 45.873 51.9177 46.9584V53.7344H49.4317V46.9584C49.4317 45.873 49.1604 45.0444 48.6177 44.4724C48.075 43.8857 47.3344 43.5924 46.3957 43.5924C45.457 43.5924 44.709 43.8857 44.1517 44.4724C43.609 45.0444 43.3377 45.873 43.3377 46.9584V53.7344H40.8297V41.6124H43.3377V42.9984C43.7484 42.4997 44.269 42.111 44.8997 41.8324C45.5304 41.5537 46.205 41.4144 46.9237 41.4144C47.8917 41.4144 48.757 41.6197 49.5197 42.0304C50.2824 42.441 50.869 43.035 51.2797 43.8124C51.6464 43.079 52.2184 42.4997 52.9957 42.0744C53.773 41.6344 54.609 41.4144 55.5037 41.4144ZM62.8531 47.6184C62.8531 46.401 63.1024 45.323 63.6011 44.3844C64.1144 43.4457 64.8037 42.7197 65.6691 42.2064C66.5491 41.6784 67.5171 41.4144 68.5731 41.4144C69.5264 41.4144 70.3551 41.605 71.0591 41.9864C71.7777 42.353 72.3497 42.815 72.7751 43.3724V41.6124H75.3051V53.7344H72.7751V51.9304C72.3497 52.5024 71.7704 52.979 71.0371 53.3604C70.3037 53.7417 69.4677 53.9324 68.5291 53.9324C67.4877 53.9324 66.5344 53.6684 65.6691 53.1404C64.8037 52.5977 64.1144 51.8497 63.6011 50.8964C63.1024 49.9284 62.8531 48.8357 62.8531 47.6184ZM72.7751 47.6624C72.7751 46.8264 72.5991 46.1004 72.2471 45.4844C71.9097 44.8684 71.4624 44.399 70.9051 44.0764C70.3477 43.7537 69.7464 43.5924 69.1011 43.5924C68.4557 43.5924 67.8544 43.7537 67.2971 44.0764C66.7397 44.3844 66.2851 44.8464 65.9331 45.4624C65.5957 46.0637 65.4271 46.7824 65.4271 47.6184C65.4271 48.4544 65.5957 49.1877 65.9331 49.8184C66.2851 50.449 66.7397 50.933 67.2971 51.2704C67.8691 51.593 68.4704 51.7544 69.1011 51.7544C69.7464 51.7544 70.3477 51.593 70.9051 51.2704C71.4624 50.9477 71.9097 50.4784 72.2471 49.8624C72.5991 49.2317 72.7751 48.4984 72.7751 47.6624ZM81.1072 43.3724C81.4739 42.7564 81.9579 42.2797 82.5592 41.9424C83.1752 41.5904 83.9012 41.4144 84.7372 41.4144V44.0104H84.0992C83.1166 44.0104 82.3686 44.2597 81.8552 44.7584C81.3566 45.257 81.1072 46.1224 81.1072 47.3544V53.7344H78.5992V41.6124H81.1072V43.3724ZM89.9686 43.6584V50.3684C89.9686 50.823 90.0712 51.153 90.2766 51.3584C90.4966 51.549 90.8632 51.6444 91.3766 51.6444H92.9166V53.7344H90.9366C89.8072 53.7344 88.9419 53.4704 88.3406 52.9424C87.7392 52.4144 87.4386 51.5564 87.4386 50.3684V43.6584H86.0086V41.6124H87.4386V38.5984H89.9686V41.6124H92.9166V43.6584H89.9686ZM97.7361 43.3944C98.1615 42.837 98.7408 42.3677 99.4741 41.9864C100.207 41.605 101.036 41.4144 101.96 41.4144C103.016 41.4144 103.977 41.6784 104.842 42.2064C105.722 42.7197 106.411 43.4457 106.91 44.3844C107.409 45.323 107.658 46.401 107.658 47.6184C107.658 48.8357 107.409 49.9284 106.91 50.8964C106.411 51.8497 105.722 52.5977 104.842 53.1404C103.977 53.6684 103.016 53.9324 101.96 53.9324C101.036 53.9324 100.215 53.749 99.4961 53.3824C98.7775 53.001 98.1908 52.5317 97.7361 51.9744V59.4984H95.2281V41.6124H97.7361V43.3944ZM105.106 47.6184C105.106 46.7824 104.93 46.0637 104.578 45.4624C104.241 44.8464 103.786 44.3844 103.214 44.0764C102.657 43.7537 102.055 43.5924 101.41 43.5924C100.779 43.5924 100.178 43.7537 99.6061 44.0764C99.0488 44.399 98.5941 44.8684 98.2421 45.4844C97.9048 46.1004 97.7361 46.8264 97.7361 47.6624C97.7361 48.4984 97.9048 49.2317 98.2421 49.8624C98.5941 50.4784 99.0488 50.9477 99.6061 51.2704C100.178 51.593 100.779 51.7544 101.41 51.7544C102.055 51.7544 102.657 51.593 103.214 51.2704C103.786 50.933 104.241 50.449 104.578 49.8184C104.93 49.1877 105.106 48.4544 105.106 47.6184ZM116.408 41.4144C117.332 41.4144 118.154 41.6124 118.872 42.0084C119.606 42.4044 120.178 42.991 120.588 43.7684C121.014 44.5457 121.226 45.4844 121.226 46.5844V53.7344H118.74V46.9584C118.74 45.873 118.469 45.0444 117.926 44.4724C117.384 43.8857 116.643 43.5924 115.704 43.5924C114.766 43.5924 114.018 43.8857 113.46 44.4724C112.918 45.0444 112.646 45.873 112.646 46.9584V53.7344H110.138V37.4544H112.646V43.0204C113.072 42.507 113.607 42.111 114.252 41.8324C114.912 41.5537 115.631 41.4144 116.408 41.4144ZM129.683 53.9324C128.539 53.9324 127.505 53.6757 126.581 53.1624C125.657 52.6344 124.931 51.901 124.403 50.9624C123.875 50.009 123.611 48.909 123.611 47.6624C123.611 46.4304 123.883 45.3377 124.425 44.3844C124.968 43.431 125.709 42.6977 126.647 42.1844C127.586 41.671 128.635 41.4144 129.793 41.4144C130.952 41.4144 132.001 41.671 132.939 42.1844C133.878 42.6977 134.619 43.431 135.161 44.3844C135.704 45.3377 135.975 46.4304 135.975 47.6624C135.975 48.8944 135.697 49.987 135.139 50.9404C134.582 51.8937 133.819 52.6344 132.851 53.1624C131.898 53.6757 130.842 53.9324 129.683 53.9324ZM129.683 51.7544C130.329 51.7544 130.93 51.6004 131.487 51.2924C132.059 50.9844 132.521 50.5224 132.873 49.9064C133.225 49.2904 133.401 48.5424 133.401 47.6624C133.401 46.7824 133.233 46.0417 132.895 45.4404C132.558 44.8244 132.111 44.3624 131.553 44.0544C130.996 43.7464 130.395 43.5924 129.749 43.5924C129.104 43.5924 128.503 43.7464 127.945 44.0544C127.403 44.3624 126.97 44.8244 126.647 45.4404C126.325 46.0417 126.163 46.7824 126.163 47.6624C126.163 48.9677 126.493 49.9797 127.153 50.6984C127.828 51.4024 128.671 51.7544 129.683 51.7544ZM144.571 41.4144C145.524 41.4144 146.375 41.6124 147.123 42.0084C147.885 42.4044 148.479 42.991 148.905 43.7684C149.33 44.5457 149.543 45.4844 149.543 46.5844V53.7344H147.057V46.9584C147.057 45.873 146.785 45.0444 146.243 44.4724C145.7 43.8857 144.959 43.5924 144.021 43.5924C143.082 43.5924 142.334 43.8857 141.777 44.4724C141.234 45.0444 140.963 45.873 140.963 46.9584V53.7344H138.455V41.6124H140.963V42.9984C141.373 42.4997 141.894 42.111 142.525 41.8324C143.17 41.5537 143.852 41.4144 144.571 41.4144ZM163.852 47.3764C163.852 47.831 163.822 48.2417 163.764 48.6084H154.502C154.575 49.5764 154.934 50.3537 155.58 50.9404C156.225 51.527 157.017 51.8204 157.956 51.8204C159.305 51.8204 160.258 51.2557 160.816 50.1264H163.522C163.155 51.241 162.488 52.1577 161.52 52.8764C160.566 53.5804 159.378 53.9324 157.956 53.9324C156.797 53.9324 155.756 53.6757 154.832 53.1624C153.922 52.6344 153.204 51.901 152.676 50.9624C152.162 50.009 151.906 48.909 151.906 47.6624C151.906 46.4157 152.155 45.323 152.654 44.3844C153.167 43.431 153.878 42.6977 154.788 42.1844C155.712 41.671 156.768 41.4144 157.956 41.4144C159.1 41.4144 160.119 41.6637 161.014 42.1624C161.908 42.661 162.605 43.365 163.104 44.2744C163.602 45.169 163.852 46.203 163.852 47.3764ZM161.234 46.5844C161.219 45.6604 160.889 44.9197 160.244 44.3624C159.598 43.805 158.799 43.5264 157.846 43.5264C156.98 43.5264 156.24 43.805 155.624 44.3624C155.008 44.905 154.641 45.6457 154.524 46.5844H161.234ZM174.543 43.3944C174.968 42.837 175.547 42.3677 176.281 41.9864C177.014 41.605 177.843 41.4144 178.767 41.4144C179.823 41.4144 180.783 41.6784 181.649 42.2064C182.529 42.7197 183.218 43.4457 183.717 44.3844C184.215 45.323 184.465 46.401 184.465 47.6184C184.465 48.8357 184.215 49.9284 183.717 50.8964C183.218 51.8497 182.529 52.5977 181.649 53.1404C180.783 53.6684 179.823 53.9324 178.767 53.9324C177.843 53.9324 177.021 53.749 176.303 53.3824C175.584 53.001 174.997 52.5317 174.543 51.9744V59.4984H172.035V41.6124H174.543V43.3944ZM181.913 47.6184C181.913 46.7824 181.737 46.0637 181.385 45.4624C181.047 44.8464 180.593 44.3844 180.021 44.0764C179.463 43.7537 178.862 43.5924 178.217 43.5924C177.586 43.5924 176.985 43.7537 176.413 44.0764C175.855 44.399 175.401 44.8684 175.049 45.4844C174.711 46.1004 174.543 46.8264 174.543 47.6624C174.543 48.4984 174.711 49.2317 175.049 49.8624C175.401 50.4784 175.855 50.9477 176.413 51.2704C176.985 51.593 177.586 51.7544 178.217 51.7544C178.862 51.7544 179.463 51.593 180.021 51.2704C180.593 50.933 181.047 50.449 181.385 49.8184C181.737 49.1877 181.913 48.4544 181.913 47.6184ZM198.055 47.3764C198.055 47.831 198.026 48.2417 197.967 48.6084H188.705C188.778 49.5764 189.138 50.3537 189.783 50.9404C190.428 51.527 191.22 51.8204 192.159 51.8204C193.508 51.8204 194.462 51.2557 195.019 50.1264H197.725C197.358 51.241 196.691 52.1577 195.723 52.8764C194.77 53.5804 193.582 53.9324 192.159 53.9324C191 53.9324 189.959 53.6757 189.035 53.1624C188.126 52.6344 187.407 51.901 186.879 50.9624C186.366 50.009 186.109 48.909 186.109 47.6624C186.109 46.4157 186.358 45.323 186.857 44.3844C187.37 43.431 188.082 42.6977 188.991 42.1844C189.915 41.671 190.971 41.4144 192.159 41.4144C193.303 41.4144 194.322 41.6637 195.217 42.1624C196.112 42.661 196.808 43.365 197.307 44.2744C197.806 45.169 198.055 46.203 198.055 47.3764ZM195.437 46.5844C195.422 45.6604 195.092 44.9197 194.447 44.3624C193.802 43.805 193.002 43.5264 192.049 43.5264C191.184 43.5264 190.443 43.805 189.827 44.3624C189.211 44.905 188.844 45.6457 188.727 46.5844H195.437ZM206.639 41.4144C207.592 41.4144 208.443 41.6124 209.191 42.0084C209.954 42.4044 210.548 42.991 210.973 43.7684C211.398 44.5457 211.611 45.4844 211.611 46.5844V53.7344H209.125V46.9584C209.125 45.873 208.854 45.0444 208.311 44.4724C207.768 43.8857 207.028 43.5924 206.089 43.5924C205.15 43.5924 204.402 43.8857 203.845 44.4724C203.302 45.0444 203.031 45.873 203.031 46.9584V53.7344H200.523V41.6124H203.031V42.9984C203.442 42.4997 203.962 42.111 204.593 41.8324C205.238 41.5537 205.92 41.4144 206.639 41.4144ZM225.92 47.3764C225.92 47.831 225.891 48.2417 225.832 48.6084H216.57C216.643 49.5764 217.003 50.3537 217.648 50.9404C218.293 51.527 219.085 51.8204 220.024 51.8204C221.373 51.8204 222.327 51.2557 222.884 50.1264H225.59C225.223 51.241 224.556 52.1577 223.588 52.8764C222.635 53.5804 221.447 53.9324 220.024 53.9324C218.865 53.9324 217.824 53.6757 216.9 53.1624C215.991 52.6344 215.272 51.901 214.744 50.9624C214.231 50.009 213.974 48.909 213.974 47.6624C213.974 46.4157 214.223 45.323 214.722 44.3844C215.235 43.431 215.947 42.6977 216.856 42.1844C217.78 41.671 218.836 41.4144 220.024 41.4144C221.168 41.4144 222.187 41.6637 223.082 42.1624C223.977 42.661 224.673 43.365 225.172 44.2744C225.671 45.169 225.92 46.203 225.92 47.3764ZM223.302 46.5844C223.287 45.6604 222.957 44.9197 222.312 44.3624C221.667 43.805 220.867 43.5264 219.914 43.5264C219.049 43.5264 218.308 43.805 217.692 44.3624C217.076 44.905 216.709 45.6457 216.592 46.5844H223.302ZM231.314 43.6584V50.3684C231.314 50.823 231.417 51.153 231.622 51.3584C231.842 51.549 232.209 51.6444 232.722 51.6444H234.262V53.7344H232.282C231.153 53.7344 230.288 53.4704 229.686 52.9424C229.085 52.4144 228.784 51.5564 228.784 50.3684V43.6584H227.354V41.6124H228.784V38.5984H231.314V41.6124H234.262V43.6584H231.314ZM239.082 43.3724C239.448 42.7564 239.932 42.2797 240.534 41.9424C241.15 41.5904 241.876 41.4144 242.712 41.4144V44.0104H242.074C241.091 44.0104 240.343 44.2597 239.83 44.7584C239.331 45.257 239.082 46.1224 239.082 47.3544V53.7344H236.574V41.6124H239.082V43.3724ZM244.181 47.6184C244.181 46.401 244.431 45.323 244.929 44.3844C245.443 43.4457 246.132 42.7197 246.997 42.2064C247.877 41.6784 248.845 41.4144 249.901 41.4144C250.855 41.4144 251.683 41.605 252.387 41.9864C253.106 42.353 253.678 42.815 254.103 43.3724V41.6124H256.633V53.7344H254.103V51.9304C253.678 52.5024 253.099 52.979 252.365 53.3604C251.632 53.7417 250.796 53.9324 249.857 53.9324C248.816 53.9324 247.863 53.6684 246.997 53.1404C246.132 52.5977 245.443 51.8497 244.929 50.8964C244.431 49.9284 244.181 48.8357 244.181 47.6184ZM254.103 47.6624C254.103 46.8264 253.927 46.1004 253.575 45.4844C253.238 44.8684 252.791 44.399 252.233 44.0764C251.676 43.7537 251.075 43.5924 250.429 43.5924C249.784 43.5924 249.183 43.7537 248.625 44.0764C248.068 44.3844 247.613 44.8464 247.261 45.4624C246.924 46.0637 246.755 46.7824 246.755 47.6184C246.755 48.4544 246.924 49.1877 247.261 49.8184C247.613 50.449 248.068 50.933 248.625 51.2704C249.197 51.593 249.799 51.7544 250.429 51.7544C251.075 51.7544 251.676 51.593 252.233 51.2704C252.791 50.9477 253.238 50.4784 253.575 49.8624C253.927 49.2317 254.103 48.4984 254.103 47.6624ZM262.853 43.6584V50.3684C262.853 50.823 262.956 51.153 263.161 51.3584C263.381 51.549 263.748 51.6444 264.261 51.6444H265.801V53.7344H263.821C262.692 53.7344 261.827 53.4704 261.225 52.9424C260.624 52.4144 260.323 51.5564 260.323 50.3684V43.6584H258.893V41.6124H260.323V38.5984H262.853V41.6124H265.801V43.6584H262.853ZM269.389 40.0064C268.934 40.0064 268.553 39.8524 268.245 39.5444C267.937 39.2364 267.783 38.855 267.783 38.4004C267.783 37.9457 267.937 37.5644 268.245 37.2564C268.553 36.9484 268.934 36.7944 269.389 36.7944C269.829 36.7944 270.203 36.9484 270.511 37.2564C270.819 37.5644 270.973 37.9457 270.973 38.4004C270.973 38.855 270.819 39.2364 270.511 39.5444C270.203 39.8524 269.829 40.0064 269.389 40.0064ZM270.621 41.6124V53.7344H268.113V41.6124H270.621ZM279.172 53.9324C278.028 53.9324 276.994 53.6757 276.07 53.1624C275.146 52.6344 274.42 51.901 273.892 50.9624C273.364 50.009 273.1 48.909 273.1 47.6624C273.1 46.4304 273.371 45.3377 273.914 44.3844C274.456 43.431 275.197 42.6977 276.136 42.1844C277.074 41.671 278.123 41.4144 279.282 41.4144C280.44 41.4144 281.489 41.671 282.428 42.1844C283.366 42.6977 284.107 43.431 284.65 44.3844C285.192 45.3377 285.464 46.4304 285.464 47.6624C285.464 48.8944 285.185 49.987 284.628 50.9404C284.07 51.8937 283.308 52.6344 282.34 53.1624C281.386 53.6757 280.33 53.9324 279.172 53.9324ZM279.172 51.7544C279.817 51.7544 280.418 51.6004 280.976 51.2924C281.548 50.9844 282.01 50.5224 282.362 49.9064C282.714 49.2904 282.89 48.5424 282.89 47.6624C282.89 46.7824 282.721 46.0417 282.384 45.4404C282.046 44.8244 281.599 44.3624 281.042 44.0544C280.484 43.7464 279.883 43.5924 279.238 43.5924C278.592 43.5924 277.991 43.7464 277.434 44.0544C276.891 44.3624 276.458 44.8244 276.136 45.4404C275.813 46.0417 275.652 46.7824 275.652 47.6624C275.652 48.9677 275.982 49.9797 276.642 50.6984C277.316 51.4024 278.16 51.7544 279.172 51.7544ZM294.059 41.4144C295.012 41.4144 295.863 41.6124 296.611 42.0084C297.374 42.4044 297.968 42.991 298.393 43.7684C298.818 44.5457 299.031 45.4844 299.031 46.5844V53.7344H296.545V46.9584C296.545 45.873 296.274 45.0444 295.731 44.4724C295.188 43.8857 294.448 43.5924 293.509 43.5924C292.57 43.5924 291.822 43.8857 291.265 44.4724C290.722 45.0444 290.451 45.873 290.451 46.9584V53.7344H287.943V41.6124H290.451V42.9984C290.862 42.4997 291.382 42.111 292.013 41.8324C292.658 41.5537 293.34 41.4144 294.059 41.4144ZM310.453 43.3724C310.82 42.7564 311.304 42.2797 311.905 41.9424C312.521 41.5904 313.247 41.4144 314.083 41.4144V44.0104H313.445C312.462 44.0104 311.714 44.2597 311.201 44.7584C310.702 45.257 310.453 46.1224 310.453 47.3544V53.7344H307.945V41.6124H310.453V43.3724ZM315.552 47.6184C315.552 46.401 315.802 45.323 316.3 44.3844C316.814 43.4457 317.503 42.7197 318.368 42.2064C319.248 41.6784 320.216 41.4144 321.272 41.4144C322.226 41.4144 323.054 41.605 323.758 41.9864C324.477 42.353 325.049 42.815 325.474 43.3724V41.6124H328.004V53.7344H325.474V51.9304C325.049 52.5024 324.47 52.979 323.736 53.3604C323.003 53.7417 322.167 53.9324 321.228 53.9324C320.187 53.9324 319.234 53.6684 318.368 53.1404C317.503 52.5977 316.814 51.8497 316.3 50.8964C315.802 49.9284 315.552 48.8357 315.552 47.6184ZM325.474 47.6624C325.474 46.8264 325.298 46.1004 324.946 45.4844C324.609 44.8684 324.162 44.399 323.604 44.0764C323.047 43.7537 322.446 43.5924 321.8 43.5924C321.155 43.5924 320.554 43.7537 319.996 44.0764C319.439 44.3844 318.984 44.8464 318.632 45.4624C318.295 46.0637 318.126 46.7824 318.126 47.6184C318.126 48.4544 318.295 49.1877 318.632 49.8184C318.984 50.449 319.439 50.933 319.996 51.2704C320.568 51.593 321.17 51.7544 321.8 51.7544C322.446 51.7544 323.047 51.593 323.604 51.2704C324.162 50.9477 324.609 50.4784 324.946 49.8624C325.298 49.2317 325.474 48.4984 325.474 47.6624ZM334.224 43.6584V50.3684C334.224 50.823 334.327 51.153 334.532 51.3584C334.752 51.549 335.119 51.6444 335.632 51.6444H337.172V53.7344H335.192C334.063 53.7344 333.198 53.4704 332.596 52.9424C331.995 52.4144 331.694 51.5564 331.694 50.3684V43.6584H330.264V41.6124H331.694V38.5984H334.224V41.6124H337.172V43.6584H334.224ZM350.594 47.3764C350.594 47.831 350.565 48.2417 350.506 48.6084H341.244C341.317 49.5764 341.677 50.3537 342.322 50.9404C342.967 51.527 343.759 51.8204 344.698 51.8204C346.047 51.8204 347.001 51.2557 347.558 50.1264H350.264C349.897 51.241 349.23 52.1577 348.262 52.8764C347.309 53.5804 346.121 53.9324 344.698 53.9324C343.539 53.9324 342.498 53.6757 341.574 53.1624C340.665 52.6344 339.946 51.901 339.418 50.9624C338.905 50.009 338.648 48.909 338.648 47.6624C338.648 46.4157 338.897 45.323 339.396 44.3844C339.909 43.431 340.621 42.6977 341.53 42.1844C342.454 41.671 343.51 41.4144 344.698 41.4144C345.842 41.4144 346.861 41.6637 347.756 42.1624C348.651 42.661 349.347 43.365 349.846 44.2744C350.345 45.169 350.594 46.203 350.594 47.3764ZM347.976 46.5844C347.961 45.6604 347.631 44.9197 346.986 44.3624C346.341 43.805 345.541 43.5264 344.588 43.5264C343.723 43.5264 342.982 43.805 342.366 44.3624C341.75 44.905 341.383 45.6457 341.266 46.5844H347.976Z"
              fill="white"
            />
            <g id="Group 1410135537">
              <path
                id="Ellipse 322"
                d="M132 211C132 196.226 134.91 181.597 140.564 167.948C146.217 154.299 154.504 141.897 164.95 131.45C175.397 121.004 187.799 112.717 201.448 107.064C215.097 101.41 229.726 98.5 244.5 98.5C259.274 98.5 273.903 101.41 287.552 107.064C301.201 112.717 313.603 121.004 324.05 131.45C334.496 141.897 342.783 154.299 348.436 167.948C354.09 181.597 357 196.226 357 211"
                stroke="#F6F8FF"
                strokeWidth={22}
                strokeLinecap="round"
              />
              <path
                id="Ellipse 323"
                d="M132 211C132 196.226 134.91 181.597 140.564 167.948C146.217 154.299 154.504 141.897 164.95 131.45C175.397 121.004 187.799 112.717 201.448 107.064C215.097 101.41 229.726 98.5 244.5 98.5C259.274 98.5 273.903 101.41 287.552 107.064C301.201 112.717 313.603 121.004 324.05 131.45C334.496 141.897 342.783 154.299 348.436 167.948C354.09 181.597 357 196.226 357 211"
                stroke="#CEDAF1"
                strokeWidth={13}
                strokeLinecap="round"
              />
              <motion.path
                variants={draw}
                id="Ellipse 324"
                d="M132 211C132 196.226 134.91 181.597 140.563 167.948C146.217 154.299 154.504 141.897 164.95 131.45C175.397 121.004 187.799 112.717 201.448 107.064C215.097 101.41 229.726 98.5 244.5 98.5C259.274 98.5 273.903 101.41 287.552 107.064C301.201 112.717 313.603 121.004 324.049 131.45C334.496 141.897 342.783 154.299 348.436 167.948C351.06 174.282 353.093 180.827 354.518 187.5"
                stroke="url(#paint10_linear_3994_16879)"
                strokeWidth={11}
                strokeLinecap="round"
              />
            </g>
          </g>
          <defs>
            <clipPath
              id="bgblur_0_3994_16879_clip_path"
              transform="translate(0 0)"
            >
              <rect x={1} y={1} width="488.063" height="253.181" rx={20} />
            </clipPath>
            <filter
              id="filter0_d_3994_16879"
              x="42.4648"
              y="-57.6367"
              width="234.98"
              height="224.918"
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
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={5} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3994_16879"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3994_16879"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_3994_16879"
              x="212.617"
              y="-57.6367"
              width="234.98"
              height="224.918"
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
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={5} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3994_16879"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3994_16879"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_3994_16879"
              x="128.746"
              y="81.4844"
              width="235.059"
              height="226.723"
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
                values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3994_16879"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3994_16879"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3994_16879"
              x1="454.622"
              y1="148.164"
              x2="454.622"
              y2="329.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3994_16879"
              x1="550.075"
              y1="24.7344"
              x2="550.075"
              y2="205.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_3994_16879"
              x1="35.4458"
              y1="148.164"
              x2="35.4458"
              y2="329.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_3994_16879"
              x1="-60.0112"
              y1="24.7344"
              x2="-60.0112"
              y2="205.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_3994_16879"
              x1="159.955"
              y1="-1.76966"
              x2="159.955"
              y2="155.282"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} />
              <stop offset={1} stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_3994_16879"
              x1="189.996"
              y1="148.57"
              x2="162.958"
              y2="22.9912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint6_linear_3994_16879"
              x1="330.107"
              y1="-1.76966"
              x2="330.107"
              y2="155.282"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} />
              <stop offset={1} stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_3994_16879"
              x1="360.148"
              y1="148.57"
              x2="333.111"
              y2="22.9912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint8_linear_3994_16879"
              x1="246.276"
              y1="127.198"
              x2="246.276"
              y2="244.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint9_linear_3994_16879"
              x1="246.276"
              y1="164.384"
              x2="246.276"
              y2="257.349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6E9F5" />
              <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_3994_16879"
              x1="297.5"
              y1={94}
              x2="136.126"
              y2="176.615"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D8FF4D" />
              <stop offset="0.677885" stopColor="#7D9F00" />
              <stop offset={1} stopColor="#3B4B00" />
            </linearGradient>
          </defs>
        </motion.svg>
      )}
    </>
  );
};

export const SurveySecondItem = ({ value }: { value: number }) => {
  return (
    <svg viewBox="0 0 491 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 676">
        <g id="Group 673">
          <foreignObject x={0} y={0} width={0} height={0}>
            <div
              style={{
                backdropFilter: "blur(20px)",
                clipPath: "url(#bgblur_0_3994_16859_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g id="Rectangle 570" data-figma-bg-blur-radius={40}>
            <rect
              x={1}
              y={1}
              width="488.063"
              height="253.181"
              rx={20}
              fill="#21251C"
            />
            <rect
              x="0.5"
              y="0.5"
              width="489.063"
              height="254.181"
              rx="20.5"
              stroke="white"
              strokeOpacity="0.3"
            />
          </g>
          <g id="Mask group" opacity="0.26">
            <g id="Mask group_2">
              <mask
                id="mask0_3994_16859"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={1}
                y={2}
                width={489}
                height={254}
              >
                <rect
                  id="Rectangle 571"
                  x={1}
                  y="2.58203"
                  width="488.063"
                  height="253.181"
                  rx={16}
                  fill="#F6F7F9"
                />
              </mask>
              <g mask="url(#mask0_3994_16859)">
                <g id="Group 773">
                  <rect
                    id="Rectangle 686"
                    x="340.668"
                    y="93.7773"
                    width="177.289"
                    height="117.47"
                    rx={15}
                    fill="white"
                    fillOpacity="0.5"
                    stroke="url(#paint0_linear_3994_16859)"
                    strokeWidth={2}
                  />
                  <rect
                    id="Rectangle 691"
                    x="340.668"
                    y="-30.4375"
                    width="177.289"
                    height="117.47"
                    rx={15}
                    fill="#FFFDFD"
                    fillOpacity="0.2"
                    stroke="url(#paint1_linear_3994_16859)"
                    strokeWidth={2}
                  />
                  <rect
                    id="Rectangle 688"
                    x="272.602"
                    y="217.992"
                    width="177.289"
                    height="117.47"
                    rx={15}
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint2_linear_3994_16859)"
                    strokeWidth={2}
                  />
                  <rect
                    id="Rectangle 689"
                    x={-1}
                    y={1}
                    width="177.289"
                    height="117.47"
                    rx={15}
                    transform="matrix(-1 0 0 1 148.414 216.992)"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint3_linear_3994_16859)"
                    strokeWidth={2}
                  />
                  <rect
                    id="Rectangle 687"
                    x={-1}
                    y={1}
                    width="177.289"
                    height="117.47"
                    rx={15}
                    transform="matrix(-1 0 0 1 148.414 92.7773)"
                    fill="white"
                    fillOpacity="0.5"
                    stroke="url(#paint4_linear_3994_16859)"
                    strokeWidth={2}
                  />
                  <rect
                    id="Rectangle 690"
                    x={-1}
                    y={1}
                    width="177.289"
                    height="117.47"
                    rx={15}
                    transform="matrix(-1 0 0 1 216.477 -31.4375)"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint5_linear_3994_16859)"
                    strokeWidth={2}
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="Group 1410134677" opacity="0.59">
            <mask
              id="mask1_3994_16859"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={118}
              y={59}
              width={254}
              height={184}
            >
              <rect
                id="Rectangle 797"
                x="118.871"
                y="59.5469"
                width="252.332"
                height="182.765"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask1_3994_16859)">
              <g id="Group 790" filter="url(#filter0_d_3994_16859)">
                <rect
                  id="Rectangle 685"
                  opacity="0.28"
                  x="155.898"
                  y="91.6953"
                  width="178.289"
                  height="118.47"
                  rx="15.5"
                  fill="url(#paint6_linear_3994_16859)"
                  stroke="#E1E7F4"
                />
                <g
                  id="Rectangle 692"
                  opacity="0.6"
                  filter="url(#filter1_d_3994_16859)"
                >
                  <rect
                    x="162.035"
                    y="97.5234"
                    width="166.008"
                    height="106.811"
                    rx={12}
                    fill="url(#paint7_linear_3994_16859)"
                  />
                  <rect
                    x="163.035"
                    y="98.5234"
                    width="164.008"
                    height="104.811"
                    rx={11}
                    stroke="#E6E9F5"
                    strokeWidth={2}
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <text
          x="50%"
          y="160"
          textAnchor="middle"
          dominantBaseline="middle"
          fontWeight="500"
          fontSize="32"
          fill="white"
        >
          {value} %
        </text>
      </g>
      <defs>
        <clipPath id="bgblur_0_3994_16859_clip_path" transform="translate(0 0)">
          <rect x={1} y={1} width="488.063" height="253.181" rx={20} />
        </clipPath>
        <filter
          id="filter0_d_3994_16859"
          x="125.398"
          y="67.1953"
          width="239.289"
          height="179.469"
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
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation={15} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3994_16859"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3994_16859"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_3994_16859"
          x="150.035"
          y="85.5234"
          width="190.008"
          height="130.812"
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
          <feGaussianBlur stdDeviation={6} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.489478 0 0 0 0 0.512718 0 0 0 0 0.559196 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3994_16859"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3994_16859"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_3994_16859"
          x1="339.668"
          y1="143.018"
          x2="453.798"
          y2="143.018"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3994_16859"
          x1="339.668"
          y1="79.3292"
          x2="368.505"
          y2="38.4473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3994_16859"
          x1="271.602"
          y1="267.233"
          x2="385.732"
          y2="267.233"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_3994_16859"
          x1="1.31915e-06"
          y1="10.6811"
          x2="11.8307"
          y2="42.711"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint4_linear_3994_16859"
          x1={0}
          y1="50.2406"
          x2="114.13"
          y2="50.2406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint5_linear_3994_16859"
          x1="1.7508e-06"
          y1="109.58"
          x2="32.6019"
          y2="58.683"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint6_linear_3994_16859"
          x1="280.925"
          y1="252.605"
          x2="314.975"
          y2="114.482"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9FF00" />
          <stop offset={1} stopColor="#686866" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_3994_16859"
          x1="328.457"
          y1="144.789"
          x2="210.411"
          y2="73.681"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9FF00" />
          <stop offset={1} stopColor="#686866" />
        </linearGradient>
      </defs>
    </svg>
  );
};
