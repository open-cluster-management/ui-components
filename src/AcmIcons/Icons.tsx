/* Copyright Contributors to the Open Cluster Management project */

import React from 'react'

export const AcmTemplateIcon = () => (
    <svg viewBox="0 0 32 32" role="presentation">
        <g fill="none">
            <circle fill="#06C" cx="16" cy="16" r="16" />
            <g fill="#FFF">
                <path d="M17.829 8.686l3.657 3.657V22.4c0 .505-.41.914-.915.914H11.43a.914.914 0 01-.915-.914V9.6c0-.505.41-.914.915-.914h6.4zm-.907.914H11.43v12.8h9.142v-9.146l-2.709-.008a.914.914 0 01-.911-.905L16.922 9.6zm.92.392l.023 2.34 2.324.007-2.348-2.347z" />
                <path d="M13.257 16.915h5.486v1h-5.486zM13.257 19.657h5.486v1h-5.486z" />
            </g>
        </g>
    </svg>
)

export const AcmVisibilityOnIcon = () => (
    <svg name="icon--visibility-on" viewBox="0 0 32 32" role="presentation" fill="var(--pf-global--primary-color--100)">
        <path d="M30.94,15.66A16.69,16.69,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16.69,16.69,0,0,0,16,27,16.69,16.69,0,0,0,30.94,16.34,1,1,0,0,0,30.94,15.66ZM16,25c-5.3,0-10.9-3.93-12.93-9C5.1,10.93,10.7,7,16,7s10.9,3.93,12.93,9C26.9,21.07,21.3,25,16,25Z"></path>
        <path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path>
        <title>View</title>
    </svg>
)

export const AcmVisibilityOffIcon = () => (
    <svg
        name="icon--visibility-off"
        viewBox="0 0 32 32"
        role="presentation"
        fill="var(--pf-global--primary-color--100)"
    >
        <path d="M5.24,22.51l1.43-1.42A14.06,14.06,0,0,1,3.07,16C5.1,10.93,10.7,7,16,7a12.38,12.38,0,0,1,4,.72l1.55-1.56A14.72,14.72,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16,16,0,0,0,5.24,22.51Z"></path>
        <path d="M12 15.73a4 4 0 013.7-3.7l1.81-1.82a6 6 0 00-7.33 7.33zM30.94 15.66A16.4 16.4 0 0025.2 8.22L30 3.41 28.59 2 2 28.59 3.41 30l5.1-5.1A15.29 15.29 0 0016 27 16.69 16.69 0 0030.94 16.34 1 1 0 0030.94 15.66zM20 16a4 4 0 01-6 3.44L19.44 14A4 4 0 0120 16zm-4 9a13.05 13.05 0 01-6-1.58l2.54-2.54a6 6 0 008.35-8.35l2.87-2.87A14.54 14.54 0 0128.93 16C26.9 21.07 21.3 25 16 25z"></path>
        <title>View off</title>
    </svg>
)

export const BrokenLinkIcon = () => (
    <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
        role="presentation"
        fill="var(--pf-global--Color--200)"
    >
        <path d="M5 3.59H7V8.42H5z" transform="rotate(-45.01 5.996 6.005)"></path>
        <path d="M25 23.58H27V28.409999999999997H25z" transform="rotate(-44.99 25.995 25.999)"></path>
        <path d="M11 2H13V6H11zM2 11H6V13H2zM26 19H30V21H26zM19 26H21V30H19zM16.58 21.07l-3.71 3.72a4 4 0 11-5.66-5.66l3.72-3.72L9.51 14 5.8 17.72a6 6 0 00-.06 8.54A6 6 0 0010 28a6.07 6.07 0 004.32-1.8L18 22.49zM15.41 10.93l3.72-3.72a4 4 0 115.66 5.66l-3.72 3.72L22.49 18l3.71-3.72a6 6 0 00.06-8.54A6 6 0 0022 4a6.07 6.07 0 00-4.32 1.8L14 9.51z"></path>
    </svg>
)

