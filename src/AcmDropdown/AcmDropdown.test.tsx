import React from 'react'
import { ExternalLinkAltIcon } from '@patternfly/react-icons'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { AcmDropdown } from './AcmDropdown'

type ComponentProps = {
    isDisabled?: boolean
    tooltip?: string
    isKebab?: boolean
}

describe('AcmDropdown', () => {
    const onSelect = jest.fn()
    const onHover = jest.fn()
    const Component = (props: ComponentProps) => {
        const dropdownItems = [
            { id: 'install-config', text: 'Install config' },
            { id: 'kubeconfig', text: 'Kubeconfig' },
            { id: 'forbidden', text: 'Other config', isDisabled: true, tooltip: 'Forbidden' },
            { id: 'launch-out', text: 'Launch page', icon: <ExternalLinkAltIcon /> },
            { id: 'link item', text: 'Link item', href: 'www.google.com', component: 'a' },
        ]
        return (
            <AcmDropdown
                isDisabled={props.isDisabled}
                tooltip={props.tooltip}
                id="dropdown"
                onSelect={onSelect}
                onHover={onHover}
                text="Download configuration"
                dropdownItems={dropdownItems}
                isKebab={props.isKebab}
            />
        )
    }
    test('renders', async () => {
        const { getByTestId, getByRole, container } = render(<Component />)
        expect(getByTestId('dropdown')).toBeInTheDocument()
        expect(await axe(container)).toHaveNoViolations()
        userEvent.click(getByTestId('dropdown'))
        await waitFor(() => expect(getByTestId('install-config')).toBeInTheDocument())
        expect(await axe(container)).toHaveNoViolations()
        userEvent.hover(getByTestId('forbidden'))
        await waitFor(() => expect(getByRole('tooltip')).toBeInTheDocument())
        userEvent.click(getByTestId('install-config'))
        expect(onSelect).toHaveBeenCalled()
        userEvent.hover(getByTestId('dropdown'))
        expect(onHover).toHaveBeenCalled()
        await new Promise((resolve) => setTimeout(resolve, 0))
    })
    // test('renders in disabled state', async () => {
    //     const { getByTestId, getByRole, container } = render(<Component isDisabled={true} tooltip="Tooltip text" />)
    //     expect(getByTestId('dropdown')).toBeInTheDocument()
    //     expect(await axe(container)).toHaveNoViolations()
    //     userEvent.hover(getByTestId('dropdown'))
    //     await waitFor(() => expect(getByRole('tooltip')).toBeInTheDocument())
    //     userEvent.click(getByTestId('dropdown'))
    //     await new Promise((resolve) => setTimeout(resolve, 0))
    // })
    test('renders as a kebab dropdown', async () => {
        const { getByTestId, container } = render(<Component isKebab={true} />)
        expect(getByTestId('dropdown')).toBeInTheDocument()
        expect(await axe(container)).toHaveNoViolations()
        userEvent.click(getByTestId('dropdown'))
        await waitFor(() => expect(getByTestId('install-config')).toBeInTheDocument())
        await new Promise((resolve) => setTimeout(resolve, 0))
    })
    test('renders as a kebab dropdown in disabled state', async () => {
        const { getByTestId, queryByTestId } = render(
            <Component isDisabled={true} tooltip="Tooltip text" isKebab={true} />
        )
        expect(getByTestId('dropdown')).toBeInTheDocument()
        userEvent.click(getByTestId('dropdown'))
        expect(queryByTestId('install-config')).toBeNull()
        await new Promise((resolve) => setTimeout(resolve, 0))
    })
})
