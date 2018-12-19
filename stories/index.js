import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import CarListItem from 'components/CarList/CarListItem'

// Todo: Fix style problem: webpack css module

storiesOf('CarListItem', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addWithJSX('CarListItem', () => {
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
    const favoriteCarAction = () => {}

    return <CarListItem car={car} favoriteCarAction={favoriteCarAction} />
  })
