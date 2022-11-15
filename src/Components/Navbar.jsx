import { Box, Text } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "../styles/Navbar.module.css";

const Navbar = () =>{
    return(
        <Box columns={[1,null,2]} className={styles.main_navbar} id="top">
            <Box >
                <Link  to="#"><Text className={styles.logo}>S H I V A M</Text></Link>
            </Box>
            <Box className={styles.nav_box2}>
                <Box>
                    <Link to="#" smooth><Text size={"sm"}>Home</Text></Link>
                </Box>
                <Link to="#about" smooth><Text size={"sm"}>About</Text></Link>
                <Link to="#skills" smooth><Text size={"sm"}>Skills</Text></Link>
                <Link to="#projects" smooth><Text size={"sm"}>Projects</Text></Link>
                <Link to="#contact" smooth><Text size={"sm"}>Contact</Text></Link>
                <a  href={"https://drive.google.com/file/d/1N8u-FjHCRGhXKcjtRTBCPSbmEzpBHqxl/view?usp=sharing"} target ="blank" ><button className={styles.resumeBtn}>Resume</button></a>
            </Box>
        </Box>
    )
}
export default Navbar;