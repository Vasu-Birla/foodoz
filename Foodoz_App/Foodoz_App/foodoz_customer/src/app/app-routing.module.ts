import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'phone-number',
    loadChildren: () => import('./phone-number/phone-number.module').then(m => m.PhoneNumberPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'set-location',
    loadChildren: () => import('./set-location/set-location.module').then(m => m.SetLocationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('./stores/stores.module').then(m => m.StoresPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsPageModule)
  },
  {
    path: 'variation-selection',
    loadChildren: () => import('./variation-selection/variation-selection.module').then(m => m.VariationSelectionPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'order-placed',
    loadChildren: () => import('./order-placed/order-placed.module').then(m => m.OrderPlacedPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'custom-delivery',
    loadChildren: () => import('./custom-delivery/custom-delivery.module').then(m => m.CustomDeliveryPageModule)
  },
  {
    path: 'package-type',
    loadChildren: () => import('./package-type/package-type.module').then(m => m.PackageTypePageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountPageModule)
  },
  {
    path: 'saved-addresses',
    loadChildren: () => import('./saved-addresses/saved-addresses.module').then(m => m.SavedAddressesPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then(m => m.TermsConditionsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then(m => m.BuyappalertPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'socila-login',
    loadChildren: () => import('./socila-login/socila-login.module').then(m => m.SocilaLoginPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsPageModule)
  },
  {
    path: 'add-review',
    loadChildren: () => import('./add-review/add-review.module').then(m => m.AddReviewPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletPageModule)
  },
  {
    path: 'add-money',
    loadChildren: () => import('./add-money/add-money.module').then(m => m.AddMoneyPageModule)
  },
  {
    path: 'add-money-option',
    loadChildren: () => import('./add-money-option/add-money-option.module').then(m => m.AddMoneyOptionPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
  },
  {
    path: 'table-booking',
    loadChildren: () => import('./table-booking/table-booking.module').then(m => m.TableBookingPageModule)
  },
  {
    path: 'table-booked',
    loadChildren: () => import('./table-booked/table-booked.module').then(m => m.TableBookedPageModule)
  },
  {
    path: 'ordering-method',
    loadChildren: () => import('./ordering-method/ordering-method.module').then(m => m.OrderingMethodPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then(m => m.VtPopupPageModule)
  },
  {
    path: 'confirm-order',
    loadChildren: () => import('./confirm-order/confirm-order.module').then(m => m.ConfirmOrderPageModule)
  },
  {
    path: 'process-payment',
    loadChildren: () => import('./process-payment/process-payment.module').then(m => m.ProcessPaymentPageModule)
  },
  {
    path: 'map-view',
    loadChildren: () => import('./map-view/map-view.module').then(m => m.MapViewPageModule)
  },
  {
    path: 'card-info',
    loadChildren: () => import('./card-info/card-info.module').then(m => m.CardInfoPageModule)
  },
  {
    path: 'search-new',
    loadChildren: () => import('./search-new/search-new.module').then(m => m.SearchNewPageModule)
  },
  {
    path: 'variation-selection-alert',
    loadChildren: () => import('./variation-selection-alert/variation-selection-alert.module').then(m => m.VariationSelectionAlertPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
