import {useState} from "react";

const PomodoroIcon = ({isActive}) => {
    return (
        isActive ?
            (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM11 10V5H9V12H15V10H11Z"
                    fill="#9B51E0"/>
            </svg>) : (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="group-active:fill-[#9B51E0]"
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 10H15V12H9V5H11V10Z"
                      fill="#E1E1E6"/>
            </svg>)
    )
}

export default PomodoroIcon