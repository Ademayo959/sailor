"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle({ inline = false }: { inline?: boolean }) {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
	}, []);

	function toggleTheme() {
		const nextTheme = theme === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = nextTheme;
		setTheme(nextTheme);
		try {
			window.localStorage.setItem("sailor-theme", nextTheme);
		} catch {
			// Keep the current choice for this page even if storage is unavailable.
		}
	}

	return (
		<button
			type="button"
			className={`mode-toggle bg-card shadow-md cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${inline ? "mode-toggle-inline" : ""}`}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			aria-pressed={theme === "dark"}
			onClick={toggleTheme}
		>
			<i
				className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
				aria-hidden="true"
			/>
		</button>
	);
}
