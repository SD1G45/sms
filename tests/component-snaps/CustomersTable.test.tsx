import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import CustomersTable from "../../components/CustomersTable";
import sampleData from "../../sampleData/sampleData";

const data: string[][] =  [
  [
    "List 1",
    "Description of List 1",
    "69 total customers"
  ],
  [
    "List 2", 
    "Description of List 2",
    "42 total customers"
  ],
];

const ids: string[] = [
  "sample-id-for-list-1",
  "sample-id-for-list-2"
]

describe("<CustomersTable/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <CustomersTable data={data} ids={ids} view={false}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});