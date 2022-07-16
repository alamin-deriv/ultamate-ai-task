import React from 'react';
import styled from 'styled-components';
import Empty from '../../assets/emptyState.png';

const StyledDiv = styled.div`
 text-align: center;
 width: 36%;
 margin: 100px auto;
  & h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #011F4B;
  }
  & h4 {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #7E8299;
      margin-top: 16px;
  }

  & img {
    margin-top: 30px;
  }
`

export const EmptyState = () => {
    return (
        <StyledDiv>

          <h3>No records</h3>
          <h4>You have no records with this name, search for a new one.</h4>
<img src={Empty} alt="empty state" height="170px"/>
        </StyledDiv>
    )
}

