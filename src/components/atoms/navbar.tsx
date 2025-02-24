"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { useState } from "react";
import { cn } from "@/utils";
import { routes } from "@/routes/routes";

export const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<header className="bg-gray-800 sticky top-0 z-50">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="md:flex md:items-center md:gap-12">
						<Link className="block" href="/">
							<span className="sr-only">IMPORTOWO Logo</span>
							<Logo className="h-12 w-auto" />
						</Link>
					</div>

					<div className="hidden md:block">
						<nav aria-label="Global">
							<ul className="flex items-center gap-6 text-sm">
								<NavItem href="/">Strona Główna</NavItem>
								<NavItem href={routes.gallery.path}>Galeria Serwisów </NavItem>
								<NavItem href={routes.services.threshold.path}>
									Progi Samochodowe{" "}
								</NavItem>
								<NavItem href={routes.contact.path}>Kontakt </NavItem>
							</ul>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<div className="sm:flex sm:gap-4"></div>

						<div className="block md:hidden">
							<button
								className="rounded bg-primary p-2 text-light transition"
								onClick={() => setIsVisible((prev) => !prev)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				{isVisible && (
					<div
						className={cn(
							"overflow-hidden transition duration-300",
							isVisible ? "h-fit" : "h-0",
						)}
					>
						<nav aria-label="Global">
							<ul className="flex flex-col items-center gap-4 text-sm py-4">
								<NavItem href={routes.gallery.path}>Galeria Serwisów </NavItem>
								<NavItem href={routes.services.threshold.path}>
									Progi Samochodowe{" "}
								</NavItem>
								<NavItem href={routes.contact.path}>Kontakt </NavItem>
							</ul>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

const NavItem = ({
	href,
	children,
}: {
	children: React.ReactNode;
	href: string;
}) => (
	<li>
		<a className="text-light transition hover:text-gray-500/75" href={href}>
			{children}
		</a>
	</li>
);
