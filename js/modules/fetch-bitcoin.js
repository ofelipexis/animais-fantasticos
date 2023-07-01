export default function initFetchBitcoin() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(bitcoin => {
        const btcPrice = document.querySelector('.btc-price');
        btcPrice.innerText = (100 / bitcoin.BRL.sell).toFixed(8);
    }).catch(error => {
        console.log(Error(error));
    });
}