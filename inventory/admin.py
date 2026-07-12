from django.contrib import admin
from .models import Stock, InventoryTransaction

@admin.register(Stock)
class StockAdmin(admin.ModelAdmin):
    list_display = ('material', 'quantity', 'price')
    search_fields = ('material',)
    list_filter = ('quantity',)

@admin.register(InventoryTransaction)
class InventoryTransactionAdmin(admin.ModelAdmin):
    list_display = ('stock', 'transaction_type', 'quantity', 'transaction_date')
    search_fields = ('stock__name',)
    list_filter = ('transaction_type', 'transaction_date')