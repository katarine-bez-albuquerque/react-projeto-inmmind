const Button = ({ classe, children, onclick }) => {
    return (
        <button className={ classe } onClick={ onclick }>{ children }</button>
    );
}

export default Button;