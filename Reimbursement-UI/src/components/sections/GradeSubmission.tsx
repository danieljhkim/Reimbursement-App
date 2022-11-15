import React, { ChangeEvent, FormEvent, useState } from 'react';
import reimClient from '../../remote/reim.client';

const GradeSubmission: React.FC<unknown> = (props) => {

  const [reimID, setReimID] = useState<string>();
  const [grade, setGrade] = useState<string>();

  const handleReimID = (e: ChangeEvent<HTMLInputElement>) => {
    setReimID(e.target.value);
  };
  const handleGrade = (e: ChangeEvent<HTMLInputElement>) => {
    setGrade(e.target.value);
  };

  const handleGradeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.patch('employee/reim/grade', {reimID, grade});
    console.log(response);
  }

  return (
    <>
    <div className="myForms">
      <h3>Grade Submission</h3>
      <br/>
      <form onSubmit={ handleGradeSubmit }>
        <div className="form-group">
          <label>Reimbursment ID:</label>
          <input className="form-control" name='reimID5' onChange={handleReimID}/>
          <br/>
          <label>Grade:</label>
          <input className="form-control" name='grade' onChange={handleGrade}/>
          <br/>
          <input type="submit" className="btn btn-primary" value="Submit"/>
        </div>
      </form>
    </div>
    </>
  );
};

export default GradeSubmission;
