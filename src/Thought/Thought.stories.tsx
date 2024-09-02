import { Meta, StoryFn } from '@storybook/react'

import { Thought } from '.'

export default {
  title: 'Example/Thought',
  component: Thought,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Thought>

const Template: StoryFn<typeof Thought> = (args) => <Thought {...args} />

export const Normal = Template.bind({})
Normal.args = {
  thought: {
    id: 1,
    title: 'This is a normal thought',
  },
}
