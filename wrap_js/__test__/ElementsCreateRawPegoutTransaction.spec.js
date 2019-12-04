const {CreateRawPegout} = require('../cfdjs_raw_module');
const TestHelper = require('./TestHelper');

const testCase = [
  TestHelper.createElementsTestCase(
    'CreateRawPegout regtest auto-btcaddress',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"hex":"020000000001a38845c1a19b389f27217b91e2120273b447db3e595bba628f0be833f301a24a0000000000fdffffff030125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000befe33cc397c0017a914001d6db698e75a5a8af771730c4ab258af30546b870125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a01000000003b9aca00009e6a2006226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f17a914a722b257cabc3b8e7d46f8fb293f893f368219da872103700dcb030588ed828d85f645b48971de0d31e8c0244da46710d18681627f5a4a4101044e949dcf8ac2daac82a3e4999ee28e2711661793570c4daab34cd38d76a425d6bfe102f3fea8be12109925fad32c78b65afea4de1d17a826e7375d0e2d00660125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000000000001c84000000000000","btcAddress":"2N8UxQ5u9YXYFn6Ukj5KGXCMDUZTixKTXHo"}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout testnet',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"testnet\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"2MwCVeDphPXwC8o9vfgv4ygV43ZWEX1HePQ\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"hex":"020000000001a38845c1a19b389f27217b91e2120273b447db3e595bba628f0be833f301a24a0000000000fdffffff030125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000befe33cc397c0017a914001d6db698e75a5a8af771730c4ab258af30546b870125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a01000000003b9aca00009e6a2006226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f17a914a722b257cabc3b8e7d46f8fb293f893f368219da872103700dcb030588ed828d85f645b48971de0d31e8c0244da46710d18681627f5a4a4101044e949dcf8ac2daac82a3e4999ee28e2711661793570c4daab34cd38d76a425d6bfe102f3fea8be12109925fad32c78b65afea4de1d17a826e7375d0e2d00660125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000000000001c84000000000000","btcAddress":"2N8UxQ5u9YXYFn6Ukj5KGXCMDUZTixKTXHo"}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout none pakinfo',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XDEmgYUeUH7BunVkTnXGccU3PG7oFv8j6N\",\"amount\":200000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 100000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"2MwCVeDphPXwC8o9vfgv4ygV43ZWEX1HePQ\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"hex":"020000000001a38845c1a19b389f27217b91e2120273b447db3e595bba628f0be833f301a24a0000000000fdffffff030125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a01000000000bebc2000017a91414b71442e11941fd7807a82eabee13d6ec171ed9870125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000000005f5e100003a6a2006226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f17a9142b5c52984be57e8221e1103f3917092016b88c1c870125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000000000001c84000000000000"}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout regtest auto-btcaddress privkey hex',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"e8c2d0a7b9dcd12203e558a33c48d21d05afe5adbc95ff37901e86508640f6e2\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"hex":"020000000001a38845c1a19b389f27217b91e2120273b447db3e595bba628f0be833f301a24a0000000000fdffffff030125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000befe33cc397c0017a914001d6db698e75a5a8af771730c4ab258af30546b870125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a01000000003b9aca00009e6a2006226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f17a914a722b257cabc3b8e7d46f8fb293f893f368219da872103700dcb030588ed828d85f645b48971de0d31e8c0244da46710d18681627f5a4a4101044e949dcf8ac2daac82a3e4999ee28e2711661793570c4daab34cd38d76a425d6bfe102f3fea8be12109925fad32c78b65afea4de1d17a826e7375d0e2d00660125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000000000001c84000000000000","btcAddress":"2N8UxQ5u9YXYFn6Ukj5KGXCMDUZTixKTXHo"}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout mainnet pkh',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"mainnet\",\"elementsNetwork\":\"liquidv1\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"L52AgshDAE14NHJuovwAw8hyrTNK4YQjuiPC9EES4sfM7oBPzU4o\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"pkh(xpub6A53gzNdDBQYCtFFpZT7kUpoBGpzWigaukrdF9xoUZt7cYMD2qCAHVLsstNoQEDMFJWdX78KvT6yxpC76aGCN5mENVdWtFGcWZoKdtLq5jW/0/*)\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{\"hex\":\"020000000001a38845c1a19b389f27217b91e2120273b447db3e595bba628f0be833f301a24a0000000000fdffffff030125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000befe33cc397c0017a914001d6db698e75a5a8af771730c4ab258af30546b870125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a01000000003b9aca0000a06a2006226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f1976a914efbced4774546c03a8554ce2da27c0300c9dd43b88ac2103700dcb030588ed828d85f645b48971de0d31e8c0244da46710d18681627f5a4a4101044e949dcf8ac2daac82a3e4999ee28e2711661793570c4daab34cd38d76a425d6bfe102f3fea8be12109925fad32c78b65afea4de1d17a826e7375d0e2d00660125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000000000001c84000000000000\",\"btcAddress\":\"1NrcpiZmCxjC7KVKAYT22SzVhhcXtp5o4v\"}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout mainnet elementsNetwork=auto',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"mainnet\",\"elementsNetwork\":\"\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"L52AgshDAE14NHJuovwAw8hyrTNK4YQjuiPC9EES4sfM7oBPzU4o\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"pkh(xpub6A53gzNdDBQYCtFFpZT7kUpoBGpzWigaukrdF9xoUZt7cYMD2qCAHVLsstNoQEDMFJWdX78KvT6yxpC76aGCN5mENVdWtFGcWZoKdtLq5jW/0/*)\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{\"hex\":\"020000000001a38845c1a19b389f27217b91e2120273b447db3e595bba628f0be833f301a24a0000000000fdffffff030125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000befe33cc397c0017a914001d6db698e75a5a8af771730c4ab258af30546b870125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a01000000003b9aca0000a06a2006226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f1976a914efbced4774546c03a8554ce2da27c0300c9dd43b88ac2103700dcb030588ed828d85f645b48971de0d31e8c0244da46710d18681627f5a4a4101044e949dcf8ac2daac82a3e4999ee28e2711661793570c4daab34cd38d76a425d6bfe102f3fea8be12109925fad32c78b65afea4de1d17a826e7375d0e2d00660125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000000000001c84000000000000\",\"btcAddress\":\"1NrcpiZmCxjC7KVKAYT22SzVhhcXtp5o4v\"}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout testnet elementsNetwork=auto',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"testnet\",\"elementsNetwork\":\"\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"2MwCVeDphPXwC8o9vfgv4ygV43ZWEX1HePQ\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"hex":"020000000001a38845c1a19b389f27217b91e2120273b447db3e595bba628f0be833f301a24a0000000000fdffffff030125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000befe33cc397c0017a914001d6db698e75a5a8af771730c4ab258af30546b870125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a01000000003b9aca00009e6a2006226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f17a914a722b257cabc3b8e7d46f8fb293f893f368219da872103700dcb030588ed828d85f645b48971de0d31e8c0244da46710d18681627f5a4a4101044e949dcf8ac2daac82a3e4999ee28e2711661793570c4daab34cd38d76a425d6bfe102f3fea8be12109925fad32c78b65afea4de1d17a826e7375d0e2d00660125b251070e29ca19043cf33ccd7324e2ddab03ecc4ae0b5e77c4fc0e5cf6c95a010000000000001c84000000000000","btcAddress":"2N8UxQ5u9YXYFn6Ukj5KGXCMDUZTixKTXHo"}'
  ),
];

