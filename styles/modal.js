import styled from 'styled-components'

export const Overlay = styled.div`
position: fixed;
inset: 0;
background-color: rgba(0,0,0,0.4);
overflow: hidden;
height: 100vh;
width: 100vw;

display: flex;
align-items: center;
justify-content: center;
flex-direction: center;

z-index: 999;
h2 {
    font-size: 15px;
}
input {
    padding: 8px;
    border: 2px solid #c6c5c5c5;
    color: rgba(255, 255, 255, 0.87);
    font-size: 13px;
    line-height: 14px;
    border-radius: 12px;
    width: 100%;

    margin-bottom: 12px;
}
Form {
    width: calc(100% - 24px);
    align-items: center;
}

label {
    color: #242424;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 13px;
}

button {
    position: initial;
    width: 100%;
    margin-top: 32px;
}

button:hover {
    background-color: #3a44f8;
    transform: scale(1);
}
overflow-y: auto
`;

export const Body = styled.div`
background-color: #242424;
padding: 24px;
height: 70%;
width: 70%;
border-radius: 24px;
max-height: 100vh
overflow-y: auto
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;
overflow-y: auto
`;

