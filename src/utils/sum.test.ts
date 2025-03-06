import {expect, it} from 'vitest'

import {sum} from './sum'

it('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(4)
})

it('adds 0 + 0 to equal 0', () => {
	expect(sum(0, 0)).toBe(0)
})
