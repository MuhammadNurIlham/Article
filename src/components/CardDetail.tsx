import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card } from 'antd';
import './CardArticle.css';

const { Meta } = Card;

export interface detailType {
    author: string;
    title: string;
    url: string;
    urlToImage: string;
    content: string;
};

const CardDetail: React.FC = () => {
    const [detail, setDetail] = useState<detailType[]>([]);

    const getArticleByAuthor = async (author: string) => {
        try {

            const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a757ca8717864d5395200a9d8baab1cb");
            setDetail(response.data.articles);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArticleByAuthor("techcrunch");
    }, []);

    return (
        <>
            {detail.map((item, index) => (
                <Card
                    hoverable
                    style={{ width: '80%' }}
                    cover={<img alt={item?.title} src={item?.urlToImage} />}
                >
                    <Meta title={item?.title} description={item?.content} />
                </Card>
            ))};

        </>
    )
};

export default CardDetail;