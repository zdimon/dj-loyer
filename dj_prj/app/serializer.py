from rest_framework import serializers
from app.models import MainDocuments, Person

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