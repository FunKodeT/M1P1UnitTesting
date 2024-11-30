//#region imports
import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';

import { User } from './hooks';
import { describe } from 'node:test';
//#endregion
//#region global var
const testEmail = 'test@test.com';

let user;
// let user = new User(testEmail);
//#endregion
//#region hooks

beforeAll(() => {
	user = new User(testEmail);
	console.log('beforeAll()');
});
afterAll(() => {
	console.log('afterAll()');
});
beforeEach(() => {
	user = new User(testEmail);
	console.log('beforeEach()');
});
afterEach(() => {
	// user = new User(testEmail);
	console.log('afterEach()');
});

//#endregion
//#region describe
// describe.concurrent()
//#endregion
//#region functions
it.concurrent('should update the email', () => {
	const newTestEmail = 'test2@test.com';

	user.updateEmail(newTestEmail);

	expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {
	expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', () => {
	expect(user.email).toBe(testEmail);
});

it.concurrent('should clear the email', () => {
	user.clearEmail();

	expect(user.email).toBe('');
});

it.concurrent(
	'should still have an email property after clearing the email',
	() => {
		user.clearEmail();

		expect(user).toHaveProperty('email');
	}
);
//#endregion
