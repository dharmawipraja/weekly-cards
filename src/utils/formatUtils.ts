import { getWeekDates } from './dateUtils';
import type { Card } from '../types';

export const mappingCardData = (cardData: Card[]) => {
  const weekDates = getWeekDates();

  return [
    {
      date: weekDates[0],
      card: [cardData[0], cardData[1]],
    },
    {
      date: weekDates[1],
      card: [cardData[2], cardData[3]],
    },
    {
      date: weekDates[2],
      card: [cardData[4], cardData[5]],
    },
    {
      date: weekDates[3],
      card: [cardData[6], cardData[7]],
    },
    {
      date: weekDates[4],
      card: [cardData[8], cardData[9]],
    },
    {
      date: weekDates[5],
      card: [cardData[10], cardData[11]],
    },
    {
      date: weekDates[6],
      card: [cardData[12], cardData[13]],
    },
  ];
};
