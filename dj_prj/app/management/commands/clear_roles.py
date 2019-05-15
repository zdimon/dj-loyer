from django.core.management.base import BaseCommand, CommandError

from app.models import Person, MainDocuments, Person2Document, Role
import re

class Command(BaseCommand):

    def handle(self, *args, **options):
        print('fake base.')   
        #Person.objects.all().delete()
        c = 0
        for md in Role.objects.all():
            cnt = Person.objects.filter(roleperson=md).count()
            if cnt<=5:
                print(cnt)
                md.delete()
                c += 1
        print("done %s" % c)

        