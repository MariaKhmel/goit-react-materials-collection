

export const Materials = ({ items, onDelete, onUpdate }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <b> {item.title}</b>
                    <b> {item.link}</b>
                    <button type='button' onClick={() => onDelete(item.id)}>Delete</button>
                    <button type='button' onClick={() => onUpdate({...item, title:Date.now()})}>Edit</button>
                    <hr />
                </li>

))}
        </ul>
    )
}