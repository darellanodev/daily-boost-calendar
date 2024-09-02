import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Task } from '.'

export default {
  title: 'Example/Task',
  component: Task,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Task>

const Template: StoryFn<typeof Task> = (args) => <Task {...args} />

export const Incomplete = Template.bind({})
Incomplete.args = {
  task: {
    id: 1,
    title: 'This is an incomplete task',
    completed: false,
  },
  onToggle: (taskId: number) => console.log(`Task ${taskId} toggled`), // Función de ejemplo para el toggle
}

export const Completed = Template.bind({})
Completed.args = {
  task: {
    id: 2,
    title: 'This is a completed task',
    completed: true,
  },
  onToggle: (taskId: number) => console.log(`Task ${taskId} toggled`), // Función de ejemplo para el toggle
}
