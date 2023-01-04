import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Col, Row } from 'antd';
import './CardArticle.css';

const { Meta } = Card;

interface listType {
    author: string;
    title: string;
    url: string;
    urlToImage: string;
    description: string;
    content: string;
};

export interface detailType {
    author: string;
    title: string;
    url: string;
    urlToImage: string;
    content: string;
};

const CardArticle: React.FC = () => {
    const [list, setList] = useState<listType[]>([]);
    const [detail, setDetail] = useState<detailType | null>(null);

    const navigate = useNavigate();

    const toDetailArticle = () => {
        navigate('/detail/:author')
    }

    const getArticle = async () => {
        try {

            const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a757ca8717864d5395200a9d8baab1cb");
            setList(response.data.articles);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArticle();
    }, []);


    return (
        <div className="site-card-wrapper">
            <Row gutter={16} className="card-row">

                {list?.map((article, index) => (
                    <Col span={6} className="card-col" key={index}>
                        <Card
                            hoverable
                            style={{ width: 280 }}
                            cover={<img alt={article?.title} src={article?.urlToImage} />}
                        >
                            <Meta title={article?.author} />
                            <Meta title={article.title} description={article.description.slice(0, 100)} />
                            <p onClick={() => toDetailArticle()}>Read More ...</p>
                        </Card>
                    </Col>
                ))}

            </Row>
        </div>
    )
};

export default CardArticle;