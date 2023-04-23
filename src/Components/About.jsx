import { Box, Text, Image, SimpleGrid,} from "@chakra-ui/react"
import styles from "../styles/About.module.css";
import profile from "../sources/profile.png";
const Welcome =()=>{
    return(
        <Box className={styles.mainBox} id="about">
             <Text size={"xl"} className={styles.head}>About me</Text>
            <SimpleGrid columns={[1,null,2]} spacing="1rem" >
            <Box className={styles.headingBox}>
                <Text mt="1rem" size={"md"} className={styles.para}>Hello! My name is Shivam Maurya and I am a passionate full-stack developer.
                With a strong foundation in both front-end and back-end development, I am excited to contribute to projects that require a full-stack approach.
                My attention to detail, problem-solving abilities, and collaborative mindset make me a valuable asset to any development team.
                I am dedicated to delivering high-quality code that meets project requirements and exceeds expectations, while also prioritizing user experience and accessibility.
                </Text>
            </Box>
            <Box className={styles.imageBox}>
                <Image className={styles.img} src={profile} alt="avatar"/>
            </Box>
            </SimpleGrid>
        </Box>
    )
}
export default Welcome;