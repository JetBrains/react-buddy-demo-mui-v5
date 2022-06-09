import * as React from 'react';
import {Container} from "@mui/material";
import {useState} from "react";

export type Product = {
  id: number,
  createdAt: string,
  description: string,
  media: string,
  title: string,
  totalDownloads: string
}


export default function App() {

  const [products, setProducts] = useState<Product[]>( [
    {
      id: 1,
      createdAt: '27/03/2019',
      description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
      media: '/static/images/products/product_1.png',
      title: 'Dropbox',
      totalDownloads: '594'
    },
    {
      id: 2,
      createdAt: '31/03/2019',
      description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      media: '/static/images/products/product_2.png',
      title: 'Medium Corporation',
      totalDownloads: '625'
    },
    {
      id:3,
      createdAt: '03/04/2019',
      description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
      media: '/static/images/products/product_3.png',
      title: 'Slack',
      totalDownloads: '857'
    }]);


  return (
    <Container maxWidth="sm">
      {products.map((product) => {

      })}
    </Container>
  );
}
