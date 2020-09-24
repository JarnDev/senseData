import React from 'react'
import Badge from '../components/badge'

export default [
    {
        Header: "People",
        columns:[
            {
                Header: 'NOME', 
                accessor:'name', 
            },
            {
                Header: 'ALTURA', 
                accessor:'height', 
            },
            {
                Header: 'PELE', 
                accessor:'skin_color', 
            },
            {
                Header: 'CABELO', 
                accessor:'hair_color', 
            },
            {
                Header: 'OLHOS', 
                accessor:'eye_color', 
            },
            {
                Header: 'PESO', 
                accessor:'mass',
            },
            {
                Header: 'GÊNERO', 
                accessor:'gender',
            },
            {
                Header: 'NASCIMENTO', 
                accessor:'birth_year',
            },
            {
                Header: 'PALENTA NATAL', 
                accessor:'homeworld',
            },
            {
                Header: 'ESPECIE', 
                accessor:'species',
                Cell:({ cell: { value } }) => <Badge values={value} />,
            },
            {
                Header: 'VEICULOS', 
                accessor:'vehicles',
                Cell:({ cell: { value } }) => <Badge values={value} />,
            },
            {
                Header: 'STARSHIPS',
                accessor:'starships',
                Cell:({ cell: { value } }) => <Badge values={value} />,
            },
            {
                Header: 'FILMES', 
                accessor:'films',
                Cell:({ cell: { value } }) => <Badge values={value} />,
            },
        ]
    }
]