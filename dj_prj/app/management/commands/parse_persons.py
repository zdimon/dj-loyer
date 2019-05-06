from django.core.management.base import BaseCommand, CommandError

from app.models import Person, MainDocuments, Person2Document
import re

class Command(BaseCommand):

    def handle(self, *args, **options):
        print('Parsing persons.')   
        print("Deleting all persons")
        Person.objects.all().delete()
        for md in MainDocuments.objects.all().order_by('-id'):
            
            match = re.search('Судья:(.*)',md.title)
            try:
                rezult = match.group(1)    
                p = Person()
                p.raw_name = rezult
                p.role = 'judge'
                p.save()
                p.parse()
                p2d = Person2Document()
                p2d.person = p
                p2d.document = md
                p2d.save()
                print("Saving ... %s" % rezult)
            except Exception as e:
                print(str(e))
            
            match = re.search('Ответчики по делу:(.*)Судья:',md.title)
            try:
                rezult = match.group(1)   
                for nm in rezult.split(','):
                    nm.replace('.','')
                    if len(nm)>2:
                        checking_words = nm.split(' ')
                        if len(checking_words)<5:
                            p = Person()
                            p.raw_name = nm
                            p.role = 'plantiff'
                            p.save()
                            p.parse()
                            p2d = Person2Document()
                            p2d.person = p
                            p2d.document = md
                            p2d.save()
                print("Saving ... %s" % rezult)
            except Exception as e:
                print(str(e))             


             