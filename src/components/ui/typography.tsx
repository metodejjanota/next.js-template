import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/lib/cn";

const h1Variants = cva("font-medium tracking-tight text-betterBlack", {
	variants: {
		size: {
			sm: "md:text-2xl",
			md: "md:text-3xl",
			lg: "md:text-5xl",
			xl: "md:text-7xl",
		},
	},
	defaultVariants: {
		size: "xl",
	},
});

const H1 = React.forwardRef<
	HTMLHeadingElement,
	{ children: React.ReactNode; className?: string } & VariantProps<
		typeof h1Variants
	>
>(({ children, className, size }, ref) => {
	return (
		<h1 ref={ref} className={"text-6xl " + cn(h1Variants({ size }), className)}>
			{children}
		</h1>
	);
});
H1.displayName = "H1";

const h2Variants = cva("font-medium tracking-tight text-betterBlack", {
	variants: {
		size: {
			sm: "text-lg md:text-xl lg:text-2xl",
			md: "text-xl md:text-2xl lg:text-3xl",
			lg: "text-2xl md:text-3xl lg:text-4xl",
			xl: "text-4xl md:text-5xl lg:text-6xl",
			huge: "text-7xl md:text-6xl lg:text-8xl",
		},
	},
	defaultVariants: {
		size: "lg",
	},
});

const H2 = React.forwardRef<
	HTMLHeadingElement,
	{ children: React.ReactNode; className?: string } & VariantProps<
		typeof h2Variants
	>
>(({ children, className, size }, ref) => {
	return (
		<h2 ref={ref} className={cn(h2Variants({ size }), className)}>
			{children}
		</h2>
	);
});
H2.displayName = "H2";

const h3Variants = cva("font-medium text-betterBlack", {
	variants: {
		size: {
			sm: "text-xl",
			md: "text-2xl",
			lg: "text-3xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

const H3 = React.forwardRef<
	HTMLHeadingElement,
	{
		children: React.ReactNode;
		className?: string;
		underlined?: string;
	} & VariantProps<typeof h3Variants>
>(({ children, className, size, underlined }, ref) => {
	return (
		<div ref={ref} className="flex flex-col gap-2">
			<h3 className={cn(h3Variants({ size }), className)}>{children}</h3>
			{underlined ? <hr className="border-t-2 border-betterBlack" /> : null}
		</div>
	);
});
H3.displayName = "H3";

const h4Variants = cva("font-semibold opacity-50 uppercase text-betterBlack", {
	variants: {
		size: {
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

const H4 = React.forwardRef<
	HTMLHeadingElement,
	{ children: React.ReactNode; className?: string } & VariantProps<
		typeof h4Variants
	>
>(({ children, className, size }, ref) => {
	return (
		<h4 ref={ref} className={cn(h4Variants({ size }), className)}>
			{children}
		</h4>
	);
});
H4.displayName = "H4";

const textVariants = cva("text-betterBlack", {
	variants: {
		opacity: {
			high: "opacity-100",
			low: "opacity-50",
		},
		size: {
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
			"3xl": "text-3xl",
			"4xl": "text-4xl",
		},
	},
	defaultVariants: {
		opacity: "low",
		size: "md",
	},
});

const Text = React.forwardRef<
	HTMLParagraphElement,
	{ children: React.ReactNode; className?: string } & VariantProps<
		typeof textVariants
	>
>(({ children, className, opacity, size }, ref) => {
	return (
		<p ref={ref} className={cn(textVariants({ opacity, size }), className)}>
			{children}
		</p>
	);
});
Text.displayName = "Text";

const boldVariants = cva("font-semibold text-betterBlack", {
	variants: {
		weight: {
			bold: "font-bold",
			semibold: "font-semibold",
		},
	},
	defaultVariants: {
		weight: "semibold",
	},
});

const Bold = React.forwardRef<
	HTMLSpanElement,
	{ children: React.ReactNode; className?: string } & VariantProps<
		typeof boldVariants
	>
>(({ children, className, weight }, ref) => {
	return (
		<span ref={ref} className={cn(boldVariants({ weight }), className)}>
			{children}
		</span>
	);
});
Bold.displayName = "Bold";

const italicVariants = cva("italic text-betterBlack", {
	variants: {
		style: {
			italic: "italic",
			oblique: "oblique",
		},
	},
	defaultVariants: {
		style: "italic",
	},
});

const Italic = React.forwardRef<
	HTMLSpanElement,
	{ children: React.ReactNode; className?: string } & VariantProps<
		typeof italicVariants
	>
>(({ children, className, style }, ref) => {
	return (
		<span ref={ref} className={cn(italicVariants({ style }), className)}>
			{children}
		</span>
	);
});
Italic.displayName = "Italic";

const linkTextVariants = cva(
	"cursor-pointer text-primary underline-offset-4 underline",
	{
		variants: {
			unstyled: {
				true: "no-underline text-inherit",
			},
		},
	}
);

const LinkText = React.forwardRef<
	HTMLAnchorElement,
	{
		href: string;
		children: React.ReactNode;
		className?: string;
		unstyled?: boolean;
	}
>(({ href, children, className, unstyled }, ref) => {
	return (
		<Link
			href={href}
			ref={ref}
			className={cn(linkTextVariants({ unstyled }), className)}
		>
			<span>{children}</span>
		</Link>
	);
});

LinkText.displayName = "LinkText";

export { H1, H2, H3, H4, Text, Bold, Italic, LinkText };
