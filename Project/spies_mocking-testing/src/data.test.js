//#region
import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';
//#endregion
//#region
describe('generateReportData()', () => {
	it('should exec logFn if provided', () => {
		// const logger = vi.fn(() => {});
		const logger = vi.fn();

		logger.mockImplementation(() => {});
		// logger.mockImplementationOnce(() => {})

		generateReportData(logger);

		// expect(logger).toBeCalledWith();
		// expect(logger).toBeCalledTimes(2);
		expect(logger).toBeCalled();
	});
});
//#endregion
