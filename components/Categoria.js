import Image from 'next/image';
import React from 'react'

const Categoria = ({ categoria }) => {
    const { nombre, icono, id } = categoria;

  return (
    <button 
        type='button'
        className='flex items-center gap-4 w-full border p-5 text-2xl font-bold hover:cursor-pointer hover:bg-amber-500'
    >
        <Image 
            width={70}
            height={70}
            src={`/assets/img/icono_${icono}.svg`}
            alt='Imagen Icono'
        />
        {nombre}
    </button>
  )
}

export default Categoria