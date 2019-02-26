import {
  normalize,
} from '@waiting/shared-core'

import { initialOpts } from './config'
import {
  DeviceOpts,
  Options,
} from './model'


export function parseDeviceOpts(options: Options): DeviceOpts {
  const deviceOpts: DeviceOpts = { ...initialOpts }

  if (! options.dllTxt) {
    throw new Error('params dllTxt undefined or blank')
  }
  else {
    deviceOpts.dllTxt = normalize(options.dllTxt)
  }

  if (typeof options.dllSearchPath === 'string' && options.dllSearchPath) {
    deviceOpts.dllSearchPath = options.dllSearchPath
  }

  if (typeof options.debug === 'boolean') {
    deviceOpts.debug = options.debug
  }

  if (typeof options.searchAll === 'boolean') {
    deviceOpts.searchAll = options.searchAll
  }

  if (typeof options.findCardRetryTimes === 'number') {
    deviceOpts.findCardRetryTimes = options.findCardRetryTimes
  }

  if (isNaN(deviceOpts.findCardRetryTimes) || deviceOpts.findCardRetryTimes < 0) {
    deviceOpts.findCardRetryTimes = initialOpts.findCardRetryTimes
  }

  return deviceOpts
}
