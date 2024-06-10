exports.errorCodes = {
  40001: {
    reason: 'ValidationInvalidField',
    message: 'Invalid parameter(s)'
  },
  40002: {
    reason: 'ValidationExpired',
    message: 'secretCode is invalid/expired'
  },
  40003: {
    reason: 'ValidationError',
    message: 'Message sent failed'
  },
  40004: {
    reason: 'ValidationInvalidField',
    message: 'MFA confirm request is invalid'
  },
  40005: {
    reason: 'ValidationError',
    message: 'Email is already in use'
  },
  40006: {
    reason: 'ValidationError',
    message: 'Phone is already in use'
  },
  40007: {
    reason: 'ValidationInvalidField',
    message: 'Email format is not valid'
  },
  40008: {
    reason: 'ValidationInvalidField',
    message: 'Phone format is not valid'
  },
  40009: {
    reason: 'ValidationError',
    message: 'Phone number is not valid'
  },
  40010: {
    reason: 'DeviceTokenAlreadyStored',
    message: 'Device token is already stored for this user.'
  },
  40011: {
    reason: 'ValidationError',
    message:
      'UpgradePlanId or ProductRef and CardDesign must be provided when upgrade'
  },
  40012: {
    reason: 'ValidationError',
    message: 'Requested planId is not subscribed'
  },
  40013: {
    reason: 'ValidationError',
    message: 'planId does not belongs to the partner'
  },
  40014: {
    reason: 'ValidationError',
    message: 'upgradePlanId does not belongs to the partner'
  },
  40015: {
    reason: 'ValidationError',
    message: 'Requested plan is not accepted without payment.'
  },
  40016: {
    reason: 'PasswordValidationError',
    message: 'You are using old password. Please use different password. '
  },
  40017: {
    reason: 'MfaResetSecretVerifyFailed',
    message: 'Mfa reset secret verify failed'
  },
  40018: {
    reason: 'MfaResetSecretValidateFailed',
    message: 'Mfa reset secret validate failed'
  },
  40019: {
    reason: 'Invalid/ExpiredTotpResetRequestAlreadyExist',
    message: 'Totp reset request already exist'
  },
  40020: {
    reason: 'ValidationError',
    message: 'Date of birth does not match.'
  },
  40021: {
    reason: 'MfaResetRequestInvalid',
    message: 'Mfa reset request invalid/expired.'
  },
  40022: {
    reason: 'InvalidRequest',
    message: 'Pin request is invalid/expired.'
  },
  40023: {
    reason: 'ValidationError',
    message: 'Pin does not match.'
  },
  40024: {
    reason: 'ValidationError',
    message: "Key/IV doesn't match."
  },
  40025: {
    reason: 'ValidationError',
    message: "Current and new pin can't be same."
  },
  40026: {
    reason: 'ValidationError',
    message: "Please don't send SSN to this request."
  },
  40027: {
    reason: 'ValidationError',
    message: 'US country is not allowed to current partner(Non-US)'
  },
  40028: {
    reason: 'ValidationError',
    message: 'Non US country is not allowed to current partner(US)'
  },
  40029: {
    reason: 'GiftCardOrderFailed',
    message: 'We are sorry, there was an error processing the request.'
  },
  40030: {
    reason: 'ValidationError',
    message: 'Phone number is already exists'
  },
  40031: {
    reason: 'ValidationError',
    message: "Contact doesn't belong to partner"
  },
  40032: {
    reason: 'PlanDiscountValidationError',
    message: 'Discount code is not valid for selected plan.'
  },
  40033: {
    reason: 'DiscountCodePaymentError',
    message: 'Discount code has already been expired'
  },
  40034: {
    reason: 'DiscountCodePaymentError',
    message: 'Discount code already used by contact'
  },
  40035: {
    reason: 'DiscountCodePaymentError',
    message: 'Payment amount must be grater than 0'
  },
  40036: {
    reason: 'DiscountCodePaymentError',
    message: 'Discount code is invalid/expired'
  },
  40037: {
    reason: 'ValidationError',
    message: 'Bank Currency is not supported.'
  },
  40038: {
    reason: 'ValidationError',
    message: 'Crypto Currency is not supported.'
  },
  40039: {
    reason: 'ValidationError',
    message: 'Recipient country is not supported.'
  },
  40040: {
    reason: 'ValidationError',
    message: 'Bank country is not supported.'
  },
  40041: {
    reason: 'ValidationError',
    message: "We are sorry, beneficiary can't be updated."
  },
  40042: {
    reason: 'BeneficiaryFailed',
    message: "We are sorry, beneficiary can't be removed."
  },
  40043: {
    reason: 'BeneficiaryFailed',
    message: "We are sorry, beneficiary can't be disabled."
  },
  40044: {
    reason: 'PaymentDraftFailed',
    message: 'AccountId not matched with contactId.'
  },
  40045: {
    reason: 'PaymentDraftFailed',
    message: 'Insufficient amount.'
  },
  40046: {
    reason: 'PaymentDraftFailed',
    message: 'Do not have sufficient balance.'
  },
  40047: {
    reason: 'ValidationError',
    message: 'Invalid beneficiary currency code.'
  },
  40048: {
    reason: 'PaymentProcessorValidationError',
    message:
      'We are unable to add your card. Please use another card or contact your card provider'
  },
  40049: {
    reason: 'InsufficientFund',
    message: 'Insufficient funds. Please contact with customer support.'
  },
  40050: {
    reason: 'PaymentFailed',
    message:
      "We are sorry, your selected payment type can't be processed at this moment"
  },
  40051: {
    reason: 'ValidationError',
    message: "Account doesn't belong to the contact."
  },
  40052: {
    reason: 'ValidationError',
    message: "Payment processor token doesn't belong to the contact."
  },
  40053: {
    reason: 'ValidationError',
    message: 'Card payment is not supported for your country.'
  },
  40054: {
    reason: 'ValidationError',
    message: 'Account is inactive.'
  },
  40055: {
    reason: 'PaymentFailed',
    message: 'We are sorry, payment cannot be processed for this beneficiary.'
  },
  40056: {
    reason: 'PaymentCardError',
    message: 'Payment card has been expired.'
  },
  40057: {
    reason: 'ValidationError',
    message: "This beneficiary can't be updated."
  },
  40058: {
    reason: 'ValidationError',
    message: '3DS verification failed'
  },
  40059: {
    reason: 'CorpWalletPaymentError',
    message: 'Subscription payment failed.'
  },
  40060: {
    reason: 'MaxSellLimitExceeded',
    message: 'Maximum sell limit exceeded.'
  },
  40061: {
    reason: 'ValidationError',
    message:
      'Discount code price is below than plan price. Please contact customer support'
  },
  40062: {
    reason: 'ForcePasswordResetError',
    message: "We are sorry, can't process the request."
  },
  40063: {
    reason: 'ValidationError',
    message: 'Configuration update is not allowed to current partner'
  },
  40101: {
    reason: 'NoUser',
    message: "User doesn't exists"
  },
  40102: {
    reason: 'InvalidPassword',
    message: 'User password is invalid'
  },
  40103: {
    reason: 'Blocked',
    message: 'Your account is blocked. Please contact to customer support.'
  },
  40104: {
    reason: 'NewUser',
    message: 'New user must complete subscription'
  },
  40105: {
    reason: 'UserUnverified',
    message: 'User must verify email address'
  },
  40106: {
    reason: 'UserUnverified',
    message: 'User must verify phone number'
  },
  40107: {
    reason: 'SetupMfa',
    message: 'User must setup a MFA method'
  },
  40108: {
    reason: 'UserUnverified',
    message: 'User must validate phone number'
  },
  40109: {
    reason: 'ForcePass',
    message: 'User must change current password'
  },
  // ================== Authorizer error codes ==================
  40110: {
    reason: 'TokenExpired',
    message: 'Token expired'
  },
  40111: {
    reason: 'InvalidToken',
    message: 'Token validation fail'
  },
  40112: {
    reason: 'InvalidToken',
    message: 'Token verification fail'
  },
  40113: {
    reason: 'DeviceNotVerified',
    message: 'Device not verified'
  },
  40114: {
    reason: 'ResourceNotAllowed',
    message: 'Requested method or resource not allowed by scope'
  },
  40115: {
    reason: 'ResetMfaPhoneVerify',
    message: 'user must verify phone access.'
  },
  40116: {
    reason: 'ResetMfaPhoneConfirm',
    message: 'user must confirm phone access.'
  },
  40117: {
    reason: 'ResetMfaDevice',
    message: 'user must confirm new device.'
  },
  40118: {
    reason: 'ResetMfa',
    message: 'user must reset mfa device.'
  },
  40119: {
    reason: 'PinSetup',
    message: 'user must setup pin.'
  },
  40120: {
    reason: 'PinSetup',
    message: 'user must confirm setup pin.'
  },
  40121: {
    reason: 'PinVerify',
    message: 'user must verify pin.'
  },
  40122: {
    reason: 'PinVerify',
    message: 'user must confirm pin.'
  },
  40123: {
    reason: 'OnboardingPinVerify',
    message: 'user must verify pin when onboarding.'
  },
  40124: {
    reason: 'OnboardingPinVerify',
    message: 'user must confirm pin when onboarding.'
  },
  40125: {
    reason: 'PasswordValidationError',
    message: 'Wrong password.'
  },
  40301: {
    reason: 'ForbiddenTopup',
    message: 'User not permitted to do top-up, please contact with support.'
  },
  40302: {
    reason: 'ForbiddenUpgradePlan',
    message: 'User not permitted to upgrade plan, please contact with support.'
  },
  40303: {
    reason: 'ForbiddenCardPurchase',
    message: 'User not permitted to purchase card, please contact with support.'
  },
  40304: {
    reason: 'ForbiddenUser',
    message:
      'User not permitted to do this operation, please contact with support.'
  },
  40401: {
    reason: 'NotFound',
    message: 'User not found'
  },
  40402: {
    reason: 'NotFound',
    message: 'Partner not found'
  },
  40403: {
    reason: 'NotFound',
    message: 'ProductRef and CardDesign not found for requested plan'
  },
  40404: {
    reason: 'DeviceNotFound',
    message: 'Requested device is not found'
  },
  40405: {
    reason: 'MfaResetRequestNotFound',
    message: 'MFA reset request is not found'
  },
  40406: {
    reason: 'SecretNotFound',
    message: 'TOTP secret not found.'
  },
  40407: {
    reason: 'KYCNotFound',
    message: 'KYC record not found for the contact'
  },
  40408: {
    reason: 'MemberNotFound',
    message: 'Member not found in marketing channel'
  },
  40409: {
    reason: 'DiscountCodeNotFound',
    message: 'Discount code not found'
  },
  40410: {
    reason: 'BeneficiaryNotFound',
    message: 'Beneficiary not found for this contact'
  },
  40411: {
    reason: 'PaymentProcessorError',
    message: 'No payment processor found'
  },
  40412: {
    reason: 'AutoTopUpNotFound',
    message: 'No auto topup configuration found'
  },
  40413: {
    reason: 'PaymentCardNotFound',
    message: 'Payment card not found'
  },
  40414: {
    reason: 'AccountNotFound',
    message: 'Account not found'
  },
  40415: {
    reason: 'SubscriptionNotFound',
    message: 'Subscription not found for this contact.'
  },
  40901: {
    reason: 'ConflictAuthUser',
    message: 'User is already exists'
  },
  40902: {
    reason: 'ConflictAuthVerify',
    message: 'User is already verified email'
  },
  40903: {
    reason: 'ConflictAuthVerify',
    message: 'User is already verified phone'
  },
  40904: {
    reason: 'ConflictAuthValidation',
    message: 'User has valid phone'
  },
  40905: {
    reason: 'ConflictPlanUpgrade',
    message: 'Requested upgradePlanId already subscribed'
  },
  40906: {
    reason: 'ConflictSSN',
    message: 'User already has a valid SSN'
  },
  40907: {
    reason: 'ConflictDevice',
    message: 'Device already has been removed'
  },
  40908: {
    reason: 'ConflictDevice',
    message: 'Device already has been approved'
  },
  40909: {
    reason: 'ConflictSecretVerification',
    message: 'Secret already verified'
  },
  40910: {
    reason: 'ConflictPinSetup',
    message: 'Pin already has been setup.'
  },
  40911: {
    reason: 'ConflictPinVerify',
    message: 'Pin not setup yet.'
  },
  40912: {
    reason: 'ConflictSubscription',
    message: 'Contact already have a subscription.'
  },
  40913: {
    reason: 'ConflictBeneficiary',
    message: 'Beneficiary already exists.'
  },
  40914: {
    reason: 'ConflictAutoTopUp',
    message: 'Configuration already exists.'
  }
};
