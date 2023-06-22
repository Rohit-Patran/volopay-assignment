import GRID from "../assets/icons/grid.png";
import LIST from "../assets/icons/list.png";
import BlockedCards from "./BlockedCards";
import AllCards from "./AllCards";
import YourCards from "./YourCards";
import { useState } from "react";
import "./css/Cards.css"

export default function Cards({data}){
    
    let [view , setView] = useState("all");
    return(
        <div>
            <div className='flex flex-row justify-between px-4 py-2'>
                <section className='flex flex-row gap-x-4'>
                    <button className='focus:font-bold' onClick={() => setView("your")}>Your</button>
                    <button className='focus:font-bold' onClick={() => setView("all")}>All</button>
                    <button className='focus:font-bold' onClick={() => setView("blocked")}>Blocked</button>
                </section>

                <section className='flex flex-row gap-x-2'>
                    <img src={GRID} alt="grid-pic" className='grid-pic cursor-pointer'/>
                    <img src={LIST} alt="list-pic" className='list-pic cursor-pointer'/>
                </section>
            </div>
            <hr className="block mx-auto mx-4"/>
            {(view === "blocked") ? <BlockedCards data={data}/> : (view === "your") ? <YourCards data={data}/> : <AllCards data={data}/>}
            
        </div>
    );
};