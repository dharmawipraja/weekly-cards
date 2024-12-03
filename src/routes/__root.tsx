import { Flex, Text } from '@radix-ui/themes'
import { createRootRoute } from '@tanstack/react-router'
import CardComponent from '../components/Card'
import { mappingCardData } from '../utils/formatUtils'
import type { Card } from '../types'

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
  const mappedData = mappingCardData(cardData);

  return (
    <Flex direction="column" gap="8" className='p-5'>
      {mappedData.map(({ date, card }) => (
        <Flex key={date} direction="column" gap="2" align='center' justify='center'>
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
      ))}
    </Flex>
  )
}