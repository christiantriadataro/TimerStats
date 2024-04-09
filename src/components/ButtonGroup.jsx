import SingleButtonText from "./SingleButtonText.jsx";
import InformationIcon from "./icons/InformationIcon.jsx";
import TimerIcon from "./icons/TimerIcon.jsx";
import MusicIcon from "./icons/MusicIcon.jsx";

const ButtonGroup = () => {
    return (
        <div className="mt-12 flex items-center justify-around px-10 py-6">
            <SingleButtonText icon={<InformationIcon />} label="Strict Mode" />
            <SingleButtonText icon={<TimerIcon />} label="Timer Mode" />
            <SingleButtonText icon={<MusicIcon />} label="White Noise" />
        </div>
    )
}
export default ButtonGroup