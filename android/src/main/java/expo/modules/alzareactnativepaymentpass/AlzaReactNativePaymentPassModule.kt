package expo.modules.alzareactnativepaymentpass

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record
import expo.modules.kotlin.types.Enumerable

enum class CardNetwork(val value: Int) : Enumerable {
    // there are more of these in TapAndPay
    // todo: convert these to refs in TapAndPay?
    amex(1), discover(2), mastercard(3), visa(4)
}

enum class TokenProvider(val value: Int) : Enumerable {
    // there are more of these in TapAndPay
    amex(2), mastercard(3), visa(4), discover(5)
}

data class UserAddress(@Field val name: String = "",
                       @Field val address1: String = "",
                       @Field val locality: String = "",
                       @Field val administrativeArea: String = "",
                       @Field val countryCode: String = "",
                       @Field val postalCode: String = "",
                       @Field val phoneNumber: String = "") : Record

data class AddCardToGooglePayOptions(@Field val opc: String = "",
                                     @Field val cardNetwork: CardNetwork = CardNetwork.mastercard,
                                     @Field val tokenProvider: TokenProvider = TokenProvider.mastercard,
                                     @Field val displayName: String = "",
                                     @Field val lastDigits: String = "",
                                     @Field val userAddress: UserAddress = UserAddress()) : Record

class AlzaReactNativePaymentPassModule : Module() {

    override fun definition() = ModuleDefinition {
        Name("AlzaReactNativePaymentPass")

        View(AlzaReactNativePaymentPassView::class) {}

        AsyncFunction("asyncCanAddPaymentPass") { referenceID: String ->
            canAddPaymentPass()
        }

        AsyncFunction("addPassToGoogle") { options: AddCardToGooglePayOptions ->
            addPassToGoogle(options)
        }
    }

    private fun canAddPaymentPass(): String {
        return "UNABLE_TO_CHECK"
    }

    private fun addPassToGoogle(options: AddCardToGooglePayOptions): Boolean {
        println(options)

        return true
//    val pushTokenizeRequest: PushTokenizeRequest = Builder()
//            .setOpaquePaymentCard(options.opc)
//            .setNetwork(options.)
//            .setTokenServiceProvider(tokenProvider)
//            .setDisplayName("My Card")
//            .setLastDigits("1234")
//            .setUserAddress(userAddress)
//            .build()
    }
}



