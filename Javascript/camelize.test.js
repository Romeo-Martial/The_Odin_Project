const camelize = require('./camelize');

test('', () => {expect(camelize('')).toBe('');});
test('', () => {expect(camelize('background-color')).toBe('backgroundColor');});
test('', () => {expect(camelize('list-style-image')).toBe('listStyleImage');});
test('', () => {expect(camelize('-webkit-transition')).toBe('WebkitTransition');});
test('', () => {expect(camelize('border-top-color')).toBe('borderTopColor');});
