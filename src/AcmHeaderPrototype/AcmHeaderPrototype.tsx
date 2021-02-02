/* istanbul ignore file */
import React, { useState } from 'react'
import {
    Page,
    PageHeader,
    PageHeaderTools,
    PageSidebar,
    PageHeaderToolsGroup,
    PageHeaderToolsItem,
    Dropdown,
    DropdownItem,
    DropdownToggle
} from '@patternfly/react-core'

export type AcmHeaderPrototypeProps = {
    href: string
    target: string
    children: React.Component | React.ReactElement | React.ReactElement[]
}

export function AcmHeaderPrototype(props: AcmHeaderPrototypeProps) {
    const [isOpen, setOpen] = useState<boolean>(false)
    const [dropIsOpen, dropSetOpen] = useState<boolean>(false)

    function api<T>(url: string): Promise<T> {
        return fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        })
    }

    function configureClient() {
        api<{ token_endpoint: string }>('/multicloud/common/configure')
            .then(({ token_endpoint }) => {
                window.open(`${token_endpoint}/request`, '_blank')
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error)
            })
    }

    function getName(): string {
        api<{ username: string }>('/multicloud/common/username')
            .then(({ username }) => {
                return username
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error)
            })
        return 'unknown'
    }

    function logout() {
        api<{ admin: boolean; logoutPath: string }>('/multicloud/logout')
            .then(({ admin, logoutPath }) => {
                const onLogout = (delay = 0) => {
                    return setTimeout(() => {
                        location.reload(true)
                    }, delay)
                }
                if (admin) {
                    const form = document.createElement('form')
                    form.target = 'hidden-form'
                    form.method = 'POST'
                    form.action = logoutPath
                    const iframe = document.createElement('iframe')
                    iframe.name = 'hidden-form'
                    iframe.onload = () => onLogout(500)
                    document.body.appendChild(iframe)
                    document.body.appendChild(form)
                    form.submit()
                }
                onLogout(500)
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error)
            })
    }

    const headerTools = (
        <PageHeaderTools>
            <PageHeaderToolsGroup
                visibility={{
                    default: 'hidden',
                    lg: 'visible',
                }}
            >
                <PageHeaderToolsItem>
                    <Dropdown
                        toggle={
                            <DropdownToggle id="toggle-id" onToggle={() => dropSetOpen(!dropIsOpen)}>
                                {getName()}
                            </DropdownToggle>}
                        dropdownItems={[
                            <DropdownItem onClick={() => logout()} key={'logoutbutton'}>
                                Logout
                            </DropdownItem>,
                            <DropdownItem onClick={() => configureClient()} key={'configurebutton'}>
                                Configure client
                            </DropdownItem>,
                        ]}
                        isOpen={dropIsOpen}
                    >
                    </Dropdown>
                </PageHeaderToolsItem>
            </PageHeaderToolsGroup>
        </PageHeaderTools>
    )

    const Header = (
        <PageHeader
            logo="RHACM"
            logoProps={props}
            headerTools={headerTools}
            showNavToggle
            isNavOpen={isOpen}
            onNavToggle={() => setOpen(!isOpen)}
        />
    )

    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isOpen} />

    return (
        <Page header={Header} sidebar={Sidebar}>
            {props.children}
        </Page>
    )
}
