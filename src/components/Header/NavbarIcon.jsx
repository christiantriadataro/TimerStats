import Pomodoro from "../../views/Pomodoro.jsx";
import PomodoroIcon from "../icons/PomodoroIcon.jsx";
import {useState} from 'react';
const NavbarIcon = ({icon, label}) => {
    const [isActive, setActive] = useState(false);
    const clickedIcon = () => {
        isActive ? setActive(false) : setActive(true)
    }

    return (
        <button onClick={clickedIcon} className="group flex flex-col items-center gap-1
         ">
            {icon}
            <div className={`text-[8px] ${ isActive ? "text-[#9B51E0] font-['Rubik-Bold']" : "text-[#E1E1E6] font-['Rubik-Regular']"}` }
            >{label}</div>
        </button>
    )
}

export default NavbarIcon