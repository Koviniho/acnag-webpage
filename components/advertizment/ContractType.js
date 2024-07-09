import React from 'react'
import SelectBar from '../SelectioBar'
import DoubleSidedSlider from './DoubleSidedSlider'

function ContractType() {
  return (
    <div className='flex flex-col w-[95%] flex-wrap gap-10 mt-16 text-white custom-gradient p-3'>
        <div className='flex flex-col gap-3'>
            <p className='font-bold  text-lg flex-wrap'>Versicherung</p>
            <p className='font-light  text-sm flex-wrap'>Geben Sie hier die Art des Vertrags den Sie für diese Stelle anbieten und die Arbeitsbelastung an.</p>
        </div>      
        <div>
            <fieldset className='border-[2px] h-auto rounded-lg w-[47%]'>
                <legend className='font-semibold text-sm '>Vertragsart</legend>
                <SelectBar placeholder={"Select"} data={data}/>
            </fieldset>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-xl font-bold'>Selbstbehalt *</p>
            <DoubleSidedSlider/>
        </div>

    </div>

  )
}

export default ContractType

const data=[
{label: "Haftpflichtversicherung", value: "parmanent employ"},
  {label: "Teilkasko", value: "contract"},
    {label: "Vollkasko", value: "internship"},
    {label: "Keine Versicherung", value: "freelance"},

]
