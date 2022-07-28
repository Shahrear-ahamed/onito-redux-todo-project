import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const ListOfReceipt = () => {
  const { receipts } = useSelector((state) => state.receipts);
  return (
    <div>
      <h3>Total Receipts List {receipts.length} </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Methods</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {receipts.length ? (
            receipts.map((receipt, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{receipt.date}</td>
                <td>{receipt.amount}</td>
                <td>{receipt.methods}</td>
                <td>{receipt.remark}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No Receipts found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ListOfReceipt;
