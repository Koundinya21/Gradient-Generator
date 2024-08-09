// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {GradientDirectionDetails, isActive, clickOnTheDirectionItem} = props
  const {displayText, value} = GradientDirectionDetails

  const onClickGradientDirectionItem = () => {
    clickOnTheDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickGradientDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
