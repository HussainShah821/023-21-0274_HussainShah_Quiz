import Carousel from 'react-bootstrap/Carousel';
import image from '../components/Assets/Images/image 3.png';
import image2 from '../components/Assets/Images/image 4.png';
import {alignPropType} from "react-bootstrap/types";
export default function UncontrolledExample() {
    return (
        <Carousel>

            <Carousel.Item>
                <img src={image2} alt="" fluid className="mx-auto d-block"/>


            </Carousel.Item>

            <Carousel.Item>
                <img src={image} alt="" fluid className="mx-auto d-block"/>


            </Carousel.Item>

        </Carousel>
    );
}