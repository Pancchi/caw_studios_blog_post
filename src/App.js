import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route ,Link} from 'react-router-dom';
import './App.css';
import BlogPosts from "./BlogPosts/BlogPosts";
import singleBlog from "./BlogPosts/singleBlog";
 class App extends Component {
  render() {
    return (
      <div>
           <Router>
        
					<Switch>
						<Route path="/blogPost" component={singleBlog} />
            <Route exact={true} path="/" component={BlogPosts} />
            <Route path="/BlogPosts" component={BlogPosts} />
					
						
					</Switch>
				</Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
	
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)