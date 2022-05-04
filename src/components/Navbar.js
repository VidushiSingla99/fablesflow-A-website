import React from 'react';

const Navbar = ({setDarkMode, darkMode}) => {
    return <div className={darkMode ? 'app-header-dark' : 'app-header'}>
        <div className='py-2 d-flex justify-content-between'>
        <div className='heading px-3 mt-1 offset-lg-1'>fablesflow</div>
        <input className="toggle-switch" type="checkbox" id="switch"/><label htmlFor="switch" className="toggle-label mt-1" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}></label>
    </div>
    </div>;
}
export default Navbar;
