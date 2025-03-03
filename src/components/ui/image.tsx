import React from "react";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/components/lib/cn";

const imageVariants = cva("rounded-lg", {
	variants: {
		shadow: {
			true: "shadow-xl",
			false: "",
		},
	},
});

const ImageComponent = React.forwardRef<
	HTMLImageElement,
	{
		src: string;
		alt: string;
		className?: string;
		shadow?: boolean;
		width: number;
		height: number;
	}
>(({ src, alt, className, shadow, width, height }, ref) => {
	return (
		<Image
			ref={ref}
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={cn(
				imageVariants({
					shadow: shadow,
				}),
				className
			)}
		/>
	);
});

ImageComponent.displayName = "Image";

export { ImageComponent as Image };
