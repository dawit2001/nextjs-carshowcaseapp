import Footter from "@/components/Footter";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footter />
      </body>
    </html>
  );
}
