import { Box, Container, Text, SimpleGrid, Divider } from "@chakra-ui/react"
import { Email } from "./Email"
import { Social } from "./Social"
import styles from "../styles/Contactme.module.css"

export const Contactme = () => {
  return (
    <Box className={styles.mainBox} id="contact">
    <Container pb="1.5rem"  maxW={"5xl"}>
        <Text className={styles.contact}>Contact me:</Text>
        <SimpleGrid columns={[1,null,2]}>
            <Email />
            <Social />
        </SimpleGrid>
    </Container>
    <Divider />
    <Text pt="10px" color={"white"}>© 2022 All rights reserved</Text>
    </Box>
  )
}
