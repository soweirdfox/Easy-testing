import React from "react";
import "./App.css";

import { Route, Routes } from "react-router";
import ResultsPage from "./Pages/ResultsPage/ResultsPage";
import SmokeTestPage from "./Pages/SmokeTestPage/SmokeTestPage"
import SmokeTestExecutePage from "./Pages/SmokeTestPage/SmokeTestExecute/SmokeTestExecutePage";
import LoginPage from "./Pages/Login/LoginPage";
import SmokeTestResultsPage from "./Pages/SmokeTestPage/SmokeTestResults/SmokeTestResultsPage";
import PrivateRoutes from "./auth/PrivateRoutes";
import MainPage from "./Pages/MainPage";
import SmokeTestResultsDetails from "./Pages/SmokeTestPage/SmokeTestResults/SmokeTestResultsDetails/SmokeTestResultsDetails";
import RegressionTestPage from "./Pages/RegressionTestPage";
import APITestPage from "./Pages/APITestPage";
import LoadTestPage from "./Pages/LoadTestPage";
import StressTestPage from "./Pages/StressTestPage";
import IntergationTestPage from "./Pages/IntergationTestPage";
import SmokeTestUploadPage from "./Pages/SmokeTestPage/SmokeTestUpload/SmokeTestUploadPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<MainPage />}>        
            <Route path="/" element={<SmokeTestPage />}>
              <Route path="/" element={<SmokeTestResultsPage />} />
              <Route path="report" element={<SmokeTestResultsPage />} />
              <Route path="execute" element={<SmokeTestExecutePage />} />
              <Route path="upload" element={<SmokeTestUploadPage />} />
              <Route path="details" element={<SmokeTestResultsDetails />} />
            </Route>
            <Route path="/RT" element={<RegressionTestPage />}/>
            <Route path="/APIT" element={<APITestPage />}/>
            <Route path="/LT" element={<LoadTestPage />}/>
            <Route path="/STT" element={<StressTestPage />}/>
            <Route path="/IT" element={<IntergationTestPage />}/>
            <Route path="/Results" element={<ResultsPage />} />
            
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
