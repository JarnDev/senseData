import React, {Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const People = lazy(() => import('../pages/people'))
const Starships = lazy(() => import('../pages/starships'))

export default function Routes() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path='/' exact component={People} /> 
                <Route path='/starships' exact component={Starships} /> 
            </Switch>
        </Suspense>
    )
}
