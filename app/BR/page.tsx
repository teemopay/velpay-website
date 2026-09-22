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
  const currentObj = countryObj["BR"];
  return (
    <div>
      <div className="relative bg-[url('/images/country/br.png')] bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={561}
          src="/images/country/br.png"
          width={1536}
        />
        <ViewOne defaultSelected="br" />
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
          <CardWrap wrapclass="2xl:py-[40px]" cnt={currentObj.three.card}>
            <Image
              className="md:max-w-[298px] md:max-h-[208px]  lg:mx-auto"
              alt="country"
              src={`/images/country/pay/br.png`}
              width={1406}
              height={880}
            />
          </CardWrap>
          <BtnLink />
        </PageContanier>
      </CountryBackground>
    </div>
  );
}
