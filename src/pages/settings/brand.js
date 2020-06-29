import React, {Component} from 'react'
import feather from 'feather-icons'
import axios from 'axios'
import con from '../../con/api'
import {Input} from '../../components/form'
import Skeleton from 'react-skeleton-loader'

class Brand extends Component {
  _isMounted = false;
  state = {
    page:1,
    pagination:{},
    search:'',
    self:{},
    loading: true,
    brand: [],
  }
  dataUpdate(){
    axios.get(con.api+'/settings/brand', {headers:con.headers, params:{page:this.state.page}}).then(res => {
      this.setState({ brand:res.data.brand, pagination: res.data.page, loading:false }, feather.replace);
    });
  }
  pagination(e){
    this.setState({page:e}, this.dataUpdate);
  }
  componentDidMount(){
    this._isMounted = true;
    this._isMounted && feather.replace();
    document.title = 'Settings | Brand';
    this._isMounted && this.dataUpdate();
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
  onAdd(e){
    e.preventDefault();
    const q = {name: e.target.querySelector('input[name=name]').value};
    if (q.name) {
      this.setState({loading:true});
      axios.post(con.api+'/settings/brand/store', q, {headers:con.headers}).then(res => {
        this.setState({loading:false}, this.dataUpdate);
      });
    }
  }
  render() {
    return(
      <div className="content-page">
        <div className="content">
          <div className="container-fluid mt-3">
            <div className="center-left">
              <div className="">
                <div className="center same-40 radius-50 bg-soft-primary text-primary">B</div>
              </div>
            </div>
            <form action="" onSubmit={this.onAdd.bind(this)}>
              <div className="center-right mb-3">
                <Input sm rowClass="col-md-4 m-0" name="name" placeholder="Brand Name" />
                <div className="col-auto m-0 pl-0">
                  <button type="submit" className="btn btn-xs btn-soft-primary lh-0">Add Brand</button>
                </div>
              </div>
            </form>
            {
              this.state.loading ?
              <div className="row">
                {
                  [1,2,3,4,5,6,7,8].map(key => (
                    <div className="col-md-3 mt-2" key={key}>
                      <Skeleton width="100%" height="55px" widthRandomness={0} color="#eee" />
                    </div>
                  ))
                }
              </div>
              :
              <div className="row">
                {
                  this.state.brand.map((r,key) => (
                    <div className="col-md-3 mt-2" key={key}>
                      <div className="center-left bg-white py-2 px-3 radius-5 shadow-sm hover-md pointer">
                        <div className="pr-1">
                          <div className="center same-20 radius-20 bg-soft-primary text-primary text-9 f-600">{this.state.pagination.from + key}</div>
                        </div>
                        <div className="px-2">
                          <p className="lh-1 mb-0 text-10 f-600 text-primary text-capitalize">{r.name}</p>
                        </div>
                        <div className="btn-group dropleft py-2 ml-auto">
                          <button className="btn text-dark dropdown-toggle p-0" data-toggle="dropdown" aria-expanded="false">
                            <span data-feather="more-vertical" className="icon-dual-primary icon-xs" />
                          </button>
                          <div className="dropdown-menu">
                            <div className="dropdown-item center-left">
                              <div data-feather="edit" className="icon-dual-primary icon-xxs" />
                              <p className="pl-1 mb-0 mt-1 lh- text-9">Edit</p>
                            </div>
                            <div className="dropdown-item center-left">
                              <div data-feather="trash-2" className="icon-dual-primary icon-xxs" />
                              <p className="pl-1 mb-0 mt-1 lh-0 text-9">Remove</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Brand
