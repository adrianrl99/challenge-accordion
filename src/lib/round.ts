export type Round = (num: number, exp: number) => number

export const round: Round = (num, exp) =>
  Math.round(num * 10 ** exp) / 10 ** exp