export const RedHatIcon = () => (
    <svg viewBox="0 -7 54 54" role="presentation">
        <path
            d="M44.466 17.253c.068.312.097.63.087.95 0 4.133-5.094 4.853-8.61 4.853-13.682 0-23.889-8.4-23.889-10.962a1.68 1.68 0 01.062-.538l-1.032 2.516a5.07 5.07 0 00-.425 2.04c0 5.03 11.532 12.632 24.677 12.632 5.822 0 10.246-2.155 10.246-6.047 0-.3 0-.539-.484-2.814l-.632-2.63z"
            fill="#000"
        />
        <path
            d="M35.944 23.056c3.515 0 8.609-.717 8.609-4.85a3.842 3.842 0 00-.087-.95l-2.096-8.99c-.486-1.977-.908-2.874-4.427-4.61C35.215 2.275 29.273 0 27.515 0c-1.64 0-2.12 2.094-4.062 2.094-1.878 0-3.273-1.555-5.031-1.555-1.688 0-2.79 1.136-3.64 3.472 0 0-2.362 6.589-2.666 7.545a1.68 1.68 0 00-.062.538c0 2.562 10.207 10.962 23.89 10.962m9.154-3.173c.484 2.275.484 2.514.484 2.814 0 3.89-4.424 6.047-10.246 6.047C22.18 28.742 10.66 21.14 10.66 16.111c0-.7.144-1.393.425-2.036-4.728.236-10.85 1.075-10.85 6.403C.233 29.222 21.208 40 37.821 40c12.733 0 15.945-5.689 15.945-10.18 0-3.534-3.094-7.545-8.669-9.94"
            fill="#E00"
        />
    </svg>
)

export const CloudIcon = () => (
    <svg viewBox="0 -7 40 40" role="presentation">
        <path
            d="M10 25.629h22.371A6.657 6.657 0 0033.4 12.386 12.243 12.243 0 0010.9 6.67h-.886a9.471 9.471 0 000 18.943L10 25.63zm0-16.8c.421.005.842.043 1.257.114.446.077.892-.135 1.114-.529a10.1 10.1 0 0118.915 4.957 1.086 1.086 0 001.071 1.072 4.529 4.529 0 110 9.043H10a7.329 7.329 0 110-14.657z"
            fill="#000"
        />
    </svg>
)

export const GCPIcon = () => (
    <svg viewBox="0 -25 256 256" role="presentation">
        <path
            d="M170.252 56.819l22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39z"
            fill="#EA4335"
        />
        <path
            d="M224.205 73.918a100.249 100.249 0 00-30.217-48.722l-31.232 31.232a55.515 55.515 0 0120.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 00-31.793-60.453"
            fill="#4285F4"
        />
        <path
            d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 01-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"
            fill="#34A853"
        />
        <path
            d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0028.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0113.887 13.888l32.248-32.248A72.224 72.224 0 0071.87 61.425"
            fill="#FBBC05"
        />
    </svg>
)

export const AzureIcon = () => (
    <svg viewBox="0 -4 40 40" role="presentation">
        <path
            d="M18.323 29.039l9.341-1.65.087-.02-4.804-5.716a812.9 812.9 0 01-4.803-5.741c0-.028 4.96-13.688 4.988-13.737.009-.016 3.385 5.812 8.183 14.127l8.23 14.268.063.109-15.268-.002-15.268-.002 9.25-1.634v-.002zM0 27.3c0-.008 2.264-3.938 5.031-8.734l5.031-8.72 5.862-4.92C19.148 2.222 21.794.004 21.806 0a1.03 1.03 0 01-.094.237l-6.367 13.655L9.092 27.3l-4.546.006c-2.5.004-4.546 0-4.546-.008v.002z"
            fill="#0089D6"
        />
    </svg>
)

