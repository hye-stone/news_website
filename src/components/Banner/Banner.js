import React from 'react';
import './Banner.scss';
// import './BannerWork';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import GetAPI from '../GetApi';
const Banner = () => {
    const { dataTechnology } = GetAPI();
    // const dataTech = dataTechnology.slice(0,3);
    // console.log(dataEntertainment);
    return (
        <div className='bannerWrap'>
            <div className='container'>
                <div className='bannerHeader'>
                    <h2 className='bannerTitle'>In Case You Missed It<span className='bannerSpan'>&nbsp;</span></h2>
                </div>
                <div className='bannerBox'>
                    <div className='bannerImg'>
                        {dataTechnology &&
                            <div className='bannerUl'>
                                <div className='bannerLi'><img src={dataTechnology[0].urlToImage} alt='techImg'/></div>
                                <div className='bannerLi'><img src={dataTechnology[1].urlToImage} alt='techImg'/></div>
                                <div className='bannerLi'><img src={dataTechnology[2].urlToImage} alt='techImg'/></div>
                                <div className='bannerLi'><img src={dataTechnology[3].urlToImage} alt='techImg'/></div>
                            </div>
                        }
                    </div>
                    <div className='bannerBtns'>
                        <div className='prevBtn'><MdNavigateBefore /></div>
                        <div className='nextBtn'><MdNavigateNext /></div>
                    </div>
                    {dataTechnology &&
                        <div className='bannerImgBtns'>
                            <div className='imgBtn'><img src={dataTechnology[0].urlToImage} alt='techImg' /></div>
                            <div className='imgBtn'><img src={dataTechnology[1].urlToImage} alt='techImg' /></div>
                            <div className='imgBtn'><img src={dataTechnology[2].urlToImage} alt='techImg' /></div>
                            <div className='imgBtn'><img src={dataTechnology[3].urlToImage} alt='techImg' /></div>
                        </div>
                    }
                </div>
                <div className='bannerText'></div>
            </div>
        </div>
    );
};

export default Banner;
