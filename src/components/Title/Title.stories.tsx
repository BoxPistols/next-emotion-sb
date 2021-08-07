import { css } from '@emotion/core'
import { Story, ComponentMeta } from '@storybook/react'
import { Title,baseStyle2,baseStyle } from './Title.component'


export default {
    title: 'Atomic Design/Atoms/Title',
    component: Title,
    content: "",
    design: ""
} as ComponentMeta<typeof Title>

const Template: Story<typeof Title> = (args) => <Title {...args} />

export const Title_Basic = Template.bind({})
Title_Basic.args = {
    content: 'Title',
    design: "baseStyle"
}
