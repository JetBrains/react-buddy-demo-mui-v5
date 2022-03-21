import * as React from 'react';
import {Button, Card, CardActions, CardContent, CircularProgress, Container, Typography} from "@mui/material";
import {MouseEvent, useEffect, useState} from "react";

export default function App() {


  const [loading, setLoading] = useState(0);
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems([1,2,3])
  });

  function onButtonClick(event: MouseEvent<HTMLButtonElement>) {
    // todo
  }

  if (loading) {
    return <CircularProgress/>
  }

  return (
    <Container maxWidth="sm">
      {items.map(item => (
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br/>
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"
                    onClick={onButtonClick}
                    onMouseDown={() => {}}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}
