import { Box, Flex, IconButton,useBoolean, Text } from '@chakra-ui/react';
import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
import styles from "../styles/Navbar.module.css";

const links = [
  {
    to:'#',
    label:"Home"
  },
  {
    to:'#about',
    label:"About"
  },
  {
    to:'#skills',
    label:"Skills"
  },
  {
    to:'#projects',
    label:"Projects"
  },
  {
    to:"#contact",
    label:"Contact"
  }
];

const Navbar = () => {
  const [flag,setFlag] = useBoolean(false);
  
  return (
    <Box className={styles.main_navbar}>
      <Box >
        <Link  to="#"><Text className={styles.logo}>S H I V A M</Text></Link>
      </Box>
      <Box>
        <Flex className={styles.nav_box2} display={{base:'none',md:'flex'}}>
          {links?.map((link)=>(
            <Link key ={link.to} to={link.to} smooth>
              {link.label}
            </Link>
          ))}
        </Flex>
        <IconButton 
         bgColor={"rgb(41, 5, 44)"}
         onClick={setFlag.on}
         display={{base:'block',md:'none'}}
         className={styles.hamburger}
         icon={<HamburgerIcon />}></IconButton>
      </Box>
     {flag &&  <Box 
        className={styles.hamburger_box}
        display={{base:'block',md:'none'}}
      >
        <Flex>
          <Box pos='fixed' top='2rem' right='1rem'>
            <IconButton bgColor={"rgb(41, 5, 44)"}
            onClick={setFlag.off}
            icon={<CloseIcon />}></IconButton>
          </Box>
        </Flex>
        <Flex 
          align='center'
          justify='center'
          mt='3rem'>
          <Flex direction={'column'} align='center' gap={'1rem'} fontSize={'1.5rem'}>
            {links?.map((link)=>(
              <Link key ={link.to} to={link.to} smooth>
                {link.label}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box> 
      }
    </Box>
  )
}

export default Navbar