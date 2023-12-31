import React, { useState, useEffect } from "react";
import GetToken from "../../../auth/GetToken";
import Button from "../../../Components/Button";
import ResultPagesHeader from "../../../Components/ResultPagesHeader";
import TableFooter from "../../../Components/TableFooter";
import { useNavigate } from 'react-router-dom';

function SmokeTestExecutePage() {

  const [testsData, setTestsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    updatePage()
  }, []);

  function updatePage() {
    fetch('/api/getTests', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': GetToken(),
      },
    })
      .then(response => {
      if (!response.ok) {
          throw new Error('User is not authorized');
      }
      return response.json();
  })
      .then(data => setTestsData(data.sort((a, b) => {
        return new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime()
      })))
      .catch(() => {
        alert("Your session was expired");
        navigate('/auth')
    });
  }

  function deleteTest(testId, runId) {
    fetch('/api/deleteTests', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': GetToken(),
      },

      body: JSON.stringify({
        "ids": [
          {
            "testId": testId,
            "runnerId": runId,
          }
        ]
      }),
    })
      .then(() => updatePage());
  }

  function executeTest(testId, testName) {
    fetch('/api/runSIT', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': GetToken(),
      },

      body: JSON.stringify({
        "testName": testName,
        "type": "SST",
        "id": testId,
        "notify": false
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('User is not authorized');
        }
        alert("Your test is being executed")
      })
        .catch(() => {
          alert("Your session was expired");
          navigate('/auth')
      });
    }
  

  return (
    <>
      <div className="execute-container">
        <ResultPagesHeader />

        <div className="results-table">
          <table>
            <thead className="results-tb-head">
              <tr className="results-tr">
                <th>Test Name</th>
                <th>Uploaded By</th>
                <th>Upload time</th>
                <th>Last execute</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="results-tb-body">
              {testsData.map((testData) => {
                return (
                  <tr className="results-tb-tr-body" key={testData.RowKey}>
                    <td>{testData.testName}</td>
                    <td>{testData.uploadedBy}</td>
                    <td>{new Date(testData.Timestamp).toLocaleString()}</td>
                    <td>{new Date(testData.Timestamp).toLocaleString()}</td>
                    <td>
                      <Button btnName="Execute" color="var(--lightest-color)" onClick={() => executeTest(testData.RowKey, testData.testName)}/>
                    </td>
                    <td>
                      <Button btnName="Edit" color="var(--light-color)" />
                    </td>
                    <td>
                      <Button btnName="Delete" color="var(--logo-color)" onClick={() => deleteTest(testData.sstjson, testData.RowKey)} />
                    </td>
                  </tr>
                )
              })}

            </tbody>
            <TableFooter data={testsData}/>
          </table>
        </div>
      </div>
    </>
  );
}
export default SmokeTestExecutePage;