export const BareMetalIcon = () => (
    <svg viewBox="0 0 45 45" role="presentation">
        <path
            d="M44.08 32.062c.288 0 .519.232.519.519v11.5a.517.517 0 01-.519.518H.955a.517.517 0 01-.517-.518v-11.5c0-.287.23-.519.517-.519H44.08zm-.517 1.037H1.472v10.463h42.09V33.1zm-6.669 3.797a1.438 1.438 0 110 2.876 1.438 1.438 0 010-2.876zM44.08 16.25c.288 0 .519.231.519.519v11.5a.517.517 0 01-.519.517H.955a.517.517 0 01-.517-.517v-11.5c0-.288.23-.52.517-.52H44.08zm-.517 1.036H1.472V27.75h42.09V17.286zm-6.67 3.796a1.437 1.437 0 110 2.876 1.437 1.437 0 010-2.876zM44.08.437c.288 0 .519.232.519.519v11.5a.517.517 0 01-.519.518H.955a.517.517 0 01-.517-.518V.956c0-.287.23-.519.517-.519H44.08zm-.517 1.037H1.472v10.463h42.09V1.474zm-6.671 3.794a1.437 1.437 0 110 2.874 1.437 1.437 0 010-2.874z"
            fill="#000"
        />
    </svg>
)

export const AWSIcon = () => (
    <svg viewBox="0 -100 304 304" role="presentation">
        <path
            fill="#252F3E"
            d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3L83.2 92c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5C41 1.9 46.2 1.3 51.7 1.3c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
        />
        <g fill="#F90">
            <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" />
            <path d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" />
        </g>
    </svg>
)

export const VMWareIcon = () => (
    <svg viewBox="0 0 384 384" role="presentation">
        <defs>
            <linearGradient id="a" x1="0.2" y1="0.2" x2="0.8" y2="0.8">
                <stop offset="0" stopColor="#9bca53ff" />
                <stop offset="1" stopColor="#6d9e3cff" />
            </linearGradient>
        </defs>
        <path
            fill="url(#a)"
            d="M0 144.001C0 117.491 21.49 96 48.001 96h191.998A48.001 48.001 0 01288 144.001v191.998C288 362.51 266.51 384 239.999 384H48.001C21.491 384 0 362.51 0 336z"
        />
        <path
            fill="url(#a)"
            d="M96 48.001C96 21.491 117.49 0 144.001 0h191.998A48.001 48.001 0 01384 48.001v191.998c0 26.51-21.49 48.001-48 48.001H144c-26.509 0-48-21.49-48-48.001z"
        />
        <path
            fill="#fff"
            d="M48 176c0-17.673 14.327-32 32-32h128a32 32 0 0132 32v128c0 17.673-14.327 32-32 32H80c-17.673 0-32-14.327-32-32z"
        />
        <path
            fill="#fff"
            d="M144 80c0-17.673 14.327-32 32-32h128a32 32 0 0132 32v128c0 17.673-14.327 32-32 32H176c-17.673 0-32-14.327-32-32z"
        />
        <defs>
            <linearGradient id="b" x1="0.25" y1="0.25" x2="0.75" y2="0.75">
                <stop offset="0" stopColor="#ffe599" />
                <stop offset="1" stopColor="#f1c232" />
            </linearGradient>
        </defs>
        <path
            fill="url(#b)"
            d="M184 106.667C184 96.357 192.358 88 202.667 88h74.666A18.667 18.667 0 01296 106.667v74.666c0 10.31-8.358 18.667-18.667 18.667h-74.666c-10.31 0-18.667-8.358-18.667-18.667z"
        />
        <path
            fill="url(#b)"
            d="M88 202.667C88 192.357 96.358 184 106.667 184h74.666A18.667 18.667 0 01200 202.667v74.666c0 10.31-8.358 18.667-18.667 18.667h-74.666C96.357 296 88 287.642 88 277.333z"
        />
    </svg>
)

