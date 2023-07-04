export default function Log() {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="ml-2">Activity</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Log Panen</h3>
            <div className="card-tools">
              <div className="input-group input-group-sm" style={{ width: 150 }}>
                <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-default">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>No BOX</th>
                  <th>User</th>
                  <th>Qty</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>183</td>
                  <td>John Doe</td>
                  <td>11-7-2014</td>
                  <td><span className="tag tag-success">Approved</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /.card-body */}
        </div>
      </div>
    </div>
  )
}