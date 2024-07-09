import {Dispatch, SetStateAction} from "react";
import { cn } from "@/lib/utils";
import { Box } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
interface ITestTabs {
    activeTab: string;
    activeTabs?:any;
    setSelectedType: Dispatch<SetStateAction<string>>;
    className ?: string;
    forceRender ?: boolean;
}

 const PrimaryTab = ({ 
  activeTab : value,
   activeTabs, 
   setSelectedType,
   className,
  forceRender }: ITestTabs) => {

   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
     setSelectedType(newValue);
   };
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {
                activeTabs?.map((tab:any , index : number) => (
                  <Tab key={index} value={tab.value} label={tab.label} />
                ))  
              }
            </TabList>
          </Box>
            
          {
            activeTabs?.map((tab:any,index : number) => (
              forceRender ? 
              <Box key={index}  sx={{ display: value === tab.value ? 'block'  : 'none'}}>
                 {tab.comp}
              </Box> :
              <TabPanel key={index} value={tab.value}>
                {tab.comp} 
              </TabPanel>
            ))
          }
        </TabContext>
      </Box>
    );
  };

export default PrimaryTab