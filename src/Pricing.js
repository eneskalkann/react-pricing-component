import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
    position : relative;
`

// in the Input style has a -9999px because 'display:none' or other thinks is not working in some cases.
const Input = styled.input`
    position : absolute;
    left: -9999px;
    top : -9999px;

    &:checked + span{
        background-image: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%)) ;
    
        &:before{
            left:27px;
        }
    }
`

const Slide = styled.span`
    display:flex;
    cursor:pointer;
    width:50px;
    height:25px;
    border-radius: 100px;
    background-image: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%)) ;
    position:relative;
    transition: background-color 0.2s;
    margin: 15px auto;

    &:before{
        content:"";
        position : absolute;
        top:2px;
        left:2px;
        width:21px;
        height:21px;
        border-radius:45px;
        transition:0.2s;
        background:#fff;
        box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    }

    &:hover{
        opacity : 0.5;
    }
` 

const Pricing = ({onChange}) => 
    <Wrapper>
        <Input type="checkbox" onChange={onChange} />
        <Slide/>
    </Wrapper>


export default Pricing