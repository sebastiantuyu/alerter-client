import SearchBar from '../../searchBar/SearchBar';
import ServiceSlot from '../../serviceSlot/ServiceSlot';
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
          {
            [
              'Backend',
              'Frontend',
              'SSO',
              'Traffic',
              'SSO',
            ].map((v) => <ServiceSlot name={v}/>)
          }
        </div>
      </div>
    )
}

export default DashboardBody;