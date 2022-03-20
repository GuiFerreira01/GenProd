

export default (props) => {  


    return (
        <div className="mateirals" key={props.key}  >
            <div className="List-prod">
                <h5 className="Mateiral-title">{props.material.name}</h5> 
                <b >Quantity: </b><p className={props.calc}>{props.material.amount}</p>
                {/* <p>{props.material.name}'s quantity: {props.material.amount}</p>                 */}
            </div>
             <hr/>
        </div>

    )
}
