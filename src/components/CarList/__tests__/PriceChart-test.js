import React from 'react'
import { shallow } from 'enzyme'

import PriceChart from '../PriceChart'

describe('<PriceChart />', () => {
  let wrapper = null
  const props = {
    realPrice: 16999,
    minPrice: 12680,
    listPrice: 17999,
    fairMaxPrice: 17750,
  }

  beforeEach(() => {
    wrapper = shallow(<PriceChart {...props} />)
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders prices', () => {
    expect(wrapper.find('.minPrice .price').text()).toEqual(
      '$' + props.minPrice.toLocaleString(),
    )
    expect(wrapper.find('.realPrice .price').text()).toEqual(
      '$' + props.realPrice.toLocaleString(),
    )
  })

  it('produces correct percentage', () => {
    const { minPrice, listPrice, fairMaxPrice } = props
    const fairMaxPercent =
      ((fairMaxPrice - minPrice) / (listPrice - minPrice)) * 100
    expect(wrapper.find('.fairMax').prop('style').left).toEqual(
      fairMaxPercent + '%',
    )
  })
})
