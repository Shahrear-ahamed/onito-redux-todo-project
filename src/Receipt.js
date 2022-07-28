import React from "react";

const Receipt = () => {
  const paymentMode = ["Cash", "Bank", "Cheque", "Paytm"];
  return (
    <div>
      <h4 className="receipt-title">Receipt Details</h4>
      <form className="receipt-form">
        <div className="input-div">
          <label htmlFor="" className="input-label">Date</label>
          <input type="number" name="date" id="date" className="input-field" placeholder="Enter Date" />
        </div>
        <div className="input-div">
          <label htmlFor="" className="input-label">Amount</label>
          <input
            type="number"
            name="date"
            id="date"
            className="input-field"
            placeholder="Enter Amount (in INR)"
          />
        </div>
        <div className="input-div">
          <label htmlFor="" className="input-label" >Payment Mode</label>
          <select name="" id="">
            {paymentMode.map((mode, i) => (
              <option key={i} value="">
                {mode}
              </option>
            ))}
          </select>
        </div>
        <div className="input-div">
          <label htmlFor="" className="input-label">Remark</label>
          <input
            type="number"
            name="date"
            id="date"
            className="input-field"
            placeholder="Enter Remark"
          />
        </div>

        {/* submit button  */}
      </form>
    </div>
  );
};

export default Receipt;
