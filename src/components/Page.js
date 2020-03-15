import React, { Component } from "react";
import Header from "./Header";
import Container from "./Container";
import SearchBox from "./SearchBox";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import API from "../utils/API";

class Page extends Component {
  // set State
  state = {
    result: [],
    filteredResult: []
  };

  // when this component mounts, display seeded/static results of random users
  componentDidMount() {
    this.displayEmployees();
  }

  // API call
  displayEmployees = () => {
    API.display()
      .then(res => {
        // json is wrapped as an array named "results". Using res.data.results trims to just the json
        // use for loop to add id since none is included in the JSON of users
        const resID = [];
        for (let i = 0; i < res.data.results.length; i++) {
          let el = res.data.results[i];
          el.id = i + 1;
          // add to array
          resID.push(el);
        }

        // update the State
        this.setState({
          // res.data.results is same as using resID from above
          result: res.data.results,
          filteredResult: res.data.results
        });
        // now includes id
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  };

  // function for matching first or last name entered in text box
  handleInputChange = event => {
    // react way of using text entered in search input
    const search = event.target.value;
    // alert (search);

    // show filtered results https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // this now uses the state "result" which already includes the "results" with s
    const filtered = this.state.result.filter(person => {
      // return person.name.first===search

      // need to make sure the search match accounts for capitalization (toUpperCase doesn't seem to work) and to pull results for first OR last name
      if (
        person.name.first.toLowerCase().indexOf(search) > -1 ||
        person.name.last.toLowerCase().indexOf(search) > -1
      ) {
        return true;

        // words.filter(word => word.indexOf("es")> -1 );
        // could have used .includes() instead
      }
    });

    // update the State for filtered search results
    this.setState({
      // show the filtered search results for the render at the bottom
      filteredResult: filtered
    });
  };

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  sortFirst = () => {
    // use sort to arrange results alphanumerically (UTF-16 code units values) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    let sortedFirst = this.state.result.sort((a, b) => {
      // toUpperCase is to compare all letters consistently
      var nameA = a.name.first.toUpperCase();
      var nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // this is for if the above two conditions are not met (i.e same FIRST name), then compare last name
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    // update the State for sorted FIRST name results
    this.setState({
      // show the sorted by FIRST name list for the render at bottom
      filteredResult: sortedFirst
    });
  };

  // same as above function except for last name
  sortLast = () => {
    let sortedLast = this.state.result.sort((a, b) => {
      var nameA = a.name.last.toUpperCase();
      var nameB = b.name.last.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // this is for if the above two conditions are not met (i.e same LAST name), then compare first name
      if (a.name.last < b.name.first) {
        return -1;
      }
      if (a.name.last > b.name.first) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    // update the State for sorted LAST name results
    this.setState({
      // show the sorted by LAST name list for the render at bottom
      filteredResult: sortedLast
    });
  };

  // revert to sort by the id (added to the results of the API call at top)
  restoreOrder = () => {
    let sortID = this.state.result.sort((a, b) => {
      // just comparing numbers
      return a.id - b.id;
    });
    // update the State for results sorted by id
    this.setState({
      // show the sorted by id list for the render at bottom
      filteredResult: sortID
    });
  };

  // render the page
  render() {
    return (
      <Container>
        <Header />
        <SearchBox handleInputChange={this.handleInputChange} />
        <TableHeader
          restoreOrder={this.restoreOrder}
          sortFirst={this.sortFirst}
          sortLast={this.sortLast}
        >
          {/* use map to populate all 100 user entries */}
          {/* filteredResult will update with State update in each filter, sort function (by text search or header click) */}
          {this.state.filteredResult.map((person, index) => (
            <TableBody
              key={index}
              // may seem redundant to define index but cannot use key directly as prop
              index={person.id}
              image={person.picture.medium}
              first={person.name.first}
              last={person.name.last}
              phone={person.cell}
              email={person.email}
              age={person.dob.age}
            />
          ))}
        </TableHeader>
      </Container>
    );
  }
}

export default Page;
