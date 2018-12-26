import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import CarList from 'components/CarList/CarList'
import CarListItem from 'components/CarList/CarListItem'
import PriceChart from 'components/CarList/PriceChart'

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
const cars = {
  allIds: ['19XFC2F59GE2276732016', '1C3CCCAB7GN1645942016'],
  byId: {
    '19XFC2F59GE2276732016': car,
    '1C3CCCAB7GN1645942016': {
      id: '1C3CCCAB7GN1645942016',
      make: 'Chrysler',
      mileage: 43038,
      model: '200',
      model_year: '2016',
      chrome_image_url:
        'http://cdn-prod.prod.fair.engineering/vehicle-images/0640_001_png/MY2016/10642/10642_cc0640_001_PRV.png',
      product_financials: [
        {
          id: 19884007,
          monthly_payment_cents: 28000,
          start_fee_cents: 90000,
        },
      ],
      trim: 'Limited',
      isFavorite: true,
    },
  },
}
const favoriteCarAction = () => {}
const fetchCars = () => {}

storiesOf('Car List', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addWithJSX('CarList', () => {
    return (
      <CarList
        cars={cars}
        hasMore={false}
        fetchCars={fetchCars}
        favoriteCarAction={favoriteCarAction}
      />
    )
  })
  .addWithJSX('CarListItem', () => {
    return <CarListItem car={car} favoriteCarAction={favoriteCarAction} />
  })
  .addWithJSX('PriceChart', () => {
    let minPrice = number('Min Price', 12680, {
      range: true,
      min: 5000,
      max: 20000,
    })
    let realPrice = number('Real Price', 16999, {
      range: true,
      min: 12680,
      max: 20000,
    })
    let listPrice = number('List Price', 17999, {
      range: true,
      min: 17999,
      max: 20000,
    })
    let fairMaxPrice = number('Fair Max Price', 17750, {
      range: true,
      min: 12680,
      max: 20000,
    })
    return (
      <PriceChart
        realPrice={realPrice}
        minPrice={minPrice}
        listPrice={listPrice}
        fairMaxPrice={fairMaxPrice}
      />
    )
  })
