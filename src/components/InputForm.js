import React, { useState } from "react";
import "../css/Input.css";
import { useDispatch } from "react-redux";
import { fetchZipCodeData } from "../redux/zipInformation/ZipCodeSlice";

function InputForm() {
  const [input, setInput] = useState('');

  const dispatch=useDispatch()

  const HandleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchZipCodeData(input))
    setInput('')
  };

  return (
    <form className="form_container" onSubmit={HandleSubmit}>
      <input
        type="number"
        placeholder="Enter Zip Code here.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Get Information</button>
    </form>
  );
}

export default InputForm;
