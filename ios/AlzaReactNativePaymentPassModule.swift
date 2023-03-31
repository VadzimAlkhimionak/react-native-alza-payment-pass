import ExpoModulesCore

public class AlzaReactNativePaymentPassModule: Module {
  public func definition() -> ModuleDefinition {
    Name("AlzaReactNativePaymentPass")

    View(AlzaReactNativePaymentPassView.self) {}
  }
}