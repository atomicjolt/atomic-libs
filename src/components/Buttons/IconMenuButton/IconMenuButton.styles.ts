import styled from 'styled-components'
import { BaseStyledButton } from '../Buttons.styles'
import { StyledIconButton, iconButtonColorsCss } from '../IconButton/IconButton.styles'

export const StyledIconMenuButton = styled.div`
    & > ${BaseStyledButton} {
        ${iconButtonColorsCss}

        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
    }

    ${StyledIconButton} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`