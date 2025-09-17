type SidebarIcon = {
    name: string;
    icon: string;
    route: string;
}

type SidebarIconSection = {
    sectionTitle: string;
    showTitle: boolean;
    icons: SidebarIcon[];
}

export { type SidebarIcon, type SidebarIconSection };