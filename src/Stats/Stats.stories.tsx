import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Stats } from '.'

export default {
  title: 'Example/Stats',
  component: Stats,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Stats>

const Template: StoryFn<typeof Stats> = (args) => <Stats {...args} />

export const Normal = Template.bind({})
Normal.args = {}
