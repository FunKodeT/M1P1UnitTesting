//#region
import { it, vi, expect } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';
//#endregion
//#region
const testResData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
	return new Promise((resolve, reject) => {
		if (typeof options.body !== 'string') {
			return reject('Not a string');
		}
		const testRes = {
			ok: true,
			json() {
				return new Promise((resolve, reject) => {
					resolve(testResData);
				});
			},
		};
		resolve(testRes);
	});
});
vi.stubGlobal('fetch', testFetch);
//#endregion
//#region
it('should return available res data', () => {
	const testData = { key: 'test' };

	return expect(sendDataRequest(testData)).resolves.toEqual(testResData);
});

it('should convert data to json before sending req', async () => {
	const testData = { key: 'test' };

	let errMsg;

	try {
		await sendDataRequest(testData);
	} catch (err) {
		errMsg = err;
	}
	// return expect(sendDataRequest(testData)).not.rejects.toBe('Not a string');

	expect(errMsg).not.toBe('Not a string');
});

it('should throw HttpError in case !ok res', () => {
	testFetch.mockImplementationOnce((url, options) => {
		return new Promise((resolve, reject) => {
			const testRes = {
				ok: false,
				json() {
					return new Promise((resolve, reject) => {
						resolve(testResData);
					});
				},
			};
			resolve(testRes);
		});
	});

	const testData = { key: 'test' };

	return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
//#endregion
