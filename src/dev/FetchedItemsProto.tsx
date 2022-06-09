import * as React from "react";
import {useEffect, useState} from "react";
import {Button, Card, CardActions, CardContent, Stack} from "@mui/material";

export const FetchedItemsProto = () => {


  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('items.json')
      .then(resp => resp.json())
      .then(data => setItems(data));
  }, [])


  const handleClose = () => {
  };

  // JSX
  return (
    <Stack spacing={2}>
      {
        items.map(item => (
          <Card variant="outlined">
            <CardContent>
              {JSON.stringify(item)}
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
      }
    </Stack>
  );
}

