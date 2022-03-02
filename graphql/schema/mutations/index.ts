import { registerUserMutation } from "./user/registerUserMutation";
import { loginUserMutation } from "./user/loginUserMutation";
import { newBusinessMutation } from "./create/newBusinessMutation";
import { newCouponMutation } from "./create/newCouponMutation";
import { newKeyWordMutation } from "./create/newKeyWordMutation";
import { newCampaignMutation } from "./create/newCampaignMutation";
import { editBusinessMutation } from "./business/editBusinessMutation";
import { newCustomerMutation } from "./create/newCustomerMutation";
import { newCustomerListMutation } from "./create/newCustomerListMutation";
import { provisionPhoneNumberMutation } from "./business/provisionPhoneNumberMutation";
import { resetPasswordMutation } from "./user/resetPassword";
import { inviteAccount } from "./business/inviteAccount";
import { acceptInvitation } from "./business/acceptInviteMutation";
import { newCustomerListCustomerMutation } from "./create/newCustomerListCustomerMutation";
import { redeemCouponMutation } from "./coupon/redeemCoupon";
import { openCouponMutation } from "./coupon/openCoupon";
import { editUserMutations } from "./editUserMutations";

export {
  registerUserMutation,
  loginUserMutation,
  newBusinessMutation,
  newCampaignMutation,
  editBusinessMutation,
  newCustomerMutation,
  newCouponMutation,
  newKeyWordMutation,
  provisionPhoneNumberMutation,
  newCustomerListMutation,
  resetPasswordMutation,
  inviteAccount,
  acceptInvitation,
  newCustomerListCustomerMutation,
  redeemCouponMutation,
  openCouponMutation,
  editUserMutations
};
