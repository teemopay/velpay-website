"use client";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";

type Props = {
  className?: string;
  title?: string;
};

export const PageWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-[1500px] box-content  mx-auto px-[20px] md:px-[60px]">
      {children}
    </div>
  );
};

export const PageContanier = ({
  children,
  className,
  pclassName,
}: {
  children: React.ReactNode;
  className?: string;
  pclassName?: string;
}) => {
  return (
    <div className={cn("px-[20px] sm:px-[60px] md:px-[100px]", pclassName)}>
      <div
        className={cn(
          "relative lg:max-w-[1000px] 2xl:max-w-[1500px] box-content mx-auto",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const CountryButton = ({ title, className }: Props) => {
  return (
    <Button
      className={`w-[100px] md:w-[130px] h-[27px] md:h-[36px] bg-[#DEFE66] font-medium text-[12px] md:text-[18px ${className}`}
      radius="full"
    >
      {title}
    </Button>
  );
};
