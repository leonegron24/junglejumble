import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { JumbleController } from './controllers/JumbleController.js';
const USE_ROUTER = false

class App {

  JumbleContoller = new JumbleController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
