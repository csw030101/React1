import ChildComp from "./ChildComp"
import reactLogo from "../assets/react.svg"
import viteLogo from "../assets/vite.svg"

export default function ParentComp() {
    return (
        <>
            <ChildComp imageInfo={{src: reactLogo, alt: "React1"}} width={100} height={100}/>
            <ChildComp imageInfo={{src: viteLogo, alt: "React2"}} width={100} height={100}/>
        </>
    )
}