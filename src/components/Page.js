import React, { Component } from "react";
import Header from "./Header";
import Container from "./Container";
import SearchBox from "./SearchBox";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import API from "../utils/API";

class Page extends Component {
  state = {
    result: [],
    filteredResult: []
  };

  // When this component mounts, display seeded/static results
  componentDidMount() {
    this.displayEmployees();
  }

  displayEmployees = () => {
    API.display()
      .then(res => {
        this.setState({ result: res.data.results, filteredResult: res.data.results });
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  };


  // need to make sure to concatenate name or use either first or last name
  handleInputChange = event => {
    const search = event.target.value;
    // get filtered results via function
    // alert (search);
    
    // set filtered result
    const filtered = this.state.result.filter(person => {
      // return person.name.first===search

      // need to make sure the search match accounts for capitalization
      
      return person.name.first.indexOf(search)> -1;
    //   words.filter(word => word.indexOf("es")> -1 );
})

    this.setState({

      filteredResult: filtered
    }) 
  };
  
  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  sortFirst = () => {
    let sortedFirst = this.state.result.sort((a,b) =>
    {
      var nameA = a.name.first.toUpperCase();
      var nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return -1;
     }
      if (nameA > nameB) {
        return 1;
     }
  // this is for if the above two conditions are not met
      if (a.name.last < b.name.last) {
         return -1;
      }
      if (a.name.last > b.name.last) {
         return 1;
      }
    // names must be equal
      return 0;
    })

    this.setState({

      filteredResult: sortedFirst
    }) 
  };

  sortLast = () => {
    let sortedLast = this.state.result.sort((a,b) =>
    {
      var nameA = a.name.last.toUpperCase();
      var nameB = b.name.last.toUpperCase();
      if (nameA < nameB) {
        return -1;
     }
      if (nameA > nameB) {
        return 1;
     }
  // this is for if the above two conditions are not met
      if (a.name.last < b.name.last) {
         return -1;
      }
      if (a.name.last > b.name.last) {
         return 1;
      }
    // names must be equal
      return 0;
    })

    this.setState({

      filteredResult: sortedLast
    }) 
  };

  render() {
    return (
        <Container>
        <Header />
        <SearchBox
          // value={this.state.display}
          handleInputChange={this.handleInputChange}
        />
        <TableHeader sortFirst={this.sortFirst} sortLast={this.sortLast}>
            {
            this.state.filteredResult.map((person, index) => (
              <TableBody
            key={index.toString()}
            image={person.picture.medium}
            first={person.name.first}
            last={person.name.last}
            phone={person.cell}
            email={person.email}
            age={person.dob.age}
          />
            ))
          }
        </TableHeader>
        </Container>
    );
  }
}

// render() {
//   return (<div>
//   {this.state.people.map((person, index) => (
//       <p>Hello, {person.name} from {person.country}!</p>
//   ))}
//   </div>);
// }

export default Page;
