from django.contrib import admin
from .models import MainDocuments, Person
# Register your models here.

class MainDocumentsAdmin(admin.ModelAdmin):
    list_display = ['title', 'date']
    search_fields = ['title']
    list_filter = ['date']

admin.site.register(MainDocuments, MainDocumentsAdmin)


class PersonAdmin(admin.ModelAdmin):
    list_display = ['name_ru', 'role']
    search_fields = ['name_ru']
    list_filter = ['role']


admin.site.register(Person, PersonAdmin)



