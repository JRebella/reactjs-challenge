import React, { useState } from "react";
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
import {
  calculateTotalMoney,
  calculateNewDistribution,
  calculateDifference,
  calculateTransfers,
} from "./investmentOperations.util";
var _ = require("lodash");

const riskTable = fetchRiskTable();

// Used to set the tabbing index on the investment portfolio form
let tabindex = 0;

const Customizer = ({ history }) => {
  const selectedRisk = useSelector((state) => state.risk.value);
  const { register, handleSubmit } = useForm();
  const [results, setResults] = useState(null);

  //Select only the row we need and clean up the % sign from the data
  const riskData = _.mapKeys(
    _.omit(
      riskTable.find((element) => element.Risk === selectedRisk),
      "Risk"
    ),
    (value, key) => key.replace("%", "").trim()
  );

  // Handle form submission and calculate the results
  const onSubmitPortfolio = (data) => {
    const totalMoney = calculateTotalMoney(data);
    const newDistribution = calculateNewDistribution(totalMoney, riskData);
    const difference = calculateDifference(data, newDistribution);
    const transfers = calculateTransfers(difference);

    setResults({ difference, newDistribution, transfers });
  };

  return (
    <div>
      <Button
        className="mb-3"
        variant="primary"
        onClick={() => {
          history.push("/");
        }}
      >
        Back to risk selection
      </Button>
      <h3>Personalized Portfolio</h3>
      <h5>Investment Risk Level {selectedRisk}</h5>
      <SmallRiskTable riskData={riskData} />

      <Card className="mt-2">
        <Card.Header>Rebalance Your Portfolio</Card.Header>
        <Card.Body>
          <h6>
            This tool will help you convert your current investment portfolio
            into our suggested ideal portfolio. This ideal suggestion is based
            on your desired risk factor.
          </h6>
          <p className="text-muted text-sm">
            Please fill in your current investments in order to calculate the
            needed transfers to adapt to your new portfolio
          </p>
          <Row>
            <Col md={9}>
              <Form onSubmit={handleSubmit(onSubmitPortfolio)}>
                {Object.keys(riskData).map((key, index) => {
                  return (
                    <InvestmentFormRow
                      key={key}
                      withTitle={index === 0}
                      name={key}
                      registerHandler={register}
                      difference={results ? results.difference[key] : undefined}
                      newDistribution={
                        results ? results.newDistribution[key] : undefined
                      }
                    />
                  );
                })}

                <Button variant="success" type="submit">
                  Rebalance Your Portfolio
                </Button>
              </Form>
            </Col>
            <Col>
              <FormLabel>
                <strong>Recommended Transfers</strong>
              </FormLabel>
              <Card>
                <Card.Body>
                  {results ? (
                    results.transfers.length > 0 ? (
                      results.transfers.map((transfer, index) => {
                        return (
                          <div key={index}>
                            Transfer{" "}
                            <span className="text-success">
                              {transfer.amount}$
                            </span>{" "}
                            from {transfer.from} to {transfer.to}.
                          </div>
                        );
                      })
                    ) : (
                      <div>
                        It appears your portfolio is already balanced according
                        to your desired risk factor. There are no transactions
                        needed to be done!
                      </div>
                    )
                  ) : (
                    <div className="text-muted">
                      Please enter your current portfolio and click on the
                      button to rebalance in order to see the needed
                      transactions to adapt your portfolio to an ideal one
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

const InvestmentFormRow = ({
  withTitle,
  name,
  difference,
  newDistribution,
  registerHandler,
}) => {
  tabindex++;
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
              tabIndex={tabindex}
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
          <FormControl
            className={
              Number(difference) > 0
                ? "text-success"
                : difference < 0
                ? "text-danger"
                : ""
            }
            readOnly
            tabIndex={-1}
            value={!isNaN(difference) ? difference : "-"}
          />
        </Col>
        <Col>
          {withTitle ? <FormLabel>New Investment Amount</FormLabel> : null}
          <FormControl
            readOnly
            className="text-info"
            tabIndex={-1}
            value={!isNaN(newDistribution) ? newDistribution : "-"}
          />
        </Col>
      </Row>
    </FormGroup>
  );
};

const SmallRiskTable = ({ riskData }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {Object.keys(riskData).map((key) => {
            return (
              <th key={key} scope="col">
                {key}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.keys(riskData).map((key) => {
            return <td key={key}>{riskData[key]}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default withRouter(Customizer);
