import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import {
  EmptyImage,
  CounterContainer,
  LeftPanel,
  SlowGun,
  LeftPanelInfo,
  RightPanel,
  CounterHeading,
  SubmitForm,
  SubmitButton,
  InputElement,
} from './styledComponent'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    inputList: [],
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()

    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }

    this.setState(prevState => ({
      inputList: [...prevState.inputList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInput = () => {
    const {inputList} = this.state

    return inputList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      inputList.map(eachItem => (
        <UserInput key={eachItem.id} inputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <CounterContainer>
        <LeftPanel>
          <SlowGun>Count the characters like a Boss</SlowGun>
          <LeftPanelInfo>{this.renderUserInput()}</LeftPanelInfo>
        </LeftPanel>
        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <SubmitForm onSubmit={this.onAddUserInput}>
            <InputElement
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the Characters here"
            />
            <SubmitButton type="submit">Add</SubmitButton>
          </SubmitForm>
        </RightPanel>
      </CounterContainer>
    )
  }
}
export default CharacterCounter
