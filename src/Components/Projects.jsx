import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import styles from "../styles/Projects.module.css";
import jcrew from "../sources/Jcrew.PNG";
import kimaye from "../sources/kimaye.PNG";
import sephora from "../sources/sephora.PNG";
import fundamental from "../sources/fundamental.PNG";
import timecamp from "../sources/time-camp.PNG";
import {FaGithub,FaExternalLinkAlt} from "react-icons/fa";

const Projects =()=>{
    return(
        <Box className={styles.p_main} id="projects">
            <Text className={styles.header} size={"xl"}>Projects</Text>
            <Text className={styles.toptext}>These are some projects done by me:</Text>
            <SimpleGrid m="0rem 3rem" columns={[1,null,2]} spacing={6} >
                <Box className={styles.p_box}>
                    <Image className={styles.p_img} src={sephora} alt="p_img" />
                    <Text className={styles.project_title} size={"md"}>Sephora Clone</Text>
                    <Text className={styles.text}>Sephora is a global beauty chain that offers a wide range of classic and emerging brands.</Text>
                    <Text className={styles.text}>Tech-stacks: ReactJs, CSS, Redux, Chakra UI, Firebase, MongoDB</Text>
                    <Text className={styles.text}>Group Project</Text>
                    <Text className={styles.text}>Area of Responsibilty: Cart & Checkout Page</Text>
                    <Text className={styles.text}>Duration: 05 days</Text>
                    <Box p="1rem">
                        <a href="https://sephora-pink.vercel.app/" target="blank" rel="noreferrer"><button className={styles.btn}><FaExternalLinkAlt /></button></a>
                        <a href="https://github.com/Ankur982/dull-letter-5131" target="blank" rel="noreferrer"><button className={styles.btn}><FaGithub /></button></a>
                    </Box>
                </Box>
                <Box className={styles.p_box}>
                    <Image className={styles.p_img} src={timecamp} alt="p_img" />
                    <Text className={styles.project_title} size={"md"}>TimeCamp Clone</Text>
                    <Text className={styles.text}>TimeCamp is a simple,feature-rich time tracking app to track tasks.</Text>
                    <Text className={styles.text}>Tech-stacks: ReactJs, CSS, Redux, Chakra UI, Firebase</Text>
                    <Text className={styles.text}>Group Project</Text>
                    <Text className={styles.text}>Area of Responsibilty: Dashboard Page</Text>
                    <Text className={styles.text}>Duration: 05 days</Text>
                    <Box p="1rem">
                        <a href="https://timecampclone-cw.netlify.app/" target="blank" rel="noreferrer"><button className={styles.btn}><FaExternalLinkAlt /></button></a>
                        <a href="https://github.com/ssksds/Time-Camp-Clone" target="blank" rel="noreferrer"><button className={styles.btn}><FaGithub /></button></a>
                    </Box>
                </Box>
                <Box className={styles.p_box}>
                    <Image className={styles.p_img} src={jcrew} alt="p_img" />
                    <Text className={styles.project_title} size={"md"}>JCrew.com Clone</Text>
                    <Text className={styles.text}>An E-commerce website for clothings, footwears and accessories.</Text>
                    <Text className={styles.text}>Tech-stacks: HTML, CSS, JavaScript</Text>
                    <Text className={styles.text}>Group Project</Text>
                    <Text className={styles.text}>Area of Responsibilty: Signin & Signup Page</Text>
                    <Text className={styles.text}>Duration: 05 days</Text>
                    <Box p="1rem">
                        <a href="https://jcrew-clone-0626.netlify.app" target="blank" rel="noreferrer"><button className={styles.btn}><FaExternalLinkAlt /></button></a>
                        <a href="https://github.com/Raghav435/J.Crew_Clone" target="blank" rel="noreferrer"><button className={styles.btn}><FaGithub /></button></a>
                    </Box>
                </Box>
                <Box className={styles.p_box}>
                    <Image className={styles.p_img} src={fundamental} alt="p_img" />
                    <Text className={styles.project_title} size={"md"}>Fundamental.in Clone</Text>
                    <Text className={styles.text}>An E-commerce website for electronics and gadgets.</Text>
                    <Text className={styles.text}>Tech-stacks: HTML, CSS, JavaScript</Text>
                    <Text className={styles.text}>Group Project</Text>
                    <Text className={styles.text}>Area of Responsibilty: Products Page</Text>
                    <Text className={styles.text}>Duration: 05 days</Text>
                    <Box p="1rem">
                        <a href="https://fundamnetal-in.netlify.app/" target="blank" rel="noreferrer"><button className={styles.btn}><FaExternalLinkAlt /></button></a>
                        <a href="https://github.com/VishalBhuse/Fundamental.in" target="blank" rel="noreferrer"><button className={styles.btn}><FaGithub /></button></a>
                    </Box>
                </Box>
                <Box className={styles.p_box}>
                    <Image className={styles.p_img} src={kimaye} alt="p_img" />
                    <Text className={styles.project_title} size={"md"}>Kimaye.com Clone</Text>
                    <Text className={styles.text}>A Grocery website where fresh fruits are available.</Text>
                    <Text className={styles.text}>Tech-stacks: HTML, CSS, JavaScript</Text>
                    <Text className={styles.text}>Individaul Project</Text>
                    <Text className={styles.text}>Duration: 05 days</Text>
                    <Box p="1rem">
                        <a href="https://shivam0626.github.io/Kimaye.com-Clone/" target="blank" rel="noreferrer"><button className={styles.btn}><FaExternalLinkAlt /></button></a>
                        <a href="https://github.com/shivam0626/Kimaye.com-Clone" target="blank" rel="noreferrer"><button className={styles.btn}><FaGithub /></button></a>
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
    )

}
export default Projects;