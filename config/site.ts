export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "首页",
			href: "/",
			key: "key1",
			children: []
		},
		{
			label: "青岩文化",
			href: "/culture",
			key: "key2",
			children: []
		},
		{
			label: "景区视角",
			href: "/pricing",
			key: "key3",
			children: []
		},
		{
			label: "景区服务",
			href: "/blog",
			key: "key4",
			children: []
		},
		{
			label: "景区咨询",
			href: "/home",
			key: "key5",
			children: []
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};