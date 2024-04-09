import NavbarIcon from "./NavbarIcon.jsx";
import PomodoroIcon from "../icons/PomodoroIcon.jsx";
import ManageIcon from "../icons/ManageIcon.jsx";
import CalendarIcon from "../icons/CalendarIcon.jsx";
import ReportIcon from "../icons/ReportIcon.jsx";
import SettingsIcon from "../icons/SettingsIcon.jsx";
import {useState} from "react";

const Navbar = () => {

    const [isActiveIndex, setIsActiveIndex] = useState(1);

    return (
        <div className="py-4 px-6 flex items-center justify-between border border-gray-700">
            <NavbarIcon icon={<PomodoroIcon isActive={true} />} label="Pomodoro" />
            <NavbarIcon icon={<ManageIcon isActive={true} />} label="Manage" />
            <NavbarIcon icon={<CalendarIcon isActive={true} />} label="Calendar" />
            <NavbarIcon icon={<ReportIcon isActive={true} />} label="Report" />
            <NavbarIcon icon={<SettingsIcon isActive={true} />} label="Settings" />
        </div>
    )
}

export default Navbar