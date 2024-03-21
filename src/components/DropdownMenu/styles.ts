import styled from "styled-components";


export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    top: 20%;
    transform: translateY(-50%);
    left: 20px;
`;

export const SelectContainer = styled.select`
    background: ${props => props.theme["brown-100"]};
    padding: 0.5rem 0 0.5rem;
    color: ${props => props.theme["red-300"]};
    font-weight: bold;
    font-size: 1rem;
    border:0px;
    outline:0px;
    position: fixed;
    top: 20px;
    left: 20px;
    border-radius: 10px;

    option {
        background-color: ${props => props.theme["brown-100"]}; 
    }
`