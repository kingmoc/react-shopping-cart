import React, { useContext, useState } from 'react';

//context
import { CartContext } from '../contexts/CartContext'
import { Modal, Button, Icon } from 'semantic-ui-react';

const Item = props => {

	const [modalOpen, setModalOPen] = useState(false)
	const { removeItem } = useContext(CartContext)

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<Modal 
					trigger={<button onClick={() => setModalOPen(true)}>Remove from cart</button>}
					size='tiny'
					// open={modalOpen}
					onClose={() => setModalOPen(false)}
				>
					<Modal.Header>Delete Your Item <Icon name='trash alternate outline'/></Modal.Header>
					<Modal.Content>
						<p>Are you sure you want to delete this Item?</p>
					</Modal.Content>
					<Modal.Actions>
						<Button negative onClick={() => setModalOPen(false)}>No</Button>
						<Button 
							positive 
							icon='checkmark' 
							labelPosition='right' 
							content='Yes' 
							onClick={() => removeItem(props.id)}
						/>
         			 </Modal.Actions>

				</Modal>
			</div>
		</div>
	);
};

export default Item;


//onClick={() => removeItem(props.id)}