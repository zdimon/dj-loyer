from django.core.management.base import BaseCommand, CommandError

from app.models import Person, MainDocuments, Person2Document
import re

class Command(BaseCommand):

    def handle(self, *args, **options):
        print('fake base.')   
        #Person.objects.all().delete()
        for r in range(1,3000):
            print(r)
            for md in MainDocuments.objects.filter(pk__lt = 9281):
               md.pk = None
               md.save()
               #print(md.id)
        