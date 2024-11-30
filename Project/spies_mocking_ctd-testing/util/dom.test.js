//#region imports
import fs from 'fs';
import path from 'path';

import { it, expect } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';
import { expect } from 'chai';
//#endregion
//#region global data
const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
	document.body.innerHTML = '';
	document.write(htmlDocContent);
});
//#endregion
//#region it() functions
it('first test', () => {
	showError('test');
});

it('should add err para to id="err" element', () => {
	showError('Test');

	const errEl = document.getElementById('errors');
	const errPara = errEl.firstElementChild;

	expect(errPara).not.toBeNull();
});

it('should not contain err para initially', () => {
	const errEl = document.getElementById('errors');
	const errPara = errEl.firstElementChild;

	expect(errPara).not.toBeNull();
});

it('should output provided msg in err para', () => {
	const testErrMsg = 'Test';

	showError(testErrMsg);

	const errEl = document.getElementById('errors');
	const errPara = errEl.firstElementChild;

	expect(errPara.textContent).toBe(testErrMsg);
});
//#endregion
