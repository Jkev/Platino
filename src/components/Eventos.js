import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Divider from '@mui/material/Divider';
import "./Eventos.css";
import { useInView } from "react-intersection-observer";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Sasago from "../assets/6.JPEG"
const Eventos = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent2 = () => {
    if (!flipped) {
      return (
        <>
          <div className="eventos__image">
              <h2>Salon</h2>
          </div>
          <div className="eventos__content">
            <h1 className="eventos__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="eventos__content">
            <h1 className="eventos__title">Agendar</h1>
            <p>Datos del contacto</p>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Sasago}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sasago
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
                }}
            >
            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
            <TextField id="outlined-basic" label="Numero de celular" variant="outlined"  type="number"/>

            
                

            
            </Box>
            <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
            }}
      >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Elige tu fecha"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    
    
      </Box>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Sasago" value="1" />
            <Tab label="Salon 2" value="2" />
            <Tab label="Salon 3" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Sasago</TabPanel>
        <TabPanel value="2">Salon 2</TabPanel>
        <TabPanel value="3">Salon 3</TabPanel>
      </TabContext>
    </Box>
    
              
      <Button variant="contained">Agendar</Button>
            
                
            
          </div>
            
          
        </>
      );
    }
  };

  return (
    <div className={inView ? "eventos eventos--zoom" : "eventos"} ref={ref}>
      {renderContent2()}
    </div>
  );
};

export default Eventos;
