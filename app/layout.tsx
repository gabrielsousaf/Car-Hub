import "./globals.css";

import Head from "next/head";
import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>  
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
