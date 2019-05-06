# Generated by Django 2.2 on 2019-05-06 14:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20190506_1403'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person2Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('document', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.MainDocuments')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Person')),
            ],
        ),
    ]
