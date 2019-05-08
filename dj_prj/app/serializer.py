from rest_framework import serializers
from app.models import MainDocuments, Person, Company, Person2Company




class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainDocuments
        fields = ['title', 'id', 'date', 'uid']


class PersonSerializer(serializers.ModelSerializer):
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
                    'role'
                
                  ]

class CompanySerializer(serializers.ModelSerializer):
    faunders = serializers.SerializerMethodField()
    #city = serializers.CharField(source='City.name_ru', read_only=True)

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
        fields = ['name_ru', 'city', 'faunders', 'bin', 'id']
        depth = 1