//#region
import { describe, it } from 'vitest';
import { extractPostData } from './posts';
//#endregion
//#region
describe('extractPostData()', () => {
	//#region
	it('should extract title and content from form data', () => {
		const testTitle = 'Test title';
		const testContent = 'Test content';

		const testFormData = {
			title: testTitle,
			content: testContent,
			get(key) {
				return this[key];
			},
		};

		const data = extractPostData(testFormData);

		expect(data.title).toBe(testTitle);
		expect(data.content).toBe(testContent);
	});
	//#endregion
});
//#endregion
