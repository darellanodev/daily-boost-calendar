import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Day } from '.'

export default {
  title: 'Example/Day',
  component: Day,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Day>

const Template: StoryFn<typeof Day> = (args) => <Day {...args} />

export const Incomplete = Template.bind({})
Incomplete.args = {
  day: {
    completed: false,
  },
}

export const Completed = Template.bind({})
Completed.args = {
  task: {
    completed: true,
  },
}
