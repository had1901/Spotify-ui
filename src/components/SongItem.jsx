import React from 'react'
import { PlayerContext } from '../context/PlayerContext'

function SongItem({img,name,desc, id}) {
  const { playWidthId } = useContext(PlayerContext)
  return (
    <div onClick={() => playWidthId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff]'>
        <img className='rounded' src={img} alt='' />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem