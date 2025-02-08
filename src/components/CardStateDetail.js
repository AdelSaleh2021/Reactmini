// how to give child component to chage state of it's parent??


export default function CardStateDetail(props)
{
return (<p onClick={props.handleClick}>is favorite: {props.filled? "yes" : "no"}</p>)
}