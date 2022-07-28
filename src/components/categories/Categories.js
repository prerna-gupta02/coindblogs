import React, { useEffect, useState } from 'react'
import './Categories.css'
import categoryData from '../../category.json'

export default function Categories() {
    const [categoriesData, setCategoriesData] = useState(categoryData);
    const [activeC, setActiveC] = useState(true);
    const [activeCName, setActiveCName] = useState('Music');

    // const getAllContentForCategory = categoryData.filter(obj => {
    //     return obj.category === activeCName;
    // })

    const activeCategory = (e) => {
        setActiveCName(e.currentTarget.id)
    }

    useEffect(() => {
        setCategoriesData(categoryData.filter(obj => {
            return obj.category === activeCName;
        }))
    }, [activeCName])
  return (
    <div className='categories-section'>
        <div className='categories-bar'>
            <p className={'Music' === activeCName ? 'active' : ''} onClick={activeCategory} id='Music'>Music</p>
            <p className={'Movies' === activeCName ? 'active' : ''} onClick={activeCategory} id='Movies'>Movies</p>
            <p className={'Series' === activeCName ? 'active' : ''} onClick={activeCategory} id='Series'>Series</p>
            <p className={'Videos' === activeCName ? 'active' : ''} onClick={activeCategory} id='Videos'>Videos</p>
        </div>
        <div className='category-content'>
            {
                categoriesData.map((obj, i) => (
                    <div>
                        <div className='gradient'></div>
                        <h4>{obj.heading}</h4>
                        <p>{obj.about}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
