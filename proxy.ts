import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const validPaths = [
  "/",
  "/About",
  "/Blog",
  "/CO",
  "/Join",
  "/MX",
  "/Payins",
  "/PK",
  "/PE",
  "/Payouts",
  "/Designer",
  "/ComplianceOfficer",
  "/Accounting",
  "/In",
  "/Blog",
  "/support/PRIVACIDAD-Vellpay.pdf",
  "/Aml",
  "/Faq",
  "/Terms",
  "/ARS",
  "/CH",
  "/ID",
  "/Int",
  "/Touch",
  "/KR",
  "/BR",
  "/INDIA",
  "/KH",
  "/VN",
  "/EC",
];

// 拦截规则（支持多路径）
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log(pathname, "pathname");
  if (!validPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|fonts|api|robots.txt|sitemap.xml).*)",
  ],
};
