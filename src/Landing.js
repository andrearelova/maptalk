import React, { useState, useEffect } from 'react';
import './App.css';
import ChatBubble from "./ChatBubble"
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import { googleTranslate } from "./utils/googleTranslate";

function Landing(props) {
  const [languageOne, setLanguageOne] = useState("en");
  const [languageTwo, setLanguageTwo] = useState("en");
  const [languageCodes, setLanguageCodes] = useState([]);
  const [user1Tab1, setUser1Tab1] = useState("Talk");
  const [user1Tab2, setUser1Tab2] = useState("Feedback");
  const [user2Tab1, setUser2Tab1] = useState("Talk");
  const [user2Tab2, setUser2Tab2] = useState("Feedback");
  useEffect(() => {
    googleTranslate.getSupportedLanguages("en", function(err, languageCodes) {
      getLanguageCodes(languageCodes); // use a callback function to setState
    });
  });
  const getLanguageCodes = languageCodes => {
    setLanguageCodes(languageCodes);
  };
  return (
    <div style={{height:"80vh"}}>
    <h1 className="MapTalk">MapTalk</h1>
    <div style={{display: "flex", flexDirection: "row", height:"100%"}}>
      <div>
        <ChatBubble personNum="Person1" triangleName="Triangle1" language={languageOne} setLanguage={setLanguageOne} otherLanguage={languageTwo} languageCodes={languageCodes} tab1={user1Tab1} setTab1={setUser1Tab1} tab2={user1Tab2} setTab2={setUser1Tab2}/>
      </div>
      <div style={{display: "flex", flexDirection: "column", height:"100%", paddingLeft:"8vw"}}>
      <div style={{flexGrow:"1"}}/>
        <ChatBubble personNum="Person2" triangleName="Triangle2" language={languageTwo} setLanguage={setLanguageTwo} otherLanguage={languageOne} languageCodes={languageCodes} tab1={user2Tab1} setTab1={setUser2Tab1} tab2={user2Tab2} setTab2={setUser2Tab2}/>
        <div style={{flexGrow:"1"}}>
        </div>
      </div>
      </div>
      <div className="CheckWrapper">
        <a href="/finish">
          <IconButton aria-label="complete" style={{backgroundColor:"#B45F2F", paddingLeft: "13px", paddingRight:"10px"}}>
            <CheckIcon style={{color:"#FAF3F3", fontSize:"50"}}/>
          </IconButton>
        </a>
      </div>
    </div>
  );
}
export default Landing;
