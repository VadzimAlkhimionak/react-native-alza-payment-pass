import ExpoModulesCore
import PassKit

public class AlzaReactNativePaymentPassModule: Module {
    public func definition() -> ModuleDefinition {
        Name("AlzaReactNativePaymentPass")
        
        View(AlzaReactNativePaymentPassView.self) {
            Events("onAddButtonPress")

            Prop("iosButtonStyle") { (view, style: iosButtonStyle) in
                print ("prop:iosButtonStyle", style)
                switch style {
                case .black:
                    view.iosButtonStyle = PKAddPassButtonStyle.black
                case .blackOutline:
                    view.iosButtonStyle = PKAddPassButtonStyle.blackOutline
                }
            }
        }
        
    }
    enum iosButtonStyle: String, Enumerable {
        case black
        case blackOutline
    }
}
