from newspaper import Article
import requests
from bs4 import BeautifulSoup


#url = 'https://media.naver.com/press/020' #동아일보
url = 'http://www.mediatoday.co.kr/news/articleList.html?sc_section_code=S1N4&view_type=sm' #미디어오늘

r = requests.get(url, headers={'User-Agent':'Mozilla/5.0'})
html = r.content
soup = BeautifulSoup(html, 'html.parser')
titles_html = soup.select('li > div > h4 > a')
content_html = soup.select('li > div > p > a')
#imgs_html = soup.select('li > a.thumb > img')
imgs_html = soup.select('li > a.thumb > img')
url_html = soup.select('li > div > h4 > a')

titleArr2 = []    #주제
contentArr2 = [] #썸네일 내용
imgArr2 = []   #이미지 src
urlArr2 = []   #url
newsContent2 = []

#이미지 - url 길이 다름
#for i in range(len(titles_html)):
for i in range(10):
    titleArr2.append(titles_html[i].text)
    contentArr2.append(content_html[i].text)
    imgArr2.append(imgs_html[i]['src'])
    urlArr2.append('http://www.mediatoday.co.kr' + url_html[i]['href'])
    #print(contentArr2[i])

    news = Article(urlArr2[i], language='ko')
    news.download()
    news.parse()
    #print(news.text)
    newsContent2.append(news.text)

    #print(titleArr2[i])
    #print(imgArr2[i])
    #print(urlArr2[i])
    #print()

#for j in range(20):
#    news = Article(urlArr2[j], language='ko')
#    news.download()
#    news.parse()
    #print(news.text)
#    newsContent2.append(news.text)


