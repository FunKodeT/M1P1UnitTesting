//#region
import { vi } from 'vitest';
//#endregion
//#region
export const promises = {
	writeFile: vi.fn((path, data) => {
		return new Promise((resolve, reject) => {
			resolve();
		});
	}),
};
// export default
//#endregion
