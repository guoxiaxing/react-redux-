import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import store from './Reducer/store'
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
 class Tab extends Component{
      change(){
        store.dispatch({type:'change'})
      }
    render(){
      return (
              <div>
                <RaisedButton label="change"  onClick={this.change.bind(this)}/>
               <div style={styles.root}>
                  <GridList
                    cellHeight={180}
                    style={styles.gridList}
                  >
                    <Subheader>December</Subheader>
                    {store.getState().tab.map((tile,i) => (
                      <GridTile
                        key={i}
                        title={tile.title}
                        subtitle={<span>by <b>{tile.author}</b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                      >
                        <img src={tile.img} />
                      </GridTile>
                    ))}
                  </GridList>
                </div>
              </div>
        );
    }
 }


export default Tab;