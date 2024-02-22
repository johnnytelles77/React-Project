
import React from 'react';
import CarWidget from './CarWidget';
import Categories from './Categories'
import { Flex, Spacer } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex bg="#f192aa" p="6" color="#fff" mb="2">
      <div p='4'>
        Allura
      </div>
      <Spacer />
      <Categories /> 
      <Spacer />
      <div p='4'>
        <CarWidget />
      </div>
    </Flex>
  )
}

export default NavBar;

