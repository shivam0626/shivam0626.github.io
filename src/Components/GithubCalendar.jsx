import { Box, Text, Image, SimpleGrid} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import styles from "../styles/GithubCalendar.module.css"

const GithubCalendar =()=>{
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 9;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
    return (
    <Box>
        <Text className={styles.para}>GitHub Calendar</Text>
        <Box className={styles.mainBox}>
            <GitHubCalendar 
                username="shivam0626" 
                // transformData={selectLastHalfYear}
                blockSize={18}
                fontSize={16}
                showWeekdayLabels
                hideTotalCount
                hideColorLegend
                color={"blue"}
            >
            <ReactTooltip delayShow={20} html />
            </GitHubCalendar>
        </Box> 
        {/* <Text className={styles.para}>Stats</Text> */}
        <SimpleGrid columns={[1,null,1,2]} spacing={3} className={styles.statsBox}>
            <Image src="https://github-readme-streak-stats.herokuapp.com/?user=shivam0626&" alt="shivam0626" />
            <Image  src="https://github-readme-stats.vercel.app/api?username=shivam0626&show_icons=true&locale=en" alt="shivam0626" />
        </SimpleGrid>
    </Box>
    )
}

export default GithubCalendar;
