import InformationIcon from "./icons/InformationIcon.jsx";

const SingleButtonText = (props) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            {props.icon}
            <div className="font-['Rubik-Regular'] text-[10px]">{props.label}</div>
        </div>
    )
}

export default SingleButtonText