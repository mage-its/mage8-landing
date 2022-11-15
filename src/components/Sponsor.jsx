import { Container, Card, Row, Text, Image} from "@nextui-org/react";

export default function App() {
    return (
        <Container fluid >
            <Card css={{
                border: "0px solid #000",
                marginTop: "4rem"
            }}>
            <Card.Body>
            <Row justify="center" align="center">
                <Text css={{
                    textGradient: "45deg, #546FDD -20%, #6FCC93 50%",
                    }}
                    className="text-5xl xl:text-7xl 2xl:text-8xl font-bold animate-text">
                Our Beloved Partner
                </Text>
            </Row>
            <Row justify="center" align="center" >
                <a href="https://www.include.co.id/">
                <Image
                src="/Include-NoBG.png"
                alt="Logo Include"
                width={400}
                height={600}
                />
                </a>
            </Row>
            <Row justify="center" align="center">
                <Text h1 size={50} color="white" css={{ m: 0 }}>
                PT Include Teknologi Indonesia
                </Text>
            </Row>
            </Card.Body>
        </Card>
        </Container>
    );
}