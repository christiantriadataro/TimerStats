import Hours from "./Timer/Hours.jsx";
import Minutes from "./Timer/Minutes.jsx";
import Task from "./Timer/Task.jsx";

const Timer = () => {
    return (
        <>
            <div className="flex mt-12 justify-center">
                <Hours/>
                <div className="font-['Roboto-Mono-Bold'] text-7xl ">:</div>
                <Minutes/>
            </div>
            <Task />
        </>

    )
}

export default Timer