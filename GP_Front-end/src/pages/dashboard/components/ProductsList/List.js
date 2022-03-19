import { useState, useEffect } from "react"
import MakeMateirals from "./MakeMateirals"
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"



export default (props) => {

    const [isActive, setActive] = useState("false");

    return (
        <Card key={props.key} >
            <Card.Body>
                <hr />

                <Card.Title> <strong> {props.title} </strong></Card.Title>

                <div id="display" className="quantity-cost">
                    <Card.Subtitle id="mg" className="mb-2 ml-2 text-muted">Quantity: {props.quantity}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 ml-2 text-muted">Cost: ${props.cost}</Card.Subtitle>
                    <div >
                        {typeof props.material !== "undefined" && props.material.reduce((value, i) => {


                            const calc = parseInt(value.amount / 3);
                            const calc2 = parseInt(i.amount / 3);

                            var prossible = 0;
                            var total = 0;

                            if (calc < calc2) {
                                prossible = calc
                                total = calc * props.cost
                            } else {
                                prossible = calc2
                                total = calc2 * props.cost
                            }
                            return (
                                <div>
                                    <p className="mb-2 ml-2 text-muted card-subtitle h6">Possible to do: {prossible} </p>
                                    <p className="mb-2 ml-2 text-muted card-subtitle h6">Total: $ {total}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr />
                <Card.Title> <strong> Raw Materials needed </strong> </Card.Title>
                <div className="materilas-list">
                    <hr />
                    {typeof props.material !== "undefined" && props.material.map((value, index) => {

                        return (
                            <div>
                                <MakeMateirals calc={index === 0 ? 'calcFirst' : 'calcSecond'} idClass={index === 0 ? 'idFirst' : 'idSecond'} material={value} id={value.id} key={value.id} all={props} />

                            </div>
                        )
                    })}

                    <div className="d-flex button">

                        {props.data && props.data && props.data.filter(value => value.roleCode === 'ADMIN').length > 0 && <Link id="edit" className="btn btn-primary" to={`/editproduct/${props.id}`} >Edit Product</Link>}
                        {props.data && props.data && props.data.filter(value => value.roleCode === 'ADMIN').length > 0 && <Link id="delete" className="btn btn-primary buttonDelete" to={`/deleteproduct/${props.id}`}  >Delete Product</Link>}

                    </div>
                </div>


            </Card.Body>

        </Card >
    )
}
