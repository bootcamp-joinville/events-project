import React, { Component } from 'react';
import './EventListItem.css'

class EventListItem extends Component {
  render() {
    return (
      <div className="card event-card">
        <div className="event-card_source">{this.props.source}</div>
        <img className="card-img-top event-card_image" src={this.props.image} alt={this.props.title} />
        <div className="card-body event-card_body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default EventListItem;
