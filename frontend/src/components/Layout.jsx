import styled, { css } from "styled-components";
import { device } from "../breakpoints";
import { Colors } from "../colors";

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 3vh auto-fit 5vh;
    row-gap: 1rem;
    height: auto;
    padding: 1rem;
    background-color: ${props => props.theme.colors.White};
    border-radius: 5px;
    margin-bottom: 1.2rem;
    box-shadow: 5px 5px 20px ${props => props.theme.colors.LightGray};

    p {
    color: ${props => props.theme.colors.GrayishBlue};
    font-weight: 500;
    }

    @media ${device.mobileM}{
    max-width: 100%;
    }
`


export const ContentBox = styled.div`
  height: auto;
  width: 100%;
  color: ${props => props.theme.colors.GrayishBlue};
  line-height: 154.5%;
  letter-spacing: -.1px;
  grid-row: 2 / 3;
  grid-column: 1 / 3;
`


const FormContent = styled.textarea`
    width: 100%;
    padding: .75rem 1rem;
    min-height: 10.25rem;
    color: ${props => props.theme.colors.GrayishBlue};
    border: 1px solid ${props => props.theme.colors.LightGray};
    font-family: Rubik;
    font-size: 16px;
    resize: vertical;
`


export const CreateForm = styled(FormContent)`
    grid-row: 1 / 3;
    grid-column: 1 / 3;
`


export const EditForm = styled(FormContent)`
    grid-row: 2 / 3;
    grid-column: 1 / 3;
`

export const ReplyingTo = styled.h4`
    display: inline-block;
    margin-right: 0.3rem;
    color: ${props => props.theme.colors.ModerateBlue};
`


export const YouTag = styled.span`
    font-size: 14px;
    margin-left: .5rem;
    padding: 0 .5rem;
    padding-bottom: .2rem;
    border-radius: 3px;
    color: ${props => props.theme.colors.White};
    background-color: ${props => props.theme.colors.ModerateBlue};
`

export const Image = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`


export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    padding: .8rem 1rem;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;

    ${props => props && css`
        background-color: ${props => props.blue ? props => props.theme.colors.ModerateBlue : props => props.theme.colors.SoftRed};
        color: ${ Colors.White };
    `};

    &:hover {
    background-color: ${props => props.blue ? props => props.theme.colors.LightGrayishBlue : props => props.theme.colors.PaleRed};
    cursor: pointer;
  }
`

// Buld he reply card and container
export const ReplyList = styled.ul`
    list-style: none;
    position: relative;
    padding-left: 1rem;

    &:before {
        content: "";
        display: inline-block;
        width: 0.0625rem;
        background-color: ${props => props.theme.colors.LightGray};
        position: absolute;
        left: 0.188rem;
        top: 0;
        height: calc(100% - 0.625rem);
    }

    li {
        position: relative;
    }
`