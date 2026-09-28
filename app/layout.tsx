import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { FooterBlock } from "@/components/FooterBlock";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Vellpay_Global Payment Solutions | LATAM & Asia Local Payments | PayIn & PayOut | FX & Local Currency Settlement ",
  keywords:
    "Vellpay, global payment service, mobile payment, cross-border payment, payment solution, PayIn, PayOut, Brazil, Pix (instant payment system), QR Payments, Argentina, CVU (Clave Virtual Uniforme), QR Payments, Mercado Pago (digital payment platform), Rapipago (cash payment network), Colombia, Bank Transfer, PSE (bank transfer payment method), QR Payments, Digital Wallets, Nequi (digital wallet), Transfiya (instant money transfer), Efecty (cash payment network), Indonesia, Bank Transfer, （BRI, CIMB, Mandiri）, QRIS (QR payment standard), Digital Wallets, （DANA）, Cambodia, KHQR (national QR payment standard), Bakong (payment system), India, Paytm (digital payment platform), PhonePe (digital payment platform), QR Payments, Korea, Bank Transfer, Woori Bank (bank), Kookmin Bank (bank), Shinhan Bank (bank), Virtual Account, local payment methods, payment processing, payment API, payment integration, merchant payments",
  description:
    "Vellpay provides global payment solutions across Latin America and Asia, with localized PayIn and PayOut services for businesses. We support a variety of local payment methods including Pix and QR Payments in Brazil, CVU, QR Payments, Cash Payments, Mercado Pago, and Rapipago in Argentina, Bank Transfer, PSE, QR Payments, Digital Wallets, Nequi, Transfiya, and Efecty in Colombia, Bank Transfer through BRI, CIMB, and Mandiri, QRIS, and DANA in Indonesia, KHQR and Virtual Account in Cambodia, Paytm, PhonePe, and QR Payments in India, and Bank Transfer through Woori Bank, Kookmin Bank, as well as Virtual Account in Korea. Enjoy a convenient and secure transaction experience with our 24/7 customer support and low transaction fees, making it easy to manage your payment needs!",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={clsx("min-h-screen bg-background  antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="w-full pt-[68px] md:pt-[88px]">{children}</main>
            <FooterBlock />
          </div>
        </Providers>
      </body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-D3P16L281D`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-D3P16L281D');
        `}
      </Script>
    </html>
  );
}
