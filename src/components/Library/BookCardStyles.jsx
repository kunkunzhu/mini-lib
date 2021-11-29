import styled from "styled-components"

export const BookWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    border-radius: 5px;
    min-height: 300px;
    background-color: var(--white);
    text-align: left;
    justify-content: space-between;
    ${props => (props.progress==="🚧") && `
        box-shadow: -4.5px 5.5px var(--sun),
        -4.5px 5.5px 0px 1px var(--white);
    `}
    ${props => (props.progress==="✅") && `
        box-shadow: -4.5px 5.5px var(--lime), 
        -4.5px 5.5px 0px 1px var(--white);
    `}
    ${props => (props.progress==="💡") && `
        box-shadow: -4.5px 5.5px var(--grape), 
        -4.5px 5.5px 0px 1px var(--white);
    `}
`

export const BookInfo = styled.div`
    color: var(--txt-clr);
    .title {
        display: flex;
        font-size: 22px;
        line-height: 1.5;
        letter-spacing: 0.1rem;
    }
    .author {
        opacity: 0.5;
        font-size: 16px;
        font-family: var(--txt-font);
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        background: inherit;
        border: none;
        font-family: var(--txt-font);
        ${props => (props.progress==="🚧") && `
            color: var(--sun);
        `}
        ${props => (props.progress==="✅") && `
            color: var(--lime);
        `}
        ${props => (props.progress==="💡") && `
            color: var(--grape);
        `}
    }
    // .remove {
    //     color: var(--flora);
    // }
    .progress {
        font-size: 14px;
    }
`