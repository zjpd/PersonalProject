# 🌐 个人网站完整部署指南

## ✅ 环境检查清单

在开始之前，请确保你的 Windows 11 系统已安装以下工具：

### 1. 检查 Node.js（必需）
```powershell
node --version
npm --version
```

如果未安装，请访问 [https://nodejs.org/](https://nodejs.org/) 下载并安装 LTS 版本（推荐 18.x 或更高）。

### 2. 检查 Git（必需）
```powershell
git --version
```

如果未安装，请访问 [https://git-scm.com/download/win](https://git-scm.com/download/win) 下载安装。

### 3. GitHub 账号（必需）
- 如果没有，访问 [https://github.com/join](https://github.com/join) 注册

---

## 📋 部署步骤

### 第一步：安装项目依赖

在项目根目录打开 PowerShell，运行：

```powershell
npm install
```

这将安装 React、Vite 等所有必需的依赖包。

### 第二步：本地测试网站

启动开发服务器：

```powershell
npm run dev
```

然后在浏览器中打开显示的地址（通常是 `http://localhost:5173`）

你应该能看到一个漂亮的个人网站页面！

### 第三步：自定义你的网站内容

编辑以下文件来个性化你的网站：

1. **修改个人信息** - `src/App.jsx`
   - 更改标题和介绍
   - 更新技能列表
   - 添加你的真实项目
   - 填写联系方式

2. **修改样式** - `src/App.css`
   - 更改颜色主题
   - 调整布局

3. **修改网站标题** - `index.html`
   - 修改 `<title>` 标签内容

### 第四步：创建 GitHub 仓库

1. 访问 [https://github.com/new](https://github.com/new)
2. 仓库名称：`PersonalProject`（或你喜欢的名称）
3. 设置为 Public（公开）
4. **不要**勾选 "Initialize with README"
5. 点击 "Create repository"

### 第五步：配置 Vite

编辑 `vite.config.js` 文件，将 `base` 路径改为你的仓库名称：

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/PersonalProject/', // 如果你的仓库名不同，请修改这里
})
```

### 第六步：初始化 Git 并推送代码

在项目根目录的 PowerShell 中执行：

```powershell
# 初始化 Git 仓库
git init

# 添加所有文件到 Git
git add .

# 提交代码
git commit -m "Initial commit: Personal website"

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/PersonalProject.git

# 切换到 main 分支
git branch -M main

# 推送到 GitHub
git push -u origin main
```

首次推送时，浏览器会打开让你登录 GitHub 授权。

### 第七步：配置 GitHub Pages

1. 访问你的 GitHub 仓库页面
2. 点击顶部的 **Settings** 标签
3. 在左侧菜单找到并点击 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source**: 选择 **GitHub Actions**
5. 点击保存（如果有保存按钮）

### 第八步：等待自动部署

推送代码后，GitHub Actions 会自动开始部署：

1. 访问仓库的 **Actions** 标签页
2. 你会看到一个正在运行的工作流 "Deploy to GitHub Pages"
3. 等待它完成（通常需要 1-2 分钟）
4. 绿色 ✓ 表示成功，红色 ✗ 表示失败

### 第九步：访问你的网站！

部署成功后，你的网站将在以下地址可访问：

```
https://YOUR_USERNAME.github.io/PersonalProject/
```

🎉 恭喜！现在任何人都可以通过这个 URL 访问你的个人网站了！

---

## 🔧 常见问题排查

### 问题 1: npm install 失败

**解决方案：**
```powershell
# 清除 npm 缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# 重新安装
npm install
```

### 问题 2: 网站显示空白页面

**可能原因：** vite.config.js 中的 `base` 路径不正确

**解决方案：**
- 确保 `base` 路径与你的仓库名称完全匹配
- 例如仓库名为 `PersonalProject`，则 `base: '/PersonalProject/'`

### 问题 3: GitHub Actions 部署失败

**检查项：**
1. 查看 Actions 标签页中的错误日志
2. 确保 `package.json` 中存在正确的构建脚本
3. 确保 `.github/workflows/deploy.yml` 文件存在

### 问题 4: 网站更新了但看不到变化

**解决方案：**
- 浏览器强制刷新：按 `Ctrl + F5`
- 清除浏览器缓存
- 等待几分钟让 CDN 更新

### 问题 5: Git 推送被拒绝

**解决方案：**
```powershell
# 如果提示需要拉取远程更改
git pull origin main --allow-unrelated-histories

# 然后再次推送
git push -u origin main
```

---

## 📝 更新网站内容

每次修改网站后，使用以下命令更新：

```powershell
# 查看修改的文件
git status

# 添加所有修改
git add .

# 提交修改
git commit -m "更新网站内容"

# 推送到 GitHub（会自动触发部署）
git push
```

等待 1-2 分钟，GitHub Actions 会自动重新部署你的网站。

---

## 🎨 进阶自定义

### 添加新页面

在 `src` 目录下创建新的组件文件，然后在 `App.jsx` 中引入和使用。

### 添加图片

1. 在项目中创建 `public` 文件夹
2. 将图片放入其中
3. 在代码中使用：`<img src="/your-image.jpg" alt="描述" />`

### 更改域名（可选）

如果你想使用自定义域名：
1. 购买域名
2. 在 GitHub Pages 设置中添加自定义域名
3. 配置 DNS 记录指向 GitHub Pages

---

## 📞 获取帮助

如果遇到问题：
1. 查看 GitHub Actions 的日志
2. 搜索相关错误信息
3. 查阅 Vite 官方文档：[https://vitejs.dev/](https://vitejs.dev/)
4. 查阅 React 官方文档：[https://react.dev/](https://react.dev/)

---

**祝你部署顺利！🚀**
