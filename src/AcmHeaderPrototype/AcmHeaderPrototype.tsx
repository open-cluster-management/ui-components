/* Copyright Contributors to the Open Cluster Management project */

/* istanbul ignore file */
import React, { useState, useEffect, CSSProperties } from 'react'
import {
    Page,
    PageHeader,
    PageHeaderTools,
    PageSidebar,
    PageHeaderToolsGroup,
    PageHeaderToolsItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    Spinner,
    Nav,
    NavExpandable,
    NavItem,
    NavItemSeparator,
    NavList,
    Brand,
    Button,
    ApplicationLauncher,
    ApplicationLauncherItem,
    AboutModal,
    TextContent,
    TextListItem,
    TextList,
    Title,
} from '@patternfly/react-core'
import { CogsIcon, CodeIcon, CaretDownIcon } from '@patternfly/react-icons'
import { makeStyles } from '@material-ui/styles'
import logo from '../assets/RHACM-Logo.svg'

export type AcmHeaderPrototypeProps = {
    href: string
    urlpath: string
    target: string
    children: React.Component | React.ReactElement | React.ReactElement[]
}

function api<T>(url: string, headers?: Record<string, unknown>): Promise<T> {
    if (headers) {
        return fetch(url, headers).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        })
    }
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
    })
}

function launchToOCP(urlSuffix: string) {
    api<{ data: { consoleURL: string } }>(
        '/multicloud/api/v1/namespaces/openshift-config-managed/configmaps/console-public/'
    )
        .then(({ data }) => {
            window.open(`${data.consoleURL}/${urlSuffix}`, '_self')
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error)
        })
}

function UserDropdownToggle() {
    const [name, setName] = useState<string>('loading...')

    useEffect(() => {
        const dev = process.env.NODE_ENV !== 'production'
        const serverForTest = dev ? 'https://localhost:3000' : ''
        api<{ username: string }>(`${serverForTest}/multicloud/common/username/`)
            .then(({ username }) => {
                setName(username)
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error)
                setName('undefined')
            })
    }, [])

    return (
        <span className="pf-c-dropdown__toggle">
            <span className="co-username" data-test="username">
                {name}
            </span>
            <CaretDownIcon className="pf-c-dropdown__toggle-icon" />
        </span>
    )
}

