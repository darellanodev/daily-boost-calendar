import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { FirstRun } from '.'

export default {
  title: 'Example/Header',
  component: FirstRun,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof FirstRun>

const Template: StoryFn<typeof FirstRun> = (args) => <FirstRun {...args} />
