import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  height: 100vh; 
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;  
  

  img {
    width: 548px;
  }
  
  button {
    height: 50px;
    width: 200px;
    border-radius: 20px;
    background-color: ${colors.primary};
  }
  
  .container {
    display: grid;
    place-items: center; 
    height: 100%;
  }
`
