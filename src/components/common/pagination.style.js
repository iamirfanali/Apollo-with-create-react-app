import styled from "styled-components";

export const Paginate = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem;
  margin-top: .5rem;
  margin-bottom: .5rem;

  li {
    cursor: pointer;
    a {
      position: relative;
      display: block;
      padding: .5rem .75rem;
      margin-left: -1px;
      line-height: 1.25;
      color: #007bff;
      background-color: #fff;
      border: 1px solid #dee2e6;
    }
  }

  .active {
    a {
      background-color: #007bff;
      color:#fff;
    } 
  }
 
`; 