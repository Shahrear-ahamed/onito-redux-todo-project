import React from "react";

const Receipt = () => {
  const paymentMode = ["Cash", "Bank", "Cheque", "PayTm"];

  const handleData = (e) => {
    e.preventDefault();

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

    const buttonName = e.nativeEvent.submitter.name;
    if (buttonName === "submit") {
      console.log(receiptsObj);
    } else if (buttonName === "cancel") {
      date.value = "";
      amount.value = "";
      methods.value = [paymentMode[0]];
      remark.value = "";
    }
  };

  return (
    <div className="my-5">
      <h4 className="text-decoration-underline fs-6">Receipt Details</h4>
      <form className="mt-3" onSubmit={handleData}>
        <div className="my-2 row mx-0">
          <label htmlFor="" className="input-label d-inline-block col-3 px-0">
            Date
          </label>
          <input
            type="number"
            id="date"
            className="py-1 px-2 rounded-1 border border-secondary col-3"
            placeholder="Enter Date"
          />
        </div>
        <div className="my-2 row mx-0">
          <label htmlFor="" className="input-label d-inline-block col-3 px-0">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="py-1 px-2 rounded-1 border border-secondary col-8"
            placeholder="Enter Amount (in INR)"
          />
        </div>
        <div className="my-2 row mx-0">
          <label htmlFor="" className="input-label d-inline-block col-3 px-0">
            Payment Mode
          </label>
          <select
            id="methods"
            defaultValue={paymentMode[0]}
            className="py-1 px-2 rounded-1 border border-secondary col-5">
            {paymentMode.map((mode, i) => (
              <option key={i} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>
        <div className="my-2 row mx-0">
          <label htmlFor="" className="d-inline-block col-3 px-0">
            Remark
          </label>
          <input
            type="number"
            id="remark"
            className="py-1 px-2 rounded-1 border border-secondary col-8"
            placeholder="Enter Remark"
          />
        </div>

        {/* submit button  */}
        <div className="my-4 d-flex justify-content-end me-5">
          <button
            name="cancel"
            className="py-3 px-5 mx-5 rounded-1 border-1 border-danger bg-transparent text-danger border-opacity-50">
            CANCEL{" "}
            <span className="d-block text-decoration-underline">(ESC)</span>
          </button>
          <button
            name="submit"
            className="py-3 px-5 mx-5 rounded-1 border-0 bg-success text-white shadow">
            SUBMIT{" "}
            <span className="d-block text-decoration-underline">(⌘ S)</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Receipt;
