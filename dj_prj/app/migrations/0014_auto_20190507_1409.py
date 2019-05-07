# Generated by Django 2.2 on 2019-05-07 14:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_city_court_position'),
    ]

    operations = [
        migrations.AddField(
            model_name='court',
            name='city',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.City'),
        ),
        migrations.AddField(
            model_name='person',
            name='birth',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='person',
            name='court',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.Court'),
        ),
        migrations.AddField(
            model_name='person',
            name='inn',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
        migrations.AddField(
            model_name='person',
            name='rnn',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
    ]