export const OCPIcon = () => (
    <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        style={{ width: '1em', marginRight: '10px', color: '#BB202A' }}
        role="presentation"
    >
        <g>
            <path
                className="st0"
                d="M29,45.3L13,51.1c0.2,2.6,0.6,5.1,1.3,7.6l15.3-5.6C29,50.6,28.8,47.9,29,45.3"
                fill="#BB202A"
            />
            <path
                className="st0"
                d="M100,27.5c-1.1-2.3-2.4-4.5-3.9-6.7L80,26.7c1.9,1.9,3.4,4.1,4.7,6.4L100,27.5z"
                fill="#BB202A"
            />
            <path
                className="st1"
                d="M64.7,23c3.3,1.6,6.2,3.7,8.7,6.2l16.1-5.8C85,17.1,78.9,11.8,71.5,8.4c-22.9-10.7-50.3-0.7-61,22.2
                    C7,38,5.7,45.9,6.3,53.5l16.1-5.8c0.3-3.5,1.1-7,2.7-10.3C32,22.5,49.8,16,64.7,23"
                fill="#E12634"
            />
            <path
                className="st1"
                d="M15.3,58.4L0,63.9c1.4,5.6,3.8,10.8,7.2,15.5l16-5.8C19.1,69.4,16.3,64.1,15.3,58.4"
                fill="#E12634"
            />
            <path
                className="st1"
                d="M81.8,52.3c-0.3,3.5-1.1,7-2.7,10.3C72.1,77.5,54.4,84,39.5,77c-3.3-1.6-6.3-3.7-8.7-6.2l-16,5.8
                    c4.4,6.2,10.5,11.5,17.9,14.9c22.9,10.7,50.3,0.7,61-22.2c3.5-7.4,4.7-15.3,4.1-22.9L81.8,52.3z"
                fill="#E12634"
            />
            <path
                className="st1"
                d="M85.7,32.7l-15.3,5.6c2.8,5.1,4.2,10.9,3.7,16.8l16-5.8C89.8,43.5,88.3,37.9,85.7,32.7"
                fill="#E12634"
            />
            <path
                className="st2"
                d="M29,48.5c0-1.1,0-2.1,0.1-3.2L13,51.1c0.1,1,0.2,2.1,0.4,3.1L29,48.5z"
                fill="#971B1F"
            />
            <path
                className="st2"
                d="M97.7,23.3c-0.5-0.8-1-1.6-1.6-2.4L80,26.7c0.7,0.7,1.4,1.5,2,2.3L97.7,23.3z"
                fill="#971B1F"
            />
            <path
                className="st0"
                d="M14.7,76.7c1.2,1.7,2.6,3.4,4.1,5l17.4-6.4c-2-1.3-3.9-2.8-5.5-4.4L14.7,76.7z M97.8,46.5l-16,5.8
                    c-0.2,2.3-0.6,4.6-1.4,6.9l17.4-6.4C98,50.7,98,48.6,97.8,46.5"
                fill="#BB202A"
            />
        </g>
    </svg>
)

