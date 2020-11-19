import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { AcmDescriptionList, ListItems } from './AcmDescriptionList'

describe('AcmDescriptionList', () => {
    const leftItems = [
        { key: 'Name', value: 'cluster' },
        { key: 'Status', keyAction: <a id="link">Link</a>, value: 'Ready' },
    ]
    const rightItems = [
        { key: 'Namespace', value: 'cluster-namespace' },
        { key: 'Console URL', value: undefined },
    ]
    const DescriptionList = (props: { leftItems: ListItems[]; rightItems?: ListItems[] }) => (
        <AcmDescriptionList title="Details" leftItems={props.leftItems} rightItems={props.rightItems} />
    )
    test('renders', () => {
        const { queryByText, getByRole } = render(<DescriptionList leftItems={leftItems} rightItems={rightItems} />)
        expect(queryByText('Details')).toBeInTheDocument()
        expect(queryByText('Name')).toBeInTheDocument()
        expect(queryByText('Namespace')).toBeInTheDocument()
        userEvent.click(getByRole('button'))
        expect(queryByText('Name')).toBeNull()
    })
    test('has zero accessibility defects', async () => {
        const { container } = render(<DescriptionList leftItems={leftItems} rightItems={rightItems} />)
        expect(await axe(container)).toHaveNoViolations()
    })
})
