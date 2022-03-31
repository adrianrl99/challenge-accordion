/* eslint-disable @typescript-eslint/no-explicit-any */
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

export default function Logger(key: string) {
  return {
    log: (message?: any, ...optionalParams: any[]) => {
      if (IS_DEVELOPMENT) {
        console.log(key, message, ...optionalParams)
      }
    },
    info: (message?: any, ...optionalParams: any[]) => {
      if (IS_DEVELOPMENT) {
        console.info(key, message, ...optionalParams)
      }
    },
    warn: (message?: any, ...optionalParams: any[]) => {
      if (IS_DEVELOPMENT) {
        console.warn(key, message, ...optionalParams)
      }
    },
    error: (message?: any, ...optionalParams: any[]) => {
      if (IS_DEVELOPMENT) {
        console.error(key, message, ...optionalParams)
      }
    },
  }
}
