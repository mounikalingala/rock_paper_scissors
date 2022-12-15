import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  PopupContainer,
  PopupImage,
  PopupModal,
  CloseButton,
} from './styledComponents'

const GameRules = () => (
  <PopupContainer>
    <Popup
      module
      trigger={
        <button className="rules-button" type="button">
          Rules
        </button>
      }
      position="top center"
    >
      {close => (
        <PopupModal>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine size="26" />
          </CloseButton>
          <PopupImage
            className="rules-image"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
            alt="rules"
          />
        </PopupModal>
      )}
    </Popup>
  </PopupContainer>
)

export default GameRules
