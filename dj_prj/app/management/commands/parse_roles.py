from django.core.management.base import BaseCommand, CommandError

from app.models import Person, MainDocuments, Person2Document, Role
import re

class Command(BaseCommand):

    def handle(self, *args, **options):
        print('Parsing roles.')   
        Role.objects.all().delete()
        for p in Person.objects.all():
            print(p)
            role = p.role.upper()
            try:
                rol = Role.objects.get(name_ru=role)
            except:
                rol = Role()
                rol.name_ru = role
                rol.name_kz = role
                rol.save()
            p.roleperson = rol
            p.save()