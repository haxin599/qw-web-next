import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import { useRouter } from 'next/router';
import DefaultLayout from "@/layouts/default";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider>
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
			</NextThemesProvider>
		</NextUIProvider>

	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
