import React from 'react';
import classes from './Timeline.module.css';

export function Timeline({ events }) {
  return (
    <div className={classes.timeline}>
      {events.map((event, index) => (
        <div key={index} className={classes.event}>
          <h1 className={classes.header1}>{event.section}</h1>
          <div className={classes.content}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.6em' }}
            >
              <h2 className={classes.header2}>{event.title}</h2>
              <img
                src={event.img}
                alt={event.title}
                className={classes.image}
              />
            </div>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
