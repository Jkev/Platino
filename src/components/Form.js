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
const Form = ({ imageSrc, title, subtitle, flipped }) => {
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
          <div class="hover-table-layout">
    <div class="listing-item">
        <figure class="image">
            <img src="https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg" alt="image" />
            <figcaption>
              <div class="caption">
                <h1>$10000</h1>
                <p>lorem</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>Show catalogue listing</h4>
            <h4>Email signatures and banners</h4>
            <h4>E-invitations</h4>
            <h4>Online brochures</h4>
        </div>
    </div>
    <div class="listing-item">
        <figure class="image">
            <img src="https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg" alt="image" />
            <figcaption>
               <div class="caption">
                <h1>$ 2000</h1>
                <p>lorem</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>Press releases</h4>
            <h4>Company logos for online listings</h4>
            <h4>Product categories</h4>
            <h4>Using the ADIPEC logo on exhibitor advertising</h4>
            <h4>Commercial opportunities in the preview and show dailies</h4>
        </div>
    </div>
    <div class="listing-item">
        <figure class="image">
            <img src="https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg" alt="image" />
            <figcaption>
               <div class="caption">
                <h1>$100</h1>
                <p>lorem</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>Mobile app listing</h4>
            <h4>Order visitor badges</h4>
            <h4>Global meetings programme</h4>
            <h4>Get Social</h4>
        </div>
    </div>
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

export default Form;
