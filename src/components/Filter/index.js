import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Input,
  Button,
  Grid,

} from "flexibull-meme";




const StyledDiv = styled.div`
display: flex;
width: "95%";
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
      margin-top: 10px;
  }

  & .filterButtons {
       display: flex;
       justify-content: right;
       width: 68%;
       padding: 50px 0 0 30px;
       margin-left: 50px;
  }
`

export const Filter = ({multiIntents, search}) => {



    return (
        <StyledDiv>
        <div>
          <h3>Pre trained intents</h3>
          <h4>Review and select intents to use on your AI bot.</h4>
        </div>
        <div className="filterButtons">
                <Grid default="minmax(auto, 400px) auto max-content">
                  <Input
                    name="search"
                    data-testid="search-input"
                    placeholder="search intents name"
                    onKeyUp={(e) => search(e.target.value)}
                  />
                  <Box />
                  <Box>
                    
                    <Button data-testid="next-button" disabled={!multiIntents.length}>
                      Next Page
                    </Button>
                  </Box>
                </Grid>
              </div>
        </StyledDiv>
    )
}

