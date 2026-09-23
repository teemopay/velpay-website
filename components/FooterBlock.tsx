import { PageContanier } from "@/components/PageWrap";
import { MobileNavbarList, AppsList } from "@/config/site";
import NextLink from "next/link";
import { Image } from "@heroui/image";

export const FooterBlock = () => {
  return (
    <div className="pt-[25px] md:pt-[56px] pb-[19px]  md:pb-[33px]">
      <PageContanier>
        <div className="md:flex items-start justify-between ">
          <div className="flex-1 flex flex-col items-start justify-start h-full mb-[53px] md:mb-0">
            <div className="md:mb-[66px] mb-[11px] mr-[20px] ">
              <NextLink
                className="block cursor-pointer mb-[31px] md:mb-[41px]"
                href="/"
              >
                <Image
                  radius="none"
                  classNames={{
                    wrapper:
                      "w-[98px] h-[30px] md:w-[184px] md:h-[56px] shrink-0",
                    img: "w-full h-full object-contain",
                  }}
                  alt="logo"
                  width={184}
                  height={56}
                  src="/images/logo.png"
                />
              </NextLink>
              <div className="text-[12px] leading-[21px] text-white mb-[39px] md:mb-[66px] md:max-w-[424px] 2xl:max-w-[600px]">
                UNIT 1618A ,16/F, PIONEER CENTRE, 750 NATHAN ROAD, MONG KOK,
                KOWLOON, HONG KONG
                <br />
                <a className="text-white" href="mailto:service@vellpay.com">
                  Email: service@vellpay.com
                </a>
              </div>
            </div>
            <div className="grid  grid-cols-5 gap-x-[16px] md:gap-x-[14px]">
              {AppsList.map((i) => (
                <NextLink
                  className="block"
                  key={i.id}
                  href={i.href}
                  target={i.target}
                >
                  <Image
                    radius="none"
                    classNames={{
                      img: "md:w-[24px] w-[16px]",
                    }}
                    alt="country"
                    height="100%"
                    src={`/images/footer/${i.id}.png`}
                    width="100%"
                  />
                </NextLink>
              ))}
            </div>
          </div>
          <div className="md:pt-[10px] grid  grid-cols-2 sm:grid-cols-3 sm:gap-x-[33px]">
            {MobileNavbarList.map((i) => (
              <div key={i.id}>
                <div className="text-[14px] leading-[21px]  text-[#DEFE66] font-medium mb-[12px] md:mb-[23px]">
                  {i.label}
                </div>
                {i.child.map((s) => (
                  <NextLink
                    className="block a-color-hover text-[14px] leading-[21px] text-[rgba(245,245,245,0.5)] mb-[12px] md:mb-[16px]"
                    key={s.id}
                    href={s.href}
                    target={s.target}
                  >
                    {s.title}
                  </NextLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageContanier>
      <div className="pt-[30px] md:pt-[54px] text-[12px] leading-[18px] md:text-[14px] md:leading-[21px]  text-center text-white">
        <PageContanier className="border-t border-[rgba(245,245,245,0.1)] pt-[37px]">
          Copyright &copy; 2026 Vellpay - All rights reserved.
        </PageContanier>
      </div>
    </div>
  );
};
