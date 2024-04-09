import LogoIcon from "../icons/LogoIcon.jsx";
import NotificationIcon from "../icons/NotificationIcon.jsx";

const Header = () => {
    return (
        <div className="flex justify-between items-center px-5 py-4">
            <LogoIcon />
            <div className="text-2xl font-['Rubik-Medium']">Attentionify</div>
            <NotificationIcon />
        </div>
    )
}

export default Header