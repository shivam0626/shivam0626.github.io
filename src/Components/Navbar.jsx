import { Box, Text } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "../styles/Navbar.module.css";
const Navbar = () =>{
    return(
        <Box columns={[1,null,2]} className={styles.main_navbar} id="top">
            <Box >
                <Link  to="#top"><Text className={styles.logo}>PortFolio</Text></Link>
            </Box>
            <Box className={styles.nav_box2}>
                <Link to="#about" smooth><Text size={"sm"}>About me</Text></Link>
                <Link to="#skills" smooth><Text size={"sm"}>Skills</Text></Link>
                <Link to="#projects" smooth><Text size={"sm"}>Projects</Text></Link>
                <Link to="#contact" smooth><Text size={"sm"}>Contact me</Text></Link>
            </Box>
        </Box>
    )
}
export default Navbar;