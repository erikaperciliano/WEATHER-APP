import styled from "styled-components";

export const TemperatureToggleTitle = styled.h2`
    color: ${props => props.theme["red-300"]};
    padding: 4.5rem 0 0.5rem;
    
`

export const TemperatureDegree = styled.span`
    color: ${props => props.theme["red-300"]};
    padding: 4.5rem 0 0.5rem;
    font-weight: bolder;
    font-size: 1.5rem;
`

export const ToggleButton = styled.button`
    color: ${props => props.theme["red-300"]};
    background: ${props => props.theme["brown-100"]};
    padding: 0.5rem 0.5rem;
    margin-left: 0.5rem;
    font-weight: bolder;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
`