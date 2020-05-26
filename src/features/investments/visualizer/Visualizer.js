import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { fetchRiskTable } from "../../../util/dummyInvestmentPlans";

var _ = require("lodash");
const riskTable = fetchRiskTable();

const Visualizer = () => {
  const selectedRisk = useSelector((state) => state.risk.value);
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      {showChart ? (
        <Fragment>
          <Button
            variant="outline-secondary"
            onClick={() => {
              setShowChart(false);
            }}
          >
            Show Table
          </Button>
          <br />
          <br />
          <RiskDoughnutChart selectedRisk={selectedRisk} />
        </Fragment>
      ) : (
        <Fragment>
          <Button
            variant="outline-secondary"
            onClick={() => {
              setShowChart(true);
            }}
          >
            Show Chart
          </Button>
          <br />
          <br />
          <RiskTable selectedRisk={selectedRisk} />
        </Fragment>
      )}
    </div>
  );
};

const RiskTable = ({ selectedRisk }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {Object.keys(riskTable[0]).map((key) => {
            return (
              <th key={key} scope="col">
                {key}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {riskTable.map((riskData) => {
          return (
            <tr
              key={riskData.Risk}
              className={riskData.Risk === selectedRisk ? "table-primary" : ""}
            >
              {Object.keys(riskData).map((key) => {
                return <td key={key}>{riskData[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const RiskDoughnutChart = ({ selectedRisk }) => {
  const riskData = _.omit(
    riskTable.find((element) => element.Risk === selectedRisk),
    "Risk"
  );
  const chartData = {
    labels: Object.keys(riskData).map((key) => key),
    datasets: [
      {
        data: Object.keys(riskData).map((key) => riskData[key]),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#3cba9f",
          "#e8c3b9",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#3cba9f",
          "#e8c3b9",
        ],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default Visualizer;