type AboutDropdownProps = {
    aboutClick: () => void
}
function AboutDropdown(props: AboutDropdownProps) {
    const [aboutDDIsOpen, aboutDDSetOpen] = useState<boolean>(false)

    function DocsButton() {
        return (
            <ApplicationLauncherItem href="https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.2/">
                Documentation
            </ApplicationLauncherItem>
        )
    }
    function AboutButton() {
        return (
            <ApplicationLauncherItem component="button" onClick={() => props.aboutClick()}>
                About
            </ApplicationLauncherItem>
        )
    }

    return (
        <ApplicationLauncher
            aria-label="about-menu"
            data-test="about-dropdown"
            className="co-app-launcher co-about-menu"
            onSelect={() => aboutDDSetOpen(false)}
            onToggle={() => aboutDDSetOpen(!aboutDDIsOpen)}
            isOpen={aboutDDIsOpen}
            items={[<DocsButton key="docs" />, <AboutButton key="about_modal_button" />]}
            data-quickstart-id="qs-masthead-helpmenu"
            position="right"
            toggleIcon={
                <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1">
                    <title>help-icon</title>
                    <g id="Help" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g
                            id="01.00-Help"
                            transform="translate(-1277.000000, -29.000000)"
                            fill="#EDEDED"
                            fillRule="nonzero"
                        >
                            <g id="help-icon" transform="translate(1277.000000, 29.381579)">
                                <path
                                    d="M9.00103711,0.0025467465 C4.03806445,0.0025467465 0,4.09288877 0,9.12141303 C0,14.1478536 4.03806445,18.2393889 9.00103711,18.2393889 C13.9630078,18.2393889 18,14.1479426 18,9.12141303 C18,4.09288877 13.9630254,0.0025467465 9.00103711,0.0025467465 Z M9.00103711,16.0250729 C5.24237695,16.0250729 2.18550586,12.9287991 2.18550586,9.12137742 C2.18550586,5.3121214 5.24241211,2.21677364 9.00103711,2.21677364 C12.7577812,2.21677364 15.8155664,5.31210359 15.8155664,9.12137742 C15.8155664,12.9287634 12.7577285,16.0250729 9.00103711,16.0250729 Z M10.2857168,4.23609429 L10.2857168,6.19003657 C10.2857168,6.27821099 10.2539355,6.35454215 10.1902852,6.41901223 C10.1266348,6.48348232 10.0513125,6.51569955 9.9642832,6.51569955 L8.0357168,6.51569955 C7.94865234,6.51569955 7.8733125,6.48350013 7.80971484,6.41901223 C7.74611719,6.35452434 7.7142832,6.27821099 7.7142832,6.19003657 L7.7142832,4.23609429 C7.7142832,4.14791987 7.74609961,4.07158871 7.80971484,4.00711863 C7.87333008,3.94264854 7.94865234,3.91043131 8.0357168,3.91043131 L9.9642832,3.91043131 C10.0513125,3.91043131 10.1266523,3.94263073 10.1902852,4.00711863 C10.253918,4.07160652 10.2857168,4.14791987 10.2857168,4.23609429 L10.2857168,4.23609429 Z M9.16903125,7.81833368 C11.2492793,7.81833368 12.9357773,9.40274838 12.9357773,11.1563347 C12.9357773,12.9099211 11.2492793,14.3315043 9.16903125,14.3315043 C6.12722461,14.3315043 5.51118164,12.6625127 5.40796289,11.2840817 C5.40796289,11.1427461 5.52624609,11.1088726 5.68696289,11.1088726 C5.84767969,11.1088726 7.58668359,11.1088726 7.67580469,11.1088726 C7.78296094,11.1088726 7.93024805,11.120146 7.98437109,11.297136 C7.98437109,12.1672506 10.3744336,12.2758168 10.3744336,11.1563703 C10.3744336,10.5952669 9.85206445,10.0198268 9.16908398,9.97749386 C8.48610352,9.93516088 7.72265039,9.84201763 7.72265039,9.01224131 C7.72265039,8.7803271 7.72265039,8.55502017 7.72265039,8.21628508 C7.72265039,7.87763903 7.89345703,7.81833368 8.20483594,7.81833368 C8.51621484,7.81833368 9.16904883,7.81833368 9.16904883,7.81833368 L9.16903125,7.81833368 Z"
                                    id="Shape-help"
                                    transform="translate(9.000000, 9.120968) scale(-1, 1) rotate(-180.000000) translate(-9.000000, -9.120968) "
                                ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            }
        />
    )
}

function UserDropdown() {
    const [userIsOpen, userSetOpen] = useState<boolean>(false)

    function configureClient() {
        api<{ token_endpoint: string }>('/multicloud/common/configure/')
            .then(({ token_endpoint }) => {
                window.open(`${token_endpoint}/request`, '_blank')
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error)
            })
    }

    function logout() {
        api<{ admin: boolean; logoutPath: string }>('/multicloud/logout/')
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
                    iframe.setAttribute('type', 'hidden')
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

    function LogoutButton() {
        return (
            <ApplicationLauncherItem component="button" onClick={() => logout()}>
                Logout
            </ApplicationLauncherItem>
        )
    }
    function ConfigureButton() {
        return (
            <ApplicationLauncherItem component="button" onClick={() => configureClient()}>
                Configure client
            </ApplicationLauncherItem>
        )
    }

    return (
        <ApplicationLauncher
            aria-label="user-menu"
            data-test="user-dropdown"
            className="co-app-launcher co-user-menu"
            onSelect={() => userSetOpen(false)}
            onToggle={() => userSetOpen(!userIsOpen)}
            isOpen={userIsOpen}
            items={[<LogoutButton key="user_logout" />, <ConfigureButton key="user_configure" />]}
            data-quickstart-id="qs-masthead-usermenu"
            position="right"
            toggleIcon={<UserDropdownToggle />}
        />
    )
}

function AboutModalVersion() {
    const [version, setVersion] = useState<string>('undefined')

    useEffect(() => {
        const dev = process.env.NODE_ENV !== 'production'
        const serverForTest = dev ? 'https://localhost:3000' : ''
        api<{ version: string }>(`${serverForTest}/multicloud/common/version/`)
            .then(({ version }) => {
                setVersion(version)
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error)
                setVersion('undefined')
            })
    }, [])

    return <span className="version-details__no">{version === 'undefined' ? <Spinner size="md" /> : version}</span>
}

