import { Box, Text, Image, SimpleGrid,} from "@chakra-ui/react"
import styles from "../styles/About.module.css";
import profile from "../sources/profile.png";
import resume from "../sources/Shivam-Maurya-Resume-1.pdf";

const Welcome =()=>{
    return(
        <Box className={styles.mainBox} id="about">
            <SimpleGrid columns={[1,null,2]} spacing="1rem" >
            <Box className={styles.headingBox}>
                <Text size={"3xl"}  className={styles.welcome}>Hey, I am Shivam Maurya...</Text>
                <Text mt="1rem" size={"md"} className={styles.para}>I am an aspiring full-stack web developer with hands-on experience in developing user-centric web apps. I did a full-stack web developer course at Masai School, where I learned 1000+ hours of coding. I am looking for an opportunity to enhance my knowledge.</Text>
                <a  href={resume} download={resume}><button className={styles.resumeBtn}>Download Resume</button></a>
            </Box>
            <Box className={styles.imageBox}>
                <Image className={styles.img} src={profile} alt="avatar"/>
            </Box>
            </SimpleGrid>
        </Box>
    )
}
export default Welcome;