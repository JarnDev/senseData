import React from 'react'

import { StyledBadge, BadgeDiv } from './style'

export default function Badge({ values }){
    return (
      <BadgeDiv>
        {values.map((value, idx) => {
          return (
            <StyledBadge key={idx} onClick={() => alert(`Pode ser implementada pagina para: ${value}`)}>
              {value}
            </StyledBadge>
          );
        })}
      </BadgeDiv>
    );
  };