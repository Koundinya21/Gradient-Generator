// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  // display:flex;
  // justify-content:center;
  // align-items:center;
  width: 49%;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 24px;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  border: none;
  margin-top: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
