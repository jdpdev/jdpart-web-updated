import React from 'react';
import { usePortfolioStore } from './usePortfolioStore';
import { Helmet } from "react-helmet";

import './Events.css';

export function Events() {
    const events = usePortfolioStore((state) => state.events);

    if (events.length === 0) {
        return null;
    }

    const stores = events.filter(e => e.type === 'store')
    const markets = events.filter(e => e.type === 'event')

    return (
        <div className='events-page'>
            <h4>Galleries and Stores</h4>
            <div className='event-list'>
                {
                    stores.length === 0 &&
                    <i>nothing scheduled right now, more coming soon</i>
                }
                { 
                    stores.map(e => <EventItem event={e} key={e.name} />)
                }
            </div>

            <h4>Upcoming Events</h4>
            <div className='event-list'>
                {
                    markets.length === 0 &&
                    <i>nothing scheduled right now, more coming soon</i>
                }
                { 
                    markets.map(e => <EventItem event={e} key={e.name} />)
                }
            </div>
        </div>
    )
}

function EventItem({ event }) {
    return (
        <div className="event-item">
            <Helmet>
                <title>upcoming events | printmaking | jason dupertuis</title>
            </Helmet>
            <h4>{ event.name }</h4>
            <blockquote>
                { event.location }<br/>
                { event.datetime && event.datetime !== "" && <>{ event.datetime }<br/></> }
                { 
                    event.url && event.url !== "" && 
                    <a href={event.url} target="_blank" rel="noopener noreferrer">See More</a> 
                }
            </blockquote>
        </div>
    )
}