import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { Stack, Carousel, Card, Placeholder } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const content = [{ title: "Architectural", subtitle: "Architectural Project in ur fucking life" }, { title: "Interior", subtitle: "Interior Project in ur fucking life" }]
const images = import.meta.glob("./assets/designs/*")

const contentCard = [{ title: "Interior", subtitle: "Interior Project in ur fucking life", button: "go everywhere" }, { title: "Interior", subtitle: "Interior Project in ur fucking life", button: "go everywhere" }, { title: "Interior", subtitle: "Interior Project in ur fucking life", button: "go everywhere" }, { title: "Interior", subtitle: "Interior Project in ur fucking life", button: "go everywhere" }]
const cardDesigns = import.meta.glob("./assets/card-designs/*")

// console.log({ images, type: typeof images })
// console.log({ cardDesigns, type: typeof cardDesigns })

// const navbar = document.getElementById("navbar");
// const sticky = navbar.offsetTop;

const carousel = Object.entries(images).map(([image], i) => {
    return (
        <Carousel.Item key={image + i}>
            <img
                className="d-block w-100"
                src={new URL(image, import.meta.url).href}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{content[i].title}</h3>
                <p>{content[i].subtitle}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
})

const cards = Object.entries(cardDesigns).map(([image], i) => {
    if (contentCard[i]) {
        return (
            <Card style={{ width: '18rem' }} key={image + i}>
                <Card.Img src={new URL(image, import.meta.url).href}>
                </Card.Img>
                <Card.Body>
                    <Card.Title>
                        {contentCard[i].title}
                    </Card.Title>
                    <Card.Text>
                        {contentCard[i].subtitle}
                    </Card.Text>
                    <Button> {contentCard[i].subtitle}
                    </Button>
                </Card.Body>
            </Card>
        )
    }

})

function ListProduct() {

    return (


        <div>
            <Navbar style={{ height: "150px", backdropFilter: "blur(9px)" }} className="px-5" fixed="top">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={new URL("./assets/logo/logo2.png", import.meta.url).href}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                    />

                </Navbar.Brand>
            </Navbar >


            <Carousel className='mb-3'>
                {carousel}
            </Carousel>

            <Stack gap={3} direction="horizontal" className='justify-content-center'>
                {cards}
            </Stack>

        </div >
    );


}



export default ListProduct