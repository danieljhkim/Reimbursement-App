import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';

const GetGrades: React.FC<unknown> = (props) => {

  const [grades, setGrades] = useState({ res:[] });

  function writeGrades() {
    const listItems = (<ul> { JSON.stringify(grades.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems, document.getElementById('grades'));
  }

  const handleGetGrades = async () => {
    const response = await reimClient.get('employee/grades');
    console.log("the db response is: ", response.data);
    setGrades({ res:response.data.res });
    console.log('writing,', grades);
    writeGrades();
  }

  return (
    <>
        <div className="myForms">
            <h3>Pending Grade Subs</h3>
            <br/>
            <button onClick={ handleGetGrades } className="btn btn-primary">Fetch</button>
            <br/><br/>
            <pre id='grades'>
            </pre>
        </div>
    </>
  );
};

export default GetGrades;
