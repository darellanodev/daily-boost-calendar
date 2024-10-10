import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { within, userEvent } from '@storybook/test'
import { Menu } from '.'

export default {
  title: 'Example/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Menu>

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})

LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const loginButton = await canvas.getByRole('button', { name: /Log in/i })
  await userEvent.click(loginButton)
}
