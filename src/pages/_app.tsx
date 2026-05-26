import "@/src/styles/globals.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";

const montserrat = Montserrat({
  variable: "--font-padrao",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={montserrat.variable}>
      <Component {...pageProps} />
    </main>
  ) 
}
