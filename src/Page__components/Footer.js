import React from 'react';

export function Footer() {
    return(

        <div className="footer">
            <div className="footer__info">
                <div className="footer__first__column footer__column__common">
                    <div className="footer__products">
                        <h1>Products</h1>
                        <ul>
                            <li key='7'>Farm animals</li>
                            <li key='8'>Companion animals</li>
                            <li key='9'>Sanitation</li>
                        </ul>
                    </div>
                    <div className="footer__aboutus">
                        <h1>About Us</h1>
                        <ul>
                            <li key='10'>Esources</li>
                            <li key='11'>Carrier</li>
                            <li key='12'>News</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__second__column footer__column__common">
                    <h1>Contact Us</h1>
                    <ul>
                        <li key='1'><i className="fa fa-home"></i>Alberta Veterinary Laboratories 411 - 19th Street S.E. Calgary, AB, T2E 6J7</li>
                        <li key='2'><i className="fa fa-phone-square"></i>Toll Free: <span>1.877.456.2755</span> </li>
                        <li key='3'><i className="fa fa-phone-square"></i>Telephone: <span>1.403.456.2245</span> </li>
                        <li key='4'><i className="fa fa-phone-square"></i>Facsimile: <span>1.403.207.6074</span> </li>
                        <li key='5'><i className="fa fa-phone-square"></i>Toll Free Facsimile: <span>1.888.620.6074</span> </li>
                        <li key='6'><i className="fa fa-calendar"></i>Business Hours: M-F, 09:00 - 16:30 </li>
                    </ul>
                </div>
                <div className="footer__third__column footer__column__common">
                    <h1 className="none">none</h1>
                    <form action="/action_page.php">
                        <input type="text" placeholder="Name & Surname"/>
                        <input type="email" placeholder="Email address"/>
                        <input type="text" placeholder="Subject"/>
                        <input className='footer__form__message' type="text" placeholder="Your Message"/>
                        <button type='submit'>SEND</button>
                    </form> 
                </div>
            </div>
            <div className="footer__map">
                <iframe title='location' frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=47%C2%B000'03.%2028%C2%B053'01.&key=AIzaSyAeKdt5GLEA2vn9of32sYftX8tQ2tiNIIA" allowFullScreen></iframe>
                <p>COPYRIGHT © 2014 ALBERTA VETERINARY LABORATORIES LTD</p>
            </div>
        </div>
    )
}