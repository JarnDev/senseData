import styled  from 'styled-components'
import { NavLink  } from 'react-router-dom'

export const Navbar = styled.div`
    position:absolute;
    left: calc(50% - 150px);
    width:300px;
    height:50px;
    color:black;
    padding: 5px;
    display: flex;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #ccc;
    position:relative;
    margin-bottom:20px;
`;


export const Link = styled(NavLink)`
    color:black;
    text-decoration:none;
    display:flex;
    align-items:center;
    margin: 0 20px;
    user-select: none;
    transition: all .3s;
    &.${'selected'}{
        font-weight:bolder;
        border-top: 3px solid red;
    }
    &:hover{
        font-size:20px;
    }
`;

export const Links = styled.div`
    display:flex;
    height:100%;
`;

export const ExtLink = styled.a`
    color:black;
    text-decoration:none;
    display:flex;
    align-items:center;
    margin: 0 10px;
    user-select: none;
    svg{
        transition: all .3s;
        font-size:25px;
        &:hover{
            font-size:40px;
        }
    }
`;