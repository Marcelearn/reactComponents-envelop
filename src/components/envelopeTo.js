import "./to.css";
function EnvelopeTo({personTo}) {
  return(
    <div className="envelopeTo">
        <p>{personTo.fullName}</p>
        <p>{personTo.street}</p>
        <p>{personTo.city}</p>
    </div>
  )   
};
export default EnvelopeTo;