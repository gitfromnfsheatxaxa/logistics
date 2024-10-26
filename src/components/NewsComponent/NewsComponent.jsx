import React from 'react';
import styled from "styled-components";

const AdminCom = ({el}) => {
    const imageUrl = `http://127.0.0.1:8090/api/files/${el.collectionId}/${el.id}/${el.image[0]}`;

    return (
        <Container>
            <MainImage key={el?.id}>
                <ImageCard>
                    <img src={imageUrl} alt={el.title} className="news-image"/>
                </ImageCard>
                <TextBox>
                    <ProductTitle>{el?.title}</ProductTitle>
                    <ProductName>{el?.description}</ProductName>
                    <ProductTime>Published {el?.created.slice(0,10)}</ProductTime>
                </TextBox>
            </MainImage>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    margin: auto;
    padding: 20px;
    
`;

const MainImage = styled.div`
    width: 100%;
    border: 1px solid #dfdfdf;
    margin-bottom: 30px;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`;

const ImageCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #dfdfdf;
    overflow: hidden;
    padding: 10px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease-in-out;
    }

    &:hover {
        img {
            transform: scale(1.05);
        }
    }
`;

const TextBox = styled.div`
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 769px) {
        height: auto;
    }
`;

const ProductName = styled.p`

    color: #3c3b6e; /* Dark blue */
    font-size: 18px;
    text-align: left;
    height: auto;
    cursor: pointer;
    margin: 5px 0;
    font-weight: bold;

    @media (max-width: 769px) {
        font-size: 16px;
    }
`;
const ProductTime = styled.p`
    font-size: 0.7rem;
    color: #0A1838;
`
const ProductTitle = styled.h1`
    color: #3c3b6e; /* Dark blue */
`
export default AdminCom;
