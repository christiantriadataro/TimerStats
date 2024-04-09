
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../Animation/AnimatedProgressBarProvider.jsx";
const Task = () => {
    return (
        <div className="mt-4 flex justify-center items-center gap-2 mb-12">
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={100}
                duration={1.4}
                easingFunction={easeQuadInOut}
                repeat
            >
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                            className="w-6"
                            value={value}
                            strokeWidth={12}
                            /* This is important to include, because if you're fully managing the
                      animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({
                                pathTransition: value === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
                                pathColor: '#9B51E0'
                            })}
                        />
                    );
                }}
            </AnimatedProgressProvider>
            <div className="font-['Rubik-Regular'] font-normal text-sm">UI Design</div>
        </div>
    )
}

export default Task