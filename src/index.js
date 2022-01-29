import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import ItemDetails from "./components/ItemDetails";
import Summary from "./components/Summary";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import ProductsList from './data';

function App() {
  return (
    <>
      <Header />
      <div className="purchase-card">
        <Container>
          {ProductsList.map((item) => {
            return (
              <div>
                <ItemDetails item={item} />
                <br />
              </div>
            );
          })}
          <Summary ProductsList={ProductsList} />
        </Container>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
