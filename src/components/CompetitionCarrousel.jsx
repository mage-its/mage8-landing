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

            <div className="relative">
                {CompetitionData.map((competition,index)=>{
                    return (
                        <div className={index === current ? 'compe active' : 'compe'} key={index}>
                            {index === current && 
                                    <div className="content p-20 rounded-[50px]">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#546FDD] to-[#66E4AB] blur-xl rounded-[50px] opacity-75"></div>
                                            <Grid.Container gap={1} direction='row' justify="center" className="relative bg-black rounded-[50px]">
                                                <Grid md={6} className="flex justify-center my-auto mx-auto">
                                                    <img src={competition.image} alt={competition.title} />
                                                </Grid>
                                                <Grid md={6} className="flex justify-center py-20 px-10">
                                                    <Grid.Container direction="column">
                                                    <h2 className="text-white text-4xl text-bold text-center my-2">{competition.title}</h2>
                                                    <p className="text-white text-base text-center my-2">{competition.data}</p>
                                                    <button className="my-2 text-white bg-[#A3D180] rounded-full p-3 w-auto text-xl">Lihat Selengkapnya</button>
                                                    </Grid.Container>
                                                </Grid>
                                            </Grid.Container>
                                        </div>
                                    </div>
                            }
                        </div>
                        )
                })}
                <div className="absolute inset-0 flex">
                    <div className="flex justify-start item-center w-1/2 my-auto ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={prevCompe}  className="fill-white w-[50px] h-[50px]" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>
                    </div>
                    <div className="flex justify-end item-center w-1/2 my-auto mr-3">
                    <svg onClick={nextCompe} className="fill-white w-[50px] h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                    </div>
                    
                </div>
            </div>
        </>
    )
}