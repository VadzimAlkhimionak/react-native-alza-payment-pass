import ExpoModulesCore
import WebKit
import PassKit


class AlzaReactNativePaymentPassView: ExpoView {
    @objc var iosButtonStyle: PKAddPassButtonStyle = .blackOutline
    @objc var onAddButtonPress: RCTBubblingEventBlock!
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        
    }
    
    private func renderButton() {
        clipsToBounds = true
        
        for child in subviews {
            child.removeFromSuperview()
        }
        
        print("renderButton() button style", iosButtonStyle.rawValue)
        let passButton = PKAddPassButton(addPassButtonStyle: iosButtonStyle)
        
        passButton.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        passButton.frame = bounds
        
        passButton.addTarget(self, action: #selector(self.onPassButtonPress), for: .touchUpInside)
        
        self.addSubview(passButton)
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        
        renderButton()
    }
    
    @objc private func onPassButtonPress(){
        print ("button pressed!")
        // onAddButtonPress([:])
    }
}
