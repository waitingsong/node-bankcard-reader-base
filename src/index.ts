import { initialConfig } from './lib/config'

/* istanbul ignore next */
initialConfig.appDir = __dirname + '/..'

export * from './lib/config'
export * from './lib/index'
export * from './lib/model'
