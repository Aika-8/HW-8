import React from "react";
import styled from "styled-components";

export const ChartBar = ({ label, currentPrice, maximumPrice }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;
  return (
    <ChartContainer>
      <InnerChart>
        <DivChartBar style={{ height: `${fillHeight}%` }}></DivChartBar>
      </InnerChart>
      <ChartLabel>{label}</ChartLabel>
    </ChartContainer>
  );
};
const ChartContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const InnerChart = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid #363636;
  background: #a892ee;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;
const DivChartBar = styled.div`
  width: 100%;
  background-color: #4826b9;
  transition: all 0.3s ease-out;
`;
const ChartLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #000;
`;
