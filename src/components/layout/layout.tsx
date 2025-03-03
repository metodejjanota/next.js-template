// React
import { ReactNode } from "react";

// Layout components
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navigation />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
