import { Grid } from "@nextui-org/react";
import React, { useState } from "react";
import { CompetitionData } from "./CompetitionData";

export default function CompetitionCarrousel(compe){
    const [current,setCurrent] = useState(0)
    const length = compe.compe.length

    const prevCompe = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextCompe = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <>
        <section className="carrousel h-full p-16">
            
            <div className="mx-auto relative">
                {CompetitionData.map((competition,index)=>{
                    return (
                        <div className={index === current ? 'compe active' : 'compe'} key={index}>
                            {index === current && 
                                <div className="content  bg-[#000] flex justify-center m-20 rounded-[50px] shadow-[-13px_4px_35px_rgba(84, 111, 221, 0.4)] p-6">
                                    <div className="my-auto">
                                        <img src={competition.image} alt={competition.title} />
                                    </div>
                                    <div className="py-20 px-10 w-1/2">
                                        <h2 className="text-white text-4xl text-bold text-center">{competition.title}</h2>
                                        <p className="text-white text-base text-center">{competition.data}</p>
                                    </div>
                                </div>
                            }
                        </div>
                        
                    )
                })}
                <div className="absolute inset-0 flex">
                    <div className="flex justify-start item-center w-1/2 my-auto ml-8">
                    <img className="w-[50px] h-[50px]" onClick={prevCompe} src="angle-left-solid.svg"/>
                    </div>
                    <div className="flex justify-end item-center w-1/2 my-auto mr-8">
                    <img className="w-[50px] h-[50px]" onClick={nextCompe} src="angle-right-solid.svg"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}