import React, { ChangeEvent, FormEvent, useState } from 'react';
import reimClient from '../../remote/reim.client';

const RequestInfo: React.FC<unknown> = (props) => {

  const [reimID, setReimID] = useState<string>();
  const [request, setRequest] = useState<string>();
  const [empId, setEmpId] = useState<string>();

  const handleReimID = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("the value is: ", e.target.value);
    setReimID(e.target.value);
  };
  const handleRequest = (e: ChangeEvent<HTMLInputElement>) => {
    setRequest(e.target.value);
  };
  const handleEmpId = (e: ChangeEvent<HTMLInputElement>) => {
    setEmpId(e.target.value);
  };
  const handleRequestInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.put('employee/super/moreinfo', {reimID, request, empId});
    console.log("the db response is: ", response);
  }

  return (
    <>
    <div className="myForms">
        <h3>Request Info</h3>
        <br/>
        <form onSubmit={ handleRequestInfo }>
          <div className="form-group">
            <label>Reimbursement ID:</label>
            <input className="form-control" onChange={ handleReimID }/>
            <br/>
            <label>Employee ID:</label>
            <input className="form-control" onChange={ handleEmpId }/>
            <br/>
            <label>Request:</label>
            <input className="form-control" onChange={ handleRequest }/>
            <br/>
            <input type="submit" className="btn btn-primary" value="Submit"/>
          </div>
      </form>
    </div>
    </>
  );
};

export default RequestInfo;
