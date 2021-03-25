require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember coconut inflict private sunset seminar'; 
let testAccounts = [
"0x65313e4fae00a7c952c743f756899733393f1046428913f952e30579ba5fdfd8",
"0x8eb1554703c33caf4bf5168476410ff50d5eadde59264e48d4c4798b98d2f9e3",
"0x2af201f1a7053456b7600f48c99358f784180f79d04da814dae891f31d58ce28",
"0xd9314aec877f01f2c50d3979509f5d4e2b0b877db3707449d8bf399493a73826",
"0xbe6cd21268412e2d485cc6f77b1162152cafb33f259b3ea66cc3705b57d71831",
"0x293c0023f4330522793539331fff62c48a6d344129d485e654c3b9d628dc66dd",
"0x2a9d459cced389f62ca355850ab9fdb6109d78d8eace5ea81d8b9423f8293a2a",
"0x9b37f377d35b885556e65a2d721eaaf321999c2bc0fa16f1dd2db43899be7f7a",
"0x2d8dc152983abd8575f10c60f537e4c1bd73a841286bae0149ef8f160610bd15",
"0x2726575c1191badf51159a5fe4276ac1365fcc775050d8c96603b0ddfb4daf10"
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
            version: '^0.5.11'
        }
    }
};
