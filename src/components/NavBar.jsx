import React from 'react';
import CarWidget from './carwidget';
import { Link } from 'react-router-dom';
import { Flex, Box, Menu, MenuButton, MenuList, MenuItem, Spacer } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <Flex bg="black" p="4" color="white">
            <Box p='4'>
                Allura
            </Box>

            <Menu>
                <MenuButton as="button" color="white">
                    Categorias
                </MenuButton>
                <MenuList bg="black">
                    <MenuItem color="black">
                        <Link to="/category/makeup">Inicio</Link>
                    </MenuItem>
                    <MenuItem color="black">
                        <Link to="/category/makeup">Makeup</Link>
                    </MenuItem>
                    <MenuItem color="violet">
                        <Link to="/category/nails">Nail</Link>
                    </MenuItem>
                </MenuList>
            </Menu>

<Spacer/>

            <Box p='4'>
                <CarWidget />
            </Box>
        </Flex>
    );
}

export default NavBar;
