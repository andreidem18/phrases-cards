const QuoteBox = ({quote}) => {
    return(
        <div>
            <div className="d-flex">
                <div className="quote">
                    <i class="fas fa-quote-left"></i>
                </div>
                <div>
                    <p>
                        {quote.quote}
                    </p>
                </div>
            </div>
            <p className="author">{quote.author}</p>
        </div>
    )
}
export default QuoteBox;