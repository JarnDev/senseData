import React from 'react'
import {Navbar, Links, Link } from './style.js'


export default function Header() {

    return (
        <Navbar>
            <Links>
                <Link exact activeClassName="selected" to='/'>People</Link>
                <Link activeClassName="selected" to='/starships'>Starships</Link>
            </Links>
        </Navbar>
    )
}
