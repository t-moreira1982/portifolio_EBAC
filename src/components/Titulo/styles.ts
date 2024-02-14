import styled from 'styled-components'

import { Props } from '.'

export const Titulo = styled.p<Props>`
  color: ${(props) => props.theme.corPincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
