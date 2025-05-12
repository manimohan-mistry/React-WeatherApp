import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// below link are materialui icon link
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";
export default function InfoBox({ info }) {
    const RAIN_URL = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=1024x1024&w=is&k=20&c=-TpnM2BbRyugF0MiWYPnEXGFWOj-a2KqQ-z-we02R1w=";
    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=2048x2048&w=is&k=20&c=MEinOvXAEFy9XXcclTgQV64m_FaoT_NRz8YyWItS9zM=";
    const COLD_URL = "https://media.istockphoto.com/id/172699850/photo/climbing-everest.webp?s=2048x2048&w=is&k=20&c=6dg_j816Qo7Y5IXzHLvctQgUZnTgvcQ6ay7kv_vL06k=";
    return (
        <div className="infoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }} className='CardContent'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Humidity = {info.humidity}</p>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Feels Like tem = {info.feelsLike}&deg;C</p>
                            <p>Min temperature = {info.tempMin}&deg;C</p>
                            <p>Max temperature = {info.tempMax}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}