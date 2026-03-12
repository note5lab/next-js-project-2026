import { Geist } from "next/font/google";
import "./style.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "My First To-do app",
  description: "by Nithi Prasarnphanich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body id="app-body" className="antialiased">
        {children}
      </body>
    </html>
  );
}
