
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise,GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";
import { TiWeatherCloudy } from "react-icons/ti";
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";
const TempAndDetails = ({
    weather:{
        details,
        icon,
        temp,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        speed,
        humidity,
        feels_like,
    },
    units,
}) => {
    const verticalDetails=[
        {
            id:1,
            Icon:FaThermometerEmpty,
            title:"Real Feal",
            value:`${feels_like.toFixed()}°`,
        },
        {
            id:2,
            Icon:BiSolidDropletHalf,
            title:"Humidity",
            value:`${humidity.toFixed()}%`,
        },
        {
            id:3,
            Icon:FiWind,
            title:"Windy",
            value:`${speed.toFixed()}${units==="metric"?"km/h":"m/s"}`,
        },
    ];
    const horizontalDetails=[
        {
            id:1,
            Icon:GiSunrise,
            title:"Sunrise",
            value:sunrise,
        },
        {
            id:2,
            Icon:GiSunset,
            title:"Sunset",
            value:sunset,
        },
        {
            id:3,
            Icon:MdKeyboardArrowUp,
            title:"High",
            value:`${temp_max.toFixed()}°`,
        },
        {
            id:4,
            Icon:MdKeyboardArrowDown,
            title:"Low",
            value:`${temp_min.toFixed()}°`,
        },
    ];
  return (
    <div>
    <div className="flex items-center justify-center py-6 text-2xl *:text-cyan-700">
        <p>{details}</p>
    </div>
    <div className="flex flex-row items-center justify-between py-3">
        <img src={icon}
         alt="Weather-icon"
         className="w-20"
          />
          <p className="text-5xl">{`${temp.toFixed()}°`}</p>
          <div className="flex flex-col space-y-3 items-start">
          {
            verticalDetails.map(({id,Icon,title,value})=>(
            <div key={id} 
            className="flex font-light text-sm items-center justify-center">
            <Icon size={18} className="mr-1"/>
            {`${title}:`}
            <span className="font-medium ml-1">{value}</span>
           </div>
            ))}
           
           </div>
          </div>
          <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
            {
                horizontalDetails.map(({id,Icon,title,value})=>(
                    <div key={id} className="flx flex-row items-center">
                        <Icon size={30}/>
                        <p className="font ml-1">
                        {`${title}:`}
                        <span className="font-medium ml-1">{value}</span>
                        </p>
                    </div>
                ))
            }
            
            <div className="flex flex-row items-center">

            </div>
          </div>





    </div>
    
  );
};

export default TempAndDetails;