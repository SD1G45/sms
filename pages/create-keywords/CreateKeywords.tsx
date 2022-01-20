import React from "react";
import SideNav from "../../components/SideNav";
import TextField from "../../components/TextField";
import MultiSelector from "../../components/MultiSelector";
import Button from "../../components/Button";
import { useState } from "react";
import { CREATE_KEYWORD_MUTATION } from "../../page-mutations/create-keyword";
import { useMutation } from "@apollo/client";

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
    <div style={{ display:"flex" }}>
        <SideNav items={list} routes={routes} heading={"Keywords"}/>
        <div style={{ paddingLeft: '50px' }}>
            <h1 style={{ paddingTop: '50px' }}>Create new keyword</h1>
            <h3 style={{ paddingTop: '30px' }} >Information</h3>
            <br/>
            <br/>
            <h4>Message</h4>
            <TextField value={description} onChange={(x: React.ChangeEvent<HTMLInputElement>) => setDescription(x.target.value)}/>
            <br/>
            <h4>Coupon</h4>
            <TextField value={keyword} onChange={(x: React.ChangeEvent<HTMLInputElement>) => setKeyword(x.target.value)}/>
            <br/>
            <MultiSelector searchValue="" onSearchValueChange={() => {}} selectedOptions={[{name: "option", id: "id"}]}
            onSelect={() => {}} onRemove={() => {}} options={[{name: "option", id: "id"},{name: "Main List", id: "ID"}]}/>
            <br/>
            <Button onClick={() => onCreate()}>Create keyword</Button>
        </div>
    </div>
    );
}

export default CreateKeyWord;