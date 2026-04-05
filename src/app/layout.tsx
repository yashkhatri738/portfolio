// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });

// export const metadata: Metadata = {
//   title: "Portfolio | Yash",
//   description: "Yash's Portfolio - Web Developer",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
//           integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//       </head>
//       <body className={poppins.variable}>{children}</body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Yash Khatri | Fullstack Developer",
  description: "Portfolio of Yash Khatri — Fullstack Developer at PrimexMeta. React, Next.js, Node, Supabase & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* All fonts used across sections */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}

