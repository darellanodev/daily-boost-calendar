import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { MiniCalendar } from '.'

export default {
  title: 'Example/MiniCalendar',
  component: MiniCalendar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof MiniCalendar>

const Template: StoryFn<typeof MiniCalendar> = (args) => <MiniCalendar {...args} />

export const Normal = Template.bind({})
Normal.args = {
  miniCalendar: {
    id: 2,
    title: "test"
  },
}
