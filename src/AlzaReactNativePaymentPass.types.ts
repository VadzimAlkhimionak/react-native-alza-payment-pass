import { ViewProps } from "react-native";

export type IOSButtonStyle = "black" | "blackOutline";

export type AlzaReactNativePaymentPassViewProps = {
  iosButtonStyle?: IOSButtonStyle;
  onAddButtonPress?: () => void;
} & ViewProps;

export enum CardNetwork {
  Amex = 1,
  Discover = 2,
  MasterCard = 3,
  Visa = 4,
}

export enum TokenProvider {
  Amex = 2,
  MasterCard = 3,
  Visa = 4,
  Discover = 5,
}

export type UserAddress = {
  name: string;
  address1: string;
  locality: string;
  administrativeArea: string;
  countryCode: string;
  postalCode: string;
  phoneNumber: string;
};

export type AddCardToGooglePayOptions = {
  opc: string;
  cardNetwork: CardNetwork;
  tokenProvider: TokenProvider;
  displayName: string;
  lastDigits: string;
  userAddress: UserAddress;
};
