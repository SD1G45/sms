import React from "react";
import SideNav from "../../components/SideNav";
import TextField from "../../components/TextField";
import MultiSelector from "../../components/MultiSelector";
import Button from "../../components/Button";
import { useState } from "react";
import { CREATE_KEYWORD_MUTATION } from "../../page-mutations/create-keyword";
import { useMutation } from "@apollo/client";
import { ContainerDiv, MiddleDiv, MainHeader, SubHeader, SmallHeader } from "../../page-styles/create-keywords/styles";

const CreateKeyWord = () => {
    const list: string[] = ["Analytics", "Create new", "FAQ"];
    const routes: string[] = ["/coupons", "/create-keywords", "/faq-keywords"];
    const [ description, setDescription ] = useState("");
    const [ keyword, setKeyword] = useState("");

    const [createKeywordMutation] = useMutation(CREATE_KEYWORD_MUTATION, {
        errorPolicy: "all",
    });

    const onCreate = async() => {
        if (description.length === 0 || keyword.length === 0) {
            alert("One of the fields is empty");
            return;
        }

        try {
            const { data, errors } = await createKeywordMutation({
                variables: {
                    description,
                    keyword
                }
            });
            alert("success");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <ContainerDiv>
        <SideNav items={list} routes={routes} heading={"Keywords"}/>
        <MiddleDiv>
            <MainHeader>Create new keyword</MainHeader>
            <SubHeader>Information</SubHeader>
            <SmallHeader>Message</SmallHeader>
            <TextField value={description} onChange={(x: React.ChangeEvent<HTMLInputElement>) => setDescription(x.target.value)}/>
            <SmallHeader>Coupon</SmallHeader>
            <TextField value={keyword} onChange={(x: React.ChangeEvent<HTMLInputElement>) => setKeyword(x.target.value)}/>
            <MultiSelector searchValue="" onSearchValueChange={() => {}} selectedOptions={[{name: "option", id: "id"}]}
            onSelect={() => {}} onRemove={() => {}} options={[{name: "option", id: "id"},{name: "Main List", id: "ID"}]}/>
            <br/>
            <Button onClick={() => onCreate()}>Create keyword</Button>
        </MiddleDiv>
    </ContainerDiv>
    );
}

export default CreateKeyWord;