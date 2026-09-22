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
  const currentObj = countryObj["VA"];
  return (
    <div>
      <div className="relative bg-[url('/images/country/va.png')] bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={1122}
          src="/images/country/va.png"
          width={3072}
        />
        <ViewOne defaultSelected="va" />
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
            className="lg:max-w-[380px] xl:max-w-[500px] 2xl:max-w-[700px]"
            wrapclass="2xl:py-[40px]"
            cnt={currentObj.three.card}
          >
            <Image
              alt="country"
              src={`/images/country/pay/va.png`}
              width={305}
              height={418}
            />
          </CardWrap>
          <BtnLink />
        </PageContanier>
      </CountryBackground>
    </div>
  );
}
