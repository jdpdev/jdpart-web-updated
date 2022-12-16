import React from 'react';
import { Helmet } from "react-helmet";
import './Contact.css';

export function Contact() {
    return (
        <div className='contact-page'>
            <Helmet>
                <title>contact | printmaking | jason dupertuis</title>
            </Helmet>
            <div>
                <h4>Contact Information</h4>
                <blockquote>
                    <p>
                        <b>Email</b> <a href="mailto:jason@jdpprintmaking.com">jason@jdpprintmaking.com</a>
                    </p>
                    <p>
                        Direct Message on <b>Instagram</b> <a href="https://www.instagram.com/jdpdraws/">@jdpdraws</a>
                    </p>
                    <p>
                        Direct Message on <b>Etsy</b> <a href="https://www.etsy.com/shop/jdpdraws">@jdpdraws</a>
                    </p>
                </blockquote>
            </div>

            <div>
                <h4>Newsletter</h4>

                <blockquote>
                    <a 
                        href="https://squareup.com/outreach/92tsCo/subscribe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Sign up for my newsletter</a> to keep up-to-date on what's going on.
                </blockquote>
            </div>
        </div>
    )
}