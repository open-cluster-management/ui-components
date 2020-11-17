import React, { ReactNode, useState } from 'react'
import {
    Card,
    CardHeader,
    CardHeaderMain,
    CardActions,
    CardTitle,
    CardBody,
    CardFooter,
    CardProps,
    Dropdown,
    DropdownItem,
    KebabToggle,
    Skeleton,
    DropdownItemProps,
    CardActionsProps,
} from '@patternfly/react-core'
import { AcmTemplateIcon } from '../AcmIcons/AcmIcons'
import { makeStyles } from '@material-ui/styles'

type CardHeaderActions = DropdownItemProps & {
    text: string
}

interface CardHeaderProps {
    title: string
    description: string
    actions?: CardHeaderActions[]
    onActionClick: (event: React.SyntheticEvent) => void
    hasIcon?: boolean
}

interface CardFooterProps {
    count: number
    countDescription?: string
    countLink?: string | ReactNode
}

interface CardDropdownProps {
    dropdownItems: { text: string }[]
    toggle?: React.ReactNode
    onSelect: (event: React.SyntheticEvent) => void
}

type AcmCountCardProps = CardProps & {
    id?: string
    label?: string
    loading?: boolean
    onCardClick?: () => void
    cardHeader?: CardHeaderProps
    cardFooter?: CardFooterProps
    count?: number
    countTitle?: string
    isFlat?: boolean
}

type SkeletonCard = CardProps & {
    id?: string
}

const useStyles = makeStyles({
    card: {
        height: '250px',
    },
    headerDescription: {
        fontSize: 'var(--pf-global--FontSize--sm)',
        color: 'var(--pf-global--palette--black-700)',
    },
    count: {
        color: (props: AcmCountCardProps) =>
            props.count !== 0 ? 'var(--pf-global--link--Color)' : 'var(--pf-global--palette--black-900)',
        fontSize: 'var(--pf-global--FontSize--3xl)',
    },
    countTitle: {
        fontSize: 'var(--pf-global--FontSize--sm)',
        fontWeight: 700,
    },
})

export function CardDropdown(props: CardDropdownProps & CardActionsProps) {
    const useStyles = makeStyles({
        dropdown: {
            width: '10rem',
        },
    })
    const classes = useStyles()
    const [isOpen, setOpen] = useState<boolean>(false)
    const actionSelect = (event: React.SyntheticEvent) => {
        // event?.stopPropagation()
        setOpen(!isOpen)
        props.onSelect(event)
    }

    return (
        <Dropdown
            className="dropdownMenu"
            onClick={(e) => {
                actionSelect(e)
            }}
            toggle={<KebabToggle onToggle={() => setOpen(!isOpen)} />}
            isOpen={isOpen}
            isPlain
            dropdownItems={props.dropdownItems.map((item) => (
                <DropdownItem className={classes.dropdown} key={item.text} {...item}>
                    {item.text}
                </DropdownItem>
            ))}
            position={'right'}
        />
    )
}

export const loadingCard = (props: SkeletonCard) => {
    const useStyles = makeStyles({
        cardSkeleton: {
            height: '250px',
        },
    })
    const classes = useStyles(props)
    return (
        <Card id={props.id} className={classes.cardSkeleton}>
            <CardHeader>
                <Skeleton width="25%" />
            </CardHeader>
            <CardBody>
                <Skeleton width="100%" />
                <br />
                <Skeleton width="100%" />
            </CardBody>
            <CardFooter>
                <Skeleton width="25%" height="4rem" />
            </CardFooter>
        </Card>
    )
}

export const AcmCountCard = (props: AcmCountCardProps) => {
    const classes = useStyles(props)
    const { id, loading, count, countTitle, cardFooter, cardHeader } = props

    if (loading) return loadingCard(props)
    return (
        <Card
            id={id}
            className={classes.card}
            onClick={props.onCardClick}
            isSelectable={!!props.onCardClick}
            isFlat={!props.onCardClick}
        >
            {cardHeader && (
                <CardHeader>
                    {cardHeader?.actions && cardHeader?.actions?.length > 0 && (
                        <CardActions>
                            <CardDropdown dropdownItems={cardHeader.actions} onSelect={cardHeader.onActionClick} />
                        </CardActions>
                    )}
                    <CardHeaderMain>
                        {cardHeader?.hasIcon && <AcmTemplateIcon />}
                        <CardTitle>{cardHeader?.title}</CardTitle>
                        <p className={classes.headerDescription}>{cardHeader?.description}</p>
                    </CardHeaderMain>
                </CardHeader>
            )}
            <CardBody>
                <div className={classes.count}>{count}</div>
                <div className={classes.countTitle}>{countTitle}</div>
            </CardBody>
            {cardFooter && (
                <CardFooter>
                    {cardFooter?.countDescription || null}
                    {cardFooter?.countLink || null}
                </CardFooter>
            )}
        </Card>
    )
}
