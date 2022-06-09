import {useEffect, useState} from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider, Grid,
  Stack,
  Typography
} from "@mui/material";
import * as React from "react";

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

export const ProductProto = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}

    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            alt="Product"
            src={"/*product.media*/"}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {/*title*/}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {/*description*/}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              {/*totalDownloads*/}
              Downloads
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  )
}
