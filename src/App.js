import React, {useState, useLayoutEffect} from 'react'
import './App.css';
import articles  from './data.js'
import Article from './Article'

const loadTheme = ()=> {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(loadTheme())

  console.log("test")
  const handleChange = ()=> {
    setTheme(prev=> {
      if(prev==='light-theme') {
        setTheme('dark-theme')
      } else {
        setTheme('light-theme')
      }
    })
  }

  useLayoutEffect(()=> {
    document.documentElement.className = theme
    localStorage.setItem('theme',theme)
  },[theme])

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>over-reacted</h1>
          <button className="btn" onClick={handleChange}>toggle</button>
        </div>
      </nav>
      <div className="articles">
        {articles.map(article=> {
          return <Article key={article.id} {...article}/>
        })}
      </div>
    </main>
  );
}

export default App;
