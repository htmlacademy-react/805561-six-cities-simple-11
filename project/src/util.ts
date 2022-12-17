export const convertRating = (rating:number) => {
  const widtth = `${Math.round(rating) * 20 }%`;
  return {width: widtth};
};


