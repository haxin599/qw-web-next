import { Navbar } from "@/components/navbar";

import { Head } from "./head";
import { Footer } from "@/components/footer";
export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen" >
			<Head />
			<Navbar />
			<main className="mx-auto flex-grow w-full">
				{children}
			</main>
			<footer className="footer-bg">
				<Footer />
			</footer>
		</div>
	);
}
