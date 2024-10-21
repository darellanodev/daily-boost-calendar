import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { CalendarNav } from '.'

export default {
  title: 'Example/Calendar',
  component: CalendarNav,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CalendarNav>

const Template: StoryFn<typeof CalendarNav> = (args: any) => (
  <CalendarNav {...args} />
)
