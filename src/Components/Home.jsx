import React from 'react'
import { Box, Text, Image, SimpleGrid,} from "@chakra-ui/react"
import styles from "../styles/Home.module.css";
import logo from "../sources/logo.png";
import resume from "../sources/Shivam-Maurya-Resume.pdf";
import { GoDesktopDownload } from "react-icons/go";
import { VscPreview } from "react-icons/vsc"

export const Home = () => {
  return (
    <Box className={styles.mainBox} id="home">
    <SimpleGrid columns={[1,null,2]} spacing={1}>
    <Box className={styles.imageBox}>
        <Image className={styles.img} src={logo} alt="avatar"/>
    </Box>
    <Box className={styles.headingBox}>
        <Text  className={styles.welcome}>Hey, I am Shivam Maurya.</Text>
        <Text fontSize="2rem" color={'white'}>Full-Stack Web Developer</Text>
        <Text color={'white'} fontSize={'1.5rem'}>A computer enthusiast who loves creating websites and exploring emerging web technologies.</Text>
        <Box className={styles.btn_box}>
          <a  href={"https://drive.google.com/file/d/1xqGpp6pdVQCrkOKQI14I0549FJzz_4Hi/view?usp=sharing"} target ="blank" >
            <button className={styles.prevBtn}><VscPreview />Preview</button>
          </a>
          <a  href={resume} download={resume}>
            <button className={styles.resumeBtn}><GoDesktopDownload />Download</button>
          </a>
        </Box>
    </Box>
    </SimpleGrid>
    </Box>
  )
}
