import { css } from "@emotion/core";

export const iconContainer = css`
    display: block;
    position: relative;
    float: right;
    /* right: 10px; */
    /* top: 10px; */
    /* display: none; */
    opacity: 0;
    cursor: pointer;
`

export const taskSlip = css`
                        /* background: yellow; */
                        height: 200px;
                        width: 250px;
                        padding: 10px;
                        margin-top: 20px;
                        margin-right: 30px;
                        border: 1px solid #bbb7b7de;
                        border-radius: 10px;
                        box-shadow: 2px 2px 5px #bbb7b7de;
                        position: relative;
                        .iconContainer {
                           ${iconContainer};
                           i {
                               padding: 5px;
                               span {
                                   display: none;
                               }
                               &:hover {
                                   span{
                                       display: inline-block;
                                   }
                               }
                           }
                        }
                        &:hover {
                            .iconContainer {
                                /* display: block; */
                                opacity: 1;
                                transition: opacity .218s ease-in;
                            }
                        }
                    `

export const taskListContainer = css`
    padding: 40px;
    /* background: ghostwhite; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
        `

export const fieldCont = css`
    input,textarea {
        width: 100%;
        font-size: 14px;
        outline: none;
        border:none;
        padding: 5px;
    }
    input {
        margin-bottom: 10px;
    }
    textarea {
        padding: 5px 0 0px 5px;
    }
`

export const slipCont = css`
    ${fieldCont};
    textarea {
        height: 125px;
    }
`


export const parentInputCont = css`
    width: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid grey;
    font-size: 14px;
    max-height: 600px;
    padding: 5px 0;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149);
    z-index: 2;
`

export const textContainer = css`
    margin-top: 25px;
    height: 80%;
    outline: none;
    font-size: 15px;
    color: #5a5656fa;
`

export const slipContainer = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
`

export const categoryTitle = css`
    font-size: 14px;
    font-weight: normal;
    color: #5f6368;
    text-transform: uppercase;
`

export const categoryContainer = css`
    margin-bottom: 20px;
`
export const buttonCont = css`
    color: rgba(0,0,0,.54);
    display: flex;
    justify-content: flex-end;
`
export const close = css`
    margin-right: 15px;
    padding: 8px 24px;
    color: rgba(0,0,0,0.87);
    box-sizing: border-box;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    /* display:none; */
    &:hover {
        background-color: rgba(95,99,104,0.039)
    }
`
export const backdrop = css`
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    display: none;
    z-index: 1;
    &.show {
        display:block;
    }
`

export const highestDiv = css`
    display: flex;
    justify-content: center;
    padding: 20px;
    width: 100%;
    /* .backdrop {
        ${backdrop};
    } */
`

