import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Message } from '.'

export default {
  title: 'Example/Message',
  component: Message,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Message>

const Template: StoryFn<typeof Message> = (args) => <Message {...args} />
