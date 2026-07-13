from django.contrib import admin
from .models import Sale, SaleItem

@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    list_display = ('id', 'value', 'created_at', 'updated_at')
    search_fields = ('id',)
    list_filter = ('created_at', 'updated_at')

@admin.register(SaleItem)
class SaleItemAdmin(admin.ModelAdmin):
    list_display = ('sale', 'product', 'quantity', 'price')
    search_fields = ('sale__id', 'product__name')
    list_filter = ('sale__created_at', 'product')