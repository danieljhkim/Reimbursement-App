import React, { ChangeEvent, FormEvent, useState } from 'react';
import reimClient from '../../remote/reim.client';

const GradeApproval: React.FC<unknown> = (props) => {

  const [reimID, setReimID] = useState<string>();
  const [approve, setApprove] = useState<string>();

  const handleReimID = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("the ID value is: ", e.target.value);
    setReimID(e.target.value);
  };
  const handleApprove = (e: ChangeEvent<HTMLInputElement>) => {
    setApprove(e.target.value);
  };

  const handleGradeApproval = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.patch('employee/benco/graded', {reimID, approve});
    console.log("the db response is: ", response);
  }

  return (
    <>
    <div className="myForms">
        <h3>Final Approval</h3>
        <br/>
        <form onSubmit={ handleGradeApproval }>
          <div className="form-group">
            <label>Reimbursement ID:</label>
            <input className="form-control" onChange={handleReimID}/>
            <br/>
            <label>Approve</label>
            <input type="radio" onChange={handleApprove} value="approved"/>
            <label>Deny</label>
            <input type="radio" onChange={handleApprove} value="denied"/>
            <br/> <br/>
            <input type="submit" className="btn btn-primary" value="Submit"/>
          </div>
      </form>
    </div>
    </>
  );
};

export default GradeApproval;
