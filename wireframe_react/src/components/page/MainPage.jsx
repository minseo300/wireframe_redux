import Axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../button/Button";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import header, { setMember } from '../../modules/header';
import { useSelector } from 'react-redux';

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

function MainPage(props){
    const navigate = useNavigate();
    const Dispatch=useDispatch();
    const [name,setName]=useState("");
    const member=useSelector(state=>state.member);
    console.log("main page");
    return(
        <Wrapper>
            <Text>
                Mainpage
            </Text>
        </Wrapper>
        // <Wrapper>
        //     <Container>
        //         <Text>Comfy</Text>
                
        //         <Button
        //             title="+"
        //             onClick={()=>{
        //                     var data={
        //                         name:name
        //                     }
        //                     console.log('clicked +');
        //                     //const res=Dispatch(setMember(data));
        //                     //console.log('res',res);
        //                    // navigate('/chatrooms');           
        //             }}
        //         />
        //         <Button
        //             title="sign in"
        //             onClick={()=>{
        //                     var data={
        //                         name:name
        //                     }
        //                     console.log('clicked [sign in]');
        //                     const res=Dispatch(setMember(data));
        //                     console.log('res',res);
        //                    // navigate('/chatrooms');           
        //             }}
        //         />
        //     </Container>
        // </Wrapper>
    )
}

export default MainPage;