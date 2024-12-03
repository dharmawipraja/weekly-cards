export const saveItem = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const getItem = (name: string) => {
  const result = localStorage.getItem(name);

  if (!result) return '';

  return JSON.parse(result);
};

export const removeItem = (name: string) => {
  localStorage.removeItem(name);
};
