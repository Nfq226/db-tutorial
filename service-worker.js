/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2b817c93952b6702b4b806dc3325e9a1"
  },
  {
    "url": "assets/css/0.styles.634a41a8.css",
    "revision": "e919ec314a87039e96e7ef34505fff4b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a8c6d411.js",
    "revision": "7a549a5d81cf0ff42a620dfa89e6929e"
  },
  {
    "url": "assets/js/11.d79a0778.js",
    "revision": "fdbf577b9955f951f826d662d2c9ee2a"
  },
  {
    "url": "assets/js/12.e26c5b2b.js",
    "revision": "bde291f8cd2ff3dc9e72c782015219df"
  },
  {
    "url": "assets/js/13.2ea5597a.js",
    "revision": "ce761a4012962176502551e1194a19b1"
  },
  {
    "url": "assets/js/14.c4329e96.js",
    "revision": "8ce66f1a0e29f0f3ad122c60067b3502"
  },
  {
    "url": "assets/js/15.abd00e69.js",
    "revision": "c9a9c20cc264b8628441b7e25271201a"
  },
  {
    "url": "assets/js/16.f2fb3266.js",
    "revision": "6f3763b8dbd246c209bb941c8f44b888"
  },
  {
    "url": "assets/js/17.ca8c65ee.js",
    "revision": "e03ed9eac5a8e9fcec2ac5cd5b4c9d09"
  },
  {
    "url": "assets/js/18.e65a545a.js",
    "revision": "86d840660e51817a2e8d1e321f1de5a0"
  },
  {
    "url": "assets/js/19.80ebef0a.js",
    "revision": "34b203d3649b79b263ec512c287798a5"
  },
  {
    "url": "assets/js/20.4f4377f5.js",
    "revision": "d1a2d4eb51d005e3e7adcedc91aa2716"
  },
  {
    "url": "assets/js/21.0983e68b.js",
    "revision": "1276d7167e1a6e03f5c914ebcc79af12"
  },
  {
    "url": "assets/js/22.22549083.js",
    "revision": "059a150c21acfa4d0cc6edbf86f92b42"
  },
  {
    "url": "assets/js/23.4cd8f92b.js",
    "revision": "001379e517d772bceb8cac5f27c1508e"
  },
  {
    "url": "assets/js/24.e6a7e02c.js",
    "revision": "cf0f6cf6214be83dee1e97abfe861db6"
  },
  {
    "url": "assets/js/25.fc3242b3.js",
    "revision": "cce2393fcf9e772ab2103e6f774d7daa"
  },
  {
    "url": "assets/js/26.2b1e6a49.js",
    "revision": "6064b7ae6d3a4b624a6aeeee0e87a103"
  },
  {
    "url": "assets/js/27.e1993f74.js",
    "revision": "7da105110d59b8d5455c242e13212ecb"
  },
  {
    "url": "assets/js/28.bd52979c.js",
    "revision": "1a4497a694dd2b5d5ddf12a617b0c943"
  },
  {
    "url": "assets/js/29.3062fb0d.js",
    "revision": "b37097777674d43d35cd77d537828723"
  },
  {
    "url": "assets/js/30.cf6658ff.js",
    "revision": "59b3ab54ff59c8b032c3c9b30d69d27a"
  },
  {
    "url": "assets/js/31.579bfba3.js",
    "revision": "625b2b46727c3fcfca30faf885c2813b"
  },
  {
    "url": "assets/js/32.656a5c79.js",
    "revision": "1c30097099bdb46812091525fe1f9c4e"
  },
  {
    "url": "assets/js/33.3a021e7e.js",
    "revision": "b53dd09c6ab2c433407786d21370731c"
  },
  {
    "url": "assets/js/34.0044b818.js",
    "revision": "5122842211fe7d3613d0dccc6130b6bb"
  },
  {
    "url": "assets/js/35.b5c3639e.js",
    "revision": "a2fabe7abd11e072f05f604d4e8fb63c"
  },
  {
    "url": "assets/js/36.296d25a5.js",
    "revision": "67920e48b96eb6937cfba32527214fba"
  },
  {
    "url": "assets/js/37.273ae643.js",
    "revision": "edd107aebb4330b4633917f36e341d01"
  },
  {
    "url": "assets/js/38.cc9c86d4.js",
    "revision": "3b970ce5b2e66f4c1449c9e4af2b421d"
  },
  {
    "url": "assets/js/39.7ede2256.js",
    "revision": "2a407612a2c7ef83e77a529db74b5f42"
  },
  {
    "url": "assets/js/4.af39a5fc.js",
    "revision": "9d72a258bb3988b99ed2529592a47228"
  },
  {
    "url": "assets/js/40.24d223a3.js",
    "revision": "1903d9a529d29e91e030dbf5d873a29b"
  },
  {
    "url": "assets/js/41.d258cb86.js",
    "revision": "113b089fa4aefea06d528329ed79e57d"
  },
  {
    "url": "assets/js/42.ba081766.js",
    "revision": "e7eac3aa8d04e3d7b5126a3db1ae7f7b"
  },
  {
    "url": "assets/js/43.725edc07.js",
    "revision": "7fc34bc6352c7109e5cfe9b35148551e"
  },
  {
    "url": "assets/js/44.b674669d.js",
    "revision": "7d636cf619a8cd06e352a320b40ecda9"
  },
  {
    "url": "assets/js/45.ac80e2be.js",
    "revision": "c2f8f688631fb6f68d3d811181a77710"
  },
  {
    "url": "assets/js/46.d516ff36.js",
    "revision": "30cc5f27ad03a88981535578561ef48f"
  },
  {
    "url": "assets/js/47.171574eb.js",
    "revision": "fbe4aa9bf2875280f81c0c45e07ca50d"
  },
  {
    "url": "assets/js/48.8e9f5f77.js",
    "revision": "4eb62f94cfa6e9f980c41c091684c076"
  },
  {
    "url": "assets/js/49.be5d55cf.js",
    "revision": "294ae10bca579af75d71bfdd4830b209"
  },
  {
    "url": "assets/js/5.0833ef28.js",
    "revision": "f02130302a6400abd9da09bb58d0cbbf"
  },
  {
    "url": "assets/js/50.95b36175.js",
    "revision": "5c4cfff0d56efafff1deb20414af7852"
  },
  {
    "url": "assets/js/51.20d925b7.js",
    "revision": "e4e02e26e99b430f58814bb1e53f7f49"
  },
  {
    "url": "assets/js/52.fd1c4457.js",
    "revision": "008336565ba50559d2f630c26bdf2667"
  },
  {
    "url": "assets/js/53.76f01938.js",
    "revision": "cd737538c3e6281ffaca7d9d2a455b32"
  },
  {
    "url": "assets/js/54.5227df29.js",
    "revision": "84d9748802a1a53b044ec15c930848e1"
  },
  {
    "url": "assets/js/55.5e21fc50.js",
    "revision": "2866dc9942d855e49ebc5fc453b1f9b4"
  },
  {
    "url": "assets/js/56.63d90acc.js",
    "revision": "5380286146389cd8dd0da48b7834d2d5"
  },
  {
    "url": "assets/js/57.83c2f962.js",
    "revision": "ab06f97f88fbfc62c4eb6a368c277919"
  },
  {
    "url": "assets/js/58.4864a52d.js",
    "revision": "41f3c114cd3aa05a11cb4da9d4f21141"
  },
  {
    "url": "assets/js/59.f10a2924.js",
    "revision": "0e14c91ba89adb71c15d00fefcff01c5"
  },
  {
    "url": "assets/js/6.278670fd.js",
    "revision": "1ba9ea796f34d818b3d33cc030dd24df"
  },
  {
    "url": "assets/js/60.8d81fbc9.js",
    "revision": "941af9838700d1ef6b5af84fe3e5d7ed"
  },
  {
    "url": "assets/js/61.c22d11d4.js",
    "revision": "3ad8cc2860db12f852d6c638b6bc6ced"
  },
  {
    "url": "assets/js/62.5ea1db5f.js",
    "revision": "6aadb0bd2081892a8747114ad3eebdeb"
  },
  {
    "url": "assets/js/63.cef15d85.js",
    "revision": "b71958c97bac1099c2a9933d5cf28f45"
  },
  {
    "url": "assets/js/64.f8cbbaec.js",
    "revision": "544be000e9eb950736c5764ce7e29e71"
  },
  {
    "url": "assets/js/65.f091532f.js",
    "revision": "0c2792c53d6e691249a97caf5bd821a3"
  },
  {
    "url": "assets/js/66.22853663.js",
    "revision": "8eea7d6344a2b3dd57fcf8fc7f4f188a"
  },
  {
    "url": "assets/js/67.dca67a56.js",
    "revision": "c6b47a4a6160dc25db1262572678df19"
  },
  {
    "url": "assets/js/68.58b03b90.js",
    "revision": "8c7547172cd052205735318d1db90cb3"
  },
  {
    "url": "assets/js/69.67735e91.js",
    "revision": "10c3cb231e56c399cdfb153afe78aee1"
  },
  {
    "url": "assets/js/7.a10910a7.js",
    "revision": "3d5618e598f158adc02297601b8e0066"
  },
  {
    "url": "assets/js/8.04e2e190.js",
    "revision": "05fa6d6c159203978cd5a3924e1b3bd2"
  },
  {
    "url": "assets/js/9.cccc2c89.js",
    "revision": "91125e3cb3621724e2846dcc650ad57b"
  },
  {
    "url": "assets/js/app.b423e39c.js",
    "revision": "6574788a078fbd03e7bf60080407d93d"
  },
  {
    "url": "assets/js/vendors~flowchart.d81c2c68.js",
    "revision": "51049100cc429d6563ab37daf02431d4"
  },
  {
    "url": "assets/js/vendors~notification.4573acaf.js",
    "revision": "71be7d6c83e261cd535a7a4bea6a2438"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "d6a7edbe11bd75b81381755ba8a0fb44"
  },
  {
    "url": "middleware/flyway.html",
    "revision": "33eb30605acbb3156f53830a8690bebf"
  },
  {
    "url": "middleware/shardingsphere-jdbc.html",
    "revision": "ef82bc8dc8462575cce324cc6874b3f4"
  },
  {
    "url": "middleware/shardingsphere.html",
    "revision": "6383f2a2d16b07b2c5ba317da5193a9e"
  },
  {
    "url": "nosql/cassandra.html",
    "revision": "e6cb1e8f65a89607bc0b867d90fc467f"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats-ops.html",
    "revision": "6618bcb412c035129370034237e9f1fd"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats.html",
    "revision": "6435765382cb6af81b7ea113738391cc"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana-ops.html",
    "revision": "5881efdbf2dbf1953bbea4bd3f9fd9ff"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana.html",
    "revision": "6dbd2a4b7815d69cae2f11b5c73af539"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash-ops.html",
    "revision": "3479c84e593a26be5918536f5edd567e"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash.html",
    "revision": "f52b975f2bfea0c3be882b5ce1162d3c"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-quickstart.html",
    "revision": "918297ee7bc95ba91748f96ca7578d43"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-api.html",
    "revision": "5db6f6da01a3260897bb0c61900088c1"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-interview.html",
    "revision": "ede5d3b7c084801fd8b263c9a06613e5"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-ops.html",
    "revision": "0108731f9e6d1a1ec481570acf1de94c"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-quickstart.html",
    "revision": "9fffc1ef15f9f579b4700e1557975d12"
  },
  {
    "url": "nosql/elasticsearch/index.html",
    "revision": "59d85380cab184a3a245c508160373eb"
  },
  {
    "url": "nosql/hbase.html",
    "revision": "dc189eb9930262e75a59e23eb1a9253f"
  },
  {
    "url": "nosql/index.html",
    "revision": "876c3e235268fcd11f1e05b233566c76"
  },
  {
    "url": "nosql/mongodb/index.html",
    "revision": "34a513b10aab6f77c84bb1df72295501"
  },
  {
    "url": "nosql/mongodb/mongodb-aggregation.html",
    "revision": "a1dad32882a62f47b6ab8b3fe40f7491"
  },
  {
    "url": "nosql/mongodb/mongodb-crud.html",
    "revision": "3516cfa49be8b140a30e93d190cc0b30"
  },
  {
    "url": "nosql/mongodb/mongodb-index.html",
    "revision": "c34e265ffef4957f4f026db15f318f87"
  },
  {
    "url": "nosql/mongodb/mongodb-model-example.html",
    "revision": "16eeaa1a28aeb07813cfac99fe3e2696"
  },
  {
    "url": "nosql/mongodb/mongodb-model.html",
    "revision": "4053321a975d2205b32b1002931334df"
  },
  {
    "url": "nosql/mongodb/mongodb-ops.html",
    "revision": "d263ad05bed2640e253518d4364db18d"
  },
  {
    "url": "nosql/mongodb/mongodb-quickstart.html",
    "revision": "ace23baa431e6e81cb6d5b36a8438937"
  },
  {
    "url": "nosql/mongodb/mongodb-replication.html",
    "revision": "0bbc6934e33aac857d907ee8419cf5cf"
  },
  {
    "url": "nosql/mongodb/mongodb-sharding.html",
    "revision": "54450f362edeefd429bdd6c45dc11401"
  },
  {
    "url": "nosql/mongodb/mongodb-transaction.html",
    "revision": "bd7bd93b7718447c200d0aa2d5b54e15"
  },
  {
    "url": "nosql/nosql-selection.html",
    "revision": "4fac07f8f28f1d075b9b521b41c4e89f"
  },
  {
    "url": "nosql/redis/index.html",
    "revision": "5c0c3dcc8da214628bfa115633bac1f5"
  },
  {
    "url": "nosql/redis/redis-action.html",
    "revision": "0ec8b7adf677dd10d7cb46db3283aae5"
  },
  {
    "url": "nosql/redis/redis-cluster.html",
    "revision": "ee817c618418a03185eea92a34e635c6"
  },
  {
    "url": "nosql/redis/redis-datatype.html",
    "revision": "27612c21644b962b37e63488c3a87344"
  },
  {
    "url": "nosql/redis/redis-interview.html",
    "revision": "3b6275b11f78f5d95e24742da564a4aa"
  },
  {
    "url": "nosql/redis/redis-ops.html",
    "revision": "81c063ac7d2c6214d1ee525de6daafa4"
  },
  {
    "url": "nosql/redis/redis-persistence.html",
    "revision": "285fb9babd2902dd0e55b8cb32926ae0"
  },
  {
    "url": "nosql/redis/redis-quickstart.html",
    "revision": "b5a8c86bbebc791f18ee3dcb5ddbb175"
  },
  {
    "url": "nosql/redis/redis-replication.html",
    "revision": "924bf307b1b37237cc6b8b1dc9bc33c7"
  },
  {
    "url": "nosql/redis/redis-sentinel.html",
    "revision": "c326a76225ebcafceca678a7d5cb82bc"
  },
  {
    "url": "sql/common/index.html",
    "revision": "b10a80ffb02fa07c183ea61f44c19ce2"
  },
  {
    "url": "sql/common/sql-advanced.html",
    "revision": "24efeaa490cdf20919176fa8f5035eaf"
  },
  {
    "url": "sql/common/sql-cheat-sheet.html",
    "revision": "7378f0a5614098982479b18391914ac8"
  },
  {
    "url": "sql/common/sql-interview.html",
    "revision": "7102c094670e36b064bfea077412bb93"
  },
  {
    "url": "sql/h2.html",
    "revision": "99a06662685f286dd90cc3b3d26adf22"
  },
  {
    "url": "sql/index.html",
    "revision": "9ad8bc156076520a8b055519e7980436"
  },
  {
    "url": "sql/mysql/index.html",
    "revision": "43eae46232d52535f247d86a0e13d0c9"
  },
  {
    "url": "sql/mysql/mysql-config.html",
    "revision": "68ae05b767ca84047a341f4217e1a058"
  },
  {
    "url": "sql/mysql/mysql-faq.html",
    "revision": "ff2d98634e568dd5313a4c96e1444560"
  },
  {
    "url": "sql/mysql/mysql-index.html",
    "revision": "37a9374795be8a1da7ebe055f79ed8a3"
  },
  {
    "url": "sql/mysql/mysql-lock.html",
    "revision": "f40e4c17730ccbd13f18ad4d4e3aa7ab"
  },
  {
    "url": "sql/mysql/mysql-ops.html",
    "revision": "6e595b7f103e5f8283139ae8fd070c8d"
  },
  {
    "url": "sql/mysql/mysql-optimization.html",
    "revision": "8e78b2fbee4d57b412c309d17f7796d0"
  },
  {
    "url": "sql/mysql/mysql-quickstart.html",
    "revision": "13344d055c7b20a311ec6dc0a4c761a6"
  },
  {
    "url": "sql/mysql/mysql-transaction.html",
    "revision": "fbcbed27ad39979731e20498f7ee9d06"
  },
  {
    "url": "sql/mysql/mysql-workflow.html",
    "revision": "89cfaf00c09fbd64f746b031a02a8314"
  },
  {
    "url": "sql/postgresql.html",
    "revision": "69747be2abafbb596952bba3d4ea91f3"
  },
  {
    "url": "sql/sqlite.html",
    "revision": "6d65b7df54b7df27f414fb814cddfbfb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
