const Buttons = ({handle, color, quote}) => {

    return(
        <div className="d-flex jc-space-between">
            <div></div>
            <button className={color} onClick={handle}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}
export default Buttons;
