import './style.css'
const Card = ({nombre, apellido, infomily, git, ig})=>{
    return(
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{nombre}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{apellido}</h6>
    <p class="card-text">{infomily}</p>
    <a href="#" class="card-link">{git}</a>
    <a href="#" class="card-link">{ig}</a>
  </div>
</div>
    );
}
export default Card;