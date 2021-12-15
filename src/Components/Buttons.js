const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'SHxVg1BYkyMWXEfNRHdDtsCPn',
    consumer_secret: 'UETNXDyCD4zqhDAnvcpi6i1GgnD5fAnUuQFcP2Cc3Tme5fwE1d',
    access_token_key: '597680031-dgwQUdtTdtNaoiTpNndZN0YCyKj3YeWqQC5s1t9m',
    access_token_secret: 'a2grr9AmbMwyEm6R1jOwEAU2ILFNttrZitLgaB9eb7P9p'
});

const Buttons = ({handle, color, quote}) => {

    const Tweet = () => {
        // Esto servía para hacer un post en la api de twitter
        // para twitear, pero me sale un error 
        // que no pude solucionar¯\_( ͡❛ ͜ʖ ͡❛)_/¯
        client.post('statuses/update', {status: quote})
            .then((tweet) => {
                console.log(tweet);
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
