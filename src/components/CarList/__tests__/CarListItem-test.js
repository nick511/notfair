import React from 'react'
import { shallow } from 'enzyme'

import CarListItem from '../CarListItem'

describe('<CarListItem />', () => {
  let wrapper = null
  const car = {
    id: '19XFC2F59GE2276732016',
    make: 'Honda',
    mileage: 35292,
    model: 'Civic Sedan',
    model_year: '2016',
    chrome_image_url:
      'http://cdn-prod.prod.fair.engineering/vehicle-images/0640_001_png/MY2016/10846/10846_cc0640_001_BS.png',
    product_financials: [
      {
        id: 19882216,
        monthly_payment_cents: 29000,
        start_fee_cents: 90000,
      },
    ],
    trim: 'LX',
    isFavorite: false,
  }
  const favoriteCarAction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <CarListItem car={car} favoriteCarAction={favoriteCarAction} />,
    )
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders car image', () => {
    expect(wrapper.find('.image img').prop('src')).toEqual(car.chrome_image_url)
  })

  it('renders car name and price', () => {
    expect(wrapper.find('.info .name').text()).toEqual(
      `${car.model_year} ${car.make} ${car.model}`,
    )
    expect(wrapper.find('.info .price').text()).toEqual(
      '$' + car.product_financials[0].monthly_payment_cents / 100,
    )
  })

  it('chages favorite icon style after click the icon', () => {
    const action = () => {
      wrapper.setProps({
        car: { ...car, isFavorite: true },
      })
    }
    wrapper = shallow(<CarListItem car={car} favoriteCarAction={action} />)

    // Should be gray
    expect(wrapper.find('.favorite').hasClass('favorited')).toEqual(false)

    // Should has color
    const event = Object.assign(jest.fn(), { preventDefault: () => {} })
    wrapper.find('.favorite').simulate('click', event)
    expect(wrapper.find('.favorite').hasClass('favorited')).toEqual(true)
  })

  it('dont render payment info if these is no product_financials', () => {
    const testCar = { ...car, product_financials: null }
    wrapper = shallow(
      <CarListItem car={testCar} favoriteCarAction={favoriteCarAction} />,
    )

    expect(wrapper.find('.info .price')).toHaveLength(0)
    expect(wrapper.find('.info .price')).toHaveLength(0)
  })
})
