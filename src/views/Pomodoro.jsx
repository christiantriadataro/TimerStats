import AndroidHeader from "../components/Header/AndroidHeader.jsx";
import Header from "../components/Header/Header.jsx";
import SelectTask from "../components/SelectTask.jsx";
import Timer from "../components/Timer.jsx";
import PlayButton from "../components/PlayButton.jsx";
import Navbar from "../components/Header/Navbar.jsx";
import ButtonGroup from "../components/ButtonGroup.jsx";

const Pomodoro = () => {
    return (
        <div className="h-screen w-[370px] mx-auto bg-[#191A20]
            flex flex-col justify-between
        ">
            <AndroidHeader />
            <Header />
            <div className="h-screen">
                <div className="flex items-center justify-center px-5 py-3">
                    <SelectTask/>
                </div>
                <Timer/>
                <div className="flex justify-center items-center">
                    <PlayButton/>
                </div>
                <ButtonGroup />
            </div>
            <Navbar/>
        </div>
    )
}

export default Pomodoro