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

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Avatar from '@mui/material/Avatar';

import Sasago from "../assets/6.JPEG"

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Eventos = ({ imageSrc, title, subtitle, flipped }) => {
    
    const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  

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
            <Card style={{width: "-webkit-fill-available"}} sx={{ maxWidth: 1200 }}>
      <CardMedia
        component="img"
        alt="salon"
        height="220"
        image={Sasago}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sasago
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Jardín
        </Typography>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <p>Estacionamiento</p>
        <p>Baños</p>
        <p>Este es un dato simple</p>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
                }}
            >
            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
            
            </Box>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
                }}
            >
            
            <TextField id="outlined-basic" label="Numero de celular" variant="outlined"  type="number"/>
            </Box>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
                }}
            >
            
            <TextField id="outlined-basic" label="email" variant="outlined"  type="email"/>
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
      </CardContent>
      <CardActions>
      <Button variant="contained" onClick={handleClick}>Agendar</Button>
      
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se ha enviado su solicitud!
        </Alert>
      </Snackbar>
    </Card>
    
    
            
            
            
    
              
    
                
            
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
