#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AlzaPaymentPass, NSObject)

RCT_EXTERN_METHOD(canAddPaymentPass:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
