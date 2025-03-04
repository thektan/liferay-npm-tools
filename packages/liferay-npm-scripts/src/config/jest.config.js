/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const path = require('path');

module.exports = {
	coverageDirectory: 'build/coverage',
	globals: {
		Liferay: {}
	},
	modulePathIgnorePatterns: ['/__fixtures__/', '/build/', '/classes/'],
	testMatch: ['**/test/**/*.js'],
	testPathIgnorePatterns: ['/node_modules/', '<rootDir>/test/stories/'],
	testResultsProcessor: 'liferay-jest-junit-reporter',
	testURL: 'http://localhost',
	transform: {
		/* eslint-disable sort-keys */
		'\\.soy$': path.join(__dirname, '..', 'jest', 'transformSoy.js'),
		'.+': path.join(__dirname, '..', 'jest', 'transformBabel.js')
		/* eslint-enable sort-keys */
	}
};
