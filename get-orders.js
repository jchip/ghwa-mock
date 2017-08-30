"use strict";

const request = require("request");
const Promise = require("bluebird");

const cookie = `TBV=a57nr; __gads=ID=2062db178f564411:T=1502209248:S=ALNI_MaBB6BrNThIhVxg3X3z93ZqARFuIg; _abck=cnuvpdl1e4f8fv6cr6qr_1892; rtoken=tbxX7PQEOKIicBtJZ3nRKpJD%2F%2F%2BTq%2BeFxyM%2BrVG%2FdRQavmSrSbuJ0iPnlrdFiiZ2USTpBpDTATkd5VDuJAPVyyTCCqEi9xeXUrI%2BCxUJas8Tz%2F4Q6ojpv9pdJzPBOR%2BqSd3Z%2BdGB8Z68bAyU4Xxy%2FT8b9u7UDBO6PaINsmledE%2FcXrZg%2FL%2FMCJ%2BQzepLsXT0XAAzdDkrfOYunUC8LVANm%2B4k6xJo3wDKOaR%2BZyWVj6gX15n7fotTceB35My8EjzYdDx3RP99BT7IXFPPN2S5mbLe6mnemuoRmtkYlhu3nTXMVOD9rN8exR8VM%2BTUoH9b5i5ZUa1t0mRT6vB7ydrYR3qhl3g8Vg%2FAtrGAPQwLyfCKt7fqneT4nwREjsJZnsaf3Ubu266ahWIfNeoRpi2IxyF5v78rHnFl%2FdMvD4xUPAEED9LAhTl0ykMkLzJjQr7rsLAmyEvKX1%2FEDdllewyGkhDR0TFTljWyUVL7RAqIr2cAzShBCojd%2BuWqe7JLn0Prb37JCFRCUJT9PcnebpF6cn7zXVd8YNZ7mRdjtN0nUPIdZfI5gZAmyiKQS%2FPabH2T; SPID=fdc0e8004ef2da3b1a3333e80d14aaff38ec1fcb07745632515bf66388da438bd4192aa86750755864a79be1f2a38531wmjet; CID=7cc6c246-f8fb-4198-8949-0215be9398e1; hasCID=1; customer=%7B%22firstName%22%3A%22Sheng%22%2C%22rememberme%22%3Atrue%7D; type=REGISTERED; WMP=4; athrvi=RVI~h2cfb9e7; _ga=GA1.2.288893500.1504114802; _gid=GA1.2.146754594.1504114802; midasABTestC=ADCP081701; midasABTestP=ADIP071700; midasABTest=ADSP051700; akavpau_p4=1504125686~id=3bcf9d3c393ee2660a9505c6349583b5; AID=wmlspartner%3DG75Ho5fP2Jg%3Areflectorid%3D17888234221967090682%3Alastupd%3D1504125099248; com.wm.reflector="reflectorid:17888234221967090682@lastupd:1504125099249@firstcreate:1502339388359"; hasCRT=1; CRT=f3afab3c-ed54-482a-83ba-0accc34f5b3f; TS01f92597=0130aff232391c6cd0fe13ed22815647fda9d91a416ca52686a4963e3e8535addf49903d077325d0d35d00d26b08b1dab65d49ccbf209e00c41defa26c0e4fc750dff46350; cart-item-count=1; NSID=3123.2-2486.4-2280.5-3025.6-2119.7-4174.9-5435.9-5426.11-2989.11-5884.11-3023.14-2031.16-5434.23-5611.24-2161.24-5766.25-2648.25-5610.25-1972.27-2002.36; DL=94086%2C37.36970520019531%2C-122.02140045166016%2Cip%2C94086%2CUSA%2CCA; akavpau_p2=1504125713~id=5d508497832a38f5c61bca643fdd783a; x-csrf-jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY29va2llIiwidXVpZCI6IjQyNmVkMGUwLThkYzItMTFlNy04YWI3LTg5NzZhZDI4MjU4YiIsImlhdCI6MTUwNDEyNTExMywiZXhwIjoxNTA1OTI1MTEzfQ.VQ6rWDUmkFoJmcVS3umFSb9uKBpHZnOscT5V6ujsvUw; auth=DsdZ6MHW%2B4zJjmT6ve5X01oJX2DkB%2F0Zyzp5EBlkQboPgiL1vdGp33TvM6008u46Wl3QcmIvlYJS9Qu%2B21TeL3FKCIBWa5BuRTMpUP5KHH8BnKEnDdQ8ojYIOPPNJ8Jn0DgfRlA0DItzUkqoPUdDgB2o2qNa4qysWWUwAIId39sT1oHx0WywIpOYxYNcVxzvb5NsOiD8Vf7PXgmPY4w5QSHb3HWZDFuJq1f%2F44CA5MIhICdIjAzn%2Fs%2FmRGoRcNsPd1%2FAcrjRtiiP%2FK2YghAx1YsC%2B6CL68SrG52uxYtpcQ2WPn5WUADJec7TYU6x9gc7mUK%2Byk9CKUCtphV7tZq6y817ri5hQ0Rfp2mLqLA%2FNIb8l%2FbJMcfuZlFgIahUKPnO; account-flyout=1; s_pers=%20s_cmpstack%3D%255B%255B%2527aff%2527%252C%25271502339397648%2527%255D%255D%7C1660105797648%3B%20s_fid%3D1501790AA6238010-044DE74AFC627FA7%7C1567197115914%3B%20s_v%3DY%7C1504126915919%3B%20gpv_p11%3DAccount%253A%2520No%2520items%7C1504126915928%3B%20gpv_p44%3DAccount%7C1504126915931%3B%20s_vs%3D1%7C1504126915934%3B; s_sess=%20ent%3DHomepage%3B%20s_cc%3Dtrue%3B%20chan%3Dorg%3B%20v59%3DHomepage%3B%20v54%3DHomepage%3B%20cps%3D0%3B%20s_sq%3D%3B; s_vi=[CS]v1|2CBDC550051D1038-600001516005047C[CE]; vtc=eFvBwrCUqapu0Bq447_l9A; bstc=cQgfEC7bvEp7IXtQxsUkKQ; exp=1%2B1504125085%2BeFvBwrCUqapu0Bq447_l9A%2B0%2BJWa9b.3KDaH|PhuzV.44loz|VDB_t.W-_fQ|kQSQv.gIrbs|yEUMs.ogNyB; exp-ck=3KDaH44lozW-_fQgIrbsogNyB; TS014182ea=0103fe0547db7256dc0bd4f4334d5071d32ddfe57b86991d3de4bd54521518b516db9a8f233d9e087cbda99f71a374c6af0d1b5571339ad28b1e73c60a8182e17442255e29; TS0154133a=0103fe0547d074005e8e086d5548cbe61719d0b82186991d3de4bd54521518b516db9a8f232ae3c20884592d01f9e7616c705156890a1c89a08cf026728227a26d515b434d5fca209acafc7dceb24ef4c5752ed331f1529e6f412086127166fa9f0320592e; TS01d7e52a=0103fe05478e7d2ead4c057af3f6137f9098e5d76b86991d3de4bd54521518b516db9a8f23f3e9829e7c465075e76d9b8fd017c4827777710abe037d526ba3056c4936dfbe27a5cfd8d5e76c3215274fe72f7e4879; akavpau_p0=1504125725~id=dd56b027cec16d08292335743c668e7e`;
const authority = "www.walmart.com";
const referer = "https://www.walmart.com/account";
const accept = "*/*";
const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";
const acceptLanguage = "en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2";
const acceptEncoding = "gzip, deflate, br";

function getOrders() {
  return new Promise((resolve, reject) => {
    request(
      {
        url: "https://www.walmart.com/account/electrode/account/api/v2/orders",
        gzip: true,
        headers: {
          cookie,
          authority,
          referer,
          accept,
          "user-agent": userAgent,
          "accept-language": acceptLanguage,
          "accept-encoding": acceptEncoding
        }
      },
      (err, resp, body) => {
        if (err) return reject(err);
        resolve(JSON.parse(body));
      }
    );
  });
}

module.exports = getOrders;
