import './config/paths.config'
import App from '@src/app'
import Routes from '@controllers/router'

export const AppContainer = new App(Routes)
export const server = AppContainer.listen()
