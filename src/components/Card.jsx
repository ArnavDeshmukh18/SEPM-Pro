import React from 'react'

const Card = ({title,calories,image,ingredients}) => {
  return (
    <div className='bg-cardColor p-10 w-[900px] text-center my-8 mx-auto items-center'>
        <div >
			<h1 className='font-semibold text-[35px] text-primary'>{title}</h1>
            <div className='bg-white h-1 my-4' ></div>
			<ol className='font-poppins '>
				{ingredients.map(ingredient=>(
					<li >{ingredient.text}</li>
				))}
			</ol>
			
<p className='font-poppins font-semibold text-[25px]'>Calories : {calories}</p>

			<img  src={image} alt="" className='mx-auto'/>

		</div>


    </div>
  )
}

export default Card