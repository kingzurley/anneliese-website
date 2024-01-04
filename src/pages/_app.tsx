import "@/styles/globals.css";
import { Lora } from "@next/font/google";
import type { AppProps } from "next/app";

const roboto = Lora({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.className} bg-stone-300`}>
      <Component {...pageProps} />
    </main>
  );
}
