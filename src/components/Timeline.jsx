export default function Timeline(props){
  return (
    <>
      <div className="mx-auto my-10">
        <ol class="relative border-l border-[#75D076] dark:border-gray-700">
        {props.data.map((d,index)=>{
          return(
          <li key={index} class={`mb-10 ml-4 w-auto}`} >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <p className={`mb-1 text-sm font-normal leading-none text-[#75D076] dark:text-gray-500 `}>{d.tanggal}</p>
              <h3 className={`text-lg font-bold text-white dark:text-white`}>{d.judul}</h3>
              
          </li>
          )})}        
        </ol>
      </div>
    </>
  )
}
