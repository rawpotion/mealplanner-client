import React, { FC } from 'react'
import Button from '@components/ui/Button'

export default {
  title: 'Button',
  component: Button,
}

export const Basic: FC = () => (
  <Button>
    <p>Some button</p>
  </Button>
)
