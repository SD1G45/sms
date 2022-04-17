/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../graphql/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Role: "ADMIN" | "EDITOR" | "OWNER" | "VIEWER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  AvailablePhoneNumber: { // root type
    friendlyName?: string | null; // String
    phoneNumber?: string | null; // String
  }
  Business: { // root type
    id?: string | null; // String
    logoUrl?: string | null; // String
    name?: string | null; // String
    phoneNumber?: string | null; // String
    stripeId?: string | null; // String
  }
  BusinessInviteCode: { // root type
    businessId?: string | null; // String
    email?: string | null; // String
    id?: string | null; // String
    role?: string | null; // String
  }
  Campaign: { // root type
    businessId?: string | null; // String
    couponId?: string | null; // String
    couponsOpened?: number | null; // Int
    couponsRedeemed?: number | null; // Int
    customers?: NexusGenRootTypes['CustomerList'] | null; // CustomerList
    dateSent?: NexusGenScalars['Date'] | null; // Date
    id?: string | null; // String
    message?: string | null; // String
    messagesSent?: number | null; // Int
    name?: string | null; // String
  }
  Coupon: { // root type
    businessId?: string | null; // String
    description?: string | null; // String
    expirationDate?: NexusGenScalars['Date'] | null; // Date
    id?: string | null; // String
    name?: string | null; // String
    primaryColor?: string | null; // String
    title?: string | null; // String
  }
  CouponInstance: { // root type
    couponId?: string | null; // String
    customerId?: string | null; // String
    id?: string | null; // String
    opened?: boolean | null; // Boolean
    redeemed?: boolean | null; // Boolean
    redeemedAt?: NexusGenScalars['Date'] | null; // Date
  }
  Customer: { // root type
    couponId?: string | null; // String
    firstName?: string | null; // String
    id?: string | null; // String
    keywordId?: string | null; // String
    lastName?: string | null; // String
    onboardDate?: NexusGenScalars['Date'] | null; // Date
    phoneNumber?: string | null; // String
  }
  CustomerList: { // root type
    description?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
  Customer_Coupon: { // root type
    couponId?: string | null; // String
    customerId?: string | null; // String
    id?: string | null; // String
    opened?: boolean | null; // Boolean
    redeemed?: boolean | null; // Boolean
  }
  Customer_CustomerList: { // root type
    customerId?: string | null; // String
    customerListId?: string | null; // String
    id?: string | null; // String
  }
  EmailResetCode: { // root type
    customerId?: string | null; // String
    email?: string | null; // String
  }
  KeyWord_CustomerList: { // root type
    customerListId?: string | null; // String
    id?: string | null; // String
    keywordId?: string | null; // String
  }
  Keyword: { // root type
    couponId?: string | null; // String
    description?: string | null; // String
    id?: string | null; // String
    keyword?: string | null; // String
    message?: string | null; // String
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email?: string | null; // String
    firstName?: string | null; // String
    id?: string | null; // String
    lastName?: string | null; // String
  }
  UserBusinessRole: { // root type
    role?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  UserLoginPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AvailablePhoneNumber: { // field return type
    friendlyName: string | null; // String
    phoneNumber: string | null; // String
  }
  Business: { // field return type
    id: string | null; // String
    logoUrl: string | null; // String
    name: string | null; // String
    phoneNumber: string | null; // String
    stripeId: string | null; // String
  }
  BusinessInviteCode: { // field return type
    business: NexusGenRootTypes['Business'] | null; // Business
    businessId: string | null; // String
    email: string | null; // String
    id: string | null; // String
    role: string | null; // String
  }
  Campaign: { // field return type
    businessId: string | null; // String
    coupon: NexusGenRootTypes['Coupon'] | null; // Coupon
    couponId: string | null; // String
    couponsOpened: number | null; // Int
    couponsRedeemed: number | null; // Int
    customers: NexusGenRootTypes['CustomerList'] | null; // CustomerList
    dateSent: NexusGenScalars['Date'] | null; // Date
    id: string | null; // String
    message: string | null; // String
    messagesSent: number | null; // Int
    name: string | null; // String
  }
  Coupon: { // field return type
    business: NexusGenRootTypes['Business'] | null; // Business
    businessId: string | null; // String
    description: string | null; // String
    expirationDate: NexusGenScalars['Date'] | null; // Date
    id: string | null; // String
    name: string | null; // String
    openCount: number | null; // Int
    primaryColor: string | null; // String
    redeemCount: number | null; // Int
    redeemedDates: Array<NexusGenScalars['Date'] | null> | null; // [Date]
    sentCount: number | null; // Int
    title: string | null; // String
  }
  CouponInstance: { // field return type
    coupon: NexusGenRootTypes['Coupon'] | null; // Coupon
    couponId: string | null; // String
    customer: NexusGenRootTypes['Customer'] | null; // Customer
    customerId: string | null; // String
    id: string | null; // String
    opened: boolean | null; // Boolean
    redeemed: boolean | null; // Boolean
    redeemedAt: NexusGenScalars['Date'] | null; // Date
  }
  Customer: { // field return type
    couponId: string | null; // String
    firstName: string | null; // String
    id: string | null; // String
    keywordId: string | null; // String
    lastName: string | null; // String
    onboardDate: NexusGenScalars['Date'] | null; // Date
    phoneNumber: string | null; // String
  }
  CustomerList: { // field return type
    count: number | null; // Int
    description: string | null; // String
    id: string | null; // String
    name: string | null; // String
  }
  Customer_Coupon: { // field return type
    couponId: string | null; // String
    customerId: string | null; // String
    id: string | null; // String
    opened: boolean | null; // Boolean
    redeemed: boolean | null; // Boolean
  }
  Customer_CustomerList: { // field return type
    customer: NexusGenRootTypes['Customer'] | null; // Customer
    customerId: string | null; // String
    customerListId: string | null; // String
    id: string | null; // String
    name: string | null; // String
  }
  EmailResetCode: { // field return type
    customerId: string | null; // String
    email: string | null; // String
  }
  KeyWord_CustomerList: { // field return type
    customerListId: string | null; // String
    id: string | null; // String
    keywordId: string | null; // String
  }
  Keyword: { // field return type
    coupon: NexusGenRootTypes['Coupon'] | null; // Coupon
    couponId: string | null; // String
    customerListId: string | null; // String
    description: string | null; // String
    id: string | null; // String
    keyword: string | null; // String
    message: string | null; // String
  }
  Mutation: { // field return type
    acceptInvitation: boolean | null; // Boolean
    addCustomerInfoMutation: NexusGenRootTypes['Customer'] | null; // Customer
    editBusiness: NexusGenRootTypes['Business'] | null; // Business
    editCouponMutation: NexusGenRootTypes['Coupon'] | null; // Coupon
    editEmailCode: boolean | null; // Boolean
    editKeywordMutation: NexusGenRootTypes['Keyword'] | null; // Keyword
    editUserDisplayNameMutation: NexusGenRootTypes['User'] | null; // User
    editUserEmailMutation: boolean | null; // Boolean
    inviteAccount: boolean | null; // Boolean
    loginUser: NexusGenRootTypes['UserLoginPayload'] | null; // UserLoginPayload
    newBusiness: NexusGenRootTypes['Business'] | null; // Business
    newCampaign: NexusGenRootTypes['Campaign'] | null; // Campaign
    newCoupon: NexusGenRootTypes['Coupon'] | null; // Coupon
    newCustomer: NexusGenRootTypes['Customer'] | null; // Customer
    newCustomerCoupon: NexusGenRootTypes['Customer_Coupon'] | null; // Customer_Coupon
    newCustomerList: NexusGenRootTypes['CustomerList'] | null; // CustomerList
    newCustomerListCustomer: NexusGenRootTypes['Customer_CustomerList'] | null; // Customer_CustomerList
    newKeyWord: NexusGenRootTypes['Keyword'] | null; // Keyword
    openCoupon: NexusGenRootTypes['CouponInstance'] | null; // CouponInstance
    provisionPhoneNumber: NexusGenRootTypes['AvailablePhoneNumber'] | null; // AvailablePhoneNumber
    redeemCoupon: NexusGenRootTypes['CouponInstance'] | null; // CouponInstance
    registerUser: NexusGenRootTypes['UserLoginPayload'] | null; // UserLoginPayload
    resetPassword: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    allCustomers: Array<NexusGenRootTypes['Customer'] | null> | null; // [Customer]
    availablePhoneNumbers: Array<NexusGenRootTypes['AvailablePhoneNumber'] | null> | null; // [AvailablePhoneNumber]
    business: NexusGenRootTypes['Business'] | null; // Business
    businessInviteCode: NexusGenRootTypes['BusinessInviteCode'] | null; // BusinessInviteCode
    campaign: Array<NexusGenRootTypes['Campaign'] | null> | null; // [Campaign]
    coupon: NexusGenRootTypes['Coupon'] | null; // Coupon
    couponInstance: NexusGenRootTypes['CouponInstance'] | null; // CouponInstance
    coupons: Array<NexusGenRootTypes['Coupon'] | null> | null; // [Coupon]
    customerByPhonenumber: NexusGenRootTypes['Customer'] | null; // Customer
    customerList: Array<NexusGenRootTypes['CustomerList'] | null> | null; // [CustomerList]
    customerListCustomers: Array<NexusGenRootTypes['Customer_CustomerList'] | null> | null; // [Customer_CustomerList]
    customerLists: Array<NexusGenRootTypes['CustomerList'] | null> | null; // [CustomerList]
    emailResetCode: NexusGenRootTypes['EmailResetCode'] | null; // EmailResetCode
    keyword: NexusGenRootTypes['Keyword'] | null; // Keyword
    keywords: Array<NexusGenRootTypes['Keyword'] | null> | null; // [Keyword]
    messageCount: number | null; // Int
    usersForBusiness: Array<NexusGenRootTypes['UserBusinessRole'] | null> | null; // [UserBusinessRole]
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    businesses: Array<NexusGenRootTypes['Business'] | null> | null; // [Business]
    email: string | null; // String
    firstName: string | null; // String
    id: string | null; // String
    lastName: string | null; // String
  }
  UserBusinessRole: { // field return type
    role: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  UserLoginPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
}

export interface NexusGenFieldTypeNames {
  AvailablePhoneNumber: { // field return type name
    friendlyName: 'String'
    phoneNumber: 'String'
  }
  Business: { // field return type name
    id: 'String'
    logoUrl: 'String'
    name: 'String'
    phoneNumber: 'String'
    stripeId: 'String'
  }
  BusinessInviteCode: { // field return type name
    business: 'Business'
    businessId: 'String'
    email: 'String'
    id: 'String'
    role: 'String'
  }
  Campaign: { // field return type name
    businessId: 'String'
    coupon: 'Coupon'
    couponId: 'String'
    couponsOpened: 'Int'
    couponsRedeemed: 'Int'
    customers: 'CustomerList'
    dateSent: 'Date'
    id: 'String'
    message: 'String'
    messagesSent: 'Int'
    name: 'String'
  }
  Coupon: { // field return type name
    business: 'Business'
    businessId: 'String'
    description: 'String'
    expirationDate: 'Date'
    id: 'String'
    name: 'String'
    openCount: 'Int'
    primaryColor: 'String'
    redeemCount: 'Int'
    redeemedDates: 'Date'
    sentCount: 'Int'
    title: 'String'
  }
  CouponInstance: { // field return type name
    coupon: 'Coupon'
    couponId: 'String'
    customer: 'Customer'
    customerId: 'String'
    id: 'String'
    opened: 'Boolean'
    redeemed: 'Boolean'
    redeemedAt: 'Date'
  }
  Customer: { // field return type name
    couponId: 'String'
    firstName: 'String'
    id: 'String'
    keywordId: 'String'
    lastName: 'String'
    onboardDate: 'Date'
    phoneNumber: 'String'
  }
  CustomerList: { // field return type name
    count: 'Int'
    description: 'String'
    id: 'String'
    name: 'String'
  }
  Customer_Coupon: { // field return type name
    couponId: 'String'
    customerId: 'String'
    id: 'String'
    opened: 'Boolean'
    redeemed: 'Boolean'
  }
  Customer_CustomerList: { // field return type name
    customer: 'Customer'
    customerId: 'String'
    customerListId: 'String'
    id: 'String'
    name: 'String'
  }
  EmailResetCode: { // field return type name
    customerId: 'String'
    email: 'String'
  }
  KeyWord_CustomerList: { // field return type name
    customerListId: 'String'
    id: 'String'
    keywordId: 'String'
  }
  Keyword: { // field return type name
    coupon: 'Coupon'
    couponId: 'String'
    customerListId: 'String'
    description: 'String'
    id: 'String'
    keyword: 'String'
    message: 'String'
  }
  Mutation: { // field return type name
    acceptInvitation: 'Boolean'
    addCustomerInfoMutation: 'Customer'
    editBusiness: 'Business'
    editCouponMutation: 'Coupon'
    editEmailCode: 'Boolean'
    editKeywordMutation: 'Keyword'
    editUserDisplayNameMutation: 'User'
    editUserEmailMutation: 'Boolean'
    inviteAccount: 'Boolean'
    loginUser: 'UserLoginPayload'
    newBusiness: 'Business'
    newCampaign: 'Campaign'
    newCoupon: 'Coupon'
    newCustomer: 'Customer'
    newCustomerCoupon: 'Customer_Coupon'
    newCustomerList: 'CustomerList'
    newCustomerListCustomer: 'Customer_CustomerList'
    newKeyWord: 'Keyword'
    openCoupon: 'CouponInstance'
    provisionPhoneNumber: 'AvailablePhoneNumber'
    redeemCoupon: 'CouponInstance'
    registerUser: 'UserLoginPayload'
    resetPassword: 'User'
  }
  Query: { // field return type name
    allCustomers: 'Customer'
    availablePhoneNumbers: 'AvailablePhoneNumber'
    business: 'Business'
    businessInviteCode: 'BusinessInviteCode'
    campaign: 'Campaign'
    coupon: 'Coupon'
    couponInstance: 'CouponInstance'
    coupons: 'Coupon'
    customerByPhonenumber: 'Customer'
    customerList: 'CustomerList'
    customerListCustomers: 'Customer_CustomerList'
    customerLists: 'CustomerList'
    emailResetCode: 'EmailResetCode'
    keyword: 'Keyword'
    keywords: 'Keyword'
    messageCount: 'Int'
    usersForBusiness: 'UserBusinessRole'
    viewer: 'User'
  }
  User: { // field return type name
    businesses: 'Business'
    email: 'String'
    firstName: 'String'
    id: 'String'
    lastName: 'String'
  }
  UserBusinessRole: { // field return type name
    role: 'String'
    user: 'User'
  }
  UserLoginPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    acceptInvitation: { // args
      code: string; // String!
    }
    addCustomerInfoMutation: { // args
      customerId: string; // String!
      firstName: string; // String!
      lastName: string; // String!
    }
    editBusiness: { // args
      id: string; // String!
      name: string; // String!
    }
    editCouponMutation: { // args
      description: string; // String!
      expirationDate: string; // String!
      id: string; // String!
      name: string; // String!
      primaryColor: string; // String!
      title: string; // String!
    }
    editEmailCode: { // args
      customerId: string; // String!
      newEmail: string; // String!
    }
    editKeywordMutation: { // args
      couponId: string; // String!
      customerListId: string; // String!
      description: string; // String!
      id: string; // String!
      keyword: string; // String!
      message: string; // String!
    }
    editUserDisplayNameMutation: { // args
      firstName: string; // String!
      id: string; // String!
      lastName: string; // String!
      password: string; // String!
    }
    editUserEmailMutation: { // args
      code: string; // String!
      newEmail: string; // String!
    }
    inviteAccount: { // args
      businessId: string; // String!
      email: string; // String!
      role: NexusGenEnums['Role']; // Role!
    }
    loginUser: { // args
      email: string; // String!
      password: string; // String!
    }
    newBusiness: { // args
      name: string; // String!
    }
    newCampaign: { // args
      businessId: string; // String!
      couponId: string; // String!
      customerListId: string; // String!
      message: string; // String!
      name: string; // String!
    }
    newCoupon: { // args
      businessId: string; // String!
      description: string; // String!
      expirationDate: string; // String!
      name: string; // String!
      primaryColor: string; // String!
      title: string; // String!
    }
    newCustomer: { // args
      couponId: string; // String!
      keywordId: string; // String!
      phoneNumber: string; // String!
    }
    newCustomerCoupon: { // args
      couponId: string; // String!
      customerId: string; // String!
    }
    newCustomerList: { // args
      businessId: string; // String!
      description?: string | null; // String
      name: string; // String!
    }
    newCustomerListCustomer: { // args
      customerId: string; // String!
      customerListId: string; // String!
    }
    newKeyWord: { // args
      businessId: string; // String!
      couponId: string; // String!
      customerListId: string; // String!
      description: string; // String!
      keyword: string; // String!
      message: string; // String!
    }
    openCoupon: { // args
      id: string; // String!
    }
    provisionPhoneNumber: { // args
      businessId: string; // String!
      phoneNumber: string; // String!
    }
    redeemCoupon: { // args
      id: string; // String!
      redeemedAt: string; // String!
    }
    registerUser: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
    }
    resetPassword: { // args
      newPassword: string; // String!
      oldPassword: string; // String!
    }
  }
  Query: {
    allCustomers: { // args
      businessId: string; // String!
    }
    availablePhoneNumbers: { // args
      areaCode: string; // String!
    }
    business: { // args
      id: string; // String!
    }
    businessInviteCode: { // args
      value: string; // String!
    }
    campaign: { // args
      businessId: string; // String!
    }
    coupon: { // args
      id: string; // String!
    }
    couponInstance: { // args
      id: string; // String!
    }
    coupons: { // args
      businessId: string; // String!
    }
    customerByPhonenumber: { // args
      phoneNumber: string; // String!
    }
    customerList: { // args
      customerListId: string; // String!
    }
    customerListCustomers: { // args
      customerListId: string; // String!
    }
    customerLists: { // args
      businessId: string; // String!
    }
    emailResetCode: { // args
      value: string; // String!
    }
    keyword: { // args
      id: string; // String!
    }
    keywords: { // args
      businessId: string; // String!
    }
    messageCount: { // args
      businessId: string; // String!
    }
    usersForBusiness: { // args
      businessId: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}