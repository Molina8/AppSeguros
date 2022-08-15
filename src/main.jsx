import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './css/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider >
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>

)
