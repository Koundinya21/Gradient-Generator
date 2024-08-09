// Write your code here
import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  Description,
  GradientDirectionList,
  ColorPickersDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  CustomInput,
  ColorValue,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientsDirection: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onGenerate = () => {
    const {activeGradientsDirection, toColor, fromColor} = this.state
    this.setState({
      gradientValue: `to ${activeGradientsDirection}, ${fromColor}, ${toColor}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  clickOnTheDirectionItem = direction => {
    this.setState({activeGradientsDirection: direction})
  }

  render() {
    const {
      activeGradientsDirection,
      toColor,
      fromColor,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                GradientDirectionDetails={eachItem}
                clickOnTheDirectionItem={this.clickOnTheDirectionItem}
                isActive={activeGradientsDirection === eachItem.value}
              />
            ))}
          </GradientDirectionList>
          <ColorPickersDescription>Pick the Colors</ColorPickersDescription>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColor}</ColorValue>
              <CustomInput
                type="color"
                value={fromColor}
                onChange={this.onChangeFromColor}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColor}</ColorValue>
              <CustomInput
                type="color"
                value={toColor}
                onChange={this.onChangeToColor}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
