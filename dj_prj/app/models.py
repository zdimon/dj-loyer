from django.db import models
from slugify import slugify
# Create your models here.

class City(models.Model):
    name_ru = models.CharField(max_length=250)
    name_kz = models.CharField(max_length=250)

class Court(models.Model):
    name_ru = models.CharField(max_length=250)
    name_kz = models.CharField(max_length=250)
    city = models.ForeignKey(City,blank=True, null=True, on_delete=models.SET_NULL)

class Position(models.Model):
    name_ru = models.CharField(max_length=250)
    name_kz = models.CharField(max_length=250)

class MainDocuments(models.Model):
    uid = models.CharField(max_length=250)
    title = models.TextField(blank=True, null=True)
    href = models.CharField(max_length=250, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    is_error = models.BooleanField()
    is_file_downloaded = models.BooleanField()
    doc_html = models.TextField(blank=True, null=True)
    doc_txt = models.TextField(blank=True, null=True)
    is_document_downloaded = models.BooleanField()
    is_files_downloaded = models.BooleanField()
    search_field = models.TextField(blank=True, null=True) 
    
    def search_opt(self):
        self.search_field = "%s %s %s" % (
            self.uid, self.title, self.date
        )
        self.save()
    class Meta:
        db_table = 'main_documents'


class Person(models.Model):
    raw_name = models.CharField(max_length=250,blank=True, null=True)
    first_name_ru = models.CharField(max_length=250)
    last_name_ru = models.CharField(max_length=250)
    surname_ru = models.CharField(max_length=250)
    first_name_kz = models.CharField(max_length=250,blank=True, null=True)
    last_name_kz = models.CharField(max_length=250,blank=True, null=True)
    surname_kz = models.CharField(max_length=250,blank=True, null=True)
    first_name_lat = models.CharField(max_length=250,blank=True, null=True)
    last_name_lat = models.CharField(max_length=250,blank=True, null=True)
    surname_lat = models.CharField(max_length=250,blank=True, null=True)
    role = models.CharField(max_length=250,blank=True, null=True)
    search_field = models.TextField(blank=True, null=True)

    birth = models.DateField(blank=True, null=True)
    inn = models.CharField(max_length=12,blank=True, null=True)
    rnn = models.CharField(max_length=12,blank=True, null=True)
    court = models.ForeignKey(Court,blank=True, null=True, on_delete=models.SET_NULL)


    def search_opt(self):
        self.search_field = "%s %s %s %s %s %s %s %s %s" % (
            self.first_name_ru, 
            self.last_name_ru, 
            self.surname_ru,
            self.first_name_kz, 
            self.last_name_kz, 
            self.surname_kz,
            self.first_name_lat, 
            self.last_name_lat, 
            self.surname_lat
        )
        self.save()

    def parse(self):
        raw_name = self.raw_name
        raw_name = raw_name.replace('.','')
        raw_name = raw_name.strip()
        arr_name = raw_name.split(' ')
        if len(arr_name)==3:
            self.first_name_lat = slugify(arr_name[1])
            self.last_name_lat = slugify(arr_name[2])
            self.surname_lat = slugify(arr_name[0])
            self.first_name_ru = arr_name[1]
            self.last_name_ru = arr_name[2]
            self.surname_ru = arr_name[0] 
            self.first_name_kz = arr_name[1]
            self.last_name_kz = arr_name[2]
            self.surname_kz = arr_name[0]
            self.save()
    

class Person2Document(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    document = models.ForeignKey(MainDocuments, on_delete=models.CASCADE)


