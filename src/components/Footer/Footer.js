import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='searchCon grid container'>
                <div className='searchGrid'>
                    <form>
                        <input type="search" autoComplete="off" name="quickSearch" placeholder="Search CNN..." />
                        <button className='searchButton'>
                            <div className='SearchText'>Search</div>
                            <div className='svgBox'><svg className="arrow-right-10-icon" style={{ outline: 0 }} width={10} height={10} viewBox="0 0 20 20" fill="#4D4D4D" tabIndex={-1} focusable="false" xmlns="https://www.w3.org/2000/svg" aria-hidden="true"><path d="M1.53,8.52H14.76L10,3.71a1.5,1.5,0,0,1,2.12-2.12l7.44,7.47a1.49,1.49,0,0,1,0,2.12l-7.44,7.47a1.5,1.5,0,0,1-2.12,0,1.51,1.51,0,0,1,0-2.12l5-5H1.53a1.5,1.5,0,1,1,0-3Z" /></svg></div>
                        </button>
                    </form>
                </div>
            </div>
            <div className='footerCon grid container'>
                <div className='footerMenuCon'>
                    <div className='footBox'>
                        <nav className='footNav'>
                            <ul className='footMenuHole'>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>World</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Africa</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Americas</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Asia</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Australia</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>China</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Europe</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>India</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Middle East</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>United Kingdom</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>US Politics</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>The Biden Presidency</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Facts First</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>US Elections</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Business</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Markets</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Tech</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Media</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Success</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Perspectives</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Videos</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Health</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Life, But Better</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Fitness</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Food</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Sleep</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Mindfulness</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Relationships</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Entertainment</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Stars</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Screen</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Binge</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Culture</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Media</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Tech</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Innovate</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Gadget</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Foreseeable Future</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Mission: Ahead</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Upstarts</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Work Transformed</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Innovative Cities</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Style</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Arts</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Design</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Fashion</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Architecture</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Luxury</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Beauty</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Video</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Travel</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Destinations</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Food and Drink</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Stay</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>News</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Videos</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Sports</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Football</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Tennis</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Golf</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Olympics</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>US Sports</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Climbing</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Motorsport</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Esports</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Videos</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Live TV</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Digital Studios</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>CNN Films</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>HLN</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>TV Schedule</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>TV Shows A-Z</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>CNNVR</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Features</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>As Equals</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Call to Earth</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Freedom Project</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Impact Your World</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Inside Africa</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>2 Degrees</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>CNN Heroes</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>All Features</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>Weather</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Climate</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Storm Tracker</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Wildfire Tracker</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Video</a></li>
                                    </ul>
                                </li>
                                <li className='footMenu'>
                                    <a className='footMenuText' href='#void'>More</a>
                                    <ul className='footUl'>
                                        <li className='footLi'><a className='footA' href='#void'>Photos</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Longform</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Investigations</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>CNN Profiles</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>CNN Leadership</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>CNN Newsletters</a></li>
                                        <li className='footLi'><a className='footA' href='#void'>Work for CNN</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='footerCon grid container'>
                <div className='searchGrid footerMenuCon'>
                    <div className='snsContainer'>
                        <div className='snsBox'>
                            <div className='snsCnnLogo'>
                                <a href='#void'>
                                    <svg className="cnn-badge-icon" style={{ outline: 0 }} width={40} height={40} viewBox="0 0 240 240" fill="#CC0000" xmlns="https://www.w3.org/2000/svg" aria-hidden="true"><rect x={0} y={0} width="100%" height="100%" fill="#fff" /><path d="M.31-.07v240h240V-.07ZM86.54,135.29V92.51c0-16.1,20.81-23.83,31.82-5.12.8,1.35,18.14,31.22,18.14,31.22V92.51c0-16.1,20.8-23.83,31.81-5.12.8,1.35,18.14,31.22,18.14,31.22V76.79h10.38V147a2.11,2.11,0,0,1-1.51,2.14c-1.1.3-2.26-.38-3.11-1.82-.17-.28-9-15.46-17.48-30.13L159.17,90.4c-2.18-3.7-5.43-4.35-7.74-3.72a6.23,6.23,0,0,0-4.55,6.13V147a2.12,2.12,0,0,1-1.51,2.14c-1.11.3-2.27-.38-3.11-1.82-.15-.25-8.34-14.36-16.25-28-10.08-17.38-16.7-28.78-16.8-28.95-2.18-3.71-5.44-4.35-7.77-3.72a6.24,6.24,0,0,0-4.56,6.13v53.05a2.9,2.9,0,0,1-2.72,2.71H67.23a28.64,28.64,0,0,1,0-57.28h14v10.36H67.35a18.28,18.28,0,1,0,0,36.56H83.68A2.84,2.84,0,0,0,86.54,135.29Zm124.77,12.05c0,16.1-20.81,23.83-31.82,5.13-.79-1.35-18.14-31.23-18.14-31.23v26.1c0,16.1-20.8,23.83-31.81,5.13-.8-1.35-18.14-31.23-18.14-31.23v24.61c0,11.17-6.63,17.22-17,17.22H67.25a43.14,43.14,0,0,1,0-86.28h14V87.15h-14a32.78,32.78,0,1,0,0,65.56H94.16a7,7,0,0,0,6.86-6.85V92.81a2.1,2.1,0,0,1,1.51-2.13c1.1-.3,2.26.38,3.11,1.82l16.79,28.93c9.76,16.83,16.17,27.88,16.25,28,2.19,3.7,5.45,4.35,7.78,3.71A6.22,6.22,0,0,0,151,147V92.82a2.11,2.11,0,0,1,1.49-2.14c1.09-.3,2.24.38,3.08,1.82l15.56,26.81,17.49,30.15c1.71,2.9,4.09,3.93,6.16,3.93a6,6,0,0,0,1.61-.22A6.23,6.23,0,0,0,201,147V76.79h10.34Z" transform="translate(-0.31 0.07)" /></svg>
                                </a>
                            </div>
                        </div>
                        <div className='snsCnn'>
                            <div className='snsIcons'>
                                <span className='follow'>Follow CNN </span>
                                <div className='line'></div>
                                <ul className='icons'>
                                    <li>
                                        <a href="#void" className="aIcon"><svg className="facebook-icon" style={{ outline: 0 }} width={64} height={64} viewBox="0 0 64 64" fill xmlns="https://www.w3.org/2000/svg" aria-hidden="true"><path d="M56,5.1H8c-1.6,0-3,1.4-3,3v48.8c0,1.7,1.3,3,3,3h25.9V38.7h-7v-8.3h7v-6.1 c0-7.1,4.3-10.9,10.5-10.9c3,0,5.9,0.2,6.7,0.3v7.7h-4.7c-3.4,0-4.1,1.6-4.1,4v5h8.1l-1,8.3h-7v21.2H56c1.6,0,3-1.4,3-3V8.1 C59,6.4,57.7,5.1,56,5.1" /></svg></a>
                                    </li>
                                    <li>
                                        <a href="#void" className='aIcon'><svg className="twitter-icon" style={{ outline: 0 }} width={64} height={64} viewBox="0 0 64 64" fill xmlns="https://www.w3.org/2000/svg" aria-hidden="true"><path d="M60,15.2c-2.1,0.9-4.3,1.5-6.6,1.7c2.4-1.4,4.2-3.6,5.1-6.1c-2.2,1.3-4.7,2.2-7.3,2.7 c-2.1-2.2-5.1-3.5-8.4-3.5c-6.3,0-11.5,5-11.5,11.1c0,0.9,0.1,1.7,0.3,2.5C22,23.2,13.6,18.8,7.9,12c-1,1.6-1.6,3.5-1.6,5.6 c0,3.9,2,7.3,5.1,9.2c-1.9-0.1-3.7-0.6-5.2-1.4v0.1c0,5.4,4,9.9,9.2,10.9c-1,0.3-2,0.4-3,0.4c-0.7,0-1.5-0.1-2.2-0.2 c1.5,4.4,5.7,7.6,10.7,7.7c-3.9,3-8.9,4.8-14.3,4.8c-0.9,0-1.8-0.1-2.7-0.2c5.1,3.2,11.1,5,17.6,5c21.1,0,32.7-16.9,32.7-31.6 c0-0.5,0-1,0-1.4C56.5,19.4,58.5,17.4,60,15.2" /></svg></a>
                                    </li>
                                    <li>
                                        <a href="#void" className='aIcon'><svg className="instagram-icon" style={{ outline: 0 }} width={64} height={64} viewBox="0 0 64 64" fill xmlns="https://www.w3.org/2000/svg" aria-hidden="true"><path d="M47,13.2c-1.9,0-3.5,1.6-3.5,3.6s1.6,3.6,3.5,3.6s3.5-1.6,3.5-3.6S49,13.2,47,13.2 L47,13.2z M31.9,23c-5.1,0-9.3,4.3-9.3,9.5s4.2,9.5,9.3,9.5s9.3-4.3,9.3-9.5S37,23,31.9,23L31.9,23z M31.9,46.7 c-7.7,0-14-6.4-14-14.2s6.3-14.2,14-14.2s14,6.4,14,14.2S39.6,46.7,31.9,46.7L31.9,46.7z M15.7,8.8c-3.9,0-7,3.2-7,7.1v33.2 c0,3.9,3.1,7.1,7,7.1h32.7c3.9,0,7-3.2,7-7.1V15.9c0-3.9-3.1-7.1-7-7.1C48.4,8.8,15.7,8.8,15.7,8.8z M48.3,60.9H15.7 C9.2,60.9,4,55.6,4,49.1V15.9C4,9.4,9.2,4.1,15.7,4.1h32.7C54.8,4.1,60,9.4,60,15.9v33.2C60,55.6,54.8,60.9,48.3,60.9L48.3,60.9z" /></svg></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerCon grid container'>
                <div className='footerMenuCon'> 
                    <div className='cnnInfo'>
                        <div className='upLine'><hr className='upLineD' /></div>
                    </div>
                    <div className='cnnInfoMenu'>
                        <nav className='footNav'>
                            <ul className='cnnMenuUl'>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>Terms of Use</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>Privacy Policy</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>Accessibility & CC</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>Ad Choices</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>About Us</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>Modern Slavery Act Statement</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>Advertise with us</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>CNN Store</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>Newsletters</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>Transcripts</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>License Footage</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>CNN Newsource</a></li>
                                <li className='cnnMenuLi'><a className='cnnMenuA' href='#void'>Sitemap</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='copyright'>
                        <span>©2022 Cable News Network.</span>
                        <span>A Warner Media Company.</span>
                        <span>All Rights Reserved.</span><br/>
                        <span>CNN Sans ™ & © 2016 Cable News Network.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
