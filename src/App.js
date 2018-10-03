import React, { Component } from 'react';
import logo1 from "./logo1.svg";
/*import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';*/
import ReactTable from "react-table";
import "react-table/react-table.css";
import './App.css';
//import { Tabs, Tab } from 'react-bootstrap';

const API1 = 'https://sheets.googleapis.com/v4/spreadsheets/1dsbBYgKnFYXjZ0XbP2s5tV3hJpa_07aAMMOYW2WwulE/values:batchGet?ranges=Sheet1!A2:B&majorDimension=ROWS&key=AIzaSyCO-r1QvhavGm55Ukgxuxwg1SYEeU9jPkY';
const API2 = 'https://sheets.googleapis.com/v4/spreadsheets/1dsbBYgKnFYXjZ0XbP2s5tV3hJpa_07aAMMOYW2WwulE/values:batchGet?ranges=Sheet2!A2:B&majorDimension=ROWS&key=AIzaSyCO-r1QvhavGm55Ukgxuxwg1SYEeU9jPkY';
const API3 = 'https://sheets.googleapis.com/v4/spreadsheets/1dsbBYgKnFYXjZ0XbP2s5tV3hJpa_07aAMMOYW2WwulE/values:batchGet?ranges=Sheet3!A2:B&majorDimension=ROWS&key=AIzaSyCO-r1QvhavGm55Ukgxuxwg1SYEeU9jPkY';
const API4 = 'https://sheets.googleapis.com/v4/spreadsheets/1dsbBYgKnFYXjZ0XbP2s5tV3hJpa_07aAMMOYW2WwulE/values:batchGet?ranges=Sheet4!A2:B&majorDimension=ROWS&key=AIzaSyCO-r1QvhavGm55Ukgxuxwg1SYEeU9jPkY';
const API5 = 'https://sheets.googleapis.com/v4/spreadsheets/1dsbBYgKnFYXjZ0XbP2s5tV3hJpa_07aAMMOYW2WwulE/values:batchGet?ranges=Sheet5!A2:B&majorDimension=ROWS&key=AIzaSyCO-r1QvhavGm55Ukgxuxwg1SYEeU9jPkY';
const API6 = 'https://sheets.googleapis.com/v4/spreadsheets/1dsbBYgKnFYXjZ0XbP2s5tV3hJpa_07aAMMOYW2WwulE/values:batchGet?ranges=Sheet6!A2:B&majorDimension=ROWS&key=AIzaSyCO-r1QvhavGm55Ukgxuxwg1SYEeU9jPkY';
const API7 = 'https://sheets.googleapis.com/v4/spreadsheets/1dsbBYgKnFYXjZ0XbP2s5tV3hJpa_07aAMMOYW2WwulE/values:batchGet?ranges=Sheet7!A2:B&majorDimension=ROWS&key=AIzaSyCO-r1QvhavGm55Ukgxuxwg1SYEeU9jPkY';
const API8 = 'https://sheets.googleapis.com/v4/spreadsheets/1dsbBYgKnFYXjZ0XbP2s5tV3hJpa_07aAMMOYW2WwulE/values:batchGet?ranges=Sheet8!A2:B&majorDimension=ROWS&key=AIzaSyCO-r1QvhavGm55Ukgxuxwg1SYEeU9jPkY';
const API9 = 'https://sheets.googleapis.com/v4/spreadsheets/1dsbBYgKnFYXjZ0XbP2s5tV3hJpa_07aAMMOYW2WwulE/values:batchGet?ranges=Sheet9!A2:B&majorDimension=ROWS&key=AIzaSyCO-r1QvhavGm55Ukgxuxwg1SYEeU9jPkY';

/*const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 700,
  },
});*/

/*function AutoGrid(props) {
  const { classes } = props;

function SimpleTable(props) {
  const { classes } = props;*/

class App extends Component {

  constructor(){
    super();
    this.state = {
     items1:[],
     items2:[],
     items3:[],
     items4:[],
     items5:[],
     items6:[],
     items7:[],
     items8:[],
     items9:[]
    };
  }

