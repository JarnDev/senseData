import React from 'react'
import {Navbar, Links, Link, ExtLink } from './style.js'
import { AiFillGithub } from 'react-icons/ai'

export default function Header() {

    return (
        <Navbar>
            <Links>
                <Link exact activeClassName="selected" to='/'>People</Link>
                <Link activeClassName="selected" to='/starships'>Starships</Link>
                <ExtLink rel="noopener noreferrer" target="_blank" href='https://github.com/JarnDev/senseData'><AiFillGithub/></ExtLink>
            </Links>
        </Navbar>
    )
}
