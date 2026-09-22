import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { FooterBlock } from "@/components/FooterBlock";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Vellpay_Global Payment Solutions | LATAM Local Payments | Local Acquiring | FX & Local Currency Settlement | iGaming",
  keywords:
    "Vellpay, global payment service, mobile payment, cross-border payment, payment solution,Mexico,Credit Cards (Visa, MasterCard, American Express),Debit Cards,OXXO Payments (convenience store payments),PayPal,MercadoPago,SPEI,Colombia,Credit Cards (Visa, MasterCard),Debit Cards,Bank Transfer (PSE),Nequi,PayU,Tpaga,Wompi,Peru,Credit Cards (Visa, MasterCard),Debit Cards,PagoEfectivo (cash payment service),Yape (e-wallet),Plin (instant transfer service),Payvalida,Kushki,Tupay,Chile,Credit Cards (Visa, MasterCard, American Express),Debit Cards (Redcompra),WebPay (online payment platform),Khipu (bank transfer),Brazil,Credit Cards (Visa, MasterCard, Elo),Debit Cards,Boleto Bancário (payment slip),Pix (instant payment system),Pakistan,Credit Cards (Visa, MasterCard),Debit Cards,Easypaisa (mobile wallet),JazzCash (mobile payment),Bank Transfers,Indonesia,Credit Cards (Visa, MasterCard),Debit Cards,Qris (QR code payments),OVO (e-wallet),GoPay (mobile payment),24/7 customer support , low transaction fees",
  description:
    "Vellpay provides advanced payment solutions across Mexico, Colombia, Peru, Chile, Brazil, Pakistan, and Indonesia. We support a variety of payment methods including credit cards, debit cards, OXXO payments, PSE, Boleto Bancário, Easypaisa, Qris, and more. Enjoy a convenient and secure transaction experience with our 24/7 customer support and low transaction fees, making it easy to manage your payment needs!",
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
