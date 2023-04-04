import {
  AlzaReactNativePaymentPassView,
  canAddPaymentPass,
  asyncCanAddPaymentPass,
} from "alza-react-native-payment-pass";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function App() {
  const [canAdd, setCanAdd] = useState("");
  console.log("canAddPaymentPass", canAddPaymentPass("ref"));

  useEffect(() => {
    (async () => {
      const c = await asyncCanAddPaymentPass("ref");
      console.log("asyncCanAddPaymentPass", c);
      setCanAdd(c);
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Can add payment pass: {canAddPaymentPass("ref")}</Text>
      <Text>Async can add payment pass: {canAdd}</Text>
      <View style={{ height: 200, width: 200, backgroundColor: "red" }}>
        <AlzaReactNativePaymentPassView
          iosButtonStyle="blackOutline"
          style={{ backgroundColor: "purple", flex: 1 }}
          onAddButtonPress={() => {
            console.log("add button pressed");
          }}
        />
      </View>
    </View>
  );
}
