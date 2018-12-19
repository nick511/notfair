import React from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx'

setOptions({
  name: 'NotFair',
  url: 'http://',
  addonPanelInRight: true,
})

setAddon(JSXAddon)

addDecorator(story => (
  <div className='content'>
    {story()}
  </div>
))

function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module);
