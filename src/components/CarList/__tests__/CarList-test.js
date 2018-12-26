import React from 'react'
import { shallow } from 'enzyme'

import CarList from '../CarList'

describe('<CarList />', () => {
  let wrapper = null
  const cars = {
    allIds: ['19XFC2F59GE2276732016'],
    byId: {
      '19XFC2F59GE2276732016': {
        id: '19XFC2F59GE2276732016',
        make: 'Honda',
        mileage: 35292,
        model: 'Civic Sedan',
      },
    },
  }
  const hasMore = false
  const fetchCars = jest.fn()
  const favoriteCarAction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <CarList
        cars={cars}
        hasMore={hasMore}
        fetchCars={fetchCars}
        favoriteCarAction={favoriteCarAction}
      />,
    )
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders CarListItem', () => {
    expect(wrapper.find('CarListItem')).toHaveLength(1)
  })
})
