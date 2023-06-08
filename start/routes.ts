import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'

Route.get('/', async () => {
  return { success: true, version: 2 }
})

Route.get('/test', async () => {
  return { test: true }
})

Route.post('/generate-script', 'WebsitesController.generateScript')
Route.post('/collect', 'WebsitesController.collectData')
Route.get('/websites', 'WebsitesController.all')

Route.get('/tracker', async () => {
  return Application.publicPath('tracker.js')
})

Route.get('/tracker.js', async ({ response }) => {
  return response.download(Application.publicPath('tracker.js'))
})
