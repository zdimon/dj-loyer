from django.core.management.base import BaseCommand, CommandError

from app.models import Person, MainDocuments, Person2Document, Role
import re
from .utils import ROLES
import sys

def findRole(str):
    #import pdb; pdb.set_trace()
    str = str.strip()
    #print("Search %s " % str)
    for k in ROLES:
        #print(k[list(k.keys())[0]])
        if str in k[list(k.keys())[0]]:
            #print("%s = %s" % (str, k))
            return list(k.keys())[0]
    return False
             

class Command(BaseCommand):

    def handle(self, *args, **options):
        print('Parsing roles.')   
        
        '''
        Role.objects.all().delete()
        for v in ROLES:
            print(list(v.keys())[0])
            rol = Role()
            rol.name_ru = list(v.keys())[0]
            rol.name_kz = list(v.keys())[0]
            rol.save()            
        '''
        
        

        for p in Person.objects.filter(roleperson_id=13476):
            print(p.role)
            role = p.role.upper()
            r = findRole(role)
            if not r:
                r = 'НЕОПРЕДЕЛЕНО'
            try:
                rol = Role.objects.get(name_ru=r)
            except:
                sys.exit(r)
            p.roleperson = rol
            p.save()
            print('Saving ... %s' % role)
            '''
            try:
                rol = Role.objects.get(name_ru=role)
            except:
                rol = Role()
                rol.name_ru = role
                rol.name_kz = role
                rol.save()
            p.roleperson = rol
            p.save()
            '''
        