import "./theme.css"
import { FaRegMoon } from 'react-icons/fa'
import { LiaSun } from 'react-icons/lia'
import { useState } from "react"

function Theme() {

  const [isDark, setIsDark] = useState(false)
  const body = document.body

  // Change theme
  const changeTheme = (themeIcon: React.MouseEvent<HTMLButtonElement>) => {
    const btnID = themeIcon.currentTarget.id

    if (btnID === "btn-moon") {
      body?.classList.add("light")
      setIsDark(true)
    }
    else {
      body?.classList.remove("light")
      setIsDark(false)
    }
  }
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