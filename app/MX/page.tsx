import { PageContanier } from "@/components/PageWrap";
import { PrimaryTitle } from "@/components/Text";
import Image from "next/image";
import { BtnLink } from "@/components/BtnLink";
import countryObj from "@/config/country";
import { FadeIn } from "@/components/Animateitem";
import {
  ViewOne,
  CardWrap,
  FirstSection,
  MinProgressItem,
  SurveyItem,
  SurveySecondItem,
} from "@/components/Country";

export default function MXPage() {
  const currentObj = countryObj["MX"];
  return (
    <div>
      <div className="relative mb-[46px] md:mb-[58px] bg-[url('/images/country/mx.png')]  bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={561}
          src="/images/country/mx.png"
          width={1536}
        />
        <ViewOne defaultSelected="mx" />
      </div>
      <PageContanier>
        <FirstSection country={currentObj.country} list={currentObj.firstObj} />
        <FadeIn>
          <PrimaryTitle
            className="mb-[30px] md:mb-[92px]"
            title={currentObj.second.title}
          />
        </FadeIn>

        <section id="progress" className="mb-[10px] md:mb-[96px]">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-[10px] md:gap-[24px] mb-[10px] md:mb-[19px]">
            <FadeIn>
              <SurveyItem id={currentObj.country} />
            </FadeIn>
            <FadeIn>
              <SurveySecondItem value={currentObj.five.count} />
            </FadeIn>
          </div>
          <MinProgressItem list={currentObj.second.list} />
        </section>
        <FadeIn>
          <CardWrap
            className="lg:max-w-[380px] xl:max-w-[500px] 2xl:max-w-[700px]"
            wrapclass="2xl:py-[40px]"
            cnt={currentObj.three.card}
          >
            <Image
              className="md:max-w-[370px] md:max-h-[169px] lg:max-w-[350px] lg:max-h-[149px] xl:max-w-[370px] xl:max-h-[169px] lg:mx-auto"
              alt="country"
              src={`/images/country/pay/mx.png`}
              width={370}
              height={169}
            />
          </CardWrap>
        </FadeIn>
        <BtnLink />
      </PageContanier>
    </div>
  );
}
