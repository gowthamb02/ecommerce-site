import React from 'react'
import data from './data/data'
import './style.css'

function Home() {
  return (
    <div>
        {data.sections.map((section)=>(
            <div key={section.sectionId} className='section'>
                <h3>{section.sectionName}</h3>
                <div className='products'>
                    {section.products.map((product)=>(
                        <div key={product.id} className='products-list'>
                            <img src={product.image} alt={product.name} />
                            <h4>{product.name}</h4>
                            <p>Price: ₹{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Home;