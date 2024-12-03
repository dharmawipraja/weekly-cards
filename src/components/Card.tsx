import { Text, Box, Card, Badge } from '@radix-ui/themes';
import { ArrowTopRightIcon, CheckIcon, PlusIcon } from '@radix-ui/react-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '../utils/styleUtils';
import { getItem, removeItem, saveItem } from '../utils/storageUtils';

type Props = {
  id: string;
  date: string;
  imageUri: string;
  linkText: string;
  title: string;
  description: string;
  gender: string;
  filter: string;
};

const CardComponent: React.FC<Props> = ({ id, date, imageUri, linkText, title, description, gender, filter }) => {
  const [selected, setSelected] = useState(false);
  const shouldShowCard = !filter || filter === gender.toLowerCase();

  useEffect(() => {
    const result = getItem(date);

    if (result === id) setSelected(true);
  }, []);

  const handleClick = useCallback(() => {
    setSelected((prev) => {
      const currentState = !prev;
      const result = getItem(date);

      if (currentState) {
        if (result) {
          alert(`Can't choose two card on the same date, remove the selected first`);

          return prev;
        }

        saveItem(date, id);
      } else {
        removeItem(date);
      }

      return currentState;
    });
  }, []);

  return (
    shouldShowCard && (
      <Box className="w-[280px] md:w-[400px]">
        <Card asChild className={cn(selected ? 'border border-red-700' : '')}>
          <div>
            <div className="flex justify-center">
              <img src={imageUri} alt={title} />
            </div>
            <div className="flex flex-row items-center py-3">
              <Text as="div" size="2" weight="bold" className="text-blue-600">
                {linkText}
              </Text>
              <ArrowTopRightIcon color="blue" />
            </div>
            <Text as="div" size="4" weight="bold">
              {title}
            </Text>
            <Text as="div" size="2">
              {description}
            </Text>
            <div className="flex flex-row items-center justify-between mt-10">
              <Badge color="green">{gender}</Badge>
              <div
                className={cn(
                  'rounded-full p-1 items-center justify-center',
                  selected ? 'bg-green-700' : 'bg-gray-300'
                )}
                onClick={handleClick}
              >
                {selected ? <CheckIcon color="white" /> : <PlusIcon color="black" />}
              </div>
            </div>
          </div>
        </Card>
      </Box>
    )
  );
};

export default CardComponent;