export const IBMCloudIcon = () => (
    <svg viewBox="0 4 64 64" role="presentation">
        <defs>
            <filter id="prefix__a" filterUnits="userSpaceOnUse" x="79.3" y="86.2" width="188.1" height="166.2">
                <feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0" colorInterpolationFilters="sRGB" />
            </filter>
        </defs>
        <mask maskUnits="userSpaceOnUse" x="79.3" y="86.2" width="188.1" height="166.2" id="prefix__e">
            <g filter="url(#prefix__a)">
                <path d="M104.4 152.5c-.6 0-1.2-.2-1.8-.5l-16.8-9.7c-1.6-.8-2.3-2.7-1.7-4.4.7-1.8 2.7-2.8 4.6-2.1l.6.3 16.8 9.7c1.7.9 2.4 3.1 1.5 4.8-.6 1.2-1.8 1.9-3.2 1.9zm29.1-29c-1.3 0-2.4-.7-3.1-1.8l-9.7-16.8c-.9-1.5-.6-3.5.7-4.7 1.5-1.3 3.7-1.1 5 .4.1.2.3.3.4.5l9.7 16.8c1 1.6.6 3.7-.9 4.9-.7.5-1.4.7-2.1.7zm36-14.4V90c0-2 1.4-3.6 3.4-3.8 2-.1 3.6 1.4 3.7 3.4v19.8c0 2-1.6 3.6-3.6 3.6h-.2c-1.8-.3-3.3-2-3.3-3.9zm43.2 14.4c-.7 0-1.4-.2-2-.6-1.5-1.1-1.9-3.3-.9-4.9l9.7-16.8c1-1.7 3.2-2.3 4.9-1.3.2.1.4.2.5.4 1.3 1.2 1.6 3.2.7 4.7l-9.7 16.8c-.7 1-1.9 1.7-3.2 1.7zm29 29c-1.3 0-2.5-.7-3.2-1.9-.8-1.8-.2-3.9 1.5-4.8l16.6-9.6c1.5-.9 3.4-.6 4.6.7 1.3 1.5 1.1 3.7-.4 5-.2.1-.3.3-.5.4l-17 9.8c-.3.2-.9.4-1.6.4z" />
                <linearGradient
                    id="prefix__b"
                    gradientUnits="userSpaceOnUse"
                    x1="179.54"
                    y1="197.623"
                    x2="136.578"
                    y2="136.268"
                >
                    <stop offset=".2" stopOpacity="0" />
                    <stop offset=".287" stopOpacity=".03" />
                    <stop offset=".501" stopOpacity=".2" />
                    <stop offset=".793" stopOpacity=".742" />
                    <stop offset="1" />
                </linearGradient>
                <path
                    d="M128 233.7c-24.9-24.9-24.9-65.3 0-90.2s65.3-24.9 90.2 0a69.1 69.1 0 015.1 5.7c1.1 1.4 2.1 2.8 3.1 4.3l-5.9 3.9c-.9-1.3-1.8-2.6-2.8-3.8-1.4-1.8-2.9-3.5-4.5-5.1-22.1-22.1-58-22.1-80.2 0-22.1 22.1-22.1 58 0 80.2z"
                    fill="url(#prefix__b)"
                />
                <path d="M218.6 252.4h-98.2c-22.8-.2-41.1-18.7-40.9-41.5l7.1.1c-.1 18.8 15 34.2 33.8 34.4h98.1c23 0 41.6-18.6 41.7-41.6 0-10.2-3.8-20.1-10.6-27.8l5.3-4.7c17.9 20.1 16.2 50.9-3.8 68.8-9 7.9-20.5 12.3-32.5 12.3z" />
                <linearGradient
                    id="prefix__c"
                    gradientUnits="userSpaceOnUse"
                    x1="75.254"
                    y1="203.618"
                    x2="118.48"
                    y2="178.661"
                >
                    <stop offset=".08" />
                    <stop offset=".753" stopOpacity=".07" />
                    <stop offset=".875" stopOpacity="0" />
                </linearGradient>
                <path
                    d="M86.6 210.9l-7.1-.1c.1-20 14.6-37 34.3-40.3l1.2 7c-16.3 2.8-28.3 16.9-28.4 33.4z"
                    fill="url(#prefix__c)"
                />
                <linearGradient
                    id="prefix__d"
                    gradientUnits="userSpaceOnUse"
                    x1="174.059"
                    y1="208.327"
                    x2="239.81"
                    y2="153.155"
                >
                    <stop offset=".138" stopOpacity="0" />
                    <stop offset=".32" stopOpacity=".07" />
                    <stop offset=".847" stopOpacity=".764" />
                    <stop offset=".947" />
                </linearGradient>
                <path
                    d="M176.9 203.3l-7.1-.1c.2-26.9 22.2-48.6 49.1-48.4 13.7.1 26.8 6 36 16.2l-5.3 4.7c-15.3-17.1-41.7-18.6-58.8-3.3-8.7 8-13.8 19.2-13.9 30.9z"
                    fill="url(#prefix__d)"
                />
            </g>
        </mask>
        <linearGradient
            id="prefix__f"
            gradientUnits="userSpaceOnUse"
            x1="234.367"
            y1="65.613"
            x2="120.164"
            y2="259.491"
        >
            <stop offset="0" stopColor="#50ffd2" />
            <stop offset="1" stopColor="#0064ff" />
        </linearGradient>
        <path
            d="M79.3 86.2h188.1v166.2H79.3z"
            mask="url(#prefix__e)"
            transform="matrix(.34025 0 0 .32069 -26.981 -22.292)"
            fill="url(#prefix__f)"
        />
    </svg>
)
