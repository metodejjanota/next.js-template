"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitch() {
	const { setTheme } = useTheme();

	const [isDark, setIsDark] = useState(useTheme().theme === "dark");

	const toggleTheme = () => {
		setTheme(isDark ? "light" : "dark");
		setIsDark(!isDark);
	};

	return (
		<Button
			onClick={toggleTheme}
			aria-label="Toggle dark mode"
			title="Toggle dark mode"
			variant="outline"
			size="icon"
		>
			{isDark ? <Sun size={24} /> : <Moon size={24} />}
		</Button>
	);
}
