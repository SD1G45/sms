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
    opened?: number | null; // Int
    primaryColor?: string | null; // String
    redeemed?: number | null; // Int
    sent?: number | null; // Int
    title?: string | null; // String
  }
  Customer: { // root type
    firstName?: string | null; // String
    id?: string | null; // String
    lastName?: string | null; // String
    password?: string | null; // String
    phoneNumber?: string | null; // String
  }
  CustomerList: { // root type
    description?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
  Customer_CustomerList: { // root type
    customer_id?: string | null; // String
    customer_list_id?: string | null; // String
    id?: string | null; // String
  }
  KeyWord_CustomerList: { // root type
    customer_list_id?: string | null; // String
    id?: string | null; // String
    keyword_id?: string | null; // String
  }
  Keyword: { // root type
    couponsOpened?: number | null; // Int
    couponsRedeemed?: number | null; // Int
    customersOnboarded?: number | null; // Int
    dateCreated?: NexusGenScalars['Date'] | null; // Date
    description?: string | null; // String
    id?: string | null; // String
    keyWordCustomerList?: NexusGenRootTypes['KeyWord_CustomerList'] | null; // KeyWord_CustomerList
    keyword?: string | null; // String
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email?: string | null; // String
    firstName?: string | null; // String
    id?: string | null; // String
    lastName?: string | null; // String
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
    businessId: string | null; // String
    description: string | null; // String
    expirationDate: NexusGenScalars['Date'] | null; // Date
    id: string | null; // String
    name: string | null; // String
    opened: number | null; // Int
    primaryColor: string | null; // String
    redeemed: number | null; // Int
    sent: number | null; // Int
    title: string | null; // String
  }
  Customer: { // field return type
    firstName: string | null; // String
    id: string | null; // String
    lastName: string | null; // String
    password: string | null; // String
    phoneNumber: string | null; // String
  }
  CustomerList: { // field return type
    count: number | null; // Int
    description: string | null; // String
    id: string | null; // String
    name: string | null; // String
  }
  Customer_CustomerList: { // field return type
    customer_id: string | null; // String
    customer_list_id: string | null; // String
    id: string | null; // String
  }
  KeyWord_CustomerList: { // field return type
    customer_list_id: string | null; // String
    id: string | null; // String
    keyword_id: string | null; // String
  }
  Keyword: { // field return type
    couponsOpened: number | null; // Int
    couponsRedeemed: number | null; // Int
    customersOnboarded: number | null; // Int
    dateCreated: NexusGenScalars['Date'] | null; // Date
    description: string | null; // String
    id: string | null; // String
    keyWordCustomerList: NexusGenRootTypes['KeyWord_CustomerList'] | null; // KeyWord_CustomerList
    keyword: string | null; // String
  }
  Mutation: { // field return type
    acceptInvitation: boolean | null; // Boolean
    editBusiness: NexusGenRootTypes['Business'] | null; // Business
    inviteAccount: boolean | null; // Boolean
    loginUser: NexusGenRootTypes['UserLoginPayload'] | null; // UserLoginPayload
    newBusiness: NexusGenRootTypes['Business'] | null; // Business
    newCampaign: NexusGenRootTypes['Campaign'] | null; // Campaign
    newCoupon: NexusGenRootTypes['Coupon'] | null; // Coupon
    newCustomer: NexusGenRootTypes['Customer'] | null; // Customer
    newCustomerList: NexusGenRootTypes['CustomerList'] | null; // CustomerList
    newCustomerListCustomer: NexusGenRootTypes['Customer_CustomerList'] | null; // Customer_CustomerList
    newKeyWord: NexusGenRootTypes['Keyword'] | null; // Keyword
    provisionPhoneNumber: NexusGenRootTypes['AvailablePhoneNumber'] | null; // AvailablePhoneNumber
    registerUser: NexusGenRootTypes['UserLoginPayload'] | null; // UserLoginPayload
    resetPassword: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    availablePhoneNumbers: Array<NexusGenRootTypes['AvailablePhoneNumber'] | null> | null; // [AvailablePhoneNumber]
    business: NexusGenRootTypes['Business'] | null; // Business
    businessInviteCode: NexusGenRootTypes['BusinessInviteCode'] | null; // BusinessInviteCode
    campaign: Array<NexusGenRootTypes['Campaign'] | null> | null; // [Campaign]
    coupons: Array<NexusGenRootTypes['Coupon'] | null> | null; // [Coupon]
    customerListCustomers: Array<NexusGenRootTypes['Customer_CustomerList'] | null> | null; // [Customer_CustomerList]
    customerLists: Array<NexusGenRootTypes['CustomerList'] | null> | null; // [CustomerList]
    keywords: Array<NexusGenRootTypes['Keyword'] | null> | null; // [Keyword]
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    businesses: Array<NexusGenRootTypes['Business'] | null> | null; // [Business]
    email: string | null; // String
    firstName: string | null; // String
    id: string | null; // String
    lastName: string | null; // String
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
    businessId: 'String'
    description: 'String'
    expirationDate: 'Date'
    id: 'String'
    name: 'String'
    opened: 'Int'
    primaryColor: 'String'
    redeemed: 'Int'
    sent: 'Int'
    title: 'String'
  }
  Customer: { // field return type name
    firstName: 'String'
    id: 'String'
    lastName: 'String'
    password: 'String'
    phoneNumber: 'String'
  }
  CustomerList: { // field return type name
    count: 'Int'
    description: 'String'
    id: 'String'
    name: 'String'
  }
  Customer_CustomerList: { // field return type name
    customer_id: 'String'
    customer_list_id: 'String'
    id: 'String'
  }
  KeyWord_CustomerList: { // field return type name
    customer_list_id: 'String'
    id: 'String'
    keyword_id: 'String'
  }
  Keyword: { // field return type name
    couponsOpened: 'Int'
    couponsRedeemed: 'Int'
    customersOnboarded: 'Int'
    dateCreated: 'Date'
    description: 'String'
    id: 'String'
    keyWordCustomerList: 'KeyWord_CustomerList'
    keyword: 'String'
  }
  Mutation: { // field return type name
    acceptInvitation: 'Boolean'
    editBusiness: 'Business'
    inviteAccount: 'Boolean'
    loginUser: 'UserLoginPayload'
    newBusiness: 'Business'
    newCampaign: 'Campaign'
    newCoupon: 'Coupon'
    newCustomer: 'Customer'
    newCustomerList: 'CustomerList'
    newCustomerListCustomer: 'Customer_CustomerList'
    newKeyWord: 'Keyword'
    provisionPhoneNumber: 'AvailablePhoneNumber'
    registerUser: 'UserLoginPayload'
    resetPassword: 'User'
  }
  Query: { // field return type name
    availablePhoneNumbers: 'AvailablePhoneNumber'
    business: 'Business'
    businessInviteCode: 'BusinessInviteCode'
    campaign: 'Campaign'
    coupons: 'Coupon'
    customerListCustomers: 'Customer_CustomerList'
    customerLists: 'CustomerList'
    keywords: 'Keyword'
    viewer: 'User'
  }
  User: { // field return type name
    businesses: 'Business'
    email: 'String'
    firstName: 'String'
    id: 'String'
    lastName: 'String'
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
    editBusiness: { // args
      id: string; // String!
      name: string; // String!
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
      phoneNumber: string; // String!
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
    provisionPhoneNumber: { // args
      businessId: string; // String!
      phoneNumber: string; // String!
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
    coupons: { // args
      businessId: string; // String!
    }
    customerListCustomers: { // args
      customerListId: string; // String!
    }
    customerLists: { // args
      businessId: string; // String!
    }
    keywords: { // args
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