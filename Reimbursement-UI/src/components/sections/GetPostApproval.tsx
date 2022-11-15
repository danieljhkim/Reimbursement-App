import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';

const GetPostReims: React.FC<unknown> = (props) => {

  const [postReim, setPostReim] = useState({res:[]});

  function writePreReims() {
    const listItems = (<ul> { JSON.stringify(postReim.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems, document.getElementById('postReims'));
  }

  const handleGetPostReim = async () => {
    const response = await reimClient.get('employee/benco/postreim');
    console.log("the db response is: ", response.data);
    setPostReim({res:response.data.res});
    writePreReims();
  }

  return (
    <>
    <div className="myForms">
        <h3>Pending Approvals</h3>
        <br/>
        <button onClick={ handleGetPostReim } className="btn btn-primary">Fetch</button>
        <br/><br/>
        <pre id='postReims'>
        </pre>
    </div>
    </>
  );
};

export default GetPostReims;
