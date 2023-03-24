import "@/styles/globals.css";
import { Fredoka_One } from "@next/font/google";
import type { AppProps } from "next/app";

const roboto = Fredoka_One({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.className} bg-stone-200`}>
      <Component {...pageProps} />
    </main>
  );
}
