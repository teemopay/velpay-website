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
  CountryBackground,
} from "@/components/Country";

export default function PEPage() {
  const currentObj = countryObj["KR"];
  return (
    <div>
      <div className="relative bg-[url('/images/country/kr.png')] bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={561}
          src="/images/country/kr.png"
          width={1536}
        />
        <ViewOne defaultSelected="kr" />
      </div>
      <CountryBackground>
        <PageContanier>
          <FirstSection
            country={currentObj.country}
            list={currentObj.firstObj}
          />
          <SecondSection
            sub={currentObj.second.sub}
            list={currentObj.second.list}
          />
          <CardWrap
            wrapclass="2xl:py-[40px]"
            cnt={currentObj.three.card}
            className="lg:max-w-[400px] xl:max-w-[465px]  2xl:max-w-[800px]"
          >
            <Image
              className="md:max-w-[298px] md:max-h-[208px]  lg:mx-auto"
              alt="country"
              src={`/images/country/pay/kr.png`}
              width={595}
              height={416}
            />
          </CardWrap>
          <BtnLink />
        </PageContanier>
      </CountryBackground>
    </div>
  );
}
