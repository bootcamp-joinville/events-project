import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './EventListItemModal.css';

class EventListItem extends Component {
  render() {
    return (
      <Modal isOpen={this.props.modalState} toggle={this.props.toggleFn} contentClassName="modal-content">
        <ModalHeader toggle={this.props.toggleFn}>
          <img className="modal-title_image rounded-circle" src={this.props.image} alt={this.props.title} /> 
          {this.props.title}
        </ModalHeader>
        
        <ModalBody>{this.props.description}</ModalBody>

        <ModalFooter>
          <div className="d-flex justify-content-between modal-footer_container">
            <div>
              <dl>
                <dt>When:</dt>
                <dd>{this.props.date}</dd>

                <dt>Location:</dt>
                <dd>{this.props.location}</dd>
              </dl>
            </div>
            <Button color="primary">Buy Tickets!</Button>
          </div>
        </ModalFooter>
      </Modal>      
    );
  }
}

export default EventListItem;
