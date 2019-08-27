import React, { Component, lazy ,Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Tabs from './components/Tab'
// import Index from './pages/Index/index'
// import Cinemas from './pages/Cinema/Index'
// import Mine from './pages/Mine/Index'

// // 子组件引入
// import City from './components/city'
// import Movie from './pages/Index/children/movie'
import Loading from './components/loading'

// 懒加载
const Index = lazy(()=>import('./pages/Index/index'))
const Cinemas = lazy(()=>import('./pages/Cinema/Index'))
const Mine = lazy (()=>import('./pages/Mine/Index'))

// 子组件
const City = lazy(()=>import('./components/city'))
const Movie = lazy(()=>import('./pages/Index/children/movie'))
const Show = lazy(()=>import('./pages/shows/showIndex'))

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Suspense fallback={<Loading/>}>
          {/* 根页面 */}
          <Switch>
            <Route path="/" exact render={()=><Redirect to="/index"/>}/>
            <Route path="/index" component={Index}/>
            <Route path="/cinema" component={Cinemas}/>
            <Route path="/mine" component={Mine}/>
          </Switch>


          {/* 子页面 */}
          <Route path='**/city' component={City} />
          <Route path='**/movie/:id' component={Movie} />
          <Route path='**/movies/:id' component={Show}/>

          </Suspense>
          {/* 底栏切换 */}
          <Tabs></Tabs>
        </div>
      </Router>
    )
  }
}
export default App;