import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import "./styles.css";
import {
  Button,
  Card,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { fetchRiskTable } from "../../../util/dummyInvestmentPlans";

var _ = require("lodash");
const riskTable = fetchRiskTable();

const Customizer = ({ history }) => {
  const selectedRisk = useSelector((state) => state.risk.value);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const riskData = _.omit(
    riskTable.find((element) => element.Risk === selectedRisk),
    "Risk"
  );

  return (
    <div>
      <h3>Personalized Portfolio</h3>
      <h5>Investment Risk Level {selectedRisk}</h5>
      <Button
        variant="success"
        onClick={() => {
          history.push("/");
        }}
      >
        Back to risk selection
      </Button>

      <Card className="mt-2">
        <Card.Header>Rebalance Your Portfolio</Card.Header>
        <Card.Body>
          <p className="text-muted">
            Please fill in your current investments in order to calculate the
            needed transfers to adapt to your new portfolio
          </p>

          <Form onSubmit={handleSubmit(onSubmit)}>
            {Object.keys(riskData).map((key, index) => {
              return (
                <InvestmentFormRow
                  key={key}
                  withTitle={index === 0}
                  name={key.replace("%", "").trim()}
                  registerHandler={register}
                  difference={undefined}
                  newAmount={undefined}
                />
              );
            })}

            <Button type="submit">Test</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

const InvestmentFormRow = ({
  withTitle,
  name,
  difference,
  newAmount,
  registerHandler,
}) => {
  return (
    <FormGroup>
      <Row>
        <Col>
          {withTitle ? <FormLabel>Current Investment</FormLabel> : null}
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className="input-addon" id="basic-addon1">
                {name}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="number"
              name={name}
              ref={registerHandler}
              defaultValue={0}
              min={0}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col>
          {withTitle ? <FormLabel>Difference</FormLabel> : null}
          <FormControl readOnly value={difference} />
        </Col>
        <Col>
          {withTitle ? <FormLabel>New Investment Amount</FormLabel> : null}
          <FormControl readOnly value={newAmount} />
        </Col>
      </Row>
    </FormGroup>
  );
};

export default withRouter(Customizer);
