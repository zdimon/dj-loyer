from rest_framework import serializers
from app.models import MainDocuments

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainDocuments
        fields = ['title', 'id', 'date']