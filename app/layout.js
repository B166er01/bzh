import Navigation from "./components/Navigation";
import Transition from "./components/Transition";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <Transition />
        {children}
      </body>
    </html>
  );
}
