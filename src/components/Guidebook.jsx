import React from "react";

export default function Guidebook() {
    return (
        <>
        <div class="flex py-5 flex-col justify-center items-center bg-[#16181A] w-2/3 h-auto my-[100px] mx-auto rounded-xl">
            <p class="my-2 text-center text-white text-4xl">Masih Bingung?</p>
            <p class="my-2 text-center text-white text-4xl">Unduh Guidebooknya Disini!</p>
            <button class="  ">
                <div class="hover:shadow-[#75D076] shadow-lg flex flex-col text-2xl justify-start w-[300px] h-[50px] my-2 px-1 py-1 bg-[#A0E880] rounded-full">
                    <h5>Download Guidebook</h5>
                </div>
            </button>
        </div>
        </>
    );
  }