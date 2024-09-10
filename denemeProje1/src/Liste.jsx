import React from 'react'

function Liste({list}) {
    const {id,title,desc,price,link,img}=list
  return (
    <div className='list'>
        <div>
        <img src={img} width={230} height={100}></img>
            <h2>{title} {id}</h2>
            <p>{desc}</p>
            <p className='list-price'>Price: {price} ₺</p>
            <p className='list-link'><a href={link}>Tıklayın</a> </p>

        </div>
    </div>
  )
}

export default Liste