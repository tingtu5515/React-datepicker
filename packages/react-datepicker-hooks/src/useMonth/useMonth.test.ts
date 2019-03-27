import {renderHook, cleanup} from 'react-hooks-testing-library'
import useMonth from './useMonth'

afterEach(cleanup)

test('should return days for april 2019', () => {
  const {result} = renderHook(() => useMonth({year: 2019, month: 3}))
  expect(result.current.length).toBe(30)
  expect(typeof result.current[0]).toBe('object')
  // @ts-ignore
  expect(result.current[0].day).toBe('01')
  // @ts-ignore
  expect(result.current[result.current.length - 1].day).toBe('30')
})

test('should return days for march 2019', () => {
  const {result} = renderHook(() => useMonth({year: 2019, month: 2}))
  expect(result.current.length).toBe(35)
  expect(typeof result.current[0]).toBe('number')
  expect(typeof result.current[3]).toBe('number')
  expect(typeof result.current[4]).toBe('object')
  // @ts-ignore
  expect(result.current[4].day).toBe('01')
  // @ts-ignore
  expect(result.current[result.current.length - 1].day).toBe('31')
})
