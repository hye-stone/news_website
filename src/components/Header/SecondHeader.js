import React from 'react';
import './SecondHeader.css';

const SecondHeader = () => {
    return (
        <div className='container'>
            <section>
                <div className='secondNavContainer'>
                    <div className='secondNav'>
                        <ul className='secondUl'>
                            <li><h3><a href='#void'><span className='fontColor'>PODCAST: </span><span>Tug of war</span></a></h3></li>
                            <li><h3><a href='#void'><span className='fontColor'>UKRAINE-RUSSIA: </span><span>In photos</span></a></h3></li>
                            <li><h3><a href='#void'><span>Analysis: </span><span>Ukrainians disrupt Russian offensive</span></a></h3></li>
                            <li><h3><a href='#void'><span>Biden and Putin's rivalry intensifies</span></a></h3></li>
                            <li><h3><a href='#void'><span>Help Ukraine</span></a></h3></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecondHeader;
