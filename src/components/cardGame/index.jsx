import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Sports from '../../assets/sports.avif';

export default function CardGame(props) {
    return (
        <Card sx={{ width: 280 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={Sports}
                title={props.sportName}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.sportName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Número de participantes: {props.capacity} <br/>
                    Cadastrados: {props.registered}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Participar</Button>
            </CardActions>
        </Card>
    )
}