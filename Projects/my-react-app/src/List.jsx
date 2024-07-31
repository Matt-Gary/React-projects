import PropTypes from 'prop-types'

function List(props) {

    const itemList = props.items


    // fruits.sort((a, b) => a.name.localeCompare(b.name)) //alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name))
    // fruits.sort((a, b) => a.calories - b.calories) - ascendig order

    // fruits.sort((a, b) => b.calories - a.calories) //descending

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100) // create a new array by filtering
    
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100) // create a new array by filtering

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            {item.calories}</li>)

    return(<>
            <h3 className = "list-category">{props.category}</h3>
            <ol className = "list-items">{listItems}</ol>
            </>)
}

List.propTypes= {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
    })),
}

List.defaultProps = {
    category: 'Category',
    items: []
}
export default List