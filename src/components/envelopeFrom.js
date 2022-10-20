import "./from.css";
function EnvelopeFrom({personFrom}) {
  return(
    <div className="envelopeFrom">
        <p>{personFrom.fullName}</p>
        <p>{personFrom.street}</p>
        <p>{personFrom.city}</p>
    </div>
  )   
};
export default EnvelopeFrom;