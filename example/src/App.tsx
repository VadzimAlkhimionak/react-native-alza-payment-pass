import * as React from 'react';

import { StyleSheet, View, Text, Pressable } from 'react-native';
import {
  addPassToGoogle,
  canAddPaymentPass,
} from 'react-native-alza-payment-pass';
import { useCallback } from 'react';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    canAddPaymentPass().then(setResult);
  }, []);

  const onPress = useCallback(async () => {
    console.log('add button pressed');

    addPassToGoogle({
      cardNetwork: 3,
      tokenProvider: 3,
      displayName: 'David Meadows',
      lastDigits: '4242',
      userAddress: {
        name: 'David Meadows',
        address1: '1 Infinite Loop',
        locality: 'Cupertino',
        administrativeArea: 'CA',
        countryCode: 'US',
        postalCode: '98103',
        phoneNumber: '415 769 7137',
      },
    })
      .then((r) => console.log(r))
      .catch((error: any) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Pressable
        style={{ height: 200, width: 200, backgroundColor: 'red' }}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
