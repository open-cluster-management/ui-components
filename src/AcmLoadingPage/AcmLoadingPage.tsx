import React from 'react'
import {
    EmptyState,
    EmptyStateIcon,
    EmptyStateBody,
    EmptyStateSecondaryActions,
    Title,
    Spinner,
} from '@patternfly/react-core'
import { AcmPageCard } from '../AcmPage/AcmPage'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    max: {
        maxWidth: '335px',
    },
})

export function AcmLoadingPage(props: {
    title?: string | React.ReactNode
    message?: string | React.ReactNode
    primaryAction?: React.ReactNode
    secondaryActions?: React.ReactNode
}) {
    const classes = useStyles()
    return (
        <AcmPageCard>
            <EmptyState>
                <EmptyStateIcon variant="container" component={Spinner} />
                <div className={classes.max}>
                    <Title size="lg" headingLevel="h4">
                        {props.title ?? 'Loading'}
                    </Title>
                    <EmptyStateBody>{props.message}</EmptyStateBody>
                </div>
                {props.primaryAction}
                <EmptyStateSecondaryActions>{props.secondaryActions}</EmptyStateSecondaryActions>
            </EmptyState>
        </AcmPageCard>
    )
}
