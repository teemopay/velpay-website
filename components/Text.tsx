"use client";
import { FadeIn } from "@/components/Animateitem";
import WaveThree from "./Three/WaveThree";
import { PageContanier } from "@/components/PageWrap";
import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";
type Props = {
  title?: string | React.ReactNode;
  align?: string;
  textColor?: string;
  sub?: string | React.ReactNode;
  mb?: string;
  className?: string;
  titleClass?: string;
  subClass?: string;
};

/* 
font-weight: 600;
font-size: 60px;
line-height: 68px;
 */
export const PrimaryTitle = ({
  title,
  align = "text-center",
  className,
}: Props) => {
  return (
    <div
      className={`font-semibold w-full text-[32px] leading-[37px] md:text-[48px] md:leading-[54px]   text-white ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};
/* 
font-size: 20px;
line-height: 36px;
 */
export const SubTitle = ({
  title,
  align = "text-center",
  className,
}: Props) => {
  return (
    <div
      className={`text-[12px] md:text-[16px] leading-[18px] md:leading-[21px] text-white ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 28px;
line-height: 36px;
 */
export const SecondaryTitle = ({
  title,
  align = "text-center",
  className,
}: Props) => {
  return (
    <div
      className={`text-[13px] leading-[18px] md:text-[18px] font-medium  md:leading-[24px] text-white ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-size: 14px;
line-height: 16px;
 */

export const SmallTitle = ({
  title,
  align = "text-left",
  className,
}: Props) => {
  return (
    <div
      className={`text-xs md:text-sm  md:leading-[1rem] text-white ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-size: 20px;
color: #D1D1D1;
line-height: 23px;
 */

export const MediumTitle = ({
  title,
  align = "text-center",
  textColor = "text-[#D1D1D1]",
  className,
}: Props) => {
  return (
    <div
      className={`text-[14px] md:text-[20px]  leading-[23px] ${textColor} ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 600;
font-size: 24px;
line-height: 28px;
 */

export const XLargeTitle = ({ title, align = "text-center" }: Props) => {
  return (
    <div
      className={`w-full text-2xl font-semibold  leading-[1.75rem] text-white ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-size: 16px;
line-height: 24px;
 */
export const BaseTitle = ({ title, align = "text-left" }: Props) => {
  return (
    <div
      className={`w-full text-2xl  leading-[1.5rem] text-[#D1D1D1] ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-size: 18px;
color: #D1D1D1;
line-height: 24px;
 */
export const LgBaseTitle = ({ title, align = "text-left" }: Props) => {
  return (
    <div
      className={`w-full text-lg  leading-[1.5rem] text-[#D1D1D1] ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 600;
font-size: 36px;
line-height: 40px;
 */

export const SemiboldTitle = ({ title, align = "text-left" }: Props) => {
  return (
    <div
      className={`w-full text-4xl font-semibold  leading-[2.5rem] text-white ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 60px;
color: #FFFFFF;
line-height: 78px;
 */

export const MediumXlTitle = ({
  title,
  align = "text-left",
  className,
}: Props) => {
  return (
    <div
      className={`text-[22px] leading-[33px] md:text-6xl md:leading-[4.875rem] font-medium  text-white ${align} cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 18px;
line-height: 36px;
 */

export const MediumColorTitle = ({
  title,
  align = "text-left",
  textColor = "#fff",
}: Props) => {
  return (
    <div
      className={`w-full text-lg font-medium leading-[2.25rem] ${textColor} ${align} cursor-pointer`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 48px;
color: #FFFFFF;
line-height: 50px;
*/
export const BgText = ({ title, sub, titleClass, subClass }: Props) => {
  return (
    <div className="relative overflow-hidden  sweep-away bg-text py-[40px] md:pt-[80px] md:pb-[108px] z-[3] text-[#1A1A18]">
      <PageContanier>
        <FadeIn
          className={`mb-[22px] md:mb-[14px] mx-auto text-center text-[32px] leading-[37px] md:text-[36px] md:leading-[54px] ${titleClass} font-semibold `}
        >
          {title}
        </FadeIn>
        <FadeIn
          className={`text-[12px] leading-[18px] md:text-[16px] md:leading-[21px]  text-center mx-auto ${subClass}`}
        >
          {sub}
        </FadeIn>
      </PageContanier>
    </div>
  );
};

export const CountrySub = ({ title, sub }: Props) => {
  return (
    <div className="font-medium text-[12px] leading-[18px] md:text-[18px] md:leading-[36px] text-white">
      <div className="text-[#DEFE66] mb-[12px]">{title}</div>
      <div>{sub}</div>
    </div>
  );
};

/* font-weight: 500;
font-size: 14px;
color: #FFFFFF;
line-height: 22px; */
export const MinTitle = ({ title, className }: Props) => {
  return (
    <div
      className={` text-[12px] leading-[14px] md:text-[14px] md:leading-[22px] font-medium  cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* font-weight: 500;
font-size: 35px;
color: #FFFFFF;
line-height: 53px; */
export const MinTwoTitle = ({ title, className }: Props) => {
  return (
    <div
      className={` text-[13px] leading-[20px] md:text-[35px] md:leading-[53px] font-medium  cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 64px;
color: #FFFFFF;
line-height: 96px;
 */

export const MinFirstTitle = ({ title, className }: Props) => {
  return (
    <div
      className={`text-[24px] leading-[36px] md:text-[64px] md:leading-[96px] font-medium  cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 500;
font-size: 36px;
color: #FFFFFF;
line-height: 50px;
 */

export const JoinTitle = ({ title, className }: Props) => {
  return (
    <div
      className={`font-semibold  text-left  text-[29px] leading-[40px] mb-[48px]  text-white ${className}`}
    >
      {title}
    </div>
  );
};

/* 
font-weight: 600;
font-size: 22px;
color: #DEFE66;
line-height: 20px;
 */
export const JoinSubTitle = ({ title, sub, className }: Props) => {
  return (
    <div
      className={` text-left  text-[18px] leading-[20px] mb-[15px] text-white ${className}`}
    >
      <span className="text-[#DEFE66] font-semibold">{sub}</span>
      {title}
    </div>
  );
};

/* 
font-weight: 600;
font-size: 22px;
color: #DEFE66;
line-height: 20px;
 */

export const JoinDecTitle = ({ title, className }: Props) => {
  return (
    <div
      className={`   text-left font-semibold text-[18px] leading-[20px] mb-[10px] text-[#DEFE66] ${className}`}
    >
      {title}
    </div>
  );
};

export const JoinDecCnt = ({ title, className }: Props) => {
  return (
    <div
      className={`text-left text-[16px] leading-[20px] text-[#D1D1D1] ${className} break-word`}
    >
      {title}
    </div>
  );
};

export const Applytext = ({ className }: Props) => {
  return (
    <div
      className={`text-left md:text-[18px] leading-[22px] text-[#fff] mb-[80px]  ${className}`}
    >
      <span className="font-semibold text-[#DEFE66]">📩 How to Apply: </span>
      Please send your resume to [
      <a className="text-[#DEFE66]" href="mailto:service@vellpay.com">
        service@vellpay.com
      </a>
      ] with the subject line: "Application for Senior Global Business
      Development – [Your Name]".
    </div>
  );
};

export const OtherJobs = ({ title, className }: Props) => {
  return (
    <div
      className={`font-medium  text-[#DEFE66]  text-[14px] leading-[16px] ${className}`}
    >
      {title}
    </div>
  );
};

export const TextNormal = ({
  title,
  cnt,
  className,
}: {
  title: string;
  className?: string;
  cnt: string;
}) => {
  return (
    <div className="mb-[50px]">
      <div className="font-semibold text-[#fff] text-[24px] leading-[26px]  md:text-[26px] md:leading-[39px] mb-10px">
        {title}
      </div>
      <div
        className={cn(
          "text-[#fff] text-[12px] leading-[18px] md:text-[16px] md:leading-[24px]",
          className,
        )}
        dangerouslySetInnerHTML={{ __html: cnt }}
      ></div>
    </div>
  );
};

/* 
font-weight: 600;
font-size: 48px;
color: #FFFFFF;
line-height: 68px;
 */

export const FontOne = ({
  title,
  className,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "text-[#fff] font-semibold text-[32px] leading-[37px] md:text-[48px] md:leading-[68px]",
        className,
      )}
    >
      {title}
    </motion.div>
  );
};
