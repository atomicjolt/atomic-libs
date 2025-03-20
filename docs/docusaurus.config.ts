import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "Atomic Libs",
  url: "https://atomicjolt.github.io",
  baseUrl: "/atomic-libs/",
  trailingSlash: false,
  favicon: "favicon.svg",
  organizationName: "atomicjolt",
  projectName: "atomic-libs",
  staticDirectories: ["../public"],
  onBrokenLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.ts"), // Root-level sidebar
        },
        theme: {
          customCss: ["./css/custom.css"],
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "lti-client",
        path: "../packages/lti-client/docs",
        routeBasePath: "lti-client",
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
          type: "dropdown",
          label: "Atomic Packages",
          position: "left",
          items: [
            {
              to: "elements/",
              activeBasePath: "elements",
              label: "@atomicjolt/atomic-elements",
            },
            {
              to: "forms/",
              activeBasePath: "forms",
              label: "@atomicjolt/forms",
            },
            {
              to: "hooks/",
              activeBasePath: "hooks",
              label: "@atomicjolt/hooks",
            },
          ],
        },
        {
          type: "dropdown",
          label: "LTI Packages",
          position: "left",
          items: [
            {
              label: "@atomicjolt/lti-client",
              to: "lti-client/",
              activeBasePath: "lti-client",
            },
          ],
        },
        {
          type: "html",
          position: "right",
          value: `
            <a href="https://atomicjolt.github.io/atomic-libs/storybook" target="_blank" class="navbar-storybook-link">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="64"
                    version="1.1" viewBox="0 0 52 64">
                    <title>icon-storybook-inverse</title>
                    <g id="icon-storybook-inverse" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                        <path id="icon" fill="#FFF" fill-rule="nonzero"
                            d="M51.2729096,3.92285771 C51.2769973,3.98759391 51.2790429,4.05244063 51.2790429,4.11730315 L51.2790429,59.8828028 C51.2790429,61.6043831 49.8689636,63 48.1295431,63 C48.0824212,63 48.0353056,62.9989534 47.9882313,62.9968606 L5.94876437,61.1280997 C4.31149338,61.0553189 3.00425692,59.751918 2.94279175,58.1309472 L1.00225543,6.95476663 C0.938167124,5.26461814 2.24754196,3.83223697 3.95307926,3.72673418 L38.427,1.594 L38.1272753,8.62078766 C38.1238721,8.70179664 38.1419373,8.78178731 38.179031,8.85305525 L38.2223772,8.92113026 C38.3791917,9.12573637 38.6738999,9.16578288 38.880626,9.0105767 L38.880626,9.0105767 L41.6382617,6.94019678 L43.9673936,8.75618537 C44.0546693,8.82423279 44.1634862,8.85946584 44.2745216,8.85562813 C44.5338374,8.84666553 44.7367132,8.6313391 44.7276576,8.37468316 L44.7276576,8.37468316 L44.467,1.22 L47.9330824,1.00617628 C49.6691159,0.89878704 51.1644074,2.2046298 51.2729096,3.92285771 Z M27.0885852,11.5497821 C18.88982,11.5497821 14.2961856,15.9571143 14.2961856,22.5681161 C14.2961856,34.0822778 29.9959487,34.3026444 29.9959487,40.5830962 C29.9959487,42.3460299 29.1237396,43.3927719 27.2048797,43.3927719 C24.7045471,43.3927719 23.7160434,42.1289316 23.832338,37.8317805 C23.832338,36.8995698 14.2961856,36.6089448 14.0054493,37.8317805 C13.2651161,48.2453073 19.8201763,51.248968 27.3211742,51.248968 C34.5895831,51.248968 40.2880157,47.4144645 40.2880157,40.4729126 C40.2880157,28.132376 24.3556634,28.4629261 24.3556634,22.3477494 C24.3556634,19.8686237 26.2163761,19.5380737 27.3211742,19.5380737 C28.4841196,19.5380737 30.5774214,19.7409467 30.4029796,24.368648 C30.4029796,25.58142 38.6567008,25.00017 39.7646901,24.1482813 C39.7646901,15.8895929 35.2873503,11.5497821 27.0885852,11.5497821 Z" />
                    </g>
                </svg>
            </a>
          `,
        },
        {
          type: "html",
          position: "right",
          value: `
            <a href="https://github.com/atomicjolt/atomic-libs" target="_blank" class="navbar-github-link">
              <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/>
              </svg>
            </a>
          `,
        },
      ],
    },
  },
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    },
  ],
};

export default config;
