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
        
        Function("canAddPaymentPass") { (paymentReferenceID: String) -> String in
            print("checking if we can add")
            if PKAddPaymentPassViewController.canAddPaymentPass() {
                if PKPassLibrary().canAddPaymentPass(withPrimaryAccountIdentifier: paymentReferenceID) {
                    return "CAN_ADD"
                } else {
                    return "ALREADY_ADDED"
                }
            } else {
                return "UNABLE_TO_CHECK"
            }
            
        }
        
        AsyncFunction("asyncCanAddPaymentPass") { (paymentReferenceID: String, promise: Promise) in
            DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
                if PKAddPaymentPassViewController.canAddPaymentPass() {
                    if PKPassLibrary().canAddPaymentPass(withPrimaryAccountIdentifier: paymentReferenceID) {
                        promise.resolve("CAN_ADD")
                    } else {
                        promise.resolve("ALREADY_ADDED")
                    }
                } else {
                    promise.resolve("UNABLE_TO_CHECK")
                }
            }
        }
        
    }
    enum iosButtonStyle: String, Enumerable {
        case black
        case blackOutline
    }
    enum CanAddPaymentPassResult: String, Enumerable {
        case CAN_ADD
        case ALREADY_ADDED
        case UNABLE_TO_CHECK
    }
}
