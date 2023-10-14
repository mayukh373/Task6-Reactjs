import './App.css'
import { useEffect } from 'react'

import './components/style.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {

  const handleAnimationIntro = () => {
    const animation = document.getElementById("pic");
    const inner = document.getElementById("info");
    animation.classList.add("pic-animate-1");

    animation.addEventListener("animationiteration", () => {
      animation.classList.remove("pic-animate-1");
      animation.classList.add("pic-animate-2");
      inner.classList.remove("display-none");
      inner.classList.add("info-animate");
    })

    inner.addEventListener("animationend", () => {
      const icons = document.querySelector('.display-none');
      if (icons === null) {
        const main = document.querySelectorAll('.display-main-none');
        document.body.setAttribute('id','display');
        main.forEach(element => {
          element.classList.remove('display-main-none');
        })
        return;
      }
      icons.classList.remove("display-none");
      icons.classList.add("icons-animate");
    })
  }

  useEffect(() => {
    handleAnimationIntro();
  }, [])

  return (
    <div>
      <div className="display-main-none"><Navbar /></div>
      <div className="mb" id="Home"><Home /></div>
      <div className="mb display-main-none" id="About"><About /></div>
      <div className="mb display-main-none" id="Skills"><Skills /></div>
      <div className="display-main-none" id="Work"><Work /></div>
    </div>
  );
}

export default App;
