import styled from "styled-components"

export const BookDisplay = styled.div`
    padding: 0px 200px 50px 200px;
    display: grid;
    grid-gap: 120px;
    margin-top: 125px;
    max-width: 100vw;
    @media (min-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const DisplayOptions = styled.div`
    margin-bottom: -50px;
    margin-top: 100px;
    margin-left: 200px;
    span {
        font-size: 18px;
        color: var(--night);
        font-family: var(--txt-font);
        padding: 15px;
        &:hover {
            font-style: italic;
            opacity: 0.7;
            color: var(--flora);
            background: var(--white);
            cursor: crosshair;
        }
    }
`