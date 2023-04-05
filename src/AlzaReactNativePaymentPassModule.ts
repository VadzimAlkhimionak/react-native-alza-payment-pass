import { requireNativeModule } from "expo-modules-core";
import { AddCardToGooglePayOptions } from "./AlzaReactNativePaymentPass.types";

const AlzaReactNativePaymentPass = requireNativeModule(
  "AlzaReactNativePaymentPass"
);

export type CanAddPaymentPassResult =
  | "CAN_ADD"
  | "ALREADY_ADDED"
  | "UNABLE_TO_CHECK";

export async function asyncCanAddPaymentPass(
  paymentReferenceID: string
): Promise<CanAddPaymentPassResult> {
  return await AlzaReactNativePaymentPass.asyncCanAddPaymentPass(
    paymentReferenceID
  );
}

export async function addPassToGoogle(
  options: AddCardToGooglePayOptions
): Promise<boolean> {
  console.log('sending request: ', options);
  return await AlzaReactNativePaymentPass.addPassToGoogle(options);
}
