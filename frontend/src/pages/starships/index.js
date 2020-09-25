import React, {useEffect, useState, useMemo } from 'react'
import Table from '../../components/table'
import api, { CancelToken } from '../../services/api'
import columns from '../../config/starships_table'

import { Waiting } from './style'
import { Ball } from "react-loading-io";
import Header from '../../components/header'

export default function Starships({history}) {
    const [starships, setStarships] = useState(null)
    const apiCancel = useMemo(() => CancelToken.source(), [])
    useEffect(() => {
        api.get('/ships',{cancelToken:apiCancel.token}).then(result => {
            setStarships(result.data.starships)
        })
        return () => {
            history.listen((location, action) => {
                apiCancel.cancel('Operação Cancelada pelo usuário')
            })
        }
    }, [apiCancel, history])
    return (
        <>
            <Header/>
            
            {starships?
                <Table columns={columns} data={starships}/>
                :
                <Waiting>
                    <Ball size={200} color='red' speed='.6'/>
                    <span>Loading Starships...</span>
                </Waiting>
            }
        </>
    )
}
