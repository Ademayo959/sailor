import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
	variable: "--font-instrument-serif",
	weight: "400",
	subsets: ["latin"],
	style: ["normal", "italic"],
});

export const metadata: Metadata = {
	title: {
		default: "Sailor: Your GitHub, turned into a portfolio",
		template: "%s | Sailor",
	},
	description:
		"Turn your GitHub into a clean portfolio page and a Sailor Score that shows how you actually build. Free for student developers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			data-theme="light"
			suppressHydrationWarning
			className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
		>
			<head>
				<Script
					id="theme-init"
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						__html: `(() => {
						try {
							const savedTheme = localStorage.getItem("sailor-theme");
							const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
							document.documentElement.dataset.theme = savedTheme === "dark" || (!savedTheme && systemPrefersDark) ? "dark" : "light";
						} catch {
							document.documentElement.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
						}
					})();`,
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col">
				{children}
				<Script
					src="https://kit.fontawesome.com/08c9114e01.js"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
				<Analytics />
			</body>
		</html>
	);
}
