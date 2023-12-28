export const getImage = (name: string) =>
  `http://localhost:3010/${name.toLowerCase().replace(" ", "-")}.jpg`;
