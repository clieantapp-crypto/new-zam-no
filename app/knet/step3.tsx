export const Step3=(props:any)=>{
    return(
        <div id="FCUseDebitEnable" style={{ marginTop: 5 }}>
  <div className="row">
    <label style={{ width: "40%" }} className="column-label">
     ID Number: 
    </label>
    <label>
      <input
        name="natID"
        style={{ width: "60%" }}
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        size={12}
        onChange={(e: any) =>
          props. setPaymentInfo({
             ...props.paymentInfo,
             idNumber: e.target.value,
           })
         }
        className="allownumericwithoutdecimal"
        maxLength={12}
        title="Should be in number. Length should be 12"
      />
    </label>
  </div>
  <div className="row">
    <label style={{ width: "40%" }} className="column-label">
      Authorized Phone Number:
    </label>
    <label>
      <input
        name="number"
        onChange={(e: any) =>
         props. setPaymentInfo({
            ...props.paymentInfo,
            phoneNumber: e.target.value,
          })
        }
        style={{ width: "60%" }}
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        size={10}
        className="allownumericwithoutdecimal"
        maxLength={10}
        title="Should be in number. Length should be 10"
      />
    </label>
  </div>
  <div className="row">
    <label className="column-label" style={{ width: "40%" }}>
    Network operator:    </label>
    <select
      className="column-value"
      style={{ width: "60%" }}
      name="company"
      onChange={(e: any) =>
        props. setPaymentInfo({
           ...props.paymentInfo,
           network: e.target.value,
         })
       }
      id="type"
    >
      <option value="">Choose Network operator:...</option>
      <option value="STC" title="STC">
        STC
      </option>
      <option value="Zain" title="Zain">
        Zain
      </option>
      <option value="Ooredoo" title="Ooredoo">
        Ooredoo
      </option>
    </select>
  </div>
</div>

    )
}