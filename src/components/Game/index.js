import {Component} from 'react'
import GameRules from '../GameRules'

import {
  GameBgContainer,
  NavbarContainer,
  NavHeading,
  ScoreContainer,
  ScoreHeading,
  Score,
  GameButtonsContainer,
  GameImageButton,
  GameImage,
  GameResultContainer,
  YouAndOpponent,
  ResultImageBelongsTo,
  ResultGameImage,
  ResultGameImageContainer,
  ResultScore,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testid: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testid: 'paperButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testid: 'scissorsButton',
  },
]

class Game extends Component {
  state = {
    score: 0,
    isGameRunning: true,
    text: 'YOU WON',
    newArray: [],
  }

  verifyResult = (yourChoice, opponentChoice) => {
    if (yourChoice.id === 'ROCK') {
      switch (opponentChoice.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (yourChoice.id === 'PAPER') {
      switch (opponentChoice.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponentChoice.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state

    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const yourChoice = choicesList.filter(each => each.id === id)
    const result = this.verifyResult(yourChoice[0], opponentChoice)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      isGameRunning: false,
      text: result,
      newArray: [yourChoice[0], opponentChoice],
    })
  }

  restartGame = () => {
    this.setState({isGameRunning: true})
  }

  renderGameResult = () => {
    const {newArray, text} = this.state

    return (
      <GameResultContainer>
        <YouAndOpponent>
          <ResultGameImageContainer>
            <ResultImageBelongsTo>You</ResultImageBelongsTo>
            <ResultGameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultGameImageContainer>
          <ResultGameImageContainer>
            <ResultImageBelongsTo>Opponent</ResultImageBelongsTo>
            <ResultGameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultGameImageContainer>
        </YouAndOpponent>
        <ResultScore>{text}</ResultScore>
        <div>
          <PlayAgainButton type="button" onClick={this.restartGame}>
            PLAY AGAIN
          </PlayAgainButton>
        </div>
      </GameResultContainer>
    )
  }

  renderGameStarted = () => (
    <GameButtonsContainer>
      <GameImageButton
        type="button"
        onClick={() => this.checkResult(choicesList[0].id)}
        data-testid="rockButton"
      >
        <GameImage
          src={choicesList[0].imageUrl}
          key={choicesList[0].id}
          alt={choicesList[0].id}
        />
      </GameImageButton>
      <GameImageButton
        type="button"
        onClick={() => this.checkResult(choicesList[1].id)}
        data-testid="scissorsButton"
      >
        <GameImage
          src={choicesList[1].imageUrl}
          key={choicesList[1].id}
          alt={choicesList[1].id}
        />
      </GameImageButton>
      <GameImageButton
        type="button"
        onClick={() => this.checkResult(choicesList[2].id)}
        data-testid="paperButton"
      >
        <GameImage
          src={choicesList[2].imageUrl}
          key={choicesList[2].id}
          alt={choicesList[2].id}
        />
      </GameImageButton>
    </GameButtonsContainer>
  )

  render() {
    const {score, isGameRunning} = this.state

    return (
      <GameBgContainer>
        <NavbarContainer>
          <div>
            <NavHeading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </NavHeading>
          </div>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreContainer>
        </NavbarContainer>
        {isGameRunning ? this.renderGameStarted() : this.renderGameResult()}

        <GameRules />
      </GameBgContainer>
    )
  }
}

export default Game
