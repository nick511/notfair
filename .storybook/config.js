import React from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'
import JSXAddon from 'storybook-addon-jsx'

/* Addons */
setAddon(JSXAddon)

/* Decorators */
addDecorator(story => <div style={{ margin: '20px' }}>{story()}</div>)
addDecorator(withKnobs)

/* Options */
setOptions({
  name: 'NotFair',
  url: 'https://github.com/nick511/notfair',
  addonPanelInRight: true,
})

function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module)
