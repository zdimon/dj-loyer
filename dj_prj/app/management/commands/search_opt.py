from django.core.management.base import BaseCommand, CommandError

from app.models import Person, MainDocuments, Person2Document
import re

class Command(BaseCommand):

    def handle(self, *args, **options):
        print('Search optimization.')   
        #Person.objects.all().delete()
        for md in MainDocuments.objects.all().order_by('-id'):
            md.search_opt()
            print("document  %s" % md.id)

        for md in Person.objects.all().order_by('-id'):
            md.search_opt()
            print("persom  %s" % md.id)