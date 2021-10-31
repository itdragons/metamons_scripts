## 元兽升级
```
curl 'https://metamon-api.radiocaca.com/usm-api/updateMonster' \
  -H 'authority: metamon-api.radiocaca.com' \
  -H 'sec-ch-ua: "Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"' \
  -H 'accesstoken: ANSwjqkgmJXXOwBTR2piEQ==' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundaryQZoSuMkAF1O6wFFo' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'accept: */*' \
  -H 'origin: https://metamon.radiocaca.com' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://metamon.radiocaca.com/' \
  -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \
  --data-raw $'------WebKitFormBoundaryQZoSuMkAF1O6wFFo\r\nContent-Disposition: form-data; name="nftId"\r\n\r\n393940\r\n------WebKitFormBoundaryQZoSuMkAF1O6wFFo\r\nContent-Disposition: form-data; name="address"\r\n\r\n0x88ef6c3de9060ab57af79dfda14128652e964fde\r\n------WebKitFormBoundaryQZoSuMkAF1O6wFFo--\r\n' \
  --compressed
```
`
{
	"code":"SUCCESS",
	"data":null,
	"errorText":"",
	"message":"",
	"result":1
}
`
