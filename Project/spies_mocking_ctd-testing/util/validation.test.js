//#region
import { it } from 'vitest';
import { validateNotEmpty } from './validation';
//#endregion

//#region
it('should throw err if empty string provided as value', () => {
	const testInput = '';
	const validationFn = () => validateStringNotEmpty(testInput);

	expect(validationFn).toThrow;
});

it('should throw err if empty string provided as value', () => {
	const testInput = '  ';
	const validationFn = () => validateStringNotEmpty(testInput);

	expect(validationFn).toThrow;
});

it('should throw err with provided err msg', () => {
	const testInput = '';
	const testErrorMessage = 'Test';

	const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

	expect(validationFn).toThrow(testErrorMessage);
});

//#endregion
