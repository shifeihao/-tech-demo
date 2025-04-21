# Vue Note App - Web

This project is a personal assignment for the Modern Web Development course. The goal is to explore and use tools or frameworks that are not covered in the course. I chose to use **Vue.js** as the front-end framework, combined with Express and MongonDB, to develop a notepad application.

## Features

- Register/ Login/ Logout
- Create, view, edit, delete notes
- Page transition animations (using Vue `<transition>`)
- Frontend and backend separated, communicating via RESTful API

## 技术栈

- **前端**：Vue 3 + Vue Router + Axios + Tailwind CSS
- **后端**：Express + MongoDB + Mongoose
- **开发工具**：Vite + Node.js + GitHub Classroom

## 项目结构

```
cs732-assignment-shifeihao/
├── frontend/       # Vue 前端项目
├── backend/        # Express 后端服务
├── README.md       # 项目说明文件
```

---

## 安装与运行说明

### 前提条件

- 安装 [Node.js](https://nodejs.org/) 和 [MongoDB](https://www.mongodb.com/)
- 建议使用 VS Code 开发环境

### 克隆仓库

```bash
git clone https://github.com/UOA-CS732-S1-2025/cs732-assignment-shifeihao.git
cd cs732-assignment-shifeihao
```

### 启动后端

```bash
cd backend
npm install
npm run dev
```

默认运行在 `http://localhost:5000`

### 启动前端

```bash
cd frontend
npm install
npm run dev
```

默认运行在 `http://localhost:5173`

---

## Vue 与 React 的对比分析（重点）

本项目选用 Vue 主要是为了体验其与 React 的差异，以下是关键对比：

| 功能点       | Vue 特性                     | React 中的做法                        |
| ------------ | ---------------------------- | ------------------------------------- |
| 表单双向绑定 | ✅ `v-model`                 | ❌ 需要 `value` + `onChange`          |
| 动画控制     | ✅ `<transition>` 直接使用   | ❌ 需要额外动画库（如 Framer Motion） |
| 模板结构     | ✅ 使用 HTML 模板 + 指令     | ❌ JSX 混合逻辑和结构                 |
| 响应式变量   | ✅ `ref()` / `reactive()`    | ❌ `useState` + hook 限制             |
| 组件通信     | ✅ `props` + `emit`          | ✅ `props` + 回调函数                 |
| 写法风格     | ✅ `<script setup>` 紧凑高效 | ❌ 函数组件结构相对繁琐               |

---

## 如何测试

1. 启动前后端后，自动生成测试用户，并插入一条默认笔记：
   - 用户名：`testuser`
   - 密码：`123456`
2. 也可以自行在网页中注册账户，添加新笔记。
3. 点击“查看”、“编辑”或“删除”按钮操作，实现对应功能。
4. 查看笔记卡片的动态过渡动画。

---

## 视频演示说明（另附上传至 Canvas）

本项目附带一个 15 分钟演示视频，包含以下内容：

- Vue 技术介绍与上手体验
- 项目功能运行演示
- 代码结构与核心实现讲解
- 与 React 的技术对比分析

---

## 安全说明

本项目未上传 `.env` 文件，已经提交到：Assignment - Private info / API key / etc submission，请查阅。它包括:

### backend

```
MONGO_URI
JWT_SECRET
```

### frontend

```
VITE_API_BASE_UR
```

---

## 联系方式

作者：SHI FEIHAO  
邮箱：shifeihao@outlook.com  
GitHub：[@shifeihao](https://github.com/UOA-CS732-S1-2025/cs732-assignment-shifeihao)
