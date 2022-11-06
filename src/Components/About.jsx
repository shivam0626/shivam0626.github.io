import { Box, Text, Image, SimpleGrid,} from "@chakra-ui/react"
import styles from "../styles/About.module.css";
import profile from "../sources/profile.png";
const Welcome =()=>{
    return(
        <Box className={styles.mainBox} id="about">
             <Text size={"xl"} className={styles.head}>About me</Text>
            <SimpleGrid columns={[1,null,2]} spacing="1rem" >
            <Box className={styles.headingBox}>
                <Text mt="1rem" size={"md"} className={styles.para}>I am an aspiring full-stack web developer with hands-on experience in developing user-centric web apps. I did a full-stack web developer course at Masai School, where I learned 1000+ hours of coding.
                 I am looking for an opportunity to work with a company where I can use my knowledge towards the growth of the company.</Text>
            </Box>
            <Box className={styles.imageBox}>
                <Image className={styles.img} src={profile} alt="avatar"/>
            </Box>
            </SimpleGrid>
        </Box>
    )
}
export default Welcome;