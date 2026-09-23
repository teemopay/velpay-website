"use client";
import { useEffect, useRef, useState } from "react";
import { Image } from "@heroui/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { MobileNavbarList } from "@/config/site";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isPathActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const isGroupActive = (hrefs: string[]) => hrefs.some(isPathActive);
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-0 py-[8px]   flex items-center bg-[#1A1A18]",
    indicator: "text-medium text-[#DEFE66]",
    content: "text-sm",
    titleWrapper: "bg-[#1A1A18]",
  };
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const items = wrapper.querySelectorAll(".navbar-link");
    const children = wrapper.querySelectorAll(".navbar-child");
    items.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        children.forEach((child, i) => {
          child.classList.toggle("active", index === i);
        });
      });
    }, []);
    wrapper.addEventListener("mouseleave", () => {
      children.forEach((c) => c.classList.remove("active"));
    });
    return () => {
      // 清理事件
      items.forEach((item) => item.replaceWith(item.cloneNode(true)));
      wrapper.replaceWith(wrapper.cloneNode(true));
    };
  }, []);
  const clearMenu = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const children = wrapper.querySelectorAll(".navbar-child");
    children.forEach((c) => c.classList.remove("active"));
  };
  return (
    <div className="w-full fixed navbar top-0 left-0  h-[68px] md:h-[88px] bg-[#1A1A18] z-[9999]">
      {/* web端 */}
      <div
        className="hidden lg:block relative   w-full   h-[88px] "
        ref={wrapperRef}
      >
        <div className="w-full relative h-[88px] flex justify-center">
          <div className="w-full relative h-full flex items-center justify-between max-w-[1000px] 2xl:max-w-[1200px] bg-[#1A1A18] mx-[20px] sm:mx-[60px] md:mx-[100px] box-border cursor-pointer">
            <NextLink className="block shrink-0 cursor-pointer" href="/">
              <Image
                alt="HeroUI hero Image with delay"
                radius="none"
                classNames={{
                  wrapper: "w-[98px] h-[30px] shrink-0",
                  img: "w-full h-full object-contain",
                }}
                width={98}
                height={30}
                src="/images/logo.png"
              />
            </NextLink>

            <div className="flex-1 text-right">
              <NextLink
                className={`navbar-link ${
                  isGroupActive(["/Payins", "/Payouts"])
                    ? "navbar-link-active"
                    : ""
                }`}
                href="#"
              >
                Our solution
              </NextLink>
              <NextLink
                className={`navbar-link ${
                  isGroupActive(["/About", "/Terms", "/Aml", "/In"])
                    ? "navbar-link-active"
                    : ""
                }`}
                href="#"
              >
                Company
              </NextLink>
              <NextLink
                className={`navbar-link ${
                  isGroupActive(["/Int", "/Faq"]) ? "navbar-link-active" : ""
                }`}
                href="#"
              >
                Support
              </NextLink>
              <NextLink
                className="navbar-link"
                href="https://docs.vellpay.com/"
                target="_blank"
              >
                Developers
              </NextLink>
              <NextLink className="navbar-link-btn" href="/Touch">
                Get in touch
              </NextLink>
            </div>
          </div>
          {/* 子级菜单 */}
          <div className="navbar-child  w-full absolute top-full flex justify-center">
            <div className="w-full lg:max-w-[1000px] 2xl:max-w-[1200px]  flex justify-start items-center cursor-pointer">
              <div className="navbar-child-title">Our solution</div>
              <NextLink
                className={`navbar-child-item pr-[30px] xl:pr-[60px] 2xl:pr-[76px] ${
                  isPathActive("/Payins") ? "active" : ""
                }`}
                href="/Payins"
                onClick={clearMenu}
              >
                Payins
              </NextLink>
              <NextLink
                className={`navbar-child-item pr-[30px] xl:pr-[60px] 2xl:pr-[76px] ${
                  isPathActive("/Payouts") ? "active" : ""
                }`}
                href="/Payouts"
                onClick={clearMenu}
              >
                Payouts
              </NextLink>
            </div>
          </div>
          <div className="navbar-child  w-full absolute top-full flex justify-center ">
            <div className="w-full lg:max-w-[1000px] 2xl:max-w-[1200px]  flex justify-start items-center">
              <div className="navbar-child-title">Company</div>
              <NextLink
                className={`navbar-child-item pr-[30px] xl:pr-[60px] 2xl:pr-[76px] ${
                  isPathActive("/About") ? "active" : ""
                }`}
                href="/About"
                onClick={clearMenu}
              >
                About Us
              </NextLink>
              <NextLink
                className={`navbar-child-item pr-[30px] xl:pr-[60px] 2xl:pr-[76px] ${
                  isPathActive("/Terms") ? "active" : ""
                }`}
                href="/Terms"
                onClick={clearMenu}
              >
                Terms & Conditions
              </NextLink>
              <NextLink
                className={`navbar-child-item pr-[30px] xl:pr-[60px] 2xl:pr-[76px] ${
                  isPathActive("/Aml") ? "active" : ""
                }`}
                href="/Aml"
                onClick={clearMenu}
              >
                AML POLICY
              </NextLink>
              <NextLink
                className="navbar-child-item pr-[30px] xl:pr-[60px] 2xl:pr-[76px]"
                href="/support/PRIVACIDAD-Vellpay.pdf"
                onClick={clearMenu}
                target="_blank"
              >
                Privacy Policy
              </NextLink>
              <NextLink
                className={`navbar-child-item pr-[30px] xl:pr-[60px] 2xl:pr-[76px] ${
                  isPathActive("/In") ? "active" : ""
                }`}
                href="/In"
                onClick={clearMenu}
              >
                Jobs
              </NextLink>
            </div>
          </div>
          <div className="navbar-child  w-full absolute top-full flex justify-center">
            <div className="w-full lg:max-w-[1000px] 2xl:max-w-[1200px]  flex justify-start items-center">
              <div className="navbar-child-title">Support</div>
              <NextLink
                className={`navbar-child-item pr-[30px] xl:pr-[60px] 2xl:pr-[76px] ${
                  isPathActive("/Int") ? "active" : ""
                }`}
                href="/Int"
                onClick={clearMenu}
              >
                Integration
              </NextLink>
              <NextLink
                className={`navbar-child-item pr-[30px] xl:pr-[60px] 2xl:pr-[76px] ${
                  isPathActive("/Faq") ? "active" : ""
                }`}
                href="/Faq"
                onClick={clearMenu}
              >
                FAQ
              </NextLink>
            </div>
          </div>
        </div>
      </div>
      {/* 移动端 */}
      <div className="lg:hidden h-full bg-[#1A1A18] flex items-center justify-between px-[20px] sm:px-[60px] md:px-[100px]  cursor-pointer">
        <NextLink className="block shrink-0 cursor-pointer" href="/">
          <Image
            alt="HeroUI hero Image with delay"
            radius="none"
            classNames={{
              wrapper: "w-[98px] h-[30px] shrink-0",
              img: "w-full h-full object-contain",
            }}
            width={98}
            height={30}
            src="/images/logo.png"
          />
        </NextLink>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame">
              <path
                className={isOpen ? "line  rotate-top" : "line line-top"}
                id="Vector"
                d="M3.97461 5.97461H19.9746"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={isOpen ? "line  rotate-none" : "line line-show"}
                id="Vector_2"
                d="M9 12L20 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={isOpen ? "line  rotate-bottom" : "line line-bottom"}
                id="Vector_3"
                d="M3.97461 17.9746H19.9746"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div
          className={`mobile-navbar-menu  h-full fixed top-0 bg-[#1A1A18] left-0 w-full pt-[68px] z-[-1] ${
            isOpen ? "mobile-menu-open" : "mobile-menu-hide"
          }`}
        >
          <Accordion showDivider={false} itemClasses={itemClasses}>
            {MobileNavbarList.map((i) => (
              <AccordionItem
                key={i.id}
                aria-label={i.title}
                title={<span className="mobile-menu-title">{i.title}</span>}
              >
                {i.child.map((s) => (
                  <NextLink
                    key={s.id}
                    className={`block text-sm leading-[16px] py-[8px] transition-colors hover:text-[#DEFE66] ${
                      isPathActive(s.href) ? "text-[#DEFE66]" : ""
                    }`}
                    href={s.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {s.title}
                  </NextLink>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
          <NextLink
            className="block text-sm leading-[16px] py-[8px] px-2 text-[#DEFE66]"
            href="https://docs.vellpay.com/"
            target="_blank"
          >
            Developers
          </NextLink>
        </div>
      </div>
    </div>
  );
};
