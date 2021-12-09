import React from 'react'
import UserLeftBlock from './UserLeftBlock'
import UserRightBlock from './UserRightBlock'
import "./user.css"
const UserHome = () => {
    return (
        <section id="UserBlock">
            <article>
                <UserLeftBlock />
                <UserRightBlock/>
            </article>
        </section>
    )
}

export default UserHome
