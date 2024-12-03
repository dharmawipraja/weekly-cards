export const getWeekDates = () => {
  const today = new Date();
  const startOfWeek = today.getDate() - today.getDay(); // Get the start of the week (Sunday)
  const weekDates = [];
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today.setDate(startOfWeek + i));
    const formattedDate = `${daysOfWeek[i]} ${date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}`;
    weekDates.push(formattedDate);
  }
  
  return weekDates;
}
