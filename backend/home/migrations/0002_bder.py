# Generated by Django 2.2.28 on 2023-07-24 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cmcm', models.BigIntegerField()),
                ('pmpm', models.BigIntegerField()),
            ],
        ),
    ]