from django.contrib import admin
from .models import Recipe, RecipeItems

# Register your models here.

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('product', 'tot_cost')
    search_fields = ('product__name',)
    list_filter = ('product',)

@admin.register(RecipeItems)
class RecipeItemsAdmin(admin.ModelAdmin):
    list_display = ('recipe', 'material', 'quantity', 'cost')
    search_fields = ('recipe__product__name', 'material__name')
    list_filter = ('recipe', 'material')