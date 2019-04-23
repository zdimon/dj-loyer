from django.shortcuts import render
from rest_framework import viewsets
from app.models import MainDocuments
from app.serializer import DocumentSerializer

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = MainDocuments.objects.all()
    serializer_class = DocumentSerializer
