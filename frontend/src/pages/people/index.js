import React, { useEffect, useMemo, useState } from 'react'
import Header from '../../components/header'
import Table from '../../components/table'
import api, { CancelToken } from '../../services/api'
import columns from '../../config/people_table'


import { Waiting, Prev, Next, Container, Goto } from './style'
import { Ball } from "react-loading-io";

export default function People({history}) {
    const [peopleResponse, setPeopleResponse] = useState(null)
    const [page, setPage] = useState(1)
    const apiCancel = useMemo(() => CancelToken.source(),[])
    const maxPage = useMemo( () =>{
        if(peopleResponse){
            return Math.ceil(Number(peopleResponse.count) / 10)
        }else{
            return null
        }
    },[peopleResponse])

    useEffect(() => {
        api.get(`/?page=${page}`,{cancelToken:apiCancel.token}).then(result => {
            setPeopleResponse(result.data)
        })
        return () => {
            history.listen((location, action) => {
                apiCancel.cancel('Operação Cancelada pelo usuário')
            })
        }
    }, [page, apiCancel, history])


    function handleGotoSubmit(e){
        const key = e.key
        const value = e.target.value
        if(key==='Enter' && value >= 0 && value <= maxPage){
            setPage(value)
            setPeopleResponse(null)
        }
    };


    function handleChangePage(e){
        if(peopleResponse){
            const element = e.target.id
            const { next , previous} = peopleResponse
            if(element === 'next' && next){
                setPage(page+1)
                setPeopleResponse(null)
            }
            if(element === 'prev' && previous){
                setPage(page-1)
                setPeopleResponse(null)
            }
        }
    }


    return (
        <Container>
            <Header/>
            {maxPage && <h3>{`Página`} <Goto onKeyUp={handleGotoSubmit} defaultValue={page}/> {`de ${maxPage}`}</h3>}
            <div style={{display:'flex'}}>
                <Prev id='prev' onClick={handleChangePage}>{'<'}</Prev>
                {peopleResponse?
                    <Table columns={columns} data={peopleResponse.results}>
                        
                    </Table>
                    :
                    <Waiting>
                        <Ball size={200} color='red' speed='.6'/>
                        <span>Loading People...</span>
                    </Waiting>
                }
                <Next id='next' onClick={handleChangePage}>{'>'}</Next>
            </div>
        </Container>
    )
}
