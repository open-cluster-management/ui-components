import React from 'react'
import { Card, CardBody } from '@patternfly/react-core'
import { AcmInlineStatusGroup } from './AcmInlineStatusGroup'

export default {
    title: 'InlineStatusGroup',
    component: AcmInlineStatusGroup,
    argTypes: {
        showZeroes: { type: 'boolean' },
        healthy: { type: 'number' },
        warning: { type: 'number' },
        danger: { type: 'number' },
        progress: { type: 'number' },
        unknown: { type: 'number' },
    },
}

export const InlineStatusGroup = (args) => {
    return (
        <Card>
            <CardBody>
                <AcmInlineStatusGroup {...args} />
            </CardBody>
        </Card>
    )
}
InlineStatusGroup.args = {
    showZeroes: true,
    healthy: 3,
    warning: 2,
    danger: 1,
    progress: 4,
    unknown: 0,
}
