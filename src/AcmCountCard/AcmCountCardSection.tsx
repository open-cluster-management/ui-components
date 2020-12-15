import React from 'react'
import { Grid, GridItem, Title, TitleSizes } from '@patternfly/react-core'
import { ExclamationCircleIcon } from '@patternfly/react-icons'
import { AcmExpandableCard } from '../AcmExpandable'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    section: {
        '& > .pf-c-card__body': {
            padding: '0 !important',
        },
    },
    card: {
        height: '159px',
        padding: '32px 0 24px 24px',
        borderTop: '1px solid rgba(0,0,0,0.1)',
        borderLeft: '1px solid rgba(0,0,0,0.1)',
        marginTop: '-1px',
    },
    countContainer: {
        marginBottom: '8px',
        fontSize: '36px',
    },
    count: {
        textDecoration: 'none !important',
        fontWeight: 100,
    },
    countDanger: {
        color: 'var(--pf-global--danger-color--100)',
        textDecoration: 'none !important',
        fontWeight: 100,
        '&:hover': {
            color: 'var(--pf-global--palette--red-300)',
        },
    },
    title: {
        fontSize: '14px !important',
        fontWeight: 600,
    },
    titleIcon: {
        marginRight: '8px',
    },
    description: {
        color: 'var(--pf-global--disabled-color--100)',
        marginTop: '8px',
        fontSize: '14px',
    },
    link: {
        marginTop: '8px',
        fontSize: '14px',
    },
})

export type AcmCountCardSection = {
    id?: string
    title: string
    cards: AcmCountCardSectionCard[]
}

export type AcmCountCardSectionCard = {
    id?: string
    count: number
    countClick?: () => void
    title: string
    description?: string | React.ReactNode
    linkText?: string
    onLinkClick?: () => void
    isDanger?: boolean
}

export const AcmCountCardSection = (props: AcmCountCardSection) => {
    const classes = useStyles()
    return (
        <AcmExpandableCard title={props.title} className={classes.section} id={props.id}>
            <Grid sm={4}>
                {props.cards.map((card, i) => {
                    return (
                        <GridItem key={i}>
                            <div id={card.id} className={classes.card}>
                                <div className={classes.countContainer}>
                                    {card.countClick && card.count > 0 ? (
                                        <a
                                            onClick={card.countClick}
                                            className={card.isDanger ? classes.countDanger : classes.count}
                                        >
                                            {card.count}
                                        </a>
                                    ) : (
                                        card.count
                                    )}
                                </div>
                                <div className={classes.title}>
                                    <span>
                                        {card.isDanger && (
                                            <ExclamationCircleIcon
                                                color="var(--pf-global--danger-color--100)"
                                                className={classes.titleIcon}
                                            />
                                        )}
                                        {card.title}
                                    </span>
                                </div>
                                {card.description && <div className={classes.description}>{card.description}</div>}
                                {card.linkText && (
                                    <div className={classes.link}>
                                        <a onClick={card.onLinkClick}>{card.linkText}</a>
                                    </div>
                                )}
                            </div>
                        </GridItem>
                    )
                })}
            </Grid>
        </AcmExpandableCard>
    )
}
