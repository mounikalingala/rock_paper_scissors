import styled from 'styled-components'

export const GameBgContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
`
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1140px;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 10px;
  margin: 15px;
`
export const NavHeading = styled.h1`
  color: #ffffff;
  padding: 0px;
  margin: 5px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 100px;
  width: 120px;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    height: 70px;
    width: 60px;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  padding: 0px;
  margin: 5px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const Score = styled.p`
  color: #223a5f;
  padding: 0px;
  margin: 5px;
  font-weight: bold;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const GameButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
  width: 300px;
`
export const GameImageButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const GameImage = styled.img`
  width: 225;
  @media screen and (max-width: 768) {
    width: 120px;
  }
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const YouAndOpponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`
export const ResultGameImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultImageBelongsTo = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
`
export const ResultGameImage = styled.img`
  width: 225px;
  @media screen and (max-width: 768px) {
    width: 120px;
  }
`
export const ResultScore = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
`
export const PlayAgainButton = styled.button`
  width: 40px;
  background-color: #ffffff;
  border: none;
  color: #000000;
  border-radius: 5px;
`
