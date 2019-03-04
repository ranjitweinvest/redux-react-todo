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
  handleOnChange = (e) => {
    let {compType} = this.props;
    let result = Object.assign({}, {[compType]:{...this.state[compType],employeeTask: e.target.value}});
    this.setState(result);
  }
  
  render() {
    let { fields, compType, employee} = this.props;

    employee = (employee && employee.data) ? employee.data : [];

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
                let value = this.state[compType] && this.state[compType][field.name] ? this.state[compType][field.name] : "";
                 return (
                  <Row className="show-grid" key={index}>
                  <Col >
                    <code><label htmlFor={field.name}>{field.name} </label></code>
                  </Col>
                  <Col >
                    <code><input type={field.type} id={field.name} value={value}  onChange={(e)=>{this.handleChange(e, field.name)} } /></code>
                  </Col>
                </Row>
              )})}
              
            {employee.length ? (
            
            <Row className="show-grid" key={'test'}>
            <Col >
              <code><label htmlFor={"test"}>{"test"}</label></code>
            </Col>
            <Col >
              <code><select onChange={this.handleOnChange}>
              <option value="">-Select Employee-</option>
              {
                employee.map((emp) => {
                  let val = [];
                  val.push(emp.name);
                  return (
                    <option value={val}>{val}</option>
                  )
                })
              }</select></code>
            </Col>
          </Row>) : null}  
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