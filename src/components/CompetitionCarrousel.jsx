import { Grid } from "@nextui-org/react";
import React, { useState } from "react";
import { CompetitionData } from "./CompetitionData";

export default function CompetitionCarrousel(compe){
    const [current,setCurrent] = useState(0)
    const length = compe.compe.length
    console.log("test", compe.compe.length);

    const prevCompe = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextCompe = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <>
            <div className="relative">
                {CompetitionData.map((competition,index)=>{
                    return (
                        <div className={index === current ? 'compe active' : 'compe'} key={index}>
                            {index === current && 
                                <div className="px-20 py-10">
                                    <Grid.Container gap={1} direction='row' justify="center" className="content p-20 bg-[#000] rounded-[50px]">
                                        <Grid md={6} className="my-auto">
                                            <img src={competition.image} alt={competition.title} />
                                        </Grid>
                                        <Grid md={6}  className="py-20 px-10">
                                            <Grid.Container direction="column">
                                            <h2 className="text-white text-4xl text-bold text-center">{competition.title}</h2>
                                            <p className="text-white text-base text-center">{competition.data}</p>
                                            </Grid.Container>
                                            
                                        </Grid>
                                    </Grid.Container>
                                </div>     
                            }
                        </div>
                        )
                })}
                <div className="absolute inset-0 flex">
                    <div className="flex justify-start item-center w-1/2 my-auto ml-3">
                    <img className="w-[50px] h-[50px]" onClick={prevCompe} src="angle-left-solid.svg"/>
                    </div>
                    <div className="flex justify-end item-center w-1/2 my-auto mr-3">
                    <img className="w-[50px] h-[50px]" onClick={nextCompe} src="angle-right-solid.svg"/>
                    </div>
                </div>
            </div>
        </>
    )
}