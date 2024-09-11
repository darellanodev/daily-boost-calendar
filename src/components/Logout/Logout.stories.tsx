import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Logout } from '.'

export default {
  title: 'Logout',
  component: Logout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Logout>

const Template: StoryFn<typeof Logout> = (args) => <Logout {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
