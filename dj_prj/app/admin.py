from django.contrib import admin
from .models import *
# Register your models here.

class MainDocumentsAdmin(admin.ModelAdmin):
    list_display = ['title', 'date']
    search_fields = ['title']
    list_filter = ['date']

admin.site.register(MainDocuments, MainDocumentsAdmin)


class PersonAdmin(admin.ModelAdmin):
    list_display = ['raw_name', 'surname_lat', 'first_name_lat', 'last_name_lat', 'role']
    search_fields = ['raw_name']
    list_filter = ['role']


admin.site.register(Person, PersonAdmin)



class CourtAdmin(admin.ModelAdmin):
    pass

admin.site.register(Court, CourtAdmin)

class CityAdmin(admin.ModelAdmin):
    pass

admin.site.register(City, CityAdmin)

class PositionAdmin(admin.ModelAdmin):
    pass

admin.site.register(Position, PositionAdmin)