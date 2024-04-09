import {useState} from "react";

const ManageIcon = ({isActive}) => {
    return (
        isActive ?
            (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM11 10V5H9V12H15V10H11Z"
                    fill="#9B51E0"/>
            </svg>) : (<svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    className="group-active:fill-[#9B51E0]"
                    d="M0 0.9918C0 0.44405 0.44495 0 0.9934 0H17.0066C17.5552 0 18 0.45531 18 0.9918V19.0082C18 19.556 17.5551 20 17.0066 20H0.9934C0.44476 20 0 19.5447 0 19.0082V0.9918ZM16 9V2H2V9H16ZM16 11H2V18H16V11ZM6 4H12V6H6V4ZM6 13H12V15H6V13Z"
                    fill="#E1E1E6"/>
            < /svg>)
    )
}

export default ManageIcon

