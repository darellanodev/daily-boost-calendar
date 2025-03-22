import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { AlertInsecureData } from '.'

export default {
  title: 'Example/AlertInsecureData',
  component: AlertInsecureData,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof AlertInsecureData>

const Template: StoryFn<typeof AlertInsecureData> = (args) => (
  <AlertInsecureData {...args} />
)
