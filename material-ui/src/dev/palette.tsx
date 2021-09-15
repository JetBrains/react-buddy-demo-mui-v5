import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider, Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  TextField
} from '@mui/material';
import {Add, Delete, Edit} from '@mui/icons-material';

export default () => (
  <Palette>
    <Category name="Layout">
      <Component name="Box">
        <Variant>
          <Box></Box>
        </Variant>
      </Component>
      <Component name="Container">
        <Variant>
          <Container maxWidth="sm"></Container>
        </Variant>
        <Variant name="fixed">
          <Container fixed></Container>
        </Variant>
      </Component>
      <Component name="Stack">
        <Variant>
          <Stack my={1} spacing={2}>
            <Box sx={{ border: '1px dashed grey' }}>Item1</Box>
            <Box sx={{ border: '1px dashed grey' }}>Item2</Box>
            <Box sx={{ border: '1px dashed grey' }}>Item3</Box>
          </Stack>
        </Variant>
        <Variant name="horizontal">
          <Stack
              my={1}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
          >
            <Box sx={{ border: '1px dashed grey' }}>Item 1</Box>
            <Box sx={{ border: '1px dashed grey' }}>Item 2</Box>
            <Box sx={{ border: '1px dashed grey' }}>Item 3</Box>
          </Stack>
        </Variant>
      </Component>
      <Component name="Grid">
        <Variant>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Box>xs=6 md=8</Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>xs=6 md=4</Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>xs=6 md=4</Box>
            </Grid>
            <Grid item xs={6} md={8}>
              <Box>xs=6 md=8</Box>
            </Grid>
          </Grid>
        </Variant>
      </Component>
      <Component name="ImageList">
        <Variant>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            <ImageListItem>
              <img
                  src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
                  srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"Breakfast"}
                  loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                  src={`https://images.unsplash.com/photo-1522770179533-24471fcdba45`}
                  srcSet={`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"Camera"}
                  loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Variant>
      </Component>
    </Category>
    <Category name="Inputs">
      <Component name="Autocomplete">
        <Variant>
          <Autocomplete
              disablePortal
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Variant>
      </Component>
      <Component name="Button">
        <Variant requiredParams={["variant"]}>
          <Button>Text</Button>
        </Variant>
        <Variant name="contained">
          <Button variant="contained">Contained</Button>
        </Variant>
        <Variant name="outlined">
          <Button variant="outlined">Outlined</Button>
        </Variant>
      </Component>
      <Component name="IconButton">
        <Variant name="add">
          <IconButton aria-label="add">
            <Add/>
          </IconButton>
        </Variant>
        <Variant name="edit">
          <IconButton aria-label="edit">
            <Edit/>
          </IconButton>
        </Variant>
        <Variant name="delete">
          <IconButton aria-label="delete">
            <Delete/>
          </IconButton>
        </Variant>
      </Component>
    </Category>
  </Palette>
);
