from django.core.management.base import BaseCommand, CommandError

from app.models import Person, MainDocuments
import re

class Command(BaseCommand):

    def handle(self, *args, **options):
        print('Parsing persons.')   
        print("Deleting all persons")
        Person.objects.all().delete()
        for md in MainDocuments.objects.all():
            
            match = re.search('Судья:(.*)',md.title)
            try:
                rezult = match.group(1)    
                p = Person()
                p.name_ru = rezult
                p.role = 'judge'
                p.save()
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
                            p.name_ru = nm
                            p.role = 'plantiff'
                            p.save()
                print("Saving ... %s" % rezult)
            except Exception as e:
                print(str(e))             


             