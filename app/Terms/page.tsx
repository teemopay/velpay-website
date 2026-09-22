"use client";
import { TextNormal, FontOne } from "@/components/Text";
import { Terms, TermsSecond } from "@/config/aml";
import { PageContanier } from "@/components/PageWrap";
import { BtnLink } from "@/components/BtnLink";
import Image from "next/image";
import { Image as HerImage } from "@heroui/image";
import { ZoomIn } from "@/components/Animateitem";

export default function AmlPage() {
  const title =
    "text-[#fff] font-semibold text-[32px] leading-[37px] md:text-[48px] md:leading-[68px]";
  return (
    <div>
      <div className="w-full relative mb-[38px] md:mb-[109px] overflow-hidden center-reveal-mask-center">
        <ZoomIn>
          <Image
            alt="aml"
            height={1056}
            src="/images/bg-terms.png"
            width={3072}
          />
        </ZoomIn>
        <div className="relative md:absolute top-0 left-0 w-full h-full z-2 flex items-center justify-center">
          <PageContanier>
            <FontOne
              className="max-w-[1000px]  md:text-center mt-[29px] md:mt-0 "
              title="Vellpay Terms & Conditions"
            />
          </PageContanier>
        </div>
      </div>
      <PageContanier>
        <div className="mb-[100px] md:mb-[200px]">
          {Terms.map((i, index) => (
            <TextNormal key={index} title={i.title} cnt={i.cnt} />
          ))}
          <div className="mb-[30px] md:mb-[50px] overflow-hidden rounded-[32px]">
            <HerImage
              isZoomed
              alt="country"
              src="/images/about/about-4.png"
              disableSkeleton={true}
            />
          </div>
          {TermsSecond.map((i, index) => (
            <TextNormal key={index} title={i.title} cnt={i.cnt} />
          ))}
        </div>
        <BtnLink />
      </PageContanier>
    </div>
  );
}
