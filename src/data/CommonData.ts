const sidebarSections = [
    {
        sectionTitle: "Principal",
        showTitle: false,
        icons: [
            { name: "Dashboard general", icon: "pi-home", route: "/" }
        ]
    },
    {
        sectionTitle: "Productos",
        showTitle: true,
        icons: [
            { name: "Seguro automotor", icon: "pi-car", route: "/car-insurance-dashboard" },
            { name: "Seguro de vida", icon: "pi-heart", route: "/life-insurance-dashboard" }
        ]
    }];

export { sidebarSections }