import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Conocenos} from './conocenos'

export function Slider() {
  
 return  <Tabs  variant='soft-rounded' colorScheme='red'>
        <TabList m='2' gap='5'>
            <Tab color="black">Nuestros Productos</Tab>
            <Tab color="black">Calcula tu seguro</Tab>
            <Tab color="black">Conócenos</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                Nuestros Productos
            </TabPanel>
            <TabPanel>
                Holaaaaa
            </TabPanel>
            <TabPanel>
                <Conocenos />
            </TabPanel>
        </TabPanels>
    </Tabs>

}