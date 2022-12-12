type TOffer = {
  id: string;
  mark?: boolean;
  image: string;
  alt: string;
  price: number;
  name: string;
  type: string;
  city: string;
  lat: number;
  lng: number;
}

type TCity = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

type TReview = {
  id: number;
  avatar: string;
  userName: string;
  rating: number;
  text: string;
  time: string;
};


export type {TOffer, TCity, TReview};
