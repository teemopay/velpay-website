"use client";
import { PageContanier } from "@/components/PageWrap";
import Image from "next/image";
import { BtnLink } from "@/components/BtnLink";
import countryObj from "@/config/country";
import {
  ViewOne,
  FirstSection,
  CardWrap,
  SecondSection,
} from "@/components/Country";

export default function PEPage() {
  const currentObj = countryObj["PE"];
  return (
    <div>
      <div className="relative mb-[46px] md:mb-[58px] bg-[url('/images/country/pe.png')]  bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={1122}
          src="/images/country/pe.png"
          width={3072}
        />
        <ViewOne defaultSelected="pe" />
      </div>
      <PageContanier>
        <FirstSection country={currentObj.country} list={currentObj.firstObj} />
        <SecondSection
          sub={currentObj.second.sub}
          list={currentObj.second.list}
        />
        <CardWrap
          className="lg:max-w-[380px] xl:max-w-[500px] 2xl:max-w-[700px]"
          wrapclass="2xl:py-[40px]"
          cnt={currentObj.three.card}
        >
          <Image
            className="max-w-[243px] !max-h-[293px] lg:mx-auto"
            alt="country"
            src={`/images/country/pay/pe.png`}
            width={928}
            height={1118}
          />
        </CardWrap>
        <BtnLink />
      </PageContanier>
    </div>
  );
}
