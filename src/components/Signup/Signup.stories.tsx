import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Signup } from '.'

export default {
  title: 'Example/Header',
  component: Signup,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Signup>

const Template: StoryFn<typeof Signup> = (args) => <Signup {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
