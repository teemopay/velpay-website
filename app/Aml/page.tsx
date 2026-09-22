"use client";
import { TextNormal, FontOne } from "@/components/Text";
import { mapObj } from "@/config/aml";
import { PageContanier } from "@/components/PageWrap";
import { BtnLink } from "@/components/BtnLink";
import Image from "next/image";
import { ZoomIn } from "@/components/Animateitem";

export default function AmlPage() {
  return (
    <div>
      <div className="w-full relative mb-[38px] md:mb-[109px] center-reveal-mask-center overflow-hidden">
        <ZoomIn>
          <Image
            alt="aml"
            height={1056}
            src="/images/bg-aml.png"
            width={3072}
          />
        </ZoomIn>
        <div className="relative md:absolute top-0 left-0 w-full h-full z-2 flex items-center justify-center">
          <PageContanier>
            <FontOne
              className="max-w-[1000px]  md:text-center mt-[29px] md:mt-0 "
              title="Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) Policy"
            />
          </PageContanier>
        </div>
      </div>
      <PageContanier>
        <div className="mb-[100px] md:mb-[200px]">
          {mapObj.map((i, index) => (
            <TextNormal key={index} title={i.title} cnt={i.cnt} />
          ))}
        </div>
        <BtnLink />
      </PageContanier>
    </div>
  );
}
