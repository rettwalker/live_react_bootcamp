import React from 'react';

function ListView() {
    return function (props) {
        return <ul className="list-group list-group-flush">{props.frameworks.map((framework, index) => <li className="list-group-item" onClick={(e) => props.updateSelectedItem(index)} key={index}><p>{framework.name}</p></li>)}</ ul>
    }
}
export default ListView

