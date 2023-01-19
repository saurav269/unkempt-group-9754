import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useSearchParams} from 'react-router-dom'


const FilterProduct = () => {

  const[searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.getAll("category");

  const [category, setCategory] = useState(initialCategory || []);


  const handleFilter=(e)=>{
     let newCategory = [...category]

     if(newCategory.includes(e.target.value)){

      newCategory.splice(newCategory.indexOf(e.target.value),1)
     }else{
      newCategory.push(e.target.value)
     }
     setCategory(newCategory)
  }
  // console.log(category)

  useEffect(() =>{

    const params = {}
    params.category = category
    setSearchParams(params)
  },[category, setSearchParams])


  return (
    <div>
      <div className='mainn__filteer'>
        
        <div className='filter_p'>
          <p className='p__div'>Filter Products</p>
        </div>
        <div className='category_p'>
          <p className='p__div'>Categories</p>
        </div>

      <div className='product__checkbox'>

        <div className='check__boxes'>
          <input
          onChange={handleFilter}
          checked={category.includes("Biscuits")}
           type='checkbox'
           value='Biscuits'
           />
           <label>Biscuits</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Dairy")}
           type='checkbox'
           value='Dairy'
           />
           <label>Dairy</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Dal")}
           type='checkbox'
           value='Dal'
           />
           <label>Dal</label>
        </div>
        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Fruits")}
           type='checkbox'
           value='Fruits'
           />
           <label>Fruits</label>
        </div>
        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Ketchup")}
           type='checkbox'
           value='Ketchup'
           />
           <label>Ketchup</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Oil")}
           type='checkbox'
           value='Oil'
           />
           <label>Oil</label>
        </div>
        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Rice")}
           type='checkbox'
           value='Rice'
           />
           <label>Rice</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Salt")}
           type='checkbox'
           value='Salt'
           />
           <label>Salt</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Soap")}
           type='checkbox'
           value='Soap'
           />
           <label>Soap</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Vegetables")}
           type='checkbox'
           value='Vegetables'
           />
           <label>Vegetables</label>
        </div>
      </div>
      </div>  
    </div>
  )
}

export default FilterProduct