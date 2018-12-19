import React from 'react'
import { shallow } from 'enzyme'

import { CarDetailPage } from '../CarDetailPage'

describe('<CarDetailPage />', () => {
  let wrapper = null
  const match = {
    params: {
      vin: '19XFC2F59GE2276732016',
    },
  }
  const car = {
    id: '19XFC2F59GE2276732016',
    make: 'Honda',
    mileage: 35292,
    model: 'Civic Sedan',
    image_location_list: [],
  }
  const failed = false
  const actions = {
    fetchCar: jest.fn(),
    favoriteCar: jest.fn(),
  }

  beforeEach(() => {
    wrapper = shallow(
      <CarDetailPage
        match={match}
        car={car}
        failed={failed}
        actions={actions}
      />,
    )
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
