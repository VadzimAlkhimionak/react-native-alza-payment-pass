import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to AlzaReactNativePaymentPass.web.ts
// and on native platforms to AlzaReactNativePaymentPass.ts
import AlzaReactNativePaymentPassModule from './AlzaReactNativePaymentPassModule';
import AlzaReactNativePaymentPassView from './AlzaReactNativePaymentPassView';
import { ChangeEventPayload, AlzaReactNativePaymentPassViewProps } from './AlzaReactNativePaymentPass.types';

// Get the native constant value.
export const PI = AlzaReactNativePaymentPassModule.PI;

export function hello(): string {
  return AlzaReactNativePaymentPassModule.hello();
}

export async function setValueAsync(value: string) {
  return await AlzaReactNativePaymentPassModule.setValueAsync(value);
}

const emitter = new EventEmitter(AlzaReactNativePaymentPassModule ?? NativeModulesProxy.AlzaReactNativePaymentPass);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { AlzaReactNativePaymentPassView, AlzaReactNativePaymentPassViewProps, ChangeEventPayload };
