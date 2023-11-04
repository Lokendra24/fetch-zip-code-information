import React from "react";
import "../css/ZipCodeInformation.css";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { clearData } from "../redux/zipInformation/ZipCodeSlice";

function ZipCodeInformation() {

  const dispatch = useDispatch()

  const zipCodeData = useSelector((state) => state.zipCodeData.zipCodeData);
  // console.log(zipCodeData?.data);

  const HandleClearData=()=>{
    dispatch(clearData())
  }

  return (
    <div className="information_container">
      <div className="information_heading">
        <h4>Country</h4>
        <h4>State</h4>
        <h4>Place Name</h4>
      </div>

      {!zipCodeData?.isLoading && !zipCodeData?.data && (
        <p className="pincode_massage">
          Please Enter a pincode (eg. 400093) for geting the Information..
        </p>
      )}

      {!zipCodeData?.isLoading ? (
        zipCodeData?.data?.places?.map((data, index) => (
          <div className="information_details_container" key={index}>
            <div className="information_divider"></div>
            <div className="information_details">
              <p>{zipCodeData?.data?.country}</p>
              <p>{data?.state}</p>
              <p>{data?.["place name"]}</p>
            </div>
          </div>
        ))
      ) : !zipCodeData?.isError ? (
        <div className="circular_loader">
          <CircularProgress />
        </div>
      ) : (
        <p className="error_massage">Please Enter a valid Pincode</p>
      )}

      <div className="clear_button" >
        { (zipCodeData?.data && !zipCodeData?.isError) && <button onClick={HandleClearData} >Clear</button>}
      </div>
    </div>
  );
}

export default ZipCodeInformation;
