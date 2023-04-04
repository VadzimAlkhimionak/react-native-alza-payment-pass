package expo.modules.alzareactnativepaymentpass

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import kotlinx.coroutines.Dispatchers


class AlzaReactNativePaymentPassModule : Module() {

  override fun definition() = ModuleDefinition {
    Name("AlzaReactNativePaymentPass")

    // Enables the module to be used as a native view. Definition components that are accepted as part of
    // the view definition: Prop, Events.
    // View(AlzaReactNativePaymentPassView::class) {
    // }

    Function("canAddPaymentPass") { referenceID: String ->
      return@Function "UNABLE_TO_CHECK"
    }

    AsyncFunction("asyncCanAddPaymentPass") { referenceID: String ->
      canAddPaymentPass()
    }

    
  }
  private fun canAddPaymentPass(): String {
    return "UNABLE_TO_CHECK"
  }
}
