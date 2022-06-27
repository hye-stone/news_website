import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const GetAPI = (): ReactElement => {
    const [data, setData] = useState([]);
    const [dataTechnology, setDataTechnology] = useState([]);
    const baseURL = "https://saurav.tech/NewsAPI/";
    const headlineApi = baseURL + "/top-headlines/category/technology/in.json";
    const everythingApi = baseURL + "/everything/cnn.json";

    const fetchData = useCallback(async () => {
        await axios.get(everythingApi)
            .then((result) => {
                if (result.data.status === 'ok') {//만약 data에 status가 ok이면 
                    setData(result.data.articles);//setData에 data에 articles 넣기
                }
            });
    }, [setData, everythingApi]);

    useEffect(() => {
        if (data.length === 0) {
            // console.log(data);
            fetchData();
        }
    }, [fetchData, data]);

    //테크에 관한 뉴스 가져오기 (65개 data)
    const fetchData1 = useCallback(async () => {
        await axios.get(headlineApi)
        .then((result) => {
                // console.log(result);
                if(result.data.status === 'ok') {
                    setDataTechnology(result.data.articles);
                }
            });
    }, [setDataTechnology, headlineApi]);

    useEffect(() => {
        if (dataTechnology.length === 0) {
            console.log(dataTechnology);
            fetchData1();
        }
    }, [fetchData1, dataTechnology]);

    return { data, dataTechnology };
};
export default GetAPI;