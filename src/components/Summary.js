import React, { PureComponent } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";

export default class Summary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    popupWindow() {
        return (
            <>
                <Modal show={this.state.open} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Order Placed!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thanks for Ordering. You will receive your order in 2-4 business days. Cash On Delivery!</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    onClick() {
        this.setState({ open: true })
    }

    render() {
        const { open } = this.state;
        const result = this.props.ProductsList.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
        const gst = Math.floor(result * 5 / 100);
        return (
            <>
                {
                    open &&
                    this.popupWindow()
                }
                <Row>
                    <Col xs={6}>Subtotal</Col>
                    <Col xs={6}>
                        <strong>&#8377;{result}</strong>
                    </Col>
                </Row>
                <Row style={{ marginTop: 10 }}>
                    <Col xs={6}>GST (5%)</Col>
                    <Col xs={6}>
                        <strong> &#8377;{gst}</strong>
                    </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <Col xs={6}>
                        <h3>Total:</h3>
                    </Col>
                    <Col xs={6}>
                        <h3>&#8377;{result + gst}</h3>
                    </Col>
                </Row>
                <Row style={{ marginTop: 10 }}>
                    <Col xs={6}>Payment mode: </Col>
                    <Col xs={6}>
                        COD <input type="checkbox" defaultChecked={true} />
                    </Col>
                </Row>
                <Row style={{ marginTop: 10 }}>
                    <Col xs={12}>
                        <Button style={{ width: '100%' }} onClick={() => this.onClick()}>Payment</Button>
                    </Col>
                </Row>
            </>
        );
    }
}