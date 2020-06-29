import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import feather from 'feather-icons'

class Index extends Component {
  _isMounted = false;
  componentDidMount(){
    this._isMounted = true;
    this._isMounted && feather.replace();
    document.title = 'Settings';
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    return(
      <div className="content-page">
        <div className="content">
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-md-3">
                <div className="d-block border-bottom border-2 mb-3 pb-1">
                  <h4 className="text-primary m-0">Cars</h4>
                  <p className="text-9 lh-1 m-0">Set up the branding, color, type, model, and all related to cars</p>
                </div>
                <Link to="/settings/brand" className="center-left mt-2 bg-white p-3 radius-5 shadow-sm hover-md pointer">
                  <span data-feather="tag" className="icon-dual-primary icon-xs" />
                  <div className="pl-2">
                    <p className="lh-1 mt-0 mb-1 text-primary">Brand</p>
                    <p className="lh-1 mb-0 text-8 text-dark">Manage brand for your cars</p>
                  </div>
                </Link>
                <Link to="/settings/color" className="center-left mt-2 bg-white p-3 radius-5 shadow-sm hover-md pointer">
                  <span data-feather="aperture" className="icon-dual-primary icon-xs" />
                  <div className="pl-2">
                    <p className="lh-1 mt-0 mb-1 text-primary">Colors</p>
                    <p className="lh-1 mb-0 text-8 text-dark">Set colors for your cars</p>
                  </div>
                </Link>
                <Link to="/settings/type" className="center-left mt-2 bg-white p-3 radius-5 shadow-sm hover-md pointer">
                  <span data-feather="filter" className="icon-dual-primary icon-xs" />
                  <div className="pl-2">
                    <p className="lh-1 mt-0 mb-1 text-primary">Type</p>
                    <p className="lh-1 mb-0 text-8 text-dark">Set type for your cars</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
