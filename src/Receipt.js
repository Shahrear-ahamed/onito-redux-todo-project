import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReceipts } from "./redux/features/ReceiptSlice";

const Receipt = () => {
  const paymentMode = ["Cash", "Bank", "Cheque", "PayTm"];
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);

  const handleData = (e) => {
    e.preventDefault();

    const buttonName = e.nativeEvent.submitter.name;
    let date = e.target.date;
    let amount = e.target.amount;
    let methods = e.target.methods;
    let remark = e.target.remark;

    const receiptsObj = {
      date: date.value,
      amount: amount.value,
      methods: methods.value,
      remark: remark.value,
    };
    const receiptClear = () => {
      date.value = "";
      amount.value = "";
      methods.value = [paymentMode[0]];
      remark.value = "";
    };

    if (buttonName === "submit") {
      if (date.value && amount.value) {
        dispatch(addReceipts(receiptsObj));
        receiptClear();
      } else {
        setErr(true);
        alert("Please input valid data");
      }
    } else if (buttonName === "cancel") {
      receiptClear();
    }
  };

  return (
    <div className="my-5">
      <h4 className="text-decoration-underline fs-6">Receipt Details</h4>
      <form className="mt-3" onSubmit={handleData}>
        <div className="my-2 row mx-0">
          <label
            htmlFor=""
            className="input-label d-inline-block col-5 col-md-3 px-0">
            Date
          </label>
          <input
            type="text"
            id="date"
            className={`py-1 px-2 rounded-1 border col-7 col-md-3 ${
              err ? "border-danger" : "border-secondary"
            }`}
            placeholder="Enter Date"
          />
        </div>
        <div className="my-2 row mx-0">
          <label
            htmlFor=""
            className="input-label d-inline-block col-5 col-md-3 px-0">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className={`py-1 px-2 rounded-1 border col-7 col-md-8 ${
              err ? "border-danger" : "border-secondary"
            }`}
            placeholder="Enter Amount (in INR)"
          />
        </div>
        <div className="my-2 row mx-0">
          <label
            htmlFor=""
            className="input-label d-inline-block col-5 col-md-3 px-0">
            Payment Mode
          </label>
          <select
            id="methods"
            defaultValue={paymentMode[0]}
            className="py-1 px-2 rounded-1 border border-secondary col-7 col-md-5">
            {paymentMode.map((mode, i) => (
              <option key={i} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>
        <div className="my-2 row mx-0">
          <label htmlFor="" className="d-inline-block col-5 col-md-3 px-0">
            Remark
          </label>
          <input
            type="text"
            id="remark"
            className="py-1 px-2 rounded-1 border border-secondary col-7 col-md-9"
            placeholder="Enter Remark"
          />
        </div>

        {/* submit button  */}
        <div className="my-4 d-flex justify-content-center justify-content-md-end me-md-5">
          <button
            name="cancel"
            className="py-md-3 px-md-5 py-2 px-3 mx-3 mx-md-5 rounded-1 border-1 border-danger bg-transparent text-danger border-opacity-50 fs-6">
            CANCEL{" "}
            <span className="d-block text-decoration-underline">(ESC)</span>
          </button>
          <button
            name="submit"
            className="py-md-3 px-md-5 py-2 px-3 mx-3 mx-md-5 rounded-1 border-0 bg-success text-white shadow">
            SUBMIT{" "}
            <span className="d-block text-decoration-underline">(⌘ S)</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Receipt;
