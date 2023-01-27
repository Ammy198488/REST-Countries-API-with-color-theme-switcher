import React, {useState} from 'react'
import { Icon } from '@iconify/react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const changeTheme = () => {
        setDarkMode(prevTheme => !prevTheme)
    };

  return (
    <header className= {darkMode ? 'dark-theme' : 'light-theme'}>
      <div className='container d-flex justify-content-between align-items-center pt-3'>
        <h1>Where in the world</h1>
          <div className="toggler align-items-center" onClick={changeTheme}>
              {darkMode ? (
                  <div className="toggleDark">
                      <p className='fw-semibold'><Icon icon="ph:sun-dim" />Light Mode</p>
                    </div>
                  ) : (
                  <div>
                    <p className='fw-semibold'><Icon icon="ph:moon-fill" />Dark Mode</p>
                  </div>
              )}
          </div>
      </div>
    </header>
  )
}

export default Header
