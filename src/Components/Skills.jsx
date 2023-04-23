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
import typescript from "../sources/typescript-1174965.webp";
const Skills =()=>{
    const skills =[
        {
            name: "HTML5",
            icon: html5
        },
        {
            name: "CSS3",
            icon: css3
        },
        {
            name: "JavaScript",
            icon: jsl
        },
        {
            name: "TypeScript",
            icon: typescript
        },
        {
            name: "ReactJs",
            icon: rct
        },
        {
            name: "MongoDB",
            icon: mdb
        },
        {
            name: "NodeJs",
            icon: nodel
        },
        {
            name: "Redux",
            icon: redux
        },
        {
            name: "ExpressJs",
            icon: express
        },
        {
            name: "Chakra UI",
            icon: chakra
        },
        {
            name: "JSON Server" ,
            icon: json
        },
        {
            name: "Data Structure",
            icon: dsa
        },
        {
            name: "GitHub" ,
            icon: github
        },
        {
            name: "VS Code",
            icon: vscode
        },
        {
            name: "Postman",
            icon: postman
        },
    ]
    
    return (
        <Box id="skills">
            <Text size={"xl"} className={styles.head}>Tech Stack Summary</Text>
            <Text className={styles.para}>These are some tech stacks and tools, which I have utilized in my projects.</Text>
            <SimpleGrid className={styles.grid} columns={[2,null,3,6]} spacing={5}>
                {
                    skills.map((s)=>(
                        <Box className={styles.logo_img_box} key={s.name}>
                            <Image className={styles.img} src={s.icon} alt="logo"/>
                            <Text mt="0.5rem" fontSize={'1.2rem'} color={"white"}  >{s.name}</Text>
                        </Box>
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}
export default Skills;