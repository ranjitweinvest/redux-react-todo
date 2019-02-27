import React, { Component } from 'react'
import ModalEmployee from '../ReusableComponents/ModalEmployee';
import { Button, ButtonToolbar } from 'react-bootstrap';

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
    this.modalClose = this.modalClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  modalClose(){
    this.setState({ modalShow: false });
  }

  handleSubmit(data){
    this.props.addEmployee(data);
    this.modalClose();
  }

  render() {
    let { fields, compType } = this.props;
    return (
      <div className="float-md-right">
        <ButtonToolbar >
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            {`Add ${compType}`}
          </Button>
          <ModalEmployee fields={fields}
            show={this.state.modalShow}
            onHide={this.modalClose}
            states={this.state}
            compType={compType}
            handleSubmit={(data)=>{this.handleSubmit(data)}} />
        </ButtonToolbar>
      </div>
    );
  }
}
