import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classroom from '../../assets/images/classroom.jpg';
import CarouselCard from './CrouselCard';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <CarouselCard />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselCard />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselCard />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;