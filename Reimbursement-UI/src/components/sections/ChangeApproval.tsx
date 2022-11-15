import React, { ChangeEvent, FormEvent, useState } from 'react';
import reimClient from '../../remote/reim.client';

const ChangeApproval: React.FC<unknown> = (props) => {

  const [reimID, setReimID] = useState<string>();
  const [approve, setApprove] = useState<string>();

  const handleReimID = (e: ChangeEvent<HTMLInputElement>) => {
    setReimID(e.target.value);
  };
  const handleApprove = (e: ChangeEvent<HTMLInputElement>) => {
    setApprove(e.target.value);
  };
  const handleReimSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.patch('employee/reim/changeapproval', {reimID, approve});
    console.log(response);
  }

  return (
    <>
      <div className="myForms">
          <h3>Approve Change</h3>
          <br/>
          <form onSubmit={ handleReimSubmit }>
            <div className="form-group">
              <label>Reimbursement ID:</label>
              <input className="form-control" id="eventType" name='eventType' onChange={handleReimID}/>
              <br/>
              <label>Approve</label>
              <input type="radio" id="empApprove" onChange={handleApprove} value="approved"/>
              <label>Cancel</label>
              <input type="radio" id="empApprove" onChange={handleApprove} value="cancelled"/>
              <br/><br/>
              <input type="submit" className="btn btn-primary" value="Submit"/>
            </div>
        </form>
      </div>
    </>
  );
};

export default ChangeApproval;
