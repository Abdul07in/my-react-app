import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const count = useAppSelector((state) => state.counter);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
      }`}
    >
      <div className='container'>
        {/* Logo and Brand */}
        <a className='navbar-brand d-flex align-items-center' href='#'>
          <img
            src='/vite.svg'
            alt='Logo'
            width='30'
            height='30'
            className='me-2'
          />
          <span>My React App</span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className='navbar-toggler'
          type='button'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#projects'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact Us
              </a>
            </li>
          </ul>

          {/* Right Side Items */}
          <div className='d-flex align-items-center'>
            {/* Notification Button */}
            <button className='btn btn-link position-relative me-3'>
              <i
                className={`bi bi-bell${isDarkMode ? '-fill' : ''} fs-5 ${
                  isDarkMode ? 'text-light' : 'text-dark'
                }`}
              ></i>
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                {count}
              </span>
            </button>

            {/* Dark Mode Toggle */}
            <div className='form-check form-switch me-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='darkModeSwitch'
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <label className='form-check-label' htmlFor='darkModeSwitch'>
                <i
                  className={`bi ${
                    isDarkMode ? 'bi-moon-fill' : 'bi-sun-fill'
                  }`}
                ></i>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
