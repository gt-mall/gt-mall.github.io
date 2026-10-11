// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.WEBSITE_URL || undefined,
  base: process.env.WEBSITE_BASE || "/",
  // 显式指定纯静态输出模式，适配 GitHub Pages 等静态托管环境
  output: "static",

  // 部署到 GitHub Pages 时的推荐配置示例：
  // site: 'https://<your-github-username>.github.io',
  // base: '/<your-repo-name>/',

  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
