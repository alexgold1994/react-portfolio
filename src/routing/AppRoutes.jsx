import { Route, Switch } from 'react-router-dom'
import Main from '../components/pages/Main/Main'
import About from '../components/pages/About/About'
import Blog from '../components/pages/Blog/Blog'
import MySkills from '../components/pages/MySkills/MySkills'
import Works from '../components/pages/Works/Works'
import { routes } from './routes'

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path={`${routes.main.absolute()}`} component={Main} />
      <Route exact path={`${routes.about.absolute()}/*`} component={About} />
      <Route exact path={`${routes.blog.absolute()}/*`} component={Blog} />
      <Route
        exact
        path={`${routes.skills.absolute()}/*`}
        component={MySkills}
      />
      <Route exact path={`${routes.works.absolute()}/*`} component={Works} />
    </Switch>
  )
}
