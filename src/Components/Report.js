

import { Input, initMDB } from "mdb-ui-kit";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import CategoryService from "../Services/category_service";
import ProductService from "../Services/product_service";
import "./styles.css";
import { DateRangePicker } from 'rsuite';
import './rsuite-default.css'; /* Adjust the path as needed */






export default function Report() {
  const [categories, setCategories] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [showYearCalendar, setShowYearCalendar] = useState(false);
  const [showMonthCalendar, setShowMonthCalendar] = useState(false);


  useEffect(() => {

    const fetchCategories = async () => {
      const fetchedCategories = await CategoryService.getAllCategories();
      setCategories(fetchedCategories);
    };

    fetchCategories();

    const fetchSalesData = async () => {
      try {
        // Fetch sales data from ProductService or your backend
        const data = await ProductService.getSalesData(); // Adjust this method according to your backend API
        setSalesData(data);
      } catch (error) {
        console.error("Error fetching sales data: ", error);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div className="Align">
      <Container style={{ paddingTop: "40px" }}>
        <Row>
          <Col sm={2}></Col>
          <Container>
            <Row>
              <Col sm={2}></Col>
              <Col sm={5}>
              <div className="dates">
              <h1>Sales Report</h1>
                <br></br>
                <DateRangePicker
                  size="lg"
                  placeholder="Select Year"
                  style={{ width: 224
                   }}
                  onChange={(value) => console.log(value)} // Handle date range change
                  classPrefix="rs-"
                  className="date-range-picker"
                  onOpen={() => setShowYearCalendar(true)}
                    onClose={() => setShowYearCalendar(false)}
                    open={showYearCalendar}
                />
                <br></br>
                <DateRangePicker
                  size="lg"
                  placeholder="Select Month"
                  style={{ width: 224 }}
                  onChange={(value) => console.log(value)} // Handle date range change
                  classPrefix="rs-"
                  className="date-range-picker"
                  onOpen={() => setShowMonthCalendar(true)}
                    onClose={() => setShowMonthCalendar(false)}
                    open={showMonthCalendar}
                />
                </div>

                <br></br>
                <br></br>

                <Button
                  variant="primary"
                  style={{
                    background: "#371562",
                    position: "absolute",
                    color: "white",
                    transform: "translateY(-50%)",
                    width: "160px",
                    height: "50px",
                    fontSize: "15px",
                  }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>

          <Col sm={2}></Col>
          <Col sm={10}>
            <br></br>
            <br></br>
            <br></br>
            <Table responsive="xl">
              <thead>
                <tr>
                  <th className="fs-5">Product Name</th>
                  <th className="fs-5">Description</th>
                  <th className="fs-5">Category</th>
                  <th className="fs-5">Price</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((item, index) => (
                  <tr key={index}>
                    <td className="fs-5">{item.productName}</td>
                    <td className="fs-5">{item.description}</td>
                    <td className="fs-5">{item.category}</td>
                    <td className="fs-5">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