function AboutContent() {
    return (
        <TextContent>
            <TextList component="dl">
                <TextListItem component="dt">ACM Version</TextListItem>
                <TextListItem component="dd">
                    <AboutModalVersion />
                </TextListItem>
            </TextList>
        </TextContent>
    )
}

const useStyles = makeStyles({
    list: {
        '& li.pf-c-nav__item.pf-m-expandable.pf-m-expanded': {
            '& section': {
                display: 'list-item',
            },
        },
        '& li.pf-c-nav__item.pf-m-expandable': {
            '& section': {
                display: 'none',
            },
        },
    },
    about: {
        height: 'min-content',
    },
    perspective: {
        'font-size': '$co-side-nav-font-size',
        'justify-content': 'space-between',
        width: '100%',

        '& .pf-c-dropdown__toggle-icon': {
            color: 'var(--pf-global--Color--light-100)',
            'font-size': '$co-side-nav-section-font-size',
        },

        '& .pf-c-dropdown__menu-item': {
            'padding-left': '7px',
            '& h2': {
                'font-size': '12px',
                'padding-left': '7px',
            },
        },

        '& .pf-c-title': {
            color: 'var(--pf-global--Color--light-100)',
            'font-size': '14px',
            'font-family': 'var(--pf-global--FontFamily--sans-serif)',
            '& .oc-nav-header__icon': {
                'padding-right': '7px',
                'vertical-align': '-0.125em',
            },
            '& h2': {
                'font-size': '$co-side-nav-section-font-size',
                'font-family': 'var(--pf-global--FontFamily--sans-serif)',
            },
        },

        '& svg': {
            height: '1em',
            width: '1em',
            fill: 'currentColor',
        },

        '&::before': {
            border: 'none',
        },
    },
})

