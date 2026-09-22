"use client";
import "@/styles/btnLink.css";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";

export const BtnLink = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[21px] gap-y-[31px] mb-[46px]  md:mb-[115px]">
      {siteConfig.btnLinks.map((i) => (
        <NextLink
          href={i.href}
          className="btn-link h-[88px] md:h-[84px] 2xl:h-[100px]"
          key={i.id}
        >
          <div className="btn-link-mask" />
          <div className="btn-link-text px-[28px]   flex items-center justify-between ">
            <div className="flex-1  text-[14px] md:text-[16px]">{i.label}</div>
            <span className="flex items-center justify-center btn-link-arrow">
              <svg
                className="btn-link-arrow-icon"
                height="22"
                version="1.1"
                viewBox="0 0 1024 1024"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z" />
              </svg>
            </span>
          </div>
        </NextLink>
      ))}
    </div>
  );
};
