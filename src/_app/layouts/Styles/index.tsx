import localFont from "next/font/local";
import "../../styles/globals.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 500 600 700 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 400 500 600 700 900",
});

interface Props {
  children: React.ReactNode;
}

export const StylesLayout = ({ children }: Props) => {
  return (
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
  );
}