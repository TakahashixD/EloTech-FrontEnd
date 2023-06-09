import styled from 'styled-components'

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 11px;
width: 400px;
height: 400px;
border-radius: 0px;
box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 0px;
padding: 2;
.a:hover {
  background-color: red;
  transform: scale(1);
}
`;

export const Table = styled.table`
border-collapse: collapse;
th, td {
	border: 1px solid black;
	padding: 8px;
    text-align: center;
}

thead th {
  width: 25%;
}
`;



