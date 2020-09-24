import styled from 'styled-components';

export const StyledTable = styled.table.attrs(props => ({
   
}))`
    border: 1px solid #ededed;
    border-spacing:0;
    border-radius:5px;
    tr:last-child{
        td{
            border-bottom:0;
        }
    }

    td:hover{
        transition: all .5s;
        background:#eee;
    }

    th, td{
        margin: 0;
        padding: 0.3rem 0.3rem 0.4rem 0.3rem;
        border-bottom: 1px solid #ededed;
        border-right: 1px solid #ededed;
        position: relative;
        text-align:center;
        max-width:200px;
    }
    
    th:last-child, td:last-child{
        border-right: 0;
    }
    
    tr:nth-child(even) {
        background-color: #fafafa;
    }
    
    th::before {
        position: absolute;
        right: 6px;
        top: calc(100% - 8px);
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
    }

    th {
        font-size:12px;
        &.${'sort-asc'}{
            &::before{
                border-bottom: 5px solid #22543d;
            }
        }
        &.${'sort-desc'}{
            &::before{
                border-top: 5px solid #22543d;
            }
        }
    }

`;

  
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding:10px;
`;

export const Search = styled.input`
    padding: 10px;
    margin: 5px 5px 5px 0;
    border:none;
    border-bottom: 1px solid #ddd;
    box-shadow: none;
    width: 100%;
    font-size:10px;
`;
