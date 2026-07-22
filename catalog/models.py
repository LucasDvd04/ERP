from django.db import models

# Create your models here.
class Product(models.Model):
    id_external = models.CharField(max_length=255, unique=True, null=True, blank=True)
    name_internal = models.CharField(max_length=255, unique=True)
    name_external = models.CharField(max_length=255, unique=True, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    sale_price_internal = models.DecimalField(max_digits=10, decimal_places=2)
    sale_price_external = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.name_internal
    