import styled from 'styled-components'


export const Container = styled.div`
    >h3{
        text-align:center;
        margin-bottom:5px;
    }
`;

export const Waiting = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height: 100vh;
    justify-content:center;
    align-items:center;
    span{
        font-size:20px;
        border-top: 1px solid purple;
        padding: 10px 0 0 0;
    }
`;


export const Prev = styled.span`
    position:absolute;
    top:55px;
    left:calc(50% - 200px);
    width:50px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:25px;
    transition: all 0.2s;
    &:hover{
        font-size:50px;
        cursor:pointer;
    };
    transform: scale(1, 2);
    text{
    }
    
`;
export const Next = styled.span`
    position:absolute;
    top:55px;
    right:calc(50% - 200px);
    width:50px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:25px;
    transition: all 0.2s;
    &:hover{
        font-size:50px;
        cursor:pointer;
    }
    transform: scale(1, 2);
`;

export const Goto = styled.input`
    border:none;
    border-bottom: 1px solid black;
    width:40px;
    text-align:center;
`;