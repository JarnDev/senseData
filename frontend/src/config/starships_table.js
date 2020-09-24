import React from 'react'
import Badge from '../components/badge'

export default [
    {
        Header: "Starships",
        columns:[
            {
                Header: 'PONTUAÇÃO', 
                accessor:'score', 
            },
            {
                Header: 'NOME', 
                accessor:'name', 
            },
            {
                Header: 'MODELO', 
                accessor:'model', 
            },
            {
                Header: 'CLASSE', 
                accessor:'starship_class', 
            },
            {
                Header: 'MONTADORA', 
                accessor:'manufacturer', 
            },
            {
                Header: 'PILOTOS', 
                accessor:'pilots',
                Cell:({ cell: { value } }) => <Badge values={value} />,
            },
            {
                Header: 'MAX. TRIPULAÇÃO', 
                accessor:'crew', 
            },
            {
                Header: 'LARGURA', 
                accessor:'length', 
            },
            {
                Header: 'PASSAGEIROS', 
                accessor:'passengers', 
            },
            {
                Header: 'CONSUMIVEIS', 
                accessor:'consumables', 
            },
            {
                Header: 'CAPACIDADE', 
                accessor:'cargo_capacity', 
            },
            {
                Header: 'MGLT', 
                accessor:'MGLT', 
            },
            {
                Header: 'CUSTO', 
                accessor:'cost_in_credits', 
            },
            {
                Header: 'HYPERDRIVE', 
                accessor:'hyperdrive_rating', 
            },
            {
                Header: 'VELOCIDADE ATM', 
                accessor:'max_atmosphering_speed', 
            },
            {
                Header: 'FILMES', 
                accessor:'films',
                Cell:({ cell: { value } }) => <Badge values={value} />,
            },
        ]
    }
]