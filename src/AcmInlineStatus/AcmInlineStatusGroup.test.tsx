import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'
import { AcmInlineStatusGroup } from './AcmInlineStatusGroup'

describe('AcmInlineStatusGroup', () => {
    test('renders', async () => {
        const { getByText, getAllByRole, container } = render(
            <AcmInlineStatusGroup healthy={3} warning={2} danger={1} progress={4} unknown={0} showZeroes />
        )
        expect(getAllByRole('listitem').length).toEqual(5)
        expect(getByText(3)).toBeInTheDocument()
        expect(getByText(2)).toBeInTheDocument()
        expect(getByText(1)).toBeInTheDocument()
        expect(getByText(4)).toBeInTheDocument()
        expect(getByText(0)).toBeInTheDocument()
        expect(await axe(container)).toHaveNoViolations()
    })
    test('renders with undefined and zero values hidden', () => {
        const { getAllByRole } = render(<AcmInlineStatusGroup healthy={3} warning={2} danger={1} unknown={0} />)
        expect(getAllByRole('listitem').length).toEqual(3)
    })
})
