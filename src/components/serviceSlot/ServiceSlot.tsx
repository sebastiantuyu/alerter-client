import './ServiceSlot.scss';

interface ServiceSlotProps  {
  name: string;
}

const ServiceSlot = ({
  name
}: ServiceSlotProps) => {

  return (
    <div className="adl-dashboard__serviceSlot">
      <div className="adl-dashboard__serviceSlot--title">
        {name}
      </div>
    </div>
  ) 
};

export default ServiceSlot;