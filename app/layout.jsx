import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/ui/Header";
import PageTransition from "@/components/PageTrasition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Moaz's Portfolio",
  description:
    "Welcome to my portfolio website! I'm Moaz, a passionate developer and designer. Explore my projects, skills, and experience in the world of web development and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
