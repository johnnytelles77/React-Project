import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSeedling, faTree } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MenuList, MenuItem } from '@chakra-ui/react';

export const Categories = () => {
    return (
        <MenuList bg="black">
            <MenuItem color="white">
                <Link to={'/'}>
                    Inicio
                </Link>
            </MenuItem>
            <MenuItem color="white">
                <Link to={'/category/makeup'}>
                    Makeup
                </Link>
            </MenuItem>
            <MenuItem color="white">
                <Link to={'/category/nails'}>
                    Nails
                </Link>
            </MenuItem>
        </MenuList>
    );
}

export default Categories;

