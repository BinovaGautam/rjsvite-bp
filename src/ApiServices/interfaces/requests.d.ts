export interface PhoneAuthPayload {
  phone: string;
  referralCode?: string;
}

export interface OtpVerifyPayload {
  phone: string;
  otp: string;
}

export interface IEmailSignupPayload {
  email: string;
  password: string;
  referralCode?: string;
}

export interface IEmailLoginPayload {
  email: string;
  password: string;
}

export interface ISearchPayload {
  name: string;
  category?: string;
  location?: string; //name of the towns
}

export interface ISelectProvider {
  bppId: string;
  providerId: string;
  items: {
    productId: string;
    quantity: number;
    storeId: string;
  }[];
  gps: string;
  area_code: string;
}

export interface ISelectPayload {
  providers: ISelectProvider[];
}

export interface IPlacesAutocomplete {
  input: string;
  location?: string;
  type?: "geocode" | "address" | "establishment" | "(regions)" | "(cities)";
  key?: string;
  sessiontoken?: string;
}

export interface IGeocodePayload {
  lat: number;
  lng: number;
  placeId?: string;
}

export interface INewLinkPagePayload {
  website?: string;
  shop?: string;
  direction?: string;
  phone?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  google?: string;
  yelp?: string;
  tripadvisor?: string;
  trustpilot?: string;
  booking?: string;
  expedia?: string;
  hotels?: string;
  airbnb?: string;
  swiggy?: string;
  zomato?: string;
  amazon?: string;
  flipkart?: string;
  link?: string;
}

export interface IQrObject {
  id: string;
  base64Image: string;
  isEmpty: boolean;
  isActive: boolean;
  userId: number;
}

export interface Data {
    categoryId:string;
    categoryName:string;
    categoryPic:string;
  }

export interface Categories {
  selectValue: string | undefined;
  selectLabel: string | undefined;
  btnTitle ?: string ;
  setCategory: Dispatch<SetStateAction<string>>;
  openPage: Dispatch<SetStateAction<boolean>>;
  data: Data[];
  nameKey: string | undefined;
  valueKey: string | undefined;
}

export interface IContestEnteries {
  contestId ?: string;
  userId : string;
  exclusiveStartKey ?: string;
  videoId ?: string;
}