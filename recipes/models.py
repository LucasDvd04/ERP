from django.db import models
from catalog.models import Product
from materials.models import Material

# Create your models here.

class Recipe(models.Model):
    product = models.ForeignKey(Product, on_delete=models.PROTECT, related_name='recipes')
    tot_cost = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Recipe for {self.product.name} - Total Cost: {self.tot_cost}"

class RecipeItems(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='items')
    material = models.ForeignKey(Material, on_delete=models.PROTECT)
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    cost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f"{self.quantity} of {self.material.name} for {self.recipe.product.name}"