import ExpoModulesCore
import WebKit
import PassKit


class AlzaReactNativePaymentPassView: ExpoView {
  @objc var onAddButtonPress: RCTBubblingEventBlock!

  let passButton = PKAddPassButton(addPassButtonStyle: PKAddPassButtonStyle.black)
  
  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    clipsToBounds = true

    for child in subviews {
      child.removeFromSuperview()
    }
    
    passButton.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    passButton.frame = bounds
    
    passButton.addTarget(self, action: #selector(self.onPassButtonPress), for: .touchUpInside)
    
    self.addSubview(passButton)
  }

  override func layoutSubviews() {
    passButton.frame = bounds
  }
    
    @objc private func onPassButtonPress(){
      onAddButtonPress([:])
    }
}
