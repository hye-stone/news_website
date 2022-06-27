import React, { useEffect, useState } from 'react';
import GetAPI from '../GetApi';
import Section from './Section';
const Data = () => {
    const { data } = GetAPI();//data 100개 가져오기
    //Main Title 0번 data
    const titleData = data[0];
    //Section Image List
    const [imageList, setImageList] = useState({ sectionOneImgList: null, sectionSecondImgList: null, sectionThirdImgList: null });
    // console.log(imageList);
    // image 몇개나올지 하고,  max  중복이 되도 상관없고 

    useEffect(() => {
        const sectionOneImgList = [0];
        const sectionTwoImgList = [0];
        const sectionThreeImgList = [0];
        for (let i = 0; i < 2; i++) {//for문 3개의 번호 random으로 가져오기 
            let randomNum1 = Math.floor(Math.random() * 10);//10개 범위 안에서 3개 랜덤으로 뽑기
            if (sectionOneImgList.indexOf(randomNum1) === -1) {
                sectionOneImgList.push(randomNum1);
            }
            let randomNum2 = Math.floor(Math.random() * 10);//10개 범위 안에서 3개 랜덤으로 뽑기
            if (sectionTwoImgList.indexOf(randomNum2) === -1) {//만약 random의 번호가 있다면 그번호에서 -1 하기 
                sectionTwoImgList.push(randomNum2);
            }
            let randomNum3 = Math.floor(Math.random() * 10);//10개 범위 안에서 3개 랜덤으로 뽑기
            if (sectionThreeImgList.indexOf(randomNum3) === -1) {//만약 random의 번호가 있다면 그번호에서 -1 하기 
                sectionThreeImgList.push(randomNum3);
            }
        }
        setImageList({ sectionOneImgList: sectionOneImgList, sectionTwoImgList: sectionTwoImgList, sectionThreeImgList: sectionThreeImgList });
        // console.log("sectionOneImgList ", sectionOneImgList );
    }, []);

    // Data slice 나누기
    const [eachSectionData, setEachSectionData] = useState([]);
    // console.log("eachSectionData",eachSectionData);
    useEffect(() => {
        let divideData = [];
        let divideDataPerSection = [];
        // console.log(DivideDataPerSection)
        for (let i = 0; i < 90; i += 10) {
            const sectionData = data.slice(i, i + 10);
            divideData.push(sectionData);
        }
        // console.log(sectionData); 
        for (let j = 0; j <= 6; j += 3) {
            const sectionPerData = divideData.slice(j, j + 3);
            divideDataPerSection.push(sectionPerData);
            // console.log(sectionPerData);
        }
        // console.log("DivideDataPerSection", divideDataPerSection);
        setEachSectionData(divideDataPerSection)
    }, [data]);
    // console.log("eachSectionData", eachSectionData);
    return (
        <div className='sectionWrap'>
            {/* {console.log(data)} */}
            <div className='sectionMainTitle'>
                {
                    titleData && <h2 className='theTitle'>{titleData.title}</h2>
                }
            </div>
            {eachSectionData.length > 0 && eachSectionData.map((data, idx) => {
                // console.log("items", data);
                return <div className='eachSectionWrap' key={idx}>
                    {data && imageList && data.map((item, idx) => {
                        // console.log("data", item);
                        return <Section key={idx} data={item} array={imageList.sectionOneImgList} />
                    })}
                </div>
            })
            }
        </div>
    );
};
export default Data;