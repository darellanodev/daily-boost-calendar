import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Calendar } from '.'

export default {
  title: 'Example/Calendar',
  component: Calendar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Calendar>

const Template: StoryFn<typeof Calendar> = (args: any) => <Calendar {...args} />

export const Incomplete = Template.bind({})
Incomplete.args = {
  title: 'Todo List 1',
}
