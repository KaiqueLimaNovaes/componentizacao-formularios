import styled from 'styled-components';

const Label = styled.label`
    display: block;
`;

const Input = styled.input`
    background-color: white;
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: solid 2px black;
    margin-top: 8px;
`;

export const InputText = () => {
    return(
        <>
        <Label>Nome:</Label>
        <Input type="text" name="nome" />
        </>
    );
}

export default InputText