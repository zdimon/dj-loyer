from django.db import models

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
