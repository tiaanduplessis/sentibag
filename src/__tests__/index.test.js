import analyze from '../'
import afinn111 from 'afinn111-lexicon'

test('should be defined', () => {
  expect(analyze).toBeDefined()
})

test('should throw if no text provided', () => {
  expect(() => analyze('')).toThrow()
})

test('should analyze text', () => {
  expect(analyze('I love you', afinn111).score).toBe(3)
  expect(analyze('I hate you', afinn111).score).toBe(-3)
})

test('should strip punctuation', () => {
  expect(analyze('Hi, how are you?                I think your nice', afinn111).score).toBe(3)
})