type NavExpandableProps = {
    urlpath: string
}
function NavExpandableList(props: NavExpandableProps) {
    const navData: { [key: string]: Record<string, string> } = {
        home: {
            path: '/multicloud/welcome/',
            groupId: 'home',
            itemId: 'home_welcome',
            name: 'Home',
        },
        overview: {
            path: '/multicloud/overview/',
            groupId: 'home',
            itemId: 'home_overview',
            name: 'Overview',
        },
        clusters: {
            path: '/multicloud/clusters/',
            groupId: 'automate',
            itemId: 'automate_clusters',
            name: 'Clusters',
        },
        baremetal: {
            path: '/multicloud/bare-metal-assets/',
            groupId: 'automate',
            itemId: 'automate_baremetal',
            name: 'Bare metal assets',
        },
        applications: {
            path: '/multicloud/applications/',
            groupId: 'manage',
            itemId: 'manage_applications',
            name: 'Manage applications',
        },
        grc: {
            path: '/multicloud/policies/',
            groupId: 'grc',
            itemId: 'grc_govern_risk',
            name: 'Govern risk',
        },
        credentials: {
            path: '/multicloud/connections/',
            groupId: 'credentials',
            itemId: 'manage_credentials',
            name: 'Manage credentials',
        },
        kui: {
            path: '/kui/',
            groupId: 'kui',
            itemId: 'kui',
            name: 'Visual Web Terminal',
        },
    }

    const pathname = props.urlpath

    let currentGroup = ''
    let currentItem = ''
    Object.keys(navData).forEach((key: string) => {
        const n = navData[key]
        if (pathname && pathname.indexOf(n.path) !== -1) {
            currentGroup = n.groupId
            currentItem = n.itemId
        }
    })

    const [activeGroup, setActiveGroup] = useState<string>(currentGroup)
    const [activeItem, setActiveItem] = useState<string>(currentItem)
    const [switcherIsOpen, switcherSetOpen] = useState<boolean>(false)
    const classes = useStyles()

    function select(result: { groupId?: string | number; itemId?: string | number }) {
        if (result.groupId !== undefined) {
            setActiveGroup(result.groupId.toString())
        }
        if (result.itemId !== undefined) {
            setActiveItem(result.itemId.toString())
        }
    }

    type SidebarNavItemProps = {
        data: Record<string, string>
    }
    function SidebarNavItem(props: SidebarNavItemProps) {
        const data = props.data
        return (
            <NavItem
                preventDefault
                groupId={data.groupId}
                itemId={data.itemId}
                isActive={activeItem === data.itemId}
                onClick={() => window.open(data.path, '_self')}
            >
                {data.name}
            </NavItem>
        )
    }

    const toggleStyles: CSSProperties = {
        color: 'white',
    }
    const iconStyles: CSSProperties = {
        paddingRight: '7px',
    }
    const ddStyles: CSSProperties = {
        padding: 'var(--pf-global--spacer--sm) var(--pf-global--spacer--sm)',
    }

    return (
        <Nav onSelect={select}>
            <div className="oc-nav-header" style={ddStyles}>
                <Dropdown
                    toggle={
                        <DropdownToggle
                            id="toggle-perspective"
                            onToggle={() => switcherSetOpen(!switcherIsOpen)}
                            toggleIndicator={CaretDownIcon}
                            style={toggleStyles}
                            className={classes.perspective}
                        >
                            <Title headingLevel="h2" size="md">
                                <span className="oc-nav-header__icon">
                                    <svg viewBox="0 0 14 13.97">
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <path d="M12.63,6A1.5,1.5,0,1,0,11,4.51l-1.54.91a2.94,2.94,0,0,0-1.85-1L7.35,2.66a1.52,1.52,0,0,0,.49-.72,1.5,1.5,0,0,0-1-1.87A1.49,1.49,0,0,0,5,1.06a1.51,1.51,0,0,0,.88,1.83L6.12,4.6A2.9,2.9,0,0,0,4.5,6.29L2.88,6.07a1.52,1.52,0,0,0-.55-.68,1.51,1.51,0,0,0-2.08.43A1.49,1.49,0,0,0,2.67,7.56l1.68.23A3,3,0,0,0,5.41,9.6L4.8,11a1.5,1.5,0,1,0,1.14,2.63,1.49,1.49,0,0,0,.24-2l.61-1.39a3.44,3.44,0,0,0,.45,0,2.92,2.92,0,0,0,1.6-.48L10.21,11a1.45,1.45,0,0,0,.09.87,1.5,1.5,0,1,0,.91-2L9.85,8.66a3,3,0,0,0,.33-1.34,3.1,3.1,0,0,0,0-.54l1.64-1A1.47,1.47,0,0,0,12.63,6ZM5.48,7.32A1.77,1.77,0,1,1,7.24,9.08,1.76,1.76,0,0,1,5.48,7.32Z" />
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                Advanced Cluster Management
                            </Title>
                        </DropdownToggle>
                    }
                    dropdownItems={[
                        <DropdownItem onClick={() => launchToOCP('?perspective=admin')} key={'administrator'}>
                            <Title headingLevel="h2" size="md">
                                <span className="oc-nav-header__icon" style={iconStyles}>
                                    <CogsIcon></CogsIcon>
                                </span>
                                Administrator
                            </Title>
                        </DropdownItem>,
                        <DropdownItem onClick={() => launchToOCP('?perspective=dev')} key={'devbutton'}>
                            <Title headingLevel="h2" size="md">
                                <span className="oc-nav-header__icon" style={iconStyles}>
                                    <CodeIcon></CodeIcon>
                                </span>
                                Developer
                            </Title>
                        </DropdownItem>,
                    ]}
                    isOpen={switcherIsOpen}
                ></Dropdown>
            </div>
            <NavItemSeparator />
            <NavList className={classes.list}>
                <NavExpandable
                    title="Home"
                    groupId="home"
                    isActive={activeGroup === 'home'}
                    isExpanded={activeGroup === 'home'}
                >
                    <SidebarNavItem data={navData.home} />
                    <SidebarNavItem data={navData.overview} />
                </NavExpandable>
                <NavExpandable
                    title="Automate Infrastructure"
                    groupId="automate"
                    isActive={activeGroup === 'automate'}
                    isExpanded={activeGroup === 'automate'}
                >
                    <SidebarNavItem data={navData.clusters} />
                    <SidebarNavItem data={navData.baremetal} />
                </NavExpandable>
                <SidebarNavItem data={navData.applications} />
                <SidebarNavItem data={navData.grc} />
                <SidebarNavItem data={navData.credentials} />
                <SidebarNavItem data={navData.kui} />
            </NavList>
        </Nav>
    )
}

