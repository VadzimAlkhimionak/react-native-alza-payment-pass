import { StyleSheet, Text, View } from "react-native";

import { AlzaReactNativePaymentPassView } from "alza-react-native-payment-pass";

export default function App() {
  return (
    <AlzaReactNativePaymentPassView
      style={{ flex: 1, backgroundColor: "purple" }}
    />
  );
}
