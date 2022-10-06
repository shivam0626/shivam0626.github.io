import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import resume from "../sources/Shivam-Maurya-Resume-1.pdf"
import {ImProfile  } from 'react-icons/im';
import { FaGithub, FaLinkedin,FaTwitter } from 'react-icons/fa';
import styles from "../styles/Social.module.css";

export const Social = () => {
  return (
    <Box className={styles.container}>
    <Text size={"md"}>Also Visit :</Text>
    <Box className={styles.box}>
        <a href="https://github.com/shivam0626" target="blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shivam-maurya-5131331b6/" target="blank"><FaLinkedin /></a>
        <a href="https://twitter.com/ShivamM96073793" target="blank"><FaTwitter /></a>
        <a  href={resume} download={resume}><button className={styles.resumeBtn}><ImProfile /></button></a>
    </Box>
</Box>
  )
}
