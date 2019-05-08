import psycopg2
import bs4
import requests
conn = psycopg2.connect(dbname='city', user='postgres', 
                        password='1q2w3e', host='localhost')

url = 'https://flagma.kz/kompanii-k-1.html'
with conn.cursor() as cursor:
        pass
rez = requests.get(url)
soup = bs4.BeautifulSoup(rez.text, 'html.parser')
items = soup.findAll('div',{"class": "page-list-item-info"})
for i in items:
    header = i.find('a').text
    print(header)
    location = i.find('span',{"itemprop": "location"}).text
    print(location)
    boss = i.find('span',{"itemprop": "employee"}).text
    print(boss)