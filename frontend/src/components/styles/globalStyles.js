import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font-size:14px;
    }

    a{
        text-decoration:none;
    }

    ul{
        list-style:none;
    }

    button{
        cursor: pointer;
    }
`;