import React, {Component} from 'react';
import $ from 'jquery';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from './Reducer/store'
const recentsIcon = <FontIcon className="material-icons">content One</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">content Two</FontIcon>;
const nearbyIcon = <FontIcon className="material-icons">content There</FontIcon>;

/*
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
 class Content extends Component{
  /*要在本地服务器下*/
  componentDidMount(){
    $.ajax({
      url:'http://localhost/data.php',
      data:{
        id:this.props.match.params.id
      },
      success(data){
        let msg = JSON.parse(data)
        console.log(msg)
        store.dispatch({type:'bookAdd',text:msg});
      }
    });
  }
  componentDidUpdate(){
    $.ajax({
      url:'http://localhost/data.php',
      data:{
        id:this.props.match.params.id
      },
      success(data){
        let msg = JSON.parse(data)
        console.log(msg)
        store.dispatch({type:'bookAdd',text:msg});
      }
    });
  }
  render(){
    return (
        <div>{store.getState().book}</div>
      )
  }
 }
class Book extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Router>
        <div>
             <Paper zDepth={1} style={{position:'fixed',bottom:'0',width:'100%'}}>
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <Link to='/1'>
                <BottomNavigationItem
                  icon={recentsIcon}
                  onClick={() => this.select(0)}
                />
                </Link>
                <Link to='/2'>
                <BottomNavigationItem
                  icon={favoritesIcon}
                  onClick={() => this.select(1)}
                />
                </Link>
                <Link to='/3'>
                <BottomNavigationItem
                  icon={nearbyIcon}
                  onClick={() => this.select(2)}
                />
                </Link>
              </BottomNavigation>
            </Paper>
            <Route path='/:id' component={Content}/>
        </div>
      </Router>
    );
  }
}

export default Book;