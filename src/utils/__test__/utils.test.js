import { compareBy, createEmploy, createID, normalizeString } from '../'

describe('Utils test', () => {
  describe('compareBy', () => {
    it('compareBy toBeLessThan', () => {
      const result = compareBy('a')({ a: 3 }, { a: 1 })
      expect(result).toBe(1)
    })

    it('compareBy toBeGreaterThan', () => {
      const result = compareBy('a')({ a: 1 }, { a: 3 })
      expect(result).toBe(-1)
    })

    it('compareBy toBeEqual', () => {
      const result = compareBy('a')({ a: 1 }, { a: 1 })
      expect(result).toBe(0)
    })
  })

  describe('createID', () => {
    it('create diferent id each time', () => {
      const id1 = createID()
      const id2 = createID()

      expect(id1).not.toBe(id2)
    })
  })

  describe('createEmploy', () => {
    it('create diferent createEmploy each time', () => {
      const employ1 = createEmploy()
      const employ2 = createEmploy()

      expect(employ1).not.toBe(employ2)
    })

    it('create employ with custom arguments', () => {
      const name = 'mateo'
      const employ = createEmploy({ name })

      expect(employ.name).toBe(name)
    })
  })

  describe('normalizeString', () => {
    it('normalize accents', () => {
      const result = normalizeString('mamá')

      expect(result).toBe('MAMA')
    })

    it('normalize spaces', () => {
      const result = normalizeString('mamá una')

      expect(result).toBe('MAMAUNA')
    })
  })
})
