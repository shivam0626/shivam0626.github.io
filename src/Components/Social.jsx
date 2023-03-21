import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import {ImProfile  } from 'react-icons/im';
import { FaGithub, FaLinkedin,FaTwitter } from 'react-icons/fa';
import styles from "../styles/Social.module.css";

export const Social = () => {
  return (
    <Box className={styles.container}>
    <Box className={styles.box}>
        <a href="https://github.com/shivam0626" target="blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shivam-maurya-5131331b6/" target="blank"><FaLinkedin /></a>
        <a href="https://twitter.com/ShivamM96073793" target="blank"><FaTwitter /></a>
        <a  href={"https://drive.google.com/file/d/1xqGpp6pdVQCrkOKQI14I0549FJzz_4Hi/view?usp=sharing"} target="blank" ><button className={styles.resumeBtn}><ImProfile /></button></a>
    </Box>
    <Box>
      <Text fontSize={"1.5rem"}>Phone: +91-7310941087</Text>
      <Text fontSize={"1.5rem"}>E-mail: shivammaurya7310@gmail.com</Text>
    </Box>
</Box>
  )
}
