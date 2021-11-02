require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan regret remind proud install hat army genius'; 
let testAccounts = [
"0x790cb7c49a12168548731aa6364f0270ce6eca085ea293e5970d37d2759e0335",
"0x3f398e524a70425b2a28156c78300837003f994ae814bf4b07da41afcdc1cf00",
"0x3aa356d9c9fa624a3747bc1e49fae568c374751b97a2ab4c5d71436114ffe136",
"0x1b1f31aa608a809381b651a5d3354f73082806783c975e922b026a55897918d8",
"0xe07d7d28b2908242d99d8236fe77baf5ef6548fc33517196a49c7dd695fdfe74",
"0xfa446d61633eb7cea1486b35b81d7a5ccdf1a2ef6ea8f7d632f8f1d0a067719c",
"0xdf4dd9657bc7243a1d57d98712efabdf1f1dab769293d474d6e239b333b48d53",
"0x474df0226ef1d655347f3e5708be59e77a1cd03d66dd360d35d6f9023f146937",
"0x85ffbb116e60427f86e8aba57ac4e74d62c069eb3f9fabdf059bf3e190e3136a",
"0x8b8013df89d07b3127e1a5453b2cbfc9a9d2d18280d05ef740f1e6f3f921ad6f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

