export type Sleep = (ms: number) => Promise<void>

export const sleep: Sleep = ms => new Promise(r => setTimeout(r, ms))
