import { AxiosRequestConfig } from '../types'
import { isPlainObject, deepMerge } from '../helpers/util'

const strats = Object.create(null)
const stratKeysFromVal2 = ['url', 'params', 'data']
const stratKeysDeepMerge = ['headers']

// 默认合并策略
function defaultStart(originVal: any, newVal: any): any {
  return typeof newVal !== 'undefined' ? newVal : originVal
}

// 复杂对象合并策略
function deepMergeStrat(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2)
  } else if (typeof val2 !== 'undefined') {
    return val2
  } else if (isPlainObject(val1)) {
    return deepMerge(val1)
  } else if (typeof val1 !== 'undefined') {
    return val1
  }
}

// 只接受传入参数的合并策略
function fromVal2Start(va1: any, val2: any): any {
  if (typeof val2 !== 'undefined') {
    return val2
  }
}

stratKeysFromVal2.forEach(key => {
  strats[key] = fromVal2Strat
})


stratKeysDeepMerge.forEach(key => {
  strats[key] = deepMergeStrat
})


export default function mergeConfig(
  originConfig: AxiosRequestConfig,
  newConfig?: AxiosRequestConfig
): AxiosRequestConfig {
  if (!newConfig) {
    newConfig = {}
  }

  const config = Object.create(null);

  for (let key in newConfig) {
    mergeField(key)
  }

  function mergeField(key: string): void {
    const start = starts[key] || defaultStart
    config[key] = start(originConfig[key], newConfig[key])
  }
}
