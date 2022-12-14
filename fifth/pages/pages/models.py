from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    message = models.TextField(max_length=1000)
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'


