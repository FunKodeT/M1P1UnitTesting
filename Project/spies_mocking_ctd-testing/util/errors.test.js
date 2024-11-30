//#region
import { describe, expect, it } from 'vitest';
import { HttpError, ValidationError } from './errors';
//#endregion
//#region
//#region
describe('class HttpError', () => {
	it('should contain provided code, msg, and data', () => {
		const testStatus = 1;
		const testMsg = 'Test';
		const testData = { key: 'test' };

		const testError = new HttpError(testStatus, testMsg, testData);

		expect(testError.statusCode).toBe(testStatus);
		expect(testError.message).toBe(testMsg);
		expect(testError.data).toBe(testData);
	});
});
it('should contain undef data if no data', () => {
	const testStatus = 1;
	const testMsg = 'Test';

	const testError = new HttpError(testStatus, testMsg);

	expect(testError.statusCode).toBe(testStatus);
	expect(testError.message).toBe(testMsg);

	expect(testError.data).toBeUndefined();
	// expect(testError.data).not.toBeDefined();
	// expect(testError.data).toBe(testData);
});
//#endregion
//#region
describe('class ValidationError', () => {
	it('should contain provided msg', () => {
		const testMessage = 'test';

		const testError = new ValidationError(testMessage);

		expect(testError.message).toBe(testMessage);
	});
});
//#endregion
//#endregion
