from django.contrib import admin
from .models import MainDocuments
# Register your models here.

class MainDocumentsAdmin(admin.ModelAdmin):
    list_display = ['title', 'date']
    search_fields = ['title']

admin.site.register(MainDocuments, MainDocumentsAdmin)