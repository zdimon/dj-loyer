from django.db import models
from slugify import slugify
# Create your models here.

class Region(models.Model):
    name_ru = models.CharField(max_length=250)
    name_kz = models.CharField(max_length=250)
    def __str__(self):
        return self.name_ru
    class Meta:
        verbose_name = 'Регион'
        verbose_name_plural = 'Регионы'

class City(models.Model):
    name_ru = models.CharField(max_length=250)
    name_kz = models.CharField(max_length=250)
    region = models.ForeignKey(Region,blank=True, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name_ru
    class Meta:
        verbose_name = 'Город'
        verbose_name_plural = 'Города'

class Court(models.Model):
    name_ru = models.CharField(max_length=250)
    name_kz = models.CharField(max_length=250)
    city = models.ForeignKey(City,blank=True, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name_ru
    class Meta:
        verbose_name = 'Суд'
        verbose_name_plural = 'Суды'

class Position(models.Model):
    name_ru = models.CharField(max_length=250)
    name_kz = models.CharField(max_length=250)
    def __str__(self):
        return self.name_ru
    class Meta:
        verbose_name = 'Должность'
        verbose_name_plural = 'Должностя'



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
        verbose_name = 'Судебное решение'
        verbose_name_plural = 'Судебные решения'

class Role(models.Model):
    name_ru = models.CharField(max_length=250)
    name_kz = models.CharField(max_length=250)
    def __str__(self):
        return self.name_ru
        
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
    search_field = models.TextField(blank=True, null=True, db_index=True)
    roleperson = court = models.ForeignKey(Role,blank=True, null=True, on_delete=models.SET_NULL)
    birth = models.DateField(blank=True, null=True)
    inn = models.CharField(max_length=12,blank=True, null=True)
    rnn = models.CharField(max_length=12,blank=True, null=True)
    court = models.ForeignKey(Court,blank=True, null=True, on_delete=models.SET_NULL)
    source = models.CharField(max_length=250,blank=True, null=True)

    @property
    def full_name_ru(self):
        return '%s %s %s' % (self.surname_ru,self.first_name_ru,self.last_name_ru)

    def __str__(self):
        return self.surname_ru


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
            self.first_name_lat = slugify(arr_name[1]).upper()
            self.last_name_lat = slugify(arr_name[2]).upper()
            self.surname_lat = slugify(arr_name[0]).upper()
            self.first_name_ru = arr_name[1].upper()
            self.last_name_ru = arr_name[2].upper()
            self.surname_ru = arr_name[0].upper()
            self.first_name_kz = arr_name[1].upper()
            self.last_name_kz = arr_name[2].upper()
            self.surname_kz = arr_name[0].upper()
            self.save()
        if len(arr_name)==2:
            self.first_name_lat = slugify(arr_name[1]).upper()
            self.surname_lat = slugify(arr_name[0]).upper()
            self.first_name_ru = arr_name[1].upper()
            self.surname_ru = arr_name[0].upper()
            self.first_name_kz = arr_name[1].upper()
            self.surname_kz = arr_name[0].upper()
            self.save()            
    class Meta:
        verbose_name = 'Физ. лицо'
        verbose_name_plural = 'Физ. лица' 

class Person2Document(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    document = models.ForeignKey(MainDocuments, on_delete=models.CASCADE)



class Company(models.Model):
    name_ru = models.CharField(max_length=250)
    name_kz = models.CharField(max_length=250)
    bin = models.CharField(max_length=12)
    city = models.ForeignKey(City,blank=True, null=True, on_delete=models.SET_NULL)
    faunders = models.ManyToManyField(Person,blank=True)
    city_text = models.CharField(max_length=250)
    faunders_text = models.CharField(max_length=250)
    
    def __str__(self):
        return self.name_ru
    class Meta:
        verbose_name = 'Компания'
        verbose_name_plural = 'Компании'

class Import(models.Model):
    url = models.CharField(max_length=250, db_index=True)
    def __str__(self):
        return self.url 

class Person2Company(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)