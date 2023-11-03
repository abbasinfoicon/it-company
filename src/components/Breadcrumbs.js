import Link from 'next/link'
import React from 'react'

const Breadcrumbs = ({ name, title }) => {
    return (
        <div className="breadcrumbs-area">
            <h3>{title}</h3>
            <ul>
                <li>
                    <Link href="/dashboard">Home</Link>
                </li>
                <li>{name}</li>
            </ul>
        </div>
    )
}

export default Breadcrumbs