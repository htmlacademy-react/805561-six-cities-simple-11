type TOffer = {
  id: string;
  mark?: boolean;
  image: string;
  alt: string;
  price: number;
  name: string;
  type: string;
  lat: number;
  lng: number;
}

type TCity = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type {TOffer, TCity};
