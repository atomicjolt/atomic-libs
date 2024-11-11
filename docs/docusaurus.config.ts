import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "My Project",
  url: "https://your-site.com",
  baseUrl: "/",
  favicon: "favicon.svg",
  organizationName: "atomicjolt", // GitHub org/user name
  projectName: "atomic-packages", // Repo name
  staticDirectories: ["../public"],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.ts"), // Root-level sidebar
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "hooks",
        path: "../packages/hooks/docs",
        routeBasePath: "hooks",
        sidebarPath: require.resolve("./sidebars.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "elements",
        path: "../packages/atomic-elements/docs",
        routeBasePath: "elements",
        sidebarPath: require.resolve("./sidebars.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "forms",
        path: "../packages/forms/docs",
        routeBasePath: "forms",
        sidebarPath: require.resolve("./sidebars.ts"),
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Atomic Packages",
      logo: {
        alt: "My Project Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "elements/", // Link to the elements docs
          activeBasePath: "elements",
          label: "Elements",
          position: "left",
        },
        {
          to: "forms/", // Link to the forms docs
          activeBasePath: "forms",
          label: "Forms",
          position: "left",
        },
        {
          to: "hooks/", // Link to the hooks docs
          activeBasePath: "hooks",
          label: "Hooks",
          position: "left",
        },
        {
          href: "https://github.com/atomicjolt/atomic-packages",
          position: "right",
          label: "GitHub",
        },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
      type: "text/css",
    },
    "/src/css/custom.css", // Add this line to load custom.css
  ],
};

export default config;
