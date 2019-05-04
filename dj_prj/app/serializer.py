from rest_framework import serializers
from app.models import MainDocuments, Person

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainDocuments
        fields = ['title', 'id', 'date']


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = [  'id',
                    'raw_name',
                    'first_name_ru',
                    'last_name_ru',
                    'surename_ru',
                    'first_name_kz',
                    'last_name_kz',
                    'surename_kz',
                    'first_name_lat',
                    'last_name_lat',
                    'surename_lat',
                    'role'
                
                  ]