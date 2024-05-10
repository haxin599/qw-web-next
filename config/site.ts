export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "青岩官网",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "首页",
			href: "/",
			key: "index",
			children: []
		},
		{
			label: "青岩文化",
			href: "/culture",
			key: "culture",
			children: []
		},
		{
			label: "景区视角",
			href: "/perspective",
			key: "perspective",
			children: []
		},
		{
			label: "景区资讯",
			href: "/consult",
			key: "consult",
			children: []
		},
		{
			label: "景区服务",
			href: "/service",
			key: "service",
			children: []
		},
		{
			label: "企业简介",
			href: "/info",
			key: "info",
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
