import { css } from '@emotion/core'
import * as React from 'react'

import { Styling } from '../../styles/types'

export const baseStyle = () => css`
    font-size: 3rem;
`
export  const baseStyle2 = () => css`
    font-size: 5rem;
`

interface TitleProps{
    content: string,
    styles?: Styling,
    design?: "baseStyle" | "baseStyle2"
}

export const Title = ({ content,  styles, design, ...props }: TitleProps) => {
    return (
        <div className={ "dummy"} {...props} css={design}>
            {content }
        </div>
    )
}
