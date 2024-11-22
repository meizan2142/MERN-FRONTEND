import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cards = [
    {
        id: 1,
        img: 'https://i.ibb.co.com/zmNDdJp/young-bearded-man-with-striped-shirt-273609-5677.jpg',
        name: 'Solo Sikao',
        description: 'A testimonial section highlights positive feedback from clients or users to build trust and credibility.'
    },
    {
        id: 2,
        img: 'https://i.ibb.co.com/Q8rGcZg/portrait-smiling-young-man-rubbing-his-hands-171337-10297.jpg',
        name: 'Bruno Fernandez',
        description: 'The product quality exceeded my expectations, and the delivery was super fast.'
    },
    {
        id: 3,
        img: 'https://i.ibb.co.com/xzpgRrg/portrait-cheerful-confident-young-handsome-man-with-beard-smiling-crossed-arms-176420-12119.jpg',
        name: 'Harry Maguire',
        description: 'I love the seamless checkout process and the excellent customer support – highly recommend.'
    },
]

const Testimonial = () => {
    return (
        <div className="grid desktop:grid-cols-3 desktop:mx-60 laptopL:grid-cols-3 laptopL:mx-5 lg:grid-cols-2 lg:gap-5 md:grid-cols-2 desktop:space-y-0 md:gap-4 mobileL:space-y-4 mobileM:space-y-4 mobileS:space-y-4">
            {
                cards.map(card => <>
                    <Card key={card.id} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={card.img}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </>)
            }
        </div>
    )
}

export default Testimonial