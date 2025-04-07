
function Menu(props) {
    const list = props.list
    return (<>
        <ul className="d-flex">
            {list.map((list, index) => <li key={index} ><a href="#" className="t-black">{list}</a></li>)}
        </ul>
    </>)

}


export default Menu



















