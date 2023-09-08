import "./theme.css"
import { FaRegMoon } from 'react-icons/fa'
import { LiaSun } from 'react-icons/lia'

function Theme() {
  return (
    <div className="theme-icons container">
      <button>
        <FaRegMoon className="moon-icon"/>
      </button>

      <button>
        <LiaSun className="sun-icon"/>
      </button>
    </div>
  )
}

export default Theme