export function AcmHeaderPrototype(props: AcmHeaderPrototypeProps) {
    const [isOpen, setOpen] = useState<boolean>(true)
    const [aboutModalOpen, setAboutModalOpen] = useState<boolean>(false)

    const classes = useStyles()

    const headerTools = (
        <PageHeaderTools>
            <PageHeaderToolsGroup
                visibility={{
                    default: 'hidden',
                    lg: 'visible',
                }}
            >
                <PageHeaderToolsItem>
                    <Button
                        aria-label="search-button"
                        onClick={() => window.open('/search/', '_self')}
                        variant="link"
                        icon={
                            <svg width="18px" height="19px" viewBox="0 0 18 19" version="1.1">
                                <title>search-icon</title>
                                <g id="Search-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="search-svg" transform="translate(-1127.000000, -29.000000)" fill="#EDEDED">
                                        <path
                                            d="M1144.75391,45.0742188 C1144.91797,45.2382814 1145,45.4374998 1145,45.671875 C1145,45.9062502 1144.91797,46.1054686 1144.75391,46.2695312 L1143.76953,47.2539062 C1143.60547,47.4179689 1143.40625,47.5 1143.17188,47.5 C1142.9375,47.5 1142.73828,47.4179689 1142.57422,47.2539062 L1139.05859,43.7382812 C1138.89453,43.5742186 1138.8125,43.3750002 1138.8125,43.140625 L1138.8125,42.578125 C1137.5,43.6093748 1136,44.125 1134.3125,44.125 C1132.97656,44.125 1131.75195,43.7968752 1130.63867,43.140625 C1129.52539,42.4843748 1128.64063,41.5996096 1127.98438,40.4863281 C1127.32812,39.3730467 1127,38.1484375 1127,36.8125 C1127,35.4765625 1127.32812,34.2519533 1127.98438,33.1386719 C1128.64063,32.0253904 1129.52539,31.1406252 1130.63867,30.484375 C1131.75195,29.8281248 1132.97656,29.5 1134.3125,29.5 C1135.64844,29.5 1136.87305,29.8281248 1137.98633,30.484375 C1139.09961,31.1406252 1139.98437,32.0253904 1140.64062,33.1386719 C1141.29688,34.2519533 1141.625,35.4765625 1141.625,36.8125 C1141.625,38.5 1141.10937,40 1140.07812,41.3125 L1140.64062,41.3125 C1140.875,41.3125 1141.07422,41.3945311 1141.23828,41.5585938 L1144.75391,45.0742188 Z M1134.3125,41.3125 C1135.13281,41.3125 1135.88867,41.1132811 1136.58008,40.7148438 C1137.27148,40.3164064 1137.81641,39.7714846 1138.21484,39.0800781 C1138.61328,38.3886717 1138.8125,37.6328123 1138.8125,36.8125 C1138.8125,35.9921877 1138.61328,35.2363283 1138.21484,34.5449219 C1137.81641,33.8535154 1137.27148,33.3085936 1136.58008,32.9101562 C1135.88867,32.5117189 1135.13281,32.3125 1134.3125,32.3125 C1133.49219,32.3125 1132.73633,32.5117189 1132.04492,32.9101562 C1131.35352,33.3085936 1130.80859,33.8535154 1130.41016,34.5449219 C1130.01172,35.2363283 1129.8125,35.9921877 1129.8125,36.8125 C1129.8125,37.6328123 1130.01172,38.3886717 1130.41016,39.0800781 C1130.80859,39.7714846 1131.35352,40.3164064 1132.04492,40.7148438 C1132.73633,41.1132811 1133.49219,41.3125 1134.3125,41.3125 Z"
                                            id="search-icon"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        }
                    ></Button>
                    <Button
                        aria-label="create-button"
                        onClick={() => launchToOCP('k8s/all-namespaces/import')}
                        variant="link"
                        icon={
                            <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1">
                                <title>add-resource-icon</title>
                                <g id="create-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g
                                        id="create-svg"
                                        transform="translate(-1177.000000, -29.000000)"
                                        fill="#EDEDED"
                                        fillRule="nonzero"
                                    >
                                        <g id="add-resource-icon" transform="translate(1177.000000, 29.381579)">
                                            <path
                                                d="M9.00103711,0 C4.03806445,0 0,4.09034203 0,9.11886629 C0,14.1453603 4.03806445,18.2368421 9.00103711,18.2368421 C13.963043,18.2368421 18,14.1453959 18,9.11886629 C18,4.09034203 13.9630254,0 9.00103711,0 Z M9.00103711,16.0225262 C5.24237695,16.0225262 2.18550586,12.9262523 2.18550586,9.11883067 C2.18550586,5.30961027 5.24241211,2.21428032 9.00103711,2.21428032 C12.7577812,2.21428032 15.8155664,5.30961027 15.8155664,9.11883067 C15.8155664,12.9262167 12.7577285,16.0225262 9.00103711,16.0225262 Z M12.7666934,10.3280366 C12.706418,10.3899599 12.6295312,10.4210552 12.535752,10.4210552 L10.2856641,10.4210552 L10.2856641,12.7007851 C10.2856641,12.7957627 10.2550957,12.8737145 10.1939414,12.9347652 C10.1327871,12.9958159 10.0544414,13.0263234 9.95925586,13.0263234 L8.04072656,13.0263234 C7.94550586,13.0263234 7.86735352,12.9957981 7.80604102,12.9347652 C7.74485156,12.8736967 7.71426562,12.7957093 7.71426562,12.7007317 L7.71426562,10.4210374 L5.46414258,10.4210017 C5.37039844,10.4210017 5.29345898,10.3900668 5.23320117,10.3280722 C5.17297852,10.2661489 5.14283203,10.1867723 5.14283203,10.0902987 L5.14283203,8.1465256 C5.14283203,8.05005199 5.17296094,7.97099599 5.23320117,7.90875208 C5.29347656,7.8467575 5.37045117,7.81576912 5.46419531,7.81576912 L7.7142832,7.81580474 L7.7142832,5.53603919 C7.7142832,5.44102596 7.74493945,5.36316319 7.80612891,5.30213032 C7.86724805,5.24106183 7.9454707,5.21050087 8.04069141,5.21050087 L9.9592207,5.21050087 C10.0544414,5.21050087 10.1325059,5.24107964 10.1939062,5.30213032 C10.2550254,5.36319881 10.2857168,5.44109719 10.2857168,5.53611043 L10.2857168,7.81575131 L12.5358398,7.81575131 C12.6296191,7.81575131 12.7064707,7.84677531 12.7667109,7.90880551 C12.8269863,7.97072885 12.8571504,8.04998075 12.8571504,8.14645436 L12.8571504,10.0902275 C12.8571504,10.1867011 12.8269688,10.2658817 12.7667109,10.328001 L12.7666934,10.3280366 Z"
                                                id="Shape-address"
                                                transform="translate(9.000000, 9.118421) scale(-1, 1) rotate(-180.000000) translate(-9.000000, -9.118421) "
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        }
                    ></Button>
                    <AboutDropdown aboutClick={() => setAboutModalOpen(!aboutModalOpen)} />
                    <AboutModal
                        isOpen={aboutModalOpen}
                        onClose={() => setAboutModalOpen(!aboutModalOpen)}
                        trademark={
                            'Copyright © 2020 IBM Corporation. All rights reserved. \nCopyright © 2020 Red Hat, Inc. All rights reserved.'
                        }
                        brandImageSrc={logo}
                        brandImageAlt="ACM logo"
                        className={classes.about}
                    >
                        <AboutContent />
                    </AboutModal>
                </PageHeaderToolsItem>
            </PageHeaderToolsGroup>
            <PageHeaderToolsGroup>
                <PageHeaderToolsItem>
                    <UserDropdown />
                </PageHeaderToolsItem>
            </PageHeaderToolsGroup>
        </PageHeaderTools>
    )

    const Header = (
        <PageHeader
            logo={<Brand src={logo} alt="RHACM Logo" />}
            logoProps={props}
            headerTools={headerTools}
            showNavToggle
            isNavOpen={isOpen}
            onNavToggle={() => setOpen(!isOpen)}
        />
    )

    const SidebarNav = <NavExpandableList urlpath={props.urlpath}></NavExpandableList>

    const Sidebar = <PageSidebar nav={SidebarNav} isNavOpen={isOpen} />

    return (
        <Page header={Header} sidebar={Sidebar}>
            {props.children}
        </Page>
    )
}
