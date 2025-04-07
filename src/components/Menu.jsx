
function Menu(props) {
    const list = props.list
    return (<>
        <ul className="d-flex">
            {list.map(list => <li><a href="#">{list}</a></li>)}
        </ul>
    </>)

}


export default Menu



















