import React from "react";
import { useTable, useFilters, useSortBy, useAsyncDebounce } from "react-table";

import {Container, StyledTable, Search } from './style'

export default function Table({ columns, data }) {
  const filters = columns[0]['columns']

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useSortBy
  );

  const onChange = useAsyncDebounce((filtro, value) => {
    setFilter(filtro, value || undefined)
  },200);


  return (
    <Container>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
            <tr>
                {filters.map((column, idx) => 
                    <th key={idx}>
                        <Search
                            onChange={e => onChange(e.target.id, e.target.value)}
                            placeholder={`${column['Header']}`}
                            id={column['accessor']}
                        />
                    </th>
                )}
            </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </Container>
  );
}