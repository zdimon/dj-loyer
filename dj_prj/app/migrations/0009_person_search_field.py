# Generated by Django 2.2 on 2019-05-07 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_person2document'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='search_field',
            field=models.TextField(blank=True, null=True),
        ),
    ]
