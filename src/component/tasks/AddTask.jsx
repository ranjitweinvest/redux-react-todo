import React, { Component } from 'react'
import ModalEmployee from '../ReusableComponents/ModalEmployee';
import {Button, Grid, Row, Col, ButtonToolbar} from 'react-bootstrap';

export default class addEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false 
    };
    this.modalClose = this.modalClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    modalClose() {
      this.setState({ modalShow: false });
    }
  
    handleSubmit(data){
      this.props.addTask(data);
      this.modalClose();
    }
   
  render() {
    let { fields, compType } = this.props;
    let modalClose = () => this.setState({ modalShow: false });
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
                         onHide={modalClose}
                         compType={compType}
                         states={this.state}
                         handleSubmit={(data)=>{this.handleSubmit(data)}} />
        </ButtonToolbar>
      </div>
    );
  }
}
