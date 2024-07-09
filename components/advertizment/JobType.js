import React from 'react'
import SelectBar from '../SelectioBar'
import {NextUIProvider} from "@nextui-org/react";

function JobType() {
  return (
    <NextUIProvider className='pl-5 mt-16 custom-gradient m-3 p-3'>
    <div className=' w-[95%] flex flex-col text-white justify-start gap-20 flex-wrap'>
    <div className='flex flex-col gap-2'>
        <p className='text-xl text-white font-bold'>Informationen</p>   
        <p className='flex flex-wrap text-sm '>Da Bewerber:innen oftmals nach bestimmten Stellentiteln suchen, ist der Stellentitel einer der Faktoren, der die Performance Ihrer Stellenanzeige beeinflusst. Wir empfehlen Ihnen unsere Vorschläge zu verwenden</p> 
    </div>
    <div className='flex flex-col gap-10 flex-wrap'>

        <fieldset className="border-[2px] w-[47%]  rounded-[12px] flex flex-wrap">
            <legend className=' text-basic font-semibold'><p>Ansprache</p></legend>
                <SelectBar data={data} placeholder="Select"/>
        </fieldset>
      
        <div className='grid grid-cols-2 gap-3'>
        <fieldset className="border-[2px] w-full  rounded-[4px]">
            <legend className='flex text-basic font-semibold gap-1'><p>Vorname</p><p className='text-[red]'>*</p></legend>
            <input type='text' placeholder='Vorname' className="border-[2px] border-[gray] outline-none bg-white text-black w-full h-[2.5rem] p-2"/>
        </fieldset>
        <fieldset className="border-[2px] w-full  rounded-[4px]">
            <legend className='flex text-basic font-semibold gap-1 '><p>Nachname</p><p className='text-[red]'>*</p></legend>
            <input type='text' placeholder='Nachname' className="border-[2px] border-[gray] outline-none bg-white text-black w-full h-[2.5rem] p-2"/>
        </fieldset>
        <fieldset className="border-[2px] w-full  rounded-[4px]">
            <legend className='flex text-basic font-semibold gap-1'><p>Stellentitel</p><p className='text-[red]'>*</p></legend>
            <input type='text' placeholder='' className="border-[2px] border-[gray] outline-none bg-white  text-black w-full h-[2.5rem] p-2"/>
        </fieldset><fieldset className="border-[2px] w-full  rounded-[4px]">
            <legend className='flex text-basic font-semibold gap-1'><p>Stellentitel</p><p className='text-[red]'>*</p></legend>
            <input type='text' placeholder='dsad' className="border-[2px] border-[gray] outline-none bg-white text-black w-full h-[2.5rem] p-2"/>
        </fieldset>
        </div>
    </div>

      
    </div>
    </NextUIProvider>
  )
}

export default JobType

const data=[
{label: "Herr", value: "CEO"},
  {label: "Frau", value: "MANGER"},
    {label: "Divers", value: "DEVLOPER"},

]