  componentDidMount(){

    Promise.all([
      fetch(API1), fetch(API2), fetch(API3), fetch(API4), fetch(API5), fetch(API6), fetch(API7), fetch(API8), fetch(API9)
      ])
        .then(([res1, res2, res3, res4, res5, res6, res7, res8, res9]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json(), res9.json()]))
          .then(([data1, data2, data3, data4, data5, data6, data7, data8, data9]) => {
            let br1 = data1.valueRanges[0].values;
            let br2 = data2.valueRanges[0].values;
            let br3 = data3.valueRanges[0].values;
            let br4 = data4.valueRanges[0].values;
            let br5 = data5.valueRanges[0].values;
            let br6 = data6.valueRanges[0].values;
            let br7 = data7.valueRanges[0].values;
            let br8 = data8.valueRanges[0].values;
            let br9 = data9.valueRanges[0].values;

    var objs1 = br1.map(function(x) { 
      return { 
        name: x[0], 
        distance: x[1] 
      }; 
    });
    this.setState({ items1: objs1 });
    

    var objs2 = br2.map(function(x) { 
      return { 
        name: x[0], 
        distance: x[1] 
      }; 
    });
    this.setState({ items2: objs2 });

    var objs3 = br3.map(function(x) { 
      return { 
        name: x[0], 
        distance: x[1] 
      }; 
    });
    this.setState({ items3: objs3 });

    var objs4 = br4.map(function(x) { 
      return { 
        name: x[0], 
        distance: x[1] 
      }; 
    });
    this.setState({ items4: objs4 });

    var objs5 = br5.map(function(x) { 
      return { 
        name: x[0], 
        distance: x[1] 
      }; 
    });
    this.setState({ items5: objs5 });

    var objs6 = br6.map(function(x) { 
      return { 
        name: x[0], 
        distance: x[1] 
      }; 
    });
    this.setState({ items6: objs6 });

    var objs7 = br7.map(function(x) { 
      return { 
        name: x[0], 
        distance: x[1] 
      }; 
    });
    this.setState({ items7: objs7 });

    var objs8 = br8.map(function(x) { 
      return { 
        name: x[0], 
        distance: x[1] 
      }; 
    });
    this.setState({ items8: objs8 });

    var objs9 = br9.map(function(x) { 
      return { 
        name: x[0], 
        distance: x[1] 
      }; 
    });
    this.setState({ items9: objs9 });
 })
}
 
  render() {
    const { items1,items2,items3,items4,items5,items6,items7,items8,items9 } = this.state;
    let total1 = items1.reduce( function(cnt,o){ return cnt + o.distance; }, 0);
    console.log(total1);
    //let sum = a => a.reduce((x, y) => x + y, 0);  
    
    
    return (
      /*<div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
        <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Distance</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {items1.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.distance}</TableCell>
                </TableRow>
            );
          })}
          </TableBody>
          </Table>
          </Paper>
          </Grid>
          <Grid item xs>
        <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Distance</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {items2.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.distance}</TableCell>
                </TableRow>
            );
          })}
          </TableBody>
          </Table>
          </Paper> 
          </Grid> 
          </Grid>
          </div>*/

        <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
          <h1 className="App-title">Born to Run - Season 6 Leaderboard</h1>
        </header>
          <ReactTable
            data={items1}
            columns={[
              {
                Header: 'Team 1',
                columns: [
                  {
                    Header: "First Name",
                    accessor: "name"
                  },
                  {
                    Header: "Distance",
                    id: "distance",
                    accessor: d => d.distance
                  }
                ]
              }
            ]}
            /*defaultSorted={[
              {
                id: "distance",
                desc: true
              }
            ]}*/
            defaultPageSize={5}
            className="-striped -highlight"
          />
          <br />
                
          <ReactTable
            data={items2}
            columns={[
              {
                Header: "Team 2",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "name"
                  },
                  {
                    Header: "Distance",
                    id: "distance",
                    accessor: d => d.distance
                  }
                ]
              }
            ]}
            /*defaultSorted={[
              {
                id: "distance",
                desc: true
              }
            ]}*/
            defaultPageSize={5}
            className="-striped -highlight"
          />
          <br />
          
          <ReactTable
            data={items3}
            columns={[
              {
                Header: "Team 3",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "name"
                  },
                  {
                    Header: "Distance",
                    id: "distance",
                    accessor: d => d.distance
                  }
                ]
              }
            ]}
            /*defaultSorted={[
              {
                id: "distance",
                desc: true
              }
            ]}*/
            defaultPageSize={5}
            className="-striped -highlight"
          />
          <br />
          
          <ReactTable
            data={items4}
            columns={[
              {
                Header: "Team 4",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "name"
                  },
                  {
                    Header: "Distance",
                    id: "distance",
                    accessor: d => d.distance
                  }
                ]
              }
            ]}
            /*defaultSorted={[
              {
                id: "distance",
                desc: true
              }
            ]}*/
            defaultPageSize={5}
            className="-striped -highlight"
          />
          <br />
          
          <ReactTable
            data={items5}
            columns={[
              {
                Header: "Team 5",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "name"
                  },
                  {
                    Header: "Distance",
                    id: "distance",
                    accessor: d => d.distance
                  }
                ]
              }
            ]}
            /*defaultSorted={[
              {
                id: "distance",
                desc: true
              }
            ]}*/
            defaultPageSize={5}
            className="-striped -highlight"
          />
          <br />
          
          <ReactTable
            data={items6}
            columns={[
              {
                Header: "Team 6",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "name"
                  },
                  {
                    Header: "Distance",
                    id: "distance",
                    accessor: d => d.distance
                  }
                ]
              }
            ]}
            /*defaultSorted={[
              {
                id: "distance",
                desc: true
              }
            ]}*/
            defaultPageSize={5}
            className="-striped -highlight"
          />
          <br />
          
          <ReactTable
            data={items7}
            columns={[
              {
                Header: "Team 7",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "name"
                  },
                  {
                    Header: "Distance",
                    id: "distance",
                    accessor: d => d.distance
                  }
                ]
              }
            ]}
            /*defaultSorted={[
              {
                id: "distance",
                desc: true
              }
            ]}*/
            defaultPageSize={5}
            className="-striped -highlight"
          />
          <br />
          
          <ReactTable
            data={items8}
            columns={[
              {
                Header: "Team 8",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "name"
                  },
                  {
                    Header: "Distance",
                    id: "distance",
                    accessor: d => d.distance
                  }
                ]
              }
            ]}
            /*defaultSorted={[
              {
                id: "distance",
                desc: true
              }
            ]}*/
            defaultPageSize={5}
            className="-striped -highlight"
          />
          <br />
         
          <ReactTable
            data={items9}
            columns={[
              {
                Header: "Team 9",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "name"
                  },
                  {
                    Header: "Distance",
                    id: "distance",
                    accessor: d => d.distance
                  }
                ]
              }
            ]}
            /*defaultSorted={[
              {
                id: "distance",
                desc: true
              }
            ]}*/
            defaultPageSize={5}
            className="-striped -highlight"
          />
          <br />
          
      </div>
    );
  }
}


export default App;
