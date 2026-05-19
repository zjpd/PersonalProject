# 个人网站

这是一个使用 React + Vite 构建的现代化个人网站，部署在 GitHub Pages 上。

## 🚀 快速开始

### 前置要求

- Node.js 18+ 
- npm 或 yarn

### 本地开发

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 在浏览器中打开 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

构建后的文件将位于 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## 📦 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

1. 在 GitHub 上创建一个新仓库，例如 `PersonalProject`
2. 不要初始化 README、.gitignore 或 license（我们已经有了）

### 步骤 2: 初始化 Git 并推送代码

```bash
# 初始化 git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Personal website"

# 添加远程仓库（替换为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/PersonalProject.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 步骤 3: 配置 GitHub Pages

1. 访问你的 GitHub 仓库页面
2. 点击 **Settings** > **Pages**
3. 在 **Build and deployment** 部分：
   - Source: 选择 **GitHub Actions**
4. 保存后，GitHub Actions 会自动构建和部署

### 步骤 4: 访问你的网站

部署完成后（通常需要1-2分钟），你可以通过以下URL访问：
```
https://YOUR_USERNAME.github.io/PersonalProject/
```

## 🎨 自定义网站

### 修改个人信息

编辑 `src/App.jsx` 文件：
- 修改标题和个人介绍
- 更新技能列表
- 添加你的项目信息
- 更新联系方式

### 修改样式

编辑 `src/App.css` 文件来自定义颜色、布局等。

### 修改网站标题

编辑 `index.html` 中的 `<title>` 标签。

## 📁 项目结构

```
PersonalProject/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── src/
│   ├── App.jsx             # 主应用组件
│   ├── App.css             # 应用样式
│   ├── main.jsx            # 入口文件
│   └── index.css           # 全局样式
├── index.html              # HTML 模板
├── package.json            # 项目依赖
├── vite.config.js          # Vite 配置
└── README.md               # 说明文档
```

## 🔧 技术栈

- **React 18** - UI 框架
- **Vite** - 构建工具
- **GitHub Pages** - 托管服务
- **GitHub Actions** - CI/CD

## 📝 许可证

MIT License

---

**注意**: 记得在 `vite.config.js` 中将 `base` 路径修改为你的仓库名称！
