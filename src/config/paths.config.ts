import 'module-alias/register'
import { addAlias } from 'module-alias'
import { resolve } from 'path'

function addPaths(srcName: string) {
  addAlias('@controllers', resolve(`${srcName}/controllers`))
  addAlias('@models', resolve(`${srcName}/models`))
  addAlias('@config', resolve(`${srcName}/config`))
  addAlias('@views', resolve(`${srcName}/views`))
  addAlias('@src', resolve(`${srcName}`))
}

if (process.env.NODE_ENV === 'production') {
  addPaths('dist')
} else {
  addPaths('src')
}
