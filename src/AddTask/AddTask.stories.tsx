import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { AddTask } from '.'

export default {
  title: 'Example/AddTask',
  component: AddTask,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AddTask>

const Template: StoryFn<typeof AddTask> = (args) => <AddTask {...args} />

export const Normal = Template.bind({})
Normal.args = {}
