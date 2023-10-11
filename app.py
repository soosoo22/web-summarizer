from flask import Flask, redirect,render_template, request, jsonify
#from flask_socketio import SocketIO, send
from subprocess import call
import requests
from result_test import summarize, summary
from result_test import summarize
from crawling2 import titleArr2, contentArr2, imgArr2, urlArr2


app = Flask(__name__)


'''
@app.route("/", methods=['GET','POST'])
def hello_world():

    if request.method == 'POST':
        value = request.form['input-box']
        value = str(value)
        #print('--------------------------')
        #print(value)
    else:
        value = ''

    #resultSumm = summarize(value)
    #resultSumm = summarize_news_articles(value)
    resultSumm = summarize(value)

    newsSumm = []
    #for i in range(4):
        #newsSumm.append(summarize(newsContent[i]))
        #print(newsSumm[i])
        #print()

    return render_template('index.html', value = value,  titleArr2 = titleArr2, imgArr2 = imgArr2, urlArr2 = urlArr2, resultSumm = resultSumm)
'''



@app.route("/article", methods=['GET','POST'])
def articlePage():

    #newsSumm2 = []
    #for i in range(len(titleArr2)):
        #newsSumm2.append(summarize(newsContent2[i]))
        #print(newsSumm[i])
        #print()

    #print(newsSumm2)
    
    
    return render_template('article.html', titleArr2 = titleArr2, contentArr2 = contentArr2, imgArr2 = imgArr2, urlArr2 = urlArr2, summary = summary)

    

#상호 통신
@app.route("/process_data", methods=['POST'])
def process_data():
    # 클라이언트에서 전송한 데이터를 받습니다.
    input1 = request.form['input1']
    

    # 받은 데이터를 처리하고 필요한 응답을 생성합니다.
    # 예를 들어, 데이터를 가공하거나 파일을 저장할 수 있습니다.
    # 이 예제에서는 받은 데이터를 그대로 JSON 응답으로 반환합니다.
    response_data = {
        "input1": summarize(input1),
    }
    print('결과: ', response_data)

    return jsonify(response_data)




@app.route("/chat", methods=['GET','POST'])
def chatPage():
   
    value = ''
    chatSumm = ''
    if request.method == 'POST':
        value = request.form['reply-text']
        #value = request.form['aa']
        value = str(value)
        print('--------------------------')
        print(value)
        chatSumm = summarize(value)
        print('chatSumm: ', chatSumm)


    #chatSumm = summarize(msg)

    return render_template('chat.html',chatSumm = chatSumm, value = value)





@app.route("/", methods=['GET','POST'])
def homePage():
    

    
    return render_template('home.html')





if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=80)

