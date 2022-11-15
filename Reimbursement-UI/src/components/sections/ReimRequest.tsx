import React, { ChangeEvent, FormEvent, useState } from 'react';
import reimClient from '../../remote/reim.client';

const ReimRequest: React.FC<unknown> = (props) => {
  var reader = new FileReader();
  const [eventType, setEventType] = useState<string>();
  const [rawCost, setRawCost] = useState<string>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [gradingFormat, setGradingFormat] = useState<string>();
  const [justification, setJustification] = useState<string>();
  const [approverEmail, setApproverEmail] = useState<string>();
  const [file, setFile] = useState<File>();
  let [obj, setObj] = useState(0);

  const handleEventType = (e: ChangeEvent<HTMLSelectElement>) => {
    setEventType(e.target.value);
  };
  const handleRawCost = (e: ChangeEvent<HTMLInputElement>) => {
    setRawCost(e.target.value);
  };
  const handleStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };
  const handleLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleGradingFormat = (e: ChangeEvent<HTMLSelectElement>) => {
    setGradingFormat(e.target.value);
  };
  const handleJustification = (e: ChangeEvent<HTMLInputElement>) => {
    setJustification(e.target.value);
  };
  const handleApproverEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setApproverEmail(e.target.value);
  };
  const addNum = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setObj(obj+10);
  };
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleReimSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.put('employee/reim', {eventType, rawCost, startDate, endDate, location, description, gradingFormat, justification, approverEmail});
    console.log(response);
    const reimID = response.data;
    if (file) {
      let formData;
      reader.readAsDataURL(file);
      reader.onload = async function () {
         formData = reader.result;
         const response2 = await reimClient.patch('employee/reim/file', {reimID, formData});
         console.log('FILE IS SENT: ', response2)
      };
    }
    setObj(0);
  }

  return (
    <>
    <div className="myForms">
        <h3>Reimbursement Request</h3>
        <br/>
        <form onSubmit={ handleReimSubmit }>
          <div className="form-group">
            <div className="row">
              <div className="col-md">
                <label>Event type:</label>
                <select onBlur={addNum} onChange={handleEventType} className="form-control" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="Seminar">Seminar</option>
                  <option value="University Course">University Course</option>
                  <option value="Certification Prep Class">Certification Prep Class</option>
                  <option value="Certification">Certification</option>
                  <option value="Technical Training">Technical Training</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md">
                <label> Raw Cost:</label>
                <input onBlur={addNum} className="form-control" onChange={handleRawCost}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <label>Start Date:</label>
                <input onBlur={addNum} type='date' className="form-control" onChange={handleStartDate}/>
              </div>
              <div className="col-md">
                <label>End Date:</label>
                <input onBlur={addNum} type='date' className="form-control" onChange={handleEndDate}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <label>Location:</label>
                <input onBlur={addNum} className="form-control" onChange={handleLocation}/>
              </div>
              <div className="col-md">
                <label>Grading Format:</label>
                <select onBlur={addNum} onChange={handleGradingFormat} className="form-control" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="grade">grade</option>
                  <option value="presentation">presentation</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <label>Approver:</label>
                <input onBlur={addNum} className="form-control" onChange={handleApproverEmail}/>
              </div>
              <div className="col-md">
                <label>Interested Parties:</label>
                <input onBlur={addNum} className="form-control"/>
              </div>
            </div>
            <label>Justification:</label>
            <input onBlur={addNum} className="form-control" onChange={handleJustification}/>
            <label>Description:</label>
            <input onBlur={addNum} className="form-control" onChange={handleDescription}/>
            <br/>
            <div className="custom-file">
              <input type="file" className="custom-file-input" onChange={handleFile} id="inputGroupFile01"/>
            </div>
            <br/>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" style={{width:`${obj}%`}} role="progressbar"></div>
            </div>
            <br/>
            <input type="submit" className="btn btn-primary" value="Submit"/>
          </div>
      </form>
    </div>
    </>
  );
};

export default ReimRequest;
