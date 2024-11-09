import type { ClassValue } from '@/types/class-value'

function toVal(input: ClassValue): string | number {
  if (typeof input === 'string' || typeof input === 'number')
    return input

  if (Array.isArray(input))
    return input.map(element => toVal(element)).filter(Boolean).join(' ')

  if (typeof input === 'object' && input !== null)
    return Object.keys(input).filter(key => Boolean(input[key])).join(' ')

  return ''
}

function clsx(...args: ClassValue[]): string {
  return args.map(element => toVal(element)).filter(Boolean).join(' ')
}

function getWords(str: string): string[] {
  return Array.from(str.match(/[A-Z]?[a-z]+|\d+|[A-Z]+(?![a-z])/g) ?? [])
}

function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function capitalize<T extends string>(str: T): Capitalize<T> {
  return upperFirst(str.toLowerCase()) as Capitalize<T>
}

export {
  capitalize,
  clsx,
  getWords,
  upperFirst,
}
