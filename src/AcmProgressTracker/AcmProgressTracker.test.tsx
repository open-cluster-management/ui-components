/* Copyright Contributors to the Open Cluster Management project */

import React from 'react'
import { render } from '@testing-library/react'
import { configureAxe } from 'jest-axe'
import { AcmProgressTracker } from './AcmProgressTracker'
import { AcmInlineStatus, StatusType } from '../AcmInlineStatus/AcmInlineStatus'
import userEvent from '@testing-library/user-event'

const axe = configureAxe({
    rules: {
        'aria-progressbar-name': { enabled: false },
    },
})

describe('AcmProgressTracker', () => {
    const ProgressTracker = (props: { isStacked: boolean }) => {
        const steps = [
            {
                statusType: StatusType.healthy,
                statusText: 'Pre-creation jobs',
                statusSubtitle: 'Complete',
                link: {
                    linkName: 'View logs',
                    linkTo: () => {},
                },
            },
            {
                statusType: StatusType.progress,
                statusText: 'Cluster install',
                statusSubtitle: 'Installing',
                link: {
                    linkName: 'View logs',
                    linkTo: () => {},
                },
            },
            {
                statusType: StatusType.empty,
                statusText: 'Klusterlet install',
                statusSubtitle: 'Pending',
                link: {
                    linkName: 'View logs',
                    linkTo: () => {},
                },
            },
            {
                statusType: StatusType.empty,
                statusText: 'Post-creation jobs',
                statusSubtitle: 'Pending',
                link: {
                    linkName: 'View logs',
                    linkTo: () => {},
                },
            },
        ]

        return (
            <AcmProgressTracker
                Title="Test Title"
                Subtitle="1 out of 3 steps complete"
                isStacked={props.isStacked}
                steps={steps}
                isCentered={true}
            />
        )
    }

    test('renders stepper status', async () => {
        const { getByText } = render(<ProgressTracker isStacked={false} />)
        expect(getByText('Pre-creation jobs')).toBeInTheDocument()
        expect(getByText('Cluster install')).toBeInTheDocument()
        expect(getByText('Klusterlet install')).toBeInTheDocument()
        expect(getByText('Post-creation jobs')).toBeInTheDocument()
        userEvent.click(getByText('View logs'))
    })
    test('renders stacked status', async () => {
        const { getByText } = render(<ProgressTracker isStacked={true} />)
        expect(getByText('Pre-creation jobs')).toBeInTheDocument()
        expect(getByText('Cluster install')).toBeInTheDocument()
        expect(getByText('Klusterlet install')).toBeInTheDocument()
        expect(getByText('Post-creation jobs')).toBeInTheDocument()
    })
    test('has zero accessibility defects in stepper', async () => {
        // don't test loading because it's covered in AcmLoadingPage
        const { container, getByText } = render(
            <AcmInlineStatus
                type={StatusType.progress}
                status="Installing"
                popover={{
                    bodyContent: <ProgressTracker isStacked={false} />,
                }}
            />
        )
        userEvent.click(getByText('Installing'))
        expect(await axe(container)).toHaveNoViolations()
    })
    test('has zero accessibility defects in stacked status', async () => {
        // don't test loading because it's covered in AcmLoadingPage
        const { container } = render(<ProgressTracker isStacked={true} />)
        expect(await axe(container)).toHaveNoViolations()
    })
})
