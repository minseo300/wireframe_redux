import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import Axios from 'axios';
import Button from "../button/Button";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import member, { setMember,manageSurvey,goCommunity } from '../../modules/header';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;
const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const Text = styled.p`
    font-size: 20px;
    line-height: 10px;
    white-space: pre-wrap;
`;
function Header(){
    console.log('[Header]');
    const member=useSelector(state=>state.member);
    const navigate = useNavigate();
    const Dispatch=useDispatch();
    const [name,setName]=useState("");
    return(
        <Wrapper>
        <Container>
            <Text onClick={()=>
                {
                    console.log('clicked comfy');
                    const res=Dispatch(goCommunity());
                }}>Comfy</Text>
            <MainTitleText>Header</MainTitleText>
            <Button
                title="+"
                onClick={()=>{
                        // var data={
                        //     name:
                        // }
                        console.log('clicked +');
                        const res=Dispatch(manageSurvey());
                        //const res=Dispatch(setMember(data));
                        //console.log('res',res);
                       // navigate('/chatrooms');           
                }}
            />
            <Button
                title="sign in"
                onClick={()=>{
                        var data={
                            name:'member1'
                        }
                        console.log('clicked [sign in]');
                        const res=Dispatch(setMember(data));
                        console.log('res',res);
                       // navigate('/chatrooms');           
                }}
            />
        </Container>
    </Wrapper>

        
    )
}

export default Header;