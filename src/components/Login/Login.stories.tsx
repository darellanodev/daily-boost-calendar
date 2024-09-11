import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Login } from '.'

export default {
  title: 'Example/Header',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Login>

const Template: StoryFn<typeof Login> = (args) => <Login {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {

}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
