# Generated by Django 2.2 on 2019-05-07 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_auto_20190507_1106'),
    ]

    operations = [
        migrations.AddField(
            model_name='maindocuments',
            name='search_f',
            field=models.TextField(blank=True, null=True),
        ),
    ]