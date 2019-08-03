import React from 'react'
import { render } from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import './index.css'
import App from './App'

const theme = createMuiTheme()

render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('app')
)
