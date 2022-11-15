import React from 'react'
import { Box, Text, Image, SimpleGrid,} from "@chakra-ui/react"
import styles from "../styles/Home.module.css";
import coder from "../sources/coder.png";
import resume from "../sources/Shivam-Maurya-Resume.pdf";

export const Home = () => {
  return (
    <Box className={styles.mainBox} id="home">
    <SimpleGrid columns={[1,null,2]} spacing={1}>
    <Box className={styles.imageBox}>
        <Image className={styles.img} src={coder} alt="avatar"/>
    </Box>
    <Box className={styles.headingBox}>
        <Text  className={styles.welcome}>Hey, I am Shivam Maurya.</Text>
        <Text fontSize="2rem" color={'white'}>Full-Stack Web Developer</Text>
        <Text color={'white'}>A computer enthusiast who loves creating websites and exploring emerging web technologies.</Text>
          <a  href={"https://drive.google.com/file/d/1N8u-FjHCRGhXKcjtRTBCPSbmEzpBHqxl/view?usp=sharing"} target ="blank" ><button className={styles.prevBtn}>Preview Resume</button></a>
          <a style={{marginLeft:"1rem"}} href={resume} download={resume}><button className={styles.resumeBtn}>Download Resume</button></a>
    </Box>
    </SimpleGrid>
    </Box>
  )
}
