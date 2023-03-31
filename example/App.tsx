import { AlzaReactNativePaymentPassView } from "alza-react-native-payment-pass";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hi mom</Text>
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
