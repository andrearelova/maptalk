import React, {useState} from 'react';
import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChatBubble from "./ChatBubble"
import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Landing(props) {
    const [pageLeft, setPageLeft] = useState(0);
    const [page, setPage] = useState(0);
    const [user1Message, setUser1Message] = useState("");
    const [user2Message, setUser2Message] = useState("");
    const handleChange = (e, newVal) => {
      setPage(newVal);
    }
  return (
    <div style={{height:"80vh"}}>
    <h1 className="MapTalk">MapTalk</h1>
    <div style={{display: "flex", flexDirection: "row", height:"100%"}}>
      <div>
        <ChatBubble userMessage={user1Message} userLang={"en"} labels={{label1:"talk",label2:"feedback", etc:"xd"}}/>
        <div className="Triangle1"/>
        <div className="Person">
          <PersonIcon style={{fontSize: '90px', color: '#B45F2F', marginTop: '2vh'}}/>
          <Button style={{marginLeft: "-3vw", width: "30%", backgroundColor:"#FAF3F3", borderRadius:"50px", paddingTop:"5px", paddingBottom:"5px", paddingLeft:"30px", paddingRight:"30px", fontFamily:"'Inter', sans-serif", fontSize:"25px", textTransform:"capitalize"}} endIcon={<ExpandMoreIcon style={{fontSize:"30px"}}/>}>English</Button>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", height:"100%", paddingLeft:"8vw"}}>
      <div style={{flexGrow:"1"}}/>
        <ChatBubble userMessage={user2Message} userLang={"es"} labels={{label1:"hablar",label2:"feedbacko", etc:"xd"}}/>
        <div style={{flexGrow:"1"}}>
          <div className="Triangle2"/>
          <div className="Person">
            <PersonIcon style={{fontSize: '90px', color: '#B45F2F', marginTop: '2vh', marginLeft: '33vw'}}/>
            <Button style={{marginLeft: "30vw", width: "30%", backgroundColor:"#FAF3F3", borderRadius:"50px", paddingTop:"5px", paddingBottom:"5px", paddingLeft:"30px", paddingRight:"30px", fontFamily:"'Inter', sans-serif", fontSize:"25px", textTransform:"capitalize"}} endIcon={<ExpandMoreIcon style={{fontSize:"30px"}}/>}>Español</Button>
          </div>
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
