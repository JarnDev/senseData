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
    &.${'selected'}{
        font-weight:bolder;
        color:${props => props.theme.pageColor};
        border-top: 3px solid red;
    }
`;


export const Exit = styled.span`
    color:#A5ACB5;
    text-decoration:none;
    display:flex;
    align-items:center;
    margin: 0 10px;
    user-select: none;
    &:hover{
        cursor:pointer;
    }
`;

export const Links = styled.div`
    display:flex;
    height:100%;
`;

