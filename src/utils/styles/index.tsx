import styled from 'styled-components';

export const InputField = styled.input`
    background: inherit; // inherit parent color
    outline: none;
    border: none;
    color: #fff;
    font-family: 'Inter';
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin:4px 0;
`;

export const InputContainer = styled.div`
    background-color: #131313;
    padding: 12px 16px;
    border-radius: 10px;
    box-sizing: border-box;
    width: 100%;
`;

export const InputLabel = styled.label`
    display: block;
    color: #8f8f8f;
    font-size: 12px;
    margin:4px 0;
`;

export const Button = styled.button`
    width: 100%;
    color: #fff;
    background-color:#2b09ff;
    outline: none;
    border: none;
    font-family: 'Inter';
    font-size: 16px;
    border-radius: 10px;
    padding: 25px;
    font-weight: 500;
    transition: 250ms background-color ease;
    &:hover {
        cursor: pointer;
        background-color: #3415ff;
    }
    &:active {
        background-color: #3a1cff;
    }
`;

export const Page = styled.div`
    height: 100%;
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
`;