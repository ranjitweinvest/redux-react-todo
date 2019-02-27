import React, { Component } from 'react'
import { Button, Grid, Row, Col, ButtonToolbar, Modal, Container } from 'react-bootstrap';
export default class ModalEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {     
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, field) {
    let {compType} = this.props;
    let {value, id} = e.target;
    let result = Object.assign({}, {[compType]:{...this.state[compType],[field]:value}});
    this.setState(result);
  }
  handleSubmit = (e) => {
    let {compType} = this.props;
    this.props.handleSubmit(this.state[compType]);
    this.setState({ [compType]: {}});
  }
  
  render() {
    let { fields, compType } = this.props;
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {`Add ${this.props.compType}`}
              </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <form>
              {fields.map((field, index) =>{
                let value = this.state[compType] && this.state[compType][field] ? this.state[compType][field] : "";
                 return (
                  <Row className="show-grid" key={index}>
                  <Col >
                    <code><label htmlFor={field}>{field}</label></code>
                  </Col>
                  <Col >
                    <code><input type="text" id={field} value={value} onChange={(e)=>{this.handleChange(e, field)}} /></code>
                  </Col>
                </Row>
              )})}
            </form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}