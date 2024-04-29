import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	DropdownItem, DropdownTrigger, Dropdown, DropdownMenu
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";
import { useRouter } from 'next/router';
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

const MyItem = (props) => {
	const { label, children, isActive, href, ...rest } = props
	if (children && children.length > 0) {
		return (
			<Dropdown>
				<NavbarItem >
					<DropdownTrigger>
						{/* <Button
							disableRipple
							className="p-0 bg-transparent data-[hover=true]:bg-transparent"

							radius="sm"
							variant="light"
						>
							{label}
						</Button> */}
						<Link color="primary" href={href}>
							{label}
						</Link>
					</DropdownTrigger>
				</NavbarItem>
				<DropdownMenu
					aria-label="ACME features"
					className="w-[340px]"
					itemClasses={{
						base: "gap-0",
					}}
				>
					{children.map((itemChildren) => (
						<DropdownItem key={itemChildren.key}>{itemChildren.label}</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		)
	} else {
		return <NavbarItem className="gap-84">
			<Link color="primary" href={href}>
				{label}
			</Link>
		</NavbarItem>;
	}


}

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);



	const router = useRouter();
	// const icons = {
	// 	chevron: <ChevronDown fill="currentColor" size={16} />,
	// 	scale: <Scale className="text-warning" fill="currentColor" size={30} />,
	// 	lock: <Lock className="text-success" fill="currentColor" size={30} />,
	// 	activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
	// 	flash: <Flash className="text-primary" fill="currentColor" size={30} />,
	// 	server: <Server className="text-success" fill="currentColor" size={30} />,
	// 	user: <TagUser className="text-danger" fill="currentColor" size={30} />,
	// };
	return (
		<NextUINavbar maxWidth="xl" isBlurred={false} position="static" classNames={{
			item: [
				"flex",
				"relative",
				"h-full",
				"items-center",
				"data-[active=true]:after:content-['']",
				"data-[active=true]:after:absolute",
				"data-[active=true]:after:bottom-[4px]",
				"data-[active=true]:after:left-[50%]",
				"data-[active=true]:after:translate-x-[-50%]",
				"data-[active=true]:after:right-0",
				"data-[active=true]:after:h-[4px]",
				"data-[active=true]:after:w-[32px]",
				"data-[active=true]:after:rounded-[10px]",
				"data-[active=true]:after:bg-primary",
			],
			base: ["bg-transparent"]
		}}  >
			<NavbarContent>
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						{/* <Logo /> */}
						<p className=" text-xl color-[#D44926] text-[#D44926] text-[20px] tracking-[5px] font-black">青岩古镇</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="gap-20">
				{siteConfig.navItems.map((item, index) => (
					<NavbarItem className="gap-84" isActive={router.pathname === item.href}>
						<Link color="primary" className="text-[24px] text-[#D44926]" href={item.href} key={index}>
							{item.label}
						</Link>
					</NavbarItem>
					// <MyItem isActive={true} href={item.href} children={item.children} label={item.label} key={index} />
				))}
			</NavbarContent>

			<NavbarContent>
				{/* <NavbarMenuToggle /> */}
			</NavbarContent>

			{/* <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter}>
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord}>
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent> */}

			{/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github}>
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent> */}

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
