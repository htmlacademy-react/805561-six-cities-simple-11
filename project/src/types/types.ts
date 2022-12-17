export type TOffer = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: [string];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCities = {
  [propertyName: string]: TCity;
};

/*export type TReview = {
  id: number;
  avatar: string;
  userName: string;
  rating: number;
  text: string;
  time: string;
};*/

export type TReview ={
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};


