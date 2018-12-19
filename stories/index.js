import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import CarListItem from 'components/CarList/CarListItem'

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

/*
storiesOf('Notification', module)
  .addWithJSX('Info type', () => (
    <Notification title='Complete all tasks' desc='You have 3 active tasks' type={TYPE_INFO} />
  ))
  .addWithJSX('Success type', () => (
    <Notification title='All tasks completed' desc='Well done!' type={TYPE_SUCCESS} />
  ))
  .addWithJSX('With progressbar', () => (
    <Notification title='Complete all tasks' desc='You have 3 active tasks' type={TYPE_INFO} progress={{max:7, value:3}} />
  ))

storiesOf('Tasks', module)
  .addWithJSX('Task list', () => {
    let tasks = [
      { id: 1, name: 'First Task', isCompleted: true },
      { id: 2, name: 'Second Task', isCompleted: false },
    ]

    let actions = {
      addTask: () => { },
      updateStatus: () => {},
      updateName: () => {},
    }
    return <Tasks tasks={tasks} actions={actions} />
  })
  .addWithJSX('Single task', () => {
    let task = { id: 1, name: 'First Task', isCompleted: true }
    let actions = {
      updateStatus: () => {},
      updateName: () => {},
    }
    return <Task id={task.id} name={task.name} isCompleted={task.isCompleted} actions={actions} />
  })
*/
