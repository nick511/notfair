import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object } from '@storybook/addon-knobs'

import CarGallary from 'components/Car/CarGallary'
import CarDetail from 'components/Car/CarDetail'

const images = [
  'http://cdn-prod.prod.fair.engineering/vehicle-images/0640_032_png/MY2016/10846/10846_cc0640_032_BS.png',
  'https://content.homenetiol.com/2001593/2112019/640x480/28ed530709334ec58855b2a2fbf3df3b.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/21010f808ea144fea0d73441c2593a6d.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/4eb8ef65ed5d4b4a9dc3b7c81cf78b24.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/d8565261a3544f07a56897c602152a60.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/ebf7b28a6d5545bdab204200f1c655c3.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/ca2df8b0532543269a3807e08f3cd2f4.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/ae54d1a9caf84f5b9a99819335b124f9.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/bd8c3a219a1a40ae9d0f34416b72cd06.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/a42226cc586f4e6486a34337f3b86cc1.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/b45d421d054f4c4da90669a20f029bd5.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/48458b96bb0b4ba28d8f9be7c0e9af71.jpg',
  'https://content.homenetiol.com/2001593/2112019/640x480/2c3bd441b6f54d5f9358e3fb4e164397.jpg',
]
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
  isFavorite: true,
}
const favoriteCarAction = () => {}

storiesOf('Car Detail', module)
  .addWithJSX('CarGallary', () => {
    return <CarGallary images={images} />
  })
  .addWithJSX('CarDetail', () => {
    let getNewCar = () => {
      return { ...car, isFavorite: boolean('isFavorite', true) }
    }
    return <CarDetail car={getNewCar()} favoriteCarAction={favoriteCarAction} />
  })
