import psycopg2
conn = psycopg2.connect(dbname='city', user='postgres', 
                        password='1q2w3e', host='localhost')
cursor = conn.cursor()

conn2 = psycopg2.connect(dbname='dj-loyer', user='postgres', 
                        password='1q2w3e', host='localhost')
conn2.autocommit = True
cursor2 = conn2.cursor()


cursor.execute('SELECT * FROM region where country_id=81')
records = cursor.fetchall()
#print(records)
cnt = 0
for r in records:
    cnt += 1
    cursor2.execute("insert into app_region (name_ru, name_kz, id) values ('%s', '%s', %s)" % (r[2],r[2],cnt))
    print (r[0])
    cursor.execute('SELECT * FROM city where region_id=%s' % r[0])
    cities = cursor.fetchall()
    for c in cities:
        print(c)
        cursor2.execute("insert into app_city (name_ru, name_kz, region_id) values ('%s', '%s', %s)" % (c[2],c[2],cnt))

