import { Button } from "@rerevolve/ui/components/button";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
	return (
		<header className="flex justify-between items-center p-4">
			<Link href="/" className="flex gap-2">
				<Logo />
			</Link>
			<Button variant={"ghost"}>Sign In</Button>
		</header>
	);
}
