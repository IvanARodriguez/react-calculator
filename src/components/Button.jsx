
import '../stylesheets/Button.css';

function Button(props){

    const isOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=');
    };
    const isZero = value => {
        return (value === '0');
    };
    const isEqual = value => {
        return (value === '=') ;
    };
    const topGreyBtn = value => {
        console.log(value);
        return (value === '%') || (value === 'AC') || (value.length > 1);
    }
    return(
        <div  className={
            `btn_container 
            ${isOperator(props.children) ? 'operator' : ''}
            ${topGreyBtn(props.children) ? 'top_grey_btn' : ''}
            ${isZero(props.children) ? 'zero_btn' : ''}
            ${isEqual(props.children) ? 'equal_btn' : ''}
            `.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Button;