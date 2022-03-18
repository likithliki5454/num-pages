import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import{BiRun} from 'react-icons/bi';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

import {GiWaterBottle} from 'react-icons/gi';
import "./Acc2.css";
export default function Acc2() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:'1.2vw'}}>VEGETABLE</Typography>
        </AccordionSummary>
        
         
<div id='veg'>
<p className='circleV'>V</p>
<p id='vg'>Vegetables</p>
<p id='pipe'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></p>
</div>


<div id='veg'>
<p className='circleV'>V</p>
<p id='vg'>Vegetables</p>
<p id='pipe'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></p>
</div>


<div id='veg'>
<p className='circleV'>V</p>
<p id='vg'>Vegetables</p>
<p id='pipe'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></p>
</div>


<div id='veg'>
<p className='circleV'>V</p>
<p id='vg'>Vegetables</p>
<p id='pipe'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></p>
</div>


<div id='veg'>
<p className='circleV'>V</p>
<p id='vg'>Vegetables</p>
<p id='pipe'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></p>
</div>

<div id='veg'>
<p id='pipee'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></p>
<p id='vgg'>More</p>
</div>

      </Accordion>
      
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:'1.3vw'}}>   Activity </Typography><span id='activitygoal'>Daily Goal:30 min</span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontWeight:"bolder",fontSize:'1.3vw',marginLeft:'3vw'}}> 
          <BiRun id='run' /> Add activity <span style={{float:'right'}}><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></span>
          </Typography>
        </AccordionDetails>


      </Accordion> */}
      <div id='activityy'> Activity <span id='activitygoal'>Daily Goal:30 min</span>
      <button id='poppp3' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper>

      </div>


      <div style={{border:'0.1vw solid silver'}}>
<div style={{fontWeight:"bolder",fontSize:'1.3vw',marginLeft:'3vw' ,padding:'1vw'}}>
<BiRun id='run' /> Add activity <br></br><p id='ppp'>30 min left</p><span style={{float:'right'}}><button id='poppp2' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></span>
</div>
</div>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:'1.3vw'}}>Water </Typography><span id='activitygoal'>Daily Goal:64 oz.</span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontWeight:"bolder",fontSize:'1.3vw',marginLeft:'3vw'}}>
          < GiWaterBottle id='bot'/> Add Water   <span style={{float:'right',fontSize:'1.6vw'}}><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></span>
          </Typography>
        </AccordionDetails>


      </Accordion>
     
    </div>
  );
}
