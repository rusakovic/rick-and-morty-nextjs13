import "./globals.css";

export const metadata = {
  title: "Rick & Morty characters database",
  description: "Find the data of all Rick & Morty characters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
