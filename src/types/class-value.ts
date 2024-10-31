type ClassArray = ClassValue[]
type ClassDictionary = Record<string, any>

export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassArray
  | ClassDictionary
