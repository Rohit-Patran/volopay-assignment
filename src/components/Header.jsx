import CAMERA from "../assets/icons/videoCamera.png";
import "./css/Header.css";

export default function Header() 
{
  return (
    <div className="flex flex-row gap-x-4 py-2 pr-2 flex flex-row justify-between">
      <section className="flex flex-row gap-x-4 px-4">
        <h3 className="font-bold">Virtual cards</h3>
        <code className="bg-gray-100 text-blue-500 px-2 rounded-md flex flex-row cursor-pointer gap-x-2 items-center">
            <img src={CAMERA} alt="video-camera-pic"/>
            <span>Learn more</span>
        </code>
      </section>
        
        <button className="virtual px-2 rounded-md py-1 text-sm">&#10133; Virtual card</button>
    </div>
  );
};