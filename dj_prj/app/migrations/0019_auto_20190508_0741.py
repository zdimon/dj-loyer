# Generated by Django 2.2 on 2019-05-08 07:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0018_import'),
    ]

    operations = [
        migrations.RenameField(
            model_name='company',
            old_name='sity_text',
            new_name='city_text',
        ),
    ]