import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { TodoList } from '.'

export default {
  title: 'Example/TodoList',
  component: TodoList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof TodoList>

const Template: StoryFn<typeof TodoList> = (args: any) => <TodoList {...args} />

export const Incomplete = Template.bind({})
Incomplete.args = {
  title: 'Todo List 1',
}
