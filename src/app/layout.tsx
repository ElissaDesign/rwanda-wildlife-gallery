import Footer from "@/app/_components/footer";
import Navbar from "@/app/_components/navbar";
import Providers from "@/app/providers";
import { DynamicScreenDevTools } from "@/components/devtools/screen-devtools";
import HeroSection from "@/components/HeroSection";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Rwanda Wildlife Image Gallery",
  description: "Rwanda Wildlife Image Gallery by @elissadesign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased selection:bg-neutral-300 dark:selection:bg-neutral-600"
      suppressHydrationWarning
    >
      <body
        className={cn(
          geist.variable,
          geistMono.variable,
          "flex min-h-svh flex-col font-mono antialiased",
        )}
      >
        <Providers>
          <div className="flex flex-1 flex-col">
                  <HeroSection/>
            
            <main className="isolate grid flex-1">{children}</main>
            <Footer />
          </div>

          <DynamicScreenDevTools />
        </Providers>
      </body>
    </html>
  );
}
