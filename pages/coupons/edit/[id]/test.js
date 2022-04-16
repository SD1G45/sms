import { initializeApollo } from "../../lib/apolloClient";
import { VIEWER_CONTACT_INFO_QUERY } from "../../graphql/client/queries/viewerContactInfoQuery";
import {
  ViewerContactInfo,
  ViewerContactInfo_viewer_phoneNumbers_PhoneNumber,
  ViewerContactInfo_viewer_phoneNumbers_PhoneNumberV2,
  ViewerContactInfo_viewer_addresses_Address,
  ViewerContactInfo_viewer_addresses_AddressV2,
} from "../../graphql/client/queries/types/ViewerContactInfo";

export { default } from "./ContactInfo";

export async function getServerSideProps(context: any) {
  const client = initializeApollo();
  const { data } = await client.query<ViewerContactInfo>({
    context: {
      headers: {
        cookie: context.req.headers.cookie,
      },
    },
    query: VIEWER_CONTACT_INFO_QUERY,
  });

  let optedIntoV2: boolean = false;
  let phoneNumbers:
    | (ViewerContactInfo_viewer_phoneNumbers_PhoneNumber | null)[]
    | null = null;
  let phoneNumbersV2:
    | (ViewerContactInfo_viewer_phoneNumbers_PhoneNumberV2 | null)[]
    | null = null;
  let addresses: (ViewerContactInfo_viewer_addresses_Address | null)[] | null =
    null;
  let addressesV2:
    | (ViewerContactInfo_viewer_addresses_AddressV2 | null)[]
    | null = null;

  if (!data.viewer || !data.viewer.phoneNumbers || !data.viewer.addresses) {
    return {
      props: {
        optedIntoV2: false,
        phoneNumbers: [],
        addresses: [],
      },
    };
  }

  if (data.viewer.optedIntoV2) {
    optedIntoV2 = true;

    if (data.viewer.phoneNumbers.length > 0) {
      if (data.viewer.phoneNumbers[0]?.__typename === "PhoneNumberV2") {
        phoneNumbersV2 =
          (data.viewer
            .phoneNumbers as (ViewerContactInfo_viewer_phoneNumbers_PhoneNumberV2 | null)[]) ||
          [];
      }
    } else {
      phoneNumbersV2 = [];
    }

    if (data.viewer.addresses.length > 0) {
      if (data.viewer.addresses[0]?.__typename === "AddressV2") {
        addressesV2 =
          (data.viewer
            .addresses as (ViewerContactInfo_viewer_addresses_AddressV2 | null)[]) ||
          [];
      }
    } else {
      addressesV2 = [];
    }
  } else {
    optedIntoV2 = false;

    if (data.viewer.phoneNumbers.length > 0) {
      if (data.viewer.phoneNumbers[0]?.__typename === "PhoneNumber") {
        phoneNumbers =
          (data.viewer
            .phoneNumbers as (ViewerContactInfo_viewer_phoneNumbers_PhoneNumber | null)[]) ||
          [];
      }
    } else {
      phoneNumbers = [];
    }

    if (data.viewer.addresses.length > 0) {
      if (data.viewer.addresses[0]?.__typename === "Address") {
        addresses =
          (data.viewer
            .addresses as (ViewerContactInfo_viewer_addresses_Address | null)[]) ||
          [];
      }
    } else {
      addresses = [];
    }
  }

  return {
    props: {
      optedIntoV2,
      phoneNumbers,
      phoneNumbersV2,
      addresses,
      addressesV2,
      private: data.viewer.private || false,
    },
  };
}

export interface ContactInfoProps {
  private: boolean;
  optedIntoV2: boolean;
  phoneNumbers?: Omit<
    ViewerContactInfo_viewer_phoneNumbers_PhoneNumber,
    "__typename"
  >[];
  phoneNumbersV2?: Omit<
    ViewerContactInfo_viewer_phoneNumbers_PhoneNumberV2,
    "__typename"
  >[];
  addresses?: Omit<ViewerContactInfo_viewer_addresses_Address, "__typename">[];
  addressesV2?: Omit<
    ViewerContactInfo_viewer_addresses_AddressV2,
    "__typename"
  >[];
}



