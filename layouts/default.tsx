import { Navbar } from "@/components/navbar";

import { Head } from "./head";
import { Footer } from "@/components/footer";
export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen" style={{ minWidth: '960px' }}>
			<Head />
			<Navbar />
			<main className="mx-auto flex-grow w-full">
				{children}
			</main>
			<footer className="bg-[#692A1B]">
				<Footer />
			</footer>
		</div>
	);
}
