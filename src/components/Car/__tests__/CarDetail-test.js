import React from 'react'
import { shallow } from 'enzyme'

import CarDetail from '../CarDetail'

describe('<CarDetail />', () => {
  let wrapper = null
  const car = {
    id: '19XFC2F59GE2276732016',
    make: 'Honda',
    mileage: 35292,
    model: 'Civic Sedan',
    model_year: '2016',
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
      <CarDetail car={car} favoriteCarAction={favoriteCarAction} />,
    )
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders car make, mileage and prices', () => {
    // make&model
    expect(wrapper.find('.make').text()).toEqual(
      `${car.model_year} ${car.make}`,
    )
    expect(wrapper.find('.model').text()).toEqual(`${car.model} ${car.trim}`)

    // mileage
    expect(wrapper.find('.mileage .number').text()).toEqual(
      car.mileage.toLocaleString(),
    )

    // prices
    expect(wrapper.find('.monthyPayment .price').text()).toEqual(
      '$' + car.product_financials[0].monthly_payment_cents / 100,
    )
    expect(wrapper.find('.startPayment .price').text()).toEqual(
      '$' + car.product_financials[0].start_fee_cents / 100,
    )
  })

  it('chages favorite icon style after click the icon', () => {
    const action = () => {
      wrapper.setProps({
        car: { ...car, isFavorite: true },
      })
    }
    wrapper = shallow(<CarDetail car={car} favoriteCarAction={action} />)

    // Should be gray
    expect(wrapper.find('.favorite').hasClass('favorited')).toEqual(false)

    // Should has color
    wrapper.find('.favorite').simulate('click')
    expect(wrapper.find('.favorite').hasClass('favorited')).toEqual(true)
  })
})
