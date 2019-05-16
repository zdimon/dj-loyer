from rest_framework import serializers
from app.models import MainDocuments, Person, Company, Person2Company, City, Role
from rest_framework_cache.registry import cache_registry

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['name_kz', 'name_ru', 'id']


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['name_kz', 'name_ru', 'id']


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainDocuments
        fields = ['title', 'id', 'date', 'uid']


class PersonSerializer(serializers.ModelSerializer):
    roleperson_id = serializers.IntegerField()
    class Meta:
        model = Person
        fields = [  'id',
                    'raw_name',
                    'first_name_ru',
                    'last_name_ru',
                    'surname_ru',
                    'first_name_kz',
                    'last_name_kz',
                    'surname_kz',
                    'first_name_lat',
                    'last_name_lat',
                    'surname_lat',
                    'role',
                    'birth',
                    'inn',
                    'rnn',
                    'roleperson',
                    'roleperson_id'
                  ]
        depth = 1

class CompanySerializer(serializers.ModelSerializer):
    faunders = serializers.SerializerMethodField()
    #city = serializers.CharField(source='City.name_ru', read_only=True)
    city_id = serializers.IntegerField(write_only=True) 
    def get_faunders(self, instance):
        names = []
        persons = Person2Company.objects.filter(company=instance)
        
        for p in persons:
            person = p.person
            names.append({
                'name': person.full_name_ru,
                'id': person.id
            })
        return names
    class Meta:
        model = Company
        fields = ['name_ru', 'name_kz', 'city', 'city_id', 'faunders', 'bin', 'id']
        depth = 1


cache_registry.register(RoleSerializer)
cache_registry.register(CitySerializer)
cache_registry.register(PersonSerializer)
cache_registry.register(CompanySerializer)