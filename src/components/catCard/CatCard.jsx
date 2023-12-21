const CatCard = (props) =>{
    return(
        <div className="card m-3" style={{width:'18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    )
}
export default CatCard;