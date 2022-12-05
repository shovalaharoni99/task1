

import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <div className="expense-item__description "> 
                <div>{props.title}</div> 
                <div>₪ {props.price} </div>
            </div>
            <img className="expense-item__image" src={props.image} />
        </div>
    );
}

export default ExpenseItem;