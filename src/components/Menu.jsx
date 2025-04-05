
function Menu(props) {
    const list = props.list
    return (<>
        <ul className="d-flex">
            <li><a href="#">{list[0]}</a></li>
            <li><a href="#">{list[2]}</a></li>
            <li><a href="#">{list[3]}</a></li>
            <li><a href="#">{list[4]}</a></li>
            <li><a href="#">{list[5]}</a></li>
            <li><a href="#">{list[6]}</a></li>
            <li><a href="#">{list[7]}</a></li>
            <li><a href="#">{list[8]}</a></li>
            <li><a href="#">{list[9]}</a></li>
        </ul>
    </>)

}


export default Menu



















