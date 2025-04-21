import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';






export default function Todo(){



const [task,setTask]=useState(null);



    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' , width:1000, height:1000, margin:"auto"}}>
        
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





      </Box>
    );
}
