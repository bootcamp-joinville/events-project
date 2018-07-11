import React, { Component } from 'react';
import './EventList.css';

import EventListItem from './EventListItem.js';

class EventList extends Component {
  render() {
    return (
      <ul className="d-flex flex-wrap justify-content-center event-list">
        <EventListItem 
          source="Meetup"
          title="Evento 1" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, dolor vitae hendrerit rhoncus, lorem lorem suscipit ante, ac euismod mi augue nec ex."
          image="https://static.memrise.com/img/400sqf/from/uploads/course_photos/3146044000171223183557.png"
          location="Rua das Bananas, 1111 - Joinville - SC"
          date="31/01/2019" />

        <EventListItem 
          source="Meetup"
          title="Evento 2" 
          description="Aenean finibus urna eu bibendum rhoncus. Etiam gravida leo risus, et pharetra justo gravida ut."
          image="https://static.memrise.com/img/400sqf/from/uploads/course_photos/3146044000171223183557.png"
          location="Rua das Bananas, 1111 - Joinville - SC"
          date="31/01/2019"/>
        
        <EventListItem 
          source="Meetup"
          title="Evento 3" 
          description="Sed a commodo nibh. Donec tristique egestas orci ut sollicitudin."
          image="https://static.memrise.com/img/400sqf/from/uploads/course_photos/3146044000171223183557.png"
          location="Rua das Bananas, 1111 - Joinville - SC"
          date="31/01/2019"/>
        
        <EventListItem 
          source="Meetup"
          title="Evento 4" 
          description="Suspendisse facilisis accumsan ipsum, sed egestas erat maximus eu. Sed lectus neque, eleifend ut tortor sit amet, pretium vestibulum metus."
          image="https://static.memrise.com/img/400sqf/from/uploads/course_photos/3146044000171223183557.png"
          location="Rua das Bananas, 1111 - Joinville - SC"
          date="31/01/2019"/>
        
        <EventListItem 
          source="Meetup"
          title="Evento 5" 
          description="Curabitur efficitur fringilla lacus. Sed non venenatis nunc, non imperdiet felis. Etiam hendrerit sapien consequat pulvinar pulvinar."
          image="https://static.memrise.com/img/400sqf/from/uploads/course_photos/3146044000171223183557.png"
          location="Rua das Bananas, 1111 - Joinville - SC"
          date="31/01/2019"/>

      </ul>
    );
  }
}

export default EventList;
