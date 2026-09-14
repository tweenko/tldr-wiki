import { defineConfig } from "vitepress";
import gmlGrammar from "./gml.tmLanguage.json" with { type: "json" };
import gmlTheme from "./gml.theme.json" with { type: "json" };

import tlfGrammar from "./tlf.tmLanguage.json" with { type: "json" };

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "TLDR Engine Docs",
    markdown: {
        languages: [gmlGrammar, tlfGrammar],
        theme: {
            light : gmlTheme,
            dark : gmlTheme
        },
        lineNumbers : true
    },
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Getting Started", link: "/basics/getting-started" },
        ],

        sidebar: [
            {
                text: "Basics",
                items: [
                  { text: "Getting Started", link: "/basics/getting-started" },
                  { text: "FAQ", link: "/basics/faq" }
                  // TODO: Port Rules and standards
                  // TODO: Port contributing.md
                  // TODO: Port How To Update
                  // TODO: Credits and thanks(?)
                ],
            },
            {
              text: "Battle System",
              items: [
                {text: "Battle System Intro", link: "/battle-system/battle-system-intro"},
                {text: "Encounter Sets", link: "/battle-system/encounter-sets"},
                {text: "Enemies", link: "/battle-system/enemy-reference"},
                {text: "Turn Objects", link: "/battle-system/turn-objects"}
              ]
            },
            {
              text: "Cutscenes",
              items: [
                {text: "Cutscenes", link: "/cutscenes"}
                // TODO: Add text box/typer control info
                // TODO: Add Actors
              ]
            }
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/tweenko/tldr-engine" },
            { icon: "discord", link: "https://discord.gg/x3t8JTyC2p" },
        ],
    },
});
