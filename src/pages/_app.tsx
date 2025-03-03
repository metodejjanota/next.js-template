// Styles
import "@/styles/globals.css";

// Layout component
import Layout from "@/components/layout/layout";

// React
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
