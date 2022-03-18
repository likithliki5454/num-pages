import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Acordian.css'

import { AiOutlineTrademark,AiOutlinePlusCircle} from 'react-icons/ai';
import Acc2 from './Acc2';
import './Acc2.css'
import { Box, Popper } from '@mui/material';

export default function Accordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;



  return (
    <div id='acmain'>
        <div id='leftacordian'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">

            <div id='bfblock'>
          <div id='breakfast'>
            BREAKFAST
          </div>

          <div id='bflogos'>
           <span className='circleV1'>NE</span>
           <span className='circles'>PF</span>
           <span className='circles'>PF</span>
          </div>
          </div>

        </AccordionSummary>
        <AccordionDetails>
         <div id='adetails'>

<div id='adetails1'><span className='circleV2'>NE</span><span id='text'>Nutrisystem Entree</span></div>
             <div id='plusi'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></div>
         </div>

         <div id='adetails'>
<div id='adetails1'><span className='circleV2'>PF</span><span id='text'>PowerFuel</span></div>   <div id='plusi'>
<button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper>
    </div>
         </div>

         <div id='adetails'>
<div id='adetails1'><span className='circleV2'>PF</span><span id='text'>PowerFuel</span></div>         
 <div id='plusi'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></div>
         </div>

        <div id='lmore'>
            <div id='plusi'><AiOutlinePlusCircle/> <div id='more'>More</div></div>
         </div>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
           <div id='bfblock'>
          <div id='breakfast'>
            SNACK
          </div>

          <div id='bflogos'>
          <span className='circles11'>NS</span>
     
          </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
         <div id='adetails'>

<div id='adetails1'><span className='circleV2'>NS</span><span id='text'>Nutri Snack</span></div>
             <div id='plusi'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></div>
         </div>


        <div id='lmore'>
            <div id='plusi'><AiOutlinePlusCircle/> <div id='more'>More</div></div>
         </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
           <div id='bfblock'>
          <div id='breakfast2'>
            LUNCH
          </div>

          <div id='bflogos'>
          <span className='circleV1'>NE</span>
          <span className='circles12'>SC</span>
     
          </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
         <div id='adetails'>

<div id='adetails1'><span className='circleV2'>NE</span><span id='text'>Nutri Lunch</span></div>
             <div id='plusi'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></div>
         </div>

         <div id='adetails'>

<div id='adetails1'><span className='circleV2'>SC</span><span id='text'>Nutri Lunch</span></div>
             <div id='plusi'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></div>
         </div>


        <div id='lmore'>
            <div id='plusi'><AiOutlinePlusCircle/> <div id='more'>More</div></div>
         </div>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header">

            <div id='bfblock'>
          <div id='breakfast'>
            SNACK
          </div>

          <div id='bflogos'>
          <span className='circles'>PF</span>
          <span className='circles12'>SC</span>
          </div>
          </div>

        </AccordionSummary>
        <AccordionDetails>
         <div id='adetails'>

<div id='adetails1'><span className='circleV2'>PF</span><span id='text'>Nutri Snack</span></div>
             <div id='plusi'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></div>
         </div>

         <div id='adetails'>

<div id='adetails1'><span className='circleV2'>SC</span><span id='text'>Nutri Snack</span></div>
             <div id='plusi'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></div>
         </div>

        <div id='lmore'>
            <div id='plusi'><AiOutlinePlusCircle/> <div id='more'>More</div></div>
         </div>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel4bh-header">

            <div id='bfblock'>
          <div id='breakfast3'>
            DINNER
          </div>

          <div id='bflogos'>
           <span className='circleV1'>NE</span>
           <span className='circles'>PF</span>
           <span className='circles'>PF</span>
          </div>
          </div>

        </AccordionSummary>
        <AccordionDetails>
         <div id='adetails'>

<div id='adetails1'><span className='circleV2'>NE</span><span id='text'>Nutrisystem Entree</span></div>
             <div id='plusi'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></div>
         </div>

         <div id='adetails'>
<div id='adetails1'><span className='circleV2'>PF</span><span id='text'>PowerFuel</span></div>   <div id='plusi'>
<button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper>
    </div>
         </div>

         <div id='adetails'>
<div id='adetails1'><span className='circleV2'>PF</span><span id='text'>PowerFuel</span></div>         
 <div id='plusi'><button id='poppp' aria-describedby={id} type="button" onClick={handleClick}>
           <AiOutlinePlusCircle/>
         </button><Popper id={id} open={open} anchorEl={anchorEl}>
         <Box id="boxxx" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
           Log Additional Activity <br/>
           Log Yesterday's Activites
         </Box>
       </Popper></div>
         </div>

        <div id='lmore'>
            <div id='plusi'><AiOutlinePlusCircle/> <div id='more'>More</div></div>
         </div>
        </AccordionDetails>
      </Accordion>




      </div>
      <div id='rightblk'>
          <Acc2/>
      </div>
    </div>
  );
}
