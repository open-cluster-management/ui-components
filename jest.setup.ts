/* Copyright Contributors to the Open Cluster Management project */

import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import { configure } from '@testing-library/dom'

configure({
    testIdAttribute: 'id',
})
