import { getWeekDates } from './dateUtils';
import type { Card } from '../types';

export const mappingCardData = (cardData: Card[]) => {
  const weekDates = getWeekDates();

  return weekDates.map((date, index) => {
    // Get two cards per date by slicing the `cardData` array
    const cards = cardData.slice(index * 2, index * 2 + 2);

    return {
      date,
      card: cards,
    };
  });
};
