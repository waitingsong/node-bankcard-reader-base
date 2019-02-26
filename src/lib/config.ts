import {
  Config,
  DeviceOpts,
} from './model'


export const initialConfig: Config = {
  appDir: '',
}

/** 初始化参数 */
export const initialOpts: DeviceOpts = {
  cardType: 'auto',
  dllTxt: '',
  dllSearchPath: '',
  findCardRetryTimes: 0,
  debug: false,
  port: 0,
  searchAll: false,
}
