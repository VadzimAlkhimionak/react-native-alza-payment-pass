import { StyleSheet, Text, View } from 'react-native';

import * as AlzaReactNativePaymentPass from 'alza-react-native-payment-pass';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{AlzaReactNativePaymentPass.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
