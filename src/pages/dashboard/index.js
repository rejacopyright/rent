import React from 'react'
import { ClassicSpinner } from "react-spinners-kit"
import feather from 'feather-icons'

class Dashboard extends React.Component {
  _isMounted = false;
  state = {
    loading: true,
  }
  componentDidMount() {
    document.title = 'Dashboard';
    feather.replace();
    this.setState({loading:false});
  }
  render() {
    return (
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            { this.state.loading && <div className="overlay center"><ClassicSpinner color="#5369f8" loading={true} /></div> }
            Dashboard
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
