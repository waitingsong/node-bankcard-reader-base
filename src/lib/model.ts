import { FModel as FM } from 'win32-def'


export interface Config {
  /** base directory of this module */
  appDir: string
}

export type Options = Partial<DeviceOpts>

export interface DeviceOpts {
  cardType: CardType
  /* path of dll */
  dllTxt: string
  dllSearchPath?: string
  /* 找卡重试数量，间隔1sec. Default: 0 */
  findCardRetryTimes: number
  /** Default: false */
  debug: boolean
  /** 指定设备端口 默认0自动搜索 */
  port: number
  /* search all available device , stop searching at first device found if false */
  searchAll: boolean
}

/** 设备配置参数 */
export interface Device {
  apib: FM.DllFuncsModel
  deviceOpts: DeviceOpts
  /** device in use */
  inUse: boolean
  openPort: number
}

/** 读卡类型 接触，非接触，auto轮询 */
export type CardType = 'jc' | 'fj' | 'auto'

/** 读卡结果 */
export interface BankCardData {
  cardno: string
}
