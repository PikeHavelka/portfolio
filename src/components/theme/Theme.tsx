import "./theme.css"
import { FaRegMoon } from 'react-icons/fa'
import { LiaSun } from 'react-icons/lia'
import { useState, useEffect } from "react"

function Theme() {
  // Theme mode detect on your device
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  // UState - Change class on btn (hide/show)
  const [isDark, setIsDark] = useState(false)
  const body = document.body

  // Change theme when press btn
  const changeTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.id === "btn-moon") {
      body?.setAttribute("data-theme", "dark")
      setIsDark(true)
      localStorage.setItem('data-theme', 'dark')
    } else {
      body?.setAttribute("data-theme", "light")
      setIsDark(false)
      localStorage.setItem('data-theme', 'light')
    }
  }
  /**********************************************/
  // Remember theme
  useEffect(() => {
    if (localStorage.getItem("data-theme") === "dark") {
      body?.setAttribute("data-theme", "dark")
      setIsDark(true)
    } else if (localStorage.getItem("data-theme") === "light") {
      body?.setAttribute("data-theme", "light")
      setIsDark(false)
    } else if (prefersDarkMode.matches === true) {
      body?.setAttribute("data-theme", "dark")
      setIsDark(true)
    } else {
      return
    }
  }, [])
  /**********************************************/

  return (
    <div className="theme-icons container">
      <button
        onClick={(e) => changeTheme(e)}
        id="btn-moon"
        className={`${isDark ? "hide" : "show"}`}
      >
        <FaRegMoon className="moon-icon" />
      </button>

      <button
        onClick={(e) => changeTheme(e)}
        id="btn-sun"
        className={`${isDark ? "show" : "hide"}`}
      >
        <LiaSun className="sun-icon" />
      </button>
    </div>
  )
}

export default Theme