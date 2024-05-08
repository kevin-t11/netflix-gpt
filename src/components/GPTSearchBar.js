import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/langConstants';


const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-slate-950 grid grid-cols-12 rounded-md shadow-md'>
            <input type="text" className='col-span-9 m-3 p-3 rounded-md' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='bg-red-500 col-span-3 p-1.5 m-3 text-white rounded-md'>
              {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar