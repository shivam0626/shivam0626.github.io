import { Text, Image, SimpleGrid, Box} from "@chakra-ui/react"
import html5 from "../sources/html.png";
import css3 from "../sources/CSS3_logo.svg.png";
import rct from "../sources/React-icon.svg.png";
import jsl from "../sources/JavaScript-logo.png";
import mdb from "../sources/mongodb.png";
import nodel from "../sources/nodejs-logo.png";
import express from "../sources/express.png";
import dsa from "../sources/dsa.png";
import redux from "../sources/redux.png";
import github from "../sources/GitHub-Mark.png";
import styles from "../styles/Skills.module.css";
import chakra from "../sources/chakra.webp";
import vscode from "../sources/vs code.png";
import postman from "../sources/postman.png";
import json from "../sources/json.png";
import redis from "../sources/redis.png";
import typescript from "../sources/typescript-1174965.webp";
import socketio from "../sources/socketio.webp";

const Skills =()=>{
    return (
        <Box id="skills">
            <Text size={"xl"} className={styles.head}>Skills(Tech-stacks & Tools)</Text>
            <SimpleGrid className={styles.grid} columns={[1,null,2,4]} spacing={3}>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img}  src={html5} alt="logo"/>
                    <Text mt="0.5rem" color={"white"} >HTML</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={css3} alt="logo" />
                    <Text mt="0.5rem" color={"white"}  >CSS</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={jsl} alt="logo" />
                    <Text  mt="0.5rem" color={"white"} >JavaScript</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={typescript} alt="logo" />
                    <Text  mt="0.5rem" color={"white"} >TypeScript</Text>
                </Box>
                <Box className={styles.logo_img_box}>   
                    <Image className={styles.img} src={rct} alt="logo" />
                    <Text mt="1rem" color={"white"}  >React Js</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={mdb} alt="logo"  />
                    <Text mt="0.5rem" color={"white"}  >MongoDB</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={nodel} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >NodeJs</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={redux} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >Redux</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={express} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >Express Js</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={chakra} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >Chakra UI</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={json} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >JSON Server</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={redis} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >Redis</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={socketio} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >SocketIO</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={dsa} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >Data Structures</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={github} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >GitHub</Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={vscode} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >VS Code </Text>
                </Box>
                <Box className={styles.logo_img_box}>
                    <Image className={styles.img} src={postman} alt="logo"/>
                    <Text mt="0.5rem" color={"white"}  >Postman</Text>
                </Box>
            </SimpleGrid>
        </Box>
    )
}
export default Skills;