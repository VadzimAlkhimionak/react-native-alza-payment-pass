// Import the native module. On web, it will be resolved to AlzaReactNativePaymentPass.web.ts
// and on native platforms to AlzaReactNativePaymentPass.ts
import { AlzaReactNativePaymentPassViewProps } from "./AlzaReactNativePaymentPass.types";
import { asyncCanAddPaymentPass, canAddPaymentPass } from "./AlzaReactNativePaymentPassModule";
import { AlzaReactNativePaymentPassView } from "./AlzaReactNativePaymentPassView";

export {
  AlzaReactNativePaymentPassView,
  AlzaReactNativePaymentPassViewProps,
  canAddPaymentPass,
  asyncCanAddPaymentPass
};
