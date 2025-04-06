import './style.css'
const Alert = ({titulo})=>{
    return(
        <div class="alert alert-danger" role="alert">{titulo}</div>
    );
}
export default Alert;