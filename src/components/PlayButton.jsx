import PlayIcon from "./icons/PlayIcon.jsx";

const PlayButton = () => {
    return (
        <button className=" bg-[#9B51E0]
            px-7 py-4 rounded-3xl
        ">
            <div className="flex justify-evenly items-center
            w-[174px] h-8
            ">
                <PlayIcon />
                <div className="font-['Rubik-Regular'] text-sm font-normal">Start to Focus</div>
            </div>
        </button>
    )
}

export default PlayButton