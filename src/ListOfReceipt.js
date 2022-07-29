import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const ListOfReceipt = () => {
  const [showValue, setShowValue] = useState(false)
  const [receiptsData, setReceiptsData] = useState([]);
  const { receipts } = useSelector((state) => state.receipts);

  useEffect(()=>{
    if(showValue){
      const cashOnly = receipts.filter(cash => cash.methods === "Cash")
      setReceiptsData(cashOnly)
    }else {
      setReceiptsData(receipts)
    }
  },[showValue,receipts])

  const showCash=() =>{
    setShowValue(!showValue)
  }

  return (
    <div>
      <h3>Total Receipts List {receiptsData.length} </h3>
      <div className="w-100 my-3 d-flex justify-content-end">
        <button className="py-1 px-3 rounded border border-success bg-transparent shadow-sm" onClick={showCash}>Cash</button>
      </div>
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
          {receiptsData.length ? (
              receiptsData.map((receipt, i) => (
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
