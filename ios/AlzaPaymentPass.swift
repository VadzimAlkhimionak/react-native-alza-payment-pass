@objc(AlzaPaymentPass)
class AlzaPaymentPass: NSObject {

  @objc(canAddPaymentPass:reject:)
  func canAddPaymentPass(_ resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
    resolve("MAYBE_WE_CAN_IOS")
  }
}
