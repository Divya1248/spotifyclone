import React from 'react'
import UserLeftBlock from './UserLeftBlock'
import {
Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import UserRightBlock from './UserRightBlock'

import "./user.css"
const UserHome = () => {
    let { path, url } = useRouteMatch();
    console.log(path);
    return (
        <section id="UserBlock">
            <article>
                <UserLeftBlock />
                <Switch>
                    {/* <Route exact path={path}>
                        <h3>Please select a topic </h3>
                    </Route> */}
                    <Route  path={`${path}/:id`}>
                <UserRightBlock/>
                    </Route>
                    </Switch>
              
            </article>
        </section>
    )
}

export default UserHome
