import React, { PureComponent } from "react";
import { Row, Col, Media } from "react-bootstrap";

const styles = {
  item: {
    border: "1px solid black",
    backgroundColor: "#f5f5f5"
  }
};

export default class ItemDetails extends PureComponent {  
  render() {
    const item = this.props.item;
    return (
      <>
        <Media className={styles.item}>
          <img
            width={100}
            height={100}
            className="align-self-center mr-3"
            src={item.image}
            alt="Generic placeholder"
          />
          <Media.Body className={styles.mediaBody}>
            <p>{item.title}</p>
            <Row>
              <Col xs={12}>
                <p>
                  Price: &#8377;{parseInt(item.price) * parseInt(item.quantity)}
                </p>
              </Col>
              <Col xs={12}>
                <p>Quantity: {item.quantity}</p>
              </Col>
            </Row>
          </Media.Body>
        </Media>
      </>
    );
  }
}
