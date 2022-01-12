/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../graphql/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
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
  Campaign: { // root type
    couponId?: string | null; // String
    customers?: NexusGenRootTypes['CustomerList'] | null; // CustomerList
    id?: string | null; // String
    message?: string | null; // String
    name?: string | null; // String
  }
  Coupon: { // root type
    businessId?: string | null; // String
    description?: string | null; // String
    expirationDate?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    primaryColor?: string | null; // String
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
    id?: string | null; // String
    name?: string | null; // String
  }
  KeyWord_CustomerList: { // root type
    customer_list_id?: string | null; // String
    id?: string | null; // String
    keyword_id?: string | null; // String
  }
  Keyword: { // root type
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

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

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
  Campaign: { // field return type
    couponId: string | null; // String
    customers: NexusGenRootTypes['CustomerList'] | null; // CustomerList
    id: string | null; // String
    message: string | null; // String
    name: string | null; // String
  }
  Coupon: { // field return type
    businessId: string | null; // String
    description: string | null; // String
    expirationDate: string | null; // String
    id: string | null; // String
    name: string | null; // String
    primaryColor: string | null; // String
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
    id: string | null; // String
    name: string | null; // String
  }
  KeyWord_CustomerList: { // field return type
    customer_list_id: string | null; // String
    id: string | null; // String
    keyword_id: string | null; // String
  }
  Keyword: { // field return type
    description: string | null; // String
    id: string | null; // String
    keyWordCustomerList: NexusGenRootTypes['KeyWord_CustomerList'] | null; // KeyWord_CustomerList
    keyword: string | null; // String
  }
  Mutation: { // field return type
    editBusiness: NexusGenRootTypes['Business'] | null; // Business
    loginUser: NexusGenRootTypes['UserLoginPayload'] | null; // UserLoginPayload
    newBusiness: NexusGenRootTypes['Business'] | null; // Business
    newCampaign: NexusGenRootTypes['Campaign'] | null; // Campaign
    newCoupon: NexusGenRootTypes['Coupon'] | null; // Coupon
    newCustomer: NexusGenRootTypes['Customer'] | null; // Customer
    newKeyWord: NexusGenRootTypes['Keyword'] | null; // Keyword
    provisionPhoneNumber: NexusGenRootTypes['AvailablePhoneNumber'] | null; // AvailablePhoneNumber
    registerUser: NexusGenRootTypes['UserLoginPayload'] | null; // UserLoginPayload
  }
  Query: { // field return type
    availablePhoneNumbers: Array<NexusGenRootTypes['AvailablePhoneNumber'] | null> | null; // [AvailablePhoneNumber]
    business: NexusGenRootTypes['Business'] | null; // Business
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
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
  Campaign: { // field return type name
    couponId: 'String'
    customers: 'CustomerList'
    id: 'String'
    message: 'String'
    name: 'String'
  }
  Coupon: { // field return type name
    businessId: 'String'
    description: 'String'
    expirationDate: 'String'
    id: 'String'
    name: 'String'
    primaryColor: 'String'
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
    id: 'String'
    name: 'String'
  }
  KeyWord_CustomerList: { // field return type name
    customer_list_id: 'String'
    id: 'String'
    keyword_id: 'String'
  }
  Keyword: { // field return type name
    description: 'String'
    id: 'String'
    keyWordCustomerList: 'KeyWord_CustomerList'
    keyword: 'String'
  }
  Mutation: { // field return type name
    editBusiness: 'Business'
    loginUser: 'UserLoginPayload'
    newBusiness: 'Business'
    newCampaign: 'Campaign'
    newCoupon: 'Coupon'
    newCustomer: 'Customer'
    newKeyWord: 'Keyword'
    provisionPhoneNumber: 'AvailablePhoneNumber'
    registerUser: 'UserLoginPayload'
  }
  Query: { // field return type name
    availablePhoneNumbers: 'AvailablePhoneNumber'
    business: 'Business'
    viewer: 'User'
  }
  User: { // field return type name
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
    editBusiness: { // args
      id: string; // String!
      name: string; // String!
    }
    loginUser: { // args
      email: string; // String!
      password: string; // String!
    }
    newBusiness: { // args
      name: string; // String!
    }
    newCampaign: { // args
      couponId: string; // String!
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
    newKeyWord: { // args
      description: string; // String!
      keyword: string; // String!
    }
    provisionPhoneNumber: { // args
      phoneNumber: string; // String!
    }
    registerUser: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
    }
  }
  Query: {
    availablePhoneNumbers: { // args
      areaCode: string; // String!
    }
    business: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

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