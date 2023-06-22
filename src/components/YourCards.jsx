import { useState } from "react";

import FIRE from "../assets/icons/fire.PNG";
import ARROW from "../assets/icons/arrow.PNG";

export default function AllCards({data})
{
    const [search , setSearch] = useState('');
    const [val ,setVal] = useState('');
    return(
        <section className='flex flex-col justify-center flex-wrap gap-x-6'>
            <div className="text-right">
                <input type="search" name="" id="" placeholder="Search Cards" onChange={(event) => setSearch(event.target.value)} className="outline-none border-2 border-solid px-2 rounded-md mt-2 mx-2"/>
                <select onChange={(event) => setVal(event.target.value)} className="outline-none border-2 border-solid rounded-md mr-4">
                    <option value="" selected={true}>select card type</option>
                    <option value="burner">Burner</option>
                    <option value="Subscription">Subscription</option>
                </select>
            </div>
            <div className="flex flex-row flex-wrap gap-x-6 justify-center">
                {data.filter(item => {
                    return ((search === "" && val === "") ? item.owner_id === 1 : item.name.toLowerCase().includes(search) && item.owner_id === 1 && item.card_type === val);
                }).map((item , idx) => (
                    <div key={idx} className='card my-4 w-2/5 rounded-md px-4 py-2 flex flex-col items-center'>
                        <div className='w-full flex flex-row justify-between'>
                            <section className='flex flex-col'>
                                <h2 key={idx} className="text-left">{item.name}</h2>
                                <p className='text-left text-gray-400'>
                                    {item.owner_name} . {item.budget_name}
                                </p>
                            </section>
                            
                            {(item.card_type === "burner")?<img className='image' src={FIRE} alt="fire-pic"/> : <img className='image' src={ARROW} alt="arrow-pic"/>}
                        </div>
                        <span className='flex flex-row justify-between pr-2 w-full'>
                            <p className='text-left w-fit border-2 border-solid border-gray-400 rounded-md uppercase text-xs px-2'>{item.card_type}</p>
                            <p className='w-fit'>{(item.card_type === "burner")?`Expires : ${item.expiry}`:`limit : ${item.limit} ${item.available_to_spend.currency}`}</p>
                        </span>
                        <div className="w-full bg-red-400 rounded-full h-2.5 mx-4 my-2">
                            <div className={`bg-green-600 h-2.5 rounded-full bar`} style={{width:Math.ceil(((item.spent.value)/item.available_to_spend.value) * 100)}}></div>
                        </div>
                        <section className='flex flex-row justify-between w-full'>
                            <span>&#128994; Spent</span>
                            <span>{item.spent.value} {item.spent.currency}</span>
                        </section>
                        <section className='flex flex-row justify-between w-full'>
                            <span>&#128308; Balance</span>
                            <span>{item.available_to_spend.value} {item.available_to_spend.currency}</span>
                        </section>
                    </div>
                ))}
            </div>
        </section>
    )
}