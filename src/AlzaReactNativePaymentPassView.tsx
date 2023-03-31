import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { AlzaReactNativePaymentPassViewProps } from "./AlzaReactNativePaymentPass.types";

const NativeView: React.ComponentType<AlzaReactNativePaymentPassViewProps> =
  requireNativeViewManager("AlzaReactNativePaymentPass");

export function AlzaReactNativePaymentPassView(
  props: AlzaReactNativePaymentPassViewProps
) {
  return <NativeView {...props} />;
}
