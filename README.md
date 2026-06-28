# 个人作品集网站

这是一个用于投递 AI 产品、产品工程、游戏 AI、AI 应用实习岗位的个人作品集网站。网站采用静态 HTML/CSS/JS 实现，可以直接部署到 GitHub Pages。

## 内容说明

- 首页：个人方向、简短介绍、简历下载、GitHub 链接
- About：人工智能专业背景与关注方向
- Skills：AI 理解、Python、数据分析、产品文档、PRD、PPT/可视化表达、项目协调等能力
- Projects：项目经历展示
- Contact：邮箱、城市、最快到岗时间等信息

作品集中包含校园小游戏《我的外卖被偷了》的项目介绍与 Demo 下载入口：

```text
downloads/food-delivery-detective-demo.zip
```

## 本地预览

无需安装依赖，直接打开根目录下的 `index.html` 即可预览。

也可以用本地服务预览：

```bash
python -m http.server 5173
```

然后访问：

```text
http://localhost:5173
```

## GitHub Pages 部署方式

1. 将本项目推送到 GitHub 仓库。
2. 打开仓库 `Settings`。
3. 进入 `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 自动发布。

## 文件结构

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
├── downloads
│   ├── food-delivery-detective-demo.zip
│   ├── firstgame-godot-demo.zip
│   ├── mcm-2026-project.zip
│   └── tianqiong-uav-relay-project.zip
└── assets
    ├── resume.pdf
    ├── game
    └── projects
```

## 上线前建议

- 将 `index.html` 中的姓名、邮箱、城市、到岗时间、GitHub 链接替换为真实信息。
- 用正式简历替换 `assets/resume.pdf`。
- 将真实游戏截图放入 `assets/game/`，建议命名为：
  - `cover.png`
  - `map.png`
  - `poster.png`
  - `flow.png`
- 如果后续 Demo 压缩包继续变大，建议改用 GitHub Releases 存放下载文件，避免仓库体积过重。
