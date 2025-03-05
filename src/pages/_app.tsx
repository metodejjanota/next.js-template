// Styles
import "@/styles/globals.css";

// Layout and providers
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "next-themes";

// React
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
