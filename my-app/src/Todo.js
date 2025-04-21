import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField";






export default function Todo(){



const [task,setTask]=useState(false);

function taskhandleChange(e){
  setTask(e.target.value);
}


let taskCard=(
   <Card sx={{ maxWidth: 800 , marginTop: 2}}>
      <CardActionArea>
       
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Task 1 here 
          </Typography>
          <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
              </IconButton>

        </CardContent>
      </CardActionArea>
     
    </Card>

)

let taskForm=(
<Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '88ch' } }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Add task" variant="standard" onChange={taskhandleChange}/>
    </Box>
)


    return (






        <Box component="section" sx={{ p: 2, border: '1px dashed grey' , width:1000, height:1000, margin:"auto"}}>
        {taskCard}
        {taskForm}

        </Box>



    );
}
