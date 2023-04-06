import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/router';
import useInfoModal from '@/hooks/useInfoModalStore';
import { BiChevronDown } from 'react-icons/bi';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({data}) => {

  const { openModal } =useInfoModal();

  const router = useRouter();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">

      <img className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-80 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]' src={data.thumbnailUrl} alt="Thumnail" />
      <div 
      className="
      opacity-0
      absolute
      top-0 
      transition
      duration-200
      z-10
      invisible
      sm:visible
      delay-300
      w-full
      scale-0
      group-hover:scale-110
      group-hover:-translate-y-[6vw]
      group-hover:translate-x-[2vw]
      group-hover:opacity-100
      ">
        <img className='cursor-pointer object-cover transition duration rounded-t-md w-full h-[12vw]' src={data.thumbnailUrl} alt="Thumnail" />
        <div className='
        z-10
        bg-zinc-800
        p-2
        lg:p-4
        absolute
        w-full
        transition
        shadow-md
        rounded-b-md

        '>
          <div className='flex flex-row items-center gap-3'>
            <div className='cursor-pointer w-6 h-6 lg:h-10 lg:w-10 bg-white rounded-full hover:bg-neutral-300 flex justify-center items-center' onClick={() => router.push(`/watch/${data?.id}`)}>

              <BsFillPlayFill size={30}/>

            </div>
            <FavoriteButton movieId={data?.id}/>
            <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <BiChevronDown className='text-white group-hover/item:text-neutral-300 ' size={30} onClick={()=> openModal(data?.id)}/>
            </div>

          </div>
          <p className='text-green-400 font-semibold mt-4'>{data.title}<span className="text-white pl-1" >{data.year}</span>
          </p>

          <div className='flex flex-row gap-2 mt-4 items-center'>
            <p className='text-white text-[10px] lg:text-sm'>{data.duration}</p>
          </div>
          <div className='flex flex-row gap-2 mt-4 items-center'>
            <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
          </div>

        </div>

      </div>


    </div>
  )

}

export default MovieCard;