import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100vw
button {
    position: initial;
    width: 100%;
    margin-top: 32px;
    
}

button:hover {
    background-color: #3a44f8;
    transform: scale(1);
}
`;


export const CardGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 16px;
`;
