import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './App.css';

function Finish(props) {
  return (
    <div className="Finish">
      <h1 className="MapTalk">MapTalk</h1>
      <div className="FinishSquare">
        <h2 className="FirstLang">Thank you for your participation.</h2>
        <h2 className="SecondLang">Gracias por su participación.</h2>
        <div className="SurveyWrapper">
          <a href="https://elearning.ufl.edu/supported-services/qualtrics/">
            <Button style={{backgroundColor:"#B45F2F", color:"#FAF3F3", borderRadius:"50px", paddingTop:"5px", paddingBottom:"5px", paddingLeft:"30px", paddingRight:"30px", fontFamily:"'Inter', sans-serif", fontSize:"25px", textTransform:"capitalize"}}>Survey/Encuesta</Button>
          </a>
        </div>
      </div>
      <div className="BackWrapper">
        <a href="/">
          <IconButton aria-label="go back" style={{backgroundColor:"#B45F2F", paddingLeft: "20px", paddingRight:"10px"}}>
            <ArrowBackIosIcon style={{color:"#FAF3F3", fontSize:"50"}}/>
          </IconButton>
        </a>
      </div>
    </div>
  );
}

export default Finish;
