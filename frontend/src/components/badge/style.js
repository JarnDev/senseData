import styled from 'styled-components'

export const StyledBadge = styled.span`
    background-color: #4a26db;
    color: #ffffff;
    margin: 2px;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 9px;
    font-weight: bold;
    text-transform: uppercase;
    text-align:center;
    &:hover{
        cursor:pointer;
        background:black;
    }

`;

export const BadgeDiv = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
`;