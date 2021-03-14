import React, { useState } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import IconButton from '@material-ui/core/IconButton';
import { googleTranslate } from "./utils/googleTranslate";
import PersonIcon from '@material-ui/icons/Person';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
    width: '100%'
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    borderRadius: '50px',
    backgroundColor: '#E0DAD7',
    color: '#000000',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '600',
    fontSize: '18px',
    margin: '0',
    height: '100%',
    width: '50%',
    '&:focus': {
      backgroundColor: '#E2966B',
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      borderBottomColor: '#E2966B',
      color: '#B45F2F',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#E2966B',
    },
    '&:hover fieldset': {
      borderBottomColor: '#E2966B',
    },
    width: '100%',
  },
})(TextField);

function ChatBubble({language, setLanguage, otherLanguage, languageCodes, tab1, setTab1, tab2, setTab2, triangleName, personNum}) {
  const [textTranslation, setTextTranslation] = useState("");
  const [text, setText] = useState("");
  const [page, setPage] = useState(0);
  const [isClicked1, setisClicked1] = useState("#8A8785");
  const [isClicked2, setisClicked2] = useState("#8A8785");
  const [isClicked3, setisClicked3] = useState("#8A8785");
  const handleChangeTabs = (e, newVal) => {
    setPage(newVal);
  };
  const handleChangeLang = e => {
    const newLang = e.target.value;
    let transTab1 = "";
    let transTab2 = "";
    const translatingTab1 = transTab1 => {
        setTab1(transTab1);
    };
    googleTranslate.translate(tab1, newLang, function(err, translation) {
      transTab1 = translation.translatedText;
      translatingTab1(transTab1);
    });
    const translatingTab2 = transTab2 => {
        setTab2(transTab2);
    };
    googleTranslate.translate(tab2, newLang, function(err, translation) {
      transTab2 = translation.translatedText;
      translatingTab2(transTab2);
    });
    setLanguage(newLang);
  };
  const handleTranslation = async e => {
    const val =  e.target.value;
    e.preventDefault();
    setText(val);
    const translatingText = transText => {
        setTextTranslation(transText);
    };
    googleTranslate.translate(val, otherLanguage, function(err, translation) {
      let transText = translation.translatedText;
      translatingText(transText);
    });
  };
  const handleClick1 = e => {
     if (isClicked1 === "#B45F2F") {
      setisClicked1("#8A8785");
     }
    if (isClicked1 === "#8A8785") {
      setisClicked1("#B45F2F");
    }
  };
  const handleClick2 = e => {
     if (isClicked2 === "#B45F2F") {
      setisClicked2("#8A8785");
     }
    if (isClicked2 === "#8A8785") {
      setisClicked2("#B45F2F");
    }
  };
  const handleClick3 = e => {
     if (isClicked3 === "#B45F2F") {
      setisClicked3("#8A8785");
     }
    if (isClicked3 === "#8A8785") {
      setisClicked3("#B45F2F");
    }
  };
  return (
    <div>
      <div className="LeftBubble">
        <StyledTabs style={{marginLeft: '10px'}} value={page} onChange={handleChangeTabs} aria-label="chat feedback tabs">
        <StyledTab style={{borderRadius:'50px 0px 0px 50px'}} value={0} label={tab1}></StyledTab>
        <StyledTab style={{borderRadius:'0px 50px 50px 0px'}} value={1} label={tab2}></StyledTab>
        </StyledTabs>
        <hr className="TabLine"/>
        {page === 0 && <div>
          <form noValidate autoComplete="off">
          <CssTextField id="standard-multiline-static" multiline
          rows={3} label="Type Here" value={text} onChange={handleTranslation}/>
          </form>
          <p className="Translation">{textTranslation}</p>
        </div>}
        {page === 1 && <div>
          <div className="FeedbackIcons">
            <IconButton aria-label="thumbs up" onClick={handleClick1}>
              <ThumbUpIcon style={{color: isClicked1, fontSize:'50px'}}/>
            </IconButton>
            <IconButton aria-label="thumbs up" onClick={handleClick2}>
              <ThumbDownIcon style={{color: isClicked2, fontSize:'50px'}}/>
            </IconButton>
            <IconButton aria-label="thumbs up" onClick={handleClick3}>
              <ContactSupportIcon style={{color: isClicked3, fontSize:'50px'}}/>
            </IconButton>
          </div>
        </div>}
      </div>
      <div className={triangleName}/>
      <div className={personNum}>
        <PersonIcon style={{fontSize: '90px', color: '#B45F2F', marginTop: '2vh'}}/>
        <select
        className="LangSelect"
        value={language}
        onChange={handleChangeLang}>
        {languageCodes.map(lang => (
          <option key={lang.language} value={lang.language}>
            {lang.name}
          </option>
        ))}
        </select>
      </div>
    </div>
  );
}

export default ChatBubble;
