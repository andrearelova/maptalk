import React, {useState} from 'react';
import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import IconButton from '@material-ui/core/IconButton';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: '#E2966B',
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

function ChatBubble({userMessage}) {
    const [pageLeft, setPageLeft] = useState(0);
    const [page, setPage] = useState(0);
    const handleChange = (e, newVal) => {
      setPage(newVal);
    }
  return (
      <div className="LeftBubble">
        <StyledTabs value={page} onChange={handleChange} aria-label="chat feedback tabs">
        <StyledTab style={{borderRadius:'50px 0px 0px 50px'}} value={0} label="Talk"></StyledTab>
        <StyledTab style={{borderRadius:'0px 50px 50px 0px'}} value={1} label="Feedback"></StyledTab>
        </StyledTabs>
        <hr className="TabLine"/>
        {page === 0 && <div>
          <form noValidate autoComplete="off">
          <CssTextField id="standard-multiline-static" multiline
          rows={3} label="Type Here" />
          </form>
        </div>}
        {page === 1 && <div>
          <div className="FeedbackIcons">
            <IconButton aria-label="thumbs up">
              <ThumbUpIcon style={{color: '#8A8785', fontSize:'50px'}}/>
            </IconButton>
            <IconButton aria-label="thumbs up">
              <ThumbDownIcon style={{color: '#8A8785', fontSize:'50px'}}/>
            </IconButton>
            <IconButton aria-label="thumbs up">
              <ContactSupportIcon style={{color: '#8A8785', fontSize:'50px'}}/>
            </IconButton>
          </div>
        </div>}
      </div>
  );
}

export default ChatBubble;
