from django.core.management.base import BaseCommand, CommandError

from app.models import Person, MainDocuments, Person2Document
import re
from django.core.paginator import Paginator

class Command(BaseCommand):

    def handle(self, *args, **options):
        print('Parsing persons.')   
        print("Deleting all persons")
        Person.objects.filter(source='zakon.kz').delete()
        Person2Document.objects.all().delete()
        paginator = Paginator(MainDocuments.objects.all().order_by('-id'), 1000)
        for page in range(1, paginator.num_pages + 1):
            for md in paginator.page(page).object_list:
                match = re.search('Судья:(.*)',md.title)
                try:
                    rezult = match.group(1)   
                    try:
                        exist = Person.objects.get(raw_name=rezult, source='zakon.kz')
                    except Exception as e: 
                        p = Person()
                        p.raw_name = rezult
                        p.role = 'СУДЬЯ'
                        p.source = 'zakon.kz'
                        p.save()
                        p.parse()
                        p2d = Person2Document()
                        p2d.person = p
                        p2d.document = md
                        p2d.save()
                        print("%s Судья ... %s" % (md.id, rezult))
                except Exception as e:
                    pass
                    #print(str(e))
                
                match = re.search(': (.*)Судья:',md.title)
                try:
                    rezult = match.group(1)   
                    for nm in rezult.split(','):
                        nm.replace('.','')
                        if len(nm)>2:
                            checking_words = nm.split(' ')
                            if len(checking_words)<5:
                                try:
                                    exist = Person.objects.get(raw_name=rezult, source='zakon.kz')
                                except Exception as e: 
                                    p = Person()
                                    p.raw_name = nm
                                    p.role = 'ОТВЕТЧИК'
                                    p.source = 'zakon.kz'
                                    p.save()
                                    p.parse()
                                    p2d = Person2Document()
                                    p2d.person = p
                                    p2d.document = md
                                    p2d.save()
                                    print("%s Истец ... %s" % (md.id,rezult))
                except Exception as e:
                    #print(str(e))             
                    pass


                    