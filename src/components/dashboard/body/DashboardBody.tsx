import SearchBar from '../../searchBar/SearchBar';
import './DashboardBody.scss'

const DashboardBody = ( ) => {
    return (
      <div className="adl-dashboard__body">
        <div className="adl-dashboard__body--title">
          <p>
            Services
          </p>
          <span>
            Track your services status
          </span>
        </div>

        <SearchBar />
        
        <div className="adl-dashboard__body--grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
}

export default DashboardBody;