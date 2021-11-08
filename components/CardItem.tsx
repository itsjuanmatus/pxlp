import React from 'react'
import ReactTooltip from "react-tooltip";

export default function CardItem({ title, tooltip='Lorem Ipsum nicasource hehe', textColor, leftIconColor }: any) {
    return (
        <div className={`${textColor} font-light pr-16 md:pr-24 mt-2 inline-flex items-center space-x-2 w-full`}>
            <span >
                <svg xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 stroke-current ${leftIconColor}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </span>
            <span className={`${textColor}`}>{title}</span>

            <span data-tip data-for='info' >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </span>
            <ReactTooltip id='info' type='error' backgroundColor='#000000'>
                <span>{tooltip}</span>
            </ReactTooltip>
        </div>
    )
}
