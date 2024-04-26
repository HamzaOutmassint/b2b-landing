import { Input } from "../ui/input"
import { Label } from "../ui/label"
import Image, { StaticImageData } from "next/image"

interface modelProps {
    toggleModal: () => void
}

const Model : React.FC<modelProps> = ({ toggleModal }) => {
    return (
        <div className="h-screen w-full absolute top-0 left-0 flex justify-center items-center">
            <div className="absolute bg-black opacity-50 h-screen w-full" onClick={toggleModal}></div>
            <div className="bg-white w-[200px] opacity-100 z-10">
                hamza
            </div>
        </div>
    )
}

export default Model
