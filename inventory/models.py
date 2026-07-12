from django.db import models
from materials.models import Material
# Create your models here.

class Stock(models.Model):
    material = models.ForeignKey(Material, on_delete=models.PROTECT, related_name='stocks')
    quantity = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class InventoryTransaction(models.Model):
    stock = models.ForeignKey(Stock, on_delete=models.PROTECT, related_name='transactions')
    transaction_type = models.CharField(max_length=10, choices=[('IN', 'In'), ('OUT', 'Out'), ('ADJUSTMENT', 'Adjustment')])
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.transaction_type} - {self.stock.name} - {self.quantity}"

    class Meta:
        ordering = ['-transaction_date']