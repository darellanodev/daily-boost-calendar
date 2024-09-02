import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { BrainList } from '.'

export default {
  title: 'Example/BrainList',
  component: BrainList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof BrainList>

const Template: StoryFn<typeof BrainList> = (args: any) => (
  <BrainList {...args} />
)

export const Incomplete = Template.bind({})
Incomplete.args = {
  title: 'Todo List 1',
}
