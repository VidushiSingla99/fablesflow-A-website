import React from 'react';
import { useState } from "react";
import {Link} from "react-router-dom";

const Sidebar = ({darkMode}) => {
    const [wid, setWid] = useState("col-2");
    const [click_num, setClick] = useState(0);
    const [visible, setVisible] = React.useState(true);

    const toggleSideNav = () => {
        if(click_num===0){
            setWid("col-1")
            setClick(1)
            setVisible(false)
        }
        else if(click_num===1){
            setWid("col-2")
            setClick(0)
            setVisible(true)
        }
   }
       return (
           <div className={wid}>
           <div className={darkMode ? 'left-navigation-dark d-flex flex-column px-4':'left-navigation d-flex flex-column px-4'}>
               <div className='d-flex justify-content-end'>
               <button className="toggle-button mt-3 px-3 ms-3" onClick={toggleSideNav}></button>
               </div>
                <Link className={darkMode ? 'nav-pointer-dark mt-3 p-1':'nav-pointer mt-3 p-1'} to="/About"><div className= {visible ? 'element-visible' : 'element-hidden'}>WHO ARE WE?</div></Link>
                <Link className={darkMode ? 'nav-pointer-dark mt-3 p-1':'nav-pointer mt-3 p-1'} to="/events"><div className= {visible ? 'element-visible' : 'element-hidden'}>EVENTS</div></Link>
                <Link className={darkMode ? 'nav-pointer-dark mt-3 p-1':'nav-pointer mt-3 p-1'} to="/StepOne"><div className= {visible ? 'element-visible' : 'element-hidden'}>DO WANT TO JOIN US?</div></Link>
                <Link className={darkMode ? 'nav-pointer-dark mt-3 p-1':'nav-pointer mt-3 p-1'} to="/Teams"><div className= {visible ? 'element-visible' : 'element-hidden'}>INFORMATION</div></Link>
           </div>
           </div>
       );
}
export default Sidebar;
