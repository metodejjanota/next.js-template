import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

const ThemeSwitch = () => {
	const [theme, setTheme] = useState("light");
	const [themeIcon, setThemeIcon] = useState("Moon");
	const handleThemeChange = () => {
		if (theme === "light") {
			setTheme("dark");
			setThemeIcon("Sun");
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			setThemeIcon("Moon");
			localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	};

	React.useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) {
			setTheme(localTheme);
			if (localTheme === "dark") {
				setThemeIcon("Sun");
				document.documentElement.classList.add("dark");
			}
		}
	}, []);

	return (
		<motion.div
			whileHover={{
				scale: 1.1,
				transition: {
					duration: 0.3,
				},
			}}
			whileTap={{ scale: 0.9 }}
		>
			<Button variant="outline" size="icon" onClick={handleThemeChange}>
				{themeIcon === "Moon" ? (
					<Moon size={20} strokeWidth={1.5} />
				) : (
					<Sun size={20} strokeWidth={1.5} />
				)}
			</Button>
		</motion.div>
	);
};

export default ThemeSwitch;
