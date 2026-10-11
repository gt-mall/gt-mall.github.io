# GT-Shop 官方网站

[GT-Shop](https://github.com/gt-mall/gt-shop) 开源商城官网，使用 Astro、TypeScript、Tailwind CSS 与 MDX，输出纯静态站点。

官网文案参考 `/home/shop/mall` 的 README、业务实现、配置与部署脚本；品牌图片及界面截图来自 GT-Shop 仓库。AI 用户画像、优惠券推荐与个性化定价标注为开发中。

## 运行

需要 Node.js >= 22.12 与 pnpm 10。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

打开命令输出的本地地址，默认 `http://localhost:4321`。

```bash
pnpm check
pnpm build
pnpm preview
```

构建产物在 `dist/`，可以部署到 Nginx、GitHub Pages 或其他静态托管平台。正式域名未配置时，不输出猜测的 canonical 或社交分享图片地址，sitemap 保持为空。

## 内容与目录

```text
src/
├── components/common/    导航、页脚、品牌、图标、可复制代码块
├── data/site.ts          仓库地址、导航、功能文案与路径辅助方法
├── layouts/              公共页面与文档布局
├── pages/
│   ├── index.astro       官网首页
│   ├── docs/index.astro  文档中心
│   ├── docs/*.mdx        快速开始、构建部署、项目架构、二次开发
│   ├── 404.astro         自定义 404 页面
│   ├── robots.txt.ts     爬虫配置
│   └── sitemap.xml.ts    正式域名下的站点地图
└── styles/global.css     桌面、平板和手机样式
public/
├── favicon.svg           GT-Shop 站点图标
└── images/               品牌主视觉与真实界面截图
```

首页包含功能特性、产品截图切换、AI 辅助开发、三端架构、入门入口、文档和 FAQ。移动导航、截图键盘切换、代码复制和 FAQ 使用原生浏览器交互；前端不使用 `try/catch`。

编辑商品等功能文案时修改 `src/data/site.ts`；编辑正文时修改 `src/pages/docs/*.mdx`。说明应与商城源码一致，不将开发中的能力写成已上线功能。

## 配置正式域名

构建时设置你自己的域名，以生成 canonical、Open Graph 图片 URL 和完整 sitemap：

```bash
WEBSITE_URL=https://your-domain.example pnpm build
```

`your-domain.example` 是占位符。将 `dist/` 上传到对应静态服务器；这里的构建不会上传或部署到任何服务器。

## GitHub Pages 自动发布

仓库已提供 `.github/workflows/deploy-pages.yml`，推送到 `main` 会自动安装依赖、执行类型检查、构建并发布。使用 Node.js 24 与 `package.json` 指定的 pnpm 10.24.0；锁文件决定依赖版本。

首次启用：

1. 打开 [仓库 Settings → Pages](https://github.com/gt-mall/website/settings/pages)。
2. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
3. 将工作流、`package.json` 与本说明提交并推送到 `main`。
4. 在 [Actions](https://github.com/gt-mall/website/actions) 查看 **Deploy to GitHub Pages**，等待构建和发布成功。

工作流根据组织与仓库名自动选择发布路径：

- 仓库名为 `website`：发布到 **https://gt-mall.github.io/website/**，base 为 `/website/`。
- 仓库名为 `gt-mall.github.io`：发布到 **https://gt-mall.github.io/**，base 为 `/`。

如果希望直接访问组织主页根地址，在仓库 **Settings → General → Repository name** 将 `website` 改名为 `gt-mall.github.io`，并确认 **Settings → Pages → Source** 为 **GitHub Actions**。GitHub 要求组织主页使用 `<组织名>.github.io` 仓库；只修改 base 不能把普通项目站点发布到根地址。

改名后更新本地远程地址，然后将当前工作流修改提交、推送到 `main`：

```bash
git remote set-url origin https://github.com/gt-mall/gt-mall.github.io.git
```

工作流会自动识别新仓库名，正确生成根路径的图片、文档链接与 SEO 地址。

之后每次推送 `main` 都会更新网站，也可以进入该工作流点击 **Run workflow** 手动发布。构建产物上传为 `github-pages` Artifact，无需额外配置服务器或个人访问令牌。

如果构建成功而发布失败，先检查 Pages Source 是否选为 GitHub Actions，以及 `github-pages` 环境是否要求人工审批。远程 Actions 成功和实际页面访问仍需在首次推送后确认。

如果以后绑定独立域名，在 Pages 设置中配置域名，并同步修改工作流的 `WEBSITE_URL` 为该域名、`WEBSITE_BASE` 为 `/`，然后重新发布。

## 本地验证 GitHub Pages 路径

如果发布到仓库子路径，同时设置正式地址与 base：

```bash
WEBSITE_URL=https://gt-mall.github.io WEBSITE_BASE=/website/ pnpm build
```

组织主页使用根路径：

```bash
WEBSITE_URL=https://gt-mall.github.io WEBSITE_BASE=/ pnpm build
```

将 `dist/` 作为 Pages 部署产物。所有站内链接和图片通过 `withBase()` 生成，适配子路径。新的页面或资源链接也应使用这个辅助方法。

## 静态服务器

将站点根目录指向 `dist/`，目录首页为 `index.html`，404 页面为 `404.html`。文档是实际生成的静态路由，不需要 SPA 回退配置。

## 开源协议

见 [LICENSE](LICENSE)。商城项目的协议见 [GT-Shop LICENSE](https://github.com/gt-mall/gt-shop/blob/master/LICENSE)。
