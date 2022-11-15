import React, { ChangeEvent, FormEvent, useState } from 'react';
import reimClient from '../../remote/reim.client';

const SubmitMoreInfo: React.FC<unknown> = (props) => {

  const [requestID, setRequestID] = useState<string>();
  const [answer, setAnswer] = useState<string>();

  const handleRequestID = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("the value is: ", e.target.value);
    setRequestID(e.target.value);
  };
  const handleAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  const handleRequestInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.patch('employee/moreinfo', { requestID, answer });
    console.log("the db response is: ", response);
  }

  return (
    <>
    <div className="myForms">
        <h3>Submit Requested Info</h3>
        <br/>
      <form onSubmit={ handleRequestInfo }>
        <div className="form-group">
          <label>Request ID:</label>
          <input className="form-control" onChange={ handleRequestID }/>
          <br/>
          <label>Answer:</label>
          <input className="form-control" onChange={ handleAnswer }/>
          <br/>
          <input type="submit" className="btn btn-primary" value="Submit"/>
        </div>
      </form>
    </div>
    </>
  );
};

export default SubmitMoreInfo;
