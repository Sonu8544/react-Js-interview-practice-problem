import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'

const Routing = () => {
    return (
        <>
            <h1>React Router</h1>
            <BrowserRouter >
                <ul>
                    <li>
                        <Link to='/' > Home </Link>
                    </li>
                    <li>
                        <Link to='contact' > Contact </Link>
                    </li>

                    <li>
                        <Link to='about' > About</Link>
                    </li>
                </ul>
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Routing