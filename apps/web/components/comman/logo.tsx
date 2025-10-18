import { cn } from "@rerevolve/ui/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
	return (
		<Image
			src="/logo.svg"
			alt="ReRevolve"
			width={100}
			height={50}
			className={cn(
				className,
				"invert-100 dark:invert-0 overflow-hidden"
			)}
		/>
	);
}
