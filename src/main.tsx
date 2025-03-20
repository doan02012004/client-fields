
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './libs/context/index.tsx'
import QueryProvider from './libs/hooks/QueryProvider.tsx'
import { StyleProvider } from '@ant-design/cssinjs'

createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <QueryProvider>
      <BrowserRouter>
        <StyleProvider layer>
          <App />
        </StyleProvider>
      </BrowserRouter>
    </QueryProvider>
  </ContextProvider>
)
