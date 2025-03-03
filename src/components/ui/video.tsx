import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/components/lib/cn";

const videoVariants = cva("rounded-lg", {
	variants: {
		shadow: {
			true: "shadow-xl",
			false: "",
		},
	},
});

const VideoComponent = React.forwardRef<
	HTMLVideoElement,
	{
		src: string;
		className?: string;
		shadow?: boolean;
		controls?: boolean;
		autoPlay?: boolean;
		loop?: boolean;
	}
>(
	(
		{ src, className, shadow, controls = true, autoPlay = false, loop = false },
		ref
	) => {
		return (
			<video
				ref={ref}
				src={src}
				controls={controls}
				autoPlay={autoPlay}
				loop={loop}
				className={cn(
					videoVariants({
						shadow: shadow,
					}),
					className
				)}
			/>
		);
	}
);

VideoComponent.displayName = "Video";

export { VideoComponent as Video };
