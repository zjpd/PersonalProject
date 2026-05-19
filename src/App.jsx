import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <h1>Mr Jin & Miss LiLi Sweety Home</h1>
        <nav className="nav">
          <a href="#home">首页</a>
          <a href="#about">关于我</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <main className="main">
        <section id="home" className="section hero">
          <h2>你好，我是开发者</h2>
          <p>热爱编程，喜欢创造有趣的项目</p>
          <button onClick={() => setCount((count) => count + 1)}>
            点击次数：{count}
          </button>
        </section>

        <section id="about" className="section">
          <h2>关于我</h2>
          <p>这里可以介绍你的背景、技能和兴趣</p>
          <div className="skills">
            <span className="skill">Java</span>
            <span className="skill">React</span>
            <span className="skill">JavaScript</span>
            <span className="skill">HTML/CSS</span>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>我的项目</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>项目一</h3>
              <p>项目描述...</p>
            </div>
            <div className="project-card">
              <h3>项目二</h3>
              <p>项目描述...</p>
            </div>
            <div className="project-card">
              <h3>项目三</h3>
              <p>项目描述...</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>联系我</h2>
          <p>Email: your.email@example.com</p>
          <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 我的个人网站. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
