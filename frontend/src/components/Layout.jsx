import styled, { css } from "styled-components";
import { device } from "../breakpoints";
import { Colors } from "../colors";

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 15% auto 15%;
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
  /* min-height: 6rem; */
  width: 100%;
  grid-row: 2 / 3;
  grid-column: 1 / 3;

  &:focus {
    padding: 1rem;
    width: 100%;
  }
`


export const ReplyingTo = styled.h4`
    color: ${props => props.theme.colors.ModerateBlue};
`


export const YouTag = styled.span`
    font-size: 12px;
    margin-left: .5rem;
    padding: 0 .5rem;
    padding-bottom: .2rem;
    border-radius: 3px;
    color: ${props => props.theme.colors.White};
    background-color: ${props => props.theme.colors.ModerateBlue};
`





export const FormContent = styled.textarea`
    width: 100%;
    padding: .75rem 1rem;
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    min-height: 10.25rem;
    color: ${props => props.theme.colors.GrayishBlue};
    font-family: Rubik;
    font-size: 16px;
    margin-bottom: 1.2rem;
    resize: vertical;
`

export const Image = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`


export const ButtonWrapper = styled.div`
    position: absolute;
    padding: inherit;
    bottom: 0;
    right: 0;
`


export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    padding: .8rem 1.5rem;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;

    ${props => props.blue && css`
        background-color: ${ Colors.ModerateBlue };
        color: ${ Colors.White };
    `};

    ${ props => props.red && css`
        background-color: ${ Colors.SoftRed };
        color: ${ Colors.White };
    `}
`