import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Input, Button, Text } from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      bg="white" // Cambiado a blanco
      color="#f192aa" // Texto en color rosa (puedes ajustarlo)
    >
      <Text fontSize="7xl" fontWeight="bold" mb="6">
        ¡Oops!
      </Text>
      <Text fontSize="3xl" fontWeight="bold" mb="8">
        Parece que te has perdido. ¡Vamos a ayudarte a encontrar lo que buscas!
      </Text>
      <Flex>
        <Input
          type="text"
          placeholder="Buscar..."
          variant="filled"
          mr="2"
          border="2px solid #8A4D76" // Borde púrpura (puedes ajustarlo)
          fontSize="3xl" // Tamaño de fuente extra grande
          fontWeight="bold" // Texto en negrita
        />
        <Button colorScheme="pink" fontSize="3xl" fontWeight="bold">Buscar</Button> {/* Cambiado a esquema de colores pink, 3xl y negrita */}
      </Flex>
      <Text fontSize="3xl" mt="8">
        O regresa a <Link to="/" style={{ color: '#8A4D76', textDecoration: 'underline', fontSize: '3xl', fontWeight: 'bold' }}>Inicio</Link>.
      </Text>
    </Flex>
  );
};




