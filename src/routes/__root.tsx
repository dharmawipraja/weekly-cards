import { Button, Flex, Text } from '@radix-ui/themes'
import { createRootRoute } from '@tanstack/react-router'
import CardComponent from '../components/Card'
import { mappingCardData } from '../utils/formatUtils'
import type { Card } from '../types'
import Filter from '../components/Filter'
import { getWeekDates } from '../utils/dateUtils'
import { useState } from 'react'
import { GENDER } from '../constants'

export const Route = createRootRoute({
  loader: async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const { results } = await res.json()
    const cardData = results.slice(0, 14); // Only take 14 elements because we need 2 card per day in one week

    return { cardData }
  },
  component: () => <RootScreen />,
})

function RootScreen() {
  const { cardData } = Route.useLoaderData();
  const dates = getWeekDates();
  const mappedData = mappingCardData(cardData);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const isResetDisabled = !selectedDate && !selectedGender

  const resetFilter = () => {
    setSelectedDate('');
    setSelectedGender('');
  }

  return (
    <Flex direction="column" gap="8" className='p-5'>
      <Flex direction='row' gap='2'>
        <Filter options={dates} placeholder='Filter by date' selectedValue={selectedDate} setSelectedValue={setSelectedDate} />
        <Filter options={GENDER} placeholder='Filter by gender' selectedValue={selectedGender} setSelectedValue={setSelectedGender} />
        <Button disabled={isResetDisabled} onClick={resetFilter}>Reset</Button>
      </Flex>
      {mappedData.map(({ date, card }) => {
        const shouldShowDate= !selectedDate || selectedDate === date;

        return (
          shouldShowDate && <Flex key={date} direction="column" gap="2" align='center' justify='center'>
            <Text size='4' weight='bold' >{date}</Text>
            <Flex key={date} className='flex flex-col md:flex-row' gap="5">
              {card.map(({
                id,
                image,
                name,
                origin,
                gender,
                species
              }: Card) => (
                <CardComponent
                  key={id}
                  filter={selectedGender}
                  id={id}
                  date={date}
                  imageUri={image}
                  title={name}
                  description={origin.name}
                  gender={gender}
                  linkText={species}
                />
              ))}
            </Flex>
          </Flex>
        )
      })}
    </Flex>
  )
}