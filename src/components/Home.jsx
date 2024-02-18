import React from 'react'
import Cards from './Cards'

const Home = () => {
    return (
        <div className='container'>

            <section className='section1'>
                <Cards/>
            </section>

            <section className="section2">
                <h2 className='stats'>Success: 0</h2>
                <h2 className='stats'>Timer: 60 segundos</h2>
                <h2 className='stats'>Movements: 0</h2>
        </section>
        </div>
    )
}

export default Home