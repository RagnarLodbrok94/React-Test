import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";


class InputNumber extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			value: props.value || props.min || 0
		};

		this.handleValueChange = this.handleValueChange.bind( this );
		this.handleKey = this.handleKey.bind( this );
		this.valueUp = this.valueUp.bind( this );
		this.valueDown = this.valueDown.bind( this );
	}

	setValue( value, increment ) {
		let
			stringValid = /^\d*\.?\d*$/.test( value ),
			parsed = parseFloat( value ),
			min = this.props.min || 0,
			max = this.props.max || 1000;

		if ( !stringValid || isNaN( parsed ) ) return;

		let parsedTotal = increment ? ( parsed += increment ) : parsed;
		if( parsedTotal < min ) value = min;
		else if( parsedTotal > max ) value = max;
		else value = parsedTotal;

		value = Number( value );

		this.setState({
			value: value
		});
	}

	handleValueChange( event ) {
		this.setValue( event.target.value );
	}

	handleKey( event ) {
		if( event.keyCode === 38 ) {
			if( event.shiftKey ) {
				this.setValue( this.state.value, 10 )
			} else {
				this.setValue( this.state.value, 1 )
			}
		}

		if( event.keyCode === 40 ) {
			if( event.shiftKey ) {
				this.setValue( this.state.value, -10 )
			} else {
				this.setValue( this.state.value, -1 )
			}
		}
	}

	valueUp() {
		this.setValue( this.state.value, 1 )
	}

	valueDown() {
		this.setValue( this.state.value, -1 )
	}

	render() {
		return(
			<div className="input-number">
				<input className="input" type="text"
					value={ this.state.value }
					onChange={ this.handleValueChange }
				  onKeyDown={ this.handleKey } />
				<button className="btn btn-up" type='button'
					onClick={ this.valueUp }>&#9650;</button>
				<button className="btn btn-down" type='button'
					onClick={ this.valueDown }>&#9660;</button>
			</div>
		)
	}
}

const rootElement = document.getElementById( 'root' );

ReactDOM.render(
	(
		<div>
			<InputNumber value={ 30 } min={ 10 } max={ 100 } />
			<InputNumber value={ 6.5 } min={ 0.3 } max={ 10.3 } />
		</div>
	),
	rootElement
);

















// import App from "./App";
//

// Filter table
/*
class ProductCategoryRow extends React.Component {
	render() {
		const category = this.props.category;
		return(
			<tr>
				<th colSpan="2">
					{ category }
				</th>
			</tr>
		)
	}
}

class ProductRow extends React.Component {
	render() {
		const product = this.props.product;
		const name = product.stocked ?
			product.name :
			<span style={{ color: 'red' }}>
				{ product.name }
			</span>;

		return(
			<tr>
				<td>{ name }</td>
				<td>{ product.price }</td>
			</tr>
		)
	}
}

class ProductTable extends React.Component {
	render() {
		const
			filterText = this.props.filterText,
			inStockOnly = this.props.inStockOnly,
			rows = [];
		let lastCategory = null;

		this.props.products.forEach( product => {
			if( product.name.indexOf( filterText ) === -1 ) return;
			if( inStockOnly && !product.stocked ) return;
			if( product.category !== lastCategory ) {
				rows.push(
					<ProductCategoryRow
						category={ product.category }
						key={ product.category } />
				);
			}
			rows.push(
				<ProductRow
					product={ product }
					key={ product.name } />
			);
			lastCategory = product.category;
		} );

		return(
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
				</thead>
				<tbody>{ rows }</tbody>
			</table>
		)
	}
}

class SearchBar extends React.Component {
	constructor( props ) {
		super( props );
		this.handleFilterTextChange = this.handleFilterTextChange.bind( this );
		this.handleInStockChange = this.handleInStockChange.bind( this );
	}

	handleFilterTextChange( e ) {
		this.props.onFilterTextChange( e.target.value )
	}

	handleInStockChange( e ) {
		this.props.onInStockChange( e.target.checked )
	}

	render() {
		return(
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={ this.props.filterText }
					onChange={ this.handleFilterTextChange } />
				<p>
					<input
						type="checkbox"
						checked={ this.props.inStockOnly }
						onChange={ this.handleInStockChange } />
					{' '}
					Only show products in stock
				</p>
			</form>
		)
	}
}

class FilterableProductTable extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			filterText: '',
			inStockOnly: false
		};

		this.handleFilterTextChange = this.handleFilterTextChange.bind( this );
		this.handleInStockChange = this.handleInStockChange.bind( this );
	}

	handleFilterTextChange( filterText ) {
		this.setState({
			filterText: filterText
		})
	}

	handleInStockChange( inStockOnly ) {
		this.setState({
			inStockOnly: inStockOnly
		})
	}

	render() {
		return(
			<div>
				<SearchBar
					filterText={ this.state.filterText }
					inStockOnly={ this.state.inStockOnly }
					onFilterTextChange={ this.handleFilterTextChange }
					onInStockChange={ this.handleInStockChange } />
				<ProductTable
					products={ this.props.products }
					filterText={ this.state.filterText }
					inStockOnly={ this.state.inStockOnly } />
			</div>
		)
	}
}

const PRODUCTS = [
	{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
	{ category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
	{ category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
	{ category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
	{ category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
	{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
const rootElement = document.getElementById( 'root' );

ReactDOM.render(
	<FilterableProductTable products={ PRODUCTS } />,
	rootElement
);*/
