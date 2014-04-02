Class4 Lab1
====

## 說明：

製作一個簡單的RESTful File Server，提供檔案的新刪改查之服務

## 參考範例：

目標

```
curl http://localhost:3000/res/file -X GET
curl http://localhost:3000/res/file -X POST -d name=/tmp/test.txt -d body=123
curl http://localhost:3000/res/file -X PUT -d name=/tmp/test.txt -d body=123
curl http://localhost:3000/res/file -X DELETE -d name = /tmp/text.txt
```
