import {Row} from 'reactstrap';
import '../../App.css';
import orangeBarbell from '../../assets/orangeBarbell.jpg';
import orangeBoxing from '../../assets/orangeBoxing.jpg';
import orangeDumbbell from '../../assets/orangeDumbbells.jpg';
import orangeGuitar from '../../assets/orangeGuitar.jpg';
import orangeHeadset from '../../assets/orangeHeadset.jpg';
import orangeJuice from '../../assets/orangeJuice.jpg';
import orangeSmile from '../../assets/orangeSmile.jpg';
import orangeSurf from '../../assets/orangeSurf.jpg';


const Footer = () => {
    return(
        <footer className='footer'>
            <Row>
                <img src={orangeBarbell} className="footerImg" alt="Orange with barbell" />
                <img src={orangeBoxing} className="footerImg" alt="Orange boxing" />
                <img src={orangeDumbbell} className="footerImg" alt="Orange with dumbbells" />
                <img src={orangeGuitar} className="footerImg" alt="Orange with guitar" />
                <img src={orangeHeadset} className="footerImg" alt="Orange with headset" />
                <img src={orangeJuice} className="footerImg" alt="Orange holding juice" />
                <img src={orangeSmile} className="footerImg" alt="Smiling orange" />
                <img src={orangeSurf} className="footerImg" alt="Orange with surfboard" />
            </Row>
        </footer>
    );
};

export default Footer;