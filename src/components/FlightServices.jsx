import React from 'react';
import PropTypes from 'prop-types';

import ActionButton from './ActionButton.jsx';

function ListFlights({ flightsList }) {
  return (
    <div>
      <h3>Available Flights</h3>
      <table>
        <tbody>
          <tr>
            <th>Flight Name</th>
          </tr>
          {flightsList.map(flight => (
            <tr key={flight.name}>
              {/** Why I added a Key here?? */}
              <td>{flight.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ListFlights.propTypes = {
  flightsList: PropTypes.array,
};

class FlightServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
    };
    this.handleBookFlight = this.bookFlight.bind(this);
    this.handleSetFlightName = this.setInputAttr('flightName');
  }
  bookFlight(event) {
    event.preventDefault();
    this.setState(state => {
      const flights = state.flights.slice(0);
      flights.push({ name: state.flightName });
      return {
        flights,
        flightName: '',
      };
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
            onChange={this.handleSetFlightName}
            placeholder="Enter Flight Name"
          />
          <ActionButton text="Add Flight" onAction={this.handleBookFlight} />
        </form>
      </React.Fragment>
    );
  }
}

export default FlightServices;
