import React from 'react'
import { AcmExpandableCard } from './AcmExpandableCard'

export default {
    title: 'Expandable',
    component: AcmExpandableCard,
}

export const ExpandableCard = () => {
    return (
        <AcmExpandableCard title="Status">
            <div>Hello</div>
        </AcmExpandableCard>
    )
}
