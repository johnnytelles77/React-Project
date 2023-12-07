import React from 'react'
import CarWidget from './carwidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
    return (
    <div>

        <Flex bg="black" p="4" color="white">
            <Box p='4'>
                Paramo Cosmetics
            </Box>

            <Menu bg>
                <MenuButton as="button" color="white">
                    Categorias
                </MenuButton>
    <MenuList bg="black">
                <MenuItem color="black">Best Sellers</MenuItem>
                <MenuItem color="violet">Face</MenuItem>
                <MenuItem color="brown">Lips</MenuItem>
                <MenuItem color="red">Eyes</MenuItem>
    </MenuList>
</Menu>


<Spacer />






    <Box p='4'>
    <CarWidget />
    </Box>
</Flex>

    </div>
  )
}

export default NavBar
