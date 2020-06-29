import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import cars from '../../guest/pages/car.json'
import con from '../../con/api'
// Form
import Select from '../../components/select'

class Index extends Component {
  _isMounted = false;
  state = {
    cars:[]
  }
  componentDidMount(){
    this.setState({cars});
    document.title = 'Car List';
    console.log(cars);
  }
  onBrandChange(e){
    console.log(e);
  }
  render() {
    return (
      <div className="content-page">
        <div className="content">
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-md-3">
                <form action="">
                  <div className="form-group">
                    <Select title="Filter Brand" url={`${con.api}/brand`} param="brand" value="brand_id" label="name" onChange={this.onBrandChange.bind(this)} isClearable />
                  </div>
                </form>
              </div>
              <div className="col-md-9">
                <div className="row">
                  {
                    this.state.cars.map((r, key) => (
                      <div className="col-md-4 mb-4" key={key}>
                        <div className="vh-30 position-relative mx-auto bg-img shadow-img radius-10 oh" style={{ backgroundImage: `url('${con.img}/car/${'car_2.png'}')` }} >
                          <div className="position-absolute text-center b-0 w-100" style={{background:'rgba(255,255,255,.9)'}}>
                            <h6 className="f-600 text-10 text-primary lh-0 mb-0"> {r.brand} </h6>
                            <h6 className="f-600 text-9 lh-0 mt-0"> {r.name} <span className="text-warning">{r.varian}</span> ({r.year}) </h6>
                            <h6 className="f-600 text-9 lh-0 mt-0"> <span className="badge badge-soft-primary text-9 px-2">{r.plat}</span> </h6>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="position-fixed b-0 r-0 p-3">
                  <Link to="/car/add" className="btn btn-primary border-0 shadow-img center radius-20">
                    <img src={con.img+'/icons/car-xs.png'} alt="img" className="avatar-xs rounded-circle" />
                    <span className="ml-2"> Add New Car </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;
