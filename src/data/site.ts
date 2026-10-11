export const site = {
  name: "GT-Shop",
  repository: "https://github.com/gt-mall/gt-shop",
  description:
    "面向 AI 的下一代开源商城。Go 后端、React 管理端与 UniApp 用户端，贯通商品、库存、订单、微信支付和售后。",
};
export const withBase = (path = "") =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
export const sourceLink = (path: string) =>
  `${site.repository}/blob/master/${path}`;
export const docPages = [
  {
    slug: "quick-start",
    title: "快速开始",
    description: "配置环境，启动你的第一套商城。",
    icon: "rocket",
  },
  {
    slug: "deployment",
    title: "构建与部署",
    description: "从本地构建到 Linux 服务器部署。",
    icon: "server",
  },
  {
    slug: "architecture",
    title: "项目架构",
    description: "理解三端结构和核心业务链路。",
    icon: "layers",
  },
  {
    slug: "development",
    title: "二次开发",
    description: "API 契约、项目 Skills 与验证流程。",
    icon: "code",
  },
];
export const features = [
  {
    icon: "box",
    label: "PRODUCT & INVENTORY",
    title: "商品好管理，库存有来去",
    description:
      "商品、分类、多规格 SKU 与运费模板集中维护。锁库、扣减、还库都有流水，预警精确到每个 SKU。",
    tags: ["多规格商品", "库存流水", "低库存预警"],
  },
  {
    icon: "receipt",
    label: "ORDER & PAYMENT",
    title: "把每一笔交易走完整",
    description:
      "从下单到发货、收货与售后，串起微信支付 API v3。支付和退款核对任务，让未确认的交易有后续处理。",
    tags: ["订单快照", "微信支付", "退货退款"],
  },
  {
    icon: "chart",
    label: "OPERATIONS",
    title: "让经营状况看得见",
    description:
      "商品、订单、会员与流量分析服务日常运营。状态筛选、数量统计和统一列表，让待办业务更清楚。",
    tags: ["经营分析", "会员管理", "明暗主题"],
  },
  {
    icon: "bolt",
    label: "PERFORMANCE",
    title: "热点少回源，更新快生效",
    description:
      "Redis 缓存与请求合并减少重复查询，商品变更后切换缓存版本。实时查询可售库存，缓存异常时回源数据库。",
    tags: ["Redis 缓存", "请求合并", "缓存降级"],
  },
  {
    icon: "shield",
    label: "RELIABILITY",
    title: "钱算得准，异常追得回",
    description:
      "十进制金额、交易快照与重复请求保护守住业务细节。固定后台任务记录执行状态，用数据库租约协调多实例。",
    tags: ["精确金额", "权限校验", "任务状态"],
  },
  {
    icon: "phone",
    label: "MULTI-PLATFORM",
    title: "一套业务，连接两种终端",
    description:
      "UniApp 复用微信小程序与 H5 的购物逻辑，覆盖浏览、搜索、购物车、地址、下单、评价和售后。",
    tags: ["微信小程序", "移动端 H5", "Vue 3 / Pinia"],
  },
];
