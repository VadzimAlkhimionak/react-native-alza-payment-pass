import { ViewProps } from "react-native";

export type IOSButtonStyle = "black" | "blackOutline";

export type AlzaReactNativePaymentPassViewProps = {
  iosButtonStyle?: IOSButtonStyle;
  onAddButtonPress?: () => void;
} & ViewProps;
