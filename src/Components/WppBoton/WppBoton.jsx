import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import './WppBoton.css'

export default function WppBoton() {
  return (
    <Link target="_blank" to={"https://wa.link/v9lez9"} className="WppBtn">
      <WhatsAppIcon sx={{ fontSize: "2.2em" }} />
    </Link>
  );
}

