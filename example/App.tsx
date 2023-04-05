import {
  asyncCanAddPaymentPass,
  addPassToGoogle,
  CardNetwork,
  TokenProvider,
} from "alza-react-native-payment-pass";
import { useCallback, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function App() {
  const [canAdd, setCanAdd] = useState("");

  useEffect(() => {
    (async () => {
      const c = await asyncCanAddPaymentPass("ref");
      console.log("asyncCanAddPaymentPass", c);
      setCanAdd(c);
    })();
  }, []);

  const onPress = useCallback(async () => {
    console.log("add button pressed");

    const result = await addPassToGoogle({
      opc: "",
      cardNetwork: CardNetwork.MasterCard,
      tokenProvider: TokenProvider.MasterCard,
      displayName: "David Meadows",
      lastDigits: "4242",
      userAddress: {
        name: "",
        address1: "",
        locality: "",
        administrativeArea: "",
        countryCode: "",
        postalCode: "",
        phoneNumber: "",
      },
    });
    console.log("result", result);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Async can add payment pass: {canAdd}</Text>
      <Pressable
        style={{ height: 200, width: 200, backgroundColor: "red" }}
        onPress={onPress}
      >
        {/* <AlzaReactNativePaymentPassView
          iosButtonStyle="blackOutline"
          style={{ backgroundColor: "purple", flex: 1 }}
          onAddButtonPress={() => {
            console.log("add button pressed");
          }}
        /> */}
      </Pressable>
    </View>
  );
}
