import React from "react";

export default function TitleSubbab(props){
    console.log("prop", props);
    return (
      <>
        <div className=" w-1/2 border-b-2 border-[#75D076]">
          <h2 className="text-2xl text-white">{props.subbab}</h2>
        </div>
      </>
    );
}