import '@patternfly/react-core/dist/styles/base.css'
import React, { useState } from 'react'
import { AcmForm } from '../AcmForm/AcmForm'
import { AcmTextArea } from './AcmTextArea'

export default {
    title: 'TextArea',
    component: AcmTextArea,
}

export const TextArea = () => {
    const [value, setValue] = useState<string>()

    return (
        <AcmForm>
            <AcmTextArea label="Label" id="123" value={value} onChange={setValue} />
        </AcmForm>
    )
}
