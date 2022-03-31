import './styles/reset.css'
import './styles/fonts.css'
import './styles/global.css'
import './styles/theme.css'

import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'

import { App } from './App'

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.querySelector('main'),
)
