import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { ViewProps } from "react-native";

import { AlzaReactNativePaymentPassViewProps } from "./AlzaReactNativePaymentPass.types";

export type Props = ViewProps;

const NativeView: React.ComponentType<Props> = requireNativeViewManager(
  "AlzaReactNativePaymentPass"
);

export default function AlzaReactNativePaymentPassView(props: Props) {
  return <NativeView {...props} />;
}
