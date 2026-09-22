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
  const currentObj = countryObj["PK"];
  return (
    <div>
      <div className="relative mb-[46px] md:mb-[58px] bg-[url('/images/country/pk.png')]  bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={561}
          src="/images/country/pk.png"
          width={1536}
        />
        <ViewOne defaultSelected="pk" />
      </div>
      <PageContanier>
        <FirstSection country={currentObj.country} list={currentObj.firstObj} />
        <SecondSection
          sub={currentObj.second.sub}
          list={currentObj.second.list}
        />
        <CardWrap
          className="lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[800px]"
          wrapclass="2xl:py-[40px]"
          cnt={currentObj.three.card}
        >
          <Image
            className="md:max-w-[321px] md:max-h-[182px] xl:max-w-[371px] xl:max-h-[232px]  lg:mx-auto"
            alt="country"
            src={`/images/country/pay/pk.png`}
            width={928}
            height={178}
          />
        </CardWrap>

        <BtnLink />
      </PageContanier>
    </div>
  );
}
