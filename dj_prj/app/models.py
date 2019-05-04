from django.db import models
from slugify import slugify
# Create your models here.


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

    class Meta:
        managed = False
        db_table = 'main_documents'


class Person(models.Model):
    raw_name = models.CharField(max_length=250,blank=True, null=True)
    first_name_ru = models.CharField(max_length=250,blank=True, null=True)
    last_name_ru = models.CharField(max_length=250,blank=True, null=True)
    surename_ru = models.CharField(max_length=250,blank=True, null=True)
    first_name_kz = models.CharField(max_length=250,blank=True, null=True)
    last_name_kz = models.CharField(max_length=250,blank=True, null=True)
    surename_kz = models.CharField(max_length=250,blank=True, null=True)
    first_name_lat = models.CharField(max_length=250,blank=True, null=True)
    last_name_lat = models.CharField(max_length=250,blank=True, null=True)
    surename_lat = models.CharField(max_length=250,blank=True, null=True)
    role = models.CharField(max_length=250,blank=True, null=True)

    def parse(self):
        raw_name = self.raw_name
        raw_name = raw_name.replace('.','')
        raw_name = raw_name.strip()
        arr_name = raw_name.split(' ')
        if len(arr_name)==3:
            self.first_name_lat = slugify(arr_name[1])
            self.last_name_lat = slugify(arr_name[2])
            self.surename_lat = slugify(arr_name[0])
            self.first_name_ru = arr_name[1]
            self.last_name_ru = arr_name[2]
            self.surename_ru = arr_name[0] 
            self.first_name_kz = arr_name[1]
            self.last_name_kz = arr_name[2]
            self.surename_kz = arr_name[0]
            self.save()
    