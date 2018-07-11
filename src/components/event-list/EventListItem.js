import React, { Component } from 'react';
import EventListItemModal from './EventListItemModal.js';
import './EventListItem.css';

class EventListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <li className="card event-card" onClick={this.toggleModal}>
        <div className="event-card_source">{this.props.source}</div>

        <img className="card-img-top event-card_image" src={this.props.image} alt={this.props.title} />

        <div className="card-body event-card_body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>

        <EventListItemModal
          title={this.props.title} 
          description={this.props.description}
          image={this.props.image}
          date={this.props.date}
          location={this.props.location}
          modalState={this.state.modal}
          toggleFn={this.toggleModal}
          />

      </li>
      
    );
  }
}

export default EventListItem;
