import { createSerializer, parseAsString } from 'nuqs'

export const serialize = createSerializer({
  email: parseAsString,
})
