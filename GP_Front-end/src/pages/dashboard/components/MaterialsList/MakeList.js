import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default (props) => {
    return (
        <Card key={props.id} >
            <Card.Body>
                <hr />
                <Card.Title> <strong> {props.title} </strong></Card.Title>
                <div id="display" className="quantity-cost">
                    <Card.Subtitle id="mg" className="mb-2 ml-2 text-muted">Quantity {props.quantity}</Card.Subtitle>
                </div>
                <hr />
                <div className="d-flex button">
                    {props.data && props.data && props.data.filter(value => value.roleCode === 'ADMIN').length > 0 && <Link id="deleteMaterial" className="btn btn-primary" to={`/editmaterial/${props.id}`} >Edit Material</Link>}
                    {props.data && props.data && props.data.filter(value => value.roleCode === 'ADMIN').length > 0 && <Link id="editMaterial" className="btn btn-primary buttonDelete" to={`/deletematerial/${props.id}`}  >Delete Material</Link>}
                </div>
            </Card.Body>
        </Card>
    )
}
