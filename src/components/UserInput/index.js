import {UserData, UserItem} from './styledComponent'

const UserInput = props => {
  const {inputDetails} = props
  const {userEnteredText, textLength, id} = inputDetails

  return (
    <UserItem>
      <UserData>
        {userEnteredText} : {textLength} : {id}
      </UserData>
    </UserItem>
  )
}
export default UserInput
