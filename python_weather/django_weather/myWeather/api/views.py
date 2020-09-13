from time import sleep
import requests
import json
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import auth
from django.utils import timezone
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from .models import Weather
from urllib.request import Request, urlopen
from urllib.parse import urlencode, quote_plus, unquote
import xml.etree.ElementTree as ET 


def weather(req):
    sleep(2)
    data_url = "https://www.data.go.kr/pubr/use/pra/IrosPblonsipSvcReqst/downloadUrlXmlToJson.do?url=http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst&param=serviceKey=6%252FwSw3RD4wLOFGngBBagZv6RT%252Fx0L6VafbA8QeoHfliRR1egl4hFo%252FDLfM%252BKV7aMe0VHiNMMLf6vAjeA6UOC5g%253D%253D%26numOfRows=10%26pageNo=1%26sidoName=%25EC%2584%259C%25EC%259A%25B8%26searchCondition=DAILY&fileName=%EC%8B%9C%EA%B5%B0%EA%B5%AC%EB%B3%84%20%EC%8B%A4%EC%8B%9C%EA%B0%84%20%ED%8F%89%EA%B7%A0%EC%A0%95%EB%B3%B4%20%EC%A1%B0%ED%9A%8C&oagUseAt=N"
    post_res = requests.post(data_url)
    post_res = post_res.content.decode('utf-8')
    datas = json.loads(post_res)["records"]
    # datas = post_res.json()["DATA"]
    # datas = json.loads(datas)
    insert_cnt = 0
    print(datas)
    for data in datas:
        weather = Weather.objects.filter(day=data["cityName"])
        if len(weather) > 0:
            continue
        else:
            new_weather = Weather()
            # new_weather.date = data["dataTime"]
            # new_weather.time = data["coValue"]
            new_weather.day = data["cityName"]
            new_weather.wcd = data["coValue"]
            new_weather.ko_sky = data["no2Value"]
            new_weather.save()
            insert_cnt += 1
    if insert_cnt > 0:
        message = str(insert_cnt)+'개의 데이터를 정상적으로 추가하였습니다.'
    else:
        message = "추가된 데이터가 없습니다."
    result_res = { 'message': message}
    result_res = json.dumps(result_res)
    return HttpResponse(result_res)

def dust(req):
    API_key = unquote('6%2FwSw3RD4wLOFGngBBagZv6RT%2Fx0L6VafbA8QeoHfliRR1egl4hFo%2FDLfM%2BKV7aMe0VHiNMMLf6vAjeA6UOC5g%3D%3D')
    url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst'
    queryParams = '?' + urlencode({ quote_plus('ServiceKey') : API_key, quote_plus('numOfRows') : '10', quote_plus('pageNo') : '1', quote_plus('sidoName') : '서울', quote_plus('searchCondition') : 'DAILY'})
    
    api_request = Request(url + queryParams)
    api_request.get_method = lambda:'GET'
    response_body = urlopen(api_request).read().decode('utf-8')

    root = ET.fromstring(response_body)

    seoul_gu = root.find('body').find('items').find('item[9]').find('cityName').text
    seoul_dust = root.find('body').find('items').find('item[9]').find('pm10Value').text
    return render(req, 'dust.html', {'seoul_gu':seoul_gu, 'seoul_dust':seoul_dust})