const errorCase = [
  TestHelper.createElementsTestCase(
    'CreateRawPegout with empty txins.txid',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"Txid size Invalid."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid txouts.address',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"Mr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"Base58 decode error."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid txouts.asset',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e07\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"AssetId size Invalid."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid pegout.asset',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"ffff\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"AssetId size Invalid."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid pegout.network',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"liquidv1\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"Invalid network_type passed. network_type must be \\"mainnet\\" or \\"testnet\\" or \\"regtest\\"."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid pegout.mainchainGenesisBlockHash',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"BlockHash size Invalid."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid pegout.btcAddress',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"Unknown address prefix."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid pegout.onlinePubkey',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"14156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"Invalid Pubkey data."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid pegout.masterOnlineKey',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"KxLNrNFJKYTNdFCDveVfAJtWmJsryTof3irvsBcsHebV7h53KDUU\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"Error WIF to Private key."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid pegout.masterOnlineKey2',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"Illegal online key error."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with valid pegout.whitelist',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"whitelist length error."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid pegout.bitcoinDescriptor',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{\"error\":{\"code\":1,\"type\":\"illegal_argument\",\"message\":\"Failed to analyze descriptor.\"}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout with invalid fee.asset',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"regtest\",\"elementsNetwork\":\"regtest\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"cVPA9nh4bHhKXinBCLkJJTD3UgfiizWRykXfFegwZzKMNYAKG9RL\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"sh(wpkh(tpubDASgDECJvTMzUgS7GkSCxQAAWPveW7BeTPSvbi1wpUe1Mq1v743FRw1i7vTavjAb3D3Y8geCTYw2ezgiVS7SFXDXS6NpZmvr6XPjPvg632y/0/*))\"},\"fee\":{\"amount\":7300,\"asset\":\"aaaa\"}}`],
    '{"error":{"code":1,"type":"illegal_argument","message":"AssetId size Invalid."}}'
  ),
  TestHelper.createElementsTestCase(
    'CreateRawPegout mainnet wpkh',
    CreateRawPegout,
    [`{\"version\":2,\"locktime\":0,\"txins\":[{\"txid\":\"4aa201f333e80b8f62ba5b593edb47b4730212e2917b21279f389ba1c14588a3\",\"vout\":0,\"sequence\":4294967293}],\"txouts\":[{\"address\":\"XBMr6srTXmWuHifFd8gs54xYfiCBsvrksA\",\"amount\":209998999992700,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}],\"pegout\":{\"amount\": 1000000000,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\",\"network\":\"mainnet\",\"elementsNetwork\":\"liquidv1\",\"mainchainGenesisBlockHash\":\"0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206\",\"btcAddress\":\"2MwCVeDphPXwC8o9vfgv4ygV43ZWEX1HePQ\",\"onlinePubkey\":\"0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"masterOnlineKey\":\"2KSW5WTG9n4ZSBijSqa1QFMXzKG2tKsWNhdYzif59TDwL5FQYWZG\",\"bip32Counter\":0,\"whitelist\":\"030e07d4f657c0c169e04fac5d5a8096adb099874834be59ad1e681e22d952ccda0214156e4ae9168289b4d0c034da94025121d33ad8643663454885032d77640e3d\",\"bitcoinDescriptor\":\"wpkh(xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8/0/*)\"},\"fee\":{\"amount\":7300,\"asset\":\"5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\"}}`],
    '{\"error\":{\"code\":1,\"type\":\"illegal_argument\",\"message\":\"Error WIF to Private key.\"}}'
  ),
];

TestHelper.doTest('CreateRawPegout', testCase);
TestHelper.doTest('CreateRawPegout ErrorCase', errorCase);
