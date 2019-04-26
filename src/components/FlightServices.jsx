import React from 'react';

import ActionButton from './ActionButton.jsx';

function ListFlights(props) {
  return (
    <div>
      <h3>Available Flights</h3>
      <table>
        <tbody>
          <tr>
            <th>Flight Name</th>
          </tr>
          {props.flightsList.map(flight => {
            return (
              <tr key={flight.name}>{/** Why I added a Key here?? */}
                <td>{flight.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

class FlightServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
    };
    this.bookFlight = this.bookFlight.bind(this);
    this.setFlightName = this.setInputAttr('flightName');
  }
  bookFlight(event) {
    event.preventDefault();
    const flights = this.state.flights.slice(0);
    flights.push({ name: this.state.flightName });
    this.setState({
      flights,
      flightName: '',
    });
  }
  setInputAttr = name => event => {
    this.setState({
      [name]: event.currentTarget.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.flights.length > 0 && (
          <ListFlights flightsList={this.state.flights} />
        )}
        <h3 className="margin-top--20px">Add Flight</h3>
        <form>
          <input
            type="text"
            name="flightName"
            onChange={this.setFlightName}
            placeholder="Enter Flight Name"
          />
          <ActionButton text="Add Flight" onAction={this.bookFlight} />
        </form>
      </React.Fragment>
    );
  }
}

export default FlightServices;
