import React, { useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';
import UserContext from '../../context/UserContext';

const GetGradedReims: React.FC<unknown> = (props) => {

  const [gradedReim, setGradedReim] = useState({res:[]});
  const { role } = useContext(UserContext);

  function writeGradedReims() {
    const listItems = (<ul> { JSON.stringify(gradedReim.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems, document.getElementById('gradedReims'));
  }

  const handleGetGradedReim = async () => {
    const response = await reimClient.get('employee/benco/reim/graded');
    console.log("the db response is: ", response.data);
    setGradedReim({res:response.data.res});
    console.log('writing,', gradedReim)
    writeGradedReims();
  }

  const handleGetPresentation = async () => {
    const response = await reimClient.get('employee/super/reim/graded');
    console.log("the db response is: ", response.data);
    setGradedReim({res:response.data.res});
    console.log('writing,', gradedReim)
    writeGradedReims();
  }

  return (
    <>
    <div className="myForms">
        <h3>Final Result</h3>
        <br/>
        { role === "benco" &&
          <button onClick={ handleGetGradedReim } className="btn btn-primary">Fetch</button>
        }
          { role !== "benco" &&
          <button onClick={ handleGetPresentation } className="btn btn-primary">Fetch</button>
        }
        
        <br/><br/>
        <pre id='gradedReims'>
        </pre>
    </div>

    </>
  );
};

export default GetGradedReims;
