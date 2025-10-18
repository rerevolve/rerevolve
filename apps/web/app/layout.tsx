import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/comman/header";
import Footer from "../components/comman/footer";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ReRevolve",
	description:
		"ReRevolve - Crafting websites that innovate, inspire, and engage.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${geistMono.variable} antialiased dark`}
				suppressHydrationWarning
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
