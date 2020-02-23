import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    cursor: pointer;
  }
  th,
  td,
  tr {
    padding: 10px;
  }
  th {
    text-align: left;
  }
`;

export const ModalInnerWrap = styled.div`
  min-width: 450px;
  min-height: 250px;

  h3{
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
`;
