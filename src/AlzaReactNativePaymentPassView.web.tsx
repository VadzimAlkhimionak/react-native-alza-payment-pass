import * as React from 'react';

import { AlzaReactNativePaymentPassViewProps } from './AlzaReactNativePaymentPass.types';

export default function AlzaReactNativePaymentPassView(props: AlzaReactNativePaymentPassViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
