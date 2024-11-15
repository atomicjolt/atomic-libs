import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "Atomic Libs",
  url: "https://your-site.com",
  baseUrl: "/atomic-libs/",
  favicon: "favicon.svg",
  organizationName: "atomicjolt", // GitHub org/user name
  projectName: "atomic-libs", // Repo name
  staticDirectories: ["../public"],
  onBrokenLinks: "log",
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
          to: "elements/",
          activeBasePath: "elements",
          label: "Elements",
          position: "left",
        },
        {
          to: "forms/",
          activeBasePath: "forms",
          label: "Forms",
          position: "left",
        },
        {
          to: "hooks/",
          activeBasePath: "hooks",
          label: "Hooks",
          position: "left",
        },
        {
          href: "https://github.com/atomicjolt/atomic-libs",
          position: "right",
          label: "GitHub",
        },
      ],
    },
  },
};

export default config;
