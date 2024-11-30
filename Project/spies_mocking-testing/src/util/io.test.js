//#region
import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';
//#endregion
//#region
vi.mock('fs');
vi.mock('path', () => {
	return {
		default: {
			join: (...args) => {
				return args[args.length - 1];
			},
		},
	};
});
//#endregion
//#region
it('should exec writeFile method', () => {
	const testData = 'Test';
	const testFilename = 'test.txt';

	writeData(testData, testFilename);

	expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
it('should exec writeFile method', () => {
	const testData = 'Test';
	const testFilename = 'test.txt';

	writeData(testData, testFilename);

	expect(fs.writeFile).toBeCalled();
});
it('should return promise with no value', () => {
	const testData = 'Test';
	const testFilename = 'test.txt';

	writeData(testData, testFilename);

	return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
//#endregion
