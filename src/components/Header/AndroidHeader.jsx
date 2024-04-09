import SignalIcon from "../icons/SignalIcon.jsx";
import WifiIcon from "../icons/WifiIcon.jsx";
import BatteryIcon from "../icons/BatteryIcon.jsx";

const AndroidHeader = () => {
    return (
        <div className="flex justify-between items-center px-5 py-3 text-[#E1E1E6]">
            <div className="font-bold size text-xs font-['Roboto-Mono-Bold']">9:41</div>
            <div className="flex space-x-1">
                <SignalIcon />
                <WifiIcon />
                <BatteryIcon />
            </div>
        </div>
    )
}
export default AndroidHeader